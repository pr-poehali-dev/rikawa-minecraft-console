import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Forum = () => {
  const topics = [
    {
      id: 1,
      title: 'Как правильно настроить LuckPerms?',
      author: 'NewbieAdmin',
      authorPrefix: 'Новичок',
      category: 'Помощь',
      replies: 12,
      views: 234,
      lastReply: '5 минут назад',
      isPinned: false,
      isLocked: false
    },
    {
      id: 2,
      title: 'Оптимизация сервера для 200+ игроков',
      author: 'ServerPro',
      authorPrefix: 'Эксперт',
      category: 'Обсуждения',
      replies: 45,
      views: 1523,
      lastReply: '2 часа назад',
      isPinned: true,
      isLocked: false
    },
    {
      id: 3,
      title: 'Поиск разработчика плагинов',
      author: 'ProjectOwner',
      authorPrefix: 'Владелец',
      category: 'Работа',
      replies: 8,
      views: 456,
      lastReply: '1 день назад',
      isPinned: false,
      isLocked: false
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-pixel text-primary terminal-glow mb-4">
                &gt; Форум_
              </h1>
              <p className="text-xl font-terminal text-muted-foreground">
                Обсуждения, вопросы и помощь сообщества
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="minecraft-btn font-terminal text-lg">
                  <Icon name="Plus" className="mr-2" size={20} />
                  Создать тему
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-2 border-primary max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-pixel text-primary">Новая тема</DialogTitle>
                  <DialogDescription className="font-terminal text-lg">
                    Задайте вопрос или начните обсуждение
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Заголовок</Label>
                    <Input placeholder="О чём тема?" className="bg-input border-primary mt-2 font-terminal text-lg" />
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Категория</Label>
                    <Select>
                      <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary">
                        <SelectItem value="help" className="font-terminal text-lg">Помощь</SelectItem>
                        <SelectItem value="discussion" className="font-terminal text-lg">Обсуждения</SelectItem>
                        <SelectItem value="work" className="font-terminal text-lg">Работа</SelectItem>
                        <SelectItem value="news" className="font-terminal text-lg">Новости</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Сообщение</Label>
                    <Textarea 
                      placeholder="Подробно опишите..." 
                      className="bg-input border-primary mt-2 min-h-40 font-terminal text-lg"
                    />
                  </div>
                  <Button 
                    className="w-full minecraft-btn font-terminal text-lg"
                    onClick={() => toast.success('Тема создана', {
                      className: 'font-terminal text-lg'
                    })}
                  >
                    Создать тему
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-lg text-primary flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Пользователи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-pixel text-accent terminal-glow">1,247</div>
                <p className="font-terminal text-sm text-muted-foreground">всего участников</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-lg text-primary flex items-center gap-2">
                  <Icon name="MessageSquare" size={20} />
                  Темы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-pixel text-accent terminal-glow">523</div>
                <p className="font-terminal text-sm text-muted-foreground">всего тем</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-lg text-primary flex items-center gap-2">
                  <Icon name="Activity" size={20} />
                  Онлайн
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-pixel text-accent terminal-glow">34</div>
                <p className="font-terminal text-sm text-muted-foreground">сейчас на сайте</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-lg text-primary flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-pixel text-accent terminal-glow">89</div>
                <p className="font-terminal text-sm text-muted-foreground">сообщений за день</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {topics.map((topic, idx) => (
              <Card 
                key={topic.id}
                className="bg-card border-2 border-primary hover:border-accent transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {topic.isPinned && (
                          <Icon name="Pin" className="text-accent" size={16} />
                        )}
                        {topic.isLocked && (
                          <Icon name="Lock" className="text-muted-foreground" size={16} />
                        )}
                        <Badge className="bg-primary/20 text-primary border border-primary font-terminal">
                          {topic.category}
                        </Badge>
                      </div>
                      <Link to={`/forum/${topic.id}`}>
                        <CardTitle className="font-pixel text-xl text-primary hover:text-accent transition-colors mb-2">
                          {topic.title}
                        </CardTitle>
                      </Link>
                      <CardDescription className="font-terminal text-lg">
                        <div className="flex items-center gap-2">
                          <Icon name="User" size={16} />
                          <span>{topic.author}</span>
                          <Badge variant="outline" className="text-xs font-terminal">{topic.authorPrefix}</Badge>
                        </div>
                      </CardDescription>
                    </div>
                    <div className="flex md:flex-col gap-4 md:gap-2 text-center">
                      <div>
                        <div className="text-2xl font-pixel text-accent">{topic.replies}</div>
                        <div className="text-xs font-terminal text-muted-foreground">ответов</div>
                      </div>
                      <div>
                        <div className="text-2xl font-pixel text-accent">{topic.views}</div>
                        <div className="text-xs font-terminal text-muted-foreground">просмотров</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-terminal text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    Последний ответ: {topic.lastReply}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Forum;
