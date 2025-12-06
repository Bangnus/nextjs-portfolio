import React from 'react'

export const Technologies = () => {
  return (
    <section id="skills" className="py-20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">Technologies & Tools I Use</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
            {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'MongoDB', 'Figma', 'Git', 'Docker', 'Postman'].map((skill) => (
              <div key={skill} className="px-6 py-3 rounded-lg bg-slate-800/50 border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-default">
                <span className="font-semibold text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
