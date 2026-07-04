import Link from "next/link";
import {
  ShieldCheck,
  Smartphone,
  Check,
  ArrowRight,
  HeartHandshake,
  Lock,
  PhoneCall,
  Activity,
  Radar,
  UsersRound,
  CalendarClock,
} from "lucide-react";

const benefits = [
  {
    icon: Radar,
    title: "Présence détectée sans caméra",
    text: "Le domicile peut comprendre une présence sans image, sans vidéo et sans intrusion.",
  },
  {
    icon: Activity,
    title: "Rythme de vie pris en compte",
    text: "Les routines sont observées de façon discrète pour mieux repérer les changements importants.",
  },
  {
    icon: CalendarClock,
    title: "Inactivité prolongée identifiée",
    text: "La famille peut être informée lorsqu’une absence d’activité paraît inhabituelle.",
  },
  {
    icon: UsersRound,
    title: "Proches mieux rassurés",
    text: "L’application donne une vision claire du quotidien, sans transformer le domicile en lieu de surveillance.",
  },
];

const equipments = [
  {
    icon: ShieldCheck,
    title: "Tout le confort inclus",
    text: "Autonomie reprend Sérénité et Confort : SOS, fumée, porte, éclairage nocturne, fuite et confort du logement.",
  },
  {
    icon: Radar,
    title: "Présence détectée sans caméra",
    text: "Des capteurs adaptés permettent de mieux comprendre l’occupation des pièces clés.",
  },
  {
    icon: Activity,
    title: "Lecture discrète des habitudes",
    text: "Les informations du domicile sont transformées en repères simples et utiles pour la famille.",
  },
  {
    icon: Smartphone,
    title: "Application famille enrichie",
    text: "Une vision plus rassurante du quotidien, avec des informations compréhensibles et actionnables.",
  },
];

const steps = [
  "Nous installons les protections Sérénité et Confort.",
  "Nous ajoutons des capteurs non intrusifs dans les pièces clés.",
  "La maison apprend les repères utiles du quotidien.",
  "Les proches disposent d’une vision rassurante, sans caméra.",
];

const faq = [
  {
    q: "Le pack Autonomie utilise-t-il une caméra ?",
    a: "Non. La présence et les habitudes sont détectées avec des capteurs non intrusifs.",
  },
  {
    q: "Est-ce une surveillance permanente ?",
    a: "Non. L’objectif est de repérer les changements importants, pas d’observer la personne en continu.",
  },
  {
    q: "Le pack Autonomie inclut-il Confort ?",
    a: "Oui. Autonomie inclut tout le pack Confort.",
  },
  {
    q: "Peut-on ajouter un accompagnement humain ensuite ?",
    a: "Oui. Le pack Signature ajoute un niveau d’accompagnement et de coordination.",
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
              Une maison attentive au rythme de vie, pour préserver l’indépendance plus longtemps, avec tout le confort Solerya inclus.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-full px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                style={{ backgroundColor: "#8E44CC" }}
              >
                Être rappelé
              </Link>

              <Link
                href="#equipements"
                className="rounded-full border px-8 py-4 text-center text-sm font-bold transition hover:bg-white"
                style={{ borderColor: "#E9D5FF", color: "#8E44CC" }}
              >
                Voir ce qui est inclus
              </Link>
            </div>

            <p className="mt-6 text-3xl font-extrabold" style={{ color: "#8E44CC" }}>
              Dès 79 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div className="rounded-[28px] p-8" style={{ background: "linear-gradient(135deg, #F5ECFF, #ffffff)" }}>
              <Radar className="h-20 w-20" style={{ color: "#8E44CC" }} />
              <h2 className="mt-8 text-3xl font-extrabold">
                Comprendre si la journée se déroule normalement, sans caméra.
              </h2>
              <p className="mt-4 text-slate-600">
                Solerya Autonomie ne surveille pas la personne : la maison repère discrètement les changements importants du quotidien.
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
                <Icon className="h-10 w-10" style={{ color: "#8E44CC" }} />
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
        style={{ backgroundColor: "#FCF8FF" }}
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
                  <Icon className="h-12 w-12" style={{ color: "#8E44CC" }} />
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
            <div key={step} className="rounded-[28px] p-6" style={{ backgroundColor: "#F5ECFF" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold text-white" style={{ backgroundColor: "#8E44CC" }}>
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
        <div className="mx-auto max-w-6xl rounded-[40px] p-10 text-white shadow-[0_30px_90px_rgba(8,18,46,0.22)] md:p-14" style={{ background: "linear-gradient(135deg, #8E44CC, #5E2B90)" }}>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Préservez l’indépendance avec plus de confiance.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Autonomie aide les familles à rester rassurées, tout en respectant la vie privée et les habitudes de la personne.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Solerya Autonomie
              </p>
              <p className="mt-2 text-4xl font-extrabold" style={{ color: "#8E44CC" }}>
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
                <PhoneCall className="h-4 w-4" style={{ color: "#8E44CC" }} />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
