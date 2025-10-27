import React from 'react';
import { Activity, BarChart3, PieChart, AlertTriangle } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Clean, Insightful Dashboard</h2>
            <p className="mt-2 text-gray-600">Your spending, budgets, and anomalies — summarized at a glance.</p>
          </div>
          <a href="#auth" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition text-sm">
            Create an account
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-2xl p-5 bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Monthly Spend</span>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </div>
            <div className="mt-3 text-2xl font-semibold">$3,842</div>
            <div className="mt-1 text-xs text-emerald-600">+4.2% vs last month</div>
          </div>

          <div className="rounded-2xl p-5 bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Budget Health</span>
              <PieChart className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="mt-3 text-2xl font-semibold">78%</div>
            <div className="mt-1 text-xs text-gray-500">On track for 3 goals</div>
          </div>

          <div className="rounded-2xl p-5 bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Anomalies</span>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </div>
            <div className="mt-3 text-2xl font-semibold">2</div>
            <div className="mt-1 text-xs text-orange-600">Review unusual charges</div>
          </div>

          <div className="rounded-2xl p-5 bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Activity</span>
              <Activity className="h-4 w-4 text-purple-600" />
            </div>
            <div className="mt-3 text-2xl font-semibold">16</div>
            <div className="mt-1 text-xs text-gray-500">Transactions today</div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-2xl bg-white border border-gray-200 p-5">
            <div className="text-sm text-gray-500">Spending by Category</div>
            <div className="mt-4 h-56 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex flex-col justify-end gap-1">
                  {Array.from({ length: Math.floor(2 + Math.random() * 8) }).map((__, j) => (
                    <div key={j} className="h-6 bg-gradient-to-t from-blue-600/80 to-blue-400/80 rounded"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-5">
            <div className="text-sm text-gray-500">Upcoming Bills</div>
            <div className="mt-4 space-y-3">
              {[
                { name: 'Rent', date: 'Nov 01', amount: '$1,450' },
                { name: 'Utilities', date: 'Nov 07', amount: '$120' },
                { name: 'Internet', date: 'Nov 12', amount: '$60' },
              ].map((b) => (
                <div key={b.name} className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
                  <div>
                    <div className="font-medium text-gray-900">{b.name}</div>
                    <div className="text-xs text-gray-500">Due {b.date}</div>
                  </div>
                  <div className="text-sm font-semibold">{b.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
