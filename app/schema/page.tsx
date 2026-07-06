"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

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
  quantities: Record<PackKey, number>;
};

const packs: Record<PackKey, Pack> = {
  serenite: {
    level: 1,
    shortName: "Sérénité",
    name: "Solerya Sérénité",
    price: "49",
    color: "#0B8A4A",
    soft: "#EAF8F0",
    glow: "rgba(11,138,74,0.22)",
    href: "/packs/serenite",
    text: "Le socle essentiel pour rassurer les proches et sécuriser le quotidien.",
    appImage: "/objets/application-serenite.jpg",
  },
  confort: {
    level: 2,
    shortName: "Confort",
    name: "Solerya Confort",
    price: "59",
    color: "#0967D2",
    soft: "#EAF4FF",
    glow: "rgba(9,103,210,0.22)",
    href: "/packs/confort",
    text: "Sérénité + une protection renforcée du logement.",
    appImage: "/objets/application-confort.jpg",
  },
  autonomie: {
    level: 3,
    shortName: "Autonomie",
    name: "Solerya Autonomie",
    price: "79",
    color: "#8E44CC",
    soft: "#F5ECFF",
    glow: "rgba(142,68,204,0.22)",
    href: "/packs/autonomie",
    text: "Confort + des repères discrets sur le rythme de vie.",
    appImage: "/objets/application-autonomie.jpg",
  },
  signature: {
    level: 4,
    shortName: "Signature",
    name: "Solerya Signature",
    price: "99",
    color: "#F25A1D",
    soft: "#FFF1E6",
    glow: "rgba(242,90,29,0.24)",
    href: "/packs/signature",
    text: "La solution complète avec tous les équipements Solerya.",
    appImage: "/objets/application-signature.jpg",
  },
};

const objects: ConnectedObject[] = [
  {
    id: "passerelle",
    name: "Passerelle Solerya",
    pack: "serenite",
    image: "/objets/home-assistant.jpg",
    x: "67%",
    y: "16%",
    quantities: { serenite: 1, confort: 1, autonomie: 1, signature: 1 },
  },
  {
    id: "coordinateur",
    name: "Coordinateur Zigbee",
    pack: "serenite",
    image: "/objets/home-assistant.jpg",
    x: "60%",
    y: "84%",
    quantities: { serenite: 1, confort: 1, autonomie: 1, signature: 1 },
  },
  {
    id: "bouton-sos",
    name: "Bouton SOS",
    pack: "serenite",
    image: "/objets/bouton-sos.jpg",
    x: "10%",
    y: "20%",
    quantities: { serenite: 1, confort: 1, autonomie: 1, signature: 2 },
  },
  {
    id: "application",
    name: "Application famille",
    pack: "serenite",
    image: "application",
    x: "10%",
    y: "50%",
    quantities: { serenite: 1, confort: 1, autonomie: 1, signature: 1 },
  },
  {
    id: "ouverture",
    name: "Détecteur porte",
    pack: "serenite",
    image: "/objets/detecteur-ouverture-porte.jpg",
    x: "25%",
    y: "78%",
    quantities: { serenite: 1, confort: 1, autonomie: 1, signature: 1 },
  },
  {
    id: "mouvement-principal",
    name: "Détecteur de Mouvement",
    pack: "serenite",
    image: "/objets/capteur-mouvement-veilleuse.jpg",
    x: "50%",
    y: "16%",
    quantities: { serenite: 1, confort: 1, autonomie: 1, signature: 1 },
  },
  {
    id: "fumee",
    name: "Détecteur fumée",
    pack: "serenite",
    image: "/objets/detecteur-fumee.jpg",
    x: "90%",
    y: "50%",
    quantities: { serenite: 1, confort: 1, autonomie: 1, signature: 1 },
  },
  {
    id: "chemin-lumineux",
    name: "Chemins lumineux",
    pack: "confort",
    image: "/objets/chemin-lumineux.jpg",
    x: "52%",
    y: "84%",
    quantities: { serenite: 0, confort: 3, autonomie: 3, signature: 3 },
  },
  {
    id: "mouvements-complementaires",
    name: "Mouvements complémentaires",
    pack: "confort",
    image: "/objets/capteur-mouvement-veilleuse.jpg",
    x: "33%",
    y: "16%",
    quantities: { serenite: 0, confort: 2, autonomie: 2, signature: 2 },
  },
  {
    id: "fuite",
    name: "Détecteur fuite",
    pack: "confort",
    image: "/objets/fuites.jpg",
    x: "78%",
    y: "78%",
    quantities: { serenite: 0, confort: 1, autonomie: 1, signature: 3 },
  },
  {
    id: "temperature",
    name: "Temp. & humidité",
    pack: "confort",
    image: "/objets/capteur-de-temperature-et-d-humidite.jpg",
    x: "88%",
    y: "20%",
    quantities: { serenite: 0, confort: 1, autonomie: 1, signature: 1 },
  },
  {
    id: "presence",
    name: "Capteurs présence",
    pack: "autonomie",
    image: "/objets/capteur-presence.jpg",
    x: "42%",
    y: "24%",
    quantities: { serenite: 0, confort: 0, autonomie: 2, signature: 3 },
  },
  {
    id: "frigo",
    name: "Ouverture frigo",
    pack: "autonomie",
    image: "/objets/refregirateur.jpg",
    x: "79%",
    y: "36%",
    quantities: { serenite: 0, confort: 0, autonomie: 1, signature: 1 },
  },
  {
    id: "prise",
    name: "Prise suivi usage",
    pack: "autonomie",
    image: "/objets/prise-connecte-mesure-de-consommation.jpg",
    x: "59%",
    y: "62%",
    quantities: { serenite: 0, confort: 0, autonomie: 1, signature: 1 },
  },
  {
    id: "arret-vanne",
    name: "Arrêt de vanne",
    pack: "signature",
    image: "/objets/arret-vanne.jpg",
    x: "20%",
    y: "36%",
    quantities: { serenite: 0, confort: 0, autonomie: 0, signature: 1 },
  },
  {
    id: "sirene",
    name: "Sirène",
    pack: "signature",
    image: "/objets/sirene.jpg",
    x: "70%",
    y: "70%",
    quantities: { serenite: 0, confort: 0, autonomie: 0, signature: 1 },
  },
];

export default function SchemaPage() {
  const [activePackKey, setActivePackKey] = useState<PackKey>("serenite");
  const [selectedObjectId, setSelectedObjectId] =
    useState<string | null>("bouton-sos");

  const activePack = packs[activePackKey];

  const includedObjects = objects.filter(
    (object) => object.quantities[activePackKey] > 0
  );

  const equipmentCount = includedObjects.reduce(
    (total, object) => total + object.quantities[activePackKey],
    0
  );

  function getImage(object: ConnectedObject) {
    return object.image === "application" ? activePack.appImage : object.image;
  }

  function selectPack(packKey: PackKey) {
    setActivePackKey(packKey);
    setSelectedObjectId(null);
  }

  function selectObject(object: ConnectedObject) {
    const isAlreadyIncluded = object.quantities[activePackKey] > 0;

    if (!isAlreadyIncluded) {
      setActivePackKey(object.pack);
    }

    setSelectedObjectId(object.id);
  }

  return (
    <main className="h-[calc(100vh-96px)] overflow-hidden bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto h-full max-w-[1540px] px-4 py-3 lg:px-5">
        <div className="grid h-full gap-4 xl:grid-cols-[minmax(0,1.22fr)_minmax(430px,0.78fr)]">
          <div className="flex min-h-0 min-w-0 flex-col rounded-[28px] bg-white p-3 shadow-[0_16px_45px_rgba(8,18,46,0.08)]">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-lg font-extrabold tracking-[-0.03em]">
                Maison Solerya
              </p>

              <div
                className="rounded-full px-4 py-1.5 text-xs font-extrabold"
                style={{
                  backgroundColor: activePack.soft,
                  color: activePack.color,
                }}
              >
                {activePack.name}
              </div>
            </div>

            <div
              className="relative min-h-0 flex-1 overflow-hidden rounded-[24px] border border-slate-100 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF3F8]"
              style={{
                boxShadow: `inset 0 0 65px ${activePack.glow}`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 45%, ${activePack.glow} 0%, transparent 46%)`,
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}55` }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{ borderColor: `${activePack.color}35` }}
              />

              <div
                className="absolute left-1/2 top-[45%] z-10 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[8px] border-white"
                style={{ boxShadow: `0 20px 55px ${activePack.glow}` }}
              >
                <Image
                  src="/images/senior.jpg"
                  alt="Seniors accompagnés par Solerya"
                  fill
                  priority
                  className="object-cover"
                  sizes="230px"
                />
              </div>

              {objects.map((object) => {
                const isIncluded = object.quantities[activePackKey] > 0;
                const isSelected = selectedObjectId === object.id;

                return (
                  <button
                    key={object.id}
                    type="button"
                    onClick={() => selectObject(object)}
                    className={`absolute z-20 w-[86px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] border bg-white p-1.5 text-center transition-all duration-500 ${
                      isIncluded
                        ? "scale-100 opacity-100"
                        : "scale-[0.86] border-slate-200 opacity-20 grayscale"
                    } ${isSelected ? "z-30 scale-105" : ""}`}
                    style={{
                      left: object.x,
                      top: object.y,
                      borderColor: isIncluded ? activePack.color : "#E2E8F0",
                      boxShadow: isIncluded
                        ? isSelected
                          ? `0 16px 36px ${activePack.glow}`
                          : `0 8px 20px ${activePack.glow}`
                        : "none",
                    }}
                  >
                    <div className="relative mx-auto h-[44px] w-[44px] overflow-hidden rounded-[11px] bg-white">
                      <Image
                        src={getImage(object)}
                        alt={object.name}
                        fill
                        className="object-contain p-0.5"
                        sizes="44px"
                      />
                    </div>

                    <p
                      className="mt-1 min-h-[22px] text-[9px] font-extrabold leading-[1.2]"
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

            <div className="mt-2 rounded-[22px] border border-white bg-white p-2 shadow-[0_12px_30px_rgba(8,18,46,0.08)]">
              <div className="grid gap-2 sm:grid-cols-4">
                {(Object.entries(packs) as [PackKey, Pack][]).map(
                  ([key, pack]) => {
                    const selected = key === activePackKey;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => selectPack(key)}
                        className="rounded-[15px] px-3 py-2 text-left transition hover:-translate-y-0.5"
                        style={{
                          backgroundColor: selected ? pack.soft : "#F8FAFC",
                          boxShadow: selected ? `0 8px 18px ${pack.glow}` : "",
                        }}
                      >
                        <p
                          className="text-xs font-extrabold"
                          style={{ color: pack.color }}
                        >
                          Solerya
                        </p>

                        <p
                          className="text-sm font-extrabold leading-tight"
                          style={{ color: pack.color }}
                        >
                          {pack.shortName}
                        </p>

                        <p className="mt-0.5 text-[11px] font-semibold text-slate-500">
                          Dès {pack.price} €/mois
                        </p>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <aside className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] rounded-[28px] border border-orange-100 bg-white p-3 shadow-[0_16px_45px_rgba(8,18,46,0.08)]">
            <div
              className="rounded-[22px] px-4 py-3"
              style={{ backgroundColor: activePack.soft }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm"
                    style={{ color: activePack.color }}
                  >
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Pack sélectionné
                    </p>

                    <h2
                      className="mt-0.5 text-[25px] font-extrabold leading-none tracking-[-0.03em]"
                      style={{ color: activePack.color }}
                    >
                      {activePack.name}
                    </h2>

                    <p className="mt-1 text-xs leading-4 text-slate-700">
                      {activePack.text}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <p
                    className="text-[32px] font-extrabold leading-none tracking-[-0.04em]"
                    style={{ color: activePack.color }}
                  >
                    {activePack.price} €
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold text-slate-500">
                    par mois
                  </p>

                  <Link
                    href={activePack.href}
                    className="mt-1.5 inline-flex items-center justify-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-extrabold text-white transition hover:-translate-y-0.5"
                    style={{ backgroundColor: activePack.color }}
                  >
                    Découvrir
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-2 flex min-h-0 flex-col rounded-[22px] bg-[#F8FAFC] p-3">
              <div className="flex shrink-0 items-center justify-between gap-3">
                <p className="text-base font-extrabold">Objets inclus</p>

                <div
                  className="rounded-full px-3 py-1 text-xs font-extrabold"
                  style={{
                    backgroundColor: activePack.soft,
                    color: activePack.color,
                  }}
                >
                  {equipmentCount} équipements
                </div>
              </div>

              <div className="mt-2 grid min-h-0 flex-1 auto-rows-fr grid-cols-2 gap-1.5">
                {includedObjects.map((object) => {
                  const isSelected = selectedObjectId === object.id;
                  const quantity = object.quantities[activePackKey];

                  return (
                    <button
                      key={object.id}
                      type="button"
                      onClick={() => selectObject(object)}
                      className="grid min-h-0 grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-1.5 rounded-[12px] border bg-white px-1.5 py-1 text-left transition hover:-translate-y-0.5"
                      style={{
                        borderColor: isSelected
                          ? activePack.color
                          : "transparent",
                        boxShadow: isSelected
                          ? `0 6px 14px ${activePack.glow}`
                          : "0 4px 10px rgba(8,18,46,0.04)",
                      }}
                    >
                      <div
                        className="relative h-7 w-7 shrink-0 overflow-hidden rounded-lg bg-white"
                        style={{ outline: `1.5px solid ${activePack.color}` }}
                      >
                        <Image
                          src={getImage(object)}
                          alt={object.name}
                          fill
                          className="object-contain p-0.5"
                          sizes="28px"
                        />
                      </div>

                      <p className="min-w-0 text-[9.5px] font-extrabold leading-[1.1]">
                        {object.name}
                      </p>

                      {quantity > 1 && (
                        <span
                          className="shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-extrabold"
                          style={{
                            backgroundColor: activePack.soft,
                            color: activePack.color,
                          }}
                        >
                          x{quantity}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}