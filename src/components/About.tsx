
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, ArrowRight, TrendingUp } from 'lucide-react';

const About = memo(() => {
  const benefits = [
    "Design moderno e irresistível",
    "Otimização para máximas conversões", 
    "SEO avançado para Google",
    "Suporte dedicado 24/7",
    "Entrega expressa garantida",
    "ROI comprovado desde o dia 1"
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo principal */}
          <div>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Award className="h-4 w-4 mr-2 text-orange-200" />
              <span className="text-sm font-medium">Por que Fire Domínios?</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              A Escolha dos <span className="text-orange-200">Vencedores</span>
            </h2>
            
            <p className="text-xl mb-10 opacity-95 leading-relaxed">
              Não somos apenas mais uma agência. Somos arquitetos do sucesso digital, 
              <span className="font-bold text-orange-200"> especialistas em criar experiências que vendem</span>
            </p>
            
            {/* Lista de benefícios otimizada */}
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-6 text-lg font-bold rounded-full shadow-xl transition-all duration-300">
              <Users className="mr-3 h-5 w-5" />
              Nossa História
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
          
          {/* Card de resultados otimizado */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 text-center shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-8">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-8 text-gray-800">Resultados Extraordinários</h3>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Excelência</div>
                <div className="text-lg text-gray-600 font-medium leading-relaxed">
                  Entregamos projetos que transformam negócios e geram resultados excepcionais para nossos clientes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
