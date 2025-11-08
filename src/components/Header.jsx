import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-700 to-teal-500 flex items-center justify-center font-bold text-black">
          YN
        </div>
        <div>
          <div className="font-extrabold">Your Name</div>
          <div className="text-sm text-slate-400">Frontend • React • Tailwind</div>
        </div>
      </div>

      <nav className="hidden md:flex gap-6 text-slate-300 font-semibold">
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#skills" className="hover:text-accent">Skills</a>
        <a href="#projects" className="hover:text-accent">Projects</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </nav>
    </header>
  )
}
