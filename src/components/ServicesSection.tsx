
import { memo, useMemo } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Zap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = memo(() => {
  const services = useMemo(() => [
    {
      icon: <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      title: "Landing Pages de Alto Impacto",
      description: "Páginas que convertem visitantes em clientes com design irresistível e estratégia comprovada",
      highlight: "Aumento de 400% nas conversões",
      color: "from-fire-primary to-fire-secondary"
    },
    {
      icon: <Target className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      title: "Sites WordPress Profissionais", 
      description: "Sites completos e otimizados que posicionam sua marca como líder no mercado",
      highlight: "Entrega em até 5 dias",
      color: "from-fire-secondary to-fire-accent"
    },
    {
      icon: <Rocket className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      title: "Desenvolvimento Exclusivo",
      description: "Soluções únicas e personalizadas que fazem sua empresa se destacar da concorrência",
      highlight: "100% sob medida",
      color: "from-fire-accent to-fire-primary"
    }
  ], []);

  return (
    <ScrollReveal direction="up" delay={200}>
      <section className="py-16 sm:py-32 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fire-primary/5 to-fire-accent/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={300}>
            <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
              <div className="inline-flex items-center bg-fire-gradient-soft border border-fire-primary/20 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-4 sm:mb-6">
                <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-fire-primary" />
                <span className="text-xs sm:text-sm font-semibold text-fire-primary">Serviços Premium</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold font-poppins mb-4 sm:mb-6 px-2 sm:px-0 leading-tight">
                Mostre ao mundo o seu melhor — <span className="fire-text-gradient">crie seu site com a Fire Domínios!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200 + 400}>
                <Card className="hover-lift border-0 shadow-2xl h-full animate-scale-in glass-card group overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${service.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                      <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                          {service.highlight}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-poppins group-hover:text-fire-primary transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{service.description}</p>
                      <Link to="/contato">
                        <Button className="w-full fire-gradient text-white hover:shadow-xl hover-lift rounded-full py-4 sm:py-6 text-base sm:text-lg font-semibold">
                          <span className="hidden sm:inline">Quero Este Serviço</span>
                          <span className="sm:hidden">Quero Esse</span>
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
