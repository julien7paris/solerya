import Link from "next/link";
import {
  ShieldCheck,
  Bell,
  Pill,
  Video,
  CalendarClock,
  Activity,
  Smartphone,
  UsersRound,
  Check,
  ArrowRight,
  Home,
  HeartHandshake,
  Lock,
  PhoneCall,
} from "lucide-react";

const benefits = [
  {
    icon: Pill,
    title: "Rappels de médicaments",
    text: "Un pilulier intelligent aide à sécuriser les prises importantes.",
  },
  {
    icon: Video,
    title: "Lien vidéo simplifié",
    text: "Les appels vidéo facilitent les échanges avec les proches.",
  },
  {
    icon: Activity,
    title: "Suivi des habitudes",
    text: "Les aidants repèrent plus facilement les changements du quotidien.",
  },
  {
    icon: UsersRound,
    title: "Aidants mieux informés",
    text: "La famille dispose d’une vision claire, utile et non intrusive.",
  },
];

const equipments = [
  {
    icon: ShieldCheck,
    title: "Tout le pack Confort",
    text: "Sécurité essentielle, veilleuses, capteurs de mouvement, détection de fuites et équipements connectés du domicile.",
  },
  {
    icon: Pill,
    title: "Pilulier intelligent",
    text: "Un dispositif simple pour accompagner la prise régulière des traitements.",
  },
  {
    icon: Video,
    title: "Appels vidéo simplifiés",
    text: "Une solution accessible pour garder le lien avec les proches.",
  },
  {
    icon: Activity,
    title: "Tableau de bord aidants",
    text: "Un espace clair pour suivre les habitudes de vie et détecter les signaux faibles.",
  },
];

const steps = [
  "Nous installons les équipements de sécurité et de confort.",
  "Le pilulier et les rappels accompagnent les routines importantes.",
  "Les habitudes de vie sont suivies de manière discrète.",
  "Les aidants disposent d’informations utiles pour agir au bon moment.",
];

const faq = [
  {
    q: "Le pack Autonomie remplace-t-il un aidant ?",
    a: "Non. Il complète l’accompagnement humain en donnant aux proches des informations utiles au bon moment.",
  },
  {
    q: "Le pilulier est-il simple à utiliser ?",
    a: "Oui. Il est pensé pour accompagner les routines sans ajouter de complexité.",
  },
  {
    q: "Les proches peuvent-ils suivre les habitudes à distance ?",
    a: "Oui. Le tableau de bord aidants permet de consulter les informations importantes.",
  },
  {
    q: "Peut-on aller vers le pack Signature ensuite ?",
    a: "Oui. Le pack Autonomie peut évoluer vers l’offre Signature avec davantage d’accompagnement humain.",
  },
];

export default function AutonomiePage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#F5ECFF_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#FCF8FF)]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              <CalendarClock className="h-4 w-4" />
              Pack autonomie senior
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-7xl">
              Solerya Autonomie
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-9 text-slate-600">
              Le pack pensé pour préserver l’indépendance au quotidien grâce au pilulier intelligent, aux rappels, aux appels vidéo et au suivi des aidants.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-full bg-[#8E44CC] px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Être rappelé
              </Link>

              <Link
                href="#equipements"
                className="rounded-full border border-purple-200 px-8 py-4 text-center text-sm font-bold text-[#8E44CC] transition hover:bg-purple-50"
              >
                Voir les équipements
              </Link>
            </div>

            <p className="mt-6 text-3xl font-extrabold text-[#8E44CC]">
              Dès 79 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div className="rounded-[28px] bg-gradient-to-br from-purple-50 to-white p-8">
              <CalendarClock className="h-20 w-20 text-[#8E44CC]" />
              <h2 className="mt-8 text-3xl font-extrabold">
                Préserver l’autonomie, sans isoler la personne.
              </h2>
              <p className="mt-4 text-slate-600">
                Solerya Autonomie protège discrètement avec des objets simples,
                utiles et pensés pour les familles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Les bénéfices
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(8,18,46,0.08)] transition hover:-translate-y-1"
              >
                <Icon className="h-10 w-10 text-[#8E44CC]" />
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="equipements"
        className="bg-[#FCF8FF] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Les équipements inclus
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {equipments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[32px] bg-white p-8 shadow-[0_18px_50px_rgba(8,18,46,0.06)]"
                >
                  <Icon className="h-12 w-12 text-[#8E44CC]" />
                  <h3 className="mt-6 text-2xl font-extrabold">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Comment ça fonctionne
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[28px] bg-purple-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8E44CC] text-lg font-extrabold text-white">
                {index + 1}
              </div>
              <p className="mt-6 font-semibold leading-7">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#08122E] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <HeartHandshake className="h-12 w-12 text-[#F58220]" />
            <h2 className="mt-6 text-4xl font-extrabold">
              Pourquoi Solerya ?
            </h2>
          </div>

          <div className="space-y-5 md:col-span-2">
            {[
              "Une solution pensée pour les seniors et leurs proches.",
              "Des équipements utiles, simples et non intrusifs.",
              "Un accompagnement humain pour choisir le bon pack.",
              "Une offre évolutive selon le niveau d’autonomie.",
            ].map((item) => (
              <div key={item} className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#F58220]" />
                <p className="text-lg leading-8 text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">
          Questions fréquentes
        </h2>

        <div className="mt-10 space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-[24px] bg-white p-6 shadow-[0_14px_40px_rgba(8,18,46,0.06)]"
            >
              <summary className="cursor-pointer list-none text-lg font-bold">
                {item.q}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="cta" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-gradient-to-br from-[#8E44CC] to-[#5E2B90] p-10 text-white shadow-[0_30px_90px_rgba(142,68,204,0.28)] md:p-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Préservez l’indépendance avec plus de confiance.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Autonomie apporte une première couche de sécurité simple,
                rassurante et accessible.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Pack Autonomie
              </p>
              <p className="mt-2 text-4xl font-extrabold text-[#8E44CC]">
                79 €/mois
              </p>

              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#E36E08]"
              >
                Être rappelé
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <PhoneCall className="h-4 w-4 text-[#8E44CC]" />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}