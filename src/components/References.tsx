import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Cog, ExternalLink } from "lucide-react";

const References = () => {
  const projects = [
    {
      company: "Aktiva Varovanje",
      industry: "Varnostne storitve",
      icon: Shield,
      description: "Celovita spletna prisotnost z upravljanjem storitev, rezervacijami in komunikacijskim sistemom za varnostno podjetje.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: [
        "Rezervacijski sistem",
        "Upravljanje ekip",
        "Poročila o storitvah",
        "Mobilna optimizacija"
      ],
      category: "Spletna aplikacija"
    },
    {
      company: "EIMV",
      industry: "Izobraževanje",
      icon: Building2,
      description: "Intranet portal za upravljanje izobraževalnih programov, študentov in komunikacijo med osebjem.",
      technologies: ["WordPress", "Custom PHP", "MySQL", "Bootstrap"],
      features: [
        "Upravljanje tečajev",
        "Študentski portal",
        "Komunikacijski sistem",
        "Digitalni certifikati"
      ],
      category: "Intranet sistem"
    },
    {
      company: "Iska Mehanizmi",
      industry: "Proizvodnja",
      icon: Cog,
      description: "E-trgovina z integracijo v ERP sistem za prodajo industrijskih komponent in rezervnih delov.",
      technologies: ["WooCommerce", "REST API", "ERP integracija", "Payment Gateway"],
      features: [
        "Katalog izdelkov",
        "B2B cenniki",
        "ERP sinhronizacija",
        "Logistične integracije"
      ],
      category: "E-trgovina"
    }
  ];

  return (
    <section id="references" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Naše reference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spoznajte nekaj naših uspešnih projektov in kako smo pomagali podjetjem pri njihovi digitalni preobrazbi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 bg-card h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.company}
                </CardTitle>
                <CardDescription className="text-accent font-medium">
                  {project.industry}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Ključne funkcionalnosti:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Uporabljene tehnologije:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Želite postati naša naslednja referenca?
            </h3>
            <p className="text-muted-foreground mb-6">
              Ponosni smo na uspehe naših strank. Vsak projekt pristopimo z največjo skrbnostjo in predanostjo, 
              da dosežemo rezultate, ki presegajo pričakovanja.
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <ExternalLink className="h-4 w-4 mr-2" />
              Kontaktirajte nas za predstavitev vašega projekta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;