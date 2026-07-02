import Link from "next/link";
import ContactBlock from "@/components/ContactBlock";

export default function ExpatriationPage() {
  const points = [
    "Résidence fiscale et calendrier de départ",
    "Structuration des comptes et flux internationaux",
    "Organisation patrimoniale avant expatriation",
    "Lecture des risques fiscaux et réglementaires",
    "Coordination avec fiscalistes, avocats et experts",
    "Préparation du retour en France",
  ];

  const scenarios = [
    {
      title: "Départ à Dubaï",
      text: "Comprendre les impacts sur la résidence fiscale, les sociétés, les comptes étrangers et les flux patrimoniaux.",
    },
    {
      title: "Installation au Portugal",
      text: "Analyser les conventions fiscales, la temporalité du départ et les arbitrages patrimoniaux.",
    },
    {
      title: "Famille internationale",
      text: "Structurer les actifs, les comptes, les véhicules d’investissement et les enjeux successoraux.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.10),transparent_26%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#5FAE7B]" />
              Mobilité internationale & stratégie patrimoniale
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#08122E] sm:text-6xl">
              Structurer une expatriation sans naviguer à l&apos;aveugle.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Une expatriation réussie ne se résume pas à un changement de pays.
              Résidence fiscale, calendrier, actifs, sociétés, comptes,
              crypto-actifs, famille, transmission : chaque décision crée des
              conséquences.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Notre rôle : vous aider à voir plus clair, identifier les zones
              de risque et construire une trajectoire cohérente avant de passer
              à l’action.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#0F5DB8] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0C4E9B]"
              >
                Réserver un échange
              </a>

              <Link
                href="/simulateur"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-[#5FAE7B]/40 hover:bg-[#F8FBFF]"
              >
                Tester le simulateur
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-full overflow-hidden rounded-[36px] border border-slate-200 bg-[#08122E] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0F5DB8]/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#5FAE7B]/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-medium text-slate-300">
                  Vision stratégique
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Penser l&apos;avant, le pendant et l&apos;après.
                </h2>

                <div className="mt-8 space-y-4">
                  {points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#F4D000]" />

                      <p className="text-sm leading-6 text-slate-200">
                        {point}
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
            Cas fréquemment rencontrés
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
            Chaque situation internationale possède ses propres angles morts.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {scenarios.map((scenario) => (
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
                Analyse stratégique →
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
                Positionnement
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                Une approche claire, structurée et haut de gamme.
              </h2>
            </div>

            <div className="grid gap-5">
              {[
                {
                  title: "Clarté",
                  text: "Transformer des sujets complexes en décisions compréhensibles et hiérarchisées.",
                },
                {
                  title: "Coordination",
                  text: "Travailler avec les bons interlocuteurs lorsque le sujet nécessite une expertise réglementée.",
                },
                {
                  title: "Vision globale",
                  text: "Relier fiscalité, patrimoine, mobilité internationale et nouveaux actifs dans une seule lecture cohérente.",
                },
              ].map((item) => (
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

      <ContactBlock />
    </main>
  );
}