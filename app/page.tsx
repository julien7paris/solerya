import Link from "next/link";
import { HeartHandshake } from "lucide-react";

const highlights = [
  ["♡", "Solutions simples", "Faciles à installer et à utiliser au quotidien."],
  ["♢", "Données sécurisées", "Respect de la vie privée et informations protégées."],
  ["☏", "Accompagnement humain", "Un conseiller vous aide à choisir les bonnes solutions."],
  ["✦", "Produits testés", "Une sélection fiable, utile et adaptée aux seniors."],
];

const solutions = [
  ["⌂", "Sécurité au quotidien", "Détecteurs de chute, alertes et capteurs pour protéger vos proches 24h/24."],
  ["⌂", "Maintien à domicile", "Des solutions pour vivre chez soi plus longtemps, en toute sérénité."],
  ["♁", "Lien et autonomie", "Gardez le lien avec vos proches et soutenez leur indépendance."],
  ["✦", "Technologies fiables", "Des objets connectés sélectionnés pour leur efficacité et leur simplicité."],
];

export default function SoleryaHomePage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_8%,#FFF1E6_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#fffaf5)]">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 pb-14 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-16 lg:pt-14">
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(8,18,46,0.16)]">
            <video
              className="h-[380px] w-full object-cover lg:h-[400px]"
              src="/family-international.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <button
              aria-label="Lire la vidéo"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl text-[#08122E] shadow-2xl transition hover:scale-105"
            >
              ▶
            </button>

            <div className="absolute bottom-5 left-5 rounded-full bg-black/55 px-5 py-3 text-sm font-semibold text-white backdrop-blur">
              Découvrir Solerya en 90 secondes
            </div>
          </div>

          <div className="flex h-fit flex-col self-start">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-medium text-[#C95F07]">
              <HeartHandshake className="h-4 w-4 text-[#F58220]" />
              <span>Des solutions connectées pour bien vieillir chez soi</span>
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-[#08122E] md:text-6xl">
              Parce que vos parents méritent de rester chez eux, en toute
              sécurité.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Solerya sélectionne les meilleures technologies pour protéger,
              rassurer et préserver l’autonomie de ceux que vous aimez.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {highlights.map(([icon, title, text]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF2E8] text-lg text-[#F58220]">
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#08122E]">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#solutions"
                className="rounded-full bg-[#F58220] px-8 py-4 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
              >
                Découvrir nos packs →
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-semibold text-[#08122E] transition hover:bg-white hover:shadow-sm"
              >
                Être rappelé par un conseiller
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 rounded-[36px] bg-[#FFF7EF] p-6 shadow-[0_18px_60px_rgba(8,18,46,0.06)] md:grid-cols-4 md:p-8">
          {solutions.map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-[28px] bg-white/70 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-[#F58220] shadow-sm">
                {icon}
              </div>

              <h3 className="text-lg font-bold tracking-tight text-[#08122E]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        <p className="text-sm font-semibold text-[#08122E]">
          Ils parlent de nous
        </p>

        <div className="mt-9 grid grid-cols-2 items-center gap-8 text-2xl font-extrabold tracking-tight text-[#08122E] opacity-90 md:grid-cols-6">
          <span>france·2</span>
          <span>Le Parisien</span>
          <span>Les Echos</span>
          <span>BFM</span>
          <span>franceinfo:</span>
          <span>LE FIGARO</span>
        </div>
      </section>
    </main>
  );
}