
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Star, Quote, Send } from 'lucide-react';

const RecommendationsSection = () => {
  const [recommendations, setRecommendations] = useState([
    {
      name: 'Dr. Sarah Johnson',
      title: 'Professor of Computer Science',
      text: 'Ali consistently demonstrates exceptional problem-solving skills and deep understanding of software engineering principles. His projects showcase innovative thinking and technical excellence. A standout student with great potential.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Senior Software Engineer at TechCorp',
      text: 'Working with Ali on open-source projects has been remarkable. His code quality is outstanding, and he has a natural ability to architect scalable solutions. Definitely someone I would want on my team.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Tech Lead at StartupHub',
      text: 'Ali brings incredible energy and fresh perspectives to every project. His understanding of modern development practices and ability to learn quickly makes him an invaluable collaborator.',
      rating: 5
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      setRecommendations(prev => [
        ...prev,
        {
          name: formData.name,
          title: formData.title || 'Professional Contact',
          text: formData.message,
          rating: 5
        }
      ]);
      
      setFormData({ name: '', title: '', message: '' });
      
      toast({
        title: "Thank you for your recommendation! 🚀",
        description: "Your recommendation has been successfully added to my profile.",
        duration: 4000,
      });
    }
  };

  return (
    <section id="recommendations" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 text-8xl text-blue-200">💬</div>
        <div className="absolute bottom-20 right-20 text-6xl text-indigo-200">⭐</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-slate-200">👥</div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Recommendations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg font-light">What others say about my work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recommendations.map((rec, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-blue-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-indigo-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-2 text-4xl text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Rating stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(rec.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 italic mb-6 leading-relaxed text-center relative z-10 font-light">
                  "{rec.text}"
                </p>
                
                <div className="text-center">
                  <p className="text-slate-800 font-bold text-lg mb-1">{rec.name}</p>
                  <p className="text-slate-600 text-sm font-medium">{rec.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-2">
                Leave a Recommendation
              </h3>
              <p className="text-slate-600 font-light">Share your experience working with me</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 font-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Your job title (optional)"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 font-light"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Recommendation *</label>
                <textarea
                  name="message"
                  placeholder="Share your experience working with me..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 hover:border-blue-300 font-light"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto font-medium"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Submit Recommendation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
