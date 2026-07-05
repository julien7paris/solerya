"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-white/40 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/logo-solerya-transparent.png"
                alt="Solerya"
                width={190}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-7 max-w-md text-[15px] leading-8 text-slate-600">
              Les meilleures technologies connectées pour permettre aux seniors
              de rester chez eux plus longtemps, en toute sécurité, tout en
              rassurant leurs proches.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(245,130,32,0.30)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
            >
              Parler à un conseiller →
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#12223B]">
              Solutions
            </h3>

            <ul className="mt-6 space-y-4 text-[15px] text-slate-600">
              <li>
                <Link href="/#solutions" className="transition hover:text-[#F58220]">
                  Maintien à domicile
                </Link>
              </li>

              <li>
                <Link href="/#solutions" className="transition hover:text-[#F58220]">
                  Objets connectés
                </Link>
              </li>

              <li>
                <Link href="/schema" className="transition hover:text-[#F58220]">
                  Pour les familles
                </Link>
              </li>

              <li>
                <Link href="/#engagements" className="transition hover:text-[#F58220]">
                  Nos engagements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#12223B]">
              Solerya
            </h3>

            <ul className="mt-6 space-y-4 text-[15px] text-slate-600">
              <li>
                <Link href="/a-propos" className="transition hover:text-[#F58220]">
                  À propos
                </Link>
              </li>

              <li>
                <Link href="/#conseils" className="transition hover:text-[#F58220]">
                  Conseils
                </Link>
              </li>

              <li>
                <Link href="/#contact" className="transition hover:text-[#F58220]">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-[#F58220]">
                  Carrières
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#12223B]">
              Informations
            </h3>

            <ul className="mt-6 space-y-4 text-[15px] text-slate-600">
              <li>
                <Link href="#" className="transition hover:text-[#F58220]">
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-[#F58220]">
                  Politique de confidentialité
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-[#F58220]">
                  Cookies
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-[#F58220]">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200/70 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 <span className="font-medium text-[#12223B]">Solerya</span>.
            Tous droits réservés.
          </p>

          <div className="flex items-center gap-8">
            <Link href="#" className="transition hover:text-[#F58220]">
              LinkedIn
            </Link>

            <Link href="#" className="transition hover:text-[#F58220]">
              Facebook
            </Link>

            <Link href="#" className="transition hover:text-[#F58220]">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}