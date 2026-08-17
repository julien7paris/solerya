"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, UserRound } from "lucide-react";

type HeaderProps = {
  cartCount?: number;
};

export default function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[92px] max-w-[1480px] items-center px-6 lg:px-10">

        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Accueil Solerya"
        >
          <Image
            src="/logo-solerya-transparent-bleu-orange.png"
            alt="Solerya"
            width={190}
            height={65}
            priority
            className="h-auto w-[155px] object-contain lg:w-[175px]"
          />
        </Link>

        {/* NAVIGATION PRINCIPALE */}
        <nav className="ml-12 hidden items-center gap-8 xl:flex">

          <Link
            href="/#equipements"
            className="whitespace-nowrap text-[16px] font-semibold text-[#08122E] transition-colors hover:text-[#FF7A16]"
          >
            Nos solutions
          </Link>

          <Link
            href="/maison-solerya"
            className="whitespace-nowrap text-[16px] font-semibold text-[#08122E] transition-colors hover:text-[#FF7A16]"
          >
            La maison Solerya
          </Link>

          <Link
            href="/#engagements"
            className="whitespace-nowrap text-[16px] font-semibold text-[#08122E] transition-colors hover:text-[#FF7A16]"
          >
            Nos engagements
          </Link>

          <Link
            href="/#conseils"
            className="whitespace-nowrap text-[16px] font-semibold text-[#08122E] transition-colors hover:text-[#FF7A16]"
          >
            Conseils
          </Link>

        </nav>

        {/* PARTIE DROITE */}
        <div className="ml-auto flex items-center gap-3">

          {/* CONNEXION */}
          <Link
            href="/connexion"
            className="hidden items-center gap-2 rounded-full px-4 py-3 text-[15px] font-bold text-[#08122E] transition hover:bg-slate-50 lg:flex"
          >
            <UserRound className="h-5 w-5" />

            <div className="leading-tight">
              <div className="text-[11px] font-medium text-slate-500">
                Bonjour, identifiez-vous
              </div>

              <div>
                Mon compte
              </div>
            </div>
          </Link>

          {/* COMMANDE / PANIER */}
          <Link
            href="/commande"
            className="group relative flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 transition hover:border-orange-200 hover:bg-orange-50"
          >
            <div className="relative">
              <ShoppingCart
                className="h-6 w-6 text-[#08122E] transition group-hover:text-[#FF7A16]"
              />

              {/* COMPTEUR */}
              <span className="absolute -right-3 -top-3 flex min-h-[20px] min-w-[20px] items-center justify-center rounded-full bg-[#08122E] px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </div>

            <div className="hidden leading-tight md:block">
              <div className="text-[11px] font-medium text-slate-500">
                Votre sélection
              </div>

              <div className="text-[15px] font-bold text-[#08122E]">
                Commande
              </div>
            </div>
          </Link>

          {/* CTA PRINCIPAL */}
          <Link
            href="/#equipements"
            className="hidden whitespace-nowrap rounded-full bg-[#FF7A16] px-6 py-4 text-[15px] font-bold text-white shadow-[0_14px_30px_rgba(255,122,22,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ef6d0c] lg:inline-flex"
          >
            Composer
            <span className="ml-2">→</span>
          </Link>

        </div>
      </div>
    </header>
  );
}