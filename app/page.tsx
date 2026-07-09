import Link from "next/link";
import {
  HeartHandshake,
  Home,
  LampDesk,
  CalendarClock,
  UsersRound,
  Check,
  ShieldCheck,
  Bell,
  PhoneCall,
} from "lucide-react";

const highlights = [
  ["♡", "Solutions simples", "Faciles à installer et à utiliser au quotidien."],
  ["♢", "Données sécurisées", "Respect de la vie privée et informations protégées."],
  ["☏", "Accompagnement humain", "Un conseiller vous aide à choisir les bonnes solutions."],
  ["✦", "Produits testés", "Une sélection fiable, utile et adaptée aux seniors."],
];

const stats = [
  ["90 %", "des seniors souhaitent rester vivre chez eux le plus longtemps possible."],
  ["1/3", "des plus de 65 ans chutent au moins une fois par an."],
  ["24/7", "des informations utiles pour rassurer la famille, même à distance."],
];

const packs = [
  {
    name: "Solerya Sérénité",
    href: "/packs/serenite",
    color: "#0B8A4A",
    bg: "bg-emerald-50",
    icon: Home,
    text: "Vivre chez soi l’esprit tranquille et rassurer ses proches.",
    price: "Dès 49 €/mois",
    features: [
      "Un bouton SOS à portée de main",
      "Une maison attentive aux risques essentiels",
      "La porte d’entrée et l’activité au domicile prises en compte",
      "Les proches informés quand cela compte vraiment",
    ],
  },
  {
    name: "Solerya Confort",
    href: "/packs/confort",
    color: "#0967D2",
    bg: "bg-blue-50",
    icon: LampDesk,
    text: "Un logement qui facilite le quotidien et prévient les risques.",
    price: "Dès 69 €/mois",
    features: [
      "Tout le pack Sérénité",
      "Des déplacements nocturnes plus sûrs",
      "Les risques du logement repérés plus tôt",
      "Un quotidien plus sûr et plus confortable",
    ],
  },
  {
    name: "Solerya Autonomie",
    href: "/packs/autonomie",
    color: "#8E44CC",
    bg: "bg-purple-50",
    icon: CalendarClock,
    text: "Une maison attentive au rythme de vie, sans caméra.",
    price: "Dès 79 €/mois",
    features: [
      "Tout le pack Confort",
      "Les habitudes de vie prises en compte discrètement",
      "Les changements importants repérés automatiquement",
      "Une vision rassurante du quotidien pour les proches",
    ],
  },
  {
    name: "Solerya Signature",
    href: "/packs/signature",
    color: "#F25A1D",
    bg: "bg-orange-50",
    icon: UsersRound,
    text: "La solution complète pour rester chez soi, entouré et accompagné.",
    price: "Dès 99 €/mois",
    features: [
      "Tout le pack Autonomie",
      "Une protection renforcée dans tout le logement",
      "Un accompagnement facilitant l’organisation des intervenants à domicile",
      "Un suivi personnalisé et une assistance prioritaire",
    ],
  },
];

export default function SoleryaHomePage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_8%,#FFF1E6_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#fffaf5)]">
        <div className="mx-auto grid max-w-7xl items-stretch gap-14 px-6 pb-14 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-16 lg:pt-14">
          <div className="flex flex-col">
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
                Découvrir Solerya
              </div>
            </div>

            <Link
              href="/familles"
              id="familles"
              className="group mt-6 block rounded-[28px] bg-white/80 p-6 shadow-[0_18px_50px_rgba(8,18,46,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(8,18,46,0.10)]"
            >
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#F58220]" />
                  <p className="text-sm leading-6 text-slate-700">
                    <strong className="text-[#08122E]">Être rassuré</strong>
                    <br />
                    même quand vous êtes loin.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Bell className="mt-1 h-5 w-5 shrink-0 text-[#F58220]" />
                  <p className="text-sm leading-6 text-slate-700">
                    <strong className="text-[#08122E]">Être prévenu</strong>
                    <br />
                    au bon moment, sans intrusion.
                  </p>
                </div>

                <div className="flex gap-3">
                  <PhoneCall className="mt-1 h-5 w-5 shrink-0 text-[#F58220]" />
                  <p className="text-sm leading-6 text-slate-700">
                    <strong className="text-[#08122E]">Être accompagné</strong>
                    <br />
                    par un conseiller humain.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-orange-100 pt-5 sm:grid-cols-3">
                {stats.map(([number, text]) => (
                  <div key={number}>
                    <p className="text-3xl font-extrabold tracking-tight text-[#F58220]">
                      {number}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-end border-t border-orange-100 pt-4">
                <span className="text-sm font-bold text-[#F58220] transition group-hover:translate-x-1">
                  Découvrir le domicile connecté →
                </span>
              </div>
            </Link>
          </div>

          <div className="flex h-full flex-col">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-medium text-[#C95F07]">
              <HeartHandshake className="h-4 w-4 text-[#F58220]" />
              <span>Des solutions connectées pour bien vieillir chez soi, en Île de France</span>
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

            <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row">
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
                Être contacté par un conseiller
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 rounded-[36px] bg-[#FFF7EF] p-6 shadow-[0_18px_60px_rgba(8,18,46,0.06)] md:grid-cols-4 md:p-8">
          {packs.map((pack) => {
            const Icon = pack.icon;

            return (
              <Link
                key={pack.name}
                href={pack.href}
                className="group flex min-h-[500px] flex-col rounded-[28px] bg-white/80 p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${pack.bg}`}
                >
                  <Icon
                    className="h-10 w-10"
                    strokeWidth={2.1}
                    style={{ color: pack.color }}
                  />
                </div>

                <h3
                  className="text-2xl font-extrabold tracking-tight"
                  style={{ color: pack.color }}
                >
                  {pack.name}
                </h3>

                <p className="mt-4 min-h-[60px] text-sm leading-6 text-slate-600">
                  {pack.text}
                </p>

                <div className="mt-5 space-y-3 text-left">
                  {pack.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        strokeWidth={3}
                        style={{ color: pack.color }}
                      />
                      <span className="text-sm leading-5 text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <div
                    className="rounded-full px-5 py-3 text-sm font-bold"
                    style={{
                      color: pack.color,
                      backgroundColor: `${pack.color}12`,
                    }}
                  >
                    {pack.price}
                  </div>
                </div>

                <span
                  className="mt-5 text-sm font-bold transition group-hover:translate-x-1"
                  style={{ color: pack.color }}
                >
                  Découvrir →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        <p className="text-sm font-semibold text-[#08122E]">
          Ils parlent de nous
        </p>

        <div className="mt-9 grid grid-cols-2 items-center gap-8 text-2xl font-extrabold tracking-tight text-[#08122E] opacity-90 md:grid-cols-6">
          <span>france·brésil</span>
          <span>Le Parichien</span>
          <span>Les Echos des savanes</span>
          <span>BFR</span>
          <span>franceinfaux:</span>
          <span>LE GORAFI</span>
        </div>
      </section>
    </main>
  );
}