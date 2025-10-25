import React from 'react';
import { Shield, Wallet, Globe, KeyRound } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Zero-knowledge privacy',
    desc: 'Transact with full confidentiality. Our zk circuits protect metadata and values without compromising performance.'
  },
  {
    icon: Wallet,
    title: 'Programmable settlement',
    desc: 'Composable rails with atomic swaps, timelocks, and multi-asset support to power modern fintech flows.'
  },
  {
    icon: Globe,
    title: 'Global interoperability',
    desc: 'Standards-based identity and messaging to bridge ecosystems while maintaining sovereignty.'
  },
  {
    icon: KeyRound,
    title: 'Secure identity',
    desc: 'Verifiable credentials and device-bound keys with hardware-backed authentication.'
  }
];

export default function Features() {
  return (
    <section id="solutions" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Everything you need to build private, compliant apps</h2>
          <p className="mt-3 text-white/70">SDKs, APIs, and reference architectures that abstract complexity and let you ship fast with confidence.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/30 hover:bg-white/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-500/20">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </span>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-4 text-xs text-white/50">Enterprise-grade SLAs and audit trails included.</div>
            </div>
          ))}
        </div>
        <div id="developers" className="mt-14 grid items-stretch gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">Developer-first tooling</h3>
            <p className="mt-2 text-sm text-white/70">Unified APIs, typed SDKs, and sandbox environments let you iterate quickly without managing cryptography primitives directly.</p>
            <div className="mt-4 rounded-lg bg-black/60 p-4 ring-1 ring-white/10">
              <pre className="overflow-auto text-xs leading-relaxed text-emerald-200">
{`// npm i @particl/sdk
import { Client } from '@particl/sdk';

const client = new Client({ apiKey: process.env.PARTICL_KEY });

const tx = await client.payments.create({
  to: 'did:key:z6Mkw...P9',
  asset: 'USDC',
  amount: '250.00',
  privacy: 'zk',
});

console.log(tx.status);`}
              </pre>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-bl from-white/5 to-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">Compliance without compromise</h3>
            <p className="mt-2 text-sm text-white/70">Policy controls, threshold signatures, and on-demand disclosures so you can meet regulatory requirements while preserving user privacy.</p>
            <ul className="mt-4 grid gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Granular data retention policies</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Proof-of-compliance attestations</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> SOC 2 and ISO 27001 aligned</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
