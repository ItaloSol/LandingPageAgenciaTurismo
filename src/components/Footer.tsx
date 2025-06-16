import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Sobre Nós',
    'Nossos Pacotes',
    'Política de Privacidade',
    'Termos de Uso',
    'FAQ',
    'Blog'
  ];

  const destinations = [
    'Chapada Diamantina',
    'Fernando de Noronha',
    'Bonito',
    'Gramado & Canela',
    'Pantanal',
    'Campos do Jordão'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Viaje Mais Turismo</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Há mais de 15 anos proporcionando experiências de viagem únicas 
              e inesquecíveis por todo o Brasil. Sua aventura começa aqui.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">(32) 9141-7725</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">contato@viajemaisturismo.com.br</span>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">
                  São João Del Rey - MG<br />
                  Atendemos toda região de MG e RJ
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-6">Destinos Populares</h3>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Conecte-se Conosco</h3>
            
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Receba ofertas especiais e novidades sobre nossos destinos!
              </p>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-4">Siga-nos nas redes sociais:</p>
              <div className="flex space-x-4">
                <a 
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
              <div className="text-center">
                <p className="text-sm text-gray-400">Empresa Certificada</p>
                <p className="font-semibold">ANTT & ABRATI</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Registro ANTT</p>
                <p className="font-semibold">12345678-9</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Selo de Qualidade</p>
                <p className="font-semibold">ISO 9001:2015</p>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Voltar ao Topo
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Viaje Mais Turismo. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Cookies
                </a>
              </div>
              <div className="text-gray-500 text-sm">
                Desenvolvido por{' '}
                <a 
                  href="https://www.instagram.com/landingpagecraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  LandingPageCraft
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;