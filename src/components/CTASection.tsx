
import { memo } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = memo(() => {
  return (
    <ScrollReveal direction="up" delay={200}>
      <section className="py-16 sm:py-32 fire-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 particle-bg opacity-50 sm:opacity-100"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="fade" delay={400}>
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-6 sm:mb-8">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-orange-200" />
                <span className="text-xs sm:text-sm font-medium text-center">Última Chance de Transformar Seu Negócio</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-poppins mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                Pronto para <span className="text-orange-200">Fazer Parte</span> da Nossa História de Sucesso?
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Vamos juntos criar o próximo capítulo de transformação digital do seu negócio
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center px-4 sm:px-0">
                <Link to="/contato" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-fire-dark hover:bg-orange-50 hover:text-fire-primary px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold hover-lift hover-glow rounded-full shadow-2xl">
                    <Rocket className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="hidden sm:inline">Começar Nosso Projeto</span>
                    <span className="sm:hidden">Começar Projeto</span>
                    <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </Link>
                <Link to="/servicos" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-fire-primary px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold hover-lift rounded-full backdrop-blur-sm bg-transparent">
                    <span className="hidden sm:inline">Ver Nossos Serviços</span>
                    <span className="sm:hidden">Nossos Serviços</span>
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ScrollReveal>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
