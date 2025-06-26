
import { memo, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

// Lazy load componentes não críticos
const LazySparkles = lazy(() => import('lucide-react').then(module => ({ default: module.Sparkles })));
const LazyRocket = lazy(() => import('lucide-react').then(module => ({ default: module.Rocket })));

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500">
      {/* Background otimizado para mobile */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements - apenas em desktop */}
      <div className="hidden lg:block absolute top-20 left-10 animate-bounce">
        <Suspense fallback={<div className="w-16 h-16" />}>
          <LazySparkles className="h-16 w-16 text-orange-200 opacity-60" />
        </Suspense>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6 sm:space-y-8">
          {/* Badge otimizado */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 mr-2 text-orange-200" />
            <span>Agência Digital #1 em Resultados</span>
          </div>
          
          {/* Título otimizado para mobile */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
            Sua Empresa
            <span className="block text-orange-200 font-black">Dominando</span>
            <span className="block text-orange-100">a Internet</span>
          </h1>
          
          {/* Descrição otimizada */}
          <p className="text-lg sm:text-2xl lg:text-3xl max-w-4xl mx-auto font-light leading-relaxed">
            Criamos sites que não apenas impressionam, mas 
            <span className="font-bold text-orange-200"> transformam visitantes em clientes fiéis </span> 
            e fazem sua receita explodir
          </p>
          
          {/* Botões otimizados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-xl font-bold rounded-full shadow-2xl transition-all duration-300"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Começar Projeto
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-xl font-bold rounded-full bg-transparent transition-all duration-300"
            >
              Ver Cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
