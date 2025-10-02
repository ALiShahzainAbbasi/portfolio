
import React from 'react';
import { User, Code2, Server, Database, Terminal, Github, Linkedin, Shield, Coins } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-white">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-10 text-6xl font-mono text-blue-200">{'<>'}</div>
        <div className="absolute top-32 right-20 text-4xl font-mono text-indigo-200">{'[]'}</div>
        <div className="absolute bottom-20 left-32 text-5xl font-mono text-blue-200">{'()'}</div>
        <div className="absolute bottom-32 right-10 text-3xl font-mono text-indigo-200">{'#'}</div>
        <div className="absolute top-1/2 left-1/4 text-4xl font-mono text-slate-200">{'≡'}</div>
        <div className="absolute top-3/4 right-1/3 text-3xl font-mono text-blue-200">{'₿'}</div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-blue-500/25 group-hover:scale-105">
                <img 
                  src="/me.png"
                  alt="Profile"
                  className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300 group-hover:border-blue-100"
                />
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <Coins className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="mb-6">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-3">
                Hi, I'm Ali Shahzain Abbasi! 
              </h2>
              <div className="flex items-center gap-2 text-xl font-mono text-slate-600">
                <span className="text-blue-600">const</span>
                <span className="text-indigo-600">blockchainDev</span>
                <span className="text-blue-600">=</span>
                <span className="text-emerald-600">"innovative"</span>
                <span className="animate-pulse text-slate-400">|</span>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-6 mb-8 font-mono text-sm border border-slate-200 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-slate-400 ml-2">ali-shahzain-profile.py</span>
              </div>
              <div className="text-slate-300">
                <span className="text-blue-400">class</span> <span className="text-yellow-300">BlockchainDeveloper</span>:{'{'}
                <br />
                <span className="ml-4 text-indigo-400">def</span> <span className="text-green-400">__init__</span>(<span className="text-slate-400">self</span>):
                <br />
                <span className="ml-8 text-slate-400">self</span>.<span className="text-green-400">specialization</span> = <span className="text-orange-400">'Python & Blockchain'</span>
                <br />
                <span className="ml-8 text-slate-400">self</span>.<span className="text-green-400">expertise</span> = [<span className="text-orange-400">'Solidity', 'Web3', 'DApps'</span>]
                <br />
                <span className="ml-8 text-slate-400">self</span>.<span className="text-green-400">stack</span> = [<span className="text-orange-400">'React', 'Node.js', 'Solana'</span>]
                <br />
                <span className="ml-8 text-slate-400">self</span>.<span className="text-green-400">certifications</span> = <span className="text-orange-400">'IBM_verified'</span>
                <br />
                {'}'}
              </div>
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-8 font-light">
              I'm a passionate Python & Blockchain Developer with Full Stack expertise, specializing in building 
              secure smart contracts and innovative decentralized applications. With a strong foundation in 
              technologies like Solidity, React.js, Node.js, and Solana, I create scalable Web3 solutions that 
              bridge the gap between traditional software and blockchain technology. My comprehensive skill set 
              includes C, C++, Java, Python, and SQL, backed by IBM certifications in Agile Development, DevOps, 
              Cloud Computing, and Artificial Intelligence. I'm committed to delivering reliable, user-friendly 
              solutions that drive the future of blockchain and software development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-full border border-blue-200 hover:shadow-md transition-all duration-300">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Blockchain Developer</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-slate-50 px-4 py-3 rounded-full border border-indigo-200 hover:shadow-md transition-all duration-300">
                <Code2 className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-800 font-medium">Full Stack Developer</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-blue-50 px-4 py-3 rounded-full border border-emerald-200 hover:shadow-md transition-all duration-300">
                <Database className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-medium">Python Expert</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/ALiShahzainAbbasi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-lg font-medium">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ali-abbasi-b62b15246/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg font-medium">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
