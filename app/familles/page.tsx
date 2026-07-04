"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
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
} from "lucide-react";

const rooms = [
  {
    id: "chambre",
    name: "Chambre",
    icon: BedDouble,
    color: "#8E44CC",
    soft: "#F5ECFF",
    area: "col-start-1 col-span-2 row-start-1 row-span-2",
    description:
      "Un espace clé pour prévenir les chutes nocturnes, sécuriser les levers et rassurer les proches.",
    products: [
      {
        type: "watch",
        title: "Montre détecteur de chute",
        text: "Alerte automatique en cas de chute ou d’immobilité.",
      },
      {
        type: "nightlight",
        title: "Veilleuse automatique",
        text: "S’allume la nuit pour sécuriser les déplacements.",
      },
      {
        type: "sos",
        title: "Bouton SOS",
        text: "Permet de déclencher une alerte rapidement.",
      },
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
    area: "col-start-3 col-span-1 row-start-1 row-span-2",
    description:
      "Une pièce sensible où la détection rapide d’un incident peut faire toute la différence.",
    products: [
      {
        type: "watch",
        title: "Montre détecteur de chute",
        text: "Alerte automatiquement en cas de chute.",
      },
      {
        type: "leak",
        title: "Détecteur de fuite",
        text: "Préviens en cas de présence d’eau anormale.",
      },
      {
        type: "sensor",
        title: "Capteur de présence",
        text: "Aide à identifier les situations inhabituelles.",
      },
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
    area: "col-start-1 col-span-2 row-start-3 row-span-2",
    description:
      "Le salon devient un espace rassurant pour garder le lien et suivre les habitudes de vie.",
    products: [
      {
        type: "tablet",
        title: "Appels vidéo simplifiés",
        text: "Maintient le lien avec la famille sans complexité.",
      },
      {
        type: "sensor",
        title: "Capteur de mouvement",
        text: "Repère les habitudes sans intrusion.",
      },
      {
        type: "camera",
        title: "Caméra optionnelle",
        text: "Permet une levée de doute en cas d’alerte.",
      },
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
    area: "col-start-3 col-span-2 row-start-3 row-span-2",
    description:
      "La cuisine est sécurisée grâce aux alertes fumée, fuite et rappels de traitement.",
    products: [
      {
        type: "smoke",
        title: "Détecteur de fumée connecté",
        text: "Alerte en cas de fumée détectée.",
      },
      {
        type: "leak",
        title: "Détecteur de fuite",
        text: "Préviens avant qu’un dégât ne s’aggrave.",
      },
      {
        type: "pillbox",
        title: "Pilulier intelligent",
        text: "Rappelle les prises de médicaments à l’heure.",
      },
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
    area: "col-start-1 col-span-1 row-start-5 row-span-1",
    description:
      "L’entrée sécurise les accès et permet de mieux comprendre les sorties inhabituelles.",
    products: [
      {
        type: "door",
        title: "Détecteur d’ouverture",
        text: "Alerte en cas d’ouverture inhabituelle.",
      },
      {
        type: "doorbell",
        title: "Sonnette vidéo",
        text: "Permet de voir qui se présente au domicile.",
      },
      {
        type: "phone",
        title: "Application famille",
        text: "Centralise les alertes importantes.",
      },
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
    area: "col-start-2 col-span-3 row-start-5 row-span-1",
    description:
      "Les zones de passage deviennent plus sûres, surtout pendant les déplacements nocturnes.",
    products: [
      {
        type: "nightlight",
        title: "Veilleuse automatique",
        text: "S’allume au passage la nuit.",
      },
      {
        type: "sensor",
        title: "Capteur de mouvement",
        text: "Repère les déplacements inhabituels.",
      },
      {
        type: "phone",
        title: "Alerte famille",
        text: "Informe uniquement en cas de situation anormale.",
      },
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
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative mb-8 flex items-center justify-between gap-4">
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

            <div className="relative rounded-[38px] border border-white bg-white/70 p-5 shadow-inner backdrop-blur">
              <div className="grid min-h-[620px] grid-cols-4 grid-rows-5 gap-4">
                {rooms.map((room) => {
                  const Icon = room.icon;
                  const isActive = activeRoom.id === room.id;

                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setActiveRoom(room)}
                      className={`${room.area} group relative overflow-hidden rounded-[30px] border p-5 text-left transition duration-300 hover:-translate-y-1 ${
                        isActive
                          ? "border-[#F58220] bg-white shadow-[0_22px_60px_rgba(8,18,46,0.16)]"
                          : "border-slate-100 bg-white/85 shadow-[0_12px_35px_rgba(8,18,46,0.07)] hover:bg-white"
                      }`}
                    >
                      <div
                        className="absolute inset-0 opacity-90"
                        style={{
                          background: `radial-gradient(circle at 20% 10%, ${room.soft}, transparent 45%), linear-gradient(135deg, #ffffff, ${room.soft})`,
                        }}
                      />

                      <div className="relative flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className="flex h-13 w-13 items-center justify-center rounded-2xl p-3 shadow-sm"
                            style={{ backgroundColor: room.soft, color: room.color }}
                          >
                            <Icon className="h-7 w-7" />
                          </div>

                          <span
                            className="h-3 w-3 rounded-full shadow-[0_0_18px_currentColor]"
                            style={{
                              color: room.color,
                              backgroundColor: room.color,
                            }}
                          />
                        </div>

                        <RoomScene roomId={room.id} color={room.color} />

                        <div>
                          <p className="text-2xl font-extrabold">{room.name}</p>
                          <p className="mt-2 text-sm font-semibold text-slate-500">
                            Découvrir les solutions →
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="rounded-[40px] border border-orange-100 bg-white p-7 shadow-[0_30px_90px_rgba(8,18,46,0.12)] lg:sticky lg:top-28 lg:h-fit">
            <div className="grid grid-cols-[1fr_90px] gap-5">
              <div>
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: activeRoom.soft,
                    color: activeRoom.color,
                  }}
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
                style={{
                  backgroundColor: activeRoom.soft,
                  color: activeRoom.color,
                }}
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
                {activeRoom.products.map((product) => (
                  <div
                    key={product.title}
                    className="grid grid-cols-[70px_1fr_22px] items-center gap-4 rounded-[22px] bg-white p-3 shadow-[0_8px_24px_rgba(8,18,46,0.08)]"
                  >
                    <ProductVisual type={product.type} color={activeRoom.color} />

                    <div>
                      <p className="text-sm font-extrabold">{product.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {product.text}
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
                    style={{
                      backgroundColor: activeRoom.soft,
                      color: activeRoom.color,
                    }}
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

function RoomScene({
  roomId,
  color,
}: {
  roomId: string;
  color: string;
}) {
  if (roomId === "chambre") {
    return (
      <div className="relative my-5 h-28">
        <div className="absolute left-3 top-6 h-16 w-36 rounded-[24px] bg-white shadow-xl" />
        <div className="absolute left-8 top-1 h-11 w-24 rounded-[18px] bg-slate-200" />
        <div className="absolute right-8 top-6 h-20 w-12 rounded-[18px] bg-amber-100 shadow-lg" />
        <div className="absolute right-12 top-1 h-6 w-6 rounded-full bg-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.7)]" />
        <div className="absolute bottom-2 left-20 h-3 w-20 rounded-full bg-slate-200" />
      </div>
    );
  }

  if (roomId === "salon") {
    return (
      <div className="relative my-5 h-28">
        <div className="absolute left-4 top-8 h-16 w-40 rounded-[26px] bg-slate-300 shadow-xl" />
        <div className="absolute right-10 top-8 h-16 w-16 rounded-full bg-amber-100 shadow-lg" />
        <div
          className="absolute right-16 top-14 h-6 w-6 rounded-full"
          style={{ backgroundColor: color }}
        />
        <div className="absolute bottom-2 left-12 h-4 w-32 rounded-full bg-slate-200" />
      </div>
    );
  }

  if (roomId === "cuisine") {
    return (
      <div className="relative my-5 h-28">
        <div className="absolute left-4 top-7 h-16 w-44 rounded-[22px] bg-white shadow-xl" />
        <div className="absolute left-10 top-12 h-7 w-7 rounded-full bg-slate-300" />
        <div className="absolute left-24 top-12 h-7 w-7 rounded-full bg-slate-300" />
        <div className="absolute right-8 top-4 h-22 w-12 rounded-[18px] bg-slate-300 shadow-lg" />
        <div className="absolute bottom-1 left-20 h-4 w-24 rounded-full bg-amber-200" />
      </div>
    );
  }

  if (roomId === "salle-bain") {
    return (
      <div className="relative my-5 h-28">
        <div className="absolute left-5 top-10 h-14 w-24 rounded-full bg-white shadow-xl" />
        <div className="absolute right-7 top-4 h-24 w-14 rounded-[22px] bg-slate-200 shadow-lg" />
        <div
          className="absolute right-12 top-9 h-4 w-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <div className="absolute left-12 top-5 h-6 w-14 rounded-full bg-blue-100" />
      </div>
    );
  }

  if (roomId === "entree") {
    return (
      <div className="relative my-5 h-20">
        <div className="absolute left-6 top-0 h-20 w-14 rounded-[20px] bg-amber-200 shadow-xl" />
        <div className="absolute left-12 top-10 h-2 w-2 rounded-full bg-[#08122E]" />
        <div className="absolute right-10 top-8 h-8 w-20 rounded-xl bg-slate-200 shadow-md" />
      </div>
    );
  }

  return (
    <div className="relative my-5 h-20">
      <div className="absolute left-10 top-0 h-20 w-16 rounded-[20px] bg-slate-200 shadow-xl" />
      <div className="absolute right-12 top-11 h-7 w-7 rounded-full bg-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.75)]" />
      <div className="absolute right-20 top-5 h-14 w-3 rounded-full bg-slate-300" />
    </div>
  );
}

function ProductVisual({
  type,
  color,
}: {
  type: string;
  color: string;
}) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8FAFC] shadow-inner">
      {type === "watch" && (
        <div className="relative h-12 w-8">
          <div className="absolute left-2 top-0 h-4 w-4 rounded-t-lg bg-[#111827]" />
          <div className="absolute left-2 bottom-0 h-4 w-4 rounded-b-lg bg-[#111827]" />
          <div className="absolute left-0 top-3 h-7 w-8 rounded-xl bg-[#111827] shadow-lg" />
          <div
            className="absolute left-2 top-5 h-4 w-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      )}

      {type === "nightlight" && (
        <div className="relative h-12 w-8 rounded-2xl bg-white shadow-lg">
          <div className="absolute inset-x-2 top-2 h-3 rounded-full bg-slate-200" />
          <div className="absolute bottom-2 left-1/2 h-5 w-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_22px_rgba(245,158,11,0.8)]" />
        </div>
      )}

      {type === "sos" && (
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white"
            style={{ backgroundColor: color }}
          >
            SOS
          </div>
        </div>
      )}

      {type === "leak" && (
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
          <div className="h-8 w-6 rounded-b-full rounded-t-[20px] bg-blue-300" />
        </div>
      )}

      {type === "sensor" && (
        <div className="relative h-12 w-12 rounded-full bg-white shadow-lg">
          <div className="absolute inset-2 rounded-full border-4 border-slate-200" />
          <div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      )}

      {type === "tablet" && (
        <div className="relative h-12 w-16 rounded-xl bg-[#111827] p-1 shadow-lg">
          <div className="h-full w-full rounded-lg bg-blue-100" />
          <div
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      )}

      {type === "camera" && (
        <div className="relative h-12 w-12 rounded-2xl bg-white shadow-lg">
          <div className="absolute left-3 top-3 h-6 w-6 rounded-full bg-[#111827]" />
          <div
            className="absolute left-5 top-5 h-2 w-2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      )}

      {type === "smoke" && (
        <div className="relative h-10 w-14 rounded-full bg-white shadow-lg">
          <div className="absolute left-3 top-3 h-2 w-8 rounded-full bg-slate-200" />
          <div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      )}

      {type === "pillbox" && (
        <div className="grid h-12 w-12 grid-cols-2 gap-1 rounded-xl bg-white p-1 shadow-lg">
          <div className="rounded-lg bg-blue-100" />
          <div className="rounded-lg bg-orange-100" />
          <div className="rounded-lg bg-emerald-100" />
          <div className="rounded-lg bg-purple-100" />
        </div>
      )}

      {type === "door" && (
        <div className="relative h-12 w-8 rounded-lg bg-amber-200 shadow-lg">
          <div className="absolute right-1 top-6 h-1.5 w-1.5 rounded-full bg-[#08122E]" />
        </div>
      )}

      {type === "doorbell" && (
        <div className="relative h-12 w-8 rounded-xl bg-white shadow-lg">
          <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[#111827]" />
          <div
            className="absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      )}

      {type === "phone" && (
        <div className="relative h-12 w-7 rounded-xl bg-[#111827] p-1 shadow-lg">
          <div className="h-full w-full rounded-lg bg-white" />
          <div
            className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      )}
    </div>
  );
}
