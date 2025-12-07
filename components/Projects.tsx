import React from 'react';
import { PROJECTS } from '../constants.ts';
import { ExternalLink, Code2, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-600">Showcasing AI-powered and full-stack solutions.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between">
                    <div className="bg-blue-600 rounded-lg p-3 inline-block mb-6 shadow-lg shadow-blue-200">
                        <Code2 className="text-white h-6 w-6" />
                    </div>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-all"
                        aria-label="View Project"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-0.5 rounded border border-slate-300 text-slate-600 bg-white">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-6">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 px-8 py-4 border-t border-blue-100">
                 <div className="flex items-start gap-2 text-blue-900 text-sm font-medium">
                    <Zap className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <p>{project.impact}</p>
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