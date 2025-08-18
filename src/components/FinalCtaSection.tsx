import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Shield, Clock, CheckCircle, ArrowRight, Timer, Sparkles } from "lucide-react";

export const FinalCtaSection = () => {
  const urgencyReasons = [
    {
      icon: <Timer className="w-5 h-5" />,
      title: "Método exclusivo e comprovado",
      description: "Desenvolvido especialmente para mentes neurodivergentes"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Transformação garantida",
      description: "Ou seu dinheiro de volta em 7 dias"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Apenas 2 horas por dia",
      description: "Sistema otimizado para sua rotina corrida"
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Total",
      description: "7 dias para testar sem riscos"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Acesso Imediato",
      description: "Receba tudo agora mesmo"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Método Comprovado",
      description: "Testado por 500+ mulheres"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-36 h-36 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center text-white">
        <div className="mb-12 sm:mb-16 animate-fade-in-up">
          <Badge className="mb-4 sm:mb-6 text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            ⏰ Última Chance - Oferta Especial
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Sua transformação 
            <br />
            <span className="text-secondary-light">começa agora!</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto font-light px-4">
            Não deixe para amanhã a mudança que pode acontecer hoje. 
            Sua casa organizada está a apenas um clique de distância.
          </p>
          
          <Button 
            variant="secondary" 
            size="hero" 
            className="animate-pulse-soft bg-white text-primary hover:bg-white/90 font-bold text-sm sm:text-base lg:text-xl shadow-xl hover:shadow-2xl px-6 sm:px-12 py-4 sm:py-6 h-auto"
            onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
            Ver Oferta Especial
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fade-in mb-8 sm:mb-12 max-w-4xl mx-auto" style={{ animationDelay: "0.3s" }}>
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 w-full max-w-xs mx-auto sm:max-w-none">
              <div className="text-secondary-light">
                {guarantee.icon}
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-base sm:text-lg mb-1">{guarantee.title}</h4>
                <p className="text-xs sm:text-sm opacity-80">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-center">
            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
              💝 <span className="text-secondary-light font-semibold">Bônus especial:</span> 
              <br className="sm:hidden" />
              As primeiras 50 pessoas que adquirirem hoje receberão 
              <br className="hidden sm:inline" />
              <span className="text-secondary-light font-semibold"> suporte personalizado via WhatsApp por 30 dias!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};