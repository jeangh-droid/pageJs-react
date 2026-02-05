
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "+51 944 056 337";
  const address = "Lima, Perú";

  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          <div className="lg:col-span-1 text-center md:text-left">
            <Link to="/" className="inline-flex flex-col items-center md:items-start gap-4 mb-8 group">
              <div className="w-20 h-20 rounded-full overflow-hidden transition-transform group-hover:scale-110 duration-500 bg-white/5 border border-white/10">
                <img src="logo-js.png" alt="J&S Logo Footer" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">
                  Carpintería <span className="text-[#a67c52]">J&S</span>
                </span>
                <span className="text-gray-500 text-[9px] uppercase tracking-[0.4em] font-bold">Muebles a Medida</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
              Diseño y fabricación de estructuras de alta gama en Lima. 20 años garantizando puntualidad y acabados profesionales.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/moldurera/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#a67c52] hover:border-[#a67c52] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#a67c52] hover:border-[#a67c52] transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 italic font-serif text-[#a67c52]">Navegación</h3>
            <ul className="space-y-4">
              {['Inicio', 'Servicios', 'Productos', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 italic font-serif text-[#a67c52]">Proyectos</h3>
            <ul className="space-y-4">
              {['Closets Empotrados', 'Puertas de Diseño', 'Escritorios Modernos', 'Muebles de Cocina', 'Centros de TV'].map((item) => (
                <li key={item} className="text-gray-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 italic font-serif text-[#a67c52]">Contacto Directo</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#a67c52] w-5 h-5 mt-1 shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {address}<br />
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-[#a67c52] w-5 h-5 shrink-0" />
                <p className="text-gray-400 text-sm">{phoneNumber}</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#a67c52] w-5 h-5 shrink-0" />
                <p className="text-gray-400 text-sm">steven.lopezs13@outlook.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2025 J&S Diseño y Fabricación – Maestría Familiar en Lima.
          </p>
          <div className="flex gap-8 text-gray-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
