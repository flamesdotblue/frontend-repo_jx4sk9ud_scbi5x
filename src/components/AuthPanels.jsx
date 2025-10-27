import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

export default function AuthPanels() {
  const [mode, setMode] = useState('signin');

  return (
    <section id="auth" className="relative py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight">Join FinSight</h2>
          <p className="mt-2 text-white/70">Create an account to sync your data and unlock anomaly alerts.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className={`px-3 py-1 rounded-lg ${mode === 'signin' ? 'bg-white/10 text-white' : ''}`}>Sign in</span>
              <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} className="underline underline-offset-4 hover:text-white">
                or {mode === 'signin' ? 'Create account' : 'Use existing account'}
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
              {mode === 'signup' && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input type="text" required placeholder="Full name" className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none" />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input type="email" required placeholder="Email address" className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input type="password" required placeholder="Password" className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none" />
              </div>
              <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium">
                {mode === 'signin' ? 'Sign in' : 'Create account'}
              </button>
              <p className="text-xs text-white/60 text-center">By continuing you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>

          <div className="rounded-2xl bg-white p-6 text-gray-900">
            <h3 className="text-xl font-semibold">Why create an account?</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Real-time anomaly notifications via email
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Sync data securely across devices
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                Personalized budgets and planning guidance
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-sm text-gray-600">Security</div>
              <p className="text-sm text-gray-600 mt-2">We use strong encryption and industry best practices to keep your financial information safe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
