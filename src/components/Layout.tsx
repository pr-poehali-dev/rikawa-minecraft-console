import { ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import Icon from './ui/icon';
import { Badge } from './ui/badge';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('ru');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/resources?search=${searchQuery}`);
    }
  };

  const languages = {
    ru: 'Русский',
    ua: 'Українська',
    en: 'English'
  };

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      home: { ru: 'Главная', ua: 'Головна', en: 'Home' },
      resources: { ru: 'Ресурсы', ua: 'Ресурси', en: 'Resources' },
      forum: { ru: 'Форум', ua: 'Форум', en: 'Forum' },
      tools: { ru: 'Инструменты', ua: 'Інструменти', en: 'Tools' },
      shop: { ru: 'Магазин', ua: 'Магазин', en: 'Shop' },
      support: { ru: 'Поддержка', ua: 'Підтримка', en: 'Support' },
      login: { ru: 'Войти', ua: 'Увійти', en: 'Login' },
      search: { ru: 'Поиск...', ua: 'Пошук...', en: 'Search...' }
    };
    return translations[key]?.[language] || key;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b-2 border-primary bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="text-2xl md:text-3xl font-pixel text-primary terminal-glow flex items-center gap-2">
              <Icon name="Box" className="animate-glow-pulse" size={32} />
              RikawaStudio
            </Link>

            <form onSubmit={handleSearch} className="flex-1 max-w-md w-full">
              <div className="relative">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('search')}
                  className="bg-input border-primary font-terminal text-lg pl-10"
                />
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </form>

            <nav className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
              <Link to="/" className="text-sm md:text-base hover:text-accent transition-colors font-terminal">
                {t('home')}
              </Link>
              <Link to="/resources" className="text-sm md:text-base hover:text-accent transition-colors font-terminal">
                {t('resources')}
              </Link>
              <Link to="/forum" className="text-sm md:text-base hover:text-accent transition-colors font-terminal">
                {t('forum')}
              </Link>
              <Link to="/tools" className="text-sm md:text-base hover:text-accent transition-colors font-terminal">
                {t('tools')}
              </Link>
              <Link to="/shop" className="text-sm md:text-base hover:text-accent transition-colors font-terminal">
                {t('shop')}
              </Link>
              <Link to="/support" className="text-sm md:text-base hover:text-accent transition-colors font-terminal">
                {t('support')}
              </Link>

              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32 bg-input border-primary font-terminal text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary">
                  {Object.entries(languages).map(([code, name]) => (
                    <SelectItem key={code} value={code} className="font-terminal text-base">
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="minecraft-btn text-sm md:text-base font-pixel">
                <Icon name="User" className="mr-2" size={16} />
                {t('login')}
              </Button>

              <Link to="/dashboard">
                <Button variant="ghost" size="icon" className="relative">
                  <Icon name="Bell" size={20} />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-xs">
                    3
                  </Badge>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t-2 border-primary bg-card py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-pixel text-primary mb-4">RikawaStudio</h3>
              <p className="font-terminal text-lg text-muted-foreground">
                Платформа для Minecraft-проектов
              </p>
            </div>
            <div>
              <h4 className="font-pixel text-sm text-primary mb-4">Навигация</h4>
              <div className="space-y-2">
                <Link to="/resources" className="block font-terminal text-lg hover:text-accent">Ресурсы</Link>
                <Link to="/forum" className="block font-terminal text-lg hover:text-accent">Форум</Link>
                <Link to="/tools" className="block font-terminal text-lg hover:text-accent">Инструменты</Link>
              </div>
            </div>
            <div>
              <h4 className="font-pixel text-sm text-primary mb-4">Помощь</h4>
              <div className="space-y-2">
                <Link to="/support" className="block font-terminal text-lg hover:text-accent">Поддержка</Link>
                <a href="#" className="block font-terminal text-lg hover:text-accent">Гайды</a>
                <a href="#" className="block font-terminal text-lg hover:text-accent">FAQ</a>
              </div>
            </div>
            <div>
              <h4 className="font-pixel text-sm text-primary mb-4">Сообщество</h4>
              <a href="https://vk.ru/rikawastudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-primary transition-colors font-terminal text-lg">
                <Icon name="ExternalLink" size={20} />
                vk.ru/rikawastudio
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="font-terminal text-lg text-muted-foreground">
              © 2024 RikawaStudio. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
