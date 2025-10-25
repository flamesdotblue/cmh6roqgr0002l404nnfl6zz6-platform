import React from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
      <li><a href="#solutions" className="text-sm text-white/80 hover:text-white transition">Solutions</a></li>
      <li><a href="#developers" className="text-sm text-white/80 hover:text-white transition">Developers</a></li>
      <li><a href="#company" className="text-sm text-white/80 hover:text-white transition">Company</a></li>
      <li><a href="#docs" className="text-sm text-white/80 hover:text-white transition">Docs</a></li>
    </ul>
  );

  return (
    <header className="relative z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-500/20">
            <Shield className="h-5 w-5 text-emerald-400" />
          </span>
          <span className="font-semibold tracking-tight">Particl Clone</span>
        </a>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#login" className="text-sm text-white/80 hover:text-white transition">Sign in</a>
          <a href="#get-started" className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition">Get started</a>
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/10 hover:bg-white/5">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <NavLinks />
            <div className="mt-4 flex items-center gap-3">
              <a href="#login" className="text-sm text-white/80 hover:text-white transition">Sign in</a>
              <a href="#get-started" className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
