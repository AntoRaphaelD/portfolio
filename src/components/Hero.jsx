import React from 'react'

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="text-accent font-bold">Hello — I'm</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Your Name<span className="text-accent">.</span></h1>
        <p className="text-slate-300 mt-3 max-w-xl">I build fast, accessible, and delightful user interfaces. Currently building at — • Open to frontend & ML projects.</p>

        <div className="flex gap-3 mt-5">
          <a href="#projects" className="px-4 py-2 rounded-lg font-bold bg-accent text-[#022]">See projects</a>
          <a href="#contact" className="px-4 py-2 rounded-lg border border-white/10 text-slate-300">Contact</a>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {['React','JavaScript','Tailwind','Firebase','Python','GraphQL'].map(s => (
              <span key={s} className="glass px-3 py-1 rounded-md text-sm text-slate-200 font-semibold">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="p-4 rounded-xl card glass">
          <div className="font-bold text-lg">Contact</div>
          <div className="text-slate-400 mt-2">your.email@example.com</div>
          <div className="mt-3">
            <a href="#" className="inline-block px-3 py-2 rounded-md border border-white/10 text-sm">GitHub</a>
          </div>
        </div>

        <div className="p-4 rounded-xl glass">
          <div className="font-semibold">Quick stats</div>
          <div className="text-slate-400 mt-2">Followers: 1.5k • Projects: 12</div>
        </div>
      </aside>
    </section>
  )
}
