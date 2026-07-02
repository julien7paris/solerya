import Link from "next/link";
import ContactBlock from "@/components/ContactBlock";

export default function TransmissionEntreprisePage() {
  const enjeux = [
    "Préparer une cession sans improvisation",
    "Structurer la transmission familiale",
    "Articuler patrimoine privé et professionnel",
    "Anticiper les impacts fiscaux et successoraux",
    "Organiser la liquidité post-cession",
    "Coordonner les différents experts",
  ];

  const situations = [
    {
      title: "Chef d’entreprise en croissance",
      text: "Préparer les prochaines étapes avant qu’une opération stratégique ne devienne urgente.",
    },
    {
      title: "Projet de cession",
      text: "Clarifier les scénarios possibles et anticiper les impacts patrimoniaux d’une vente.",
    },
    {
      title: "Transmission familiale",
      text: "Structurer la continuité du patrimoine professionnel et préserver l’équilibre familial.",
    },
  ];

  const pillars = [
    {
      title: "Vision d’ensemble",
      text: "Relier société, patrimoine personnel, fiscalité, liquidités et objectifs de vie dans une seule stratégie cohérente.",
    },
    {
      title: "Coordination",
      text: "Travailler avec avocats, experts-comptables, fiscalistes et notaires lorsque le sujet nécessite une expertise réglementée.",
    },
    {
      title: "Projection",
      text: "Penser l’après-transmission : revenus futurs, réallocation du capital, gouvernance et organisation patrimoniale.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.10),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.08),transparent_26%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F4D000]" />
              Patrimoine professionnel & transmission
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#08122E] sm:text-6xl">
              Préparer une transmission sans subir les décisions dans l’urgence.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Une entreprise ne représente pas seulement une valeur financière.
              Elle concentre souvent des années de travail, des enjeux
              familiaux, une organisation patrimoniale et parfois l’essentiel du
              capital du dirigeant.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Cession, transmission, holding, réallocation du capital,
              expatriation après vente, organisation successorale : les choix
              réalisés avant une opération changent profondément les conséquences
              après celle-ci.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#0F5DB8] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0C4E9B]"
              >
                Réserver un échange stratégique
              </a>

              <Link
                href="/simulateur"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-[#5FAE7B]/40 hover:bg-[#F8FBFF]"
              >
                Tester le simulateur
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {[
                ["Structuration", "avant opération"],
                ["Vision", "patrimoniale globale"],
                ["Transmission", "organisée et anticipée"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-lg font-semibold tracking-tight text-[#08122E]">
                    {value}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-full overflow-hidden rounded-[36px] border border-slate-200 bg-[#08122E] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0F5DB8]/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#5FAE7B]/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-medium text-slate-300">
                  Points de vigilance
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Penser plus loin que la simple vente.
                </h2>

                <div className="mt-8 space-y-4">
                  {enjeux.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#F4D000]" />

                      <p className="text-sm leading-6 text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#0F5DB8]">
            Situations fréquemment rencontrées
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
            Chaque dirigeant possède une configuration patrimoniale unique.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {situations.map((scenario) => (
            <div
              key={scenario.title}
              className="group rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#0F5DB8_0%,#5FAE7B_55%,#F4D000_100%)]" />

              <h3 className="text-2xl font-semibold tracking-tight text-[#08122E]">
                {scenario.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {scenario.text}
              </p>

              <div className="mt-6 text-sm font-medium text-[#0F5DB8]">
                Explorer →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#FCFDFE]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium text-[#0F5DB8]">
                Philosophie
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                Organiser la suite avant qu’elle ne s’impose à vous.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Les meilleures transmissions se préparent souvent plusieurs
                années avant l’opération elle-même. Le vrai enjeu n’est pas
                uniquement fiscal : il concerne aussi la lisibilité, la
                gouvernance, la sécurité patrimoniale et les objectifs de vie du
                dirigeant après la transmission.
              </p>
            </div>

            <div className="grid gap-5">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#08122E]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-[#08122E] p-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-300">
              Transmission & vision long terme
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Transformer une opération patrimoniale en stratégie durable.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Une cession ou une transmission réussie ne s’évalue pas seulement
              au moment de la signature. Elle se mesure aussi à la qualité de la
              structuration mise en place après l’opération : allocation du
              capital, protection familiale, mobilité internationale et vision
              long terme.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#08122E] transition hover:bg-slate-100"
              >
                Réserver un échange
              </a>

              <Link
                href="/services/allocation-actifs"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/5"
              >
                Voir l’approche allocation d’actifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}