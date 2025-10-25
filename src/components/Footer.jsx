import React from 'react';
import { ArrowRight, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="company" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Build with confidence</h3>
            <p className="mt-2 max-w-md text-sm text-white/70">Join a global community shipping privacy-preserving products across fintech, identity, and commerce.</p>
            <div className="mt-4 flex gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#docs" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                View docs
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-white/60">Platform</div>
              <ul className="mt-3 space-y-2 text-white/80">
                <li><a href="#solutions" className="hover:text-white">Payments</a></li>
                <li><a href="#solutions" className="hover:text-white">Identity</a></li>
                <li><a href="#solutions" className="hover:text-white">Privacy</a></li>
                <li><a href="#developers" className="hover:text-white">Developers</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white/60">Company</div>
              <ul className="mt-3 space-y-2 text-white/80">
                <li><a href="#company" className="hover:text-white">About</a></li>
                <li><a href="#company" className="hover:text-white">Careers</a></li>
                <li><a href="#company" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Particl Clone. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
