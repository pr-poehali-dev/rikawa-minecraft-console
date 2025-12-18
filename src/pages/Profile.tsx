import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="bg-card border-2 border-primary mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Icon name="User" className="text-accent" size={48} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-terminal">Мастер Крафта</h1>
                    <Badge className="text-accent border-accent font-terminal">Elite Developer</Badge>
                  </div>
                  <p className="font-terminal text-lg text-muted-foreground mb-4">@CraftMaster</p>
                  <p className="font-terminal text-base mb-4">
                    Разработчик плагинов с 5-летним опытом. Специализируюсь на экономических системах и RPG механиках.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span className="font-terminal text-sm">На сайте с декабря 2019</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span className="font-terminal text-sm">Россия</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="minecraft-btn font-terminal">
                    <Icon name="UserPlus" className="mr-2" size={16} />
                    Подписаться
                  </Button>
                  <Button variant="outline" className="border-2 border-primary font-terminal">
                    <Icon name="MessageSquare" size={16} />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Ресурсов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">24</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Загрузок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">15.2K</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Подписчиков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">432</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-pixel text-sm text-primary">Рейтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-pixel text-accent terminal-glow">4.9</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="resources">
            <TabsList className="grid w-full grid-cols-3 bg-secondary border-2 border-primary">
              <TabsTrigger value="resources" className="font-terminal">Ресурсы</TabsTrigger>
              <TabsTrigger value="topics" className="font-terminal">Темы</TabsTrigger>
              <TabsTrigger value="activity" className="font-terminal">Активность</TabsTrigger>
            </TabsList>

            <TabsContent value="resources" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3].map(i => (
                  <Card key={i} className="bg-card border-2 border-primary">
                    <CardHeader>
                      <CardTitle className="font-pixel text-lg text-primary">Custom Economy Plugin</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-4 font-terminal text-sm">
                        <span className="flex items-center gap-1">
                          <Icon name="Download" size={14} />
                          1,523
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="text-accent" />
                          4.8
                        </span>
                      </div>
                      <Link to="/resources/1">
                        <Button className="w-full minecraft-btn font-terminal text-sm">
                          Подробнее
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="topics" className="mt-6">
              <div className="space-y-4">
                {[1, 2].map(i => (
                  <Card key={i} className="bg-card border-2 border-primary">
                    <CardHeader>
                      <Link to="/forum/1" className="hover:text-accent">
                        <CardTitle className="font-terminal text-lg">Оптимизация сервера для 200+ игроков</CardTitle>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 font-terminal text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="MessageSquare" size={14} />
                          45 ответов
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          1,523 просмотра
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="mt-6">
              <div className="space-y-4">
                {[
                  { action: 'Опубликовал ресурс', item: 'Economy System v2.0', time: '2 часа назад' },
                  { action: 'Ответил в теме', item: 'Настройка плагинов', time: '5 часов назад' },
                  { action: 'Обновил ресурс', item: 'Mini-Games Core', time: '1 день назад' }
                ].map((activity, i) => (
                  <Card key={i} className="bg-card border-2 border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Icon name="Activity" className="text-accent mt-1" size={20} />
                        <div className="flex-1">
                          <p className="font-terminal text-base">
                            <span className="text-accent">{activity.action}</span> "{activity.item}"
                          </p>
                          <p className="font-terminal text-sm text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
