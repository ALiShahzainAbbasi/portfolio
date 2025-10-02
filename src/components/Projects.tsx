
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Code Reviewer',
      description: 'Built an intelligent code review system using Python, machine learning models, and React frontend. Features automated code analysis, security vulnerability detection, and performance optimization suggestions.',
      tech: ['Python', 'TensorFlow', 'React', 'Flask', 'PostgreSQL'],
      gradient: 'gradient-primary',
      github: 'https://github.com/ALiShahzainAbbasi/ai-code-reviewer',
      demo: 'https://ai-code-reviewer.demo.com'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Developed a scalable real-time messaging platform using Node.js, Socket.io, and React. Includes end-to-end encryption, file sharing, group chats, and message history.',
      tech: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Redis'],
      gradient: 'gradient-accent',
      github: 'https://github.com/ALiShahzainAbbasi/realtime-chat',
      demo: 'https://realtime-chat.demo.com'
    },
    {
      title: 'Cloud Infrastructure Monitor',
      description: 'Created a comprehensive monitoring dashboard for AWS infrastructure using serverless architecture. Features automated alerts, performance metrics visualization, and cost optimization.',
      tech: ['AWS Lambda', 'CloudWatch', 'React', 'DynamoDB', 'API Gateway'],
      gradient: 'gradient-secondary',
      github: 'https://github.com/ALiShahzainAbbasi/cloud-monitor',
      demo: 'https://cloud-monitor.demo.com'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float glow-purple"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float delay-1000 glow-cyan"></div>
        
        {/* Animated tech pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-pulse delay-700"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6 animate-gradient bg-300% animate-gradient-x">
            Featured Projects
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in hover:scale-105 hover:rotate-1 glow-purple"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-secondary/10 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className={`w-full h-2 ${project.gradient} rounded-full mb-6 group-hover:h-3 transition-all duration-300 group-hover:animate-pulse`}></div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced visual indicator for the tech stack */}
                  <div className="mt-4 text-center">
                    <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
