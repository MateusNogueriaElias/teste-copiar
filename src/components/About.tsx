
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clientes Atendidos' },
    { icon: Award, number: '50+', label: 'Projetos Concluídos' },
    { icon: Lightbulb, number: '5+', label: 'Anos de Experiência' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="fire-text-gradient">Missão</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos uma equipe apaixonada por tecnologia e inovação, dedicada a criar 
              soluções digitais que realmente fazem a diferença. Acreditamos que cada 
              projeto é único e merece atenção especial.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 fire-gradient rounded-full mr-4"></div>
                <span className="text-lg text-gray-700">Soluções personalizadas para cada cliente</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 fire-gradient rounded-full mr-4"></div>
                <span className="text-lg text-gray-700">Tecnologia de ponta e metodologias ágeis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 fire-gradient rounded-full mr-4"></div>
                <span className="text-lg text-gray-700">Suporte contínuo e relacionamento duradouro</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="fire-gradient hover:fire-gradient-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              Conheça Nossa História
            </Button>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-400">
                  <CardContent className="p-6 flex items-center">
                    <div className="fire-gradient p-3 rounded-full mr-6 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold fire-text-gradient mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
