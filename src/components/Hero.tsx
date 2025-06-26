
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 fire-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-red-200 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse-slow">
              <Flame className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Acenda o <span className="fire-text-gradient">Fire</span>
            <br />
            do seu negócio
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme suas ideias em realidade com soluções digitais que fazem a diferença. 
            Criamos experiências únicas que conectam sua marca ao sucesso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="fire-gradient hover:fire-gradient-dark text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
