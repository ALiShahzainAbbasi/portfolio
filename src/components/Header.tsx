
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b border-border z-50 shadow-sm animate-slide-in-top">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-gradient bg-300% animate-gradient-x hover:scale-105 transition-transform duration-300 cursor-pointer">
            Ali Shahzain Abbasi
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group hover:scale-110 hover:-translate-y-1"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group hover:scale-110 hover:-translate-y-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group hover:scale-110 hover:-translate-y-1"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group hover:scale-110 hover:-translate-y-1"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110 hover:rotate-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="animate-spin text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border animate-fade-in">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium w-full text-left p-2 rounded-lg hover:bg-primary/10 hover:scale-105"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium w-full text-left p-2 rounded-lg hover:bg-primary/10 hover:scale-105"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium w-full text-left p-2 rounded-lg hover:bg-primary/10 hover:scale-105"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium w-full text-left p-2 rounded-lg hover:bg-primary/10 hover:scale-105"
            >
              Projects
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
