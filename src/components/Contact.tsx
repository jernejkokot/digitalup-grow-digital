import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stopite v stik z nami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pripravljeni smo razpravljati o vašem projektu. Kontaktirajte nas za brezplačno svetovanje.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Kontaktni podatki</h3>
              
              <div className="space-y-6">
                <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Telefon</h4>
                        <a 
                          href="tel:031987456" 
                          className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          031 987 456
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pokličite nas za takojšnjo pomoč
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">E-pošta</h4>
                        <a 
                          href="mailto:info@digitalup.si" 
                          className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          info@digitalup.si
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pošljite nam povpraševanje
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Naslov</h4>
                        <p className="text-lg text-foreground font-medium">Ptuj, Slovenia</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pokrivamo celotno Slovenijo
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Delovni čas</h4>
                        <p className="text-foreground">Pon - Pet: 8:00 - 17:00</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          24/7 podpora za kritične težave
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-2">
                  Začnimo skupaj!
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg">
                  Povejte nam o svojem projektu in pripravili vam bomo prilagojeno ponudbo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={() => window.location.href = 'tel:031987456'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Pokličite zdaj
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
                    onClick={() => window.location.href = 'mailto:info@digitalup.si'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Pošljite e-mail
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Kaj lahko pričakujete?
                  </h4>
                  <ul className="space-y-2 text-sm text-primary-foreground/90">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      Brezplačno začetno svetovanje
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      Analizo vaših potreb
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      Prilagojeno ponudbo v 24h
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      Transparentne cene brez skritih stroškov
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Zakaj izbrati DigitalUp.si?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Lokalna podpora:</span> Razumemo potrebe slovenskih podjetij in govorimo vaš jezik
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Dolgoročno partnerstvo:</span> Ne samo izvedemo projekt, ampak vas podpiramo tudi po končani izvedbi
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Transparentnost:</span> Jasne cene, realistični roki in redna poročanja o napredku
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;