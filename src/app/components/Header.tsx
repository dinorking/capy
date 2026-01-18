import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  whatsappUrl: string;
}

export function Header({ whatsappUrl }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-50 via-emerald-50 to-yellow-50 backdrop-blur-md border-b-4 border-emerald-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-emerald-700 flex items-center gap-2">
              <span className="text-2xl">🦫</span>
              Capy Lucia Pelúcia
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('edicoes')}
              className="text-emerald-700 hover:text-cyan-600 transition-colors font-semibold"
            >
              Edições
            </button>
            <button
              onClick={() => scrollToSection('detalhes')}
              className="text-emerald-700 hover:text-cyan-600 transition-colors font-semibold"
            >
              Detalhes
            </button>
            <button
              onClick={() => scrollToSection('como-comprar')}
              className="text-emerald-700 hover:text-cyan-600 transition-colors font-semibold"
            >
              Como comprar
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-emerald-700 hover:text-cyan-600 transition-colors font-semibold"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-emerald-700 hover:text-cyan-600 transition-colors font-semibold"
            >
              FAQ
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-colors shadow-md font-bold"
            >
              Quero minha Capy 🐾
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-emerald-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t-2 border-emerald-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('edicoes')}
              className="block w-full text-left px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg font-semibold"
            >
              Edições
            </button>
            <button
              onClick={() => scrollToSection('detalhes')}
              className="block w-full text-left px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg font-semibold"
            >
              Detalhes
            </button>
            <button
              onClick={() => scrollToSection('como-comprar')}
              className="block w-full text-left px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg font-semibold"
            >
              Como comprar
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg font-semibold"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg font-semibold"
            >
              FAQ
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-colors shadow-md font-bold"
            >
              Quero minha Capy 🐾
            </a>
          </div>
        </div>
      )}
    </header>
  );
}