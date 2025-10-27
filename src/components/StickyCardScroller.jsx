import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CreditCard, BellRing, CalendarCheck2 } from 'lucide-react';

function CreditCardVisual({ className = '' }) {
  return (
    <div className={`relative w-80 h-48 rounded-2xl p-5 shadow-2xl bg-gradient-to-br from-orange-500 to-blue-600 text-white ${className}`}>
      <div className="flex items-center justify-between">
        <div className="font-semibold tracking-wide">FinSight</div>
        <CreditCard className="h-6 w-6" />
      </div>
      <div className="mt-8 text-2xl tracking-widest">**** **** **** 4821</div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span>JOHN DOE</span>
        <span>12/27</span>
      </div>
      <div className="absolute -bottom-6 -right-6 blur-2xl opacity-50 w-40 h-40 bg-white/20 rounded-full" />
    </div>
  );
}

export default function StickyCardScroller() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="features" ref={ref} className="relative py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24 lg:h-[420px] flex items-center justify-center">
            <motion.div style={{ rotate, scale, y }}>
              <CreditCardVisual />
            </motion.div>
          </div>

          <div className="space-y-10">
            <div className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <BellRing className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Anomaly Alerts</h3>
                  <p className="mt-2 text-gray-600">We detect unusual transactions in real-time and notify you instantly so you can take action before it escalates.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                  <CalendarCheck2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Smart Planner</h3>
                  <p className="mt-2 text-gray-600">Autogenerate budgets based on your spending patterns, set goals, and track progress with clear milestones.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Category Insights</h3>
                  <p className="mt-2 text-gray-600">Understand where your money goes every month with clean visual breakdowns and trend lines.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
