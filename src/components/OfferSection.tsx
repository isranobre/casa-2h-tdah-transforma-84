import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Gift, Calendar, ShoppingCart, CreditCard, Sparkles, FileText, List, PenTool, Tag } from "lucide-react";
import compraSegura from "@/assets/compra-segura.png";

export const OfferSection = () => {
  const mainProducts = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Desafio Organização do LAR",
      description: "A transformação completa do jeito que você cuida da sua casa"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Planejador de Limpeza Programado",
      description: "O passo a passo para manter sua casa impecável sem esforço"
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Programador de Limpeza Editável",
      description: "Personalize a limpeza de acordo com sua rotina!"
    },
    {
      icon: <List className="w-5 h-5" />,
      title: "Lista de Compras Editável",
      description: "Nunca mais se esqueça de nada!"
    },
    {
      icon: <Tag className="w-5 h-5" />,
      title: "Card de Limpeza",
      description: "Prático e eficiente para organização diária"
    }
  ];

  const bonuses = [
    {
      title: "Planner de Produtividade Feminina",
      description: "A ferramenta definitiva para mulheres que querem conquistar tudo sem perder tempo. Trabalhe 100 vezes mais rápido!",
      icon: <Sparkles className="w-6 h-6" />,
      value: "R$ 29,90"
    },
    {
      title: "Planejamento Financeiro Doméstico",
      description: "Aprenda a controlar as finanças de forma inteligente e faça o seu dinheiro render!",
      icon: <CreditCard className="w-6 h-6" />,
      value: "R$ 39,90"
    }
  ];

  return (
    <section className="py-12 sm:py-24 mobile-container bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 sm:mb-6 text-sm sm:text-lg px-4 py-2 sm:px-6 sm:py-3 bg-gradient-primary text-white border-0">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            OFERTA ESPECIAL
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Tudo que você precisa</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">em um só lugar</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Um sistema completo de organização doméstica + bônus exclusivos para transformar sua vida
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8 order-2 lg:order-1">
            <Card className="border-primary/20 shadow-lg animate-fade-in mobile-card">
              <CardHeader className="text-center pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-2xl font-bold text-primary flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  Conteúdo Principal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {mainProducts.map((product, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-primary bg-primary/10 rounded-lg p-2 flex-shrink-0">
                      {product.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{product.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{product.description}</p>
                    </div>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-1" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-secondary/20 shadow-lg bg-gradient-to-br from-secondary/5 to-accent/5 animate-fade-in mobile-card" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="text-center pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-2xl font-bold text-secondary flex flex-wrap items-center justify-center gap-2">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
                  Bônus Exclusivos
                  <Badge className="bg-secondary text-secondary-foreground text-xs sm:text-sm">GRÁTIS</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-secondary/20 animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
                    <div className="flex items-start gap-3 sm:gap-4 mb-3">
                      <div className="text-secondary bg-secondary/10 rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                        {bonus.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                          <h3 className="font-bold text-foreground text-base sm:text-lg">{bonus.title}</h3>
                          <Badge variant="outline" className="text-success border-success text-xs sm:text-sm self-start sm:self-center">
                            {bonus.value}
                          </Badge>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground">{bonus.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Offer Card */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="absolute inset-0 bg-gradient-secondary rounded-2xl sm:rounded-3xl rotate-1 scale-105 opacity-20 blur-xl" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-xl w-full max-w-xs mx-auto lg:max-w-none">
                  <img 
                    src={compraSegura} 
                    alt="Compra segura e garantida" 
                    className="rounded-xl sm:rounded-2xl w-full h-auto"
                  />
                </div>
              </div>

              <Card className="border-success/20 shadow-glow bg-gradient-to-br from-success/5 to-success/10 animate-scale-in mobile-card w-full max-w-xs mx-auto lg:max-w-none" style={{ animationDelay: "0.5s" }}>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-col items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                      <span className="text-sm sm:text-base text-muted-foreground line-through">De R$ 67,90</span>
                      <Badge className="bg-destructive text-destructive-foreground text-xs px-2 py-1">70% OFF</Badge>
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-success mb-1 sm:mb-2 font-playfair">R$ 19,90</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">ou 3x de R$ 6,63 no cartão</p>
                  </div>

                  <Button 
                    variant="success" 
                    size="lg" 
                    className="w-full mb-3 sm:mb-4 animate-pulse-soft font-bold text-xs sm:text-sm mobile-button touch-optimized h-10 sm:h-12"
                    id="purchase"
                    onClick={() => window.open('https://casaorganizada.store/views/checkout.php?produto_id=9452213', '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    GARANTIR TRANSFORMAÇÃO
                  </Button>

                  <div className="space-y-1 sm:space-y-2 text-xs">
                    <div className="flex items-center justify-center gap-2 text-success">
                      <CheckCircle className="w-3 h-3" />
                      <span className="font-semibold">Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-success">
                      <CheckCircle className="w-3 h-3" />
                      <span className="font-semibold">Acesso imediato</span>
                    </div>
                    <p className="text-primary font-semibold text-xs mt-2">
                      O risco é TODO NOSSO!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};