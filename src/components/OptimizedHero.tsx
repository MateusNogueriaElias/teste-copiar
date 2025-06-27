
import { memo, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Sparkles, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const OptimizedHero = memo(() => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center particle-bg">
      <div className="absolute inset-0 fire-gradient opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
      
      {/* Floating Elements - apenas em desktop */}
      {isDesktop && (
        <>
          <div className="absolute top-16 sm:top-20 left-4 sm:left-10 animate-float">
            <Sparkles className="h-8 w-8 sm:h-16 sm:w-16 text-orange-200 opacity-60" />
          </div>
          <div className="absolute top-1/3 right-8 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
            <Zap className="h-10 w-10 sm:h-20 sm:w-20 text-white opacity-40" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float hidden sm:block" style={{ animationDelay: '4s' }}>
            <Target className="h-12 w-12 text-orange-200 opacity-50" />
          </div>
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white hero-content">
        <div>
          {/* Badge otimizado */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-6 sm:py-2 mb-6 sm:mb-8">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-orange-200" />
            <span className="text-xs sm:text-sm font-medium">Agência Digital #1 em Resultados</span>
          </div>
          
          {/* Título principal - LCP otimizado */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            Sua Empresa
            <span className="block text-orange-200 font-black">Dominando</span>
            <span className="block text-orange-100">a Internet</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="font-sans text-lg sm:text-xl md:text-3xl mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            Criamos sites que não apenas impressionam, mas 
            <span className="font-bold text-orange-200"> transformam visitantes em clientes fiéis </span> 
            e fazem sua receita explodir
          </p>
          
          {/* Botões otimizados */}
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
                <span className="hidden sm:inline">Ver Cases de Sucesso</span>
                <span className="sm:hidden">Ver Cases</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

OptimizedHero.displayName = 'OptimizedHero';

export default OptimizedHero;
