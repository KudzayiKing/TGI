
import React from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Mining', href: '#mining' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-gray-200' : 'py-8 bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <Globe className="w-8 h-8 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-20 group-hover:opacity-40"></div>
          </div>
          <span className="text-2xl font-black tracking-tight font-sans text-gray-900">
            TGI
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full hover:bg-yellow-600 transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-6 gap-6 md:hidden animate-in fade-in slide-in-from-top-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-gray-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-4 bg-yellow-500 text-center text-white font-bold rounded-xl hover:bg-yellow-600"
          >
            Inquire Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
