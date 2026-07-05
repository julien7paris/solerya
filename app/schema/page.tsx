"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type PackKey = "serenite" | "confort" | "autonomie" | "signature";

type Pack = {
  level: number;
  shortName: string;
  name: string;
  price: string;
  color: string;
  soft: string;
  glow: string;
  href: string;
  text: string;
};

type ConnectedObject = {
  id: string;
  name: string;
  pack: PackKey;
  image: string;
  x: string;
  y: string;
};

const packs: Record<PackKey, Pack> = {
  serenite: {
    level: 1,
    shortName: "Sérénité",
    name: "Solerya Sérénité",
    price: "39",
    color: "#0B8A4A",
    soft: "#EAF8F0",
    glow: "rgba(11, 138, 74, 0.28)",
    href: "/packs/serenite",
    text: "Les essentiels pour rassurer les proches et sécuriser le quotidien.",
  },

  confort: {
    level: 2,
    shortName: "Confort",
    name: "Solerya Confort",
    price: "59",
    color: "#0967D2",
    soft: "#EAF4FF",
    glow: "rgba(9, 103, 210, 0.28)",
    href: "/packs/confort",
    text: "Tout le pack Sérénité, avec une protection renforcée du logement.",
  },

  autonomie: {
    level: 3,
    shortName: "Autonomie",
    name: "Solerya Autonomie",
    price: "79",
    color: "#8E44CC",
    soft: "#F5ECFF",
    glow: "rgba(142, 68, 204, 0.28)",
    href: "/packs/autonomie",
    text: "Tout le pack Confort, avec des repères sur le rythme de vie et les déplacements.",
  },

  signature: {
    level: 4,
    shortName: "Signature",
    name: "Solerya Signature",
    price: "99",
    color: "#F25A1D",
    soft: "#FFF1E6",
    glow: "rgba(242, 90, 29, 0.30)",
    href: "/packs/signature",
    text: "La solution complète : tous les équipements Solerya réunis dans un même pack.",
  },
};

const objects: ConnectedObject[] = [
  // PACK SÉRÉNITÉ
  {
    id: "bouton-sos",
    name: "Bouton SOS",
    pack: "serenite",
    image: "/objets/bouton-sos.jpg",
    x: "10%",
    y: "17%",
  },
  {
    id: "application",
    name: "Application famille",
    pack: "serenite",
    image: "/objets/application.jpg",
    x: "10%",
    y: "51%",
  },
  {
    id: "ouverture",
    name: "Détecteur d’ouverture",
    pack: "serenite",
    image: "/objets/detecteur-ouverture-porte.jpg",
    x: "25%",
    y: "82%",
  },

  // PACK CONFORT
  {
    id: "temperature",
    name: "Température & humidité",
    pack: "confort",
    image: "/objets/capteur-de-temperature-et-d-humidite.jpg",
    x: "88%",
    y: "17%",
  },
  {
    id: "fumee",
    name: "Détecteur de fumée",
    pack: "confort",
    image: "/objets/detecteur-fumee.jpg",
    x: "90%",
    y: "51%",
  },
  {
    id: "fuite",
    name: "Détecteur de fuite",
    pack: "confort",
    image: "/objets/fuites.jpg",
    x: "77%",
    y: "82%",
  },

  // PACK AUTONOMIE
  {
    id: "presence",
    name: "Capteur de présence",
    pack: "autonomie",
    image: "/objets/capteur-presence.jpg",
    x: "29%",
    y: "9%",
  },
  {
    id: "mouvement",
    name: "Capteur de mouvement",
    pack: "autonomie",
    image: "/objets/capteur-mouvement-veilleuse.jpg",
    x: "48%",
    y: "7%",
  },
  {
    id: "chemin-lumineux",
    name: "Chemin lumineux",
    pack: "autonomie",
    image: "/objets/chemin-lumineux.jpg",
    x: "50%",
    y: "89%",
  },

  // PACK SIGNATURE
  {
    id: "arret-vanne",
    name: "Arrêt de vanne",
    pack: "signature",
    image: "/objets/arret-vanne.jpg",
    x: "20%",
    y: "34%",
  },
  {
    id: "home-assistant",
    name: "Hub Home Assistant",
    pack: "signature",
    image: "/objets/home-assistant.jpg",
    x: "67%",
    y: "15%",
  },
  {
    id: "refrigerateur",
    name: "Capteur réfrigérateur",
    pack: "signature",
    image: "/objets/refregirateur.jpg",
    x: "80%",
    y: "34%",
  },
  {
    id: "sirene",
    name: "Sirène connectée",
    pack: "signature",
    image: "/objets/sirene.jpg",
    x: "69%",
    y: "67%",
  },
];

export default function SchemaPage() {
  const [activePackKey, setActivePackKey] =
    useState<PackKey>("serenite");

  const [selectedObjectId, setSelectedObjectId] =
    useState<string | null>("bouton-sos");

  const activePack = packs[activePackKey];

  const includedObjects = objects.filter((object) => {
    return packs[object.pack].level <= activePack.level;
  });

  function selectPack(packKey: PackKey) {
    setActivePackKey(packKey);
    setSelectedObjectId(null);
  }

  function selectObject(object: ConnectedObject) {
    setActivePackKey(object.pack);
    setSelectedObjectId(object.id);
  }

  return (
    <main className="min-h-screen bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto max-w-[1450px] px-5 py-8 lg:px-8">
        <div className="grid gap-7 xl:grid-cols-[minmax(0,1.32fr)_minmax(390px,0.68fr)] xl:items-start">
          {/* =========================
              ÉCOSYSTÈME PRINCIPAL
          ========================== */}

          <div className="min-w-0 rounded-[38px] bg-white p-5 shadow-[0_24px_80px_rgba(8,18,46,0.10)] md:p-6">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-extrabold text-[#F58220]">
                  Écosystème connecté
                </p>

                <h1 className="mt-1 text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">
                  Solerya autour du senior
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Cliquez sur un équipement ou directement sur un pack.
                </p>
              </div>

              <div
                className="shrink-0 rounded-full px-5 py-2.5 text-sm font-extrabold"
                style={{
                  backgroundColor: activePack.soft,
                  color: activePack.color,
                }}
              >
                {activePack.name}
              </div>
            </div>

            {/* ZONE DES OBJETS */}
            <div
              className="relative min-h-[800px] overflow-hidden rounded-[34px] border border-slate-100 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF3F8]"
              style={{
                boxShadow: `inset 0 0 90px ${activePack.glow}`,
              }}
            >
              {/* FOND LUMINEUX */}
              <div
                className="pointer-events-none absolute inset-0 transition-all duration-500"
                style={{
                  background: `radial-gradient(
                    circle at 50% 45%,
                    ${activePack.glow} 0%,
                    transparent 47%
                  )`,
                }}
              />

              {/* CERCLE INTÉRIEUR */}
              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed transition-colors duration-500"
                style={{
                  borderColor: `${activePack.color}55`,
                }}
              />

              {/* CERCLE EXTÉRIEUR */}
              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed transition-colors duration-500"
                style={{
                  borderColor: `${activePack.color}35`,
                }}
              />

              {/* PHOTO SENIOR */}
              <div
                className="absolute left-1/2 top-[45%] z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[12px] border-white transition-shadow duration-500"
                style={{
                  boxShadow: `0 30px 80px ${activePack.glow}`,
                }}
              >
                <Image
                  src="/images/senior.jpg"
                  alt="Seniors accompagnés par Solerya"
                  fill
                  priority
                  className="object-cover"
                  sizes="350px"
                />
              </div>

              {/* OBJETS CONNECTÉS */}
              {objects.map((object) => {
                const objectPack = packs[object.pack];

                const isIncluded =
                  objectPack.level <= activePack.level;

                const isSelected =
                  selectedObjectId === object.id;

                return (
                  <button
                    key={object.id}
                    type="button"
                    onClick={() => selectObject(object)}
                    className={`absolute z-20 w-[124px] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border bg-white p-2.5 text-center transition-all duration-500 ${
                      isIncluded
                        ? "scale-100 opacity-100"
                        : "scale-[0.88] border-slate-200 opacity-25 grayscale"
                    } ${
                      isSelected
                        ? "z-30 scale-110"
                        : ""
                    }`}
                    style={{
                      left: object.x,
                      top: object.y,

                      borderColor: isIncluded
                        ? activePack.color
                        : "#E2E8F0",

                      boxShadow: isIncluded
                        ? isSelected
                          ? `0 24px 60px ${activePack.glow}`
                          : `0 14px 34px ${activePack.glow}`
                        : "none",
                    }}
                  >
                    <div className="relative mx-auto h-[76px] w-[76px] overflow-hidden rounded-[15px] bg-white">
                      <Image
                        src={object.image}
                        alt={object.name}
                        fill
                        className="object-contain p-1"
                        sizes="76px"
                      />
                    </div>

                    <p
                      className="mt-2.5 min-h-[32px] text-[11px] font-extrabold leading-[1.35]"
                      style={{
                        color: isIncluded
                          ? activePack.color
                          : "#64748B",
                      }}
                    >
                      {object.name}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* =========================
                SÉLECTEUR DES PACKS
            ========================== */}

            <div className="relative z-40 -mt-2 rounded-[30px] border border-white bg-white p-4 shadow-[0_24px_60px_rgba(8,18,46,0.14)]">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {(Object.entries(packs) as [PackKey, Pack][]).map(
                  ([key, pack]) => {
                    const selected = key === activePackKey;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => selectPack(key)}
                        className="rounded-[20px] px-4 py-4 text-left transition-all duration-300 hover:-translate-y-1"
                        style={{
                          backgroundColor: selected
                            ? pack.soft
                            : "#F8FAFC",

                          boxShadow: selected
                            ? `0 12px 30px ${pack.glow}`
                            : "none",
                        }}
                      >
                        <p
                          className="text-sm font-extrabold"
                          style={{
                            color: pack.color,
                          }}
                        >
                          Solerya
                        </p>

                        <p
                          className="text-base font-extrabold"
                          style={{
                            color: pack.color,
                          }}
                        >
                          {pack.shortName}
                        </p>

                        <p className="mt-2 text-xs font-semibold text-slate-500">
                          Dès {pack.price} €/mois
                        </p>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* =========================
              PANNEAU DROIT
          ========================== */}

          <aside className="rounded-[38px] border border-orange-100 bg-white p-6 shadow-[0_24px_80px_rgba(8,18,46,0.10)] xl:sticky xl:top-28">
            {/* PACK ACTIF */}

            <div
              className="rounded-[28px] p-6 transition-colors duration-500"
              style={{
                backgroundColor: activePack.soft,
              }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm"
                style={{
                  color: activePack.color,
                }}
              >
                <Sparkles className="h-7 w-7" />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Pack sélectionné
              </p>

              <h2
                className="mt-2 text-3xl font-extrabold tracking-[-0.03em]"
                style={{
                  color: activePack.color,
                }}
              >
                {activePack.name}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                {activePack.text}
              </p>
            </div>

            {/* OBJETS INCLUS */}

            <div className="mt-6 rounded-[28px] bg-[#F8FAFC] p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-base font-extrabold">
                  Objets inclus
                </p>

                <div
                  className="rounded-full px-3 py-1 text-xs font-extrabold"
                  style={{
                    backgroundColor: activePack.soft,
                    color: activePack.color,
                  }}
                >
                  {includedObjects.length} équipements
                </div>
              </div>

              <div className="mt-4 max-h-[470px] space-y-3 overflow-y-auto pr-2">
                {includedObjects.map((object) => {
                  const isSelected =
                    selectedObjectId === object.id;

                  return (
                    <button
                      key={object.id}
                      type="button"
                      onClick={() => selectObject(object)}
                      className="grid w-full grid-cols-[58px_1fr_24px] items-center gap-4 rounded-[20px] border bg-white p-3 text-left transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: isSelected
                          ? activePack.color
                          : "transparent",

                        boxShadow: isSelected
                          ? `0 12px 32px ${activePack.glow}`
                          : "0 8px 24px rgba(8,18,46,0.06)",
                      }}
                    >
                      <div
                        className="relative h-13 w-13 overflow-hidden rounded-2xl bg-white"
                        style={{
                          outline: `2px solid ${activePack.color}`,
                        }}
                      >
                        <Image
                          src={object.image}
                          alt={object.name}
                          fill
                          className="object-contain p-1"
                          sizes="52px"
                        />
                      </div>

                      <p className="text-sm font-extrabold">
                        {object.name}
                      </p>

                      <CheckCircle2
                        className="h-5 w-5"
                        style={{
                          color: activePack.color,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PRIX */}

            <div className="mt-6 rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold">
                Prix du pack
              </p>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p
                    className="text-4xl font-extrabold"
                    style={{
                      color: activePack.color,
                    }}
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
                  équipements connectés inclus
                </div>
              </div>

              <Link
                href={activePack.href}
                className="mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: activePack.color,
                }}
              >
                Découvrir ce pack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* BÉNÉFICE */}

            <div className="mt-5 rounded-[24px] bg-emerald-50 p-5">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0B8A4A]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-base font-extrabold text-[#0B8A4A]">
                    Le bénéfice pour la famille
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Des informations simples et utiles pour rassurer les proches,
                    sans transformer le domicile en lieu de surveillance.
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