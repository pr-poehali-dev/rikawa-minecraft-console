import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const TopicDetail = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-card border-2 border-primary mb-6">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary/20 text-primary border border-primary font-terminal">Помощь</Badge>
                <Badge variant="outline" className="font-terminal">12 ответов</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-pixel text-primary terminal-glow mb-4">
                Как правильно настроить LuckPerms?
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Icon name="User" className="text-accent" size={24} />
                </div>
                <div>
                  <Link to="/profile/newbieadmin" className="font-terminal text-lg hover:text-accent flex items-center gap-2">
                    NewbieAdmin
                    <Badge variant="outline" className="text-xs font-terminal">Новичок</Badge>
                  </Link>
                  <p className="font-terminal text-sm text-muted-foreground">5 минут назад</p>
                </div>
              </div>
              <div className="font-terminal text-lg leading-relaxed">
                Здравствуйте! Установил LuckPerms на сервер, но не понимаю как настроить права для групп. 
                Нужна помощь с базовой конфигурацией. Версия 1.20.1, Paper.
              </div>
            </div>
          </Card>

          <div className="space-y-4 mb-6">
            {[1, 2].map(i => (
              <Card key={i} className="bg-card border-2 border-border">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <Icon name="User" className="text-accent" size={20} />
                    </div>
                    <div>
                      <Link to="/profile/serverpro" className="font-terminal text-base hover:text-accent flex items-center gap-2">
                        ServerPro
                        <Badge variant="outline" className="text-xs font-terminal">Эксперт</Badge>
                      </Link>
                      <p className="font-terminal text-sm text-muted-foreground">3 минуты назад</p>
                    </div>
                  </div>
                  <div className="font-terminal text-base leading-relaxed">
                    Используйте команды: <code className="bg-input px-2 py-1 text-accent">/lp creategroup admin</code> для создания группы.
                    Затем добавьте права через <code className="bg-input px-2 py-1 text-accent">/lp group admin permission set *</code>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-2 border-primary">
            <div className="p-6">
              <h3 className="font-pixel text-xl text-primary mb-4">&gt; Ваш ответ</h3>
              <Textarea 
                placeholder="Напишите ваш ответ..."
                className="bg-input border-primary min-h-32 font-terminal text-lg mb-4"
              />
              <Button className="minecraft-btn font-terminal text-lg">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default TopicDetail;
