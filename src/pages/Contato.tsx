
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ScrollReveal';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Criar o corpo do email
      const emailBody = `
        Nome: ${formData.name}
        Email: ${formData.email}
        Telefone: ${formData.phone}
        Empresa: ${formData.company}
        Serviço: ${formData.service}
        Mensagem: ${formData.message}
      `;

      // Criar o link mailto
      const mailtoLink = `mailto:suporte@firedominios.com?subject=Novo contato do site - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir o cliente de email
      window.location.href = mailtoLink;
      
      toast({
        title: "Redirecionando para seu cliente de email!",
        description: "Complete o envio no seu aplicativo de email.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao processar solicitação",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "E-mail",
      content: "suporte@firedominios.com",
      description: "Resposta em até 2 horas"
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "WhatsApp",
      content: "(11) 99162-7189",
      description: "Seg à Sex, 9h às 18h"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Localização",
      content: "São Paulo, SP",
      description: "Atendimento em todo Brasil"
    }
  ];

  const services = [
    "Landing Page",
    "Site WordPress",
    "E-commerce",
    "Desenvolvimento Personalizado",
    "Otimização SEO",
    "Design UI/UX",
    "Outro"
  ];

  const faqs = [
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo varia conforme o projeto. Landing pages ficam prontas em 3-5 dias, sites WordPress em 7-14 dias."
    },
    {
      question: "Vocês oferecem suporte pós-entrega?",
      answer: "Sim! Oferecemos 30 dias de suporte gratuito e planos de manutenção contínua."
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com 50% no início do projeto e 50% na entrega. Aceitamos PIX, cartão e boleto."
    },
    {
      question: "Vocês fazem redesign de sites existentes?",
      answer: "Absolutamente! Especializamos em modernizar e otimizar sites existentes para melhor performance."
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
              Vamos Conversar <span className="text-yellow-300">Sobre Seu Projeto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Estamos prontos para transformar suas ideias em realidade digital. Entre em contato e vamos começar!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-poppins">
                      Solicite seu <span className="fire-text-gradient">Orçamento Gratuito</span>
                    </CardTitle>
                    <p className="text-gray-600">Preencha o formulário e receba uma proposta personalizada</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Nome completo *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Seu nome completo"
                            className="border-gray-300 focus:border-fire-primary focus:ring-fire-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            E-mail *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="seu@email.com"
                            className="border-gray-300 focus:border-fire-primary focus:ring-fire-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(11) 99999-9999"
                            className="border-gray-300 focus:border-fire-primary focus:ring-fire-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Empresa
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Nome da sua empresa"
                            className="border-gray-300 focus:border-fire-primary focus:ring-fire-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Serviço de interesse
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fire-primary focus:border-fire-primary"
                        >
                          <option value="">Selecione um serviço</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Conte-nos sobre seu projeto *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={8}
                          placeholder="Descreva seu projeto, objetivos e quaisquer requisitos específicos..."
                          className="border-gray-300 focus:border-fire-primary focus:ring-fire-primary resize-none min-h-[200px] max-h-[200px]"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full fire-gradient text-white py-3 text-lg font-semibold hover:shadow-lg hover-lift"
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            Enviar Proposta
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} direction="right" delay={index * 200}>
                  <Card className="border-0 shadow-lg hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 fire-gradient rounded-full flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold font-poppins mb-1">{info.title}</h3>
                          <p className="text-lg font-medium text-gray-900 mb-1">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}

              {/* Response Time */}
              <ScrollReveal direction="right" delay={600}>
                <Card className="border-0 shadow-lg fire-gradient text-white">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Resposta Garantida</h3>
                    <p className="opacity-90">Respondemos todos os contatos em até 2 horas durante horário comercial</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                Perguntas <span className="fire-text-gradient">Frequentes</span>
              </h2>
              <p className="text-xl text-gray-600">
                Tire suas dúvidas mais comuns sobre nossos serviços
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 font-poppins">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
              Não Perca Mais Tempo!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cada dia sem uma presença digital profissional é uma oportunidade perdida. Vamos mudar isso agora!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/5511991627189" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-fire-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold hover-lift transition-all duration-300"
              >
                Chamar no WhatsApp
              </a>
              <a 
                href="mailto:suporte@firedominios.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-fire-primary px-8 py-4 rounded-full text-lg font-semibold hover-lift transition-all duration-300"
              >
                Enviar E-mail
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contato;
