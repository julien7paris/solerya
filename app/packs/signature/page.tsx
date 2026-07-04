import Link from "next/link";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Home,
  HeartHandshake,
  Lock,
  PhoneCall,
  UsersRound,
  Headphones,
  Wrench,
  ClipboardCheck,
  Sparkles,
  HandHeart,
} from "lucide-react";

const benefits = [
  {
    icon: UsersRound,
    title: "Accompagnement humain",
    text: "Un niveau de service renforcé pour aider la famille à organiser le quotidien.",
  },
  {
    icon: HandHeart,
    title: "Coordination des auxiliaires de vie",
    text: "Un appui pour faciliter l’organisation autour des intervenants du domicile.",
  },
  {
    icon: ClipboardCheck,
    title: "Coordination des soins infirmiers",
    text: "Une aide à la coordination des soins à domicile selon les besoins de la personne.",
  },
  {
    icon: Headphones,
    title: "Assistance prioritaire",
    text: "Un suivi personnalisé pour maintenir la solution dans la durée.",
  },
];

const equipments = [
  {
    icon: ShieldCheck,
    title: "Toute l’autonomie incluse",
    text: "Signature reprend toute la protection Autonomie, avec présence sans caméra et vision rassurante du quotidien.",
  },
  {
    icon: Home,
    title: "Protection adaptée à l’ensemble du logement",
    text: "L’installation est pensée pour couvrir les pièces essentielles selon la configuration du domicile.",
  },
  {
    icon: ClipboardCheck,
    title: "Coordination à domicile",
    text: "Un accompagnement pour organiser les soins infirmiers et les auxiliaires de vie.",
  },
  {
    icon: Wrench,
    title: "Suivi personnalisé et assistance prioritaire",
    text: "Un niveau de service premium pour l’installation, l’usage et l’évolution des besoins.",
  },
];

const steps = [
  "Nous réalisons un diagnostic complet du logement et des besoins.",
  "Nous déployons toute la protection Autonomie avec une couverture renforcée.",
  "Nous coordonnons les intervenants à domicile selon le cadre défini avec la famille.",
  "Nous assurons un suivi personnalisé pour faire évoluer la solution dans le temps.",
];

const faq = [
  {
    q: "À qui s’adresse le pack Signature ?",
    a: "Aux familles qui veulent une solution complète avec technologie, accompagnement humain et coordination à domicile.",
  },
  {
    q: "Les soins infirmiers sont-ils inclus dans le prix ?",
    a: "Le pack prévoit la coordination ou la mise en relation selon le cadre choisi. Les prestations de soins restent à préciser dans l’offre commerciale.",
  },
  {
    q: "Les auxiliaires de vie sont-ils fournis par Solerya ?",
    a: "Solerya peut coordonner ou faciliter l’organisation avec les intervenants. La page contrat devra préciser ce qui est inclus ou facturé séparément.",
  },
  {
    q: "Le pack Signature inclut-il Autonomie ?",
    a: "Oui. Signature inclut tout le pack Autonomie avec un niveau de service supérieur.",
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
              La solution la plus complète pour rester chez soi, entouré et accompagné, avec toute l’autonomie Solerya incluse.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-full px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                style={{ backgroundColor: "#F25A1D" }}
              >
                Être rappelé
              </Link>

              <Link
                href="#equipements"
                className="rounded-full border px-8 py-4 text-center text-sm font-bold transition hover:bg-white"
                style={{ borderColor: "#FED7AA", color: "#F25A1D" }}
              >
                Voir ce qui est inclus
              </Link>
            </div>

            <p className="mt-6 text-3xl font-extrabold" style={{ color: "#F25A1D" }}>
              Dès 99 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div className="rounded-[28px] p-8" style={{ background: "linear-gradient(135deg, #FFF1E6, #ffffff)" }}>
              <UsersRound className="h-20 w-20" style={{ color: "#F25A1D" }} />
              <h2 className="mt-8 text-3xl font-extrabold">
                Technologie discrète, accompagnement humain et coordination à domicile.
              </h2>
              <p className="mt-4 text-slate-600">
                Solerya Signature ajoute un niveau de service pour accompagner la famille, le senior et les intervenants au fil des besoins.
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
                <Icon className="h-10 w-10" style={{ color: "#F25A1D" }} />
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
        className="px-6 py-20 lg:px-8"
        style={{ backgroundColor: "#FFFAF5" }}
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Ce qui est inclus
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {equipments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[32px] bg-white p-8 shadow-[0_18px_50px_rgba(8,18,46,0.06)]"
                >
                  <Icon className="h-12 w-12" style={{ color: "#F25A1D" }} />
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
            <div key={step} className="rounded-[28px] p-6" style={{ backgroundColor: "#FFF1E6" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold text-white" style={{ backgroundColor: "#F25A1D" }}>
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
            {["Une solution pensée pour les seniors et leurs proches.","Des équipements utiles, simples et non intrusifs.","Un accompagnement humain pour choisir le bon niveau de protection.","Une offre évolutive selon les besoins du domicile et de la famille."].map((item) => (
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
        <div className="mx-auto max-w-6xl rounded-[40px] p-10 text-white shadow-[0_30px_90px_rgba(8,18,46,0.22)] md:p-14" style={{ background: "linear-gradient(135deg, #F25A1D, #B53D0D)" }}>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Offrez l’accompagnement le plus complet.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Signature associe protection du logement, assistance prioritaire et coordination humaine pour simplifier le maintien à domicile.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Solerya Signature
              </p>
              <p className="mt-2 text-4xl font-extrabold" style={{ color: "#F25A1D" }}>
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
                <PhoneCall className="h-4 w-4" style={{ color: "#F25A1D" }} />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
