import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Brain, Clock, Target, Zap } from "lucide-react";
import motivationalSolution from "@/assets/motivational-solution.png";
import motivationalProblems from "@/assets/motivational-problems.png";

export const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "TDAH e distração constante",
      description: "Você começa uma tarefa e logo se distrai com outra coisa"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Falta de tempo",
      description: "Sente que precisa de horas que não tem para limpar a casa"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Falta de método",
      description: "Não sabe por onde começar ou como manter a organização"
    }
  ];

  const solutions = [
    "Técnicas específicas para mentes neurodivergentes",
    "Sistema de limpeza programada em apenas 2 horas",
    "Planejadores editáveis personalizáveis",
    "Método comprovado e testado por centenas de mulheres",
    "Suporte e acompanhamento especializado"
  ];

  return (
    <section className="py-12 sm:py-24 mobile-container bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Problem Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-32">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge variant="outline" className="text-destructive border-destructive/20 text-xs sm:text-sm">
                😔 Você se identifica?
              </Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                O ciclo que
                <span className="text-destructive"> nunca acaba</span>
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Eu também já passei por isso:</span> casa bagunçada, 
                tarefas acumulando, e o TDAH fazendo você perder o foco a cada minuto.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {problems.map((problem, index) => (
                  <Card key={index} className="border-destructive/20 bg-destructive/5 animate-fade-in mobile-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-destructive bg-destructive/10 rounded-lg p-2 flex-shrink-0">
                          {problem.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{problem.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{problem.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 rounded-2xl sm:rounded-3xl rotate-1 sm:rotate-2 scale-105 blur-xl" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-lg">
                <img 
                  src={motivationalProblems} 
                  alt="Mulher estressada com casa desorganizada" 
                  className="rounded-xl sm:rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl sm:rounded-3xl -rotate-1 sm:-rotate-2 scale-105 opacity-20 blur-xl" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-xl">
                <img 
                  src={motivationalSolution} 
                  alt="Mulher organizada e produtiva com método eficiente" 
                  className="rounded-xl sm:rounded-2xl w-full h-auto"
                />
              </div>
            </div>
            
            {/* Success indicators */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-success text-success-foreground rounded-full p-2 sm:p-3 shadow-lg animate-float">
              <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 animate-fade-in-up mb-8 lg:mb-0">
            <div className="space-y-4">
              <Badge className="bg-gradient-primary text-white border-0 text-xs sm:text-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                A Solução que Funciona
              </Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">Mas eu</span>
                <span className="bg-gradient-hero bg-clip-text text-transparent"> decidi mudar!</span>
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Este <span className="text-primary font-semibold">DESAFIO foi a chave</span> para transformar 
                minha vida e minha casa. Agora você também pode ter essa transformação!
              </p>
              
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg mobile-card">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                    Para quem é esse método?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Para <span className="text-foreground font-semibold">mulheres como você</span> que querem 
                    transformar sua rotina, mas não têm tempo nem energia para ficar o dia inteiro limpando. 
                    Com técnicas específicas para TDAH, você organiza tudo em apenas 2 horas!
                  </p>
                </CardContent>
              </Card>
              
              <div className="space-y-2 sm:space-y-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};