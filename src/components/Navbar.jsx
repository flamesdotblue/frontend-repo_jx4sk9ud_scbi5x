import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-gradient-to-b from-white/60 to-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-orange-500" />
          <span className="font-semibold text-slate-800">FinSight</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#journey" className="hover:text-slate-900">How it works</a>
          <a href="#dashboard" className="hover:text-slate-900">Dashboard</a>
          <a href="#auth" className="hover:text-slate-900">Sign in</a>
          <a href="#auth" className="px-3 py-1.5 rounded-md bg-slate-900 text-white">Sign up</a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3.75 6.75h16.5v1.5H3.75v-1.5ZM3.75 11.25h16.5v1.5H3.75v-1.5ZM3.75 15.75h16.5v1.5H3.75v-1.5Z"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-slate-700">
          <a href="#home" className="block">Home</a>
          <a href="#journey" className="block">How it works</a>
          <a href="#dashboard" className="block">Dashboard</a>
          <a href="#auth" className="block">Sign in</a>
          <a href="#auth" className="block">Sign up</a>
        </div>
      )}
    </header>
  )
}
