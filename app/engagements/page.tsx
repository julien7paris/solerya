import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Home,
  LockKeyhole,
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";

const engagements = [
  {
    icon: Home,
    title: "Préserver le domicile",
    text: "Solerya aide les seniors à rester chez eux plus longtemps, dans un environnement familier et rassurant.",
  },
  {
    icon: ShieldCheck,
    title: "Sécuriser sans surveiller",
    text: "Les objets connectés apportent des repères utiles sans transformer le logement en lieu de contrôle permanent.",
  },
  {
    icon: LockKeyhole,
    title: "Respecter l’intimité",
    text: "Les solutions sont pensées pour limiter l’intrusion : priorité aux capteurs discrets, sans caméra lorsque ce n’est pas nécessaire.",
  },
  {
    icon: HeartHandshake,
    title: "Rassurer les proches",
    text: "La famille reçoit des informations simples, compréhensibles et utiles au bon moment.",
  },
  {
    icon: Wrench,
    title: "Installer simplement",
    text: "Solerya accompagne le choix, l’installation et la prise en main des équipements.",
  },
  {
    icon: UserRound,
    title: "S’adapter à chaque situation",
    text: "Chaque domicile, chaque senior et chaque famille ont des besoins différents : les packs restent modulables.",
  },
];

export default function EngagementsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
            <ShieldCheck className="h-4 w-4 text-[#F58220]" />
            Nos engagements
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Une technologie utile, humaine et rassurante.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Solerya accompagne le maintien à domicile avec des objets connectés
            simples, discrets et pensés pour protéger l’autonomie des seniors
            tout en rassurant leurs proches.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engagements.map((item) => {
            const Icon = item.icon;

            return (
              <div
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
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[38px] bg-[#08122E] p-8 text-white shadow-[0_24px_80px_rgba(8,18,46,0.18)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em]">
                Notre promesse : mieux vivre chez soi, sans complexité.
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                Solerya ne remplace pas la présence humaine. Elle apporte des
                signaux utiles, des alertes simples et une meilleure visibilité
                pour agir au bon moment.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Installation claire",
                "Objets sélectionnés selon le besoin",
                "Application famille simple",
                "Accompagnement dans la durée",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#F58220]" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
          >
            Être rappelé
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}