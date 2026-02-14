
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32 md:pt-20 overflow-hidden">
      {/* Background Media Placeholder/Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Gold and Gems"
          className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-yellow-700">Leading the African Frontier</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold font-space tracking-tight mb-8 leading-[1.1] text-gray-900">
          The Future of <br />
          <span className="gold-gradient">Zimbabwean Wealth</span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Transcontinental Gems International: Your premier partner in gold trading, diamond exports, and elite custom jewelry from the heart of Southern Africa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-yellow-600 transition-all hover:-translate-y-1 shadow-2xl shadow-yellow-500/20">
            Explore Assets
            <ChevronRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 glass text-gray-900 font-bold rounded-2xl flex items-center gap-2 hover:bg-gray-100 transition-all">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Play className="w-4 h-4 fill-gray-900" />
            </div>
            View Mining Claims
          </button>
        </div>

        {/* Floating Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
          {[
            { label: 'Mining Claims', value: '200+ Ha', delay: 'stagger-1' },
            { label: 'Gold Purity', value: '24 Karat', delay: 'stagger-2' },
            { label: 'Global Partners', value: '50+', delay: 'stagger-3' },
            { label: 'Experience', value: '15+ Yrs', delay: 'stagger-4' }
          ].map((stat, i) => (
            <div key={i} className={`glass p-6 rounded-3xl group hover:border-yellow-500/50 transition-all opacity-0 ${statsVisible ? `animate-scale-in ${stat.delay}` : ''}`}>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-bold font-space text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
