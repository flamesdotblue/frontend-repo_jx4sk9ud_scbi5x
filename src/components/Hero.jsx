import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">
        <header className="flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/90 backdrop-blur ring-1 ring-white/30 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">FinSight</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
            <a href="#auth" className="hover:text-white transition">Sign in</a>
          </nav>
          <a href="#auth" className="ml-auto sm:ml-0 inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg">
            Get Started
            <Rocket className="h-4 w-4" />
          </a>
        </header>

        <div className="flex-1 flex items-center">
          <div className="px-6 sm:px-10 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl leading-tight font-bold text-white tracking-tight">
              Personal Finance Anomaly Detection & Planner
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Spot unusual spending instantly, plan smarter budgets, and keep your money safe — powered by intelligent analytics.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#dashboard" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-white/90 transition">
                Explore Dashboard
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/30 text-white/90 hover:bg-white/10 transition">
                Learn More
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Bank-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Real-time anomaly alerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
