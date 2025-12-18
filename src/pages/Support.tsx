import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Support = () => {
  const tickets = [
    { id: 1, subject: 'Проблема с оплатой', status: 'open', priority: 'high', created: '18.12.2024', replies: 3 },
    { id: 2, subject: 'Вопрос по функционалу', status: 'in_progress', priority: 'normal', created: '15.12.2024', replies: 5 },
    { id: 3, subject: 'Предложение по улучшению', status: 'closed', priority: 'low', created: '10.12.2024', replies: 2 }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; className: string }> = {
      open: { label: 'Открыт', className: 'bg-accent' },
      in_progress: { label: 'В работе', className: 'bg-primary' },
      closed: { label: 'Закрыт', className: 'bg-muted' }
    };
    const config = statusConfig[status];
    return <Badge className={`${config.className} font-terminal`}>{config.label}</Badge>;
  };

  const getPriorityIcon = (priority: string) => {
    const icons: Record<string, string> = {
      high: 'AlertCircle',
      normal: 'Info',
      low: 'Minus'
    };
    return icons[priority] || 'Info';
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-pixel text-primary terminal-glow mb-4">
                &gt; Поддержка_
              </h1>
              <p className="text-xl font-terminal text-muted-foreground">
                Создавайте тикеты и отслеживайте их статус
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="minecraft-btn font-terminal text-lg">
                  <Icon name="Plus" className="mr-2" size={20} />
                  Создать тикет
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-2 border-primary max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-pixel text-primary">Новый тикет</DialogTitle>
                  <DialogDescription className="font-terminal text-lg">
                    Опишите вашу проблему или вопрос
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Тема</Label>
                    <Input placeholder="Кратко опишите суть" className="bg-input border-primary mt-2 font-terminal text-lg" />
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Приоритет</Label>
                    <Select>
                      <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                        <SelectValue placeholder="Выберите приоритет" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary">
                        <SelectItem value="low" className="font-terminal text-lg">Низкий</SelectItem>
                        <SelectItem value="normal" className="font-terminal text-lg">Обычный</SelectItem>
                        <SelectItem value="high" className="font-terminal text-lg">Высокий</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Сообщение</Label>
                    <Textarea 
                      placeholder="Подробно опишите проблему..." 
                      className="bg-input border-primary mt-2 min-h-40 font-terminal text-lg"
                    />
                  </div>
                  <Button 
                    className="w-full minecraft-btn font-terminal text-lg"
                    onClick={() => toast.success('Тикет создан', {
                      className: 'font-terminal text-lg'
                    })}
                  >
                    Отправить
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {tickets.map((ticket, idx) => (
              <Card 
                key={ticket.id}
                className="bg-card border-2 border-primary hover:border-accent transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name={getPriorityIcon(ticket.priority)} className="text-accent" size={20} />
                        {getStatusBadge(ticket.status)}
                        <span className="font-terminal text-sm text-muted-foreground">
                          Тикет #{ticket.id}
                        </span>
                      </div>
                      <CardTitle className="font-pixel text-xl text-primary mb-2">
                        {ticket.subject}
                      </CardTitle>
                      <CardDescription className="font-terminal text-base">
                        Создан: {ticket.created}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 font-terminal text-sm">
                        <Icon name="MessageSquare" size={16} />
                        {ticket.replies} сообщений
                      </div>
                      <Button className="minecraft-btn font-terminal text-sm">
                        Открыть
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-2 border-primary mt-12">
            <CardHeader>
              <CardTitle className="font-pixel text-primary">&gt; FAQ</CardTitle>
              <CardDescription className="font-terminal text-lg">
                Часто задаваемые вопросы
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { q: 'Как пополнить баланс?', a: 'Перейдите в личный кабинет и нажмите кнопку "Пополнить"' },
                { q: 'Как опубликовать ресурс?', a: 'Зайдите в раздел "Ресурсы" и нажмите "Добавить ресурс"' },
                { q: 'Как получить префикс?', a: 'Префиксы выдаются автоматически за активность на сайте' }
              ].map((faq, i) => (
                <div key={i} className="border-l-2 border-primary pl-4">
                  <h4 className="font-terminal text-lg text-primary mb-2">{faq.q}</h4>
                  <p className="font-terminal text-base text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
