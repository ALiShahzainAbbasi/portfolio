
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background pt-20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float glow-purple opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float delay-1000 glow-cyan opacity-60"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-2xl animate-float delay-500 glow-pink opacity-40"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 to-transparent animate-pulse delay-2000"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Interactive cursor effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block group">
            {/* Simple elegant glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl scale-110 animate-pulse"></div>
            
            {/* Subtle rotating gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-transparent to-accent/30 animate-spin-slow scale-110 blur-sm"></div>
            
            <img 
              src="/placeholder.svg"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-2xl border-4 border-border/50 relative z-10 transition-all duration-500 hover:scale-105 glow-purple"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6 animate-fade-in delay-300 relative">
          <span className="animate-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent bg-300% animate-gradient-x">
            Ali Shahzain Abbasi
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          Python & Blockchain Developer with Full Stack expertise, specializing in building 
          secure smart contracts and innovative decentralized applications.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 animate-fade-in delay-700">
          <a 
            href="mailto:Alishahzain123@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 group hover:scale-105 transform"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 glow-purple">
              <Mail size={20} className="text-primary group-hover:animate-bounce" />
            </div>
            <span className="group-hover:animate-pulse">Alishahzain123@gmail.com</span>
          </a>
          <a 
            href="tel:00923182046028"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-500 group hover:scale-105 transform"
          >
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 glow-cyan">
              <Phone size={20} className="text-accent group-hover:animate-bounce" />
            </div>
            <span className="group-hover:animate-pulse">00923182046028</span>
          </a>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in delay-1000">
          <a 
            href="https://github.com/ALiShahzainAbbasi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 gradient-primary text-primary-foreground rounded-2xl flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-500 hover:rotate-3 transform group glow-purple"
          >
            <Github size={24} className="group-hover:animate-pulse" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ali-abbasi-b62b15246/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 gradient-secondary text-primary-foreground rounded-2xl flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-500 hover:-rotate-3 transform group glow-cyan"
          >
            <Linkedin size={24} className="group-hover:animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
