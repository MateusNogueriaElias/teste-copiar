
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@sitefire.com',
      description: 'Envie sua mensagem'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      description: 'Ligue para nós'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, SP',
      description: 'Venha nos visitar'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="fire-text-gradient">Conversar</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar suas ideias em realidade? Entre em contato conosco
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center">
                    <div className="fire-gradient p-4 rounded-full mr-6 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 mb-1">{contact.info}</p>
                      <p className="text-sm text-gray-500">{contact.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Envie sua Mensagem
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        placeholder="Seu Nome"
                        className="h-12 border-gray-200 focus:border-orange-400 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email"
                        placeholder="Seu Email"
                        className="h-12 border-gray-200 focus:border-orange-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <Input 
                      placeholder="Assunto"
                      className="h-12 border-gray-200 focus:border-orange-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Sua Mensagem"
                      rows={6}
                      className="border-gray-200 focus:border-orange-400 transition-colors duration-300 resize-none"
                    />
                  </div>
                  <Button 
                    size="lg"
                    className="w-full fire-gradient hover:fire-gradient-dark text-white py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
