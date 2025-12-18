import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = {
    username: 'CraftMaster',
    displayName: 'Мастер Крафта',
    prefix: 'Elite Developer',
    prefixColor: 'text-accent',
    balance: 1250.50,
    totalEarned: 5420.00,
    commission: 813.00,
    level: 15,
    experience: 7850,
    nextLevel: 10000
  };

  const notifications = [
    { id: 1, type: 'reply', title: 'Новый ответ в теме', content: 'ServerPro ответил в "Оптимизация сервера"', time: '5 мин назад', read: false },
    { id: 2, type: 'purchase', title: 'Покупка ресурса', content: 'Ваш плагин "Economy System" куплен', time: '2 часа назад', read: false },
    { id: 3, type: 'subscription', title: 'Новый подписчик', content: 'ModExpert подписался на вас', time: '1 день назад', read: true }
  ];

  const myResources = [
    { id: 1, title: 'Custom Economy Plugin', downloads: 1523, earnings: 2340.00, status: 'active' },
    { id: 2, title: 'Mini-Games Core', downloads: 892, earnings: 1450.50, status: 'active' }
  ];

  const orders = [
    { id: 1, service: 'Плагин', description: 'Система кланов', status: 'В работе', date: '15.12.2024' },
    { id: 2, service: 'Конфиг', description: 'Настройка WorldGuard', status: 'Завершён', date: '10.12.2024' }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-pixel text-primary terminal-glow mb-4">
              &gt; Личный кабинет_
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Icon name="User" className="text-accent" size={32} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-terminal">{user.displayName}</h2>
                  <Badge className={`${user.prefixColor} border-accent font-terminal`}>
                    {user.prefix}
                  </Badge>
                </div>
                <p className="text-muted-foreground font-terminal text-lg">@{user.username}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Баланс</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">{user.balance.toFixed(2)} ₽</div>
                <Button className="w-full mt-4 minecraft-btn font-terminal text-sm">
                  <Icon name="Plus" className="mr-2" size={16} />
                  Пополнить
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Заработано</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">{user.totalEarned.toFixed(2)} ₽</div>
                <p className="font-terminal text-sm text-muted-foreground mt-2">Комиссия: {user.commission.toFixed(2)} ₽</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Уровень</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">{user.level}</div>
                <div className="mt-2">
                  <div className="h-2 bg-secondary border border-primary overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all"
                      style={{ width: `${(user.experience / user.nextLevel) * 100}%` }}
                    />
                  </div>
                  <p className="font-terminal text-xs text-muted-foreground mt-1">
                    {user.experience} / {user.nextLevel} XP
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Уведомления</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">
                  {notifications.filter(n => !n.read).length}
                </div>
                <p className="font-terminal text-sm text-muted-foreground mt-2">непрочитанных</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="notifications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-secondary border-2 border-primary">
              <TabsTrigger value="notifications" className="font-terminal text-base">Уведомления</TabsTrigger>
              <TabsTrigger value="resources" className="font-terminal text-base">Мои ресурсы</TabsTrigger>
              <TabsTrigger value="orders" className="font-terminal text-base">Заказы</TabsTrigger>
              <TabsTrigger value="settings" className="font-terminal text-base">Настройки</TabsTrigger>
            </TabsList>

            <TabsContent value="notifications" className="space-y-4">
              {notifications.map(notif => (
                <Card key={notif.id} className={`bg-card border-2 ${notif.read ? 'border-border' : 'border-primary'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="font-terminal text-lg flex items-center gap-2">
                          <Icon name={notif.type === 'reply' ? 'MessageSquare' : notif.type === 'purchase' ? 'ShoppingCart' : 'UserPlus'} size={20} />
                          {notif.title}
                        </CardTitle>
                        <CardDescription className="font-terminal text-base mt-2">
                          {notif.content}
                        </CardDescription>
                      </div>
                      {!notif.read && (
                        <Badge className="bg-accent font-terminal">Новое</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm font-terminal text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      {notif.time}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              {myResources.map(resource => (
                <Card key={resource.id} className="bg-card border-2 border-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-pixel text-xl text-primary">{resource.title}</CardTitle>
                        <div className="flex gap-4 mt-2">
                          <div className="flex items-center gap-1 font-terminal text-sm">
                            <Icon name="Download" size={14} />
                            {resource.downloads}
                          </div>
                          <div className="flex items-center gap-1 font-terminal text-sm">
                            <Icon name="DollarSign" size={14} />
                            {resource.earnings.toFixed(2)} ₽
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-accent font-terminal">{resource.status === 'active' ? 'Активен' : 'На модерации'}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Link to={`/resources/${resource.id}`} className="flex-1">
                        <Button className="w-full minecraft-btn font-terminal">
                          <Icon name="Eye" className="mr-2" size={16} />
                          Просмотр
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-2 border-primary font-terminal">
                        <Icon name="Settings" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              {orders.map(order => (
                <Card key={order.id} className="bg-card border-2 border-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-terminal text-lg">{order.service}: {order.description}</CardTitle>
                        <CardDescription className="font-terminal text-base mt-2">
                          Дата заказа: {order.date}
                        </CardDescription>
                      </div>
                      <Badge className={order.status === 'Завершён' ? 'bg-accent' : 'bg-primary'}>
                        {order.status}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-pixel text-primary">Настройки профиля</CardTitle>
                  <CardDescription className="font-terminal text-lg">
                    Управление вашим аккаунтом
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full minecraft-btn font-terminal text-lg">
                    <Icon name="User" className="mr-2" size={20} />
                    Редактировать профиль
                  </Button>
                  <Button className="w-full minecraft-btn font-terminal text-lg">
                    <Icon name="Lock" className="mr-2" size={20} />
                    Изменить пароль
                  </Button>
                  <Button className="w-full minecraft-btn font-terminal text-lg">
                    <Icon name="Bell" className="mr-2" size={20} />
                    Настройки уведомлений
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
