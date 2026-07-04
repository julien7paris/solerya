import Link from "next/link";
import {
  ShieldCheck,
  Bell,
  UsersRound,
  FileText,
  Wrench,
  Headphones,
  ClipboardCheck,
  Home,
  Check,
  ArrowRight,
  HeartHandshake,
  Lock,
  PhoneCall,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Headphones,
    title: "Assistance renforcée",
    text: "Un accompagnement plus complet pour rassurer les familles.",
  },
  {
    icon: Wrench,
    title: "Maintenance incluse",
    text: "Les équipements sont suivis pour garantir une continuité de service.",
  },
  {
    icon: FileText,
    title: "Passeport Senior",
    text: "Un dossier numérique utile pour centraliser les informations importantes.",
  },
  {
    icon: UsersRound,
    title: "Coordination à domicile",
    text: "Une approche premium pour mieux organiser l’accompagnement autour du senior.",
  },
];

const equipments = [
  {
    icon: ShieldCheck,
    title: "Tout le pack Autonomie",
    text: "Sécurité, confort, pilulier intelligent, appels vidéo, tableau de bord aidants et suivi des habitudes.",
  },
  {
    icon: Headphones,
    title: "Assistance et maintenance",
    text: "Un niveau d’accompagnement renforcé pour sécuriser l’usage dans la durée.",
  },
  {
    icon: FileText,
    title: "Passeport Numérique Senior",
    text: "Un espace structuré pour regrouper les informations utiles à la famille et aux intervenants.",
  },
  {
    icon: ClipboardCheck,
    title: "Suivi personnalisé",
    text: "Une coordination plus fine pour adapter les solutions au fil de l’évolution des besoins.",
  },
];

const steps = [
  "Nous réalisons un diagnostic complet des besoins.",
  "Nous déployons les équipements et les services adaptés.",
  "Nous assurons le suivi, la maintenance et l’accompagnement.",
  "La famille bénéficie d’une solution premium, structurée et évolutive.",
];

const faq = [
  {
    q: "À qui s’adresse le pack Signature ?",
    a: "Il s’adresse aux familles qui veulent une solution très complète avec davantage d’accompagnement, de maintenance et de coordination.",
  },
  {
    q: "Le Passeport Numérique Senior est-il inclus ?",
    a: "Oui. Il fait partie des éléments différenciants du pack Signature.",
  },
  {
    q: "La maintenance est-elle comprise ?",
    a: "Oui. Le pack Signature inclut un niveau de maintenance et d’assistance renforcé.",
  },
  {
    q: "Peut-on personnaliser le pack ?",
    a: "Oui. Le pack Signature est le plus adapté pour construire une solution sur mesure.",
  },
];

export default function SignaturePage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#FFF1E6_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#FFFAF5)]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              <Sparkles className="h-4 w-4" />
              Pack premium complet
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-7xl">
              Solerya Signature
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-9 text-slate-600">
              L’offre la plus complète pour accompagner le vieillissement à domicile avec équipements, maintenance, assistance, Passeport Senior et coordination personnalisée.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-full bg-[#F25A1D] px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Être rappelé
              </Link>

              <Link
                href="#equipements"
                className="rounded-full border border-orange-200 px-8 py-4 text-center text-sm font-bold text-[#F25A1D] transition hover:bg-orange-50"
              >
                Voir les équipements
              </Link>
            </div>

            <p className="mt-6 text-3xl font-extrabold text-[#F25A1D]">
              Dès 99 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div className="rounded-[28px] bg-gradient-to-br from-orange-50 to-white p-8">
              <UsersRound className="h-20 w-20 text-[#F25A1D]" />
              <h2 className="mt-8 text-3xl font-extrabold">
                Une expérience premium pour sécuriser toute la famille.
              </h2>
              <p className="mt-4 text-slate-600">
                Solerya Signature protège discrètement avec des objets simples,
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
                <Icon className="h-10 w-10 text-[#F25A1D]" />
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
        className="bg-[#FFFAF5] px-6 py-20 lg:px-8"
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
                  <Icon className="h-12 w-12 text-[#F25A1D]" />
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
            <div key={step} className="rounded-[28px] bg-orange-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F25A1D] text-lg font-extrabold text-white">
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
        <div className="mx-auto max-w-6xl rounded-[40px] bg-gradient-to-br from-[#F25A1D] to-[#B53D0D] p-10 text-white shadow-[0_30px_90px_rgba(242,90,29,0.28)] md:p-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Offrez l’accompagnement le plus complet.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Signature apporte une première couche de sécurité simple,
                rassurante et accessible.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Pack Signature
              </p>
              <p className="mt-2 text-4xl font-extrabold text-[#F25A1D]">
                99 €/mois
              </p>

              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#E36E08]"
              >
                Être rappelé
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <PhoneCall className="h-4 w-4 text-[#F25A1D]" />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}