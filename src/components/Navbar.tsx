import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: 'https://portifólio.firedominios.com', external: true },
    { name: 'Sobre', path: '/sobre' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-morphism shadow-2xl py-2' : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Enhanced */}
          <button onClick={scrollToTop} className="flex items-center space-x-3 hover-glow group">
            <div className="relative">
              <img 
                src="/lovable-uploads/f7ad8c87-e46c-4a74-bbc3-772f8f211c80.png" 
                alt="Fire Domínios" 
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-fire-primary to-fire-accent opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-poppins fire-text-gradient group-hover:scale-105 transition-transform duration-300">
                Fire Domínios
              </span>
              <span className="text-xs font-medium tracking-wide text-gray-600 transition-colors duration-300">
                Digital Excellence
              </span>
            </div>
          </button>

          {/* Desktop Navigation Enhanced */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold transition-all duration-300 relative group px-4 py-2 rounded-full text-gray-700 hover:text-fire-primary hover:bg-fire-gradient-soft`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-fire-primary to-fire-accent transition-all duration-300 w-0 group-hover:w-8`}></span>
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`font-semibold transition-all duration-300 relative group px-4 py-2 rounded-full ${
                    isActive(item.path)
                      ? 'text-fire-primary bg-fire-gradient-soft'
                      : 'text-gray-700 hover:text-fire-primary hover:bg-fire-gradient-soft'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-fire-primary to-fire-accent transition-all duration-300 ${
                    isActive(item.path) ? 'w-8' : 'w-0 group-hover:w-8'
                  }`}></span>
                </button>
              )
            ))}
            <button 
              onClick={() => handleNavClick('/contato')}
              className="bg-fire-primary text-white px-8 py-3 rounded-full font-semibold hover-lift hover-glow transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">
                Contato
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-fire-accent to-fire-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button Enhanced */}
          <div className="md:hidden">
            {/* Alteração: Adicionado aria-label para acessibilidade */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-all duration-300 p-2 rounded-full hover:bg-fire-gradient-soft text-gray-700 hover:text-fire-primary"
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {isMenuOpen ? 
                <X size={28} className="animate-scale-in" /> : 
                <Menu size={28} className="animate-scale-in" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation Enhanced */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="glass-card rounded-2xl mt-4 p-6 border border-white/30">
              {navItems.map((item, index) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl mb-2 text-gray-700 hover:text-fire-primary hover:bg-fire-gradient-soft"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className={`block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl mb-2 ${
                      isActive(item.path)
                        ? 'text-fire-primary bg-fire-gradient-soft'
                        : 'text-gray-700 hover:text-fire-primary hover:bg-fire-gradient-soft'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </button>
                )
              ))}
              <button 
                onClick={() => handleNavClick('/contato')}
                className="w-full bg-fire-primary text-white px-6 py-4 rounded-xl text-lg font-semibold mt-4 hover-glow transition-all duration-300 flex items-center justify-center"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;