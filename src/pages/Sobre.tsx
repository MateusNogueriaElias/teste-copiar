import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Focus, Handshake, Rocket, Users, Zap } from 'lucide-react';

const Sobre = () => {
  const values = [
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Inovação",
      description: "Utilizamos as tecnologias mais modernas e tendências atuais para criar soluções de impacto"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Paixão",
      description: "Começamos nossa jornada com energia e determinação para revolucionar a presença digital"
    },
    {
      icon: <Focus className="h-8 w-8 text-white" />,
      title: "Foco",
      description: "Nossa missão é clara: entregar resultados que transformem negócios desde o primeiro projeto"
    },
    {
      icon: <Handshake className="h-8 w-8 text-white" />,
      title: "Parceria",
      description: "Construímos relacionamentos duradouros, sendo verdadeiros parceiros do seu crescimento"
    }
  ];

  const team = [
    {
      name: "Mateus Elias",
      role: "CEO & Founder",
      description: "Visionário focado em transformar desafios de negócio em sucesso digital. Minha missão é garantir que cada projeto não seja apenas um site, mas uma ferramenta de crescimento real para a sua empresa."
    },
    {
      name: "Samuel Romão",
      role: "Head de Desenvolvimento",
      description: "Especialista em desenvolvimento web focado em performance e segurança. Construo sites rápidos e otimizados que convertem visitantes em clientes e garantem uma experiência impecável em qualquer dispositivo."
    },
    {
      name: "Lucas Bernardo",
      role: "Creative Director",
      description: "Designer criativo que desenvolve identidades visuais marcantes. Crio um design que não apenas é bonito, mas que comunica o valor da sua marca, gera confiança e atrai o público certo."
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
              Sobre a <span className="text-yellow-300">Fire Domínios</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Uma nova era na criação de experiências digitais extraordinárias começa agora em 2025
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Nossa <span className="fire-text-gradient">História</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Fire Domínios nasce em 2025 com uma visão revolucionária: toda empresa 
                merece uma presença digital que não apenas impressiona, mas que transforma 
                visitantes em clientes fiéis e impulsiona resultados reais.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Começamos nossa jornada como uma agência digital jovem e ambiciosa, com 
                uma equipe apaixonada por tecnologia e design. Nossa abordagem inovadora 
                combina as mais modernas tecnologias web com estratégias comprovadas de conversão.
              </p>
              <p className="text-lg text-gray-600">
                Nosso diferencial está na dedicação total ao sucesso de cada cliente. 
                Cada projeto é tratado como uma oportunidade única de criar algo extraordinário 
                que gere impacto real no mercado.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="fire-gradient rounded-2xl p-8 text-white text-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
                <p className="text-lg opacity-90 mb-6">
                  Transformar ideias em experiências digitais que convertem, impressionam e geram resultados extraordinários
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-2">2025</div>
                    <div className="text-sm opacity-90">Ano de Fundação</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Dedicação</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">∞</div>
                    <div className="text-sm opacity-90">Potencial</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Comprometimento</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-fire-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                Nossos <span className="fire-text-gradient">Valores</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Os pilares que nos guiam desde o primeiro dia de nossa jornada
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="hover-lift border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 fire-gradient rounded-full mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                Nossa <span className="fire-text-gradient">Equipe</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Os visionários que estão construindo o futuro da presença digital
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="hover-lift border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 fire-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-poppins">{member.name}</h3>
                    <div className="text-fire-primary font-medium mb-4">{member.role}</div>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fire-gradient-reverse text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Seja Parte da Nossa História Desde o Início
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a nós nesta jornada revolucionária e seja um dos primeiros a experimentar nossa abordagem inovadora
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contato" className="fire-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift transition-all duration-300 hover:brightness-110">
                Começar Nosso Projeto
              </a>
              <a href="/servicos" className="border-2 border-white text-white hover:bg-white hover:text-fire-primary px-8 py-4 rounded-full text-lg font-semibold hover-lift transition-all duration-300">
                Ver Nossos Serviços
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
