import React from 'react';
import { PERSONAL_INFO } from '../constants.ts';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I'm actively seeking new opportunities in Data Science and Full Stack Development. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                    <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                    <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                    <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                    LinkedIn <ArrowUpRight size={18} className="ml-2" />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center">
                    GitHub <Github size={18} className="ml-2" />
                </a>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="hello@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                    <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Write your message here..." />
                </div>
                <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Send Message
                </button>
             </form>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Manollas T S. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;