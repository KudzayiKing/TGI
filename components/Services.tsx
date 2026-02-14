
import React from 'react';
import { Coins, Diamond, Gem, Palette } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceCard = ({ title, description, icon: Icon, gradient, img, delay }: any) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-[2.5rem] p-1 transition-all hover:scale-[1.02] flex flex-col min-h-[420px] opacity-0 border border-gray-200 ${isVisible ? 'animate-fade-in-up' : ''} ${delay}`}
    >
      <div className="absolute inset-0 opacity-100 group-hover:opacity-90 transition-opacity duration-500">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative p-10 h-full flex flex-col justify-end z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${gradient} bg-opacity-90 border border-white/20 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 font-space text-white">{title}</h3>
        <p className="text-gray-200 leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="max-w-7xl mx-auto">
      <div ref={headerRef} className={`text-center mb-20 opacity-0 ${headerVisible ? 'animate-fade-in-up' : ''}`}>
        <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">World Class <span className="gold-gradient">Expertise</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">From the raw veins of the earth to the refined brilliance of a masterpiece, TGI handles the entire mineral lifecycle with unmatched precision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          title="Gold Trading"
          description="Direct sourcing and trading of Zimbabwean gold bullions and nuggets, ensuring 24K purity and ethical chain of custody."
          icon={Coins}
          gradient="bg-yellow-500"
          img="https://ik.imagekit.io/ojfedrprt/goldtrading.jpeg"
          delay="stagger-1"
        />
        <ServiceCard
          title="Diamond Export"
          description="Wholesale distribution of premium rough and polished diamonds sourced from certified Zimbabwean mines."
          icon={Diamond}
          gradient="bg-blue-500"
          img="https://ik.imagekit.io/ojfedrprt/20160305000536-diamond.jpeg"
          delay="stagger-2"
        />
        <ServiceCard
          title="Emerald Trading"
          description="Specializing in the rare Sandawana emeralds, renowned globally for their deep vivid green hue and exceptional quality."
          icon={Gem}
          gradient="bg-emerald-500"
          img="https://ik.imagekit.io/ojfedrprt/pica890.tmp.jpeg"
          delay="stagger-3"
        />
        <ServiceCard
          title="Custom Jewelry"
          description="Bespoke jewelry design services where traditional craftsmanship meets futuristic vision for the world's elite."
          icon={Palette}
          gradient="bg-purple-500"
          img="https://ik.imagekit.io/ojfedrprt/663315%206%20Finished.jpg"
          delay="stagger-4"
        />
      </div>
    </div>
  );
};

export default Services;
