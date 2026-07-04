import Link from "next/link";
import {
  ShieldCheck,
  Bell,
  LampDesk,
  Droplets,
  Video,
  Lightbulb,
  Camera,
  Smartphone,
  Check,
  ArrowRight,
  Home,
  HeartHandshake,
  Lock,
  PhoneCall,
} from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Confort nocturne",
    text: "Des veilleuses automatiques facilitent les déplacements la nuit.",
  },
  {
    icon: Bell,
    title: "Alertes utiles",
    text: "Les proches sont informés en cas d’événement inhabituel au domicile.",
  },
  {
    icon: Droplets,
    title: "Détection de fuites",
    text: "Un capteur prévient rapidement en cas de fuite d’eau.",
  },
  {
    icon: Video,
    title: "Visibilité du logement",
    text: "Sonnette vidéo et caméra permettent de rassurer la famille à distance.",
  },
];

const equipments = [
  {
    icon: ShieldCheck,
    title: "Tout le pack Sérénité",
    text: "Montre connectée, bouton SOS, détecteur de fumée, détecteur d’ouverture et application famille.",
  },
  {
    icon: Lightbulb,
    title: "Veilleuses automatiques",
    text: "Un éclairage doux s’active automatiquement pour sécuriser les déplacements nocturnes.",
  },
  {
    icon: Droplets,
    title: "Détecteur de fuites",
    text: "Une alerte est envoyée en cas de présence d’eau anormale.",
  },
  {
    icon: Camera,
    title: "Sonnette vidéo et caméra",
    text: "Un moyen simple de voir qui se présente au domicile et de rassurer les proches.",
  },
];

const steps = [
  "Nous complétons la sécurité essentielle du pack Sérénité.",
  "Nous ajoutons des capteurs de confort adaptés au logement.",
  "Les équipements surveillent discrètement les situations du quotidien.",
  "La famille reçoit les bonnes informations, sans intrusion.",
];

const faq = [
  {
    q: "Le pack Confort inclut-il le pack Sérénité ?",
    a: "Oui. Le pack Confort reprend les éléments du pack Sérénité et ajoute des équipements pour améliorer le confort du domicile.",
  },
  {
    q: "Les veilleuses fonctionnent-elles automatiquement ?",
    a: "Oui. Elles sont pensées pour s’activer simplement lors des déplacements, notamment la nuit.",
  },
  {
    q: "La caméra est-elle obligatoire ?",
    a: "Non. Les équipements peuvent être adaptés selon le niveau de confort souhaité et le respect de la vie privée.",
  },
  {
    q: "Peut-on évoluer ensuite vers Autonomie ?",
    a: "Oui. Le pack Confort peut évoluer vers le pack Autonomie ou Signature.",
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
              Le pack qui sécurise le domicile tout en améliorant le confort de vie : veilleuses, capteurs intelligents, détection de fuites et visibilité à distance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-full bg-[#0967D2] px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Être rappelé
              </Link>

              <Link
                href="#equipements"
                className="rounded-full border border-blue-200 px-8 py-4 text-center text-sm font-bold text-[#0967D2] transition hover:bg-blue-50"
              >
                Voir les équipements
              </Link>
            </div>

            <p className="mt-6 text-3xl font-extrabold text-[#0967D2]">
              Dès 59 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div className="rounded-[28px] bg-gradient-to-br from-blue-50 to-white p-8">
              <Home className="h-20 w-20 text-[#0967D2]" />
              <h2 className="mt-8 text-3xl font-extrabold">
                Une maison plus confortable, plus sûre et plus intelligente.
              </h2>
              <p className="mt-4 text-slate-600">
                Solerya Confort protège discrètement avec des objets simples,
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
                <Icon className="h-10 w-10 text-[#0967D2]" />
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
        className="bg-[#F7FBFF] px-6 py-20 lg:px-8"
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
                  <Icon className="h-12 w-12 text-[#0967D2]" />
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
            <div key={step} className="rounded-[28px] bg-blue-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0967D2] text-lg font-extrabold text-white">
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
        <div className="mx-auto max-w-6xl rounded-[40px] bg-gradient-to-br from-[#0967D2] to-[#064A96] p-10 text-white shadow-[0_30px_90px_rgba(9,103,210,0.28)] md:p-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Améliorez le confort sans compliquer le quotidien.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Confort apporte une première couche de sécurité simple,
                rassurante et accessible.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Pack Confort
              </p>
              <p className="mt-2 text-4xl font-extrabold text-[#0967D2]">
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
                <PhoneCall className="h-4 w-4 text-[#0967D2]" />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}