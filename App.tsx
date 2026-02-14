
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MiningSection from './components/MiningSection';
import InvestmentAssistant from './components/InvestmentAssistant';
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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-blue-900/10 blur-[100px] rounded-full"></div>
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

        <section id="mining" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent scroll-mt-20">
          <MiningSection />
        </section>

        <section id="investment" className="py-24 px-6 md:px-12 lg:px-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-space leading-tight">
                  TGI Digital <span className="gold-gradient">Concierge</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Experience the future of mineral investment. Our AI-powered assistant provides instant insights into the Zimbabwean gold belts, market trends, and joint venture opportunities with Transcontinental Gems International.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="glass p-4 rounded-2xl flex items-center gap-3">
                    <ShieldCheck className="text-yellow-500" />
                    <span className="text-sm font-medium">Licensed & Secure</span>
                  </div>
                  <div className="glass p-4 rounded-2xl flex items-center gap-3">
                    <TrendingUp className="text-emerald-500" />
                    <span className="text-sm font-medium">Market Analytics</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <InvestmentAssistant />
              </div>
            </div>
          </div>
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
