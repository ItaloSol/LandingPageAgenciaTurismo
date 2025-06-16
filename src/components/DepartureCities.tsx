import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const DepartureCities = () => {
  const cities = [
    {
      city: 'São João Del Rey',
      state: 'MG',
      address: 'Rodoviária de São João Del Rey - Av. Leite de Castro, 1200',
      time: '06:00 - 20:00',
      phone: '(32) 3371-2345',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Barbacena',
      state: 'MG',
      address: 'Terminal Rodoviário - Av. Bias Fortes, 890 - Centro',
      time: '05:30 - 21:30',
      phone: '(32) 3331-4567',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Lavras',
      state: 'MG',
      address: 'Rodoviária de Lavras - Av. Dr. Sylvio Menicucci, 1000',
      time: '06:00 - 20:30',
      phone: '(35) 3821-6789',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Varginha',
      state: 'MG',
      address: 'Terminal Rodoviário - Av. Princesa do Sul, 1500 - Centro',
      time: '05:45 - 21:00',
      phone: '(35) 3214-5678',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Rio de Janeiro',
      state: 'RJ',
      address: 'Novo Rio - Av. Francisco Bicalho, 1 - Santo Cristo',
      time: '05:30 - 23:30',
      phone: '(21) 2291-5151',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Belo Horizonte',
      state: 'MG',
      address: 'Terminal Rodoviário - Praça Rio Branco, 100 - Centro',
      time: '05:00 - 23:00',
      phone: '(31) 3271-3000',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cidades de <span className="text-blue-700">Embarque</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temos pontos de embarque estratégicos em Minas Gerais e Rio de Janeiro. 
            Encontre o mais próximo de você!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={city.image}
                  alt={`${city.city} - ${city.state}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full font-semibold">
                  {city.state}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {city.city}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{city.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">
                      Funcionamento: {city.time}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{city.phone}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                    Ver Horários
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-700 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Precisa de Embarque em Outra Cidade?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco! Podemos organizar pontos de encontro especiais 
            para grupos ou avaliar a inclusão de novas cidades de embarque.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-200">
              Solicitar Ponto Especial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-200">
              Falar com Atendimento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartureCities;