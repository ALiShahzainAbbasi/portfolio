import React from 'react';
import { Brain, Code, Shield, Server, Globe, Layers, GitBranch, Cloud, Zap } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: 'Develop Generative AI Applications: Get Started',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'RAFQK593DXXE',
      category: 'AI/ML'
    },
    {
      title: 'Application Development using Microservices and Serverless',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'FB6KPPF00KQD',
      category: 'Backend'
    },
    {
      title: 'Blockchain Security Advanced Protection',
      issuer: 'LearnQuest',
      date: 'Jun 2025',
      credentialId: '1BUC2XC0WDIW',
      category: 'Blockchain'
    },
    {
      title: 'Blockchain Security - Foundational Concepts',
      issuer: 'LearnQuest',
      date: 'Jun 2025',
      credentialId: '64ZIN7NTSQE3',
      category: 'Blockchain'
    },
    {
      title: 'Blockchain Security - Intermediate Practices',
      issuer: 'LearnQuest',
      date: 'Jun 2025',
      credentialId: 'SL2S0QP5HYFB',
      category: 'Blockchain'
    },
    {
      title: 'Build RAG Applications: Get Started',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'YLDC0MRK6KWM',
      category: 'AI/ML'
    },
    {
      title: 'Developing AI Applications with Python and Flask',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: '5PG87FSDR3LB',
      category: 'AI/ML'
    },
    {
      title: 'Developing Back-End Apps with Node.js and Express',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'H03UQ20OT0C5',
      category: 'Backend'
    },
    {
      title: 'Developing Front-End Apps with React',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'RM35SOGI9SEU',
      category: 'Frontend'
    },
    {
      title: 'Django Application Development with SQL and Databases',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'BOTTCAJGND9K',
      category: 'Backend'
    },
    {
      title: 'Full Stack Application Development Capstone Project',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'I9JIWWE8AAKL',
      category: 'Full Stack'
    },
    {
      title: 'Full Stack Software Developer Assessment',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'NBHCSC7J6AF5',
      category: 'Full Stack'
    },
    {
      title: 'Getting Started with Git and GitHub',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: '2A9SJM1OSEQM',
      category: 'Tools'
    },
    {
      title: 'Introduction to Cloud Computing',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'VFK9CGM3RCY8',
      category: 'Cloud'
    },
    {
      title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'YRWYKLAEDOP6',
      category: 'DevOps'
    },
    {
      title: 'Introduction to HTML, CSS, & JavaScript',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'XE9D2F1SOBOF',
      category: 'Frontend'
    },
    {
      title: 'Introduction to Software Engineering',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'V5VZRTZ6QR2A',
      category: 'Software Engineering'
    },
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: '6SDAMS1QHS8F',
      category: 'AI/ML'
    },
    {
      title: 'Software Developer Career Guide and Interview Preparation',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: 'SDKKRI1WZFMG',
      category: 'Career'
    }
  ];

  const getCategoryIcon = (category: string) => {
    const icons = {
      'AI/ML': <Brain size={24} className="text-white" />,
      'Blockchain': <Shield size={24} className="text-white" />,
      'Backend': <Server size={24} className="text-white" />,
      'Frontend': <Code size={24} className="text-white" />,
      'Full Stack': <Layers size={24} className="text-white" />,
      'DevOps': <Cloud size={24} className="text-white" />,
      'Cloud': <Globe size={24} className="text-white" />,
      'Tools': <GitBranch size={24} className="text-white" />,
      'Software Engineering': <Zap size={24} className="text-white" />,
      'Career': <Code size={24} className="text-white" />
    };
    return icons[category as keyof typeof icons] || <Code size={24} className="text-white" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'bg-gradient-to-br from-purple-500 to-pink-600',
      'Blockchain': 'bg-gradient-to-br from-blue-500 to-cyan-600',
      'Backend': 'bg-gradient-to-br from-green-500 to-emerald-600',
      'Frontend': 'bg-gradient-to-br from-orange-500 to-red-600',
      'Full Stack': 'bg-gradient-to-br from-indigo-500 to-purple-600',
      'DevOps': 'bg-gradient-to-br from-teal-500 to-blue-600',
      'Cloud': 'bg-gradient-to-br from-sky-500 to-blue-600',
      'Tools': 'bg-gradient-to-br from-gray-500 to-slate-600',
      'Software Engineering': 'bg-gradient-to-br from-yellow-500 to-orange-600',
      'Career': 'bg-gradient-to-br from-pink-500 to-rose-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-br from-purple-500 to-pink-600';
  };

  return (
    <section id="certificates" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float glow-purple"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-1000 glow-cyan"></div>
        
        {/* Animated certificate pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse delay-500"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6 animate-gradient bg-300% animate-gradient-x">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-card/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 group animate-fade-in hover:scale-105 hover:-translate-y-1 glow-purple"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${getCategoryColor(cert.category)} p-4 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  {getCategoryIcon(cert.category)}
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full font-medium">
                  {cert.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center justify-center">
                <span className="text-base font-semibold text-primary bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;