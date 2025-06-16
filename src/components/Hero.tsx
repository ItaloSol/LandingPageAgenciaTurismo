import React from 'react';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('pacotes');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main Heading - Optimized for mobile */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Descubra o Brasil de
          <br className="hidden sm:block" />
          <span className="text-orange-400"> Ônibus</span>
        </h1>
        
        {/* Subtitle - Better mobile spacing */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
          Viaje com conforto e segurança pelos destinos mais incríveis do país. 
          <br className="hidden sm:block" />
          Pacotes completos com guia especializado e experiências inesquecíveis.
        </p>

        {/* CTA Buttons - Mobile-first design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <button 
            onClick={scrollToPackages}
            className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center group min-h-[56px] touch-manipulation"
          >
            Explorar Pacotes
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 min-h-[56px] touch-manipulation"
          >
            Falar no WhatsApp
          </button>
        </div>

        {/* Stats Grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white border-opacity-20">
            <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</span>
            <span className="text-gray-200 text-sm sm:text-base text-center leading-tight">Clientes Satisfeitos</span>
          </div>
          
          <div className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white border-opacity-20">
            <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white mb-1">25+</span>
            <span className="text-gray-200 text-sm sm:text-base text-center leading-tight">Destinos Únicos</span>
          </div>
          
          <div className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white border-opacity-20">
            <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white mb-1">4.9</span>
            <span className="text-gray-200 text-sm sm:text-base text-center leading-tight">Avaliação Média</span>
          </div>
        </div>

        {/* Trust Badge - Mobile friendly */}
        <div className="mt-8 sm:mt-12">
          <div className="inline-flex items-center bg-white bg-opacity-15 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white border-opacity-30">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-white text-sm sm:text-base font-medium">
                Empresa Certificada ANTT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile for cleaner look */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center opacity-75">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;