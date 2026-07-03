"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="transition duration-300 hover:opacity-90"
        >
          <Image
            src="/logo-solerya-transparent.png"
            alt="Solerya"
            width={185}
            height={56}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 text-[15px] font-medium text-[#12223B] lg:flex">
          <Link
            href="#solutions"
            className="transition-colors duration-200 hover:text-[#F58220]"
          >
            Nos solutions
          </Link>

          <Link
            href="#familles"
            className="transition-colors duration-200 hover:text-[#F58220]"
          >
            Pour les familles
          </Link>

          <Link
            href="#engagements"
            className="transition-colors duration-200 hover:text-[#F58220]"
          >
            Nos engagements
          </Link>

          <Link
            href="#conseils"
            className="transition-colors duration-200 hover:text-[#F58220]"
          >
            Conseils
          </Link>
        </nav>

        {/* Téléphone + CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:0184804045"
            className="text-[15px] font-semibold tracking-tight text-[#12223B] transition hover:text-[#F58220]"
          >
            01&nbsp;84&nbsp;80&nbsp;40&nbsp;45
          </a>

          <Link
            href="#solutions"
            className="rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(245,130,32,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E36E08] hover:shadow-[0_22px_50px_rgba(245,130,32,0.40)]"
          >
            Découvrir Solerya →
          </Link>
        </div>
      </div>
    </header>
  );
}