import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Experiência incrível! O ônibus era muito confortável e o guia conhecia cada cantinho da Chapada Diamantina. Voltaria a viajar com eles sem dúvida!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763850?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Chapada Diamantina - BA'
    },
    {
      id: 2,
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Atendimento excepcional do início ao fim. A viagem para Gramado superou todas as expectativas. Organização perfeita e paisagens deslumbrantes!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Gramado & Canela - RS'
    },
    {
      id: 3,
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Bonito foi um sonho realizado! A flutuação foi espetacular e toda a logística da viagem funcionou perfeitamente. Equipe muito profissional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Bonito - MS'
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      location: 'Brasília, DF',
      rating: 5,
      text: 'Fernando de Noronha sempre foi um sonho. A ViagemExpress tornou isso realidade com muito conforto e segurança. Recomendo demais!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Fernando de Noronha - PE'
    },
    {
      id: 5,
      name: 'Lucia Ferreira',
      location: 'Porto Alegre, RS',
      rating: 5,
      text: 'Viagem dos sonhos no Pantanal! Vimos tantos animais e paisagens únicas. O conforto do ônibus e a atenção da equipe fizeram toda a diferença.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Pantanal - MT'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Nossos <span className="text-blue-700">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira os depoimentos de quem já viveu experiências incríveis conosco
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-blue-200" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </p>

                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentSlide].location}
                  </p>
                  <p className="text-blue-700 font-medium text-sm mt-1">
                    Viagem: {testimonials[currentSlide].trip}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-blue-700' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Quer compartilhar sua experiência conosco?
          </p>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-200">
            Deixar Avaliação
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;