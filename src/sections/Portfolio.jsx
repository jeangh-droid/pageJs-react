
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';
import { Reveal } from '../components/MotionWrapper.jsx';
import Button from '../components/Button.jsx';

const Portfolio = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      "id": 1,
      "title": "Carpintería de Interiores",
      "desc": "Puerta de madera con paneles entablados, destacando la veta natural y un sellado de alta resistencia.",
      "img": "carpinteria interior.png"
    },
    {
      "id": 2,
      "title": "Comedor",
      "desc": "Observa cual es el resultado final de un comedor realizado por J&S carpintería",
      "video": "videoTrabajo.mp4",
      "poster": "trabajoVideo.png"
    },
    {
      "id": 3,
      "title": "Puertas con Diseño Vidriado",
      "desc": "Fabricación e instalación de marcos y puertas con divisiones para vidrio.",
      "img": "puerta vidrio.png"
    },
    {
      "id": 4,
      "title": "Portones Monumentales",
      "desc": "Portón principal de gran formato en madera tratada con estructura reforzada y acabados para exteriores.",
      "img": "porton.png"
    }
  ];

  return (
    <section id="portfolio" className="bg-[#FDFBF7] pt-50">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#3D2B1F] font-serif italic mb-6 text-balance">Muebles entregados</h2>
            <p className="text-gray-500 text-lg">
              Mira cómo quedan nuestros muebles ya instalados en las casas de nuestros clientes en todo Lima.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <Reveal key={work.id} delay={i * 0.05}>
              <motion.div 
                whileHover={{ y: -10 }}
                style={{ willChange: "transform" }} 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  {work.video ? (
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      poster={work.poster}
                    >
                      <source src={work.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">{work.title}</h3>
                    <div className="flex items-center text-white/80 text-sm gap-2">
                      <Maximize2 size={16} /> Ver detalles
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#FDFBF7] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-black/50 hover:bg-black/70 md:bg-black/20 md:hover:bg-black/40 rounded-full transition-colors" 
                onClick={() => setSelectedWork(null)}
              >
                <X className="text-white w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              <div className="w-full md:w-3/5 shrink-0 bg-gray-200 aspect-square md:aspect-auto relative">
                {selectedWork.video ? (
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    controls
                    playsInline
                    poster={selectedWork.poster}
                  >
                    <source src={selectedWork.video} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={selectedWork.img} 
                    alt={selectedWork.title} 
                    className="w-full h-full object-cover" 
                  />
                )}
              </div>
              
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#FDFBF7]">
                <span className="text-[#a67c52] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Mueble Realizado</span>
                <h2 className="text-2xl md:text-4xl font-bold text-[#3D2B1F] mb-4 font-serif leading-tight">{selectedWork.title}</h2>
                <div className="w-12 h-1 bg-[#a67c52] mb-6"></div>
                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed italic">"{selectedWork.desc}"</p>
                
                <div className="mt-auto pt-4">
                  <Button variant="whatsapp" className="w-full py-4 font-bold text-sm md:text-base" href={`https://wa.me/51944056337?text=Vi el mueble '${selectedWork.title}' y quiero uno igual.`}>
                    Consultar por WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
