
import { memo, useMemo } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitsSection = memo(() => {
  const benefits = useMemo(() => [
    "Design moderno e irresistível",
    "Otimização para máximas conversões", 
    "SEO avançado para Google",
    "Suporte dedicado 24/7",
    "Entrega expressa garantida",
    "ROI comprovado desde o dia 1"
  ], []);

  return (
    <ScrollReveal direction="up" delay={200}>
      <section className="py-16 sm:py-32 fire-gradient-reverse text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 particle-bg opacity-50 sm:opacity-100"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <ScrollReveal direction="left" delay={300}>
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-6 sm:mb-8">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-orange-200" />
                  <span className="text-xs sm:text-sm font-medium">Por que Fire Domínios?</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-6 sm:mb-8 leading-tight">
                  A Escolha dos <span className="text-orange-200">Vencedores</span>
                </h2>
                
                <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-95 leading-relaxed">
                  Não somos apenas mais uma agência. Somos arquitetos do sucesso digital, 
                  <span className="font-bold text-orange-200"> especialistas em criar experiências que vendem</span>
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-200 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-fire-primary" />
                      </div>
                      <span className="text-base sm:text-lg font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/sobre">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-fire-primary hover:bg-orange-50 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold hover-lift rounded-full shadow-xl">
                    <Users className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Conhecer Nossa História</span>
                    <span className="sm:hidden">Nossa História</span>
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={500}>
              <div className="relative animate-scale-in mt-8 lg:mt-0">
                <div className="glass-card rounded-3xl p-6 sm:p-10 text-center transform hover:rotate-0 transition-transform duration-500 hover-glow">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-fire-primary rounded-full mb-6 sm:mb-8">
                    <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Resultados Extraordinários</h3>
                  
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 fire-text-gradient">Excelência</div>
                    <div className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                      Entregamos projetos que transformam negócios e geram resultados excepcionais para nossos clientes
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
});

BenefitsSection.displayName = 'BenefitsSection';

export default BenefitsSection;
