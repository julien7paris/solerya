"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-solerya-transparent.png"
            alt="Solerya"
            width={190}
            height={60}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-10 text-[15px] font-medium text-[#12223B] lg:flex">
          <Link href="#solutions" className="transition hover:text-[#F58220]">
            Nos solutions
          </Link>
          <Link href="#familles" className="transition hover:text-[#F58220]">
            Pour les familles
          </Link>
          <Link href="#engagements" className="transition hover:text-[#F58220]">
            Nos engagements
          </Link>
          <Link href="#conseils" className="transition hover:text-[#F58220]">
            Conseils
          </Link>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:0618100348"
            className="text-[15px] font-semibold text-[#12223B]"
          >
            01&nbsp;84&nbsp;80&nbsp;40&nbsp;45
          </a>

          <Link
            href="#solutions"
            className="rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(245,130,32,0.30)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
          >
            Découvrir Solerya →
          </Link>
        </div>
      </div>
    </header>
  );
}