import React from 'react';
import { Ruler, Layers, Users, Heart } from 'lucide-react';
import { Reveal } from '../components/MotionWrapper';

const Features = () => {
  const features = [
    {
      title: "Hecho a medida",
      desc: "Fabricamos muebles personalizados que se ajustan a tu espacio y a lo que realmente necesitas.",
      icon: <Ruler className="w-8 h-8" />,
      color: "bg-[#E8EDE4]"
    },
    {
      title: "Buenos materiales",
      desc: "Usamos maderas de calidad combinadas con metal, vidrio y otros materiales resistentes.",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-[#F5E6DA]"
    },
    {
      title: "Experiencia y mejora continua",
      desc: "Contamos con experiencia en carpintería y seguimos mejorando nuestras técnicas de trabajo.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-[#EDE9FE]"
    },
    {
      title: "Cuidado en los detalles",
      desc: "Prestamos atención a cada detalle para que el mueble quede bien terminado y duradero.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-[#FDF2F2]"
    }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-6 italic font-serif">
              Nuestra forma de trabajar
            </h2>
            <div className="w-20 h-1 bg-[#a67c52] mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-500 leading-relaxed">
              Fabricamos muebles funcionales y bien hechos, combinando buenos materiales con un trabajo cuidadoso y responsable.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group p-10 bg-white rounded-3xl border border-gray-100 hover:border-[#a67c52]/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-[#3D2B1F]">{f.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#3D2B1F] mb-4">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
