
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-8">Secure Your <span className="gold-gradient">Legacy</span></h2>
          <p className="text-gray-400 mb-12 text-lg">
            Ready to partner with Zimbabwe's mineral elite? Whether you're an investor, a jeweler, or a trading house, let's start a conversation.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:border-yellow-500 transition-all">
                <Phone className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-gray-400">+263 770 000 000</p>
                <p className="text-gray-400">+263 242 123 456</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:border-yellow-500 transition-all">
                <Mail className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Inquiry</h4>
                <p className="text-gray-400">trade@tgizim.com</p>
                <p className="text-gray-400">invest@tgizim.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:border-yellow-500 transition-all">
                <MapPin className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                <p className="text-gray-400">100 Samora Machel Avenue</p>
                <p className="text-gray-400">Harare, Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[60px]"></div>
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Inquiry Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50 appearance-none text-gray-400">
                <option>Gold Trading</option>
                <option>Diamond Wholesale</option>
                <option>Joint Venture Investment</option>
                <option>Custom Jewelry Piece</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500/50" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button className="w-full py-5 bg-yellow-500 text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all">
              Send Transmission
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
