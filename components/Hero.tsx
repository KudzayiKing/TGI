
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, TrendingUp, TrendingDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });
  const [goldPrice, setGoldPrice] = useState(2650.50);
  const [silverPrice, setSilverPrice] = useState(30.25);

  // Simulate live price updates (replace with actual API call)
  useEffect(() => {
    const interval = setInterval(() => {
      setGoldPrice(prev => prev + (Math.random() - 0.5) * 2);
      setSilverPrice(prev => prev + (Math.random() - 0.5) * 0.1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32 md:pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="https://ik.imagekit.io/ojfedrprt/videoblocks-169-v-m-s_HTQLokzw-g__f24ab890d215f7b6cebb9c06c8632942__P1080.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Live Spot Prices Ticker */}
      <div className="absolute top-28 md:top-28 left-0 right-0 z-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass rounded-2xl p-4 flex items-center justify-center gap-8 md:gap-12 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-yellow-700 font-bold text-sm">AU</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Gold Spot</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-gray-900">${goldPrice.toFixed(2)}</p>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-gray-300"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300/50 flex items-center justify-center">
                <span className="text-gray-700 font-bold text-sm">AG</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Silver Spot</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-gray-900">${silverPrice.toFixed(2)}</p>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 ml-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-gray-500">Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 mt-20 md:mt-0">
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
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24 mb-8 md:mb-0">
          {[
            { label: 'Mining Claims', value: '200+ Ha', delay: 'stagger-1' },
            { label: 'Gold Purity', value: '24 Karat', delay: 'stagger-2' },
            { label: 'Global Partners', value: '50+', delay: 'stagger-3' },
            { label: 'Experience', value: '15+ Yrs', delay: 'stagger-4' }
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-3xl group hover:border-yellow-500/50 transition-all opacity-0 backdrop-blur-md bg-white/30 border border-white/40 shadow-xl ${statsVisible ? `animate-scale-in ${stat.delay}` : ''}`}>
              <p className="text-gray-700 text-xs uppercase tracking-widest mb-2 font-semibold">{stat.label}</p>
              <p className="text-2xl font-bold font-space text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
