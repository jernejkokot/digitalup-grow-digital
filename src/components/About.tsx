import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "15+",
      label: "let izkušenj",
      description: "v digitalnem razvoju"
    },
    {
      icon: Users,
      number: "100+",
      label: "zadovoljnih strank",
      description: "po Sloveniji"
    },
    {
      icon: Target,
      number: "500+",
      label: "uspešnih projektov",
      description: "različnih velikosti"
    },
    {
      icon: Award,
      number: "24/7",
      label: "podpora",
      description: "za naše stranke"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O podjetju DigitalUp.si
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Smo majhno, a izkušeno podjetje iz Ptuja, ki se že več kot 15 let ukvarja z digitalnimi rešitvami 
                za mala in srednja podjetja. Naša strast je pomagati lokalnim podjetjem pri njihovi digitalni preobrazbi.
              </p>
              <p>
                Verjamemo, da lahko pravilno zasnovane digitalne rešitve revolucionirajo način dela vsakega podjetja. 
                Od preprostih spletnih strani do kompleksnih poslovnih avtomatizacij - pristopamo k vsakemu projektu 
                z istim predanim in strokovnim pristopom.
              </p>
              <p>
                Naša prednost je osebni pristop in globoko razumevanje potreb slovenskih podjetij. Ponosni smo na 
                dolgoročne partnerske odnose z našimi strankami in na to, da lahko prispevamo k njihovemu uspehu.
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <h3 className="font-semibold text-foreground mb-2">Naša vizija</h3>
              <p className="text-muted-foreground">
                Biti zaupanja vreden partner pri digitalni preobrazbi slovenskih podjetij in jim omogočiti, 
                da se osredotočijo na svojo osnovno dejavnost, medtem ko mi skrbimo za njihovo digitalno prisotnost.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Naše vrednote</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Partnerstvo</h4>
              <p className="text-sm text-muted-foreground">
                Z vsakim klientom gradimo dolgoročno partnerstvo, temelječe na zaupanju in uspešnih rezultatih.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Kakovost</h4>
              <p className="text-sm text-muted-foreground">
                Vsak projekt izvedemo z največjo skrbnostjo in se osredotočimo na dolgoročno vrednost.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Strokovnost</h4>
              <p className="text-sm text-muted-foreground">
                Sledimo najnovejšim trendom in tehnologijam za optimalne digitalne rešitve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;