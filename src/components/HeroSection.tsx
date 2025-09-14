import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mushrooms.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">"A dúvida é o</span>
              <br />
              <span className="text-foreground">princípio da</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                sabedoria"
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Descubra grupos interativos e tenha acesso a aulas 
              presenciais e online que se encaixam no seu ritmo. 
              Conecte-se facilmente com monitores e professores 
              próximos a você, tirando suas dúvidas em um 
              ambiente de maior suporte e abertura.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-accent-foreground px-8 py-6 text-lg font-semibold"
            >
              Começar
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Cogumelos crescendo em um tronco - representando conhecimento orgânico"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;