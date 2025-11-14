"use client";

import { useEffect, useMemo, useState } from "react";

const industries = {
  Retail: {
    headline: "Omnichannel retail",
    description: "Automate stock sync, dynamic pricing, and card present deposits in one view.",
    volume: "$162k",
    uptime: "99.995%",
    savingsPerTransaction: 0.28,
    averageTicket: 48,
  },
  Hospitality: {
    headline: "Full-service dining",
    description: "Turn tables faster with handheld ordering, auto-gratuity, and kitchen routing.",
    volume: "$208k",
    uptime: "99.988%",
    savingsPerTransaction: 0.34,
    averageTicket: 62,
  },
  Wellness: {
    headline: "Studios & wellness",
    description: "Membership billing, staff payouts, and retail in the same dashboard.",
    volume: "$94k",
    uptime: "99.997%",
    savingsPerTransaction: 0.22,
    averageTicket: 41,
  },
} satisfies Record<
  string,
  {
    headline: string;
    description: string;
    volume: string;
    uptime: string;
    savingsPerTransaction: number;
    averageTicket: number;
  }
>;

const transactionFeed = [
  { merchant: "Atlas Market", amount: 128.42, status: "Settled", time: "12s ago" },
  { merchant: "Glow Wellness Studio", amount: 76.9, status: "Captured", time: "27s ago" },
  { merchant: "Harvest & Co.", amount: 312.58, status: "Settled", time: "1m ago" },
  { merchant: "Lunar Lounge", amount: 58.2, status: "Batching", time: "2m ago" },
  { merchant: "Sprout Grocers", amount: 842.35, status: "Settled", time: "3m ago" },
];

const plans = {
  Scale: {
    monthly: 189,
    annual: 168,
    bullets: [
      "Interchange++ pricing with instant reconciliation",
      "Realtime chargeback monitoring",
      "Unlimited devices & locations",
      "API access with audit trails",
    ],
  },
};

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState<keyof typeof industries>("Retail");
  const [volume, setVolume] = useState(1200);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeedIndex((index) => (index + 1) % transactionFeed.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const industry = industries[selectedIndustry];
  const estimatedSavings = useMemo(() => {
    const projectedTransactions = volume;
    const savings = projectedTransactions * industry.savingsPerTransaction;
    return savings;
  }, [industry, volume]);

  const formattedSavings = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(estimatedSavings);
  }, [estimatedSavings]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(circle_at_center,white,transparent_65%)]">
        <div className="absolute inset-x-0 top-[-30%] h-[60vh] bg-[radial-gradient(circle_at_top,#0ff4c620,transparent_65%)]" />
        <div className="absolute inset-y-0 right-[20%] h-full w-[45vw] bg-[radial-gradient(circle,#3b82f620,transparent_60%)]" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[length:24px_24px] bg-grid-glow opacity-40" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 before:absolute before:inset-0 before:rounded-full before:border before:border-white/30 before:opacity-40 before:[filter:blur(6px)]">
            <span className="text-lg font-semibold text-mint-glow">P</span>
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">PulsePOS</p>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Fintech Platform</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted lg:flex">
          <a className="transition hover:text-white" href="#platform">
            Platform
          </a>
          <a className="transition hover:text-white" href="#analytics">
            Analytics
          </a>
          <a className="transition hover:text-white" href="#pricing">
            Pricing
          </a>
          <a className="transition hover:text-white" href="#resources">
            Resources
          </a>
        </nav>
        <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white shadow-glow transition hover:border-white/40 hover:bg-white/20">
          Sign in
        </button>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-10">
        <section className="grid gap-12 rounded-[28px] border border-white/10 bg-card/80 p-10 backdrop-blur-xl lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-soft/40 bg-accent-soft px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-accent">
              Next-gen POS SaaS
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Transform every checkout into a customer moment.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                PulsePOS unifies card-present and online payments with real-time settlement, smart risk controls, and granular analytics designed for teams scaling beyond spreadsheets.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow-soft">
                Start 14-day trial
              </button>
              <button className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
                Launch interactive demo
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {Object.entries(industries).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedIndustry(key as keyof typeof industries)}
                  className={`group rounded-2xl border px-5 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    selectedIndustry === key
                      ? "border-accent/60 bg-white/10 text-white"
                      : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted group-hover:text-slate-200">
                    {key}
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">
                    {value.headline}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{value.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative isolate flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.08] to-white/[0.02] p-6 shadow-glow-soft">
            <div className="absolute -inset-1 rounded-3xl border border-white/20 opacity-50 blur-lg" aria-hidden />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Live revenue cockpit
            </span>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-midnight-light/80 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-muted">Monthly volume</p>
                <p className="text-3xl font-semibold text-white">{industry.volume}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.32em] text-muted">Uptime</p>
                <p className="text-3xl font-semibold text-white">{industry.uptime}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-slate-200">ROI simulator</p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted">
                Projected savings
              </p>
              <p className="mt-2 text-3xl font-semibold text-white">{formattedSavings} / mo</p>
              <label className="mt-4 flex w-full flex-col gap-2 text-xs text-slate-300">
                Estimated card-present transactions
                <input
                  type="range"
                  min={200}
                  max={5000}
                  value={volume}
                  onChange={(event) => setVolume(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 [accent-color:var(--accent)]"
                />
                <span className="text-sm font-medium text-white">{volume.toLocaleString()} / month</span>
              </label>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-400">
                <div>
                  <p className="uppercase tracking-[0.32em] text-muted">Avg. ticket</p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(industry.averageTicket)}
                  </p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.32em] text-muted">Saved / txn</p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(industry.savingsPerTransaction)}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Live ledger</p>
              </div>
              <div className="mt-4 space-y-2">
                {transactionFeed.map((entry, entryIndex) => {
                  const isActive = entryIndex === feedIndex;
                  return (
                    <div
                      key={entry.merchant + entry.time}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
                        isActive
                          ? "border-accent/70 bg-accent-soft/80 text-white"
                          : "border-white/5 bg-white/[0.03] text-slate-300"
                      }`}
                    >
                      <div>
                        <p className="font-medium text-white/90">{entry.merchant}</p>
                        <p className="text-xs text-slate-400">{entry.status}</p>
                      </div>
                      <div className="text-right text-sm font-semibold text-white">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(entry.amount)}
                        <p className="text-xs font-normal text-slate-400">{entry.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="platform"
          className="relative grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl lg:grid-cols-3"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">Platform</p>
            <h2 className="text-3xl font-semibold text-white">Everything terminals promised, delivered via API.</h2>
            <p className="text-slate-300">
              Tap-to-pay hardware, instant digital receipts, payouts, and risk controls orchestrated from a single settlement layer. Launch new outlets in under 5 minutes.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-glow">
            <h3 className="text-lg font-semibold text-white">Unified controls</h3>
            <p className="mt-2 text-sm text-slate-300">
              Configure user roles, device permissions, and payout schedules in real time without touching legacy back-office software.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Ledger-grade settlement with alerts by channel
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Tokenized customer vault powering loyalty & invoicing
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Automated surcharge compliance with region profiles
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-lg font-semibold text-white">Payments telemetry</h3>
            <p className="mt-2 text-sm text-slate-300">
              Surface real-time authorisation trends, declines, and disputes with anomaly detection powered by L2 enriched data.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-midnight-light/80 p-4">
                <dt className="text-xs uppercase tracking-[0.28em] text-muted">Approvals</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">98.7%</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-midnight-light/80 p-4">
                <dt className="text-xs uppercase tracking-[0.28em] text-muted">Chargebacks</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">↓ 43%</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-midnight-light/80 p-4">
                <dt className="text-xs uppercase tracking-[0.28em] text-muted">Payout speed</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">T+0.5</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-midnight-light/80 p-4">
                <dt className="text-xs uppercase tracking-[0.28em] text-muted">Data sync</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">320+ ERP</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          id="analytics"
          className="grid gap-8 rounded-[28px] border border-white/10 bg-card/70 p-10 backdrop-blur-xl lg:grid-cols-[0.8fr,1.2fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">Signals</p>
            <h2 className="text-3xl font-semibold text-white">CFO-grade forecasting, on every device.</h2>
            <p className="text-slate-300">
              Predictive dashboards that model cash flow, settlements, and product mix so operators understand the health of every location before they open.
            </p>
            <p className="text-sm text-slate-400">
              Drill into SKU-level insights, reconcile statements in minutes, and ingest KPIs via webhooks or BI tools.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-midnight-light/80 p-6 shadow-glow">
            <div className="absolute right-[-30%] top-[-30%] h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
            <div className="relative grid gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Forecast scenarios</h3>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Live
                </div>
              </div>
              <div className="grid gap-3 text-sm text-slate-200">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Same-store growth</span>
                  <span className="text-accent">+12.4%</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Net new locations</span>
                  <span className="text-accent">5</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Interchange optimization</span>
                  <span className="text-accent">-18 bps</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-muted">
                  <span>Scenario builder</span>
                  <span>{billingCycle === "annual" ? "Annual" : "Monthly"} view</span>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  Toggle billing preference to mirror cash projections in your board deck.
                </p>
                <div className="mt-5 flex gap-2 rounded-full border border-white/10 bg-white/10 p-1 text-sm font-medium text-slate-200">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`flex-1 rounded-full px-4 py-2 transition ${
                      billingCycle === "monthly"
                        ? "bg-accent text-midnight"
                        : "hover:bg-white/10"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("annual")}
                    className={`flex-1 rounded-full px-4 py-2 transition ${
                      billingCycle === "annual"
                        ? "bg-accent text-midnight"
                        : "hover:bg-white/10"
                    }`}
                  >
                    Annual
                  </button>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-midnight-light/70 p-4 text-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">Scale plan</p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    ${plans.Scale[billingCycle]}
                    <span className="text-sm font-normal text-slate-400">
                      / seat
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    {plans.Scale.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl"
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">Launch in days</p>
            <h2 className="text-3xl font-semibold text-white">Global acquiring, elite analytics, white-glove rollout.</h2>
            <p className="text-slate-300">
              Migrate from fragmented terminals to PulsePOS in under two weeks. Import your historical data, point our APIs to your ERP, and ship the devices pre-configured for every location.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5">
                Talk to sales
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
                Download product brief
              </button>
            </div>
          </div>
        </section>

        <footer id="resources" className="flex flex-col items-center gap-6 pb-6 text-center text-xs text-slate-400">
          <p className="uppercase tracking-[0.32em]">PulsePOS</p>
          <p className="max-w-2xl text-slate-500">
            PCI Level 1 • SOC 2 Type II • PSD2 ready • Deploy to 34 markets with localized tax handling and network tokens built in.
          </p>
          <p className="text-slate-500">© {new Date().getFullYear()} PulsePOS. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
