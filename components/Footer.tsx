import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* Haut du footer */}

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Logo */}

          <div>

            <img
              src="/logo-solerya.png"
              alt="Solerya"
              className="h-14 w-auto"
            />

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-600">
              Les meilleures technologies connectées pour permettre aux seniors
              de rester chez eux plus longtemps, en toute sécurité, tout en
              rassurant leurs proches.
            </p>

            <div className="mt-8">

              <Link
                href="/contact"
                className="rounded-full bg-[#F58220] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E36E08]"
              >
                Parler à un conseiller
              </Link>

            </div>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-[#08122E]">
              Solutions
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link href="/solutions">
                  Maintien à domicile
                </Link>
              </li>

              <li>
                <Link href="/produits">
                  Objets connectés
                </Link>
              </li>

              <li>
                <Link href="/familles">
                  Pour les familles
                </Link>
              </li>

              <li>
                <Link href="/comparateur">
                  Comparateur
                </Link>
              </li>

            </ul>

          </div>

          {/* Entreprise */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-[#08122E]">
              Solerya
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link href="/apropos">
                  À propos
                </Link>
              </li>

              <li>
                <Link href="/engagements">
                  Nos engagements
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  Conseils
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Légal */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-[#08122E]">
              Informations
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link href="/mentions-legales">
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link href="/confidentialite">
                  Politique de confidentialité
                </Link>
              </li>

              <li>
                <Link href="/cookies">
                  Cookies
                </Link>
              </li>

              <li>
                <Link href="/cgv">
                  Conditions générales
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Séparateur */}

        <div className="my-14 h-px bg-slate-100" />

        {/* Bas */}

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Solerya. Tous droits réservés.
          </p>

          <div className="flex gap-8">

            <Link
              href="/linkedin"
              className="transition hover:text-[#F58220]"
            >
              LinkedIn
            </Link>

            <Link
              href="/facebook"
              className="transition hover:text-[#F58220]"
            >
              Facebook
            </Link>

            <Link
              href="/youtube"
              className="transition hover:text-[#F58220]"
            >
              YouTube
            </Link>

            <Link
              href="/instagram"
              className="transition hover:text-[#F58220]"
            >
              Instagram
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}