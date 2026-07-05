"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  BellRing,
  Camera,
  CheckCircle2,
  ChefHat,
  DoorOpen,
  Droplets,
  Flame,
  HeartHandshake,
  Home,
  LampDesk,
  Phone,
  ShieldCheck,
  Smartphone,
  Sofa,
  UserRound,
  Waves,
} from "lucide-react";

const packStyles = {
  serenite: {
    name: "Solerya Sérénité",
    price: "39",
    color: "#0B8A4A",
    soft: "#EAF8F0",
    href: "/packs/serenite",
  },
  confort: {
    name: "Solerya Confort",
    price: "59",
    color: "#0967D2",
    soft: "#EAF4FF",
    href: "/packs/confort",
  },
  autonomie: {
    name: "Solerya Autonomie",
    price: "79",
    color: "#8E44CC",
    soft: "#F5ECFF",
    href: "/packs/autonomie",
  },
  signature: {
    name: "Solerya Signature",
    price: "99",
    color: "#F25A1D",
    soft: "#FFF1E6",
    href: "/packs/signature",
  },
};

const rooms = [
  {
    id: "entree",
    name: "Entrée",
    icon: DoorOpen,
    x: "8%",
    y: "58%",
    pack: "serenite",
    need: "Accès, sorties et sécurité essentielle",
    description:
      "L’entrée permet de garder un repère simple sur les ouvertures importantes et les sorties inhabituelles.",
    objects: [
      { name: "Détecteur d’ouverture", icon: DoorOpen },
      { name: "Bouton SOS", icon: BellRing },
      { name: "Application famille", icon: Smartphone },
    ],
  },
  {
    id: "salon",
    name: "Salon",
    icon: Sofa,
    x: "36%",
    y: "46%",
    pack: "autonomie",
    need: "Rythme de vie et présence rassurante",
    description:
      "Le salon devient un espace de repères pour comprendre l’activité quotidienne, sans caméra ni intrusion.",
    objects: [
      { name: "Capteur de mouvement", icon: Waves },
      { name: "Présence sans caméra", icon: ShieldCheck },
      { name: "Application famille", icon: Smartphone },
    ],
  },
  {
    id: "chambre",
    name: "Chambre",
    icon: BedDouble,
    x: "28%",
    y: "18%",
    pack: "autonomie",
    need: "Levers nocturnes et autonomie",
    description:
      "La chambre aide à repérer les levers nocturnes et à sécuriser les déplacements, tout en préservant l’intimité.",
    objects: [
      { name: "Capteur de présence", icon: Waves },
      { name: "Veilleuse automatique", icon: LampDesk },
      { name: "Bouton SOS", icon: BellRing },
    ],
  },
  {
    id: "cuisine",
    name: "Cuisine",
    icon: ChefHat,
    x: "68%",
    y: "28%",
    pack: "confort",
    need: "Fumée, fuite et confort du logement",
    description:
      "La cuisine est protégée contre les incidents domestiques fréquents : fumée, fuite ou situation anormale.",
    objects: [
      { name: "Détecteur de fumée", icon: Flame },
      { name: "Détecteur de fuite", icon: Droplets },
      { name: "Capteur de mouvement", icon: Waves },
    ],
  },
  {
    id: "salle-bain",
    name: "Salle de bain",
    icon: Bath,
    x: "76%",
    y: "62%",
    pack: "confort",
    need: "Fuite et sécurité quotidienne",
    description:
      "La salle de bain devient plus rassurante grâce à des équipements discrets dans une pièce à risque.",
    objects: [
      { name: "Détecteur de fuite", icon: Droplets },
      { name: "Bouton SOS", icon: BellRing },
      { name: "Présence non intrusive", icon: ShieldCheck },
    ],
  },
  {
    id: "couloir",
    name: "Couloir",
    icon: LampDesk,
    x: "52%",
    y: "72%",
    pack: "signature",
    need: "Déplacements nocturnes et accompagnement complet",
    description:
      "Le couloir accompagne les déplacements de nuit et s’intègre dans une solution complète pour le domicile.",
    objects: [
      { name: "Veilleuses x3", icon: LampDesk },
      { name: "Capteurs de mouvement x2", icon: Waves },
      { name: "Caméra IA selon besoin", icon: Camera },
    ],
  },
];

export default function FamillesPage() {
  const [activeRoom, setActiveRoom] = useState(rooms[1]);
  const activePack = packStyles[activeRoom.pack as keyof typeof packStyles];

  return (
    <main className="min-h-screen bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
            <HeartHandshake className="h-4 w-4 text-[#F58220]" />
            Pour les familles
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Une maison plus rassurante, pièce par pièce.
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Survolez les pièces du domicile : les objets connectés associés au
            bon pack se mettent en surbrillance automatiquement.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-[40px] bg-white p-5 shadow-[0_24px_70px_rgba(8,18,46,0.10)] md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold text-[#F58220]">
                  Maison Solerya
                </p>
                <h2 className="mt-1 text-2xl font-extrabold">
                  Survolez une pièce
                </h2>
              </div>

              <div
                className="hidden rounded-full px-4 py-2 text-sm font-extrabold sm:block"
                style={{
                  backgroundColor: activePack.soft,
                  color: activePack.color,
                }}
              >
                {activePack.name}
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[36px] bg-[#EEF3F8] p-5">
              <div className="absolute inset-5 rounded-[32px] border-[14px] border-white/80 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF3F8]" />

              <div className="absolute left-[12%] top-[10%] h-[28%] w-[34%] rounded-[30px] border border-white bg-[#F5ECFF]/70" />
              <div className="absolute right-[10%] top-[12%] h-[30%] w-[30%] rounded-[30px] border border-white bg-[#FFF1E6]/80" />
              <div className="absolute left-[11%] top-[48%] h-[25%] w-[28%] rounded-[30px] border border-white bg-[#FFF7E6]/80" />
              <div className="absolute right-[8%] top-[51%] h-[25%] w-[28%] rounded-[30px] border border-white bg-[#EAF4FF]/80" />
              <div className="absolute left-[39%] top-[62%] h-[20%] w-[31%] rounded-[30px] border border-white bg-[#F1F5F9]/90" />

              <div className="absolute left-1/2 top-[45%] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white bg-[#FFF2E8] shadow-[0_24px_60px_rgba(8,18,46,0.18)]">
                  <UserRound className="h-16 w-16 text-[#F58220]" />
                </div>

                <div className="mt-4 rounded-2xl bg-white/90 px-5 py-3 text-center shadow-[0_12px_30px_rgba(8,18,46,0.10)] backdrop-blur">
                  <p className="text-sm font-extrabold">
                    Personne âgée au domicile
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    Autonomie, sécurité et lien familial
                  </p>
                </div>
              </div>

              {rooms.map((room) => {
                const Icon = room.icon;
                const pack = packStyles[room.pack as keyof typeof packStyles];
                const isActive = activeRoom.id === room.id;
                const samePack = activeRoom.pack === room.pack;

                return (
                  <button
                    key={room.id}
                    type="button"
                    onMouseEnter={() => setActiveRoom(room)}
                    onFocus={() => setActiveRoom(room)}
                    className={`absolute z-30 w-[180px] rounded-[26px] border p-4 text-left transition duration-300 ${
                      isActive
                        ? "scale-105 border-white bg-white shadow-[0_26px_60px_rgba(8,18,46,0.22)]"
                        : samePack
                        ? "border-white bg-white/95 shadow-[0_18px_40px_rgba(8,18,46,0.14)]"
                        : "border-white/80 bg-white/70 opacity-75 shadow-[0_10px_28px_rgba(8,18,46,0.08)]"
                    }`}
                    style={{
                      left: room.x,
                      top: room.y,
                      boxShadow: isActive
                        ? `0 24px 60px ${pack.color}33`
                        : undefined,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: pack.soft,
                          color: pack.color,
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p
                          className="text-lg font-extrabold leading-tight"
                          style={{ color: samePack ? pack.color : "#08122E" }}
                        >
                          {room.name}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {room.need}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}

              <div className="absolute bottom-5 left-5 right-5 z-40 grid gap-3 rounded-[28px] bg-white/92 p-4 shadow-[0_20px_50px_rgba(8,18,46,0.12)] backdrop-blur md:grid-cols-3">
                {activeRoom.objects.map((object) => {
                  const Icon = object.icon;

                  return (
                    <div
                      key={object.name}
                      className="flex items-center gap-3 rounded-2xl p-3 transition"
                      style={{
                        backgroundColor: activePack.soft,
                        color: activePack.color,
                      }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-extrabold">{object.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="rounded-[40px] border border-orange-100 bg-white p-6 shadow-[0_24px_70px_rgba(8,18,46,0.10)] lg:sticky lg:top-20">
            <div className="flex items-start gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px]"
                style={{
                  backgroundColor: activePack.soft,
                  color: activePack.color,
                }}
              >
                <Home className="h-8 w-8" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Pièce survolée
                </p>
                <h2 className="mt-1 text-3xl font-extrabold">
                  {activeRoom.name}
                </h2>
                <p
                  className="mt-2 text-sm font-extrabold"
                  style={{ color: activePack.color }}
                >
                  {activeRoom.need}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              {activeRoom.description}
            </p>

            <div
              className="mt-6 rounded-[28px] p-5"
              style={{ backgroundColor: activePack.soft }}
            >
              <p
                className="text-sm font-extrabold"
                style={{ color: activePack.color }}
              >
                Objets mis en avant
              </p>

              <div className="mt-4 space-y-3">
                {activeRoom.objects.map((object) => {
                  const Icon = object.icon;

                  return (
                    <div
                      key={object.name}
                      className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: activePack.soft,
                          color: activePack.color,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="text-sm font-bold">{object.name}</p>

                      <CheckCircle2
                        className="ml-auto h-5 w-5"
                        style={{ color: activePack.color }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold">Pack recommandé</p>

              <div className="mt-4 flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: activePack.soft,
                    color: activePack.color,
                  }}
                >
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className="text-2xl font-extrabold"
                    style={{ color: activePack.color }}
                  >
                    {activePack.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Les objets utiles selon la pièce et le besoin.
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-slate-500">Dès</p>
                  <p className="text-2xl font-extrabold">
                    {activePack.price} €
                  </p>
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
                    Le bénéfice pour la famille
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Comprendre ce qui se passe au domicile, sans surveillance
                    intrusive et avec des repères simples.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-[#F58220] px-9 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
          >
            Être rappelé par un conseiller
            <Phone className="h-5 w-5" />
          </Link>

          <Link
            href="/packs"
            className="rounded-full border border-slate-300 bg-white px-9 py-4 text-sm font-extrabold text-[#08122E] transition hover:shadow-sm"
          >
            Voir tous les packs
          </Link>
        </div>
      </section>
    </main>
  );
}