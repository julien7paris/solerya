import Link from "next/link";
import {
  ShieldCheck,
  Bell,
  Flame,
  DoorOpen,
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
    icon: Bell,
    title: "Demander de l’aide facilement",
    text: "Un bouton SOS toujours à portée de main pour appeler rapidement en cas de besoin.",
  },
  {
    icon: Flame,
    title: "Maison attentive en cas de fumée",
    text: "Le domicile veille sur les situations incendie importantes, sans complexité pour le senior.",
  },
  {
    icon: DoorOpen,
    title: "Porte d’entrée sous surveillance",
    text: "Les proches gardent un repère rassurant sur les entrées et sorties du logement.",
  },
  {
    icon: Smartphone,
    title: "Famille rassurée à distance",
    text: "L’application famille permet de garder le lien et de recevoir les informations vraiment utiles.",
  },
];

const equipments = [
  {
    icon: Bell,
    title: "Bouton SOS à portée de main",
    text: "Un moyen simple et immédiat de demander de l’aide depuis le domicile.",
  },
  {
    icon: Flame,
    title: "Détecteur de fumée connecté",
    text: "Une protection essentielle pour signaler rapidement une situation incendie.",
  },
  {
    icon: DoorOpen,
    title: "Surveillance de la porte d’entrée",
    text: "Un repère discret pour mieux comprendre les ouvertures importantes du logement.",
  },
  {
    icon: Smartphone,
    title: "Application famille incluse",
    text: "Un espace simple pour garder le lien et suivre les informations essentielles.",
  },
];

const steps = [
  "Nous installons les équipements essentiels au domicile.",
  "Votre proche continue à vivre normalement, sans geste technique compliqué.",
  "La maison veille sur les situations importantes du quotidien.",
  "Les proches sont informés uniquement quand cela compte vraiment.",
];

const faq = [
  {
    q: "Le pack Sérénité est-il compliqué à utiliser ?",
    a: "Non. Il est conçu pour rester simple, discret et utilisable sans compétence technique.",
  },
  {
    q: "Y a-t-il une caméra dans ce pack ?",
    a: "Non. Le pack Sérénité privilégie des équipements non intrusifs.",
  },
  {
    q: "Les proches reçoivent-ils trop d’informations ?",
    a: "Non. L’objectif est de transmettre uniquement les informations utiles, pas de surveiller en permanence.",
  },
  {
    q: "Peut-on évoluer ensuite vers Confort ou Autonomie ?",
    a: "Oui. Les packs sont progressifs et peuvent évoluer selon les besoins.",
  },
];


export default function SerenitePage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#E9FFF3_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#F7FFF9)]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              Pack sécurité essentielle
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-7xl">
              Solerya Sérénité
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-9 text-slate-600">
              L’essentiel pour vivre chez soi l’esprit tranquille et rassurer ses proches, avec des équipements simples, discrets et utiles au quotidien.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="rounded-full px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                style={{ backgroundColor: "#0B8A4A" }}
              >
                Être rappelé
              </Link>

              <Link
                href="#equipements"
                className="rounded-full border px-8 py-4 text-center text-sm font-bold transition hover:bg-white"
                style={{ borderColor: "#BBF7D0", color: "#0B8A4A" }}
              >
                Voir ce qui est inclus
              </Link>
            </div>

            <p className="mt-6 text-3xl font-extrabold" style={{ color: "#0B8A4A" }}>
              Dès 39 €/mois
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)]">
            <div className="rounded-[28px] p-8" style={{ background: "linear-gradient(135deg, #E9FFF3, #ffffff)" }}>
              <Home className="h-20 w-20" style={{ color: "#0B8A4A" }} />
              <h2 className="mt-8 text-3xl font-extrabold">
                Un domicile plus sûr, sans changer les habitudes.
              </h2>
              <p className="mt-4 text-slate-600">
                Solerya Sérénité protège les situations essentielles : demander de l’aide, veiller sur la fumée, suivre l’entrée et garder un signe rassurant d’activité.
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
                <Icon className="h-10 w-10" style={{ color: "#0B8A4A" }} />
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
        style={{ backgroundColor: "#F7FFF9" }}
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
                  <Icon className="h-12 w-12" style={{ color: "#0B8A4A" }} />
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
            <div key={step} className="rounded-[28px] p-6" style={{ backgroundColor: "#E9FFF3" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold text-white" style={{ backgroundColor: "#0B8A4A" }}>
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
        <div className="mx-auto max-w-6xl rounded-[40px] p-10 text-white shadow-[0_30px_90px_rgba(8,18,46,0.22)] md:p-14" style={{ background: "linear-gradient(135deg, #0B8A4A, #075A32)" }}>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <Lock className="h-12 w-12 text-white" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                Offrez une première protection simple et rassurante.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Solerya Sérénité aide votre proche à rester chez lui avec plus de confiance, tout en gardant la famille informée quand cela compte vraiment.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#08122E]">
              <p className="text-sm font-semibold text-slate-500">
                Solerya Sérénité
              </p>
              <p className="mt-2 text-4xl font-extrabold" style={{ color: "#0B8A4A" }}>
                39 €/mois
              </p>

              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#E36E08]"
              >
                Être rappelé
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <PhoneCall className="h-4 w-4" style={{ color: "#0B8A4A" }} />
                Conseil personnalisé inclus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
