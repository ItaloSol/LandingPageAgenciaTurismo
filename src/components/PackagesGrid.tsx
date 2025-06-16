import React, { useState } from 'react';
import { MapPin, Calendar, DollarSign, Users, Clock, Star } from 'lucide-react';

const PackagesGrid = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos os Pacotes' },
    { id: 'nordeste', label: 'Nordeste' },
    { id: 'sul', label: 'Sul' },
    { id: 'sudeste', label: 'Sudeste' },
    { id: 'centro-oeste', label: 'Centro-Oeste' }
  ];

  const packages = [
    {
      id: 1,
      title: 'Chapada Diamantina - BA',
      region: 'nordeste',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 1290,
      duration: '5 dias',
      departure: '15/04/2024',
      rating: 4.9,
      features: ['Guia especializado', 'Hospedagem inclusa', 'Todas as refeições']
    },
    {
      id: 2,
      title: 'Gramado & Canela - RS',
      region: 'sul',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 890,
      duration: '4 dias',
      departure: '22/04/2024',
      rating: 4.8,
      features: ['City tour', 'Degustação de vinhos', 'Passeio de trem']
    },
    {
      id: 3,
      title: 'Bonito - MS',
      region: 'centro-oeste',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 1590,
      duration: '6 dias',
      departure: '01/05/2024',
      rating: 5.0,
      features: ['Flutuação', 'Grutas', 'Cachoeiras']
    },
    {
      id: 4,
      title: 'Fernando de Noronha - PE',
      region: 'nordeste',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 2290,
      duration: '7 dias',
      departure: '08/05/2024',
      rating: 4.9,
      features: ['Mergulho', 'Trilhas ecológicas', 'Pôr do sol']
    },
    {
      id: 5,
      title: 'Campos do Jordão - SP',
      region: 'sudeste',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 690,
      duration: '3 dias',
      departure: '12/05/2024',
      rating: 4.7,
      features: ['Bondinho', 'Cervejarias', 'Chocolate']
    },
    {
      id: 6,
      title: 'Pantanal - MT',
      region: 'centro-oeste',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 1890,
      duration: '8 dias',
      departure: '20/05/2024',
      rating: 4.8,
      features: ['Safari fotográfico', 'Pesca esportiva', 'Observação de aves']
    }
  ];

  const filteredPackages = activeFilter === 'todos' 
    ? packages 
    : packages.filter(pkg => pkg.region === activeFilter);

  return (
    <section id="pacotes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-blue-700">Pacotes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha entre nossos destinos cuidadosamente selecionados para 
            proporcionar experiências únicas e inesquecíveis
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.duration}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold">{pkg.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Saída: {pkg.departure}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <ul className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-700">
                      R$ {pkg.price.toLocaleString()}
                    </span>
                    <p className="text-sm text-gray-500">por pessoa</p>
                  </div>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors duration-200">
            Ver Todos os Pacotes
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesGrid;