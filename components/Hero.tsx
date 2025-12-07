import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants.ts';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
              Available for Hire
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-slate-600 mb-8 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/resume.pdf" 
                download="Manollas_TS_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-900 transition-colors shadow-lg hover:shadow-xl"
              >
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Decorative blob background */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              {/* Profile Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-full border-4 border-white">
                <img 
                  src="/profile.jpg" 
                  alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Try alternative formats if jpg not found
                    const target = e.target as HTMLImageElement;
                    const formats = ['/profile.png', '/profile.jpeg', 'https://picsum.photos/id/64/400/400'];
                    const currentSrc = target.src;
                    const currentIndex = formats.findIndex(f => currentSrc.includes(f.split('/').pop() || ''));
                    if (currentIndex < formats.length - 1) {
                      target.src = formats[currentIndex + 1];
                    }
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;