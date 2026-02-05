
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import Button from './Button.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const phoneNumber = "51944056337";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Trabajos', path: '/trabajos' },
    { name: 'Catálogo', path: '/productos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isSolid = !isHomePage || isScrolled;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isSolid 
          ? 'py-3 bg-[#0f0f0f] border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative w-20 h-20 rounded-full overflow-hidden transition-transform group-hover:scale-110 duration-500 border border-white/10">
            <img
              src="logo-js.png"
              alt="J&S Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Carpintería <span className="text-[#a67c52]">J&S</span>
            </span>
            <span className="text-gray-400 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black mt-1">
              Muebles de Calidad
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="relative py-2 group"
                >
                  <span className={`text-sm font-bold tracking-wide transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${
                    isActive 
                      ? 'text-[#a67c52]' 
                      : 'text-white hover:text-[#a67c52]'
                  }`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a67c52] shadow-[0_0_10px_#a67c52]"
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <Button 
            variant="whatsapp" 
            className={`px-5 py-2 text-xs font-black uppercase tracking-tighter transition-all duration-500 ${
              isSolid ? 'bg-[#25D366]' : 'shadow-[0_4px_15px_rgba(37,211,102,0.3)] border border-white/10'
            }`} 
            href={whatsappUrl}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-[#0f0f0f] shadow-2xl z-[60] md:hidden flex flex-col p-10 gap-8 border-l border-white/10"
          >
            <div className="flex justify-between items-center">
              <span className="text-white/40 font-black tracking-widest text-xs uppercase">Navegación</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 bg-white/5 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-tight transition-colors ${
                    location.pathname === link.path ? 'text-[#a67c52]' : 'text-white hover:text-[#a67c52]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Button variant="whatsapp" className="w-full py-4 text-base font-bold" href={whatsappUrl}>
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Directo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
