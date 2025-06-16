import React from 'react';
import { Award, Clock, Shield, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: '15+', label: 'Anos de Experiência' },
    { icon: Award, value: '500+', label: 'Viagens Realizadas' },
    { icon: Shield, value: '100%', label: 'Segurança Garantida' },
    { icon: Heart, value: '4.9/5', label: 'Satisfação dos Clientes' }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sua Jornada Começa 
              <span className="text-blue-700"> Conosco</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Há mais de 15 anos, a Viaje Mais Turismo tem o privilégio de conectar pessoas 
              aos destinos mais belos do Brasil. Nossa missão é proporcionar experiências 
              de viagem únicas, com o máximo de conforto, segurança e alegria.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Com uma frota moderna de ônibus equipados com ar-condicionado, poltronas 
              reclináveis e sistema de entretenimento, garantimos que sua jornada seja 
              tão especial quanto o destino.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                Conhecer Nossa História
              </button>
              <button className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200">
                Ver Certificações
              </button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Ônibus de luxo da Viaje Mais Turismo"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center">
                <Award className="h-12 w-12 text-orange-500 mr-4" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">Certificada</p>
                  <p className="text-gray-600">ANTT & ABRATI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-blue-700" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;