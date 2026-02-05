import React from 'react';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import { Reveal } from '../components/MotionWrapper.jsx';
import Button from '../components/Button.jsx';

const Home = () => {
  return (
    <div className="bg-[#FDFBF7]">
      <h1 className="sr-only">Carpintería J&S | Muebles a Medida en Lima</h1>

      <Hero />
      <Features />

      <section className="py-24 bg-[#F3F4F6] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal direction="right" className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#a67c52]/10 rounded-full blur-3xl"></div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img
                    src="about.jpg"
                    alt="Proceso de fabricación de muebles - Carpintería J&S"
                    className="w-full h-auto scale-110 hover:scale-100 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#3D2B1F] p-10 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-white/10">
                  <p className="text-[#a67c52] text-3xl font-bold mb-1 italic font-serif text-center">
                    Experiencia
                  </p>
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold text-center">
                    Trabajo bien hecho
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:w-1/2">
              <span className="text-[#a67c52] font-bold text-xs uppercase tracking-widest mb-4 block">
                Quiénes somos
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-8 font-serif leading-tight">
                Muebles hechos a tu medida
              </h2>

              <p className="text-[#3D2B1F]/80 text-lg mb-6 leading-relaxed">
                En J&S fabricamos muebles funcionales y resistentes, adaptados a tu espacio y a tus necesidades reales.
                Nos enfocamos en un buen acabado y en que cada mueble cumpla su función.
              </p>

              <p className="text-gray-500 mb-10 leading-relaxed">
                Trabajamos con distintos materiales y acabados para ofrecer soluciones como closets empotrados,
                puertas, mesas, estanterías y otros muebles hechos a medida, pensados para durar.
              </p>

              <Button
                variant="outline"
                href="/servicios"
                className="!border-[#3D2B1F] !text-[#3D2B1F] hover:!bg-[#3D2B1F] hover:!text-white"
              >
                Ver nuestros servicios
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;