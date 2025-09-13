import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, LogIn } from "lucide-react";
import hubLogo from "@/assets/hub-do-saber-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="p-6 border-b bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={hubLogo} alt="Hub do Saber" className="w-12 h-12" />
            <h1 className="text-2xl font-bold">Hub do Saber</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Conecte-se ao Conhecimento</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra, crie e participe de grupos de estudo que transformam aprendizado em crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Listar Grupos */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Explorar Grupos</CardTitle>
              <CardDescription>
                Descubra grupos de estudo em diversas áreas do conhecimento
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" size="lg">
                <Users className="w-4 h-4 mr-2" />
                Ver Grupos Disponíveis
              </Button>
            </CardContent>
          </Card>

          {/* Criar Grupos */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Plus className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-xl">Criar Grupo</CardTitle>
              <CardDescription>
                Lidere um novo grupo e compartilhe seu conhecimento com outros
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" className="w-full" size="lg">
                <Plus className="w-4 h-4 mr-2" />
                Criar Novo Grupo
              </Button>
            </CardContent>
          </Card>

          {/* Entrar em Grupos */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <LogIn className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">Participar</CardTitle>
              <CardDescription>
                Entre em grupos existentes e comece a aprender junto com outros
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full" size="lg">
                <LogIn className="w-4 h-4 mr-2" />
                Participar de Grupo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Grupos Ativos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
            <div className="text-muted-foreground">Participantes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">25</div>
            <div className="text-muted-foreground">Áreas de Conhecimento</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
