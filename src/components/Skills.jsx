import React from 'react'

export default function Skills(){
  return (
    <section id="skills">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          'React','JavaScript','TypeScript (optional)','Tailwind','CSS','Firebase','Python','SQL'
        ].map(s => (
          <div key={s} className="p-3 rounded-lg glass text-slate-200 font-semibold">{s}</div>
        ))}
      </div>
    </section>
  )
}
