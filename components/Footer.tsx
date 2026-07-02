import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/Logo Solerya.png"
              alt="Solerya"
              width={230}
              height={80}
              className="h-16 w-auto"
            />

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600">
              Les meilleures technologies connectées pour permettre aux seniors
              de rester chez eux plus longtemps, en toute sécurité, tout en
              rassurant leurs proches.
            </p>

            <Link
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-[#F58220] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E36E08]"
            >
              Parler à un conseiller
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-[#08122E]">Solutions</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li><Link href="#solutions">Maintien à domicile</Link></li>
              <li><Link href="#solutions">Objets connectés</Link></li>
              <li><Link href="#familles">Pour les familles</Link></li>
              <li><Link href="#engagements">Nos engagements</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#08122E]">Solerya</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li><Link href="#">À propos</Link></li>
              <li><Link href="#conseils">Conseils</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="#">Carrières</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#08122E]">Informations</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li><Link href="#">Mentions légales</Link></li>
              <li><Link href="#">Confidentialité</Link></li>
              <li><Link href="#">Cookies</Link></li>
              <li><Link href="#">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-slate-100 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Solerya. Tous droits réservés.</p>

          <div className="flex gap-6">
            <Link href="#">LinkedIn</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}