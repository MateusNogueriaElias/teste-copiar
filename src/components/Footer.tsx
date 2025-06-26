import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
                alt="Fire Domínios" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold font-poppins fire-text-gradient">
                Fire Domínios
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Criamos experiências digitais que convertem visitantes em clientes. 
              Seu sucesso online começa aqui.
            </p>
            <div className="flex space-x-4">
              {/* Alteração: Adicionado aria-label para acessibilidade */}
              <a 
                href="https://www.facebook.com/share/19DCpcWD2M/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Siga-nos no Facebook"
                className="text-gray-400 hover:text-fire-primary transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              {/* Alteração: Adicionado aria-label para acessibilidade */}
              <a 
                href="https://www.instagram.com/firedominios/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram"
                className="text-gray-400 hover:text-fire-primary transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              {/* Alteração: Adicionado aria-label para acessibilidade */}
              <a 
                href="https://www.linkedin.com/in/fire-dom%C3%ADnios/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Conecte-se conosco no LinkedIn"
                className="text-gray-400 hover:text-fire-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-fire-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-fire-primary transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-fire-primary transition-colors duration-300">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-fire-primary transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Landing Pages</li>
              <li className="text-gray-400">Sites WordPress</li>
              <li className="text-gray-400">E-commerce</li>
              <li className="text-gray-400">Desenvolvimento Custom</li>
              <li className="text-gray-400">Otimização SEO</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-fire-primary" />
                <span className="text-gray-400">suporte@firedominios.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-fire-primary" />
                <span className="text-gray-400">(11) 99162-7189</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-fire-primary" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              @2025 Fire Domínios todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-fire-primary text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-fire-primary text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;