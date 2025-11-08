import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-10 py-6 flex items-center justify-between text-slate-400">
      <div>© {new Date().getFullYear()} Your Name. Built with ❤️</div>
      <div>Based in India</div>
    </footer>
  )
}
