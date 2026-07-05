"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const packs = {
  serenite: {
    name: "Solerya Sérénité",
    price: "39",
    color: "#0B8A4A",
    soft: "#EAF8F0",
    href: "/packs/serenite",
    text: "Les essentiels pour rassurer les proches.",
  },
  confort: {
    name: "Solerya Confort",
    price: "59",
    color: "#0967D2",
    soft: "#EAF4FF",
    href: "/packs/confort",
    text: "Un domicile plus sûr et plus confortable.",
  },
  autonomie: {
    name: "Solerya Autonomie",
    price: "79",
    color: "#8E44CC",
    soft: "#F5ECFF",
    href: "/packs/autonomie",
    text: "Une maison attentive au rythme de vie.",
  },
  signature: {
    name: "Solerya Signature",
    price: "99",
    color: "#F25A1D",
    soft: "#FFF1E6",
    href: "/packs/signature",
    text: "La solution complète avec objets renforcés.",
  },
};

const objects = [
  {
    id: "bouton-sos",
    name: "Bouton SOS",
    pack: "serenite",
    image: "/objets/bouton-sos.jpg",
    x: "8%",
    y: "18%",
  },
  {
    id: "application",
    name: "Application famille",
    pack: "serenite",
    image: "/objets/application-famille.png",
    x: "6%",
    y: "55%",
  },
  {
    id: "ouverture",
    name: "Détecteur ouverture",
    pack: "serenite",
    image: "/objets/detecteur-ouverture-porte.jpg",
    x: "22%",
    y: "78%",
  },
  {
    id: "fuite",
    name: "Détecteur de fuite",
    pack: "confort",
    image: "/objets/fuites.jpg",
    x: "70%",
    y: "78%",
  },
  {
    id: "fumee",
    name: "Détecteur fumée",
    pack: "confort",
    image: "/objets/detecteur-fumee.jpg",
    x: "86%",
    y: "55%",
  },
  {
    id: "temperature",
    name: "Température & humidité",
    pack: "confort",
    image: "/objets/capteur-temperature-humidite.jpg",
    x: "84%",
    y: "20%",
  },
  {
    id: "presence",
    name: "Capteur de présence",
    pack: "autonomie",
    image: "/objets/capteur-presence.jpg",
    x: "32%",
    y: "8%",
  },
  {
    id: "mouvement",
    name: "Capteur mouvement",
    pack: "autonomie",
    image: "/objets/capteur-mouvement-veilleuse.jpg",
    x: "58%",
    y: "8%",
  },
  {
    id: "chemin",
    name: "Chemin lumineux",
    pack: "autonomie",
    image: "/objets/chemin-lumineux.jpg",
    x: "42%",
    y: "84%",
  },
  {
    id: "vanne",
    name: "Arrêt de vanne",
    pack: "signature",
    image: "/objets/arret-vanne.jpg",
    x: "16%",
    y: "36%",
  },
  {
    id: "frigo",
    name: "Capteur frigo",
    pack: "signature",
    image: "/objets/frigo.jpg",
    x: "74%",
    y: "38%",
  },
  {
    id: "sirene",
    name: "Sirène connectée",
    pack: "signature",
    image: "/objets/sirene.jpg",
    x: "50%",
    y: "2%",
  },
];

export default function SchemaPage() {
  const [activePackKey, setActivePackKey] =
    useState<keyof typeof packs>("autonomie");

  const activePack = packs[activePackKey];
  const activeObjects = objects.filter((object) => object.pack === activePackKey);

  return (
    <main className="min-h-screen bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 lg:px-8">
        <div className="mx-auto mb-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
            <HeartHandshake className="h-4 w-4 text-[#F58220]" />
            Schéma Solerya
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Les objets connectés autour du senior.
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Cliquez sur un objet : tous les équipements du même pack se mettent
            en surbrillance avec la couleur associée.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-[42px] bg-white p-5 shadow-[0_24px_80px_rgba(8,18,46,0.10)] md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold text-[#F58220]">
                  Écosystème connecté
                </p>
                <h2 className="mt-1 text-2xl font-extrabold">
                  Cliquez sur un objet
                </h2>
              </div>

              <div
                className="rounded-full px-4 py-2 text-sm font-extrabold"
                style={{
                  backgroundColor: activePack.soft,
                  color: activePack.color,
                }}
              >
                {activePack.name}
              </div>
            </div>

            <div className="relative min-h-[720px] overflow-hidden rounded-[38px] bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF3F8]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(245,130,32,0.14),transparent_34%)]" />

              <div
                className="absolute left-1/2 top-[44%] z-20 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-white shadow-[0_30px_90px_rgba(8,18,46,0.18)]"
                style={{
                  boxShadow: `0 30px 90px ${activePack.color}35`,
                }}
              >
                <Image
                  src="/images/senior.jpg"
                  alt="Senior Solerya"
                  fill
                  priority
                  className="rounded-full object-cover"
                  sizes="360px"
                />
              </div>

              <div
                className="absolute left-1/2 top-[44%] z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}55` }}
              />

              <div
                className="absolute left-1/2 top-[44%] z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}35` }}
              />

              {objects.map((object) => {
                const pack = packs[object.pack as keyof typeof packs];
                const isActive = object.pack === activePackKey;

                return (
                  <button
                    key={object.id}
                    type="button"
                    onClick={() =>
                      setActivePackKey(object.pack as keyof typeof packs)
                    }
                    onMouseEnter={() =>
                      setActivePackKey(object.pack as keyof typeof packs)
                    }
                    className={`absolute z-30 w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border bg-white p-3 text-center transition duration-300 ${
                      isActive
                        ? "scale-110 border-white opacity-100 shadow-[0_24px_60px_rgba(8,18,46,0.22)]"
                        : "scale-95 border-slate-100 opacity-45 grayscale hover:opacity-100 hover:grayscale-0"
                    }`}
                    style={{
                      left: object.x,
                      top: object.y,
                      boxShadow: isActive
                        ? `0 24px 60px ${pack.color}35`
                        : undefined,
                    }}
                  >
                    <div
                      className="relative mx-auto h-24 w-24 overflow-hidden rounded-2xl bg-white"
                      style={{
                        outline: isActive
                          ? `3px solid ${pack.color}`
                          : "1px solid #E5E7EB",
                      }}
                    >
                      <Image
                        src={object.image}
                        alt={object.name}
                        fill
                        className="object-contain p-1"
                        sizes="96px"
                      />
                    </div>

                    <p
                      className="mt-3 text-xs font-extrabold leading-4"
                      style={{ color: isActive ? pack.color : "#08122E" }}
                    >
                      {object.name}
                    </p>
                  </button>
                );
              })}

              <div className="absolute bottom-6 left-6 right-6 z-40 rounded-[30px] bg-white/90 p-4 shadow-[0_22px_60px_rgba(8,18,46,0.14)] backdrop-blur">
                <div className="grid gap-3 md:grid-cols-4">
                  {Object.entries(packs).map(([key, pack]) => {
                    const selected = key === activePackKey;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() =>
                          setActivePackKey(key as keyof typeof packs)
                        }
                        className={`rounded-2xl px-4 py-3 text-left transition ${
                          selected ? "scale-[1.03] shadow-sm" : "bg-slate-50"
                        }`}
                        style={{
                          backgroundColor: selected ? pack.soft : undefined,
                        }}
                      >
                        <p
                          className="text-sm font-extrabold"
                          style={{ color: pack.color }}
                        >
                          {pack.name}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          Dès {pack.price} €/mois
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[42px] border border-orange-100 bg-white p-6 shadow-[0_24px_80px_rgba(8,18,46,0.10)] lg:sticky lg:top-24">
            <div
              className="rounded-[30px] p-5"
              style={{ backgroundColor: activePack.soft }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white"
                style={{ color: activePack.color }}
              >
                <Sparkles className="h-7 w-7" />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">
                Pack sélectionné
              </p>

              <h2
                className="mt-2 text-3xl font-extrabold"
                style={{ color: activePack.color }}
              >
                {activePack.name}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                {activePack.text}
              </p>
            </div>

            <div className="mt-6 rounded-[28px] bg-[#FAFBFD] p-5">
              <p className="text-sm font-extrabold">
                Objets mis en surbrillance
              </p>

              <div className="mt-4 space-y-3">
                {activeObjects.map((object) => (
                  <div
                    key={object.id}
                    className="grid grid-cols-[64px_1fr_22px] items-center gap-4 rounded-[22px] bg-white p-3 shadow-[0_10px_26px_rgba(8,18,46,0.08)]"
                  >
                    <div
                      className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white"
                      style={{
                        outline: `2px solid ${activePack.color}`,
                      }}
                    >
                      <Image
                        src={object.image}
                        alt={object.name}
                        fill
                        className="object-contain p-1"
                        sizes="56px"
                      />
                    </div>

                    <p className="text-sm font-extrabold">{object.name}</p>

                    <CheckCircle2
                      className="h-5 w-5"
                      style={{ color: activePack.color }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold">Prix du pack</p>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p
                    className="text-4xl font-extrabold"
                    style={{ color: activePack.color }}
                  >
                    {activePack.price} €
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    par mois
                  </p>
                </div>

                <div className="text-right text-xs leading-5 text-slate-500">
                  Installation possible
                  <br />
                  objets connectés inclus
                </div>
              </div>

              <Link
                href={activePack.href}
                className="mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: activePack.color }}
              >
                Découvrir ce pack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 rounded-[24px] bg-emerald-50 p-5">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0B8A4A]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-base font-extrabold text-[#0B8A4A]">
                    Le bénéfice famille
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Voir les bons signaux au bon moment, sans transformer le
                    domicile en lieu de surveillance.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}