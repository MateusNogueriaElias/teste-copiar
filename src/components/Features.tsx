
import { memo, lazy, Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Zap, Rocket } from 'lucide-react';

// Lazy load ícones não críticos
const LazyTarget = lazy(() => import('lucide-react').then(module => ({ default: module.Target })));

const Features = memo(() => {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Landing Pages de Alto Impacto",
      description: "Páginas que convertem visitantes em clientes com design irresistível e estratégia comprovada",
      highlight: "Aumento de 400% nas conversões",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Suspense fallback={<div className="h-10 w-10" />}><LazyTarget className="h-10 w-10 text-white" /></Suspense>,
      title: "Sites WordPress Profissionais", 
      description: "Sites completos e otimizados que posicionam sua marca como líder no mercado",
      highlight: "Entrega em até 5 dias",
      color: "from-red-500 to-yellow-500"
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Desenvolvimento Exclusivo",
      description: "Soluções únicas e personalizadas que fazem sua empresa se destacar da concorrência",
      highlight: "100% sob medida",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 border border-orange-200 rounded-full px-6 py-2 mb-6">
            <Target className="h-4 w-4 mr-2 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">Serviços Premium</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Mostre ao mundo o seu melhor — <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">crie seu site com a Fire Domínios!</span>
          </h2>
        </div>

        {/* Grid de serviços otimizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-xl h-full overflow-hidden transition-transform duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                      {service.icon}
                    </div>
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {service.highlight}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl rounded-full py-6 text-lg font-semibold transition-all duration-300">
                    Quero Este Serviço
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;
