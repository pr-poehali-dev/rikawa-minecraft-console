import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = [
    { id: 1, title: 'Premium Префикс', price: 299, description: 'Уникальный префикс с градиентом', icon: 'Crown' },
    { id: 2, title: 'Подсветка профиля', price: 149, description: 'Анимированная рамка профиля', icon: 'Sparkles' },
    { id: 3, title: 'Расширенная статистика', price: 199, description: 'Детальная аналитика ресурсов', icon: 'BarChart3' }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-pixel text-primary terminal-glow mb-4">
              &gt; Магазин_
            </h1>
            <p className="text-xl font-terminal text-muted-foreground">
              Улучшения и дополнительные возможности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Card 
                key={product.id}
                className="bg-card border-2 border-primary hover:border-accent transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 border-2 border-primary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={product.icon} className="text-accent animate-glow-pulse" size={32} />
                  </div>
                  <CardTitle className="font-pixel text-xl text-center text-primary">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="font-terminal text-lg text-center">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-pixel text-accent terminal-glow">
                      {product.price} ₽
                    </div>
                  </div>
                  <Button className="w-full minecraft-btn font-terminal text-lg">
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
