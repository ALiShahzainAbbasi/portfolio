
import React from 'react';
import { ExternalLink, Github, Code, Database, Cloud } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Code Reviewer',
      description: 'Built an intelligent code review system using Python, machine learning models, and React frontend. Features automated code analysis, security vulnerability detection, and performance optimization suggestions with real-time feedback.',
      tech: ['Python', 'TensorFlow', 'React', 'Flask', 'PostgreSQL'],
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Developed a scalable real-time messaging platform using Node.js, Socket.io, and React. Includes features like end-to-end encryption, file sharing, group chats, message history, and user presence indicators.',
      tech: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Redis'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'Cloud Infrastructure Monitor',
      description: 'Created a comprehensive monitoring dashboard for AWS infrastructure using serverless architecture. Features automated alerts, performance metrics visualization, cost optimization recommendations, and infrastructure health checks.',
      tech: ['AWS Lambda', 'CloudWatch', 'React', 'DynamoDB', 'API Gateway'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-4 text-lg font-light">Recent work and contributions</p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-slate-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <div className="lg:w-3/4">
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full text-sm border border-blue-500/30 text-blue-200 backdrop-blur-sm hover:from-blue-600/30 hover:to-indigo-600/30 transition-all duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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

export default ProjectsSection;
