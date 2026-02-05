import imgAbout from '../assets/about.jpg';

const About = () => {
  return (
    <section id="quienes-somos" className="min-h-screen pt-45 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-carpentry-brown">Quiénes Somos</h2>
            <p className="text-gray-600 mb-4 text-lg">

              En J&S Carpintería nos dedicamos a la fabricación artesanal de muebles de madera a medida, combinando tradición y calidad en cada proyecto.

              Con años de experiencia en el rubro, hemos perfeccionado nuestras técnicas para ofrecer productos duraderos y de excelente terminación, adaptados a las necesidades específicas de cada cliente.

              Nuestro compromiso es entregar muebles que no solo sean funcionales, sino también piezas únicas que aporten calidez y estilo a tu hogar o negocio. Trabajamos con maderas de alta calidad y brindamos atención personalizada en cada etapa del proceso.

              Desde el diseño inicial hasta la instalación final, nos aseguramos de que cada detalle refleje el trabajo artesanal y la dedicación que nos caracteriza.            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <span className="block text-4xl font-bold text-carpentry-gold">15+</span>
                <span className="text-gray-500 text-sm">Años de experiencia</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-carpentry-gold">500+</span>
                <span className="text-gray-500 text-sm">Proyectos realizados</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-300 h-80 rounded-2xl flex items-center justify-center">
            <img src={imgAbout} alt="Imagen de Trabajo Artesanal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;