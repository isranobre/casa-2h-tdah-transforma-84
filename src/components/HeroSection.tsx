import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Timer } from "lucide-react";
import motivational1 from "@/assets/motivational-1.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-secondary rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative container mx-auto mobile-container py-12 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Método Exclusivo para TDAH
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-foreground">Sua Casa</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">Limpa em</span>
                <br />
                <span className="text-5xl sm:text-6xl lg:text-8xl font-black text-primary">2 HORAS</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
                  Transforme sua rotina de limpeza com o método revolucionário 
                  <span className="text-primary font-semibold"> especialmente desenvolvido para mentes neurodivergentes</span>
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-neutral-foreground text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                    <span className="font-medium">Apenas 2h/dia</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-neutral rounded-full" />
                  <span className="font-medium">Método comprovado</span>
                  <div className="hidden sm:block w-1 h-1 bg-neutral rounded-full" />
                  <span className="font-medium">Sem estresse</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <Button 
                variant="hero" 
                size="hero" 
                className="group w-full mobile-button touch-optimized animate-scale-in text-sm sm:text-base lg:text-xl px-6 sm:px-12 py-4 sm:py-6 h-auto"
                onClick={() => {
                  const currentParams = window.location.search;
                  const baseUrl = 'https://casaorganizada.store/views/checkout.php?produto_id=9452213';
                  const separator = currentParams ? '&' : '';
                  window.location.href = baseUrl + separator + currentParams.substring(1);
                }}
              >
                🏠 Quero Transformar Minha Casa Agora
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl sm:rounded-3xl rotate-1 sm:rotate-3 scale-105 opacity-20 blur-xl" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-xl">
                <img 
                  src={motivational1} 
                  alt="Mulher organizada trabalhando de casa com planejamento eficiente" 
                  className="rounded-xl sm:rounded-2xl w-full h-auto shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-secondary text-secondary-foreground rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-float">
              <div className="text-xs sm:text-sm font-semibold">✨ Método TDAH</div>
            </div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-xs sm:text-sm font-semibold">⏰ 2 Horas/dia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};