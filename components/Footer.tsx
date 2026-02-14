
import React from 'react';
import { Twitter, Linkedin, Instagram, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3 group cursor-pointer">
              <Globe className="w-10 h-10 text-yellow-500" />
              <span className="text-2xl font-black font-sans tracking-tight">
                TGI
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Leading Zimbabwe's mineral revolution through transparency, innovation, and unwavering commitment to quality.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-yellow-500 transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Navigation</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Our Services</a></li>
              <li><a href="#mining" className="hover:text-yellow-500 transition-colors">Mining Claims</a></li>
              <li><a href="#investment" className="hover:text-yellow-500 transition-colors">Investment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Market Report 2026</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Ethics & Standards</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">KYC/AML Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Transcontinental Gems International. Registered in Zimbabwe.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Global Trading Platform Live
            </div>
          </div>
          
          <div className="flex items-center">
            <img 
              src="https://ik.imagekit.io/ojfedrprt/engineered_by_ruramai.png" 
              alt="Engineered by Ruramai" 
              className="h-16 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
