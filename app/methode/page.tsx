import ContactBlock from "@/components/ContactBlock";

export default function MethodePage() {
  const steps = [
    {
      step: "01",
      title: "Cadrage",
      intro:
        "Comprendre votre situation, vos contraintes, vos objectifs et les zones de risque à arbitrer.",
      details: [
        "Analyse de votre situation personnelle, familiale, patrimoniale et internationale",
        "Clarification des objectifs à court, moyen et long terme",
        "Identification des contraintes de calendrier, de résidence fiscale, de mobilité et de structuration",
        "Repérage des angles morts avant toute prise de décision",
      ],
    },
    {
      step: "02",
      title: "Scénarios",
      intro:
        "Comparer plusieurs options d'expatriation, de structuration et de gestion des flux internationaux.",
      details: [
        "Mise en perspective de plusieurs trajectoires possibles",
        "Comparaison des avantages, limites, risques et points d'attention",
        "Lecture structurée des impacts patrimoniaux, fiscaux et organisationnels",
        "Hiérarchisation des options selon votre profil et votre niveau de complexité",
      ],
    },
    {
      step: "03",
      title: "Mise en action",
      intro:
        "Formaliser une feuille de route et coordonner les interlocuteurs nécessaires à l'exécution.",
      details: [
        "Définition d'un plan d'action concret et séquencé",
        "Priorisation des étapes à lancer immédiatement",
        "Coordination avec les bons interlocuteurs lorsque nécessaire",
        "Transformation d'une situation complexe en feuille de route claire",
      ],
    },
  ];

  const principles = [
    {
      title: "Clarté avant sophistication",
      text: "Nous privilégions une lecture simple, structurée et intelligible des enjeux avant toute complexification inutile.",
    },
    {
      title: "Décision avant exécution",
      text: "L'objectif premier est de vous aider à arbitrer les bonnes options, au bon moment, avec un niveau de lisibilité élevé.",
    },
    {
      title: "Coordination plutôt que dispersion",
      text: "Lorsque plusieurs sujets se croisent, la méthode sert à remettre de l'ordre, de la cohérence et une logique de séquençage.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F4D000]" />
                Méthode
              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#08122E] sm:text-6xl">
                Une méthode conçue pour transformer la complexité en décisions lisibles.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Notre approche repose sur trois temps : comprendre, comparer,
                puis structurer l'action. L'objectif est de vous permettre
                d'avancer avec clarté, cohérence et maîtrise.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#5FAE7B]/30 hover:shadow-xl"
              >
                <div className="text-sm font-semibold text-[#0F5DB8]">
                  {item.step}
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#08122E]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.intro}
                </p>

                <div className="mt-6 space-y-4">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F5DB8]" />
                      <p className="text-sm leading-7 text-slate-700">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#FCFDFE]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-medium text-[#0F5DB8]">
                  Philosophie
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                  Une approche premium, structurée et orientée décision.
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Nous intervenons sur des sujets complexes mêlant mobilité,
                  fiscalité, patrimoine et structuration internationale.
                  La méthode sert à remettre de l'ordre et à construire une
                  feuille de route claire.
                </p>
              </div>

              <div className="grid gap-5">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#08122E]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
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
    </div>
  );
}