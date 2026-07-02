"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function ResultatPremiumPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#08122E]" />}>
      <ResultatPremiumContent />
    </Suspense>
  );
}

function ResultatPremiumContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const score = searchParams.get("score") || "0";
  const profile = searchParams.get("profile") || "Profil non précisé";
  const country = searchParams.get("country") || "Non précisé";
  const horizon = searchParams.get("horizon") || "Non précisé";
  const crypto = searchParams.get("crypto") || "Aucune";

  return (
    <main className="min-h-screen bg-[#08122E] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.35),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(244,208,0,0.18),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(95,174,123,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-[#F4D000]/30 bg-white/10 px-4 py-2 text-sm font-medium text-[#F4D000] backdrop-blur">
            Niveau Premium • Call direct
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {name
              ? `${name}, votre situation appelle un cadrage stratégique prioritaire.`
              : "Votre situation appelle un cadrage stratégique prioritaire."}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Votre score indique une situation à forte densité : plusieurs décisions doivent être coordonnées avant toute mise en œuvre.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-5">
            <Card label="Score" value={`${score}/100`} />
            <Card label="Profil" value={profile} />
            <Card label="Pays" value={country} />
            <Card label="Horizon" value={horizon} />
            <Card label="Crypto" value={crypto} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold">
            Pourquoi un call direct est recommandé
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              Votre situation comporte probablement plusieurs couches : flux internationaux, patrimoine existant, fiscalité, famille, société, calendrier de départ ou actifs numériques.
            </p>
            <p>
              Dans ce niveau, le risque principal n’est pas de manquer d’informations, mais de prendre les décisions dans le mauvais ordre.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Block title="Cartographie" text="Identifier les flux, actifs, revenus, pays et interlocuteurs." />
            <Block title="Séquençage" text="Déterminer l’ordre des décisions avant départ ou restructuration." />
            <Block title="Coordination" text="Mobiliser fiscaliste, notaire, avocat ou expert crypto si nécessaire." />
            <Block title="Arbitrage" text="Distinguer les décisions urgentes des décisions à différer." />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#F4D000]/20 bg-white p-8 text-[#08122E] shadow-2xl">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#F4D000]/25 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-52 w-52 rounded-full bg-[#0F5DB8]/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-medium text-[#0F5DB8]">
              Action recommandée
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Demander un échange stratégique direct.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Le bon canal ici est un contact direct : votre situation mérite une lecture personnalisée, structurée et orientée décision.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#0F5DB8] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,93,184,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0C4E9B]"
            >
              Demander un call stratégique
            </a>

            <div className="mt-4">
              <Link
                href="/simulateur"
                className="text-sm text-slate-500 underline-offset-4 hover:underline"
              >
                Refaire le simulateur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}