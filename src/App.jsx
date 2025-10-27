import React from 'react';
import Hero from './components/Hero';
import StickyCardScroller from './components/StickyCardScroller';
import DashboardPreview from './components/DashboardPreview';
import AuthPanels from './components/AuthPanels';

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div>© {new Date().getFullYear()} FinSight. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#dashboard" className="hover:text-slate-900">Dashboard</a>
          <a href="#auth" className="hover:text-slate-900">Sign in</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter text-slate-900 bg-white min-h-screen">
      <Hero />
      <StickyCardScroller />
      <DashboardPreview />
      <AuthPanels />
      <Footer />
    </div>
  );
}
