import React from 'react'

export default function Contact(){
  return (
    <section id="contact">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-4 p-4 rounded-lg glass">
        <form onSubmit={(e) => { e.preventDefault(); alert('Demo: message sent') }}>
          <label className="block text-sm text-slate-300">Name</label>
          <input required className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
          <label className="block text-sm text-slate-300 mt-3">Message</label>
          <textarea required className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" rows="5"></textarea>
          <div className="mt-3">
            <button className="px-4 py-2 rounded-md bg-accent text-[#022] font-bold">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}
