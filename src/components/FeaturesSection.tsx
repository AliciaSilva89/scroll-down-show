import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Users,
    title: "Listar Grupos",
    description: "Corpo de texto para adicionar mais informações, além do subtítulo.",
    color: "primary"
  },
  {
    icon: UserPlus,
    title: "Criar Grupos",
    description: "Corpo de texto para explicar melhor o ponto principal.",
    color: "secondary"
  },
  {
    icon: ArrowRight,
    title: "Entrar em grupos",
    description: "Corpo de texto para outras informações que você queira compartilhar.",
    color: "accent"
  }
];

const FeaturesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 scroll-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center relative
                      ${feature.color === 'primary' ? 'bg-gradient-primary' : ''}
                      ${feature.color === 'secondary' ? 'bg-secondary' : ''}
                      ${feature.color === 'accent' ? 'bg-gradient-accent' : ''}
                    `}>
                      <Icon className={`w-8 h-8 ${
                        feature.color === 'primary' ? 'text-primary-foreground' : 
                        feature.color === 'secondary' ? 'text-secondary-foreground' : 
                        'text-accent-foreground'
                      }`} />
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-primary/20" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-background border-2 border-secondary/20" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;