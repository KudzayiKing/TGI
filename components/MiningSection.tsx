
import React from 'react';
import { MapPin, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

const MiningSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-2 rounded-full glass border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest">
            Strategic Assets
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-space leading-tight">
            200 Hectares of <br />
            <span className="emerald-gradient">Golden Potential</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We hold extensive mining claims in some of Zimbabwe's most prolific gold belts. Our operations integrate cutting-edge geological surveys with sustainable mining practices.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl glass hover:border-white/20 transition-all">
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <h4 className="font-bold text-xl mb-2">Joint Ventures</h4>
              <p className="text-sm text-gray-400">Collaborate on large-scale extraction projects with high-yield potential.</p>
            </div>
            <div className="p-6 rounded-3xl glass hover:border-white/20 transition-all">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
              <h4 className="font-bold text-xl mb-2">Fully Licensed</h4>
              <p className="text-sm text-gray-400">All claims are government-registered and comply with international standards.</p>
            </div>
          </div>

          <button className="px-10 py-5 bg-white text-black font-bold rounded-[2rem] hover:bg-yellow-500 transition-all flex items-center gap-2">
            Investment Prospectus
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-full"></div>
          <div className="relative group">
            <img 
              src="https://ik.imagekit.io/ojfedrprt/benefits-of-gold-mining-image.jpeg" 
              alt="Zimbabwe Mining Site" 
              className="rounded-[3rem] w-full aspect-square object-cover border border-white/10 group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute bottom-10 left-10 glass p-6 rounded-[2rem] border border-white/20 max-w-[200px] animate-float">
              <MapPin className="text-red-500 mb-2" />
              <p className="font-bold text-sm">Zimbabwe Gold belt</p>
              <p className="text-xs text-gray-400">National Reserve District</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningSection;
