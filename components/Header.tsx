"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo Solerya.png"
            alt="Solerya"
            width={230}
            height={80}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 text-[15px] font-medium text-[#12223B] lg:flex">
          <Link href="#solutions" className="hover:text-[#F58220]">
            Nos solutions
          </Link>
          <Link href="#familles" className="hover:text-[#F58220]">
            Pour les familles
          </Link>
          <Link href="#engagements" className="hover:text-[#F58220]">
            Nos engagements
          </Link>
          <Link href="#conseils" className="hover:text-[#F58220]">
            Conseils
          </Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:0184804045"
            className="text-sm font-medium text-[#12223B]"
          >
            01 84 80 40 45
          </a>

          <Link
            href="#solutions"
            className="rounded-full bg-[#F58220] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(245,130,32,0.28)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
          >
            Découvrir Solerya →
          </Link>
        </div>
      </div>
    </header>
  );
}