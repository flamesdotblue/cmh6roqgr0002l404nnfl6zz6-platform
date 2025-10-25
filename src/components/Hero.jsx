import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Lock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pt-8 md:grid-cols-2 md:gap-12 md:px-6 md:pt-16">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified privacy for digital commerce
          </div>
          <h1 className="font-semibold leading-tight tracking-tight text-4xl md:text-5xl">Privacy-first infrastructure for modern payments</h1>
          <p className="mt-4 max-w-xl text-white/70">Build, scale, and secure your digital economy with zero-knowledge privacy, decentralized identity, and lightning-fast settlement — all in one platform.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-black hover:bg-emerald-400 transition">
              Start building
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#docs" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
              <Lock className="h-4 w-4 text-emerald-300" />
              Read docs
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              End-to-end encrypted
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Open-source SDKs
            </div>
          </div>
        </div>
        <div className="relative h-[520px] w-full md:h-[640px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
