import ContactBlock from "@/components/ContactBlock";

export default function AProposPage() {
  const values = [
    {
      title: "Sécurité",
      text: "Protéger le quotidien des seniors avec des objets connectés utiles, discrets et rassurants.",
    },
    {
      title: "Simplicité",
      text: "Rendre la maison connectée compréhensible pour les familles, sans complexité technique.",
    },
    {
      title: "Confiance",
      text: "Créer un lien rassurant entre le senior, ses proches et son environnement de vie.",
    },
  ];

  const audience = [
    "Seniors vivant à domicile",
    "Familles inquiètes pour un proche",
    "Aidants familiaux",
    "Personnes en perte d’autonomie légère",
    "Professionnels du maintien à domicile",
  ];

  const method = [
    {
      step: "01",
      title: "Comprendre",
      text: "Identifier les besoins du senior, du logement et de la famille.",
    },
    {
      step: "02",
      title: "Installer",
      text: "Déployer les objets connectés utiles, sans transformer le domicile en lieu médicalisé.",
    },
    {
      step: "03",
      title: "Rassurer",
      text: "Centraliser les alertes et informations importantes dans une application famille simple.",
    },
  ];

  const highlights = [
    "Maintien à domicile",
    "Objets connectés seniors",
    "Détection des situations à risque",
    "Application famille",
    "Installation simple",
    "Accompagnement humain",
  ];

  const journey = [
    {
      period: "Vision",
      title: "Permettre aux seniors de rester chez eux plus longtemps",
      subtitle: "Maison connectée utile",
      text: "Solerya est née d’une conviction simple : la technologie doit aider les personnes âgées à conserver leur autonomie, sans complexifier leur quotidien.",
      color: "bg-[#0B8A4A]",
      badgeClass: "bg-[#EAF8F0] text-[#0B8A4A]",
    },
    {
      period: "Approche",
      title: "Des objets connectés choisis pour leur utilité réelle",
      subtitle: "Sécurité, confort et autonomie",
      text: "Bouton SOS, détecteurs de mouvement, détecteur de porte, fumée, fuite, température ou chemins lumineux : chaque équipement répond à un usage concret.",
      color: "bg-[#0967D2]",
      badgeClass: "bg-[#EAF4FF] text-[#0967D2]",
    },
    {
      period: "Service",
      title: "Une application famille pour rassurer les proches",
      subtitle: "Sans surveillance intrusive",
      text: "Solerya ne cherche pas à surveiller le senior. L’objectif est de transmettre les bonnes informations, au bon moment, pour rassurer les proches.",
      color: "bg-[#F58220]",
      badgeClass: "bg-[#FFF1E6] text-[#F58220]",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(90deg,#08122E_0%,#0B8A4A_55%,#F58220_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
            <div className="relative px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_100%_55%,rgba(255,255,255,0.09),transparent_32%)]" />

              <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-[0.08em] text-white ring-1 ring-white/20 backdrop-blur">
                    <span className="text-[#F58220]">●</span>
                    MAISON CONNECTÉE POUR SENIORS
                  </div>

                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Solerya aide les seniors à rester chez eux plus longtemps.
                  </h1>

                  <p className="mt-6 max-w-3xl text-xl leading-9 text-[#EAF8F0]">
                    Une solution simple, rassurante et connectée pour sécuriser
                    le domicile, accompagner l’autonomie et informer les proches
                    sans transformer la maison en lieu de surveillance.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {["Sécurité", "Autonomie", "Famille", "Installation simple"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/20 bg-white/95 px-5 py-3 text-sm font-semibold text-[#0B8A4A] shadow-[0_6px_18px_rgba(8,18,46,0.10)]"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-[32px] bg-white/95 p-6 shadow-[0_20px_60px_rgba(2,12,27,0.18)]">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] bg-[#EAF8F0] p-6">
                      <p className="text-sm font-semibold text-slate-500">
                        Objectif
                      </p>
                      <p className="mt-3 text-3xl font-extrabold text-[#0B8A4A]">
                        Rassurer
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Les familles avec des informations utiles.
                      </p>
                    </div>

                    <div className="rounded-[24px] bg-[#FFF1E6] p-6">
                      <p className="text-sm font-semibold text-slate-500">
                        Usage
                      </p>
                      <p className="mt-3 text-3xl font-extrabold text-[#F58220]">
                        Prévenir
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Les situations à risque au domicile.
                      </p>
                    </div>

                    <div className="rounded-[24px] bg-[#F8FAFC] p-6 sm:col-span-2">
                      <p className="text-sm font-semibold text-slate-500">
                        Promesse Solerya
                      </p>
                      <p className="mt-3 text-2xl font-extrabold text-[#08122E]">
                        Une maison plus sûre, sans perdre son indépendance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-[#12223B] shadow-sm"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#0B8A4A]" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-[#0B8A4A]">À propos</p>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0B8A4A]" />

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
                Une solution connectée pensée pour le maintien à domicile.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Solerya accompagne les seniors et leurs familles avec une
                  maison connectée simple, utile et rassurante.
                </p>

                <p>
                  L’objectif n’est pas de multiplier les gadgets, mais de
                  sélectionner les bons équipements : bouton SOS, détecteurs,
                  capteurs de mouvement, fumée, fuite, ouverture de porte ou
                  chemins lumineux.
                </p>

                <p>
                  Ces objets permettent d’apporter des informations concrètes aux
                  proches : une alerte en cas de situation inhabituelle, un signal
                  de sécurité, ou une meilleure compréhension du quotidien sans
                  surveillance intrusive.
                </p>

                <p>
                  Solerya veut rendre la technologie accessible aux familles :
                  une installation accompagnée, une application claire et des
                  packs adaptés au niveau de besoin.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <h3 className="text-2xl font-semibold tracking-tight text-[#08122E]">
                  Nos valeurs
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {values.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-slate-200 bg-[#F8FBFF] p-5"
                    >
                      <h4 className="text-lg font-extrabold text-[#0B8A4A]">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-[#08122E]">Notre approche</p>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#F58220]" />

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

                      <p className="mt-2 text-lg font-semibold text-[#0B8A4A]">
                        {item.subtitle}
                      </p>

                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-[#0B8A4A]">
                Pour qui ?
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#08122E]">
                Une solution pensée pour les familles.
              </h2>

              <div className="mt-6 grid gap-3">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-[#F58220]">
                Méthode Solerya
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#08122E]">
                Comprendre, installer, rassurer.
              </h2>

              <div className="mt-7 space-y-5">
                {method.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-sm font-extrabold text-[#F58220]">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[#08122E]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
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
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#EAF8F0] shadow-inner">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                  <img
                    src="/logo-solerya-transparent.png"
                    alt="Logo Solerya"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#08122E]">
                  Notre cadre d’intervention
                </h2>

                <p className="mt-3 max-w-5xl text-base leading-8 text-slate-600">
                  Solerya propose une solution d’aide au maintien à domicile par
                  les objets connectés. Elle ne remplace ni les proches, ni les
                  professionnels de santé, ni les services d’urgence. Elle apporte
                  une couche complémentaire de sécurité, d’information et de
                  réassurance pour mieux accompagner le quotidien.
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