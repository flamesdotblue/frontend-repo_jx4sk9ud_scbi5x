import { useState } from 'react'

function Input({ label, type = 'text', name, placeholder }) {
  return (
    <label className="block text-left">
      <span className="text-sm text-slate-700">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
      />
    </label>
  )
}

export default function AuthSection() {
  const [mode, setMode] = useState('signin')

  return (
    <section id="auth" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Join FinSight</h2>
          <p className="mt-2 text-slate-600">Create an account or sign in to access your personalized dashboard.</p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border bg-slate-50">
            <div className="flex gap-2 mb-6">
              <button onClick={() => setMode('signin')} className={`px-3 py-1.5 rounded-md text-sm border ${mode==='signin' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300'}`}>Sign in</button>
              <button onClick={() => setMode('signup')} className={`px-3 py-1.5 rounded-md text-sm border ${mode==='signup' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300'}`}>Sign up</button>
            </div>
            {mode === 'signin' ? (
              <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
                <Input label="Email" type="email" name="email" placeholder="you@example.com" />
                <Input label="Password" type="password" name="password" placeholder="••••••••" />
                <button className="w-full mt-2 rounded-md bg-slate-900 text-white py-2 font-medium">Sign in</button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <Input label="First name" name="firstName" placeholder="Alex" />
                  <Input label="Last name" name="lastName" placeholder="Morgan" />
                </div>
                <Input label="Email" type="email" name="email" placeholder="you@example.com" />
                <Input label="Password" type="password" name="password" placeholder="Create a strong password" />
                <button className="w-full mt-2 rounded-md bg-slate-900 text-white py-2 font-medium">Create account</button>
              </form>
            )}
          </div>

          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-lg font-semibold text-slate-900">What you get</h3>
            <ul className="mt-4 space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center">✓</span> Real‑time anomaly alerts across categories</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center">✓</span> Smart budget planner that adapts automatically</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center">✓</span> Clean, card‑centric dashboard</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center">✓</span> Private and secure by default</li>
            </ul>
            <div className="mt-8 p-4 rounded-lg bg-slate-50 border">
              <div className="text-sm text-slate-600">Preview</div>
              <div className="mt-2 h-28 rounded-md bg-gradient-to-r from-blue-100 via-white to-orange-100 border" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-8 bg-slate-100 rounded" />
                <div className="h-8 bg-slate-100 rounded" />
                <div className="h-8 bg-slate-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
