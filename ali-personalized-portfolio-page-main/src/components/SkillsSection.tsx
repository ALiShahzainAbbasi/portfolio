
import React from 'react';

const SkillsSection = () => {
  const skills = [
    {
      name: 'Python',
      experience: '3+ years experience',
      icon: '🐍',
      level: 95,
      description: 'Core programming, algorithms, automation, blockchain development'
    },
    {
      name: 'Solidity',
      experience: '2.5 years experience', 
      icon: '⛓️',
      level: 90,
      description: 'Smart contracts, DApps, Web3 development'
    },
    {
      name: 'Blockchain Development',
      experience: '2.5 years experience',
      icon: '🔗',
      level: 88,
      description: 'DApps, smart contracts, Solana, Web3 solutions'
    },
    {
      name: 'React.js',
      experience: '3 years experience',
      icon: '⚛️',
      level: 85,
      description: 'Component-based UI, full-stack development'
    },
    {
      name: 'Node.js',
      experience: '2.5 years experience',
      icon: '🟢',
      level: 82,
      description: 'Server-side development, APIs, backend solutions'
    },
    {
      name: 'SQL',
      experience: '3 years experience',
      icon: '🗄️',
      level: 88,
      description: 'Database design, optimization, data management'
    },
    {
      name: 'Java',
      experience: '2.5 years experience',
      icon: '☕',
      level: 80,
      description: 'Object-oriented programming, enterprise applications'
    },
    {
      name: 'C/C++',
      experience: '2 years experience',
      icon: '⚙️',
      level: 75,
      description: 'System programming, algorithms, data structures'
    },
    {
      name: 'AWS Cloud',
      experience: 'IBM Certified',
      icon: '☁️',
      level: 78,
      description: 'Cloud computing, deployment, scalable solutions'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-3 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300 font-mono text-2xl animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {['{}', '[]', '<>', '/>', '()', '&&', '||'][Math.floor(Math.random() * 7)]}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg font-light">Technologies I work with to build innovative solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-blue-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-indigo-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 group-hover:text-indigo-600 transition-colors duration-300">
                      {skill.level}%
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-slate-500 mb-3 font-medium">{skill.experience}</p>
                
                <p className="text-slate-600 text-sm mb-4 font-light">{skill.description}</p>
                
                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 mb-2 overflow-hidden">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      transform: 'translateX(-100%)',
                      animation: `slideIn 1.5s ease-out ${index * 0.2}s forwards`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
