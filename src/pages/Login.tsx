import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, User } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login aqui
    console.log("Login attempt:", { usuario, senha });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border-2 border-primary/20 rounded-lg p-8 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">HS</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-center mb-8 text-foreground">
          Hub do Saber
        </h1>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Campo Usuário */}
          <div className="relative">
            <Label htmlFor="usuario" className="sr-only">
              Usuário
            </Label>
            <div className="relative">
              <Input
                id="usuario"
                type="text"
                placeholder="Usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="pr-10"
                required
              />
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="relative">
            <Label htmlFor="senha" className="sr-only">
              Senha
            </Label>
            <div className="relative">
              <Input
                id="senha"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Botão Login */}
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-full"
          >
            LOGIN
          </Button>

          {/* Link Cadastre-se */}
          <p className="text-center text-sm text-muted-foreground">
            Não possui cadastro?{" "}
            <Link
              to="/cadastro"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;