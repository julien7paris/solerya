"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

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
  benefit: string;
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
    price: "49",
    color: "#0B8A4A",
    soft: "#EAF8F0",
    glow: "rgba(11,138,74,0.22)",
    href: "/packs/serenite",
    text: "Le socle essentiel pour rassurer les proches et sécuriser le quotidien.",
    benefit:
      "La famille reçoit les premiers signaux utiles : SOS, activité, porte et fumée.",
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
    benefit:
      "Les proches sont rassurés sur les risques du domicile : fuite, chaleur, fumée et déplacements.",
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
    benefit:
      "La famille comprend mieux le quotidien, sans caméra et sans surveillance intrusive.",
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
    benefit:
      "La famille bénéficie d’une vision complète du domicile, avec actions automatiques et alertes renforcées.",
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
    y: "17%",
  },
  {
    id: "application",
    name: "Application famille",
    pack: "serenite",
    image: "application",
    x: "10%",
    y: "49%",
  },
  {
    id: "ouverture",
    name: "Détecteur d’ouverture",
    pack: "serenite",
    image: "/objets/detecteur-ouverture-porte.jpg",
    x: "25%",
    y: "76%",
  },
  {
    id: "mouvement",
    name: "Capteur mouvement",
    pack: "serenite",
    image: "/objets/capteur-mouvement-veilleuse.jpg",
    x: "49%",
    y: "10%",
  },
  {
    id: "fumee",
    name: "Détecteur fumée",
    pack: "serenite",
    image: "/objets/detecteur-fumee.jpg",
    x: "89%",
    y: "49%",
  },
  {
    id: "temperature",
    name: "Temp. & humidité",
    pack: "confort",
    image: "/objets/capteur-de-temperature-et-d-humidite.jpg",
    x: "88%",
    y: "17%",
  },
  {
    id: "fuite",
    name: "Détecteur fuite",
    pack: "confort",
    image: "/objets/fuites.jpg",
    x: "76%",
    y: "76%",
  },
  {
    id: "presence",
    name: "Capteur présence",
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
    name: "Hub Solerya",
    pack: "signature",
    image: "/objets/home-assistant.jpg",
    x: "67%",
    y: "16%",
  },
  {
    id: "refrigerateur",
    name: "Capteur frigo",
    pack: "signature",
    image: "/objets/refregirateur.jpg",
    x: "80%",
    y: "34%",
  },
  {
    id: "sirene",
    name: "Sirène",
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
    return object.image === "application" ? activePack.appImage : object.image;
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
                style={{
                  boxShadow: `0 20px 55px ${activePack.glow}`,
                }}
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
                const objectPack = packs[object.pack];
                const isIncluded = objectPack.level <= activePack.level;
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

          <aside className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto_auto] rounded-[28px] border border-orange-100 bg-white p-3 shadow-[0_16px_45px_rgba(8,18,46,0.08)]">
            <div
              className="rounded-[22px] p-3.5"
              style={{ backgroundColor: activePack.soft }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm"
                  style={{ color: activePack.color }}
                >
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Pack sélectionné
                  </p>

                  <h2
                    className="mt-0.5 text-2xl font-extrabold tracking-[-0.03em]"
                    style={{ color: activePack.color }}
                  >
                    {activePack.name}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    {activePack.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 min-h-0 overflow-hidden rounded-[22px] bg-[#F8FAFC] p-3">
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

              <div className="mt-2 grid max-h-[270px] grid-cols-2 gap-2 overflow-y-auto pr-1">
                {includedObjects.map((object) => {
                  const isSelected = selectedObjectId === object.id;

                  return (
                    <button
                      key={object.id}
                      type="button"
                      onClick={() => selectObject(object)}
                      className="grid grid-cols-[34px_1fr] items-center gap-2 rounded-[14px] border bg-white p-1.5 text-left transition hover:-translate-y-0.5"
                      style={{
                        borderColor: isSelected
                          ? activePack.color
                          : "transparent",
                        boxShadow: isSelected
                          ? `0 8px 18px ${activePack.glow}`
                          : "0 5px 14px rgba(8,18,46,0.04)",
                      }}
                    >
                      <div
                        className="relative h-8 w-8 overflow-hidden rounded-lg bg-white"
                        style={{
                          outline: `1.5px solid ${activePack.color}`,
                        }}
                      >
                        <Image
                          src={getImage(object)}
                          alt={object.name}
                          fill
                          className="object-contain p-0.5"
                          sizes="32px"
                        />
                      </div>

                      <p className="text-[10.5px] font-extrabold leading-tight">
                        {object.name}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-2 rounded-[22px] border border-slate-100 bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold">Prix du pack</p>

                  <p
                    className="mt-1 text-4xl font-extrabold leading-none"
                    style={{ color: activePack.color }}
                  >
                    {activePack.price} €
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    par mois
                  </p>
                </div>

                <div className="text-right text-xs leading-5 text-slate-500">
                  Installation possible
                  <br />
                  équipements inclus
                </div>
              </div>

              <Link
                href={activePack.href}
                className="mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: activePack.color }}
              >
                Découvrir ce pack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div
              className="mt-2 rounded-[20px] p-3"
              style={{ backgroundColor: activePack.soft }}
            >
              <div className="flex gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white"
                  style={{ color: activePack.color }}
                >
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p
                    className="text-sm font-extrabold"
                    style={{ color: activePack.color }}
                  >
                    Bénéfice famille
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    {activePack.benefit}
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