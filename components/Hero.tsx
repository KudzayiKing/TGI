
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Media Placeholder/Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Gold and Gems"
          className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-yellow-500">Leading the African Frontier</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold font-space tracking-tight mb-8 leading-[1.1]">
          The Future of <br />
          <span className="gold-gradient">Zimbabwean Wealth</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Transcontinental Gems International: Your premier partner in gold trading, diamond exports, and elite custom jewelry from the heart of Southern Africa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-yellow-400 transition-all hover:-translate-y-1 shadow-2xl shadow-yellow-500/20">
            Explore Assets
            <ChevronRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 glass text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-all">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-4 h-4 fill-white" />
            </div>
            View Mining Claims
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
          {[
            { label: 'Mining Claims', value: '200+ Ha' },
            { label: 'Gold Purity', value: '24 Karat' },
            { label: 'Global Partners', value: '50+' },
            { label: 'Experience', value: '15+ Yrs' }
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-3xl group hover:border-yellow-500/50 transition-all">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-bold font-space text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
