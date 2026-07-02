"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link href="/">

          <img
            src="/logo-solerya.png"
            className="h-12"
            alt="Solerya"
          />

        </Link>

        <nav className="hidden gap-10 lg:flex">

          <Link href="/solutions">
            Nos solutions
          </Link>

          <Link href="/familles">
            Pour les familles
          </Link>

          <Link href="/produits">
            Produits
          </Link>

          <Link href="/blog">
            Conseils
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[#f58220] px-6 py-3 text-white"
        >
          Découvrir nos solutions
        </Link>

      </div>

    </header>
  );
}