import { useEffect, useMemo, useRef, useState } from 'react'

function CreditCard({ rotation = 0, translateY = 0, translateX = 0, scale = 1 }) {
  return (
    <div
      className="w-[320px] h-[200px] rounded-2xl relative shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 flex flex-col justify-between"
      style={{
        transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
        transition: 'transform 0.08s linear',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="h-8 w-12 rounded bg-white/20" />
        <div className="text-xs uppercase tracking-widest opacity-80">VISA</div>
      </div>
      <div>
        <div className="text-lg tracking-widest font-semibold">**** **** **** 4821</div>
        <div className="mt-2 text-xs opacity-80">VALID THRU 07/28</div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-medium">ALEX MORGAN</div>
          <div className="h-6 w-10 rounded bg-white/30" />
        </div>
      </div>
    </div>
  )
}

export default function ScrollCardShowcase() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const visible = Math.min(Math.max(0, window.innerHeight - rect.top), rect.height + window.innerHeight)
      const total = rect.height + window.innerHeight
      const p = Math.min(1, Math.max(0, visible / total))
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const transform = useMemo(() => {
    // Progress 0 → 1 maps to rotation and translation
    const rotation = -8 + progress * 32 // -8deg to 24deg
    const translateY = progress * 200 - 100 // start slightly above, move down
    const translateX = Math.sin(progress * Math.PI) * 120 // arc left to right
    const scale = 0.9 + progress * 0.15
    return { rotation, translateY, translateX, scale }
  }, [progress])

  return (
    <section id="journey" ref={containerRef} className="relative bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative md:sticky md:top-28 md:self-start flex items-center justify-center h-[360px]">
          <CreditCard {...transform} />
        </div>
        <div className="space-y-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Connect accounts securely</h2>
            <p className="mt-3 text-slate-600">
              Link your cards and banks in seconds. We analyze transactions with advanced models to detect outliers across categories.
            </p>
          </div>
          <div id="dashboard">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Dashboard that explains the "why"</h3>
            <p className="mt-3 text-slate-600">
              See spending trends, anomaly heatmaps, and root‑cause breakdowns. Drill into any spike with clear context.
            </p>
            <div className="mt-6 p-4 rounded-xl border bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-r from-orange-200 via-blue-200 to-indigo-200 rounded-lg" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 border">
                  <div className="text-xs text-slate-500">Anomalies</div>
                  <div className="text-lg font-semibold">3 this week</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border">
                  <div className="text-xs text-slate-500">Savings plan</div>
                  <div className="text-lg font-semibold">On track</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border">
                  <div className="text-xs text-slate-500">Budget used</div>
                  <div className="text-lg font-semibold">62%</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Turn insights into a plan</h3>
            <p className="mt-3 text-slate-600">
              Create envelopes, set goals, and auto‑adjust budgets in response to unusual activity. Get nudges, not nags.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
