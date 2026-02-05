
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Filter, X, ZoomIn } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { Reveal } from '../components/MotionWrapper.jsx';

const Products = () => {
  const [categoria, setCategoria] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const catalog = [
  // MUEBLES DE SALA / GENERAL
  { id: "1", nombre: "Biblioteca Modular de Cedro", desc: "Estructura contemporánea en madera de cedro con soportes metálicos ocultos. Ideal para bibliotecas personales.", cat: "Muebles", img: "Biblioteca modular de metal y madera.png" },
  { id: "2", nombre: "Cajonera de Madera Tornillo", desc: "Mueble organizador robusto con 6 cajones y correderas telescópicas reforzadas.", cat: "Muebles", img: "cajonera de madera.png" },
  { id: "10", nombre: "Estantería Modular Dinámica", desc: "Juego de volúmenes en blanco y gris. Pieza de diseño para salas modernas.", cat: "Muebles", img: "Estantería Modular Blanca y Gris con Diseño Dinámico.png" },
  { id: "11", nombre: "Mueble Bajo Porta TV", desc: "Diseño minimalista para centros de entretenimiento con gestión de cables integrada.", cat: "Muebles", img: "mueble bajo con compartimentos.png" },

  { id: "19", nombre: "Mesa de Centro Industrial", desc: "Mezcla de madera recuperada y base de hierro forjado.", cat: "Muebles", img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop" },
  { id: "22", nombre: "Vitrina de Exhibición Clásica", desc: "Vitrina con marcos de madera noble y cristales templados.", cat: "Muebles", img: "vitrina exhibicion clasica.jpg" },

  { id: "46", nombre: "Vanitory de Baño con Listones", desc: "Mueble de baño suspendido con frente de listones de madera clara y encimera de cuarzo blanco.", cat: "Muebles", img: "vanitory.png" },
  { id: "47", nombre: "Mesa de Noche con Textura 3D", desc: "Mueble auxiliar con frente de cajón tallado en patrón de bloques entrelazados y patas estilo mid-century.", cat: "Muebles", img: "mueble 3d.png" },
  { id: "48", nombre: "Vitrina Organizadora con Persianas", desc: "Mueble alto con puertas superiores de vidrio e inferiores tipo persiana para ventilación.", cat: "Muebles", img: "persiana.png" },

  // DORMITORIO
  { id: "3", nombre: "Cama Queen de Diseño Clásico", desc: "Cabecera tallada artesanalmente en madera sólida. Estabilidad y confort premium.", cat: "Dormitorio", img: "cama de madera con cabecera y piecera.png" },
  { id: "5", nombre: "Clóset Blanco Minimalista", desc: "Acabado en poliuretano blanco brillante para maximizar la luz en el dormitorio.", cat: "Dormitorio", img: "closet empotrado color blanco.png" },
  { id: "6", nombre: "Vestidor Esquinero Completo", desc: "Optimización total de esquinas para un vestidor funcional y espacioso.", cat: "Dormitorio", img: "Conjunto de Clósets y Mueble Esquinero de Dormitorio.png" },

  { id: "24", nombre: "Mesa de Noche", desc: "Mesa de noche minimalista en madera tornillo.", cat: "Dormitorio", img: "mesa de noche.png" },
  { id: "25", nombre: "Cómoda de 8 Cajones", desc: "Cómoda amplia con tiradores integrados.", cat: "Dormitorio", img: "comoda de 8 cajones.png" },

  // OFICINA
  { id: "7", nombre: "Escritorio Home Office", desc: "Estación de trabajo ergonómica con cajonera lateral y espacio para monitor dual.", cat: "Oficina", img: "escritorio compacto con cajonera.png" },
  { id: "8", nombre: "Escritorio Compacto Studio", desc: "Ideal para espacios reducidos.", cat: "Oficina", img: "escritorio compacto.png" },
  { id: "9", nombre: "Escritorio Ejecutivo Doble", desc: "Amplia superficie de trabajo compartida.", cat: "Oficina", img: "escritorio doble para trabajo.png" },

  { id: "27", nombre: "Librero de Pared a Techo", desc: "Estructura masiva con repisas ajustables.", cat: "Oficina", img: "estanteria de pared a techo.jpg" },
  { id: "28", nombre: "Mesa de Directorio", desc: "Mesa de reuniones imponente.", cat: "Oficina", img: "sala-para-reuniones-de-negocios.jpg" },

  // COCINA
  { id: "12", nombre: "Reposteros Superiores Rojo Brillo", desc: "Módulos modernos con acabado en acrílico.", cat: "Cocina", img: "Muebles de Cocina Superiores Modulares Rojo y Blanco.png" },

  { id: "29", nombre: "Alacena Vertical Extraíble", desc: "Máximo aprovechamiento del espacio.", cat: "Cocina", img: "alacena vertical.png" },
  { id: "30", nombre: "Mesa de Comedor Diaria", desc: "Mesa redonda para cocinas integradas.", cat: "Cocina", img: "mesa redonda.png" },

  { id: "49", nombre: "Cocina Integral High Gloss", desc: "Mobiliario de cocina de piso a techo en acabado blanco brillante con tiradores invisibles tipo Gola.", cat: "Cocina", img: "cocina integral hg.png" },

  // ABERTURAS
  { id: "14", nombre: "Puerta de Madera Clásica", desc: "Puerta interior moldurada.", cat: "Aberturas", img: "puerta de madera con paneles clasicos.png" },
  { id: "15", nombre: "Puerta Maciza Tornillo", desc: "Puerta principal de alta seguridad.", cat: "Aberturas", img: "Puerta de madera tornillo con paneles.png" },
  { id: "16", nombre: "Puerta Doble con Vidrio", desc: "Ingreso elegante con luz natural.", cat: "Aberturas", img: "Puerta doble de madera con paneles de vidrio.png" },
  { id: "17", nombre: "Puerta de Seguridad Reforzada", desc: "Sistema de cierre multipunto.", cat: "Aberturas", img: "puerta principal de madera con chapa metalica y contra marco.png" },
  
  { id: "41", nombre: "Puerta con Ventanal Lateral", desc: "Sistema de ingreso con puerta batiente y ventana fija lateral con marcos de madera y paneles de vidrio.", cat: "Aberturas", img: "puerta con ventana.png" },
  { id: "43", nombre: "Puerta Principal Moderna con Listones", desc: "Diseño contemporáneo con listonado horizontal, tirador largo de acero inoxidable y cerradura electrónica.", cat: "Aberturas", img: "cerradura electrica.png" },
  { id: "45", nombre: "Puerta de Paso Wengue", desc: "Puerta lisa de diseño minimalista en acabado wengue oscuro, ideal para ambientes modernos.", cat: "Aberturas", img: "puerta de paso wengue.png" },

  // DECORACIÓN / EXTERIORES
  { id: "18", nombre: "Pérgola Sol y Sombra", desc: "Estructura exterior tratada.", cat: "Decoración", img: "sol y sombra.png" },
  { id: "20", nombre: "Repisas Flotantes", desc: "Repisas con anclaje invisible.", cat: "Decoración", img: "repisas flotantes.jpg" },
  { id: "33", nombre: "Jardinera de Madera Tratada", desc: "Jardinera para exteriores.", cat: "Decoración", img: "jardinera.png" },
  { id: "35", nombre: "Panel Acústico de Madera", desc: "Panel decorativo acústico.", cat: "Decoración", img: "panel acustico.jpg" },

  // COMEDOR
  { id: "36", nombre: "Mesa de Comedor para 6 Personas", desc: "Mesa grande de madera noble.", cat: "Comedor", img: "mesa comedor para 6.png" },
  { id: "37", nombre: "Silla Comedor Ergonómica", desc: "Silla con respaldo curvo.", cat: "Comedor", img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop" },
  { id: "38", nombre: "Aparador Moderno de Comedor", desc: "Mueble de apoyo moderno.", cat: "Comedor", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop" },
  { id: "39", nombre: "Bar de Casa Empotrado", desc: "Bar con iluminación integrada.", cat: "Comedor", img: "bar empotrado.jpg" },
  
  // MOLDURAS
  { id: "60", nombre: "Molduras para Techos", desc: "Detalles decorativos que hacen que tu sala se vea más elegante.", cat: "Molduras", img: "moldura de techo.png" },
  { id: "61", nombre: "Zócalos de Madera", desc: "Protección y estilo para la unión entre tus paredes y el piso.", cat: "Molduras", img: "zocalo de madera.png" },
  { id: "62", nombre: "Marcos para Espejos", desc: "Marcos hechos a mano para tus espejos o cuadros favoritos.", cat: "Molduras", img: "marcos de espejos.png" }
];




  const categorias = [
    "Todos",
    "Muebles",
    "Dormitorio",
    "Oficina",
    "Cocina",
    "Aberturas",
    "Decoración",
    "Molduras"
  ];

  const filteredProducts = categoria === 'Todos' ? catalog : catalog.filter(p => p.cat === categoria);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-50 pb-24">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-[#3D2B1F] font-serif italic mb-4">Galería de Diseños</h1>
              <p className="text-gray-500">Haz clic en cualquier mueble para ver el detalle en tamaño completo.</p>
            </div>
            <div className="flex items-center gap-2 text-[#a67c52]">
              <LayoutGrid size={20} />
              <span className="font-bold uppercase tracking-widest text-xs">{filteredProducts.length} Productos</span>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm sticky top-32">
              <h3 className="text-[#3D2B1F] font-bold mb-6 flex items-center gap-2">
                <Filter size={18} /> Filtrar por Categoría
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-3">
                {categorias.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoria(cat)}
                    className={`px-5 py-3 rounded-xl text-sm font-medium transition-all text-left flex justify-between items-center group ${
                      categoria === cat 
                      ? 'bg-[#3D2B1F] text-white shadow-md' 
                      : 'bg-gray-50 text-gray-500 hover:bg-[#F3F4F6]'
                    }`}
                  >
                    {cat}
                    {categoria === cat && <motion.div layoutId="dot" className="w-1.5 h-1.5 rounded-full bg-[#a67c52]" />}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((prod) => (
                  <motion.div
                    key={prod.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard 
                      product={prod} 
                      onImageClick={() => setSelectedImage(prod)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#1A1A1A]/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full bg-white rounded-[2rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/3 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={selectedImage.img} 
                    alt={selectedImage.nombre} 
                    className="w-full h-full object-contain max-h-[70vh] md:max-h-[85vh]"
                  />
                </div>
                <div className="md:w-1/3 p-10 flex flex-col justify-center">
                  <span className="text-[#a67c52] font-bold text-xs uppercase tracking-widest mb-4 block">{selectedImage.cat}</span>
                  <h2 className="text-3xl font-bold text-[#3D2B1F] mb-6 font-serif leading-tight">{selectedImage.nombre}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">{selectedImage.desc}</p>
                  <div className="mt-auto">
                    <button 
                      className="w-full bg-[#3D2B1F] text-white py-4 rounded-xl font-bold hover:bg-black transition-colors"
                      onClick={() => setSelectedImage(null)}
                    >
                      Cerrar Vista
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
