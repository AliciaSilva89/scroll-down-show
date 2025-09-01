import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Hub do Saber</h3>
          </div>

          {/* Links Columns */}
          {[1, 2, 3].map((col) => (
            <div key={col} className="space-y-4">
              <h4 className="font-semibold text-foreground">Tópico</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Página
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-border flex justify-center space-x-6">
          {[
            { icon: Facebook, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Youtube, href: "#" },
            { icon: Instagram, href: "#" }
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;