import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants.ts';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Education</h2>
            </div>
            
            <div className="space-y-8 border-l-2 border-blue-200 ml-3 pl-8 relative">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 ring-2 ring-blue-100"></span>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded mb-2">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <div className="text-slate-600 font-medium mb-2">{edu.institution}</div>
                    <div className="flex justify-between items-center text-sm text-slate-500">
                        <span>{edu.location}</span>
                        <span className="font-semibold text-slate-700">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center mb-8">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
            </div>
            
            <div className="grid gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 flex items-center hover:border-blue-300 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-yellow-50 flex items-center justify-center mr-4 flex-shrink-0">
                            <Award className="h-5 w-5 text-yellow-600" />
                        </div>
                        <p className="font-medium text-slate-800">{cert}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;