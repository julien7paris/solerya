"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AirVent,
  Album,
  BadgeCheck,
  BedDouble,
  BellRing,
  Bot,
  Box,
  Check,
  CircleGauge,
  DoorOpen,
  Droplets,
  GraduationCap,
  HandHeart,
  Headphones,
  HeartHandshake,
  HousePlug,
  KeyRound,
  Lightbulb,
  Minus,
  Plus,
  Radio,
  Router,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Siren,
  Smartphone,
  Sparkles,
  ThermometerSun,
  Video,
  Watch,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

type Product = {
  id: string;
  ref: string;
  category: string;
  name: string;
  brand: string;
  model: string;
  description: string;
  price: number | null;
  icon: LucideIcon;
  accent: string;
  bg: string;
  badge?: string;
};

type Service = {
  id: string;
  group: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  icon: LucideIcon;
};

const highlights: Array<[LucideIcon, string, string]> = [
  [BadgeCheck, "Produits référencés", "Des objets sélectionnés pour fonctionner ensemble."],
  [ShoppingCart, "100 % à la carte", "Vous ajoutez uniquement ce dont vous avez besoin."],
  [Wrench, "Installation possible", "Pose, mise en service et scénarios par Solerya."],
  [HeartHandshake, "Accompagnement humain", "Conseil, formation, SAV et assistance à la demande."],
];

const products: Product[] = [
  // Cœur technique
  {
    id: "ha-green",
    ref: "C001",
    category: "Cœur technique",
    name: "Passerelle Solerya Connect",
    brand: "Nabu Casa",
    model: "Home Assistant Green",
    description: "Le cœur local qui héberge vos objets, scénarios et automatisations.",
    price: 179,
    icon: Router,
    accent: "#0F766E",
    bg: "bg-teal-50",
  },
  {
    id: "zigbee-dongle",
    ref: "C002",
    category: "Cœur technique",
    name: "Coordinateur Zigbee",
    brand: "Sonoff",
    model: "ZBDONGLE-E",
    description: "Relie les objets Zigbee à Home Assistant et étend votre installation.",
    price: 16,
    icon: Radio,
    accent: "#0967D2",
    bg: "bg-blue-50",
  },

  // Alertes & sécurité
  {
    id: "sos-home",
    ref: "S001",
    category: "Alertes & sécurité",
    name: "Bouton SOS domicile",
    brand: "Sonoff",
    model: "SNZB-01P",
    description: "Déclenche immédiatement une demande d'aide depuis le domicile.",
    price: 7.43,
    icon: Siren,
    accent: "#F25A1D",
    bg: "bg-orange-50",
  },
  {
    id: "smoke",
    ref: "S002",
    category: "Alertes & sécurité",
    name: "Détecteur de fumée",
    brand: "Frient",
    model: "SMSZB-120",
    description: "Remonte un incident fumée dans l'installation et vers les proches.",
    price: 50.95,
    icon: ShieldAlert,
    accent: "#DC2626",
    bg: "bg-red-50",
  },
  {
    id: "entry-door",
    ref: "S003",
    category: "Alertes & sécurité",
    name: "Détecteur porte d'entrée",
    brand: "Sonoff",
    model: "SNZB-04P",
    description: "Signale une ouverture, fermeture ou porte restée ouverte.",
    price: 9.29,
    icon: DoorOpen,
    accent: "#0967D2",
    bg: "bg-blue-50",
  },
  {
    id: "indoor-siren",
    ref: "G002",
    category: "Alertes & sécurité",
    name: "Sirène intérieure",
    brand: "Heiman",
    model: "HS2WD-EJ",
    description: "Renforce localement une alerte urgente par un signal sonore.",
    price: 29.99,
    icon: BellRing,
    accent: "#F25A1D",
    bg: "bg-orange-50",
  },
  {
    id: "sos-medallion",
    ref: "O002",
    category: "Alertes & sécurité",
    name: "Bracelet / médaillon SOS",
    brand: "À sourcer",
    model: "Étanche, usage domicile",
    description: "Une demande d'aide portable, pensée pour rester accessible dans le logement.",
    price: 49.9,
    icon: Watch,
    accent: "#8E44CC",
    bg: "bg-purple-50",
    badge: "Pilote",
  },
  {
    id: "fall-radar",
    ref: "O008",
    category: "Alertes & sécurité",
    name: "Détection de chute sans caméra",
    brand: "À sourcer / partenaire",
    model: "Radar mmWave dédié",
    description: "Détection spécialisée d'une chute potentielle, sans caméra ni objet porté.",
    price: 299,
    icon: Waves,
    accent: "#8E44CC",
    bg: "bg-purple-50",
    badge: "R&D / pilote",
  },

  // Présence & routines
  {
    id: "motion-main",
    ref: "S004",
    category: "Présence & routines",
    name: "Capteur de mouvement",
    brand: "Aqara",
    model: "Motion Sensor P1",
    description: "Vérifie l'activité générale et déclenche des scénarios simples.",
    price: 24.99,
    icon: Activity,
    accent: "#8E44CC",
    bg: "bg-purple-50",
  },
  {
    id: "motion-extra",
    ref: "F002",
    category: "Présence & routines",
    name: "Mouvement complémentaire",
    brand: "Aqara",
    model: "Motion Sensor P1",
    description: "Pour couloir, chambre ou salle de bain, notamment la nuit.",
    price: 24.99,
    icon: Activity,
    accent: "#8E44CC",
    bg: "bg-purple-50",
  },
  {
    id: "presence-fp300",
    ref: "A001",
    category: "Présence & routines",
    name: "Présence sans caméra",
    brand: "Aqara",
    model: "Presence Multi-Sensor FP300",
    description: "Détecte présence immobile et mouvement sans recourir à une caméra.",
    price: 49.99,
    icon: CircleGauge,
    accent: "#0B8A4A",
    bg: "bg-emerald-50",
    badge: "Pilote",
  },
  {
    id: "fridge-door",
    ref: "A002",
    category: "Présence & routines",
    name: "Ouverture frigo / placard",
    brand: "Sonoff",
    model: "SNZB-04P",
    description: "Un indice discret de routine quotidienne, sans caméra.",
    price: 9.29,
    icon: DoorOpen,
    accent: "#0967D2",
    bg: "bg-blue-50",
  },
  {
    id: "routine-plug-a1z",
    ref: "A003",
    category: "Présence & routines",
    name: "Prise suivi d'usage",
    brand: "NOUS",
    model: "A1Z + mesure de consommation",
    description: "Suit l'usage d'une cafetière, lampe ou TV comme indice de routine.",
    price: 12.25,
    icon: Zap,
    accent: "#F59E0B",
    bg: "bg-amber-50",
  },
  {
    id: "well-button",
    ref: "O007",
    category: "Présence & routines",
    name: "Bouton « Je vais bien »",
    brand: "Sonoff",
    model: "SNZB-01P",
    description: "Permet de confirmer volontairement que tout va bien.",
    price: 7.43,
    icon: HandHeart,
    accent: "#0B8A4A",
    bg: "bg-emerald-50",
  },
  {
    id: "bed-presence",
    ref: "O003",
    category: "Présence & routines",
    name: "Capteur d'occupation du lit",
    brand: "SlumberTek",
    model: "Smart Bed Presence Sensor",
    description: "Détecte coucher, lever et absence de retour au lit selon scénario.",
    price: 99,
    icon: BedDouble,
    accent: "#8E44CC",
    bg: "bg-purple-50",
    badge: "Pilote",
  },

  // Eau, air & environnement
  {
    id: "water-leak",
    ref: "F003",
    category: "Eau, air & environnement",
    name: "Détecteur de fuite d'eau",
    brand: "Aqara",
    model: "Water Leak Sensor T1",
    description: "Détecte rapidement une fuite en cuisine, salle de bain ou buanderie.",
    price: 20.99,
    icon: Droplets,
    accent: "#0B8A4A",
    bg: "bg-emerald-50",
  },
  {
    id: "temp-humidity",
    ref: "F004",
    category: "Eau, air & environnement",
    name: "Température & humidité",
    brand: "Aqara",
    model: "Temperature & Humidity Sensor T1",
    description: "Surveille chaleur, froid et humidité pour le confort du logement.",
    price: 24.6,
    icon: ThermometerSun,
    accent: "#F25A1D",
    bg: "bg-orange-50",
  },
  {
    id: "co2",
    ref: "O006",
    category: "Eau, air & environnement",
    name: "Capteur CO₂",
    brand: "Heiman",
    model: "HS3AQ",
    description: "Surveille CO₂, température et humidité et aide à décider quand aérer.",
    price: 50.99,
    icon: AirVent,
    accent: "#0F766E",
    bg: "bg-teal-50",
  },
  {
    id: "water-valve",
    ref: "G001",
    category: "Eau, air & environnement",
    name: "Vanne d'arrêt d'eau",
    brand: "Aqara",
    model: "Valve Controller T1",
    description: "Peut couper l'eau automatiquement lorsqu'une fuite est détectée.",
    price: 69.99,
    icon: Droplets,
    accent: "#0967D2",
    bg: "bg-blue-50",
    badge: "Sur validation logement",
  },

  // Confort & automatismes
  {
    id: "night-light",
    ref: "F001",
    category: "Confort & automatismes",
    name: "Ampoule chemin lumineux",
    brand: "ThirdReality",
    model: "E27 Zigbee ZL4",
    description: "Crée un éclairage doux et automatique pour les déplacements nocturnes.",
    price: 15.99,
    icon: Lightbulb,
    accent: "#F59E0B",
    bg: "bg-amber-50",
  },
  {
    id: "smart-plug-a7z",
    ref: "O001",
    category: "Confort & automatismes",
    name: "Prise connectée 16 A",
    brand: "NOUS",
    model: "A7Z + mesure de consommation",
    description: "Pilote un appareil et mesure sa consommation pour vos automatisations.",
    price: 10.99,
    icon: Zap,
    accent: "#F59E0B",
    bg: "bg-amber-50",
  },

  // Accès & extérieur
  {
    id: "video-doorbell",
    ref: "O004",
    category: "Accès & extérieur",
    name: "Sonnette vidéo extérieure",
    brand: "Reolink",
    model: "Video Doorbell WiFi",
    description: "Informe d'une visite et permet une levée de doute si l'option vidéo est activée.",
    price: 129.99,
    icon: Video,
    accent: "#0967D2",
    bg: "bg-blue-50",
    badge: "Option premium",
  },
  {
    id: "smart-lock",
    ref: "O005",
    category: "Accès & extérieur",
    name: "Serrure connectée",
    brand: "Nuki",
    model: "Smart Lock Pro",
    description: "Facilite les accès autorisés et temporaires pour les proches ou intervenants.",
    price: 269,
    icon: KeyRound,
    accent: "#08122E",
    bg: "bg-slate-100",
    badge: "Sur devis installation",
  },

  // Bien-être & lien social
  {
    id: "senior-watch",
    ref: "X001",
    category: "Bien-être & lien social",
    name: "Montre SOS senior",
    brand: "Secure Senior / équivalent",
    model: "À sélectionner",
    description: "Montre d'alerte et de contact pensée pour un usage simple au quotidien.",
    price: null,
    icon: Watch,
    accent: "#8E44CC",
    bg: "bg-purple-50",
    badge: "À sourcer",
  },
  {
    id: "airbag",
    ref: "X002",
    category: "Bien-être & lien social",
    name: "Airbag de protection anti-chute",
    brand: "À sourcer",
    model: "Ceinture / wearable dédié",
    description: "Protection corporelle complémentaire pour les personnes à risque de chute.",
    price: null,
    icon: ShieldCheck,
    accent: "#0B8A4A",
    bg: "bg-emerald-50",
    badge: "À sourcer",
  },
  {
    id: "memory-album",
    ref: "X003",
    category: "Bien-être & lien social",
    name: "Album souvenir intelligent",
    brand: "À sourcer",
    model: "Écran / album familial connecté",
    description: "Photos et messages envoyés facilement par la famille, sans complexité technique.",
    price: null,
    icon: Album,
    accent: "#F25A1D",
    bg: "bg-orange-50",
    badge: "À sourcer",
  },
];

const services: Service[] = [
  {
    id: "install-home",
    group: "Installation & mise en service",
    name: "Déplacement & installation à domicile",
    description: "Pose, mise en place et vérification physique de l'installation.",
    price: 99,
    unit: "forfait",
    icon: Wrench,
  },
  {
    id: "install-object",
    group: "Installation & mise en service",
    name: "Installation d'un objet",
    description: "Pose et raccordement d'un objet supplémentaire.",
    price: 29,
    unit: "objet",
    icon: Box,
  },
  {
    id: "ha-config",
    group: "Installation & mise en service",
    name: "Mise en service Home Assistant",
    description: "Réseau, intégrations, sauvegarde et configuration initiale.",
    price: 99,
    unit: "forfait",
    icon: Settings2,
  },
  {
    id: "object-config",
    group: "Installation & mise en service",
    name: "Connexion & configuration d'un objet",
    description: "Appairage, nommage, test et intégration dans Home Assistant.",
    price: 19,
    unit: "objet",
    icon: HousePlug,
  },
  {
    id: "scenario-simple",
    group: "Scénarios & formation",
    name: "Scénario simple",
    description: "Une automatisation standard : alerte, lumière, ouverture, horaire…",
    price: 29,
    unit: "scénario",
    icon: Sparkles,
  },
  {
    id: "scenario-advanced",
    group: "Scénarios & formation",
    name: "Scénario avancé",
    description: "Automatisation multi-capteurs avec conditions, temporisations ou escalade.",
    price: 59,
    unit: "scénario",
    icon: Bot,
  },
  {
    id: "phone-config",
    group: "Scénarios & formation",
    name: "Configuration smartphone",
    description: "Application, notifications et accès sécurisé configurés sur un téléphone.",
    price: 29,
    unit: "téléphone",
    icon: Smartphone,
  },
  {
    id: "training",
    group: "Scénarios & formation",
    name: "Formation à domicile",
    description: "1 heure pour comprendre l'installation et savoir l'utiliser simplement.",
    price: 69,
    unit: "heure",
    icon: GraduationCap,
  },
  {
    id: "remote-support",
    group: "Assistance & SAV à la carte",
    name: "Assistance à distance",
    description: "30 minutes de diagnostic, aide ou modification lorsque vous en avez besoin.",
    price: 29,
    unit: "session",
    icon: Headphones,
  },
  {
    id: "ha-diagnostic",
    group: "Assistance & SAV à la carte",
    name: "Diagnostic Home Assistant",
    description: "Contrôle de l'état du système et recherche de la cause d'un dysfonctionnement.",
    price: 39,
    unit: "diagnostic",
    icon: Settings2,
  },
  {
    id: "scenario-change",
    group: "Assistance & SAV à la carte",
    name: "Modification d'un scénario",
    description: "Ajustement d'une automatisation déjà en place.",
    price: 29,
    unit: "modification",
    icon: Sparkles,
  },
  {
    id: "home-support",
    group: "Assistance & SAV à la carte",
    name: "Intervention SAV à domicile",
    description: "Déplacement pour diagnostic et intervention sur l'installation.",
    price: 89,
    unit: "intervention",
    icon: Wrench,
  },
];

const categoryOrder = [
  "Cœur technique",
  "Alertes & sécurité",
  "Présence & routines",
  "Eau, air & environnement",
  "Confort & automatismes",
  "Accès & extérieur",
  "Bien-être & lien social",
];

const categoryMeta: Record<string, { eyebrow: string; description: string }> = {
  "Cœur technique": {
    eyebrow: "La base de votre installation",
    description: "Le moteur local et la connexion Zigbee qui font fonctionner l'ensemble.",
  },
  "Alertes & sécurité": {
    eyebrow: "Prévenir et réagir",
    description: "SOS, fumée, ouverture, sirène et solutions de détection dédiées.",
  },
  "Présence & routines": {
    eyebrow: "Comprendre le quotidien sans caméra",
    description: "Mouvement, présence, lit et petits indices de routine configurables.",
  },
  "Eau, air & environnement": {
    eyebrow: "Protéger le logement",
    description: "Fuite, température, humidité, CO₂ et coupure d'eau automatique.",
  },
  "Confort & automatismes": {
    eyebrow: "Simplifier les gestes du quotidien",
    description: "Éclairage, prises et automatisations pour un logement plus confortable.",
  },
  "Accès & extérieur": {
    eyebrow: "Gérer les visites et les accès",
    description: "Sonnette vidéo et contrôle d'accès, avec installation adaptée au logement.",
  },
  "Bien-être & lien social": {
    eyebrow: "Compléter la solution",
    description: "Produits complémentaires encore en sourcing ou en validation Solerya.",
  },
};

const serviceGroups = [
  "Installation & mise en service",
  "Scénarios & formation",
  "Assistance & SAV à la carte",
];

function formatPrice(value: number) {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function SoleryaLandingPage() {
  const [cart, setCart] = useState<Record<string, number>>({
    "ha-green": 1,
    "zigbee-dongle": 1,
    "entry-door": 2,
  });

  const purchasableProducts = products.filter((product) => product.price !== null);
  const allPurchasableItems = [...purchasableProducts, ...services];

  const total = useMemo(
    () =>
      allPurchasableItems.reduce(
        (sum, item) => sum + (cart[item.id] ?? 0) * (item.price ?? 0),
        0,
      ),
    [cart, allPurchasableItems],
  );

  const itemCount = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart],
  );

  const selectedItems = useMemo(
    () => allPurchasableItems.filter((item) => (cart[item.id] ?? 0) > 0),
    [cart, allPurchasableItems],
  );

  function updateItem(id: string, delta: number) {
    setCart((current) => {
      const next = Math.max(0, (current[id] ?? 0) + delta);
      return { ...current, [id]: next };
    });
  }

  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      {/* HERO — retour à la forme de la landing initiale avec vidéo */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_8%,#FFF1E6_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#fffaf5)]">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 pb-10 pt-4 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-12 lg:pt-6">
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(8,18,46,0.16)]">
              <video
                className="h-[340px] w-full object-cover lg:h-[380px]"
                src="/family-international.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-black/55 px-5 py-3 text-sm font-semibold text-white backdrop-blur">
                Découvrir Solerya
              </div>
            </div>

            <div className="mt-5 grid gap-4 rounded-[26px] bg-white/80 p-5 shadow-[0_18px_50px_rgba(8,18,46,0.06)] backdrop-blur sm:grid-cols-2">
              {highlights.map(([Icon, title, text]) => (
                <div key={title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F58220]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#08122E]">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col py-1">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-medium text-[#C95F07]">
              <HousePlug className="h-4 w-4 text-[#F58220]" />
              <span>La domotique à la carte, installée si vous le souhaitez</span>
            </div>

            <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.045em] text-[#08122E] md:text-6xl">
              Composez votre logement connecté, à votre rythme.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Choisissez vos objets, ajoutez l'installation, les scénarios, la formation ou l'assistance dont vous avez besoin. Rien de plus.
            </p>

            <div className="mt-6 rounded-[24px] border border-orange-100 bg-white/85 p-5 shadow-[0_16px_45px_rgba(8,18,46,0.06)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">Mon installation</p>
                  <p className="mt-1 text-lg font-extrabold">{itemCount} article{itemCount > 1 ? "s" : ""} sélectionné{itemCount > 1 ? "s" : ""}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F58220]">
                  <ShoppingCart className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs text-slate-500">Total actuel</p>
                  <p className="text-3xl font-extrabold">{formatPrice(total)} €</p>
                </div>
                <span className="rounded-full bg-[#08122E] px-3 py-2 text-xs font-semibold text-white">Sans abonnement</span>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row">
              <Link
                href="#boutique"
                className="rounded-full bg-[#F58220] px-8 py-4 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
              >
                Composer mon installation →
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-semibold text-[#08122E] transition hover:bg-white hover:shadow-sm"
              >
                Ajouter des services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOUTIQUE + PANIER STICKY */}
      <section id="boutique" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F58220]">1. Les équipements</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Choisissez vos objets connectés</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Chaque objet est proposé à l'unité. Ajoutez-le au panier comme au supermarché, puis complétez avec les services dont vous avez besoin.
          </p>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-12">
            {categoryOrder.map((category) => {
              const items = products.filter((product) => product.category === category);
              const meta = categoryMeta[category];

              return (
                <section key={category}>
                  <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">{meta.eyebrow}</p>
                      <h3 className="mt-1 text-2xl font-extrabold">{category}</h3>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-slate-500 sm:text-right">{meta.description}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((product) => {
                      const Icon = product.icon;
                      const qty = cart[product.id] ?? 0;
                      const available = product.price !== null;

                      return (
                        <article
                          key={product.id}
                          className="flex min-h-[300px] flex-col rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_12px_34px_rgba(8,18,46,0.06)] transition hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${product.bg}`}>
                              <Icon className="h-5 w-5" style={{ color: product.accent }} />
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.ref}</span>
                              {product.badge && (
                                <div className="mt-1 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">{product.badge}</div>
                              )}
                            </div>
                          </div>

                          <h4 className="mt-4 text-base font-extrabold leading-5">{product.name}</h4>
                          <p className="mt-1 text-xs font-semibold text-slate-500">{product.brand} · {product.model}</p>
                          <p className="mt-3 text-sm leading-5 text-slate-600">{product.description}</p>

                          <div className="mt-auto pt-5">
                            {available ? (
                              <>
                                <p className="text-2xl font-extrabold">{formatPrice(product.price as number)} €</p>
                                <div className="mt-3 flex items-center justify-between rounded-full bg-slate-50 p-1.5">
                                  <button
                                    type="button"
                                    onClick={() => updateItem(product.id, -1)}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
                                    aria-label={`Retirer ${product.name}`}
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="text-sm font-bold">{qty}</span>
                                  <button
                                    type="button"
                                    onClick={() => updateItem(product.id, 1)}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F58220] text-white shadow-sm"
                                    aria-label={`Ajouter ${product.name}`}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div className="rounded-2xl bg-[#FFF7EF] px-4 py-3">
                                <p className="text-sm font-extrabold text-[#C95F07]">Prix en cours de référencement</p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">Disponible prochainement après validation Solerya.</p>
                              </div>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <aside className="h-fit xl:sticky xl:top-24">
            <div className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_24px_60px_rgba(8,18,46,0.10)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">Mon installation</p>
                  <h3 className="mt-1 text-xl font-extrabold">Votre panier</h3>
                </div>
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F58220]">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#08122E] px-1 text-[10px] font-bold text-white">{itemCount}</span>
                </div>
              </div>

              <div className="mt-4 max-h-[390px] space-y-2 overflow-y-auto pr-1">
                {selectedItems.length === 0 ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500">
                    Votre panier est vide.
                  </div>
                ) : (
                  selectedItems.map((item) => (
                    <div key={item.id} className="rounded-2xl bg-slate-50 px-3 py-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold leading-4">{item.name}</p>
                          <p className="mt-1 text-[11px] text-slate-500">{cart[item.id]} × {formatPrice(item.price as number)} €</p>
                        </div>
                        <p className="text-xs font-extrabold">{formatPrice((cart[item.id] ?? 0) * (item.price as number))} €</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 rounded-[22px] bg-[#08122E] p-5 text-white">
                <p className="text-xs font-medium text-white/60">Total de votre sélection</p>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <p className="text-3xl font-extrabold">{formatPrice(total)} €</p>
                  <span className="rounded-full bg-white/10 px-3 py-2 text-[11px] font-semibold">Sans abonnement</span>
                </div>
              </div>

              <Link href="#services" className="mt-4 flex w-full items-center justify-center rounded-full bg-[#F58220] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#E36E08]">
                Ajouter des services →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#FFF7EF] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8E44CC]">2. Les services</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Ajoutez les services comme n'importe quel produit</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Installation, mise en service, scénarios, formation, assistance ou SAV : chaque service est à la carte et s'ajoute au même panier.
            </p>
          </div>

          <div className="mt-9 space-y-10">
            {serviceGroups.map((group) => (
              <section key={group}>
                <h3 className="mb-4 text-xl font-extrabold">{group}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {services.filter((service) => service.group === group).map((service) => {
                    const Icon = service.icon;
                    const qty = cart[service.id] ?? 0;
                    return (
                      <article key={service.id} className="flex min-h-[270px] flex-col rounded-[24px] bg-white p-5 shadow-[0_12px_34px_rgba(8,18,46,0.06)]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-[#8E44CC]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-4 text-base font-extrabold leading-5">{service.name}</h4>
                        <p className="mt-2 text-sm leading-5 text-slate-600">{service.description}</p>
                        <div className="mt-auto pt-5">
                          <p className="text-2xl font-extrabold">{formatPrice(service.price)} € <span className="text-[11px] font-medium text-slate-500">/ {service.unit}</span></p>
                          <div className="mt-3 flex items-center justify-between rounded-full bg-slate-50 p-1.5">
                            <button type="button" onClick={() => updateItem(service.id, -1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm" aria-label={`Retirer ${service.name}`}>
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-sm font-bold">{qty}</span>
                            <button type="button" onClick={() => updateItem(service.id, 1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8E44CC] text-white shadow-sm" aria-label={`Ajouter ${service.name}`}>
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] bg-[#08122E] p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F7B477]">Composez votre logement connecté</p>
            <h2 className="mt-3 text-3xl font-extrabold">Vous gardez la main du début à la fin.</h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Votre installation vous appartient. Aucun abonnement obligatoire. Et si vous préférez être accompagné, Solerya peut simplement composer le panier avec vous.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#F58220]" /> Produits visibles et prix unitaires</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#F58220]" /> Services ajoutés uniquement si vous les choisissez</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#F58220]" /> Assistance et SAV disponibles à la carte</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["1", "Vous choisissez", "Objets, quantités et budget : vous composez librement votre panier."],
              ["2", "Solerya vérifie", "Nous vérifions la cohérence technique et les compatibilités."],
              ["3", "Nous installons si besoin", "Vous pouvez nous confier la pose, Home Assistant et les scénarios."],
              ["4", "Vous restez autonome", "Formation, assistance et SAV restent disponibles quand vous le souhaitez."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(8,18,46,0.05)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2E8] text-sm font-extrabold text-[#F58220]">{number}</div>
                <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
