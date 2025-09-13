import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">HS</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Hub do Saber</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Plataforma de aprendizado colaborativo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/login">Fazer Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/cadastro">Criar Conta</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
