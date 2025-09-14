import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Hub do Saber</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Login
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Página
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Saiba
          </a>
          <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Cadastre-se
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;