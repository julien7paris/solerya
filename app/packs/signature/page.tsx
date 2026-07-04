import Link from "next/link";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Home,
  HeartHandshake,
  Lock,
  PhoneCall,
  Headphones,
  Wrench,
  Sparkles,
  Siren,
  BellRing,
  RadioTower,
  Droplets,
  CircleAlert,
  HousePlug,
} from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Tout le logement mieux protégé",
    text: "La couverture Solerya est renforcée dans les pièces et les zones essentielles du domicile.",
  },
  {
    icon: Siren,
    title: "Une sirène pour réagir immédiatement",
    text: "Un signal sonore puissant peut se déclencher dans le logement lorsqu’une situation importante nécessite l’attention du senior.",
  },
  {
    icon: BellRing,
    title: "Plus de moyens d’appeler à l’aide",
    text: "Un bouton SOS supplémentaire est installé dans une zone essentielle pour rester facilement accessible.",
  },
  {
    icon: Headphones,
    title: "Une assistance prioritaire",
    text: "La famille bénéficie d’un accompagnement renforcé pour l’installation, l’usage et l’évolution de la solution.",
  },
];

const equipments = [
  {
    icon: ShieldCheck,
    title: "Tout le pack Autonomie",
    text: "Signature reprend toute la protection Autonomie : sécurité du domicile, confort, présence sans caméra et repérage discret des changements importants.",
  },
  {
    icon: Siren,
    title: "Sirène intérieure connectée",
    text: "Elle complète les notifications envoyées aux proches par un signal sonore immédiat dans le logement.",
  },
  {
    icon: BellRing,
    title: "Bouton SOS supplémentaire",
    text: "Un second point d’appel est installé dans une zone essentielle, comme la chambre ou la salle de bain.",
  },
  {
    icon: RadioTower,
    title: "Couverture de présence renforcée",
    text: "Un capteur supplémentaire étend la compréhension de l’activité aux zones importantes du domicile, toujours sans caméra.",
  },
  {
    icon: Droplets,
    title: "Protection renforcée contre les fuites",
    text: "Des détecteurs supplémentaires protègent plusieurs pièces à risque, comme la cuisine et la salle de bain.",
  },
  {
    icon: Wrench,
    title: "Suivi personnalisé et assistance prioritaire",
    text: "L’installation est suivie dans la durée pour maintenir une solution fiable et l’adapter lorsque les besoins évoluent.",
  },
];

const steps = [
  {
    icon: Home,
    title: "Le logement est étudié",
    text: "Nous identifions les pièces essentielles et les zones qui méritent une protection renforcée.",
  },
  {
    icon: HousePlug,
    title: "La protection est étendue",
    text: "Toute la solution Autonomie est complétée par les équipements Signature adaptés au domicile.",
  },
  {
    icon: CircleAlert,
    title: "Le logement peut réagir",
    text: "La sirène et les boutons SOS renforcent la capacité à signaler rapidement une situation importante.",
  },
  {
    icon: Headphones,
    title: "La solution reste accompagnée",
    text: "La famille bénéficie d’un suivi personnalisé et d’une assistance prioritaire dans la durée.",
  },
];

const faq = [
  {
    q: "À qui s’adresse le pack Signature ?",
    a: "Aux familles qui souhaitent la protection Solerya la plus complète, avec une couverture renforcée du logement, davantage de moyens d’appel et une assistance prioritaire.",
  },
  {
    q: "Le pack Signature inclut-il tout le pack Autonomie ?",
    a: "Oui. Signature reprend l’ensemble du pack Autonomie et ajoute des équipements pour étendre la protection aux zones essentielles du domicile.",
  },
  {
    q: "À quoi sert la sirène intérieure ?",
    a: "Elle complète l’information envoyée à la famille par un signal sonore dans le logement. Elle peut attirer l’attention du senior lorsqu’une situation importante est détectée.",
  },
  {
    q: "Pourquoi ajouter un second bouton SOS ?",
    a: "Pour qu’un moyen d’appel reste facilement accessible dans une autre zone essentielle, par exemple la chambre ou la salle de bain.",
  },
  {
    q: "Le pack Signature utilise-t-il des caméras ?",
    a: "Non. Le cœur de la solution repose sur des capteurs discrets qui permettent de mieux comprendre l’activité du domicile sans filmer la personne.",
  },
  {
    q: "Que signifie assistance prioritaire ?",
    a: "La famille bénéficie d’un niveau de suivi renforcé pour l’installation, l’utilisation de la solution et l’évolution des besoins.",
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
              La protection Solerya la plus complète
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-7xl">
              Solerya Signature
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-9 text-slate-600">
              Toute l’intelligence du pack Autonomie, avec une protection
              renforcée dans les zones essentielles du logement et une
              assistance prioritaire.
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
                style={{
                  borderColor: "#FED7AA",
                  color: "#F25A1D",
                }}
              >
                Découvrir les équipements
              </Link>
            </div>

            <p
              className="mt-6 text-3xl font-extrabold"
              style={{ color: "#F25A1D" }}
            >
              Dès 99 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div
              className="rounded-[28px] p-8"
              style={{
                background:
                  "linear-gradient(135deg, #FFF1E6, #ffffff)",
              }}
            >
              <ShieldCheck
                className="h-20 w-20"
                style={{ color: "#F25A1D" }}
              />

              <h2 className="mt-8 text-3xl font-extrabold">
                Plus de couverture. Plus de moyens d’agir. Toujours sans caméra.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Solerya Signature étend la protection aux zones essentielles du
                domicile et ajoute des équipements capables de signaler
                immédiatement une situation importante.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-[20px] bg-white p-4 shadow-sm">
                  <Siren
                    className="h-7 w-7"
                    style={{ color: "#F25A1D" }}
                  />
                  <p className="mt-3 text-sm font-bold">
                    Signal sonore immédiat
                  </p>
                </div>

                <div className="rounded-[20px] bg-white p-4 shadow-sm">
                  <BellRing
                    className="h-7 w-7"
                    style={{ color: "#F25A1D" }}
                  />
                  <p className="mt-3 text-sm font-bold">
                    SOS plus accessible
                  </p>
                </div>

                <div className="rounded-[20px] bg-white p-4 shadow-sm">
                  <RadioTower
                    className="h-7 w-7"
                    style={{ color: "#F25A1D" }}
                  />
                  <p className="mt-3 text-sm font-bold">
                    Couverture étendue
                  </p>
                </div>

                <div className="rounded-[20px] bg-white p-4 shadow-sm">
                  <Droplets
                    className="h-7 w-7"
                    style={{ color: "#F25A1D" }}
                  />
                  <p className="mt-3 text-sm font-bold">
                    Pièces à risque protégées
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p
            className="text-sm font-bold uppercase tracking-[0.18em]"
            style={{ color: "#F25A1D" }}
          >
            Le niveau Signature
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
            Quand toute la maison mérite plus d’attention
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Signature ne se contente pas d’ajouter des équipements. Le pack
            étend la protection aux zones essentielles et renforce la capacité
            du logement à réagir lorsqu’une situation importante survient.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(8,18,46,0.08)] transition hover:-translate-y-1"
              >
                <Icon
                  className="h-10 w-10"
                  style={{ color: "#F25A1D" }}
                />

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

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
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: "#F25A1D" }}
            >
              Les équipements Signature
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Une protection renforcée, pièce par pièce
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              L’installation est adaptée au logement pour renforcer les zones
              qui comptent le plus, tout en conservant une technologie discrète
              et sans caméra.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {equipments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[32px] bg-white p-8 shadow-[0_18px_50px_rgba(8,18,46,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(8,18,46,0.10)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
                    <Icon
                      className="h-7 w-7"
                      style={{ color: "#F25A1D" }}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p
            className="text-sm font-bold uppercase tracking-[0.18em]"
            style={{ color: "#F25A1D" }}
          >
            Simple au quotidien
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
            Comment ça fonctionne
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-[28px] p-6"
                style={{ backgroundColor: "#FFF1E6" }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "#F25A1D" }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <p
                  className="mt-5 text-sm font-bold"
                  style={{ color: "#F25A1D" }}
                >
                  Étape {index + 1}
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#08122E] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <HeartHandshake className="h-12 w-12 text-[#F58220]" />

            <h2 className="mt-6 text-4xl font-extrabold">
              Pourquoi choisir Signature ?
            </h2>
          </div>

          <div className="space-y-5 md:col-span-2">
            {[
              "Toute l’intelligence et les équipements du pack Autonomie.",
              "Une couverture renforcée des zones essentielles du domicile.",
              "Des moyens d’action supplémentaires avec la sirène et un second bouton SOS.",
              "Une solution toujours discrète, sans caméra dans le cœur de l’offre.",
              "Un suivi personnalisé et une assistance prioritaire dans la durée.",
            ].map((item) => (
              <div key={item} className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#F58220]" />

                <p className="text-lg leading-8 text-white/85">
                  {item}
                </p>
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

              <p className="mt-4 leading-7 text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="cta" className="px-6 pb-24 lg:px-8">
        <div
          className="mx-auto max-w-6xl rounded-[40px] p-10 text-white shadow-[0_30px_90px_rgba(8,18,46,0.22)] md:p-14"
          style={{
            background:
              "linear-gradient(135deg, #F25A1D, #B53D0D)",
          }}
        >
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />

              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Étendez la protection à toute la maison.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Signature associe toute l’intelligence du pack
                Autonomie à une couverture renforcée du logement, davantage de
                moyens d’action et une assistance prioritaire.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Solerya Signature
              </p>

              <p
                className="mt-2 text-4xl font-extrabold"
                style={{ color: "#F25A1D" }}
              >
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
                <PhoneCall
                  className="h-4 w-4"
                  style={{ color: "#F25A1D" }}
                />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}