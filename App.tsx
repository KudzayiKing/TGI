
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MiningSection from './components/MiningSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-500/20">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-400/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-blue-400/5 blur-[100px] rounded-full"></div>
      </div>

      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrolled={scrolled} 
      />

      <main className="relative z-10">
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 scroll-mt-20">
          <Services />
        </section>

        <section id="mining" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-gray-50 to-transparent scroll-mt-20">
          <MiningSection />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 scroll-mt-20">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
