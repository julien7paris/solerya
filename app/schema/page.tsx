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
    glow: "rgba(11, 138, 74, 0.26)",
    href: "/packs/serenite",
    text: "Les essentiels pour rassurer les proches et sécuriser le quotidien.",
    appImage: "/objets/application-serenite.jpg",
  },
  confort: {
    level: 2,
    shortName: "Confort",
    name: "Solerya Confort",
    price: "59",
    color: "#0967D2",
    soft: "#EAF4FF",
    glow: "rgba(9, 103, 210, 0.24)",
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
    glow: "rgba(142, 68, 204, 0.24)",
    href: "/packs/autonomie",
    text: "Tout le pack Confort, avec des repères sur le rythme de vie.",
    appImage: "/objets/application-autonomie.jpg",
  },
  signature: {
    level: 4,
    shortName: "Signature",
    name: "Solerya Signature",
    price: "99",
    color: "#F25A1D",
    soft: "#FFF1E6",
    glow: "rgba(242, 90, 29, 0.26)",
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
    y: "78%",
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
    id: "fumee",
    name: "Détecteur de fumée",
    pack: "confort",
    image: "/objets/detecteur-fumee.jpg",
    x: "89%",
    y: "50%",
  },
  {
    id: "fuite",
    name: "Détecteur de fuite",
    pack: "confort",
    image: "/objets/fuites.jpg",
    x: "76%",
    y: "78%",
  },
  {
    id: "presence",
    name: "Capteur de présence",
    pack: "autonomie",
    image: "/objets/capteur-presence.jpg",
    x: "31%",
    y: "9%",
  },
  {
    id: "mouvement",
    name: "Capteur de mouvement",
    pack: "autonomie",
    image: "/objets/capteur-mouvement-veilleuse.jpg",
    x: "49%",
    y: "8%",
  },
  {
    id: "chemin-lumineux",
    name: "Chemin lumineux",
    pack: "autonomie",
    image: "/objets/chemin-lumineux.jpg",
    x: "50%",
    y: "84%",
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
    y: "65%",
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
      <section className="mx-auto max-w-[1400px] px-5 py-5 lg:px-7">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.22fr)_minmax(360px,0.78fr)] xl:items-start">
          <div className="min-w-0 rounded-[32px] bg-white p-4 shadow-[0_20px_60px_rgba(8,18,46,0.09)] md:p-5">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-extrabold text-[#F58220]">
                  Écosystème connecté
                </p>

                <h1 className="mt-1 text-2xl font-extrabold tracking-[-0.02em]">
                  Solerya autour du senior
                </h1>
              </div>

              <div
                className="shrink-0 rounded-full px-4 py-2 text-sm font-extrabold"
                style={{
                  backgroundColor: activePack.soft,
                  color: activePack.color,
                }}
              >
                {activePack.name}
              </div>
            </div>

            <div
              className="relative min-h-[660px] overflow-hidden rounded-[28px] border border-slate-100 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF3F8]"
              style={{
                boxShadow: `inset 0 0 80px ${activePack.glow}`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 45%, ${activePack.glow} 0%, transparent 46%)`,
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}55` }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}35` }}
              />

              <div
                className="absolute left-1/2 top-[45%] z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[10px] border-white"
                style={{
                  boxShadow: `0 24px 70px ${activePack.glow}`,
                }}
              >
                <Image
                  src="/images/senior.jpg"
                  alt="Seniors accompagnés par Solerya"
                  fill
                  priority
                  className="object-cover"
                  sizes="300px"
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
                    className={`absolute z-20 w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-[19px] border bg-white p-2 text-center transition-all duration-500 ${
                      isIncluded
                        ? "scale-100 opacity-100"
                        : "scale-[0.88] border-slate-200 opacity-25 grayscale"
                    } ${isSelected ? "z-30 scale-105" : ""}`}
                    style={{
                      left: object.x,
                      top: object.y,
                      borderColor: isIncluded ? activePack.color : "#E2E8F0",
                      boxShadow: isIncluded
                        ? isSelected
                          ? `0 20px 50px ${activePack.glow}`
                          : `0 12px 28px ${activePack.glow}`
                        : "none",
                    }}
                  >
                    <div className="relative mx-auto h-[62px] w-[62px] overflow-hidden rounded-[14px] bg-white">
                      <Image
                        src={getImage(object)}
                        alt={object.name}
                        fill
                        className="object-contain p-1"
                        sizes="62px"
                      />
                    </div>

                    <p
                      className="mt-2 min-h-[28px] text-[10.5px] font-extrabold leading-[1.3]"
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

            <div className="relative z-40 -mt-1 rounded-[26px] border border-white bg-white p-3 shadow-[0_20px_50px_rgba(8,18,46,0.12)]">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {(Object.entries(packs) as [PackKey, Pack][]).map(
                  ([key, pack]) => {
                    const selected = key === activePackKey;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => selectPack(key)}
                        className="rounded-[18px] px-4 py-3 text-left transition-all duration-300 hover:-translate-y-1"
                        style={{
                          backgroundColor: selected ? pack.soft : "#F8FAFC",
                          boxShadow: selected
                            ? `0 10px 24px ${pack.glow}`
                            : "none",
                        }}
                      >
                        <p
                          className="text-sm font-extrabold"
                          style={{ color: pack.color }}
                        >
                          Solerya
                        </p>

                        <p
                          className="text-base font-extrabold"
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

          <aside className="rounded-[32px] border border-orange-100 bg-white p-5 shadow-[0_20px_60px_rgba(8,18,46,0.09)] xl:sticky xl:top-24">
            <div
              className="rounded-[24px] p-5"
              style={{ backgroundColor: activePack.soft }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm"
                style={{ color: activePack.color }}
              >
                <Sparkles className="h-6 w-6" />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Pack sélectionné
              </p>

              <h2
                className="mt-2 text-2xl font-extrabold tracking-[-0.03em]"
                style={{ color: activePack.color }}
              >
                {activePack.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                {activePack.text}
              </p>
            </div>

            <div className="mt-4 rounded-[24px] bg-[#F8FAFC] p-4">
              <div className="flex items-center justify-between gap-4">
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

              <div className="mt-3 max-h-[340px] space-y-2.5 overflow-y-auto pr-2">
                {includedObjects.map((object) => {
                  const isSelected = selectedObjectId === object.id;

                  return (
                    <button
                      key={object.id}
                      type="button"
                      onClick={() => selectObject(object)}
                      className="grid w-full grid-cols-[54px_1fr_22px] items-center gap-3 rounded-[18px] border bg-white p-2.5 text-left transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: isSelected
                          ? activePack.color
                          : "transparent",
                        boxShadow: isSelected
                          ? `0 10px 26px ${activePack.glow}`
                          : "0 7px 20px rgba(8,18,46,0.05)",
                      }}
                    >
                      <div
                        className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white"
                        style={{ outline: `2px solid ${activePack.color}` }}
                      >
                        <Image
                          src={getImage(object)}
                          alt={object.name}
                          fill
                          className="object-contain p-1"
                          sizes="48px"
                        />
                      </div>

                      <p className="text-sm font-extrabold">{object.name}</p>

                      <CheckCircle2
                        className="h-5 w-5"
                        style={{ color: activePack.color }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 rounded-[24px] border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-extrabold">Prix du pack</p>

              <div className="mt-3 flex items-end justify-between gap-4">
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
                  équipements connectés inclus
                </div>
              </div>

              <Link
                href={activePack.href}
                className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: activePack.color }}
              >
                Découvrir ce pack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-4 rounded-[22px] bg-emerald-50 p-4">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0B8A4A]">
                  <ShieldCheck className="h-5 w-5" />
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