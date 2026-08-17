"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  BellRing,
  Cable,
  ChevronRight,
  CircleUserRound,
  CookingPot,
  DoorOpen,
  Droplets,
  HeartHandshake,
  Home,
  HousePlug,
  Lamp,
  LockKeyhole,
  RadioTower,
  Router,
  ShieldCheck,
  ShoppingCart,
  Siren,
  Smartphone,
  Sparkles,
  ThermometerSun,
  Tv,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";

type RoomKey = "entree" | "salon" | "chambre" | "couloir" | "sdb" | "cuisine";

type HouseProduct = {
  ref: string;
  name: string;
  short: string;
  price?: string;
  icon: typeof Home;
  tone: "teal" | "orange" | "purple" | "blue" | "amber" | "green";
};

type Room = {
  key: RoomKey;
  label: string;
  eyebrow: string;
  description: string;
  icon: typeof Home;
  tone: HouseProduct["tone"];
  products: HouseProduct[];
};

const tones = {
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-700",
    dot: "bg-teal-500",
    soft: "bg-teal-100",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
    dot: "bg-orange-500",
    soft: "bg-orange-100",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
    dot: "bg-purple-500",
    soft: "bg-purple-100",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    dot: "bg-blue-500",
    soft: "bg-blue-100",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    dot: "bg-amber-500",
    soft: "bg-amber-100",
  },
  green: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    soft: "bg-emerald-100",
  },
};

const coreProducts: HouseProduct[] = [
  { ref: "C001", name: "Passerelle Solerya", short: "Home Assistant Green", price: "179 €", icon: HousePlug, tone: "teal" },
  { ref: "C002", name: "Connexion Zigbee", short: "Coordinateur Sonoff", price: "16 €", icon: Wifi, tone: "teal" },
  { ref: "C003", name: "Batterie de secours", short: "Maintient le cœur du système", icon: Cable, tone: "teal" },
  { ref: "C004", name: "Internet de secours 4G", short: "Connexion de repli si la box tombe", icon: RadioTower, tone: "teal" },
];

const rooms: Room[] = [
  {
    key: "entree",
    label: "Entrée",
    eyebrow: "Accès & alertes",
    description: "Savoir quand la porte s'ouvre, simplifier les accès et garder un moyen d'alerte à portée de main.",
    icon: DoorOpen,
    tone: "orange",
    products: [
      { ref: "S003", name: "Détecteur de porte", short: "Ouverture / fermeture", price: "9,29 €", icon: DoorOpen, tone: "orange" },
      { ref: "O004", name: "Sonnette vidéo", short: "Voir qui sonne, si souhaité", price: "129,99 €", icon: BellRing, tone: "orange" },
      { ref: "O005", name: "Serrure connectée", short: "Accès temporaires et autorisés", price: "269 €", icon: LockKeyhole, tone: "orange" },
      { ref: "S001", name: "Bouton SOS", short: "Déclencher une alerte locale", price: "7,43 €", icon: Siren, tone: "orange" },
    ],
  },
  {
    key: "salon",
    label: "Salon",
    eyebrow: "Présence & routines",
    description: "Détecter l'activité quotidienne sans caméra et automatiser les usages utiles du logement.",
    icon: Tv,
    tone: "purple",
    products: [
      { ref: "A001", name: "Capteur de présence", short: "Présence fine sans caméra", price: "49,99 €", icon: Waves, tone: "purple" },
      { ref: "S004", name: "Détecteur de mouvement", short: "Activité générale du domicile", price: "24,99 €", icon: Sparkles, tone: "purple" },
      { ref: "O001", name: "Prise avec mesure", short: "Piloter et suivre un appareil", price: "10,99 €", icon: Cable, tone: "amber" },
      { ref: "O007", name: "Bouton “Je vais bien”", short: "Confirmation volontaire simple", price: "7,43 €", icon: HeartHandshake, tone: "green" },
    ],
  },
  {
    key: "chambre",
    label: "Chambre",
    eyebrow: "Repos & autonomie",
    description: "Rendre la nuit plus sûre, suivre certaines routines et préserver l'autonomie sans caméra.",
    icon: BedDouble,
    tone: "purple",
    products: [
      { ref: "O003", name: "Présence au lit", short: "Lever et retour au lit", price: "99 €", icon: BedDouble, tone: "purple" },
      { ref: "F004", name: "Température & humidité", short: "Confort thermique", price: "24,60 €", icon: ThermometerSun, tone: "blue" },
      { ref: "S001", name: "Bouton SOS", short: "Alerte accessible depuis la chambre", price: "7,43 €", icon: Siren, tone: "orange" },
      { ref: "F001", name: "Éclairage doux", short: "Chemin lumineux automatique", price: "15,99 €", icon: Lamp, tone: "amber" },
    ],
  },
  {
    key: "couloir",
    label: "Couloir",
    eyebrow: "Déplacements nocturnes",
    description: "Éclairer automatiquement les passages et repérer les déplacements inhabituels selon les scénarios choisis.",
    icon: Lamp,
    tone: "amber",
    products: [
      { ref: "F002", name: "Détecteur de mouvement", short: "Déclenche les scénarios de passage", price: "24,99 €", icon: Sparkles, tone: "purple" },
      { ref: "F001", name: "Ampoule chemin lumineux", short: "Éclairage doux la nuit", price: "15,99 €", icon: Lamp, tone: "amber" },
      { ref: "G002", name: "Sirène intérieure", short: "Renforce une alerte locale", price: "29,99 €", icon: Siren, tone: "orange" },
    ],
  },
  {
    key: "sdb",
    label: "Salle de bain",
    eyebrow: "Eau & sécurité",
    description: "Détecter rapidement une fuite et sécuriser une pièce où les risques domestiques sont fréquents.",
    icon: Droplets,
    tone: "blue",
    products: [
      { ref: "F003", name: "Détecteur de fuite", short: "Alerte dès présence d'eau", price: "20,99 €", icon: Droplets, tone: "blue" },
      { ref: "A001", name: "Présence sans caméra", short: "Présence immobile et mouvement", price: "49,99 €", icon: Waves, tone: "purple" },
      { ref: "G001", name: "Coupure d'eau", short: "Ferme l'arrivée d'eau selon scénario", price: "69,99 €", icon: ShieldCheck, tone: "blue" },
    ],
  },
  {
    key: "cuisine",
    label: "Cuisine",
    eyebrow: "Risques & habitudes",
    description: "Prévenir les fuites, la fumée et utiliser certains gestes du quotidien comme indices de routine.",
    icon: CookingPot,
    tone: "blue",
    products: [
      { ref: "S002", name: "Détecteur de fumée", short: "Alerte fumée / incident", price: "50,95 €", icon: Wind, tone: "orange" },
      { ref: "F003", name: "Détecteur de fuite", short: "Sous évier ou lave-vaisselle", price: "20,99 €", icon: Droplets, tone: "blue" },
      { ref: "A002", name: "Ouverture du frigo", short: "Indice de routine cuisine", price: "9,29 €", icon: DoorOpen, tone: "purple" },
      { ref: "A003", name: "Prise suivi d'usage", short: "Cafetière, lampe ou appareil choisi", price: "12,25 €", icon: Cable, tone: "amber" },
      { ref: "O006", name: "Capteur CO₂", short: "Qualité de l'air", price: "50,99 €", icon: Wind, tone: "blue" },
    ],
  },
];

function ProductPill({ product }: { product: HouseProduct }) {
  const tone = tones[product.tone];
  const Icon = product.icon;
  return (
    <div className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${tone.bg} ${tone.border}`}>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80">
        <Icon className={`h-4 w-4 ${tone.text}`} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-extrabold text-[#08122E]">{product.name}</p>
        <p className="truncate text-[11px] text-slate-500">{product.short}</p>
      </div>
      {product.price && <span className="ml-auto shrink-0 text-xs font-extrabold text-[#08122E]">{product.price}</span>}
    </div>
  );
}

export default function SoleryaMaisonPage() {
  const [activeRoom, setActiveRoom] = useState<RoomKey>("salon");

  const room = useMemo(() => rooms.find((item) => item.key === activeRoom) ?? rooms[0], [activeRoom]);
  const activeTone = tones[room.tone];
  const RoomIcon = room.icon;

  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="overflow-hidden bg-[radial-gradient(circle_at_15%_5%,#FFF2E8_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#fffaf6)]">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-8 lg:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
                <Home className="h-4 w-4 text-[#F58220]" />
                La maison Solerya
              </div>
              <h1 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                Voyez concrètement où Solerya agit chez vous.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Explorez une maison fictive pièce par pièce, découvrez les objets qui peuvent y être installés et composez ensuite uniquement ce dont vous avez besoin.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/#equipements" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(245,130,32,0.28)] transition hover:-translate-y-0.5">
                  Composer mon installation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/commande" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold transition hover:bg-slate-50">
                  <ShoppingCart className="h-4 w-4" /> Voir ma commande
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Sans caméra", "pour les routines et la présence"],
                  ["À la carte", "vous choisissez chaque objet"],
                  ["Installation", "Solerya peut tout mettre en service"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-white/85 p-4 shadow-[0_12px_30px_rgba(8,18,46,0.05)]">
                    <p className="text-sm font-extrabold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-14 h-40 w-40 rounded-full bg-orange-100/70 blur-3xl" />
              <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-teal-100/70 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(8,18,46,0.12)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">Vue d'ensemble</p>
                    <h2 className="mt-1 text-2xl font-extrabold">Une maison, plusieurs usages</h2>
                  </div>
                  <div className="rounded-full bg-[#FFF2E8] p-3 text-[#F58220]"><HousePlug className="h-5 w-5" /></div>
                </div>

                <div className="relative mt-5 rounded-[28px] bg-[#F7F9FC] p-4">
                  <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300" />
                  <div className="relative grid min-h-[480px] grid-cols-2 gap-3 md:grid-cols-3">
                    {rooms.map((item, index) => {
                      const isActive = item.key === activeRoom;
                      const tone = tones[item.tone];
                      const Icon = item.icon;
                      const transforms = [
                        "md:translate-y-8",
                        "md:-translate-y-1",
                        "md:translate-y-10",
                        "md:-translate-y-2",
                        "md:translate-y-8",
                        "md:translate-y-1",
                      ];
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setActiveRoom(item.key)}
                          className={`group relative flex min-h-[145px] flex-col justify-between rounded-[24px] border p-4 text-left transition duration-300 ${transforms[index]} ${
                            isActive
                              ? `${tone.bg} ${tone.border} -translate-y-1 shadow-[0_18px_40px_rgba(8,18,46,0.12)] ring-2 ring-white`
                              : "border-white bg-white/85 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isActive ? "bg-white" : tone.soft}`}>
                              <Icon className={`h-5 w-5 ${tone.text}`} />
                            </div>
                            <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${isActive ? "bg-white/90" : "bg-slate-100"} ${tone.text}`}>
                              {item.products.length} objets
                            </span>
                          </div>
                          <div>
                            <p className={`text-[10px] font-bold uppercase tracking-[0.12em] ${tone.text}`}>{item.eyebrow}</p>
                            <p className="mt-1 text-lg font-extrabold">{item.label}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-20 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white bg-[#08122E] text-center text-white shadow-xl md:flex">
                    <div>
                      <Router className="mx-auto h-7 w-7 text-[#F58220]" />
                      <p className="mt-1 text-xs font-extrabold">Cœur<br />Solerya</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {coreProducts.map((product) => <ProductPill key={product.ref} product={product} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-bold text-slate-500">Aller directement à :</span>
            {rooms.map((item) => {
              const tone = tones[item.tone];
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    setActiveRoom(item.key);
                    document.getElementById("piece-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${item.key === activeRoom ? `${tone.bg} ${tone.border} ${tone.text}` : "border-slate-200 bg-white text-slate-700"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="piece-detail" className="scroll-mt-28 bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className={`rounded-[30px] border p-6 ${activeTone.bg} ${activeTone.border}`}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <RoomIcon className={`h-7 w-7 ${activeTone.text}`} />
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-[0.14em] ${activeTone.text}`}>{room.eyebrow}</p>
                <h2 className="mt-1 text-3xl font-extrabold">{room.label}</h2>
              </div>
            </div>

            <p className="mt-5 text-base leading-7 text-slate-600">{room.description}</p>

            <div className="mt-6 rounded-2xl bg-white/75 p-4">
              <p className="text-sm font-extrabold">Ce que Solerya peut faire ici</p>
              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <p>• Installer les équipements adaptés à cette pièce.</p>
                <p>• Les relier au cœur Home Assistant local.</p>
                <p>• Créer les scénarios que vous choisissez.</p>
                <p>• Vous former à leur utilisation.</p>
              </div>
            </div>

            <Link href="/#equipements" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#F58220]">
              Retrouver ces objets dans la boutique <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">Objets suggérés</p>
                <h3 className="mt-1 text-3xl font-extrabold">Pour la pièce « {room.label} »</h3>
              </div>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">{room.products.length} références</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {room.products.map((product) => {
                const tone = tones[product.tone];
                const Icon = product.icon;
                return (
                  <div key={`${room.key}-${product.ref}`} className={`group rounded-[24px] border bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl ${tone.border}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${tone.bg}`}>
                        <Icon className={`h-6 w-6 ${tone.text}`} />
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${tone.bg} ${tone.text}`}>{product.ref}</span>
                    </div>
                    <h4 className="mt-4 text-lg font-extrabold">{product.name}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{product.short}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xl font-extrabold">{product.price ?? "Sur devis"}</span>
                      <Link href="/#equipements" className="rounded-full bg-[#08122E] px-4 py-2 text-xs font-bold text-white transition group-hover:bg-[#F58220]">
                        Voir l'objet
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-[34px] bg-[#08122E] px-7 py-8 text-white md:px-10 md:py-10">
            <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Votre logement, vos choix</p>
                <h2 className="mt-2 max-w-3xl text-3xl font-extrabold md:text-4xl">Vous avez repéré les objets utiles ? Composez maintenant votre propre installation.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Aucun pack imposé : vous choisissez les objets, les quantités et les services dont vous avez réellement besoin.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/#equipements" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-6 py-3.5 text-sm font-bold text-white">
                  Voir les équipements <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/commande" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold">
                  <ShoppingCart className="h-4 w-4" /> Passer la commande
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
