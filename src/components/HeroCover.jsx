import Spline from '@splinetool/react-spline'

export default function HeroCover() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-white/60 text-slate-700 mb-4">
            Personal Finance Anomaly Detection & Planner
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Spot unusual spending. Plan with confidence.
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            A modern, card‑centric experience that flags anomalies across your accounts and turns insights into an actionable plan.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#auth" className="px-5 py-3 rounded-md bg-slate-900 text-white font-medium">Get started</a>
            <a href="#journey" className="px-5 py-3 rounded-md bg-white text-slate-900 font-medium border border-slate-200">See how it works</a>
          </div>
        </div>
      </div>
    </section>
  )
}
