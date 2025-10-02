
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float glow-purple"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-700 glow-cyan"></div>
        
        {/* Techy grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-pulse delay-500"></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6 animate-gradient bg-300% animate-gradient-x">
            About Me
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="bg-card/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-border animate-fade-in delay-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 glow-purple">
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p className="text-xl mb-8 animate-slide-in-left">
              I'm a passionate Python & Blockchain Developer with Full Stack expertise, specializing in building 
              secure smart contracts and innovative decentralized applications. With a strong foundation in 
              technologies like Solidity, React.js, Node.js, and Solana, I create scalable Web3 solutions that 
              bridge the gap between traditional software and blockchain technology.
            </p>
            
            <p className="text-xl mb-8 animate-slide-in-right delay-200">
              My comprehensive skill set includes C, C++, Java, Python, and SQL, backed by IBM certifications 
              in Agile Development, DevOps, Cloud Computing, and Artificial Intelligence. I'm committed to 
              delivering reliable, user-friendly solutions that drive the future of blockchain and software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group animate-slide-in-bottom delay-500">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 glow-purple">
                <div className="text-3xl font-bold text-primary-foreground group-hover:animate-pulse">3+</div>
              </div>
              <div className="text-muted-foreground font-medium group-hover:text-primary transition-colors duration-300">Years Experience</div>
            </div>
            <div className="text-center group animate-slide-in-bottom delay-700">
              <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 glow-cyan">
                <div className="text-3xl font-bold text-primary-foreground group-hover:animate-pulse">50+</div>
              </div>
              <div className="text-muted-foreground font-medium group-hover:text-accent transition-colors duration-300">Projects Completed</div>
            </div>
            <div className="text-center group animate-slide-in-bottom delay-1000">
              <div className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 glow-pink">
                <div className="text-3xl font-bold text-primary-foreground group-hover:animate-pulse">8+</div>
              </div>
              <div className="text-muted-foreground font-medium group-hover:text-primary transition-colors duration-300">IBM Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
