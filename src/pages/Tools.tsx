import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Tools = () => {
  const [gradientText, setGradientText] = useState('RikawaStudio');
  const [gradientColors, setGradientColors] = useState(['#a855f7', '#c084fc']);
  const [commandType, setCommandType] = useState('luckperms');
  const [base64Input, setBase64Input] = useState('');
  const [base64Output, setBase64Output] = useState('');
  const [yamlInput, setYamlInput] = useState('');
  const [utf8Input, setUtf8Input] = useState('');

  const generateGradient = () => {
    return `&x${gradientColors[0].replace('#', '')}&x${gradientColors[1].replace('#', '')} ${gradientText}`;
  };

  const generateCommand = () => {
    const commands: Record<string, string> = {
      luckperms: '/lp user <игрок> permission set <право>',
      essentials: '/give <игрок> <предмет> <количество>',
      worldedit: '//set <блок>',
      worldguard: '/rg define <регион>',
      vault: '/vault-convert <from> <to>'
    };
    return commands[commandType] || '';
  };

  const encodeBase64 = () => {
    try {
      const encoded = btoa(base64Input);
      setBase64Output(encoded);
      toast.success('Закодировано', { className: 'font-terminal text-lg' });
    } catch (e) {
      toast.error('Ошибка кодирования', { className: 'font-terminal text-lg' });
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = atob(base64Input);
      setBase64Output(decoded);
      toast.success('Декодировано', { className: 'font-terminal text-lg' });
    } catch (e) {
      toast.error('Ошибка декодирования', { className: 'font-terminal text-lg' });
    }
  };

  const validateYAML = () => {
    if (!yamlInput.trim()) {
      toast.error('Введите YAML для проверки', { className: 'font-terminal text-lg' });
      return;
    }
    const lines = yamlInput.split('\n');
    const errors = [];
    lines.forEach((line, idx) => {
      if (line.includes('\t')) {
        errors.push(`Строка ${idx + 1}: используются табы (используйте пробелы)`);
      }
    });
    if (errors.length === 0) {
      toast.success('YAML валиден ✓', { className: 'font-terminal text-lg' });
    } else {
      toast.error(errors.join('\n'), { className: 'font-terminal text-lg' });
    }
  };

  const fixUTF8 = () => {
    const fixed = utf8Input.replace(/Ð|Ñ|â„|Â/g, '');
    toast.success('Символы исправлены', { className: 'font-terminal text-lg' });
    return fixed;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Скопировано', { className: 'font-terminal text-lg' });
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-pixel text-primary terminal-glow mb-4">
              &gt; Инструменты_
            </h1>
            <p className="text-xl font-terminal text-muted-foreground">
              Практические инструменты для администраторов и разработчиков
            </p>
          </div>

          <Tabs defaultValue="gradient" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-secondary border-2 border-primary">
              <TabsTrigger value="gradient" className="font-terminal text-sm md:text-base">Градиенты</TabsTrigger>
              <TabsTrigger value="commands" className="font-terminal text-sm md:text-base">Команды</TabsTrigger>
              <TabsTrigger value="base64" className="font-terminal text-sm md:text-base">Base64</TabsTrigger>
              <TabsTrigger value="yaml" className="font-terminal text-sm md:text-base">YAML</TabsTrigger>
              <TabsTrigger value="utf8" className="font-terminal text-sm md:text-base">UTF-8</TabsTrigger>
              <TabsTrigger value="translation" className="font-terminal text-sm md:text-base">Перевод</TabsTrigger>
            </TabsList>

            <TabsContent value="gradient">
              <Card className="bg-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-pixel text-primary">Генератор градиентов</CardTitle>
                  <CardDescription className="font-terminal text-lg">
                    Создайте цветной градиент для текста Minecraft
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Текст</Label>
                    <Input 
                      value={gradientText}
                      onChange={(e) => setGradientText(e.target.value)}
                      className="bg-input border-primary mt-2 font-terminal text-lg"
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
                        WebkitTextFillColor: 'transparent'
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
                    onClick={() => copyToClipboard(generateGradient())}
                  >
                    <Icon name="Copy" className="mr-2" size={20} />
                    Скопировать
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="commands">
              <Card className="bg-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-pixel text-primary">Генератор команд</CardTitle>
                  <CardDescription className="font-terminal text-lg">
                    Шаблоны популярных серверных команд
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Плагин</Label>
                    <Select value={commandType} onValueChange={setCommandType}>
                      <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary">
                        <SelectItem value="luckperms" className="font-terminal text-lg">LuckPerms</SelectItem>
                        <SelectItem value="essentials" className="font-terminal text-lg">Essentials</SelectItem>
                        <SelectItem value="worldedit" className="font-terminal text-lg">WorldEdit</SelectItem>
                        <SelectItem value="worldguard" className="font-terminal text-lg">WorldGuard</SelectItem>
                        <SelectItem value="vault" className="font-terminal text-lg">Vault</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-4 bg-input border-2 border-primary font-mono overflow-x-auto">
                    <code className="text-accent text-lg">{generateCommand()}</code>
                  </div>
                  <Button 
                    className="w-full minecraft-btn font-terminal text-lg"
                    onClick={() => copyToClipboard(generateCommand())}
                  >
                    <Icon name="Copy" className="mr-2" size={20} />
                    Скопировать
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="base64">
              <Card className="bg-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-pixel text-primary">Base64 Кодировщик</CardTitle>
                  <CardDescription className="font-terminal text-lg">
                    Кодирование и декодирование Base64
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Входные данные</Label>
                    <Textarea 
                      value={base64Input}
                      onChange={(e) => setBase64Input(e.target.value)}
                      placeholder="Введите текст для кодирования/декодирования"
                      className="bg-input border-primary mt-2 min-h-32 font-terminal text-lg"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 minecraft-btn font-terminal text-lg" onClick={encodeBase64}>
                      Закодировать
                    </Button>
                    <Button className="flex-1 minecraft-btn font-terminal text-lg" onClick={decodeBase64}>
                      Декодировать
                    </Button>
                  </div>
                  {base64Output && (
                    <div>
                      <Label className="font-terminal text-lg">Результат</Label>
                      <Textarea 
                        value={base64Output}
                        readOnly
                        className="bg-input border-primary mt-2 min-h-32 font-terminal text-lg"
                      />
                      <Button 
                        className="w-full minecraft-btn font-terminal text-lg mt-2"
                        onClick={() => copyToClipboard(base64Output)}
                      >
                        <Icon name="Copy" className="mr-2" size={20} />
                        Скопировать
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="yaml">
              <Card className="bg-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-pixel text-primary">YAML Валидатор</CardTitle>
                  <CardDescription className="font-terminal text-lg">
                    Проверка синтаксиса YAML конфигов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">YAML код</Label>
                    <Textarea 
                      value={yamlInput}
                      onChange={(e) => setYamlInput(e.target.value)}
                      placeholder="Вставьте ваш YAML конфиг..."
                      className="bg-input border-primary mt-2 min-h-64 font-mono text-base"
                    />
                  </div>
                  <Button className="w-full minecraft-btn font-terminal text-lg" onClick={validateYAML}>
                    <Icon name="CheckCircle" className="mr-2" size={20} />
                    Проверить
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="utf8">
              <Card className="bg-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-pixel text-primary">UTF-8 Исправитель</CardTitle>
                  <CardDescription className="font-terminal text-lg">
                    Исправление повреждённых символов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Текст с ошибками</Label>
                    <Textarea 
                      value={utf8Input}
                      onChange={(e) => setUtf8Input(e.target.value)}
                      placeholder="Ð\u009fÑ€Ð¸Ð²ÐµÑ‚ -> Привет"
                      className="bg-input border-primary mt-2 min-h-32 font-terminal text-lg"
                    />
                  </div>
                  <Button 
                    className="w-full minecraft-btn font-terminal text-lg"
                    onClick={() => {
                      const fixed = fixUTF8();
                      setUtf8Input(fixed);
                    }}
                  >
                    <Icon name="Wand2" className="mr-2" size={20} />
                    Исправить
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="translation">
              <Card className="bg-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-pixel text-primary">Injar Translation</CardTitle>
                  <CardDescription className="font-terminal text-lg">
                    Перевод текстов для плагинов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="font-terminal text-lg">Язык перевода</Label>
                    <Select>
                      <SelectTrigger className="bg-input border-primary mt-2 font-terminal text-lg">
                        <SelectValue placeholder="Выберите язык" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary">
                        <SelectItem value="ru" className="font-terminal text-lg">Русский</SelectItem>
                        <SelectItem value="en" className="font-terminal text-lg">English</SelectItem>
                        <SelectItem value="ua" className="font-terminal text-lg">Українська</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-terminal text-lg">Исходный текст</Label>
                    <Textarea 
                      placeholder="Введите текст для перевода..."
                      className="bg-input border-primary mt-2 min-h-32 font-terminal text-lg"
                    />
                  </div>
                  <Button className="w-full minecraft-btn font-terminal text-lg">
                    <Icon name="Languages" className="mr-2" size={20} />
                    Перевести
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

export default Tools;
