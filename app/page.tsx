import Link from "next/link";
import ContactBlock from "@/components/ContactBlock";

export default function ExpatDeFiLandingPage() {
  const services = [
    {
      title: "Stratégie d'Expatriation & Cadre Fiscal International",
      description:
        "Optimisation de la résidence fiscale, structuration patrimoniale et sécurisation de chaque étape —\nde l’installation au retour.",
      tag: "Mobilité internationale",
      href: "/services/expatriation",
    },
    {
      title: "Pilotage Patrimonial en France et à l'International",
      description:
        "Tableaux de bord, scénarios, cartographie des actifs et aide à la décision pour profils mobiles et entrepreneurs.",
      tag: "Allocation d'Actifs",
      href: "/services/allocation-actifs",
    },
    {
      title: "Transmission d'Entreprise",
      description:
        "Vision d’ensemble sur la cession, la transmission, l’articulation entre patrimoine privé et professionnel, avec la coordination d'experts.",
      tag: "Patrimoine Professionnel",
      href: "/services/transmission-entreprise",
    },
    {
      title: "Lecture stratégique de la DeFi",
      description:
        "Accompagnement pédagogique sur les stablecoins, flux et conservation sécurisée, risques opérationnels et usages pertinents des crypto-actifs.",
      tag: "Finance décentralisée",
      href: "/services/defi",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main id="top">
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-16 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-14">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F4D000]" />
                Décidez mieux, optimisez plus, évitez les erreurs coûteuses
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#08122E] sm:text-6xl">
                Une approche claire pour vos projets d&apos;expatriation et vos
                enjeux patrimoniaux nouvelle génération.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Nous aidons les profils exigeants à structurer leurs décisions
                en France et à l&apos;international, à clarifier leurs flux, à
                comprendre les usages de la finance décentralisée et à agir avec
                méthode.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[#0F5DB8] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0C4E9B]"
                >
                  Demander un diagnostic
                </a>

                <a
                  href="/simulateur"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-[#5FAE7B]/40 hover:bg-[#F8FBFF]"
                >
                  Tester le simulateur
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
                {[
                  ["International", "vision transfrontalière"],
                  ["Pédagogique", "sans jargon inutile"],
                  ["Structuré", "orienté décision"],
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

            <div className="flex items-center justify-center">
              <div className="grid w-full max-w-xl gap-5">
                <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Exemple de mission
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-[#08122E]">
                        Départ à Lisbonne ou Dubaï
                      </h3>
                    </div>

                    <div className="rounded-full bg-[#5FAE7B]/18 px-3 py-1 text-sm font-medium text-[#2E7A52]">
                      Analyse prioritaire
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Résidence fiscale et calendrier de bascule",
                      "Comptes, flux internationaux et conservation des actifs",
                      "Lecture des usages crypto et des risques de custody",
                      "Mise en relation avec fiscalistes, avocats ou experts-comptables",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                      >
                        <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F5DB8]" />

                        <p className="text-sm leading-6 text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-slate-200 bg-[#08122E] p-6 text-white shadow-sm">
                    <div className="mb-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#0F5DB8_0%,#5FAE7B_55%,#F4D000_100%)]" />

                    <p className="text-sm text-slate-300">
                      Positionnement
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      Fintech Premium
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Une esthétique moderne, une expérience fluide et un
                      discours rassurant inspirés des meilleurs standards SaaS.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#0F5DB8_0%,#5FAE7B_55%,#F4D000_100%)] opacity-80" />

                    <p className="text-sm text-slate-500">Promesse</p>

                    <p className="mt-2 text-xl font-semibold text-[#08122E]">
                      Décider avec plus de clarté
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Hiérarchiser les choix, réduire les angles morts et
                      avancer avec une vraie feuille de route.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#0F5DB8]">Offre</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08122E] sm:text-4xl">
              Une offre pensée pour l&apos;expatriation, la structuration
              patrimoniale et la compréhension des nouveaux actifs.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0F5DB8]/20 hover:shadow-[0_20px_50px_rgba(15,93,184,0.10)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#0F5DB8]/5 blur-3xl transition group-hover:bg-[#0F5DB8]/10" />

                <div className="relative">
                  <div className="mb-5 inline-flex rounded-full bg-[#0F5DB8]/8 px-3 py-1 text-xs font-medium text-[#0F5DB8]">
                    {service.tag}
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-[#08122E]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[32ch] whitespace-pre-line text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#0F5DB8]">
                    Découvrir
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ContactBlock />
      </main>
    </div>
  );
}