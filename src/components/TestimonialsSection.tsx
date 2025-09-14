import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Excelente pag recomendo a todos",
    author: "Carlos Eduardo",
    role: "matemática ufu",
    avatar: "/placeholder.svg",
    initials: "CE"
  },
  {
    quote: "Ambiente intuitivo e excelentes mentores",
    author: "Maria Tereza",
    role: "Sistemas de informações",
    avatar: "/placeholder.svg",
    initials: "MT"
  },
  {
    quote: "Muito Bom!",
    author: "Alício Antunes",
    role: "Direito",
    avatar: "/placeholder.svg",
    initials: "AA"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 scroll-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-card/60 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <blockquote className="text-lg font-medium text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;