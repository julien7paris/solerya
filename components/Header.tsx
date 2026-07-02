"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#F4F7FB,#FFFFFF)] shadow-sm ring-1 ring-[#F4D000]/20">
            <img
              src="/images/logo-proxfi.png"
              alt="Logo Proxfi"
              className="h-full w-full object-contain p-1"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-[#08122E]">
              Proxfi
            </p>
            <p className="text-xs text-slate-500">
              Expatriation • Allocation d&apos;Actifs • Transmission • DeFi
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#services" className="text-sm text-slate-600 hover:text-[#0F5DB8]">
            Services
          </Link>
          <Link href="/simulateur" className="text-sm text-slate-600 hover:text-[#0F5DB8]">
            Simulateur
          </Link>
          <Link href="/methode" className="text-sm text-slate-600 hover:text-[#0F5DB8]">
            Méthode
          </Link>
          <Link href="/#faq" className="text-sm text-slate-600 hover:text-[#0F5DB8]">
            FAQ
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="/#contact"
          className="rounded-full bg-[#08122E] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(8,18,46,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0F5DB8]"
        >
          Réserver un échange
        </a>
      </div>
    </header>
  );
}