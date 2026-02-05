import React from 'react';
import { Hammer, Paintbrush, Building2, Layout, Users, Boxes } from 'lucide-react';
import { Reveal } from '../components/MotionWrapper';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      title: "Muebles a medida",
      desc: "Fabricamos muebles combinando madera con metal, vidrio u otros materiales según tu necesidad.",
      icon: <Boxes />
    },
    {
      title: "Restauración de muebles",
      desc: "Reparamos y renovamos muebles para que vuelvan a lucir bien.",
      icon: <Paintbrush />
    },
    {
      title: "Trabajos en carpintería",
      desc: "Realizamos puertas, estructuras de madera y trabajos sencillos para interiores y exteriores.",
      icon: <Building2 />
    },
    {
      title: "Closets y muebles empotrados",
      desc: "Aprovechamos mejor tu espacio con closets, estanterías y centros de entretenimiento.",
      icon: <Layout />
    },
    {
      title: "Evaluación en el lugar",
      desc: "Visitamos tu hogar o negocio sin costo para evaluar el espacio y conocer mejor lo que necesitas.",
      icon: <Users />
    },
    {
      title: "Pintado y acabados",
      desc: "Barnizado, laqueado y pintado para proteger y mejorar el aspecto del mueble.",
      icon: <Hammer />
    },
  ];

  return (
    <section id="servicios" className="min-h-screen pt-50 pb-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-6 font-serif italic">
              Nuestros servicios
            </h1>
            <div className="w-20 h-1 bg-[#a67c52] mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-500 text-lg leading-relaxed">
              Fabricamos y mejoramos muebles funcionales, pensados para el uso diario y con buenos acabados.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group p-10 bg-white rounded-[2.5rem] hover:bg-[#3D2B1F] transition-all duration-700 hover:shadow-2xl border border-gray-100">
                <div className="w-16 h-16 bg-[#a67c52] text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-[360deg] transition-transform duration-700">
                  {React.cloneElement(s.icon, { className: "w-8 h-8" })}
                </div>
                <h2 className="text-2xl font-bold text-[#3D2B1F] mb-4 group-hover:text-white transition-colors">
                  {s.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {s.desc}
                </p>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#a67c52] transition-all duration-500"></div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <div className="bg-white p-12 rounded-[3rem] border border-[#a67c52]/10 inline-block shadow-sm">
            <h3 className="text-2xl font-bold text-[#3D2B1F] mb-4">
              ¿Tienes una idea en mente?
            </h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto italic">
              Cuéntanos qué necesitas y te ayudamos a hacerlo realidad.
            </p>
            <Button variant="secondary" className="px-12" href="/contacto">
              Solicitar presupuesto
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;