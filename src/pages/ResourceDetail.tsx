import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ResourceDetail = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="bg-card border-2 border-primary">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <Badge className="bg-primary/20 text-primary border border-primary font-terminal mb-4">
                    Плагин
                  </Badge>
                  <CardTitle className="text-4xl font-pixel text-primary terminal-glow mb-4">
                    Custom Economy Plugin
                  </CardTitle>
                  <CardDescription className="font-terminal text-xl">
                    Продвинутая экономическая система для серверов
                  </CardDescription>
                </div>
                <Icon name="BadgeCheck" className="text-accent" size={32} />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 font-terminal text-lg">
                  <Icon name="User" size={20} />
                  <Link to="/profile/craftmaster" className="hover:text-accent">CraftMaster</Link>
                  <Badge variant="outline" className="font-terminal">Elite Dev</Badge>
                </div>
                <div className="flex items-center gap-2 font-terminal text-lg">
                  <Icon name="Download" size={20} />
                  1,523 загрузок
                </div>
                <div className="flex items-center gap-2 font-terminal text-lg">
                  <Icon name="Star" size={20} className="text-accent" />
                  4.8 / 5.0
                </div>
                <div className="flex items-center gap-2 font-terminal text-lg">
                  <Icon name="Shield" size={20} className="text-accent" />
                  95% доверие
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="minecraft-btn font-terminal text-lg h-14">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать бесплатно
                </Button>
                <Button variant="outline" className="border-2 border-primary font-terminal text-lg h-14">
                  <Icon name="Bookmark" className="mr-2" size={20} />
                  В закладки
                </Button>
                <Button variant="outline" className="border-2 border-primary font-terminal text-lg h-14">
                  <Icon name="Flag" className="mr-2" size={20} />
                  Пожаловаться
                </Button>
              </div>

              <div>
                <h3 className="font-pixel text-2xl text-primary mb-4">&gt; Описание</h3>
                <p className="font-terminal text-lg leading-relaxed">
                  Полнофункциональная экономическая система с поддержкой магазинов, аукционов и банковских счетов. 
                  Плагин оптимизирован для работы с большим количеством игроков и поддерживает все современные версии Minecraft.
                </p>
              </div>

              <div>
                <h3 className="font-pixel text-2xl text-primary mb-4">&gt; Поддерживаемые версии</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-terminal text-base px-4 py-2">v1.19</Badge>
                  <Badge variant="secondary" className="font-terminal text-base px-4 py-2">v1.20</Badge>
                  <Badge variant="secondary" className="font-terminal text-base px-4 py-2">v1.21</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-pixel text-2xl text-primary mb-4">&gt; Теги</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary font-terminal">экономика</Badge>
                  <Badge className="bg-primary/20 text-primary font-terminal">магазин</Badge>
                  <Badge className="bg-primary/20 text-primary font-terminal">деньги</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ResourceDetail;
