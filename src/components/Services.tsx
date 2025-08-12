import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShoppingCart, Network, Zap, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Postavitev spletnih strani",
      description: "Moderne, odzivne spletne strani, ki predstavljajo vaše podjetje v najboljši luči in privabljajo stranke.",
      features: ["Odziven dizajn", "SEO optimizacija", "Hitra naložitev", "CMS sistem"]
    },
    {
      icon: ShoppingCart,
      title: "Razvoj spletnih trgovin",
      description: "Popolne e-commerce rešitve za prodajo vaših izdelkov in storitev preko spleta.",
      features: ["Varno plačevanje", "Upravljanje zalog", "Analitika prodaje", "Mobilna optimizacija"]
    },
    {
      icon: Network,
      title: "Intranet portali",
      description: "Notranji sistemi za boljšo komunikacijo in sodelovanje med zaposlenimi.",
      features: ["Upravljanje dokumentov", "Komunikacijski sistemi", "Koledarji", "Poročila"]
    },
    {
      icon: Zap,
      title: "Avtomatizacija procesov",
      description: "Avtomatizacija ponavljajočih se opravil za povečanje produktivnosti in zmanjšanje stroškov.",
      features: ["Workflow avtomatizacija", "E-mail kampanje", "Poročila", "API integracije"]
    },
    {
      icon: Settings,
      title: "Integracija sistemov",
      description: "Povezovanje različnih poslovnih sistemov za boljši pretok informacij.",
      features: ["ERP integracije", "CRM povezave", "Tretje strani API", "Podatkovne migracije"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Naše storitve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ponujamo celovite digitalne rešitve, prilagojene potrebam majhnih in srednjih podjetij
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Potrebujete drugo storitev? Kontaktirajte nas za prilagojeno ponudbo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;