
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Reveal } from '../components/MotionWrapper.jsx';
import Button from '../components/Button.jsx';

const Contact = () => {
  const phoneNumber = "51944056337";
  const phoneNumberPersonal = "51995226356";
  const address = "Lima, Perú";
  const email = "steven.lopezs13@outlook.com";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola, quiero visitar su taller o pedir un presupuesto.`;

  const mailUrl = `mailto:${email}?subject=Consulta de Presupuesto - Carpintería J&S&body=Hola, me gustaría solicitar información sobre...`;

  return (
    <section id="contacto" className="min-h-screen pt-50 pb-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-6 font-serif italic">Habla con nosotros</h2>
            <div className="w-20 h-1 bg-[#a67c52] mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-xl">
              ¿Tienes una idea en mente? Nosotros la fabricamos. Contáctanos por cualquier medio.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="right">
              <div className="bg-[#3D2B1F] p-10 rounded-[2.5rem] text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-10 font-serif italic text-[#a67c52]">Datos de contacto</h3>
                <div className="space-y-10">
                  <a href={`tel:${phoneNumber}`} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#a67c52] transition-colors shrink-0">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Llámanos (Opción 1)</p>
                      <p className="text-2xl font-semibold">+51 944 056 337</p>
                    </div>
                  </a>

                  <a href={`tel:${phoneNumberPersonal}`} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#a67c52] transition-colors shrink-0">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Llámanos (Opción 2)</p>
                      <p className="text-2xl font-semibold">+51 995 226 356</p>
                    </div>
                  </a>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-[#a67c52]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Dirección</p>
                      <p className="text-xl font-medium">{address}</p>
                      <p className="text-white/40 text-sm mt-1">Atendemos en todo Lima.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="w-7 h-7 text-[#a67c52]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Horario</p>
                      <p className="text-xl font-medium">Lunes a Sábado: 9am - 6pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/10">
                  <Button variant="whatsapp" className="w-full py-5 text-xl font-bold" href={whatsappUrl}>
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Enviar WhatsApp ahora
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <a
                href={mailUrl}
                className="bg-white p-6 rounded-3xl border border-gray-200 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-[#a67c52]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-[#a67c52] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-sm">Escríbenos un correo</h4>
                  <p className="text-gray-500 group-hover:text-[#a67c52] transition-colors">{email}</p>
                </div>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="left" className="h-full">
              <div className="relative rounded-[3rem] overflow-hidden group h-full min-h-[500px] shadow-lg border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                  alt="Taller de Carpintería J&S"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
