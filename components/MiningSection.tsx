
import React from 'react';
import { MapPin, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MiningSection: React.FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div ref={leftRef} className={`flex-1 space-y-8 opacity-0 ${leftVisible ? 'animate-fade-in-left' : ''}`}>
          <div className="inline-block px-4 py-2 rounded-full glass border border-yellow-500/30 text-yellow-700 text-xs font-bold uppercase tracking-widest">
            Strategic Assets
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-space leading-tight text-gray-900">
            200 Hectares of <br />
            <span className="emerald-gradient">Golden Potential</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We hold extensive mining claims in some of Zimbabwe's most prolific gold belts. Our operations integrate cutting-edge geological surveys with sustainable mining practices.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div ref={card1Ref} className={`p-6 rounded-3xl glass hover:border-gray-300 transition-all opacity-0 ${card1Visible ? 'animate-scale-in stagger-1' : ''}`}>
              <Zap className="w-8 h-8 text-yellow-600 mb-4" />
              <h4 className="font-bold text-xl mb-2 text-gray-900">Joint Ventures</h4>
              <p className="text-sm text-gray-600">Collaborate on large-scale extraction projects with high-yield potential.</p>
            </div>
            <div ref={card2Ref} className={`p-6 rounded-3xl glass hover:border-gray-300 transition-all opacity-0 ${card2Visible ? 'animate-scale-in stagger-2' : ''}`}>
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="font-bold text-xl mb-2 text-gray-900">Fully Licensed</h4>
              <p className="text-sm text-gray-600">All claims are government-registered and comply with international standards.</p>
            </div>
          </div>

          <button className="px-10 py-5 bg-yellow-500 text-white font-bold rounded-[2rem] hover:bg-yellow-600 transition-all flex items-center gap-2 shadow-lg">
            Investment Prospectus
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div ref={rightRef} className={`flex-1 relative opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}>
          <div className="absolute inset-0 bg-yellow-400/10 blur-[100px] rounded-full"></div>
          <div className="relative group">
            <img 
              src="https://ik.imagekit.io/ojfedrprt/benefits-of-gold-mining-image.jpeg" 
              alt="Zimbabwe Mining Site" 
              className="rounded-[3rem] w-full aspect-square object-cover border border-gray-200 group-hover:scale-[1.01] transition-transform duration-700 shadow-xl"
            />
            <div className="absolute bottom-10 left-10 glass p-6 rounded-[2rem] border border-gray-200 max-w-[200px] animate-float">
              <MapPin className="text-red-500 mb-2" />
              <p className="font-bold text-sm text-gray-900">Zimbabwe Gold belt</p>
              <p className="text-xs text-gray-600">National Reserve District</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningSection;
