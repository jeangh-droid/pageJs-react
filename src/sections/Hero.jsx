
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '../components/Button.jsx';

const Hero = () => {
  const phoneNumber = "51944056337";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola, quiero pedir un presupuesto para un mueble.`;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=65&w=1200&auto=format&fit=crop" 
          alt="Mueble de madera" 
          className="w-full h-full object-cover opacity-60"
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-4xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#a67c52] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
            20 años de experiencia
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Tus <span className="text-[#a67c52]">Muebles</span> <br /> a Medida
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Closets, puertas, mesas, entre otros muebles más. Calidad garantizada en cada detalle para tu casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              className="px-10 py-4 text-lg font-bold shadow-lg" 
              href="/productos"
            >
              Ver Catálogo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="px-10 py-4 text-lg !border-white/50 !text-white hover:!bg-white hover:!text-black" 
              href={whatsappUrl}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Presupuesto gratis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
