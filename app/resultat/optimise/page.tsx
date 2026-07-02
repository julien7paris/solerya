"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function ResultatOptimisePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ResultatOptimiseContent />
    </Suspense>
  );
}

function ResultatOptimiseContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const score = searchParams.get("score") || "0";
  const profile = searchParams.get("profile") || "Profil non précisé";
  const country = searchParams.get("country") || "Non précisé";
  const horizon = searchParams.get("horizon") || "Non précisé";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(95,174,123,0.12),transparent_26%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-[#0F5DB8]/20 bg-white px-4 py-2 text-sm font-medium text-[#0F5DB8] shadow-sm">
            Niveau Optimisé • Call soft
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[#08122E] sm:text-5xl">
            {name
              ? `${name}, votre situation mérite un échange de cadrage.`
              : "Votre situation mérite un échange de cadrage."}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Votre score montre plusieurs paramètres à aligner. L’objectif est de vérifier vos priorités, vos angles morts et la meilleure séquence de décision.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            <Card label="Score" value={`${score}/100`} />
            <Card label="Profil" value={profile} />
            <Card label="Pays cible" value={country} />
            <Card label="Horizon" value={horizon} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-[#08122E]">
            Pourquoi un échange court est pertinent
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Votre projet n’est pas nécessairement complexe au point de nécessiter un accompagnement complet immédiat, mais il comporte assez de variables pour justifier un cadrage.
            </p>
            <p>
              L’enjeu est de ne pas prendre les décisions dans le mauvais ordre : résidence, fiscalité, flux, patrimoine, famille, société ou actifs numériques.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Block title="Objectif du call" text="Clarifier vos priorités et les points à sécuriser." />
            <Block title="Durée recommandée" text="Un échange court, sans engagement, pour valider la suite." />
            <Block title="Sortie attendue" text="Une lecture claire des prochaines décisions à prendre." />
            <Block title="Niveau d’urgence" text="À planifier avant toute décision structurante." />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-[#08122E] p-8 text-white shadow-xl">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#0F5DB8]/30 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-52 w-52 rounded-full bg-[#5FAE7B]/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-medium text-[#B8D7FF]">
              Recommandation
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Planifier un premier échange de cadrage.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Le bon canal ici est un call soft : un échange simple pour confirmer si votre situation nécessite un diagnostic approfondi.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#08122E] transition hover:-translate-y-0.5"
            >
              Demander un premier échange
            </a>

            <div className="mt-4">
              <Link
                href="/simulateur"
                className="text-sm text-slate-300 underline-offset-4 hover:underline"
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
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-[#08122E]">{value}</p>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FBFF] p-5">
      <h3 className="text-sm font-semibold text-[#08122E]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}