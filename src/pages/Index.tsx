import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    { icon: 'Code2', title: 'Плагины', description: 'Разработка серверных плагинов под задачи проекта' },
    { icon: 'Globe', title: 'Веб-сайты', description: 'Создание сайтов для Minecraft-проектов' },
    { icon: 'Wrench', title: 'Конфигурация', description: 'Настройка и оптимизация серверов' },
    { icon: 'Palette', title: 'Дизайн', description: 'Оформление сообществ и ресурсов' }
  ];

  const stats = [
    { label: 'Выполненных заказов', value: '47' },
    { label: 'Активных пользователей', value: '1,247' },
    { label: 'Ресурсов', value: '523' }
  ];

  const reviews = [
    { name: 'CraftMaster', prefix: 'Elite Dev', text: 'Отличная платформа! Быстро нашёл нужные ресурсы', rating: 5 },
    { name: 'ServerOwner', prefix: 'Pro User', text: 'Удобный форум и полезные инструменты', rating: 5 },
    { name: 'BuilderPro', prefix: 'Verified', text: 'Качественные плагины от сообщества', rating: 5 }
  ];

  return (
    <Layout>
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block px-6 py-2 bg-primary/20 border-2 border-primary mb-4">
              <span className="font-pixel text-accent text-sm md:text-base">
                &gt; SYSTEM_READY_
                <span className="animate-terminal-blink">█</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-pixel leading-tight terminal-glow">
              Платформа для Minecraft-проектов
            </h2>
            <p className="text-xl md:text-2xl font-terminal text-muted-foreground max-w-2xl mx-auto">
              Ресурсы, форум, инструменты и услуги — всё в одном месте
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/resources">
                <Button size="lg" className="minecraft-btn font-terminal text-xl px-8 py-6">
                  <Icon name="Package" className="mr-2" size={20} />
                  Ресурсы
                </Button>
              </Link>
              <Link to="/forum">
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 font-terminal text-xl px-8 py-6">
                  <Icon name="MessageSquare" className="mr-2" size={20} />
                  Форум
                </Button>
              </Link>
              <a href="https://vk.ru/rikawastudio" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 font-terminal text-xl px-8 py-6">
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  VK сообщество
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-y-2 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-5xl md:text-6xl font-pixel text-accent terminal-glow">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl font-terminal text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-pixel text-primary terminal-glow mb-4">
              &gt; Наши услуги
            </h3>
            <p className="text-xl font-terminal text-muted-foreground">
              Профессиональная разработка для серверов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="bg-card border-2 border-primary hover:border-accent transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 border-2 border-primary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon} className="text-accent animate-glow-pulse" size={32} />
                  </div>
                  <CardTitle className="font-pixel text-xl text-center text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-terminal text-lg text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-pixel text-primary terminal-glow mb-4">
              &gt; Возможности платформы
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Package', title: 'Ресурсы', desc: 'Плагины, моды, конфиги от сообщества', link: '/resources' },
              { icon: 'MessageSquare', title: 'Форум', desc: 'Обсуждения и помощь пользователей', link: '/forum' },
              { icon: 'Wrench', title: 'Инструменты', desc: 'Генераторы команд, градиентов, YAML', link: '/tools' },
              { icon: 'ShoppingBag', title: 'Магазин', desc: 'Платные ресурсы и улучшения', link: '/shop' },
              { icon: 'LifeBuoy', title: 'Поддержка', desc: 'Тикеты и помощь администрации', link: '/support' },
              { icon: 'Users', title: 'Сообщество', desc: 'Префиксы, подписки, рейтинги', link: '/dashboard' }
            ].map((feature, idx) => (
              <Link key={idx} to={feature.link}>
                <Card className="bg-card border-2 border-primary hover:border-accent transition-all hover:scale-105 animate-fade-in h-full" style={{ animationDelay: `${idx * 50}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                        <Icon name={feature.icon} className="text-accent" size={24} />
                      </div>
                      <div>
                        <CardTitle className="font-pixel text-lg text-primary">{feature.title}</CardTitle>
                        <CardDescription className="font-terminal text-base">{feature.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-pixel text-primary terminal-glow mb-4">
              &gt; Отзывы пользователей
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card 
                key={idx} 
                className="bg-card border-2 border-primary animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <Icon name="User" className="text-accent" size={20} />
                    </div>
                    <div>
                      <CardTitle className="font-terminal text-xl">{review.name}</CardTitle>
                      <Badge variant="outline" className="text-xs font-terminal mt-1">{review.prefix}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-terminal text-lg text-muted-foreground">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
