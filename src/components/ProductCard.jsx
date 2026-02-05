
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Maximize2 } from 'lucide-react';
import Button from './Button.jsx';

const ProductCard = ({ product, onImageClick }) => {
  const { nombre, desc, img, cat } = product;
  const phoneNumber = "51944056337";
  const message = encodeURIComponent(`Hola, me interesa consultar por: ${nombre}`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      <div 
        className="relative h-72 w-full overflow-hidden cursor-zoom-in"
        onClick={onImageClick}
      >
        <img 
          src={img} 
          alt={nombre} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-[#3D2B1F] shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
            <Maximize2 size={24} />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-[#a67c52] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            {cat}
          </span>
        </div>
      </div>
      
      <div className="p-7 flex flex-col flex-grow">
        <h3 
          className="text-2xl font-bold text-[#3D2B1F] mb-3 group-hover:text-[#a67c52] transition-colors cursor-pointer"
          onClick={onImageClick}
        >
          {nombre}
        </h3>
        <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">{desc}</p>
        <div className="pt-6 border-t border-gray-50">
          <Button variant="whatsapp" className="w-full" href={whatsappUrl}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Consultar Diseño
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
