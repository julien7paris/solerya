"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Bell,
  Camera,
  Check,
  ChefHat,
  DoorOpen,
  Droplets,
  HeartHandshake,
  Home,
  LampDesk,
  Lightbulb,
  MapPin,
  Pill,
  ShieldCheck,
  Smartphone,
  Sofa,
  Watch,
  Waves,
} from "lucide-react";

const rooms = [
  {
    id: "salon",
    name: "Salon",
    icon: Sofa,
    color: "#0967D2",
    soft: "#EAF4FF",
    description:
      "Le cœur de la maison : confort, lien avec les proches et surveillance discrète des habitudes.",
    objects: [
      "Capteur de mouvement",
      "Appels vidéo simplifiés",
      "Caméra intérieure optionnelle",
      "Aspirateur connecté",
    ],
    benefit: "Rester actif, connecté et rassuré au quotidien.",
    pack: "Solerya Confort",
    href: "/packs/confort",
  },
  {
    id: "chambre",
    name: "Chambre",
    icon: BedDouble,
    color: "#8E44CC",
    soft: "#F5ECFF",
    description:
      "Une chambre plus sûre pour les levers nocturnes et les situations d’urgence.",
    objects: [
      "Veilleuse automatique",
      "Montre avec détection de chute",
      "Bouton SOS",
      "Capteur de mouvement",
    ],
    benefit: "Réduire les risques sans changer les habitudes.",
    pack: "Solerya Autonomie",
    href: "/packs/autonomie",
  },
  {
    id: "cuisine",
    name: "Cuisine",
    icon: ChefHat,
    color: "#F25A1D",
    soft: "#FFF1E6",
    description:
      "Des équipements utiles pour prévenir les incidents et accompagner les routines importantes.",
    objects: [
      "Détecteur de fumée connecté",
      "Détecteur de fuite d’eau",
      "Pilulier intelligent",
      "Rappels sur smartphone",
    ],
    benefit: "Prévenir les incidents et sécuriser les gestes essentiels.",
    pack: "Solerya Autonomie",
    href: "/packs/autonomie",
  },
  {
    id: "salle-de-bain",
    name: "Salle de bain",
    icon: Bath,
    color: "#0B8A4A",
    soft: "#E9FFF3",
    description:
      "Une pièce à risque où la détection rapide d’un incident peut faire toute la différence.",
    objects: [
      "Montre avec détection de chute",
      "Bouton SOS",
      "Détecteur de fuite",
      "Capteur de présence",
    ],
    benefit: "Être alerté rapidement dans l’une des pièces les plus sensibles.",
    pack: "Solerya Sérénité",
    href: "/packs/serenite",
  },
  {
    id: "entree",
    name: "Entrée",
    icon: DoorOpen,
    color: "#D97706",
    soft: "#FFF7E6",
    description:
      "L’entrée protège le domicile et permet de mieux comprendre les sorties inhabituelles.",
    objects: [
      "Détecteur d’ouverture de porte",
      "Sonnette vidéo",
      "Caméra extérieure",
      "Alertes famille",
    ],
    benefit: "Sécuriser les accès et rassurer les proches à distance.",
    pack: "Solerya Confort",
    href: "/packs/confort",
  },
  {
    id: "couloir",
    name: "Couloir",
    icon: LampDesk,
    color: "#64748B",
    soft: "#F1F5F9",
    description:
      "Les zones de passage deviennent plus sûres, notamment pendant la nuit.",
    objects: [
      "Veilleuses automatiques",
      "Capteurs de mouvement",
      "Détection d’activité inhabituelle",
      "Éclairage intelligent",
    ],
    benefit: "Faciliter les déplacements et limiter les risques de chute.",
    pack: "Solerya Confort",
    href: "/packs/confort",
  },
];

export default function FamillesPage() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const ActiveIcon = activeRoom.icon;

  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#FFF1E6_0%,transparent_28%),linear-gradient(to_bottom,#ffffff,#fffaf5)]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
            <HeartHandshake className="h-4 w-4 text-[#F58220]" />
            Pour les familles
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Découvrez la maison connectée Solerya.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Cliquez sur chaque pièce pour découvrir comment des objets simples
            peuvent sécuriser le domicile et rassurer toute la famille.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[680px] overflow-hidden rounded-[40px] bg-[linear-gradient(145deg,#F8FBFF,#FFF8F1)] p-6 shadow-[0_30px_90px_rgba(8,18,46,0.10)] md:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#F58220]">
                  Maison interactive
                </p>
                <h2 className="mt-2 text-3xl font-extrabold">
                  Cliquez sur une pièce
                </h2>
              </div>

              <div className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm sm:flex">
                <MapPin className="h-4 w-4 text-[#F58220]" />
                6 espaces à explorer
              </div>
            </div>

            <div className="relative mx-auto mt-12 h-[500px] max-w-3xl">
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[520px] max-w-[82vw] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] skew-x-[-30deg] rounded-[36px] bg-white shadow-[30px_40px_70px_rgba(8,18,46,0.14)]" />

              <RoomButton
                room={rooms[1]}
                active={activeRoom.id === rooms[1].id}
                onClick={() => setActiveRoom(rooms[1])}
                className="left-[15%] top-[13%]"
              />
              <RoomButton
                room={rooms[5]}
                active={activeRoom.id === rooms[5].id}
                onClick={() => setActiveRoom(rooms[5])}
                className="left-[43%] top-[19%]"
              />
              <RoomButton
                room={rooms[3]}
                active={activeRoom.id === rooms[3].id}
                onClick={() => setActiveRoom(rooms[3])}
                className="right-[12%] top-[12%]"
              />
              <RoomButton
                room={rooms[0]}
                active={activeRoom.id === rooms[0].id}
                onClick={() => setActiveRoom(rooms[0])}
                className="left-[13%] bottom-[15%]"
              />
              <RoomButton
                room={rooms[2]}
                active={activeRoom.id === rooms[2].id}
                onClick={() => setActiveRoom(rooms[2])}
                className="left-[44%] bottom-[9%]"
              />
              <RoomButton
                room={rooms[4]}
                active={activeRoom.id === rooms[4].id}
                onClick={() => setActiveRoom(rooms[4])}
                className="right-[8%] bottom-[19%]"
              />

              <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#08122E] text-white shadow-2xl">
                <Home className="h-11 w-11" />
              </div>
            </div>
          </div>

          <aside
            className="rounded-[40px] p-8 shadow-[0_30px_90px_rgba(8,18,46,0.10)] lg:sticky lg:top-28 lg:h-fit"
            style={{ backgroundColor: activeRoom.soft }}
          >
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm"
              style={{ color: activeRoom.color }}
            >
              <ActiveIcon className="h-8 w-8" />
            </div>

            <p
              className="mt-7 text-sm font-extrabold uppercase tracking-[0.18em]"
              style={{ color: activeRoom.color }}
            >
              Pièce sélectionnée
            </p>

            <h2 className="mt-2 text-4xl font-extrabold">
              {activeRoom.name}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {activeRoom.description}
            </p>

            <div className="mt-8 space-y-4">
              {activeRoom.objects.map((object) => (
                <div
                  key={object}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 p-4"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: activeRoom.color }}
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {object}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Bénéfice pour la famille
              </p>
              <p className="mt-2 font-bold leading-6">
                {activeRoom.benefit}
              </p>
            </div>

            <Link
              href={activeRoom.href}
              className="mt-7 flex items-center justify-between rounded-full px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              style={{ backgroundColor: activeRoom.color }}
            >
              Découvrir {activeRoom.pack}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#08122E] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <ShieldCheck className="h-12 w-12 text-[#F58220]" />
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              Une maison connectée, mais jamais intrusive.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              L’objectif n’est pas de surveiller. Il est de détecter les
              situations utiles, d’alerter au bon moment et de préserver
              l’autonomie.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Bell, "Alertes utiles", "Seulement quand une situation mérite votre attention."],
              [Smartphone, "Famille informée", "Les informations importantes sur smartphone."],
              [Waves, "Sans changer les habitudes", "Les équipements fonctionnent discrètement."],
              [ShieldCheck, "Vie privée respectée", "Une technologie pensée autour de la confiance."],
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof Bell;

              return (
                <div key={String(title)} className="rounded-[28px] bg-white/10 p-6">
                  <CardIcon className="h-8 w-8 text-[#F58220]" />
                  <h3 className="mt-5 text-lg font-bold">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {String(text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function RoomButton({
  room,
  active,
  onClick,
  className,
}: {
  room: (typeof rooms)[number];
  active: boolean;
  onClick: () => void;
  className: string;
}) {
  const Icon = room.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute z-10 w-32 rounded-[24px] border p-4 text-left shadow-lg transition duration-300 hover:-translate-y-2 md:w-40 ${className} ${
        active
          ? "scale-105 border-white bg-white shadow-2xl"
          : "border-white/70 bg-white/85 backdrop-blur"
      }`}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: room.soft, color: room.color }}
      >
        <Icon className="h-6 w-6" />
      </div>

      <p className="mt-3 text-sm font-extrabold">{room.name}</p>
      <p className="mt-1 text-[11px] text-slate-500">Découvrir →</p>
    </button>
  );
}
