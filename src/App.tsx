import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PackagesGrid from './components/PackagesGrid';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PhotoGallery from './components/PhotoGallery';
import DepartureCities from './components/DepartureCities';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <PackagesGrid />
      <HowItWorks />
      <Features />
      <Testimonials />
      <PhotoGallery />
      <DepartureCities />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;