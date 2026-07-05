import Link from "next/link";
import {
  ArrowRight,
  Bath,
  BedDouble,
  CheckCircle2,
  Flame,
  HeartHandshake,
  Home,
  LampDesk,
  ShieldAlert,
  ShieldCheck,
  Sofa,
} from "lucide-react";

const conseils = [
  {
    icon: Home,
    title: "Commencer par les risques essentiels",
    text: "Bouton SOS, détecteur d’ouverture et application famille permettent de poser une première base rassurante.",
    pack: "Solerya Sérénité",
  },
  {
    icon: Bath,
    title: "Sécuriser les pièces sensibles",
    text: "Salle de bain et cuisine sont les pièces où les risques de chute, fuite ou incident domestique sont les plus importants.",
    pack: "Solerya Confort",
  },
  {
    icon: BedDouble,
    title: "Observer les levers nocturnes",
    text: "Les capteurs de présence et chemins lumineux aident à sécuriser les déplacements sans caméra.",
    pack: "Solerya Autonomie",
  },
  {
    icon: Flame,
    title: "Anticiper fumée, fuite et chaleur",
    text: "Les détecteurs permettent de repérer plus tôt les incidents du logement et d’agir avant que la situation ne s’aggrave.",
    pack: "Solerya Confort",
  },
  {
    icon: Sofa,
    title: "Garder un lien discret avec le quotidien",
    text: "Quelques signaux simples suffisent souvent à rassurer les proches sans créer de surveillance intrusive.",
    pack: "Solerya Autonomie",
  },
  {
    icon: LampDesk,
    title: "Renforcer progressivement",
    text: "Il vaut mieux commencer simple, puis ajouter les objets selon l’évolution du besoin et du niveau d’autonomie.",
    pack: "Solerya Signature",
  },
];

export default function ConseilsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
            <HeartHandshake className="h-4 w-4 text-[#F58220]" />
            Conseils
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Bien choisir ses objets connectés pour le maintien à domicile.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            L’objectif n’est pas d’équiper tout le logement d’un coup, mais de
            choisir les bons objets selon les besoins réels du senior et de sa
            famille.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conseils.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] bg-white p-7 shadow-[0_20px_60px_rgba(8,18,46,0.08)] transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2E8] text-[#F58220]">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-xl font-extrabold">{item.title}</h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <div className="mt-5 inline-flex rounded-full bg-[#FAFBFD] px-4 py-2 text-xs font-extrabold text-slate-600">
                  {item.pack}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[36px] bg-[#FFF2E8] p-8">
            <ShieldAlert className="h-10 w-10 text-[#F58220]" />

            <h2 className="mt-5 text-2xl font-extrabold">
              Le bon conseil : éviter le tout-technologique.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              Une solution utile doit rester simple. Les objets connectés doivent
              aider la famille à comprendre une situation, sans remplacer la
              relation humaine, les visites ou l’accompagnement quotidien.
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(8,18,46,0.08)]">
            <h2 className="text-2xl font-extrabold">
              Les 4 questions à se poser
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "La personne vit-elle seule au domicile ?",
                "Y a-t-il des levers nocturnes ou des risques de chute ?",
                "La famille souhaite-t-elle recevoir des signaux simples ?",
                "Le logement présente-t-il des risques de fuite, fumée ou chaleur ?",
              ].map((question) => (
                <div key={question} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F58220]" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/schema"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
            >
              Voir le schéma Solerya
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-extrabold text-[#08122E] shadow-sm transition hover:-translate-y-0.5"
          >
            Demander un conseil personnalisé
            <ShieldCheck className="h-5 w-5 text-[#F58220]" />
          </Link>
        </div>
      </section>
    </main>
  );
}