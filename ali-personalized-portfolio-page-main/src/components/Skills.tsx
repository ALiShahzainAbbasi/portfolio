
import React from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Server, 
  Blocks, 
  Cpu, 
  Terminal,
  Globe,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: Code2, color: 'gradient-primary' },
    { name: 'Solidity', icon: Blocks, color: 'gradient-secondary' },
    { name: 'Blockchain Development', icon: Zap, color: 'gradient-accent' },
    { name: 'React.js', icon: Globe, color: 'gradient-primary' },
    { name: 'Node.js', icon: Server, color: 'gradient-secondary' },
    { name: 'SQL', icon: Database, color: 'gradient-accent' },
    { name: 'Java', icon: Code2, color: 'gradient-primary' },
    { name: 'C/C++', icon: Terminal, color: 'gradient-secondary' },
    { name: 'AWS Cloud', icon: Cloud, color: 'gradient-accent' }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float glow-cyan"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float delay-500 glow-purple"></div>
        
        {/* Animated tech grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6 animate-gradient bg-300% animate-gradient-x">
            Technical Skills
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 group animate-fade-in hover:scale-105 hover:rotate-1 glow-purple"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${skill.color} p-4 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent size={32} className="text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
