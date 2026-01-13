import { useState } from 'react';
import { Menu, X, Flag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'START', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-f1-dark/90 backdrop-blur-md border-b-2 border-f1-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center font-black text-xl italic tracking-widest">
            <Flag className="text-f1-red mr-2 w-6 h-6" />
            PORT<span className="text-f1-red">FOLIO</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-f1-light hover:text-f1-red transition-colors duration-300 uppercase text-sm tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-f1-light hover:text-f1-red p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-f1-carbon border-b-2 border-f1-red">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-f1-light hover:text-f1-red block px-3 py-2 font-bold uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;