import Link from "next/link";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  HeartHandshake,
  Lock,
  PhoneCall,
  LampDesk,
  Droplets,
  ThermometerSun,
  Activity,
} from "lucide-react";

const benefits = [
  {
    icon: LampDesk,
    title: "Chemin lumineux la nuit",
    text: "Un éclairage doux s’allume automatiquement pour sécuriser les déplacements nocturnes.",
  },
  {
    icon: Activity,
    title: "Déplacements plus sûrs",
    text: "Les zones de passage deviennent plus confortables, notamment la nuit.",
  },
  {
    icon: Droplets,
    title: "Fuites repérées tôt",
    text: "Un capteur aide à éviter qu’un petit incident d’eau devienne un vrai dégât.",
  },
  {
    icon: ThermometerSun,
    title: "Logement plus protecteur",
    text: "La famille garde un repère sur les fortes chaleurs, le froid et le confort intérieur.",
  },
];

const equipments = [
  {
    icon: ShieldCheck,
    title: "Toute la sérénité incluse",
    text: "Le pack reprend les fonctions essentielles : SOS, fumée, porte d’entrée et application famille.",
  },
  {
    icon: LampDesk,
    title: "Éclairage automatique la nuit",
    text: "Des veilleuses accompagnent les déplacements sans avoir à chercher un interrupteur.",
  },
  {
    icon: Activity,
    title: "Capteurs de mouvement dans les zones clés",
    text: "Ils rendent les scénarios du domicile plus utiles et plus rassurants.",
  },
  {
    icon: Droplets,
    title: "Détecteur de fuite d’eau",
    text: "Une protection simple pour la cuisine, la salle de bain ou la buanderie.",
  },
];

const steps = [
  "Nous partons de la protection essentielle du pack Sérénité.",
  "Nous ajoutons des équipements utiles dans les zones de passage et pièces de vie.",
  "La maison réagit automatiquement pour faciliter le quotidien.",
  "Les proches gardent une vision simple, utile et non intrusive.",
];

const faq = [
  {
    q: "Le pack Confort inclut-il le pack Sérénité ?",
    a: "Oui. Confort reprend tout le pack Sérénité et ajoute des fonctions pour mieux vivre au domicile.",
  },
  {
    q: "Les veilleuses fonctionnent-elles toutes seules ?",
    a: "Oui. Elles peuvent s’allumer automatiquement lors des déplacements, notamment la nuit.",
  },
  {
    q: "Y a-t-il une caméra dans le pack Confort ?",
    a: "Non. La nouvelle architecture Solerya privilégie des capteurs utiles, locaux et non intrusifs.",
  },
  {
    q: "Peut-on évoluer ensuite vers Autonomie ?",
    a: "Oui. Le pack Confort peut évoluer vers Autonomie ou Signature.",
  },
];


export default function ConfortPage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#EAF4FF_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#F7FBFF)]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <LampDesk className="h-4 w-4" />
              Pack confort du domicile
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-7xl">
              Solerya Confort
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-9 text-slate-600">
              Un logement qui facilite le quotidien et prévient les risques, jour et nuit, avec toute la protection Sérénité incluse.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-full px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                style={{ backgroundColor: "#0967D2" }}
              >
                Être rappelé
              </Link>

              <Link
                href="#equipements"
                className="rounded-full border px-8 py-4 text-center text-sm font-bold transition hover:bg-white"
                style={{ borderColor: "#BFDBFE", color: "#0967D2" }}
              >
                Voir ce qui est inclus
              </Link>
            </div>

            <p className="mt-6 text-3xl font-extrabold" style={{ color: "#0967D2" }}>
              Dès 59 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div className="rounded-[28px] p-8" style={{ background: "linear-gradient(135deg, #EAF4FF, #ffffff)" }}>
              <LampDesk className="h-20 w-20" style={{ color: "#0967D2" }} />
              <h2 className="mt-8 text-3xl font-extrabold">
                Une maison plus confortable, plus sûre et plus prévenante.
              </h2>
              <p className="mt-4 text-slate-600">
                Solerya Confort sécurise les déplacements, éclaire automatiquement la nuit et aide à prévenir les incidents domestiques courants.
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
                <Icon className="h-10 w-10" style={{ color: "#0967D2" }} />
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
        style={{ backgroundColor: "#F7FBFF" }}
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
                  <Icon className="h-12 w-12" style={{ color: "#0967D2" }} />
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
            <div key={step} className="rounded-[28px] p-6" style={{ backgroundColor: "#EAF4FF" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold text-white" style={{ backgroundColor: "#0967D2" }}>
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
        <div className="mx-auto max-w-6xl rounded-[40px] p-10 text-white shadow-[0_30px_90px_rgba(8,18,46,0.22)] md:p-14" style={{ background: "linear-gradient(135deg, #0967D2, #064A96)" }}>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Améliorez le confort sans compliquer le quotidien.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Confort transforme le domicile en environnement plus rassurant, avec des équipements discrets et utiles dans les pièces de vie.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Solerya Confort
              </p>
              <p className="mt-2 text-4xl font-extrabold" style={{ color: "#0967D2" }}>
                59 €/mois
              </p>

              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#E36E08]"
              >
                Être rappelé
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <PhoneCall className="h-4 w-4" style={{ color: "#0967D2" }} />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
