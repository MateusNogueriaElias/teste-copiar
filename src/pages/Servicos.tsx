import { Zap, Target, Rocket, Palette, Search, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const Servicos = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Landing Pages de Alto Impacto",
      description: "Páginas focadas em conversão que transformam visitantes em leads qualificados",
      features: [
        "Design otimizado para conversão",
        "Formulários inteligentes",
        "Integração com ferramentas de marketing",
        "Testes A/B inclusos",
        "Responsivo para todos os dispositivos"
      ],
      highlight: "Aumento médio de 300% nas conversões"
    },
    {
      icon: <Target className="h-12 w-12 text-white" />,
      title: "Sites WordPress Profissionais",
      description: "Sites completos e profissionais com painel administrativo intuitivo",
      features: [
        "Design personalizado",
        "Painel administrativo fácil",
        "Otimização SEO completa",
        "Backup automático",
        "Suporte técnico incluso"
      ],
      highlight: "Sites prontos em até 7 dias"
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      title: "E-commerce Completo",
      description: "Lojas virtuais que vendem 24/7 com integração total de pagamentos",
      features: [
        "Integração com gateways de pagamento",
        "Gestão completa de produtos",
        "Relatórios de vendas",
        "Sistema de cupons",
        "Acompanhamento de pedidos"
      ],
      highlight: "Integração com principais meios de pagamento"
    },
    {
      icon: <Rocket className="h-12 w-12 text-white" />,
      title: "Desenvolvimento Personalizado",
      description: "Soluções sob medida para necessidades específicas do seu negócio",
      features: [
        "Desenvolvimento exclusivo",
        "Integração com sistemas existentes",
        "Escalabilidade garantida",
        "Código limpo e documentado",
        "Suporte técnico dedicado"
      ],
      highlight: "100% personalizado para seu negócio"
    },
    {
      icon: <Search className="h-12 w-12 text-white" />,
      title: "Otimização SEO",
      description: "Posicione seu site no topo do Google e aumente sua visibilidade",
      features: [
        "Análise completa de palavras-chave",
        "Otimização on-page",
        "Link building estratégico",
        "Relatórios mensais",
        "Monitoramento contínuo"
      ],
      highlight: "Primeiras posições no Google"
    },
    {
      icon: <Palette className="h-12 w-12 text-white" />,
      title: "Design de Interface (UI/UX)",
      description: "Interfaces intuitivas e atrativas que encantam seus usuários",
      features: [
        "Pesquisa de experiência do usuário",
        "Prototipagem interativa",
        "Design system completo",
        "Testes de usabilidade",
        "Design responsivo"
      ],
      highlight: "Experiência do usuário excepcional"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análise & Estratégia",
      description: "Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita"
    },
    {
      step: "02",
      title: "Design & Prototipagem",
      description: "Criamos o design visual e protótipos interativos para sua aprovação"
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Desenvolvemos seu projeto com as melhores tecnologias e práticas do mercado"
    },
    {
      step: "04",
      title: "Testes & Otimização",
      description: "Testamos tudo minuciosamente e otimizamos para máxima performance"
    },
    {
      step: "05",
      title: "Lançamento & Suporte",
      description: "Lançamos seu projeto e oferecemos suporte contínuo para garantir o sucesso"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 fire-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Nossos <span className="text-yellow-300">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Soluções digitais completas que transformam sua presença online em uma máquina de resultados
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="hover-lift border-0 shadow-lg h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 fire-gradient rounded-full mb-4 mx-auto">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold font-poppins mb-2">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="inline-block bg-fire-light text-fire-dark px-3 py-1 rounded-full text-sm font-medium mt-2">
                      {service.highlight}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-fire-primary flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contato">
                      <Button className="w-full fire-gradient text-white hover:shadow-lg">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
                Nosso <span className="fire-text-gradient">Processo</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um processo estruturado e transparente que garante resultados excepcionais
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <div className="text-center">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 fire-gradient rounded-full text-white font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10">
                        <div className="h-full bg-fire-primary w-0 animate-[width_1s_ease-in-out_forwards]" style={{ animationDelay: `${index * 0.3}s` }}></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-poppins mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 fire-gradient-reverse text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Nossa Garantia de Satisfação
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos tão confiantes na qualidade do nosso trabalho que oferecemos garantia total. 
              Se não ficar 100% satisfeito, refazemos até acertar!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">30 dias</div>
                  <div className="text-sm opacity-90">Garantia de satisfação</div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Suporte técnico</div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={300}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Clientes satisfeitos</div>
                </div>
              </ScrollReveal>
            </div>
            <Link to="/contato">
              <Button size="lg" className="bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-lift">
                Começar Meu Projeto Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
