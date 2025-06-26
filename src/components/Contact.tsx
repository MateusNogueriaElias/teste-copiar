
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';

const Contact = memo(() => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
          <Sparkles className="h-4 w-4 mr-2 text-orange-200" />
          <span className="text-sm font-medium">Última Chance de Transformar Seu Negócio</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
          Pronto para <span className="text-orange-200">Fazer Parte</span> da Nossa História de Sucesso?
        </h2>
        
        <p className="text-xl sm:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
          Vamos juntos criar o próximo capítulo de transformação digital do seu negócio
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl font-bold rounded-full shadow-2xl transition-all duration-300">
            <Rocket className="mr-3 h-6 w-6" />
            Começar Projeto
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 px-12 py-6 text-xl font-bold rounded-full bg-transparent transition-all duration-300">
            Nossos Serviços
          </Button>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
