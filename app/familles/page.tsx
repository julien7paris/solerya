"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Bell,
  CalendarClock,
  CheckCircle2,
  ChefHat,
  DoorOpen,
  HeartHandshake,
  Home,
  LampDesk,
  Phone,
  ShieldCheck,
  Sofa,
  Watch,
} from "lucide-react";

const rooms = [
  {
    id: "chambre",
    name: "Chambre",
    icon: BedDouble,
    color: "#8E44CC",
    soft: "#F5ECFF",
    grid: "col-start-1 row-start-1",
    description:
      "Un espace clé pour prévenir les chutes nocturnes, sécuriser les levers et rassurer les proches.",
    products: [
      ["Montre détecteur de chute", "Alerte automatique en cas de chute ou d’immobilité."],
      ["Veilleuse automatique", "S’allume la nuit pour sécuriser les déplacements."],
      ["Bouton SOS", "Permet de déclencher une alerte rapidement."],
    ],
    benefit:
      "Votre proche reste indépendant, et vous êtes alerté uniquement en cas d’anomalie.",
    pack: "Solerya Autonomie",
    price: "79",
    href: "/packs/autonomie",
  },
  {
    id: "salle-bain",
    name: "Salle de bain",
    icon: Bath,
    color: "#0B8A4A",
    soft: "#E9FFF3",
    grid: "col-start-2 row-start-1",
    description:
      "Une pièce sensible où la détection rapide d’un incident peut faire toute la différence.",
    products: [
      ["Montre détecteur de chute", "Alerte automatiquement en cas de chute."],
      ["Détecteur de fuite", "Préviens en cas de présence d’eau anormale."],
      ["Capteur de présence", "Aide à identifier les situations inhabituelles."],
    ],
    benefit:
      "La famille peut être prévenue rapidement dans l’une des pièces les plus à risque.",
    pack: "Solerya Sérénité",
    price: "39",
    href: "/packs/serenite",
  },
  {
    id: "salon",
    name: "Salon",
    icon: Sofa,
    color: "#0967D2",
    soft: "#EAF4FF",
    grid: "col-start-1 row-start-2",
    description:
      "Le salon devient un espace rassurant pour garder le lien et suivre les habitudes de vie.",
    products: [
      ["Appels vidéo simplifiés", "Maintient le lien avec la famille sans complexité."],
      ["Capteur de mouvement", "Repère les habitudes sans intrusion."],
      ["Caméra optionnelle", "Permet une levée de doute en cas d’alerte."],
    ],
    benefit:
      "La famille garde un lien simple et reçoit les bonnes informations au bon moment.",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
  },
  {
    id: "cuisine",
    name: "Cuisine",
    icon: ChefHat,
    color: "#F25A1D",
    soft: "#FFF1E6",
    grid: "col-start-2 row-start-2",
    description:
      "La cuisine est sécurisée grâce aux alertes fumée, fuite et rappels de traitement.",
    products: [
      ["Détecteur de fumée connecté", "Alerte en cas de fumée détectée."],
      ["Détecteur de fuite", "Préviens avant qu’un dégât ne s’aggrave."],
      ["Pilulier intelligent", "Rappelle les prises de médicaments à l’heure."],
    ],
    benefit:
      "Les incidents domestiques sont détectés plus tôt, sans perturber la vie quotidienne.",
    pack: "Solerya Autonomie",
    price: "79",
    href: "/packs/autonomie",
  },
  {
    id: "entree",
    name: "Entrée",
    icon: DoorOpen,
    color: "#D97706",
    soft: "#FFF7E6",
    grid: "col-start-1 row-start-3",
    description:
      "L’entrée sécurise les accès et permet de mieux comprendre les sorties inhabituelles.",
    products: [
      ["Détecteur d’ouverture", "Alerte en cas d’ouverture inhabituelle."],
      ["Sonnette vidéo", "Permet de voir qui se présente au domicile."],
      ["Application famille", "Centralise les alertes importantes."],
    ],
    benefit:
      "Vous êtes rassuré sur les entrées, les sorties et les visites au domicile.",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
  },
  {
    id: "couloir",
    name: "Couloir",
    icon: LampDesk,
    color: "#64748B",
    soft: "#F1F5F9",
    grid: "col-start-2 row-start-3",
    description:
      "Les zones de passage deviennent plus sûres, surtout pendant les déplacements nocturnes.",
    products: [
      ["Veilleuse automatique", "S’allume au passage la nuit."],
      ["Capteur de mouvement", "Repère les déplacements inhabituels."],
      ["Éclairage intelligent", "Limite les risques de chute."],
    ],
    benefit:
      "Les déplacements sont plus sûrs, sans que votre proche ait besoin d’y penser.",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
  },
];

export default function FamillesPage() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const ActiveIcon = activeRoom.icon;

  return (
    <main className="min-h-screen bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
              <HeartHandshake className="h-4 w-4 text-[#F58220]" />
              Pour les familles
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-7xl">
              Explorez la maison Solerya.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Cliquez sur une pièce pour découvrir les objets connectés utiles,
              le bénéfice pour la famille et le pack recommandé.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(8,18,46,0.08)]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["1", "Cliquez sur une pièce"],
                ["2", "Découvrez les équipements"],
                ["3", "Choisissez le bon pack"],
              ].map(([number, text]) => (
                <div key={number} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#FFF2E8] text-sm font-extrabold text-[#F58220]">
                    {number}
                  </div>
                  <p className="text-sm font-bold leading-5">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[44px] bg-[linear-gradient(145deg,#F8FBFF,#FFF8F1)] p-6 shadow-[0_30px_90px_rgba(8,18,46,0.10)] md:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative mx-auto max-w-4xl">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold text-[#F58220]">
                    Maison virtuelle
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold">
                    Les pièces connectées
                  </h2>
                </div>

                <div className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-600 shadow-sm sm:block">
                  6 pièces à explorer
                </div>
              </div>

              <div className="relative mx-auto min-h-[620px] max-w-[760px]">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[620px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] skew-x-[-30deg] rounded-[46px] bg-white shadow-[34px_44px_80px_rgba(8,18,46,0.16)]" />

                <div className="absolute left-1/2 top-1/2 grid h-[500px] w-[620px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] skew-x-[-30deg] grid-cols-2 grid-rows-3 gap-4 p-5">
                  {rooms.map((room) => {
                    const isActive = activeRoom.id === room.id;

                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setActiveRoom(room)}
                        className={`${room.grid} relative overflow-hidden rounded-[26px] border text-left shadow-sm transition duration-300 hover:-translate-y-1 ${
                          isActive
                            ? "border-[#F58220] bg-white shadow-2xl"
                            : "border-white/80 bg-white/80"
                        }`}
                      >
                        <div
                          className="absolute inset-0 opacity-80"
                          style={{
                            background: `linear-gradient(135deg, ${room.soft}, #ffffff)`,
                          }}
                        />

                        <div className="absolute inset-x-4 top-4 h-10 rounded-full bg-white/70 blur-xl" />

                        <div className="relative flex h-full rotate-[-30deg] skew-x-[30deg] flex-col justify-between p-5">
                          <div>
                            <RoomFurniture roomId={room.id} color={room.color} />

                            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#08122E] px-3 py-2 text-xs font-extrabold text-white shadow-lg">
                              {room.name}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500">
                              Découvrir
                            </span>
                            <span
                              className="h-3 w-3 rounded-full shadow-[0_0_18px_currentColor]"
                              style={{ color: room.color, backgroundColor: room.color }}
                            />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#08122E] text-white shadow-2xl">
                  <Home className="h-11 w-11" />
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[40px] border border-orange-100 bg-white p-7 shadow-[0_30px_90px_rgba(8,18,46,0.12)] lg:sticky lg:top-28 lg:h-fit">
            <div className="grid grid-cols-[1fr_90px] gap-5">
              <div>
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: activeRoom.soft, color: activeRoom.color }}
                >
                  <ActiveIcon className="h-8 w-8" />
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Pièce sélectionnée
                </p>

                <h2 className="mt-1 text-4xl font-extrabold">
                  {activeRoom.name}
                </h2>
              </div>

              <div
                className="flex h-24 w-24 items-center justify-center rounded-[28px]"
                style={{ backgroundColor: activeRoom.soft, color: activeRoom.color }}
              >
                <ActiveIcon className="h-11 w-11" />
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              {activeRoom.description}
            </p>

            <div className="mt-8 rounded-[28px] bg-[#FAFBFD] p-5">
              <p className="text-sm font-extrabold">
                Équipements connectés recommandés
              </p>

              <div className="mt-5 space-y-3">
                {activeRoom.products.map(([title, text]) => (
                  <div
                    key={title}
                    className="grid grid-cols-[46px_1fr_22px] items-center gap-4 rounded-[20px] bg-white p-3 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50">
                      <Watch className="h-6 w-6 text-[#08122E]" />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {text}
                      </p>
                    </div>

                    <CheckCircle2 className="h-5 w-5 text-[#F58220]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[24px] bg-emerald-50 p-5">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0B8A4A]">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-lg font-extrabold text-[#0B8A4A]">
                    Le bénéfice pour la famille
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {activeRoom.benefit}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-sm font-extrabold">Pack recommandé</p>

              <div className="mt-4 rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: activeRoom.soft, color: activeRoom.color }}
                  >
                    <CalendarClock className="h-7 w-7" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="text-xl font-extrabold"
                      style={{ color: activeRoom.color }}
                    >
                      {activeRoom.pack}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Pour une protection adaptée à cette pièce.
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">Dès</p>
                    <p className="text-2xl font-extrabold">
                      {activeRoom.price} €
                    </p>
                  </div>
                </div>

                <Link
                  href={activeRoom.href}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                  style={{ backgroundColor: activeRoom.color }}
                >
                  Découvrir ce pack
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-[#F58220] px-10 py-5 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
          >
            Être rappelé par un conseiller
            <Phone className="h-5 w-5" />
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-10 py-5 text-sm font-extrabold text-[#08122E] transition hover:shadow-sm"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </main>
  );
}

function RoomFurniture({
  roomId,
  color,
}: {
  roomId: string;
  color: string;
}) {
  if (roomId === "chambre") {
    return (
      <div className="relative h-20">
        <div className="absolute left-2 top-4 h-11 w-20 rounded-xl bg-white shadow-md" />
        <div className="absolute left-5 top-1 h-7 w-14 rounded-lg bg-slate-200" />
        <div className="absolute right-7 top-3 h-12 w-8 rounded-lg bg-amber-100 shadow-sm" />
        <div className="absolute right-11 top-0 h-4 w-4 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.65)]" />
      </div>
    );
  }

  if (roomId === "salon") {
    return (
      <div className="relative h-20">
        <div className="absolute left-2 top-7 h-9 w-24 rounded-2xl bg-slate-300 shadow-md" />
        <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-amber-100 shadow-sm" />
        <div className="absolute right-9 top-9 h-5 w-5 rounded-full" style={{ backgroundColor: color }} />
      </div>
    );
  }

  if (roomId === "cuisine") {
    return (
      <div className="relative h-20">
        <div className="absolute left-2 top-5 h-12 w-28 rounded-xl bg-white shadow-md" />
        <div className="absolute left-6 top-8 h-5 w-5 rounded-full bg-slate-300" />
        <div className="absolute left-14 top-8 h-5 w-5 rounded-full bg-slate-300" />
        <div className="absolute right-7 top-2 h-14 w-8 rounded-lg bg-slate-300 shadow-sm" />
      </div>
    );
  }

  if (roomId === "salle-bain") {
    return (
      <div className="relative h-20">
        <div className="absolute left-3 top-7 h-11 w-16 rounded-full bg-white shadow-md" />
        <div className="absolute right-7 top-3 h-16 w-10 rounded-xl bg-slate-200 shadow-sm" />
        <div className="absolute right-10 top-5 h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
      </div>
    );
  }

  if (roomId === "entree") {
    return (
      <div className="relative h-20">
        <div className="absolute left-8 top-2 h-16 w-10 rounded-xl bg-amber-200 shadow-md" />
        <div className="absolute left-11 top-9 h-2 w-2 rounded-full bg-[#08122E]" />
        <div className="absolute right-7 top-8 h-7 w-14 rounded-lg bg-slate-200 shadow-sm" />
      </div>
    );
  }

  return (
    <div className="relative h-20">
      <div className="absolute left-8 top-2 h-16 w-12 rounded-xl bg-slate-200 shadow-md" />
      <div className="absolute right-8 top-9 h-5 w-5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.65)]" />
      <div className="absolute right-14 top-6 h-10 w-2 rounded-full bg-slate-300" />
    </div>
  );
}
