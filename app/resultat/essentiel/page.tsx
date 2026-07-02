"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function ResultatEssentielPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ResultatEssentielContent />
    </Suspense>
  );
}

function ResultatEssentielContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const score = searchParams.get("score") || "0";
  const country = searchParams.get("country") || "Non précisé";
  const horizon = searchParams.get("horizon") || "Non précisé";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,174,123,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(15,93,184,0.10),transparent_26%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="inline-flex rounded-full border border-[#5FAE7B]/20 bg-white px-4 py-2 text-sm font-medium text-[#2E7A52] shadow-sm">
            Niveau Essentiel • Contenu éducatif
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[#08122E] sm:text-5xl">
            {name
              ? `${name}, votre projet nécessite d’abord une clarification.`
              : "Votre projet nécessite d’abord une clarification."}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Votre score indique une situation encore lisible. La priorité est de comprendre les grands enjeux avant de mobiliser un accompagnement plus poussé.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Card label="Score" value={`${score}/100`} />
            <Card label="Pays cible" value={country} />
            <Card label="Horizon" value={horizon} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <Block
            title="1. Comprendre"
            text="Identifier les impacts de votre expatriation sur votre fiscalité, vos revenus, votre patrimoine et votre organisation familiale."
          />
          <Block
            title="2. Prioriser"
            text="Distinguer les sujets urgents des sujets secondaires pour éviter de complexifier inutilement votre projet."
          />
          <Block
            title="3. Préparer"
            text="Construire une première checklist avant de décider si un accompagnement devient nécessaire."
          />
        </div>

        <div className="mt-10 rounded-[32px] border border-slate-200 bg-[#F8FBFF] p-8">
          <h2 className="text-2xl font-semibold text-[#08122E]">
            Ressources recommandées
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            <li>• Checklist expatriation patrimoniale avant départ.</li>
            <li>• Les erreurs fréquentes lors d’un changement de résidence fiscale.</li>
            <li>• Comprendre les flux entre plusieurs pays.</li>
            <li>• Préparer ses documents avant un premier rendez-vous.</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/methode"
              className="rounded-full bg-[#0F5DB8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0C4E9B]"
            >
              Découvrir la méthode
            </Link>

            <Link
              href="/simulateur"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-[#08122E] transition hover:bg-slate-50"
            >
              Refaire le simulateur
            </Link>
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
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#08122E]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}