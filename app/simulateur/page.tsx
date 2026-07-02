"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Profile =
  | "Cadre salarié"
  | "Entrepreneur"
  | "Indépendant"
  | "Famille internationale";

type DepartureHorizon = "0 à 3 mois" | "3 à 12 mois" | "12 mois et plus";
type CryptoLevel = "Aucune" | "Débutant" | "Intermédiaire" | "Avancé";

type CountryRiskLevel =
  | "very_low"
  | "low"
  | "moderate"
  | "heightened"
  | "high"
  | "very_high";

const countries = [
  "Afghanistan",
  "Afrique du Sud",
  "Albanie",
  "Algérie",
  "Allemagne",
  "Andorre",
  "Angola",
  "Antigua-et-Barbuda",
  "Arabie saoudite",
  "Argentine",
  "Arménie",
  "Australie",
  "Autriche",
  "Azerbaïdjan",
  "Bahamas",
  "Bahreïn",
  "Bangladesh",
  "Barbade",
  "Belgique",
  "Belize",
  "Bénin",
  "Bhoutan",
  "Biélorussie",
  "Birmanie",
  "Bolivie",
  "Bosnie-Herzégovine",
  "Botswana",
  "Brésil",
  "Brunei",
  "Bulgarie",
  "Burkina Faso",
  "Burundi",
  "Cambodge",
  "Cameroun",
  "Canada",
  "Cap-Vert",
  "Chili",
  "Chine",
  "Chypre",
  "Colombie",
  "Comores",
  "Congo-Brazzaville",
  "Congo-Kinshasa",
  "Corée du Nord",
  "Corée du Sud",
  "Costa Rica",
  "Côte d’Ivoire",
  "Croatie",
  "Cuba",
  "Danemark",
  "Djibouti",
  "Dominique",
  "Égypte",
  "Émirats arabes unis",
  "Équateur",
  "Érythrée",
  "Espagne",
  "Estonie",
  "Eswatini",
  "États-Unis",
  "Éthiopie",
  "Fidji",
  "Finlande",
  "France",
  "Gabon",
  "Gambie",
  "Géorgie",
  "Ghana",
  "Grèce",
  "Grenade",
  "Guatemala",
  "Guinée",
  "Guinée-Bissau",
  "Guinée équatoriale",
  "Guyana",
  "Haïti",
  "Honduras",
  "Hongrie",
  "Îles Marshall",
  "Îles Salomon",
  "Inde",
  "Indonésie",
  "Irak",
  "Iran",
  "Irlande",
  "Islande",
  "Israël",
  "Italie",
  "Jamaïque",
  "Japon",
  "Jordanie",
  "Kazakhstan",
  "Kenya",
  "Kirghizistan",
  "Kiribati",
  "Koweït",
  "Laos",
  "Lesotho",
  "Lettonie",
  "Liban",
  "Liberia",
  "Libye",
  "Liechtenstein",
  "Lituanie",
  "Luxembourg",
  "Macédoine du Nord",
  "Madagascar",
  "Malaisie",
  "Malawi",
  "Maldives",
  "Mali",
  "Malte",
  "Maroc",
  "Maurice",
  "Mauritanie",
  "Mexique",
  "Micronésie",
  "Moldavie",
  "Monaco",
  "Mongolie",
  "Monténégro",
  "Mozambique",
  "Namibie",
  "Nauru",
  "Népal",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norvège",
  "Nouvelle-Zélande",
  "Oman",
  "Ouganda",
  "Ouzbékistan",
  "Pakistan",
  "Palaos",
  "Panama",
  "Papouasie-Nouvelle-Guinée",
  "Paraguay",
  "Pays-Bas",
  "Pérou",
  "Philippines",
  "Pologne",
  "Portugal",
  "Qatar",
  "République centrafricaine",
  "République dominicaine",
  "République tchèque",
  "Roumanie",
  "Royaume-Uni",
  "Russie",
  "Rwanda",
  "Saint-Christophe-et-Niévès",
  "Saint-Marin",
  "Saint-Vincent-et-les-Grenadines",
  "Sainte-Lucie",
  "Salvador",
  "Samoa",
  "São Tomé-et-Principe",
  "Sénégal",
  "Serbie",
  "Seychelles",
  "Sierra Leone",
  "Singapour",
  "Slovaquie",
  "Slovénie",
  "Somalie",
  "Soudan",
  "Soudan du Sud",
  "Sri Lanka",
  "Suède",
  "Suisse",
  "Suriname",
  "Syrie",
  "Tadjikistan",
  "Tanzanie",
  "Tchad",
  "Thaïlande",
  "Timor oriental",
  "Togo",
  "Tonga",
  "Trinité-et-Tobago",
  "Tunisie",
  "Turkménistan",
  "Turquie",
  "Tuvalu",
  "Ukraine",
  "Uruguay",
  "Vanuatu",
  "Vatican",
  "Venezuela",
  "Viêt Nam",
  "Yémen",
  "Zambie",
  "Zimbabwe",
] as const;

const countryRiskMap: Record<string, CountryRiskLevel> = {
  Allemagne: "low",
  Australie: "very_low",
  Autriche: "low",
  Belgique: "low",
  Canada: "very_low",
  Chili: "moderate",
  Chypre: "moderate",
  "Corée du Sud": "low",
  Danemark: "very_low",
  "Émirats arabes unis": "low",
  Espagne: "moderate",
  "États-Unis": "low",
  Estonie: "low",
  Finlande: "very_low",
  France: "low",
  Grèce: "heightened",
  Hongrie: "heightened",
  Irlande: "very_low",
  Islande: "very_low",
  Israël: "moderate",
  Italie: "heightened",
  Japon: "very_low",
  Luxembourg: "very_low",
  Malte: "moderate",
  Norvège: "very_low",
  "Nouvelle-Zélande": "very_low",
  "Pays-Bas": "very_low",
  Pologne: "moderate",
  Portugal: "moderate",
  Qatar: "low",
  "République tchèque": "low",
  Roumanie: "heightened",
  "Royaume-Uni": "moderate",
  Singapour: "very_low",
  Slovaquie: "moderate",
  Slovénie: "low",
  Suède: "very_low",
  Suisse: "very_low",
  "Arabie saoudite": "moderate",
  Bahreïn: "moderate",
  Oman: "moderate",
  Koweït: "low",
  Maroc: "high",
  Tunisie: "very_high",
  Égypte: "very_high",
  Turquie: "very_high",
  Inde: "high",
  Indonésie: "high",
  Thaïlande: "heightened",
  Malaisie: "moderate",
  "Viêt Nam": "high",
  Philippines: "high",
  Chine: "high",
  Bulgarie: "heightened",
  Croatie: "moderate",
  Serbie: "high",
  Monténégro: "high",
  Albanie: "high",
  Géorgie: "high",
  Arménie: "high",
  Kazakhstan: "high",
  Ouzbékistan: "high",
  "Afrique du Sud": "very_high",
  Nigeria: "very_high",
  Kenya: "very_high",
  Tanzanie: "very_high",
  "Côte d’Ivoire": "very_high",
  Sénégal: "very_high",
  Ghana: "very_high",
  Rwanda: "high",
  Maurice: "high",
  Mexique: "high",
  Panama: "high",
  "Costa Rica": "high",
  "République dominicaine": "high",
  Colombie: "very_high",
  Pérou: "very_high",
  Brésil: "high",
  Argentine: "very_high",
  Uruguay: "high",
  Paraguay: "high",
  Équateur: "very_high",
  Bolivie: "very_high",
  Venezuela: "very_high",
  Russie: "very_high",
  Ukraine: "very_high",
  Biélorussie: "very_high",
  Liban: "very_high",
  Irak: "very_high",
  Iran: "very_high",
  Syrie: "very_high",
  Afghanistan: "very_high",
  Pakistan: "very_high",
  Yémen: "very_high",
  Somalie: "very_high",
  Soudan: "very_high",
  "Soudan du Sud": "very_high",
  Mali: "very_high",
  Niger: "very_high",
  "Burkina Faso": "very_high",
  Tchad: "very_high",
  "République centrafricaine": "very_high",
  "Congo-Kinshasa": "very_high",
  "Congo-Brazzaville": "very_high",
  Libye: "very_high",
};

function getCountryRisk(country: string): CountryRiskLevel {
  if (!country) return "moderate";
  return countryRiskMap[country] ?? "high";
}

function getCountryRiskWeight(level: CountryRiskLevel): number {
  switch (level) {
    case "very_low":
      return 2;
    case "low":
      return 4;
    case "moderate":
      return 7;
    case "heightened":
      return 10;
    case "high":
      return 15;
    case "very_high":
      return 21;
  }
}

function getCountrySupportText(country: string, level: CountryRiskLevel): string {
  if (!country) {
    return "Sélectionnez un pays pour affiner la lecture stratégique de votre situation.";
  }

  switch (level) {
    case "very_low":
    case "low":
      return `Le choix de ${country} oriente surtout l’accompagnement vers la structuration patrimoniale, le calendrier de départ et la coordination opérationnelle.`;
    case "moderate":
    case "heightened":
      return `Le choix de ${country} justifie une lecture plus structurée des flux, des arbitrages et des étapes de mise en œuvre.`;
    case "high":
    case "very_high":
      return `Le choix de ${country} appelle une approche plus personnalisée, avec une vigilance renforcée sur l’environnement, les flux et la coordination des expertises.`;
  }
}

export default function SimulateurPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<Profile>("Cadre salarié");
  const [country, setCountry] = useState("");
  const [horizon, setHorizon] = useState<DepartureHorizon>("3 à 12 mois");
  const [crypto, setCrypto] = useState<CryptoLevel>("Aucune");
  const [objectives, setObjectives] = useState("");
  const [family, setFamily] = useState(false);
  const [businessActivity, setBusinessActivity] = useState(false);
  const [multiCountryIncome, setMultiCountryIncome] = useState(false);
  const [existingAssets, setExistingAssets] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);

  const result = useMemo(() => {
    let score = 0;
    const alerts: string[] = [];
    const experts: string[] = [];

    if (profile === "Cadre salarié") score += 8;
    if (profile === "Indépendant") score += 13;
    if (profile === "Entrepreneur") score += 18;
    if (profile === "Famille internationale") score += 16;

    if (horizon === "0 à 3 mois") {
      score += 18;
      alerts.push("Calendrier resserré : sécuriser rapidement les arbitrages et le séquencement.");
    }

    if (horizon === "3 à 12 mois") {
      score += 10;
      alerts.push("Fenêtre active de préparation : opportunité de structurer en amont.");
    }

    if (horizon === "12 mois et plus") {
      score += 5;
    }

    if (crypto === "Débutant") {
      alerts.push("Présence d’actifs numériques : besoin de pédagogie et de structuration.");
    }

    if (crypto === "Intermédiaire") {
      alerts.push("Flux et traçabilité des actifs numériques à intégrer dans la vision d’ensemble.");
    }

    if (crypto === "Avancé") {
      alerts.push("Exposition avancée aux actifs numériques : conservation, flux et coordination à cadrer finement.");
    }

    if (family) {
      score += 10;
      alerts.push("Dimension familiale : protection, scolarité, couverture et organisation à intégrer.");
    }

    if (businessActivity) {
      score += 13;
      alerts.push("Activité entrepreneuriale ou indépendante : articulation perso/pro à structurer.");
    }

    if (multiCountryIncome) {
      score += 15;
      alerts.push("Flux ou revenus multi-pays : vigilance accrue sur la cohérence d’ensemble.");
    }

    if (existingAssets) {
      score += 8;
      alerts.push("Patrimoine existant à repositionner ou cartographier avant mise en œuvre.");
    }

    const normalizedObjectives = objectives.toLowerCase();

    if (
      normalizedObjectives.includes("fiscal") ||
      normalizedObjectives.includes("impôt") ||
      normalizedObjectives.includes("tax")
    ) {
      score += 8;
      alerts.push("Sujet fiscal explicitement mentionné.");
      experts.push("Fiscaliste international");
    }

    if (
      normalizedObjectives.includes("société") ||
      normalizedObjectives.includes("holding") ||
      normalizedObjectives.includes("entreprise")
    ) {
      score += 8;
      alerts.push("Enjeux possibles de structuration sociétaire.");
      experts.push("Expert-comptable / avocat");
    }

    if (
      normalizedObjectives.includes("crypto") ||
      normalizedObjectives.includes("defi") ||
      normalizedObjectives.includes("wallet") ||
      normalizedObjectives.includes("stablecoin")
    ) {
      alerts.push("Sujet crypto / DeFi explicitement mentionné.");
    }

    if (
      normalizedObjectives.includes("succession") ||
      normalizedObjectives.includes("transmission") ||
      normalizedObjectives.includes("famille")
    ) {
      score += 7;
      alerts.push("Enjeux de transmission ou protection familiale identifiés.");
      experts.push("Notaire / avocat patrimonial");
    }

    const countryRisk = getCountryRisk(country);
    const countryWeight = getCountryRiskWeight(countryRisk);

    if (country) {
      score += countryWeight;
      alerts.push(getCountrySupportText(country, countryRisk));
    }

    score = Math.min(score, 100);

    let level = "Essentiel";
    let badgeClass = "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
    let progressClass = "bg-[#5FAE7B]";
    let glowClass =
      "shadow-[0_0_0_1px_rgba(95,174,123,0.10),0_16px_48px_rgba(95,174,123,0.14)]";

    if (score >= 35 && score < 65) {
      level = "Optimisé";
      badgeClass = "bg-[#EAF3FF] text-[#0F5DB8] ring-1 ring-[#B8D7FF]";
      progressClass = "bg-[#0F5DB8]";
      glowClass =
        "shadow-[0_0_0_1px_rgba(15,93,184,0.10),0_16px_48px_rgba(15,93,184,0.14)]";
    }

    if (score >= 65) {
      level = "Premium";
      badgeClass = "bg-[#FFF8D9] text-[#7A6200] ring-1 ring-[#F4D000]/40";
      progressClass = "bg-[linear-gradient(90deg,#0F5DB8_0%,#5FAE7B_55%,#F4D000_100%)]";
      glowClass =
        "shadow-[0_0_0_1px_rgba(244,208,0,0.14),0_18px_52px_rgba(15,93,184,0.14)]";
    }

    const uniqueExperts = [...new Set(experts)];

    if (crypto !== "Aucune") {
      uniqueExperts.push("Conseil stratégique crypto / conservation");
    }

    const finalExperts = [...new Set(uniqueExperts)];

    if (finalExperts.length === 0) {
      finalExperts.push("Diagnostic stratégique initial");
    }

    let aiAdvice = "";

    if (score < 35) {
      aiAdvice =
        "Votre situation semble compatible avec un accompagnement essentiel : l’enjeu principal est de clarifier le calendrier, les priorités et les premiers arbitrages pour avancer avec méthode.";
    } else if (score < 65) {
      aiAdvice =
        "Votre situation mérite un accompagnement renforcé : plusieurs paramètres doivent être alignés pour sécuriser les flux, le calendrier de départ et la cohérence patrimoniale d’ensemble.";
    } else {
      aiAdvice =
        "Votre situation appelle un accompagnement premium : les paramètres à coordonner justifient une approche plus structurée, plus personnalisée et plus prudente dans l’exécution.";
    }

    let recommendation = "";

    if (score < 35) {
      recommendation =
        "Organiser un cadrage essentiel pour prioriser les sujets, valider le calendrier et identifier les bons interlocuteurs.";
    } else if (score < 65) {
      recommendation =
        "Prévoir un diagnostic renforcé afin d’ordonner les décisions, sécuriser les flux et préparer la mise en œuvre dans de bonnes conditions.";
    } else {
      recommendation =
        "Prévoir un cadrage premium avec cartographie complète des flux, du patrimoine, de l’environnement cible et des expertises à coordonner.";
    }

    return {
      score,
      level,
      alerts: alerts.slice(0, 5),
      experts: finalExperts.slice(0, 4),
      aiAdvice,
      recommendation,
      badgeClass,
      progressClass,
      glowClass,
      countryText: getCountrySupportText(country, countryRisk),
    };
  }, [
    profile,
    country,
    horizon,
    crypto,
    objectives,
    family,
    businessActivity,
    multiCountryIncome,
    existingAssets,
  ]);

  useEffect(() => {
    const end = result.score;
    const start = animatedScore;
    const duration = 700;
    const distance = end - start;

    if (distance === 0) return;

    const stepTime = Math.max(10, Math.floor(duration / Math.max(1, Math.abs(distance))));
    let current = start;

    const timer = setInterval(() => {
      current += distance > 0 ? 1 : -1;
      setAnimatedScore(current);

      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [result.score]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams({
      name,
      email,
      profile,
      country: country || "Non précisé",
      horizon,
      crypto,
      objectives,
      score: String(result.score),
      level: result.level,
    });

    if (result.level === "Essentiel") {
      router.push(`/resultat/essentiel?${params.toString()}`);
      return;
    }

    if (result.level === "Optimisé") {
      router.push(`/resultat/optimise?${params.toString()}`);
      return;
    }

    router.push(`/resultat/premium?${params.toString()}`);
  }

  function scrollToForm() {
    const form = document.getElementById("lead-form");
    if (!form) return;

    const headerOffset = 120;
    const elementPosition = form.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  const completionCount = [
    name.trim() !== "",
    email.trim() !== "",
    country.trim() !== "",
    objectives.trim() !== "",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.14),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(95,174,123,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.10),transparent_26%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#0F5DB8]/15 bg-white px-3 py-1 text-sm text-[#0F5DB8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F4D000]" />
                Diagnostic premium • Qualification rapide
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#08122E] sm:text-5xl">
                Évaluez le niveau d’accompagnement recommandé pour votre projet d’expatriation patrimoniale.
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Renseignez votre situation, obtenez une lecture stratégique plus intelligente, puis une première orientation personnalisée.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#0F5DB8] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0C4E9B]"
                >
                  Commencer le diagnostic
                </button>

                <div className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                  {completionCount}/4 informations clés renseignées
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="group relative w-full max-w-sm overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <video
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/family-international-poster.jpg"
                >
                  <source src="/family-international.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#08122E]/30 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/15 p-3 text-white backdrop-blur-md">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                    Vision internationale
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Expatriation, patrimoine, flux transfrontaliers, lecture stratégique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <form
            id="lead-form"
            onSubmit={handleSubmit}
            className="scroll-mt-32 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.06)] transition duration-300 hover:shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:p-8"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#0F5DB8]">📩 Formulaire email</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#08122E]">
                  Recevoir une première lecture
                </h2>
              </div>

              <div className="hidden rounded-2xl bg-[#F8FBFF] px-4 py-3 text-right sm:block">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Progression</p>
                <p className="mt-1 text-lg font-semibold text-[#08122E]">{completionCount}/4</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Votre Nom Prénom
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Nom prénom"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#0F5DB8] focus:ring-4 focus:ring-[#B8D7FF]/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  E-mail
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="vous@email.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#0F5DB8] focus:ring-4 focus:ring-[#B8D7FF]/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Votre profil
                </label>
                <select
                  value={profile}
                  onChange={(e) => setProfile(e.target.value as Profile)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#0F5DB8] focus:ring-4 focus:ring-[#B8D7FF]/40"
                >
                  <option>Cadre salarié</option>
                  <option>Entrepreneur</option>
                  <option>Indépendant</option>
                  <option>Famille internationale</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Pays cible
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#0F5DB8] focus:ring-4 focus:ring-[#B8D7FF]/40"
                >
                  <option value="">Sélectionnez un pays</option>
                  {countries.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Horizon de départ
                </label>
                <select
                  value={horizon}
                  onChange={(e) => setHorizon(e.target.value as DepartureHorizon)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#0F5DB8] focus:ring-4 focus:ring-[#B8D7FF]/40"
                >
                  <option>0 à 3 mois</option>
                  <option>3 à 12 mois</option>
                  <option>12 mois et plus</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Exposition crypto / DeFi
                </label>
                <select
                  value={crypto}
                  onChange={(e) => setCrypto(e.target.value as CryptoLevel)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#0F5DB8] focus:ring-4 focus:ring-[#B8D7FF]/40"
                >
                  <option>Aucune</option>
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  checked: family,
                  onChange: () => setFamily(!family),
                  label: "Situation familiale à prendre en compte",
                },
                {
                  checked: businessActivity,
                  onChange: () => setBusinessActivity(!businessActivity),
                  label: "Activité entrepreneuriale / indépendante",
                },
                {
                  checked: multiCountryIncome,
                  onChange: () => setMultiCountryIncome(!multiCountryIncome),
                  label: "Revenus ou flux dans plusieurs pays",
                },
                {
                  checked: existingAssets,
                  onChange: () => setExistingAssets(!existingAssets),
                  label: "Patrimoine existant à restructurer",
                },
              ].map((item) => (
                <label
                  key={item.label}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-[#5FAE7B]/30 hover:bg-[#F8FBFF]"
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={item.onChange}
                    className="accent-[#0F5DB8]"
                  />
                  {item.label}
                </label>
              ))}
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Vos enjeux principaux
              </label>
              <textarea
                value={objectives}
                onChange={(e) => setObjectives(e.target.value)}
                className="min-h-[140px] w-full rounded-[24px] border border-slate-300 px-4 py-3 text-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#0F5DB8] focus:ring-4 focus:ring-[#B8D7FF]/40"
                placeholder="Fiscalité, transfert de résidence, structure patrimoniale, succession, crypto, société, protection familiale, etc."
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#0F5DB8] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0C4E9B] hover:shadow-lg active:scale-[0.99]"
            >
              Recevoir une première lecture
            </button>
          </form>

          <div className="grid gap-6">
            <div
              className={`rounded-[32px] border border-slate-200 bg-white p-6 transition duration-300 sm:p-8 ${result.glowClass}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[#0F5DB8]">📊 Lecture stratégique</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#08122E]">
                    Niveau d’accompagnement recommandé : {animatedScore}/100
                  </h2>
                </div>

                <div
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${result.badgeClass}`}
                >
                  {result.level}
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-3 rounded-full transition-all duration-700 ${result.progressClass}`}
                  style={{ width: `${animatedScore}%` }}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#F8FBFF] p-4 transition duration-200 hover:bg-[#EEF6FF]">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Profil</p>
                  <p className="mt-2 text-sm font-medium text-[#08122E]">{profile}</p>
                </div>

                <div className="rounded-2xl bg-[#F8FBFF] p-4 transition duration-200 hover:bg-[#EEF6FF]">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Pays</p>
                  <p className="mt-2 text-sm font-medium text-[#08122E]">
                    {country || "Non sélectionné"}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FBFF] p-4 transition duration-200 hover:bg-[#EEF6FF]">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Horizon</p>
                  <p className="mt-2 text-sm font-medium text-[#08122E]">{horizon}</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-[#FCFDFE] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Lecture pays</p>
                <p className="mt-2 text-sm font-medium text-[#08122E]">{result.countryText}</p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F8FBFF] p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-[#EEF6FF]">
                  <p className="text-sm font-medium text-[#08122E]">
                    Points d’attention stratégiques
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {result.alerts.length > 0 ? (
                      result.alerts.map((item) => <li key={item}>• {item}</li>)
                    ) : (
                      <li>• Quelques informations supplémentaires permettraient d’affiner la lecture.</li>
                    )}
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#F8FBFF] p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-[#EEF6FF]">
                  <p className="text-sm font-medium text-[#08122E]">
                    Interlocuteurs à mobiliser
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {result.experts.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#08122E] p-6 text-white shadow-sm transition duration-300 hover:shadow-xl sm:p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0F5DB8]/25 blur-3xl" />
              <div className="absolute -bottom-20 left-0 h-40 w-40 rounded-full bg-[#5FAE7B]/20 blur-3xl" />
              <div className="absolute right-20 top-20 h-24 w-24 rounded-full bg-[#F4D000]/10 blur-2xl" />

              <div className="relative">
                <p className="text-sm font-medium text-[#B8D7FF]">🤖 Agent IA conseiller</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Première lecture personnalisée
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{result.aiAdvice}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm font-medium text-white">Recommandation immédiate</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {result.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-4 z-50 px-4 lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between rounded-full border border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-md">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Lecture actuelle
            </p>
            <p className="text-sm font-semibold text-[#08122E]">
              {animatedScore}/100 • {result.level}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="rounded-full bg-[#0F5DB8] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0C4E9B]"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}