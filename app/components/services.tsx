import React from 'react'
import { Code, Layers, Database} from 'lucide-react';

export const Services = () => {
  return (
   <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Bring to the Table</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Combining technical expertise with design sensibilities to deliver complete web solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Creating intuitive, modern interfaces using <strong>Figma</strong>. I focus on user journey, wireframing, and high-fidelity prototyping before coding begins.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building responsive, interactive websites with <strong>React, Next.js, and Tailwind CSS</strong>. Ensuring pixel-perfect implementation across all devices.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend & Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Developing robust backends with <strong>Node.js and PHP</strong>. Designing efficient database schemas (MySQL/MongoDB) for complex management systems.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
