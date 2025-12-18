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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Resources = () => {
  const [category, setCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Custom Economy Plugin',
      author: 'CraftMaster',
      authorPrefix: 'Elite Dev',
      category: 'plugins',
      downloads: 1523,
      price: 0,
      rating: 4.8,
      trustScore: 95,
      versions: ['1.19', '1.20', '1.21'],
      description: 'Продвинутая экономическая система с магазинами',
      isVerified: true
    },
    {
      id: 2,
      title: 'Server Optimization Config',
      author: 'OptimizePro',
      authorPrefix: 'Pro User',
      category: 'configs',
      downloads: 892,
      price: 50,
      rating: 4.9,
      trustScore: 88,
      versions: ['1.20', '1.21'],
      description: 'Оптимизация для высокой производительности',
      isVerified: false
    },
    {
      id: 3,
      title: 'RPG Survival Modpack',
      author: 'ModExpert',
      authorPrefix: 'Verified Creator',
      category: 'mods',
      downloads: 2341,
      price: 0,
      rating: 4.7,
      trustScore: 92,
      versions: ['1.19', '1.20'],
      description: 'Полная сборка модов для RPG выживания',
      isVerified: true
    }
  ];

  const categories = [
    { value: 'all', label: 'Все ресурсы', icon: 'Layers' },
    { value: 'plugins', label: 'Плагины', icon: 'Code2' },
    { value: 'mods', label: 'Моды', icon: 'Blocks' },
    { value: 'configs', label: 'Конфиги', icon: 'FileCode' },
    { value: 'shaders', label: 'Шейдеры', icon: 'Sun' },
    { value: 'builds', label: 'Сборки', icon: 'Package' }
  ];

  const filteredResources = category === 'all' 
    ? resources 
    : resources.filter(r => r.category === category);

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-pixel text-primary terminal-glow mb-4">
                &gt; Ресурсы_
              </h1>
              <p className="text-xl font-terminal text-muted-foreground">
                Плагины, моды, конфиги и другие материалы от сообщества
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="minecraft-btn font-terminal text-lg">
                  <Icon name="Plus" className="mr-2" size={20} />
                  Добавить ресурс
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-2 border-primary max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-pixel text-primary">Новый ресурс</DialogTitle>
                  <DialogDescription className="font-terminal text-lg">
                    Опубликуйте свою работу для сообщества
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Название</Label>
                    <Input placeholder="Название ресурса" className="bg-input border-primary mt-2 font-terminal text-lg" />
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Категория</Label>
                    <Select>
                      <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary">
                        <SelectItem value="plugin" className="font-terminal text-lg">Плагин</SelectItem>
                        <SelectItem value="mod" className="font-terminal text-lg">Мод</SelectItem>
                        <SelectItem value="config" className="font-terminal text-lg">Конфиг</SelectItem>
                        <SelectItem value="shader" className="font-terminal text-lg">Шейдер</SelectItem>
                        <SelectItem value="build" className="font-terminal text-lg">Сборка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Версии Minecraft</Label>
                    <Input placeholder="1.19, 1.20, 1.21" className="bg-input border-primary mt-2 font-terminal text-lg" />
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Описание</Label>
                    <Textarea 
                      placeholder="Подробное описание..." 
                      className="bg-input border-primary mt-2 min-h-32 font-terminal text-lg"
                    />
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Цена (₽)</Label>
                    <Input type="number" placeholder="0 - бесплатно" className="bg-input border-primary mt-2 font-terminal text-lg" />
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Файл</Label>
                    <Input type="file" className="bg-input border-primary mt-2 font-terminal text-lg" />
                  </div>
                  <Button 
                    className="w-full minecraft-btn font-terminal text-lg"
                    onClick={() => toast.success('Ресурс отправлен на модерацию', {
                      className: 'font-terminal text-lg'
                    })}
                  >
                    Опубликовать
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs value={category} onValueChange={setCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-secondary border-2 border-primary">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.value} 
                  value={cat.value} 
                  className="font-terminal text-base md:text-lg"
                >
                  <Icon name={cat.icon} className="mr-2 hidden md:inline" size={16} />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, idx) => (
              <Card 
                key={resource.id}
                className="bg-card border-2 border-primary hover:border-accent transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary/20 text-primary border border-primary font-terminal">
                      {resource.category}
                    </Badge>
                    {resource.isVerified && (
                      <Icon name="BadgeCheck" className="text-accent" size={20} />
                    )}
                  </div>
                  <CardTitle className="font-pixel text-xl text-primary">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="font-terminal text-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={16} />
                      <span>{resource.author}</span>
                      <Badge variant="outline" className="text-xs font-terminal">{resource.authorPrefix}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Download" size={14} />
                        {resource.downloads}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="text-accent" />
                        {resource.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Shield" size={14} className="text-accent" />
                        {resource.trustScore}%
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-terminal text-base text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {resource.versions.map(v => (
                      <Badge key={v} variant="secondary" className="font-terminal text-xs">
                        v{v}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/resources/${resource.id}`} className="flex-1">
                      <Button className="w-full minecraft-btn font-terminal">
                        {resource.price === 0 ? (
                          <>
                            <Icon name="Download" className="mr-2" size={16} />
                            Скачать
                          </>
                        ) : (
                          <>
                            <Icon name="ShoppingCart" className="mr-2" size={16} />
                            {resource.price} ₽
                          </>
                        )}
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="border-2 border-primary">
                      <Icon name="Bookmark" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Search" className="mx-auto mb-4 text-muted-foreground" size={64} />
              <p className="text-2xl font-terminal text-muted-foreground">
                Ресурсы не найдены
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
