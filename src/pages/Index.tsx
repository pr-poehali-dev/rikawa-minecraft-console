import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [gradientText, setGradientText] = useState('RikawaStudio');
  const [gradientColors, setGradientColors] = useState(['#10b981', '#4ade80']);
  const [commandType, setCommandType] = useState('luckperms');

  const generateGradient = () => {
    const colorCodes = gradientColors.map(c => c.replace('#', '&x'));
    return `Gradient: ${colorCodes.join(' → ')} "${gradientText}"`;
  };

  const generateCommand = () => {
    const commands: Record<string, string> = {
      luckperms: '/lp user <игрок> permission set <право>',
      essentials: '/give <игрок> <предмет> <количество>',
      worldedit: '//set <блок>',
      worldguard: '/rg define <регион>'
    };
    return commands[commandType] || '';
  };

  const services = [
    {
      icon: 'Code2',
      title: 'Плагины',
      description: 'Разработка серверных плагинов под задачи проекта'
    },
    {
      icon: 'Globe',
      title: 'Веб-сайты',
      description: 'Создание сайтов для Minecraft-проектов'
    },
    {
      icon: 'Wrench',
      title: 'Конфигурация',
      description: 'Настройка и оптимизация серверов'
    },
    {
      icon: 'Palette',
      title: 'Дизайн',
      description: 'Оформление сообществ и ресурсов'
    }
  ];

  const stats = [
    { label: 'Выполненных заказов', value: '47' },
    { label: 'Активных проектов', value: '12' },
    { label: 'Довольных клиентов', value: '35' }
  ];

  const reviews = [
    { name: 'CraftMaster', text: 'Отличная работа над плагином! Всё работает идеально', rating: 5 },
    { name: 'ServerOwner', text: 'Быстро и качественно настроили сервер', rating: 5 },
    { name: 'BuilderPro', text: 'Сайт получился именно таким, как хотели', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b-2 border-primary bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-pixel text-primary terminal-glow">
            RikawaStudio
          </h1>
          <nav className="flex gap-4 items-center">
            <a href="#services" className="text-sm md:text-base hover:text-accent transition-colors">
              Услуги
            </a>
            <a href="#generators" className="text-sm md:text-base hover:text-accent transition-colors">
              Генераторы
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="minecraft-btn text-sm md:text-base font-pixel">
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-2 border-primary">
                <DialogHeader>
                  <DialogTitle className="font-pixel text-primary">Вход в систему</DialogTitle>
                  <DialogDescription className="font-terminal text-lg">
                    Войдите для доступа к панели управления
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login">
                  <TabsList className="grid w-full grid-cols-2 bg-secondary">
                    <TabsTrigger value="login" className="font-terminal text-base">Вход</TabsTrigger>
                    <TabsTrigger value="register" className="font-terminal text-base">Регистрация</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="space-y-4">
                    <div>
                      <Label className="font-terminal text-lg">Логин</Label>
                      <Input placeholder="Введите логин" className="bg-input border-primary mt-2 font-terminal text-lg" />
                    </div>
                    <div>
                      <Label className="font-terminal text-lg">Пароль</Label>
                      <Input type="password" placeholder="Введите пароль" className="bg-input border-primary mt-2 font-terminal text-lg" />
                    </div>
                    <Button className="w-full minecraft-btn font-terminal text-lg">Войти</Button>
                  </TabsContent>
                  <TabsContent value="register" className="space-y-4">
                    <div>
                      <Label className="font-terminal text-lg">Логин</Label>
                      <Input placeholder="Придумайте логин" className="bg-input border-primary mt-2 font-terminal text-lg" />
                    </div>
                    <div>
                      <Label className="font-terminal text-lg">Отображаемое имя</Label>
                      <Input placeholder="Как вас называть?" className="bg-input border-primary mt-2 font-terminal text-lg" />
                    </div>
                    <div>
                      <Label className="font-terminal text-lg">Пароль</Label>
                      <Input type="password" placeholder="Придумайте пароль" className="bg-input border-primary mt-2 font-terminal text-lg" />
                    </div>
                    <Button className="w-full minecraft-btn font-terminal text-lg">Создать аккаунт</Button>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      {/* Hero */}
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
              Цифровая студия для Minecraft-проектов
            </h2>
            <p className="text-xl md:text-2xl font-terminal text-muted-foreground max-w-2xl mx-auto">
              Создаём системы и инструменты. Не шаблоны — архитектуру. Не услуги — живые механизмы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="minecraft-btn font-terminal text-xl px-8 py-6">
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Заказать проект
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-2 border-primary max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-pixel text-primary">Новый заказ</DialogTitle>
                    <DialogDescription className="font-terminal text-lg">
                      Опишите что вам нужно
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="font-terminal text-lg">Тип услуги</Label>
                      <Select>
                        <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-primary">
                          <SelectItem value="plugin" className="font-terminal text-lg">Плагин</SelectItem>
                          <SelectItem value="website" className="font-terminal text-lg">Веб-сайт</SelectItem>
                          <SelectItem value="config" className="font-terminal text-lg">Конфигурация</SelectItem>
                          <SelectItem value="design" className="font-terminal text-lg">Дизайн</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="font-terminal text-lg">Описание проекта</Label>
                      <Textarea 
                        placeholder="Опишите ваши пожелания..." 
                        className="bg-input border-primary mt-2 min-h-32 font-terminal text-lg"
                      />
                    </div>
                    <div>
                      <Label className="font-terminal text-lg">Способ связи</Label>
                      <Select>
                        <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                          <SelectValue placeholder="Как с вами связаться?" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-primary">
                          <SelectItem value="vk" className="font-terminal text-lg">VK</SelectItem>
                          <SelectItem value="telegram" className="font-terminal text-lg">Telegram</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="font-terminal text-lg">Контакт</Label>
                      <Input 
                        placeholder="Ваш @никнейм" 
                        className="bg-input border-primary mt-2 font-terminal text-lg"
                      />
                    </div>
                    <Button 
                      className="w-full minecraft-btn font-terminal text-lg"
                      onClick={() => toast.success('Заказ отправлен! Скоро свяжемся с вами', {
                        className: 'font-terminal text-lg'
                      })}
                    >
                      Отправить заказ
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <a href="https://vk.ru/rikawastudio" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 font-terminal text-xl px-8 py-6">
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Наше сообщество VK
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Services */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-pixel text-primary terminal-glow mb-4">
              &gt; Направления студии
            </h3>
            <p className="text-xl font-terminal text-muted-foreground">
              Каждое решение — часть единой системы
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

      {/* Generators */}
      <section id="generators" className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-pixel text-primary terminal-glow mb-4">
              &gt; Генераторы инструментов
            </h3>
            <p className="text-xl font-terminal text-muted-foreground">
              Практические инструменты для администраторов
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="gradient" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 bg-secondary border-2 border-primary">
                <TabsTrigger value="gradient" className="font-terminal text-lg">Градиенты</TabsTrigger>
                <TabsTrigger value="commands" className="font-terminal text-lg">Команды</TabsTrigger>
              </TabsList>
              
              <TabsContent value="gradient" className="space-y-6">
                <Card className="bg-card border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="font-pixel text-primary">Генератор градиентов</CardTitle>
                    <CardDescription className="font-terminal text-lg">
                      Создайте цветной градиент для текста
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="font-terminal text-lg">Текст</Label>
                      <Input 
                        value={gradientText}
                        onChange={(e) => setGradientText(e.target.value)}
                        className="bg-input border-primary mt-2 font-terminal text-lg"
                        placeholder="Введите текст"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="font-terminal text-lg">Цвет 1</Label>
                        <Input 
                          type="color"
                          value={gradientColors[0]}
                          onChange={(e) => setGradientColors([e.target.value, gradientColors[1]])}
                          className="bg-input border-primary mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label className="font-terminal text-lg">Цвет 2</Label>
                        <Input 
                          type="color"
                          value={gradientColors[1]}
                          onChange={(e) => setGradientColors([gradientColors[0], e.target.value])}
                          className="bg-input border-primary mt-2 h-12"
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-secondary border-2 border-primary overflow-hidden">
                      <p className="font-terminal text-lg text-muted-foreground mb-2">Предпросмотр:</p>
                      <div 
                        className="text-2xl font-bold truncate"
                        style={{
                          background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {gradientText}
                      </div>
                    </div>
                    <div className="p-4 bg-input border-2 border-primary font-mono text-sm overflow-x-auto">
                      <code className="text-accent">{generateGradient()}</code>
                    </div>
                    <Button 
                      className="w-full minecraft-btn font-terminal text-lg"
                      onClick={() => {
                        navigator.clipboard.writeText(generateGradient());
                        toast.success('Скопировано в буфер обмена', {
                          className: 'font-terminal text-lg'
                        });
                      }}
                    >
                      <Icon name="Copy" className="mr-2" size={20} />
                      Скопировать
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="commands" className="space-y-6">
                <Card className="bg-card border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="font-pixel text-primary">Генератор команд</CardTitle>
                    <CardDescription className="font-terminal text-lg">
                      Шаблоны популярных серверных команд
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="font-terminal text-lg">Тип команды</Label>
                      <Select value={commandType} onValueChange={setCommandType}>
                        <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-primary">
                          <SelectItem value="luckperms" className="font-terminal text-lg">LuckPerms</SelectItem>
                          <SelectItem value="essentials" className="font-terminal text-lg">Essentials</SelectItem>
                          <SelectItem value="worldedit" className="font-terminal text-lg">WorldEdit</SelectItem>
                          <SelectItem value="worldguard" className="font-terminal text-lg">WorldGuard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="p-4 bg-input border-2 border-primary font-mono overflow-x-auto">
                      <code className="text-accent text-lg">{generateCommand()}</code>
                    </div>
                    <Button 
                      className="w-full minecraft-btn font-terminal text-lg"
                      onClick={() => {
                        navigator.clipboard.writeText(generateCommand());
                        toast.success('Команда скопирована', {
                          className: 'font-terminal text-lg'
                        });
                      }}
                    >
                      <Icon name="Copy" className="mr-2" size={20} />
                      Скопировать команду
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-pixel text-primary terminal-glow mb-4">
              &gt; Отзывы клиентов
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
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-accent" size={16} />
                        ))}
                      </div>
                    </div>
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

      {/* Footer */}
      <footer className="border-t-2 border-primary bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-pixel text-primary terminal-glow">
              RikawaStudio
            </div>
            <div className="font-terminal text-lg text-muted-foreground">
              © 2024 Все права защищены
            </div>
            <a 
              href="https://vk.ru/rikawastudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-primary transition-colors font-terminal text-lg"
            >
              <Icon name="ExternalLink" size={20} />
              vk.ru/rikawastudio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
