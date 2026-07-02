import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(to_bottom,#f8fbff,#ffffff)]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#F4D000]/20">
                <img
                  src="/images/logo-proxfi.png"
                  alt="Logo Proxfi"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-[#08122E]">
                  Proxfi
                </p>
                <p className="text-sm text-slate-500">
                  Conseil stratégique patrimonial
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Une approche claire, premium et structurée pour les profils
              internationaux, expatriés, entrepreneurs et situations patrimoniales
              à forte complexité.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Navigation
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/" className="transition hover:text-[#08122E]">
                Accueil
              </Link>
              <Link href="/simulateur" className="transition hover:text-[#08122E]">
                Simulateur
              </Link>
              <Link href="/methode" className="transition hover:text-[#08122E]">
                Méthode
              </Link>
              <Link href="/a-propos" className="transition hover:text-[#08122E]">
                À propos
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>Paris • Accompagnement international</p>
              <a
                href="/#contact"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-[#0F5DB8] transition hover:border-[#0F5DB8]/20 hover:bg-[#F8FBFF]"
              >
                Demander un échange
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Proxfi. Tous droits réservés.</p>

            <div className="flex flex-wrap gap-5">
              <Link href="/mentions-legales" className="transition hover:text-[#08122E]">
                Mentions légales
              </Link>
              <Link href="/a-propos" className="transition hover:text-[#08122E]">
                À propos
              </Link>
              <a href="/#contact" className="transition hover:text-[#08122E]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}