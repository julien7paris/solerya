import Link from "next/link";
import {
  HeartHandshake,
  Home,
  LampDesk,
  CalendarClock,
  UsersRound,
  Check,
} from "lucide-react";

const highlights = [
  ["♡", "Solutions simples", "Faciles à installer et à utiliser au quotidien."],
  ["♢", "Données sécurisées", "Respect de la vie privée et informations protégées."],
  ["☏", "Accompagnement humain", "Un conseiller vous aide à choisir les bonnes solutions."],
  ["✦", "Produits testés", "Une sélection fiable, utile et adaptée aux seniors."],
];

const solutions = [
  {
    name: "Solerya Sérénité",
    color: "#0B8A4A",
    bg: "bg-emerald-50",
    icon: Home,
    text: "Sécurité essentielle : chute, SOS, fumée, ouverture de porte et alertes famille 24h/24.",
    price: "Dès 39 €/mois",
    features: [
      "Montre avec détection de chute",
      "Bouton SOS",
      "Détecteur de fumée connecté",
      "Détecteur d’ouverture de porte",
      "Alertes sur smartphone",
      "Application famille",
    ],
  },
  {
    name: "Solerya Confort",
    color: "#0967D2",
    bg: "bg-blue-50",
    icon: LampDesk,
    text: "Sécurité et confort à domicile : capteurs intelligents, veilleuses et surveillance du logement.",
    price: "Dès 59 €/mois",
    features: [
      "Tout le pack Sérénité",
      "Veilleuses automatiques",
      "Capteurs de mouvement",
      "Détecteur de fuite d’eau",
      "Détecteur de gaz",
      "Sonnette vidéo & caméra",
    ],
  },
  {
    name: "Solerya Autonomie",
    color: "#8E44CC",
    bg: "bg-purple-50",
    icon: CalendarClock,
    text: "Pour préserver l’indépendance : pilulier, rappels, appels vidéo et suivi des aidants.",
    price: "Dès 79 €/mois",
    features: [
      "Tout le pack Confort",
      "Pilulier intelligent",
      "Rappels de médicaments",
      "Appels vidéo simplifiés",
      "Tableau de bord aidants",
      "Suivi des habitudes de vie",
    ],
  },
  {
    name: "Solerya Signature",
    color: "#F25A1D",
    bg: "bg-orange-50",
    icon: UsersRound,
    text: "L’accompagnement complet : maintenance, Passeport Senior, assistance et coordination.",
    price: "Dès 99 €/mois",
    features: [
      "Tout le pack Autonomie",
      "Maintenance & assistance 24/7",
      "Passeport Numérique Senior",
      "Suivi personnalisé",
      "Coordination à domicile",
      "Aides & démarches simplifiées",
    ],
  },
];

export default function SoleryaHomePage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_8%,#FFF1E6_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#fffaf5)]">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 pb-14 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-16">
          <div className="relative overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(8,18,46,0.16)]">
            <video
              className="h-full min-h-[460px] w-full object-cover"
              src="/family-international.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <button
              aria-label="Lire la vidéo"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-2xl text-[#08122E] shadow-2xl transition hover:scale-105"
            >
              ▶
            </button>

            <div className="absolute bottom-7 left-7 rounded-full bg-black/55 px-6 py-3 text-sm font-semibold text-white backdrop-blur">
              Découvrir Solerya en 90 secondes
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-medium text-[#C95F07]">
              <HeartHandshake className="h-4 w-4 text-[#F58220]" />
              <span>Des solutions connectées pour bien vieillir chez soi</span>
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-[#08122E] md:text-6xl">
              Parce que vos parents méritent de rester chez eux, en toute
              sécurité.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Solerya sélectionne les meilleures technologies pour protéger,
              rassurer et préserver l’autonomie de ceux que vous aimez.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
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

            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
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
          {solutions.map((pack) => {
            const Icon = pack.icon;

            return (
              <div
                key={pack.name}
                className="flex min-h-[560px] flex-col rounded-[28px] bg-white/80 p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full ${pack.bg}`}
                >
                  <Icon
                    className="h-12 w-12"
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

                <p className="mt-5 min-h-[72px] text-sm leading-6 text-slate-600">
                  {pack.text}
                </p>

                <div className="mt-6 space-y-4 text-left">
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

                <div
                  className="mt-auto rounded-full px-5 py-3 text-sm font-bold"
                  style={{
                    color: pack.color,
                    backgroundColor: `${pack.color}12`,
                  }}
                >
                  {pack.price}
                </div>

                <button
                  className="mt-6 text-sm font-bold transition hover:translate-x-1"
                  style={{ color: pack.color }}
                >
                  Découvrir →
                </button>
              </div>
            );
          })}
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