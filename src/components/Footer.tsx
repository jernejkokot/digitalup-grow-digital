import { Phone, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/73c13877-9462-49d6-a8b1-ea27f5e3877f.png" 
                alt="DigitalUp.si" 
                className="h-8 filter brightness-0 invert"
              />
              <span className="font-bold text-xl">DigitalUp.si</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Vaš zanesljiv partner za digitalne rešitve. Več kot 15 let izkušenj pri razvoju 
              spletnih strani, e-trgovin in poslovnih avtomatizacij.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Hitre povezave</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Storitve
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  O nas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('references')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Reference
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Naše storitve</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Spletne strani</li>
              <li>E-trgovine</li>
              <li>Intranet portali</li>
              <li>Avtomatizacija procesov</li>
              <li>Integracija sistemov</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <a href="tel:031987456" className="text-background/80 hover:text-background transition-colors">
                  031 987 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <a href="mailto:info@digitalup.si" className="text-background/80 hover:text-background transition-colors">
                  info@digitalup.si
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80">Ptuj, Slovenia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-background/60" />
                <span className="text-background/80">digitalup.si</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} DigitalUp.si. Vse pravice pridržane.
            </p>
            <div className="flex space-x-6 text-sm text-background/60">
              <button className="hover:text-background transition-colors">
                Pravila zasebnosti
              </button>
              <button className="hover:text-background transition-colors">
                Pogoji uporabe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;