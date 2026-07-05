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
  appImage: string;
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
    glow: "rgba(11, 138, 74, 0.24)",
    href: "/packs/serenite",
    text: "Les essentiels pour rassurer les proches, détecter l’activité et sécuriser le quotidien.",
    appImage: "/objets/application-serenite.jpg",
  },
  confort: {
    level: 2,
    shortName: "Confort",
    name: "Solerya Confort",
    price: "59",
    color: "#0967D2",
    soft: "#EAF4FF",
    glow: "rgba(9, 103, 210, 0.22)",
    href: "/packs/confort",
    text: "Tout le pack Sérénité, avec une protection renforcée du logement.",
    appImage: "/objets/application-confort.jpg",
  },
  autonomie: {
    level: 3,
    shortName: "Autonomie",
    name: "Solerya Autonomie",
    price: "79",
    color: "#8E44CC",
    soft: "#F5ECFF",
    glow: "rgba(142, 68, 204, 0.22)",
    href: "/packs/autonomie",
    text: "Tout le pack Confort, avec des repères plus précis sur le rythme de vie.",
    appImage: "/objets/application-autonomie.jpg",
  },
  signature: {
    level: 4,
    shortName: "Signature",
    name: "Solerya Signature",
    price: "99",
    color: "#F25A1D",
    soft: "#FFF1E6",
    glow: "rgba(242, 90, 29, 0.24)",
    href: "/packs/signature",
    text: "La solution complète : tous les équipements Solerya réunis.",
    appImage: "/objets/application-signature.jpg",
  },
};

const objects: ConnectedObject[] = [
  {
    id: "bouton-sos",
    name: "Bouton SOS",
    pack: "serenite",
    image: "/objets/bouton-sos.jpg",
    x: "10%",
    y: "16%",
  },
  {
    id: "application",
    name: "Application famille",
    pack: "serenite",
    image: "application",
    x: "10%",
    y: "50%",
  },
  {
    id: "ouverture",
    name: "Détecteur d’ouverture",
    pack: "serenite",
    image: "/objets/detecteur-ouverture-porte.jpg",
    x: "25%",
    y: "77%",
  },
  {
    id: "mouvement",
    name: "Capteur de mouvement",
    pack: "serenite",
    image: "/objets/capteur-mouvement-veilleuse.jpg",
    x: "49%",
    y: "9%",
  },
  {
    id: "fumee",
    name: "Détecteur de fumée",
    pack: "serenite",
    image: "/objets/detecteur-fumee.jpg",
    x: "89%",
    y: "50%",
  },
  {
    id: "temperature",
    name: "Température & humidité",
    pack: "confort",
    image: "/objets/capteur-de-temperature-et-d-humidite.jpg",
    x: "88%",
    y: "16%",
  },
  {
    id: "fuite",
    name: "Détecteur de fuite",
    pack: "confort",
    image: "/objets/fuites.jpg",
    x: "76%",
    y: "77%",
  },
  {
    id: "presence",
    name: "Capteur de présence",
    pack: "autonomie",
    image: "/objets/capteur-presence.jpg",
    x: "31%",
    y: "10%",
  },
  {
    id: "chemin-lumineux",
    name: "Chemin lumineux",
    pack: "autonomie",
    image: "/objets/chemin-lumineux.jpg",
    x: "50%",
    y: "83%",
  },
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
    x: "68%",
    y: "64%",
  },
];

export default function SchemaPage() {
  const [activePackKey, setActivePackKey] = useState<PackKey>("serenite");
  const [selectedObjectId, setSelectedObjectId] =
    useState<string | null>("bouton-sos");

  const activePack = packs[activePackKey];

  const includedObjects = objects.filter(
    (object) => packs[object.pack].level <= activePack.level
  );

  function getImage(object: ConnectedObject) {
    if (object.image === "application") {
      return activePack.appImage;
    }

    return object.image;
  }

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
      <section className="mx-auto max-w-[1500px] px-4 py-4 lg:px-6">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.22fr)_minmax(420px,0.78fr)] xl:items-start">
          <div className="min-w-0 rounded-[28px] bg-white p-4 shadow-[0_18px_50px_rgba(8,18,46,0.08)]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#F58220]">
                  Écosystème connecté
                </p>

                <h1 className="mt-1 text-2xl font-extrabold tracking-[-0.03em]">
                  Solerya autour du senior
                </h1>
              </div>

              <div
                className="shrink-0 rounded-full px-4 py-2 text-xs font-extrabold"
                style={{
                  backgroundColor: activePack.soft,
                  color: activePack.color,
                }}
              >
                {activePack.name}
              </div>
            </div>

            <div
              className="relative min-h-[555px] overflow-hidden rounded-[24px] border border-slate-100 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF3F8]"
              style={{
                boxShadow: `inset 0 0 70px ${activePack.glow}`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 45%, ${activePack.glow} 0%, transparent 46%)`,
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}55` }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}35` }}
              />

              <div
                className="absolute left-1/2 top-[45%] z-10 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[9px] border-white"
                style={{
                  boxShadow: `0 22px 60px ${activePack.glow}`,
                }}
              >
                <Image
                  src="/images/senior.jpg"
                  alt="Seniors accompagnés par Solerya"
                  fill
                  priority
                  className="object-cover"
                  sizes="245px"
                />
              </div>

              {objects.map((object) => {
                const objectPack = packs[object.pack];
                const isIncluded = objectPack.level <= activePack.level;
                const isSelected = selectedObjectId === object.id;

                return (
                  <button
                    key={object.id}
                    type="button"
                    onClick={() => selectObject(object)}
                    className={`absolute z-20 w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-[17px] border bg-white p-1.5 text-center transition-all duration-500 ${
                      isIncluded
                        ? "scale-100 opacity-100"
                        : "scale-[0.86] border-slate-200 opacity-22 grayscale"
                    } ${isSelected ? "z-30 scale-105" : ""}`}
                    style={{
                      left: object.x,
                      top: object.y,
                      borderColor: isIncluded ? activePack.color : "#E2E8F0",
                      boxShadow: isIncluded
                        ? isSelected
                          ? `0 18px 42px ${activePack.glow}`
                          : `0 10px 24px ${activePack.glow}`
                        : "none",
                    }}
                  >
                    <div className="relative mx-auto h-[50px] w-[50px] overflow-hidden rounded-[12px] bg-white">
                      <Image
                        src={getImage(object)}
                        alt={object.name}
                        fill
                        className="object-contain p-0.5"
                        sizes="50px"
                      />
                    </div>

                    <p
                      className="mt-1.5 min-h-[24px] text-[9.5px] font-extrabold leading-[1.25]"
                      style={{
                        color: isIncluded ? activePack.color : "#64748B",
                      }}
                    >
                      {object.name}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="relative z-40 -mt-1 rounded-[22px] border border-white bg-white p-2.5 shadow-[0_16px_40px_rgba(8,18,46,0.10)]">
              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {(Object.entries(packs) as [PackKey, Pack][]).map(
                  ([key, pack]) => {
                    const selected = key === activePackKey;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => selectPack(key)}
                        className="rounded-[16px] px-3.5 py-3 text-left transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: selected ? pack.soft : "#F8FAFC",
                          boxShadow: selected
                            ? `0 8px 20px ${pack.glow}`
                            : "none",
                        }}
                      >
                        <p
                          className="text-xs font-extrabold"
                          style={{ color: pack.color }}
                        >
                          Solerya
                        </p>

                        <p
                          className="text-base font-extrabold leading-tight"
                          style={{ color: pack.color }}
                        >
                          {pack.shortName}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          Dès {pack.price} €/mois
                        </p>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <aside className="rounded-[28px] border border-orange-100 bg-white p-4 shadow-[0_18px_50px_rgba(8,18,46,0.08)] xl:sticky xl:top-20">
            <div
              className="rounded-[22px] p-4"
              style={{ backgroundColor: activePack.soft }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm"
                style={{ color: activePack.color }}
              >
                <Sparkles className="h-5 w-5" />
              </div>

              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Pack sélectionné
              </p>

              <h2
                className="mt-1 text-2xl font-extrabold tracking-[-0.03em]"
                style={{ color: activePack.color }}
              >
                {activePack.name}
              </h2>

              <p className="mt-2 text-sm leading-5 text-slate-700">
                {activePack.text}
              </p>
            </div>

            <div className="mt-3 rounded-[22px] bg-[#F8FAFC] p-3.5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-extrabold">Objets inclus</p>

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

              <div className="mt-3 grid max-h-none grid-cols-2 gap-2">
                {includedObjects.map((object) => {
                  const isSelected = selectedObjectId === object.id;

                  return (
                    <button
                      key={object.id}
                      type="button"
                      onClick={() => selectObject(object)}
                      className="grid grid-cols-[38px_1fr] items-center gap-2 rounded-[15px] border bg-white p-2 text-left transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: isSelected
                          ? activePack.color
                          : "transparent",
                        boxShadow: isSelected
                          ? `0 8px 20px ${activePack.glow}`
                          : "0 6px 16px rgba(8,18,46,0.045)",
                      }}
                    >
                      <div
                        className="relative h-9 w-9 overflow-hidden rounded-xl bg-white"
                        style={{
                          outline: `1.5px solid ${activePack.color}`,
                        }}
                      >
                        <Image
                          src={getImage(object)}
                          alt={object.name}
                          fill
                          className="object-contain p-0.5"
                          sizes="36px"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="line-clamp-2 text-[11px] font-extrabold leading-tight">
                          {object.name}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 rounded-[22px] border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold">Prix du pack</p>

                  <p
                    className="mt-2 text-4xl font-extrabold leading-none"
                    style={{ color: activePack.color }}
                  >
                    {activePack.price} €
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    par mois
                  </p>
                </div>

                <div className="mt-7 text-right text-xs leading-5 text-slate-500">
                  Installation possible
                  <br />
                  équipements inclus
                </div>
              </div>

              <Link
                href={activePack.href}
                className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: activePack.color }}
              >
                Découvrir ce pack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-3 rounded-[20px] bg-emerald-50 p-3.5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0B8A4A]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#0B8A4A]">
                    Le bénéfice pour la famille
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    Des informations simples pour rassurer les proches, sans
                    transformer le domicile en lieu de surveillance.
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