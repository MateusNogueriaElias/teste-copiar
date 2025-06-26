
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Target, Rocket, Shield, Users, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Performance Extrema',
      description: 'Soluções otimizadas que garantem velocidade e eficiência máxima para seu negócio.',
      delay: '0s'
    },
    {
      icon: Target,
      title: 'Foco no Resultado',
      description: 'Estratégias precisas e direcionadas para atingir seus objetivos de forma eficaz.',
      delay: '0.2s'
    },
    {
      icon: Rocket,
      title: 'Crescimento Acelerado',
      description: 'Impulsione seu negócio com ferramentas e metodologias comprovadas.',
      delay: '0.4s'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção completa dos seus dados e processos com as melhores práticas.',
      delay: '0.6s'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes dedicados ao sucesso do seu projeto.',
      delay: '0.8s'
    },
    {
      icon: Trophy,
      title: 'Resultados Comprovados',
      description: 'Histórico de sucessos e clientes satisfeitos em diversos setores.',
      delay: '1s'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher o <span className="fire-text-gradient">Fire</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas e inovadoras que transformam desafios em oportunidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up"
              style={{animationDelay: feature.delay}}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 fire-gradient rounded-full group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
