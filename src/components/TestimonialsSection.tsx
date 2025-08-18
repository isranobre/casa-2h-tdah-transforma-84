import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart, ArrowRight } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.png";

export const TestimonialsSection = () => {
  const testimonialImages = [
    {
      src: testimonial1,
      alt: "Depoimento de mulher que transformou sua rotina de limpeza"
    },
    {
      src: testimonial2,
      alt: "Resultado real: casa organizada em 2 horas"
    },
    {
      src: testimonial3,
      alt: "Testemunho de mãe que equilibra casa e trabalho"
    }
  ];

  const featuredTestimonial = {
    name: "Ana Carolina",
    role: "Mãe e empreendedora digital",
    content: "Eu também sou uma mulher com TDAH, e antes eu só sonhava em ter minha casa organizada. Agora, com as técnicas do Desafio, posso equilibrar minha casa, meu trabalho e ainda ter tempo para mim!",
    rating: 5
  };

  return (
    <section className="py-12 sm:py-24 mobile-container bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 sm:mb-6 text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3 border-primary/20 text-primary">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Depoimentos Reais
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Veja o que acontece quando</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">você decide mudar</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Centenas de mulheres já transformaram suas casas e suas vidas com nosso método
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {testimonialImages.map((image, index) => (
            <Card key={index} className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-smooth overflow-hidden group animate-fade-in mobile-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-slow bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-smooth" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-smooth opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-1 text-white">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <Card className="border-accent/20 shadow-xl bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 max-w-5xl mx-auto animate-scale-in mobile-card">
          <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12">
            <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0 hidden sm:block">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-accent/30" />
              </div>
              
              <div className="flex-1 space-y-4 sm:space-y-6">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground font-light leading-relaxed italic">
                  "{featuredTestimonial.content}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
                  <div>
                    <div className="font-bold text-base sm:text-lg text-primary">{featuredTestimonial.name}</div>
                    <div className="text-sm sm:text-base text-muted-foreground">{featuredTestimonial.role}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-accent font-medium">
                    <span>Resultado comprovado</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl sm:text-4xl font-black text-primary font-playfair mb-1 sm:mb-2">500+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Mulheres transformadas</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl sm:text-4xl font-black text-secondary font-playfair mb-1 sm:mb-2">2h</div>
            <div className="text-sm sm:text-base text-muted-foreground">Tempo médio de limpeza</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl sm:text-4xl font-black text-accent font-playfair mb-1 sm:mb-2">98%</div>
            <div className="text-sm sm:text-base text-muted-foreground">Taxa de satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};