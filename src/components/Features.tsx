import React from 'react';
import { Bus, Shield, Users, CreditCard, Headphones, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bus,
      title: 'Ônibus de Luxo',
      description: 'Frota moderna com ar-condicionado, poltronas reclináveis, wifi gratuito e sistema de entretenimento',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Motoristas experientes, seguro viagem incluso e acompanhamento 24h durante toda a jornada',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Guia Especializado',
      description: 'Acompanhamento de guias locais especialistas que conhecem todos os segredos do destino',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: CreditCard,
      title: 'Parcelamento Flexível',
      description: 'Parcele em até 12x sem juros no cartão de crédito ou pague à vista com desconto especial',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Headphones,
      title: 'Suporte 24/7',
      description: 'Atendimento especializado disponível 24 horas por dia durante toda sua viagem',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Mais de 15 anos de experiência, certificações ANTT e ABRATI, e garantia de satisfação',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-blue-700">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descobra por que milhares de viajantes escolhem a Viaje Mais Turismo 
            para suas aventuras pelo Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para sua Próxima Aventura?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de viajantes que já descobriram as maravilhas do Brasil conosco. 
            Sua próxima experiência inesquecível está a um clique de distância.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-200">
              Ver Pacotes Disponíveis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-200">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;