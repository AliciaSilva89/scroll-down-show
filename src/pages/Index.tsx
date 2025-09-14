import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Plus, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HS</span>
            </div>
            <span className="font-semibold text-lg">Hub do Saber</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <Link to="/login" className="text-muted-foreground hover:text-primary">
              Login
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary">
              Página
            </Link>
            <Link to="/saiba" className="text-muted-foreground hover:text-primary">
              Saiba
            </Link>
            <Button asChild className="bg-black hover:bg-black/90 text-white">
              <Link to="/cadastro">Cadastre-se</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              "A dúvida é o princípio da sabedoria"
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubra grupos interativos e tenha acesso a aulas presenciais e online que se encaixam no seu ritmo. 
              Conecte-se facilmente com monitores e professores próximos a você, tirando suas dúvidas em um 
              ambiente de maior suporte e abertura.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Começar
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Cogumelo em pedra representando conhecimento e sabedoria" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Alguns dos nosso produtos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Listar Grupos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Corpo de texto para adicionar mais informações, além do subtítulo.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <Users className="w-8 h-8 text-blue-600" />
                  <Plus className="w-4 h-4 text-white bg-blue-600 rounded-full absolute -top-1 -right-1" />
                </div>
              </div>
              <CardTitle>Criar Grupos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Corpo de texto para explicar melhor o ponto principal.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <Users className="w-8 h-8 text-blue-600" />
                  <ArrowRight className="w-4 h-4 text-white bg-blue-600 rounded-full absolute -top-1 -right-1" />
                </div>
              </div>
              <CardTitle>Entrar em grupos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Corpo de texto para outras informações que você queira compartilhar.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                "Excelente pag recomendo a todos"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-red-100 text-red-600">CE</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Carlos Eduardo</p>
                  <p className="text-xs text-muted-foreground">matemática ufu</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                "Ambiente intuitivo e excelentes mentores"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-gray-100 text-gray-600">MT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Maria Teresa</p>
                  <p className="text-xs text-muted-foreground">Sistemas de Informações</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                "Muito Bom!"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-blue-100 text-blue-600">AA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Alício Antunes</p>
                  <p className="text-xs text-muted-foreground">Direito</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Hub do Saber</h3>
            </div>
            <div>
              <h4 className="font-medium mb-4">Tópico</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Tópico</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Tópico</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
                <li><Link to="#" className="hover:text-primary">Página</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
