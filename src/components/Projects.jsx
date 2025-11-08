import React from 'react'

const sample = [
  {title: 'Project One', desc: 'Short description, tech used, and link.', repo:'#'},
  {title: 'Project Two', desc: 'Short description, tech used, and link.', repo:'#'},
  {title: 'Project Three', desc: 'Short description, tech used, and link.', repo:'#'},
  {title: 'Project Four', desc: 'Short description, tech used, and link.', repo:'#'},
]

export default function Projects(){
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {sample.map(p => (
          <div key={p.title} className="p-4 rounded-lg glass">
            <div className="font-bold">{p.title}</div>
            <div className="text-slate-400 mt-2">{p.desc}</div>
            <div className="mt-3">
              <a href={p.repo} className="inline-block px-3 py-2 rounded-md border border-white/10 text-sm">View repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
