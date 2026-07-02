import ContactBlock from "@/components/ContactBlock";

export default function AProposPage() {
  const values = [
    {
      title: "Clarté",
      text: "Rendre lisibles des sujets complexes, hiérarchiser les décisions et réduire les zones d'incertitude.",
    },
    {
      title: "Exigence",
      text: "Une approche rigoureuse, structurée et haut de gamme.",
    },
    {
      title: "Indépendance",
      text: "Une logique d’analyse avant toute recommandation produit.",
    },
  ];

  const audience = [
    "Cadres et profils internationaux",
    "Entrepreneurs et indépendants",
    "Familles en expatriation",
    "Profils avec flux internationaux",
    "Investisseurs intéressés par la DeFi",
  ];

  const method = [
    {
      step: "01",
      title: "Comprendre",
      text: "Analyser votre situation et vos enjeux.",
    },
    {
      step: "02",
      title: "Structurer",
      text: "Construire une vision cohérente et claire.",
    },
    {
      step: "03",
      title: "Coordonner",
      text: "Mettre en place les bonnes actions avec les bons experts.",
    },
  ];

  const highlights = [
    "Pilotage de la performance",
    "Lecture stratégique du risque",
    "Data & dashboards de décision",
    "Environnements multi-pays",
    "Structuration & coordination",
    "Approche premium et pédagogique",
  ];

  const journey = [
    {
      period: "2019-2026",
      title: "Responsable Performance Management",
      subtitle: "Coface",
      text: "Pilotage de la performance, data quality, reporting, incentives et accompagnement des équipes dans des environnements internationaux complexes.",
      color: "bg-[#0F5DB8]",
      badgeClass: "bg-[#EAF3FF] text-[#0F5DB8]",
    },
    {
      period: "Expérience précédente",
      title: "Management commercial & account management",
      subtitle: "Coface",
      text: "Suivi de portefeuille, fidélisation, analyse de résultats, pilotage d’indicateurs et accompagnement de la transformation commerciale.",
      color: "bg-[#0F5DB8]",
      badgeClass: "bg-[#EAF3FF] text-[#0F5DB8]",
    },
    {
      period: "Fondations",
      title: "Management, développement commercial & conduite du changement",
      subtitle: "Malakoff Humanis",
      text: "Animation d’équipes, croissance, structuration d’activité, coordination transverse et culture forte du résultat.",
      color: "bg-[#5FAE7B]",
      badgeClass: "bg-[#EAF8EF] text-[#3E8D5C]",
    },
  ];

  const expertiseCards = [
    "Pilotage de la performance",
    "Lecture stratégique du risque",
    "Data & dashboards de décision",
    "Environnements multi-pays",
    "Structuration & coordination",
    "Approche premium et pédagogique",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(90deg,#04143D_0%,#0F5DB8_55%,#62B67D_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
            <div className="relative px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.10),transparent_22%),radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.07),transparent_30%)]" />

              <div className="relative grid gap-8 lg:grid-cols-[360px_1fr] xl:grid-cols-[420px_1fr]">
                <div className="flex items-end">
                  <div className="w-full overflow-hidden rounded-[28px] bg-[#18345E]/55 shadow-[0_20px_60px_rgba(2,12,27,0.22)] ring-1 ring-white/10">
                    <div className="aspect-[4/4.7] w-full">
                      <img
                        src="/images/julien-lallemand.jpg"
                        alt="Portrait de Julien LALLEMAND"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#18345E]/55 px-4 py-2 text-sm font-semibold tracking-[0.08em] text-[#FFD84D] ring-1 ring-white/10 backdrop-blur">
                      <span className="text-base">●</span>
                      FONDATEUR de PROXFI
                    </div>

                    <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#D9E8FF] sm:text-5xl lg:text-6xl">
                      Julien LALLEMAND
                    </h1>

                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#1E6ED3] px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-white/10">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-xs">
                          ✓
                        </span>
                        Conseil stratégique patrimonial
                      </span>
                    </div>

                    <p className="mt-6 text-2xl font-medium tracking-tight text-white">
                      Expatriation • Fiscalité • Allocation • Transmission • Crypto
                    </p>

                    <p className="mt-3 text-lg text-[#DCE7F7]">
                      Paris • Accompagnement international
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      {["International", "Performance & Data", "Risk & Business", "Patrimoine Expat"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/20 bg-white/92 px-5 py-3 text-sm font-medium text-[#17345C] shadow-[0_6px_18px_rgba(8,18,46,0.10)]"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:max-w-[520px]">
                    <div className="rounded-[26px] border border-white/18 bg-white/96 p-6 shadow-[0_12px_35px_rgba(8,18,46,0.12)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Abonnés</p>
                      <p className="mt-3 text-3xl font-semibold text-[#08122E]">1 250</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Présence et audience professionnelles
                      </p>
                    </div>

                    <div className="rounded-[26px] border border-white/18 bg-white/96 p-6 shadow-[0_12px_35px_rgba(8,18,46,0.12)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Relations</p>
                      <p className="mt-3 text-3xl font-semibold text-[#08122E]">500+</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Écosystème business et réseau
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {["International", "Performance & Data", "Risk & Business", "Patrimoine Expat"].map(
              (item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-[#17345C] shadow-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0F5DB8]" />
                  {item}
                </div>
              )
            )}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-[#0F5DB8]">À propos</p>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0F5DB8]" />

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                Une lecture stratégique de la performance, du risque et des trajectoires internationales.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Professionnel du pilotage de la performance, Julien LALLEMAND évolue
                  dans un environnement international exigeant, à l&apos;interface de la data,
                  du business, du risque et de la décision.
                </p>

                <p>
                  Son parcours chez Coface, acteur de référence de l&apos;assurance-crédit,
                  lui a permis de développer une approche structurée des flux, des arbitrages,
                  des indicateurs et de la coordination entre enjeux commerciaux, opérationnels
                  et stratégiques.
                </p>

                <p>
                  Cette culture de la rigueur, de la lisibilité et de la performance nourrit
                  aujourd&apos;hui le positionnement de Proxfi : proposer une approche plus claire,
                  plus exigeante et plus moderne de la gestion patrimoniale, en particulier
                  pour les profils expatriés, internationaux, entrepreneurs ou exposés à des
                  problématiques transfrontalières.
                </p>

                <p>
                  L&apos;objectif est d&apos;apporter de la hauteur de vue : mieux comprendre les choix
                  de pays, les calendriers, les arbitrages patrimoniaux, les flux, la structuration,
                  la transmission et les nouveaux usages financiers.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <h3 className="text-2xl font-semibold tracking-tight text-[#08122E]">
                  Expertises clés
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {expertiseCards.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-[#F8FBFF] px-4 py-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF3FF] text-[#0F5DB8]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#0F5DB8]" />
                      </div>
                      <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-[#08122E]">Parcours</p>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0F5DB8]" />

              <div className="mt-8 space-y-8">
                {journey.map((item, index) => (
                  <div key={`${item.period}-${item.title}`} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`mt-1 h-4 w-4 rounded-full ${item.color}`} />
                      {index < journey.length - 1 && (
                        <div className="mt-2 h-full min-h-[120px] w-px bg-slate-200" />
                      )}
                    </div>

                    <div className="pb-2">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.badgeClass}`}
                      >
                        {item.period}
                      </span>

                      <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#08122E]">
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 text-lg font-semibold ${
                          item.subtitle === "Malakoff Humanis"
                            ? "text-[#3E8D5C]"
                            : "text-[#0F5DB8]"
                        }`}
                      >
                        {item.subtitle}
                      </p>

                      <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#EEF3FA] shadow-inner">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                  <img
                    src="/images/logo-proxfi.png"
                    alt="Logo Proxfi"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#08122E]">
                  Cadre d&apos;intervention
                </h2>
                <p className="mt-3 max-w-5xl text-base leading-8 text-slate-600">
                  Les contenus et échanges proposés sur le site relèvent d&apos;une démarche de
                  conseil stratégique, pédagogique et de structuration. Les actes réglementés,
                  recommandations personnalisées d&apos;investissement, consultations juridiques,
                  actes fiscaux ou prestations réservées à des professions encadrées doivent
                  être réalisés dans le cadre des statuts, agréments et partenariats adaptés.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactBlock />
      </main>
    </div>
  );
}