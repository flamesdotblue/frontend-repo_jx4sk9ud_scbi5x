import Navbar from './components/Navbar'
import HeroCover from './components/HeroCover'
import ScrollCardShowcase from './components/ScrollCardShowcase'
import AuthSection from './components/AuthSection'

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div>© {new Date().getFullYear()} FinSight. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#dashboard" className="hover:text-slate-900">Dashboard</a>
          <a href="#auth" className="hover:text-slate-900">Sign in</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-inter text-slate-900 bg-white min-h-screen">
      <Navbar />
      <HeroCover />
      <ScrollCardShowcase />
      <AuthSection />
      <Footer />
    </div>
  )
}
