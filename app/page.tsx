"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AirVent,
  Album,
  BadgeCheck,
  BatteryCharging,
  BedDouble,
  BellRing,
  ChevronRight,
  CircleGauge,
  DoorOpen,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  HousePlug,
  KeyRound,
  Lightbulb,
  Minus,
  Plus,
  Radio,
  Router,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Siren,
  Sparkles,
  Target,
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
  [HeartHandshake, "Accompagnement humain", "Conseil et formation quand vous en avez besoin."],
  [Target, "Pour aujourd’hui et pour demain", "Pensé pour bien vivre chez soi, conçu pour rassurer ceux qui comptent."],
];

const products: Product[] = [
  {
    id: "ha-green", ref: "C001", category: "Cœur technique", name: "Passerelle Solerya Connect",
    brand: "Nabu Casa", model: "Home Assistant Green",
    description: "Le cœur local qui héberge vos objets, scénarios et automatisations.",
    price: 179, icon: Router, accent: "#0F766E", bg: "bg-teal-50",
  },
  {
    id: "zigbee-dongle", ref: "C002", category: "Cœur technique", name: "Connexion des objets Zigbee",
    brand: "Sonoff", model: "ZBDONGLE-E",
    description: "Relie les capteurs et objets Zigbee à votre installation Solerya.",
    price: 16, icon: Radio, accent: "#0967D2", bg: "bg-blue-50",
  },
  {
    id: "backup-power", ref: "C003", category: "Cœur technique", name: "Batterie de secours",
    brand: "Référence Solerya à valider", model: "Mini-UPS / onduleur",
    description: "Maintient le cœur de l'installation alimenté lors d'une coupure de courant.",
    price: 79, icon: BatteryCharging, accent: "#0B8A4A", bg: "bg-emerald-50", badge: "Recommandé",
  },
  {
    id: "backup-4g", ref: "C004", category: "Cœur technique", name: "Internet de secours 4G",
    brand: "TP-Link", model: "Routeur 4G LTE",
    description: "Prend le relais via le réseau mobile si la connexion Internet du logement tombe.",
    price: 89, icon: Router, accent: "#F25A1D", bg: "bg-orange-50", badge: "Option sécurité",
  },
  {
    id: "sos-home", ref: "S001", category: "Alertes & sécurité", name: "Bouton SOS domicile",
    brand: "Sonoff", model: "SNZB-01P", description: "Déclenche immédiatement une demande d'aide depuis le domicile.",
    price: 7.43, icon: Siren, accent: "#F25A1D", bg: "bg-orange-50",
  },
  {
    id: "smoke", ref: "S002", category: "Alertes & sécurité", name: "Détecteur de fumée",
    brand: "Frient", model: "SMSZB-120", description: "Remonte un incident fumée dans l'installation et vers les proches.",
    price: 50.95, icon: ShieldAlert, accent: "#DC2626", bg: "bg-red-50",
  },
  {
    id: "entry-door", ref: "S003", category: "Alertes & sécurité", name: "Détecteur porte d'entrée",
    brand: "Sonoff", model: "SNZB-04P", description: "Signale une ouverture, fermeture ou porte restée ouverte.",
    price: 9.29, icon: DoorOpen, accent: "#0967D2", bg: "bg-blue-50",
  },
  {
    id: "indoor-siren", ref: "G002", category: "Alertes & sécurité", name: "Sirène intérieure",
    brand: "Heiman", model: "HS2WD-EJ", description: "Renforce localement une alerte urgente par un signal sonore.",
    price: 29.99, icon: BellRing, accent: "#F25A1D", bg: "bg-orange-50",
  },
  {
    id: "sos-medallion", ref: "O002", category: "Alertes & sécurité", name: "Bracelet / médaillon SOS",
    brand: "À sourcer", model: "Étanche, usage domicile", description: "Une demande d'aide portable, toujours à portée de main.",
    price: 49.9, icon: Watch, accent: "#8E44CC", bg: "bg-purple-50", badge: "Pilote",
  },
  {
    id: "fall-radar", ref: "O008", category: "Alertes & sécurité", name: "Détection de chute sans caméra",
    brand: "À sourcer / partenaire", model: "Radar mmWave dédié", description: "Détection spécialisée d'une chute potentielle, sans caméra ni objet porté.",
    price: 299, icon: Waves, accent: "#8E44CC", bg: "bg-purple-50", badge: "R&D / pilote",
  },
  {
    id: "motion-main", ref: "S004", category: "Présence & routines", name: "Capteur de mouvement",
    brand: "Aqara", model: "Motion Sensor P1", description: "Vérifie l'activité générale et déclenche des scénarios simples.",
    price: 24.99, icon: Activity, accent: "#8E44CC", bg: "bg-purple-50", border: "border-purple-100", button: "bg-purple-600",
  },
  {
    id: "motion-extra", ref: "F002", category: "Présence & routines", name: "Mouvement complémentaire",
    brand: "Aqara", model: "Motion Sensor P1", description: "Pour couloir, chambre ou salle de bain, notamment la nuit.",
    price: 24.99, icon: Activity, accent: "#8E44CC", bg: "bg-purple-50", border: "border-purple-100", button: "bg-purple-600",
  },
  {
    id: "presence-fp300", ref: "A001", category: "Présence & routines", name: "Présence sans caméra",
    brand: "Aqara", model: "Presence Multi-Sensor FP300", description: "Détecte présence immobile et mouvement sans recourir à une caméra.",
    price: 49.99, icon: CircleGauge, accent: "#0B8A4A", bg: "bg-emerald-50", badge: "Pilote",
  },
  {
    id: "fridge-door", ref: "A002", category: "Présence & routines", name: "Ouverture frigo / placard",
    brand: "Sonoff", model: "SNZB-04P", description: "Un indice discret de routine quotidienne, sans caméra.",
    price: 9.29, icon: DoorOpen, accent: "#0967D2", bg: "bg-blue-50",
  },
  {
    id: "routine-plug-a1z", ref: "A003", category: "Présence & routines", name: "Prise suivi d'usage",
    brand: "NOUS", model: "A1Z + mesure de consommation", description: "Suit l'usage d'une cafetière, lampe ou TV comme indice de routine.",
    price: 12.25, icon: Zap, accent: "#F59E0B", bg: "bg-amber-50",
  },
  {
    id: "well-button", ref: "O007", category: "Présence & routines", name: "Bouton « Je vais bien »",
    brand: "Sonoff", model: "SNZB-01P", description: "Permet de confirmer volontairement que tout va bien.",
    price: 7.43, icon: HandHeart, accent: "#0B8A4A", bg: "bg-emerald-50",
  },
  {
    id: "bed-presence", ref: "O003", category: "Présence & routines", name: "Capteur d'occupation du lit",
    brand: "SlumberTek", model: "Smart Bed Presence Sensor", description: "Détecte coucher, lever et absence de retour au lit selon scénario.",
    price: 99, icon: BedDouble, accent: "#8E44CC", bg: "bg-purple-50", badge: "Pilote",
  },
  {
    id: "water-leak", ref: "F003", category: "Eau, air & environnement", name: "Détecteur de fuite d'eau",
    brand: "Aqara", model: "Water Leak Sensor T1", description: "Détecte rapidement une fuite en cuisine, salle de bain ou buanderie.",
    price: 20.99, icon: Droplets, accent: "#0B8A4A", bg: "bg-emerald-50",
  },
  {
    id: "temp-humidity", ref: "F004", category: "Eau, air & environnement", name: "Température & humidité",
    brand: "Aqara", model: "Temperature & Humidity Sensor T1", description: "Surveille chaleur, froid et humidité pour le confort du logement.",
    price: 24.6, icon: ThermometerSun, accent: "#F25A1D", bg: "bg-orange-50",
  },
  {
    id: "co2", ref: "O006", category: "Eau, air & environnement", name: "Capteur CO₂",
    brand: "Heiman", model: "HS3AQ", description: "Surveille la qualité de l'air et aide à décider quand aérer.",
    price: 50.99, icon: AirVent, accent: "#0F766E", bg: "bg-teal-50",
  },
  {
    id: "water-valve", ref: "G001", category: "Eau, air & environnement", name: "Vanne d'arrêt d'eau",
    brand: "Aqara", model: "Valve Controller T1", description: "Peut couper l'eau automatiquement lorsqu'une fuite est détectée.",
    price: 69.99, icon: Droplets, accent: "#0967D2", bg: "bg-blue-50", border: "border-blue-100", button: "bg-blue-600", badge: "Sur validation logement",
  },
  {
    id: "night-light", ref: "F001", category: "Confort & automatismes", name: "Ampoule chemin lumineux",
    brand: "ThirdReality", model: "E27 Zigbee ZL4", description: "Crée un éclairage doux et automatique pour les déplacements nocturnes.",
    price: 15.99, icon: Lightbulb, accent: "#F59E0B", bg: "bg-amber-50", border: "border-amber-100", button: "bg-amber-500",
  },
  {
    id: "smart-plug-a7z", ref: "O001", category: "Confort & automatismes", name: "Prise connectée 16 A",
    brand: "NOUS", model: "A7Z + mesure de consommation", description: "Pilote un appareil et mesure sa consommation pour vos automatisations.",
    price: 10.99, icon: Zap, accent: "#F59E0B", bg: "bg-amber-50",
  },
  {
    id: "video-doorbell", ref: "O004", category: "Confort & automatismes", name: "Sonnette vidéo extérieure",
    brand: "Reolink", model: "Video Doorbell WiFi", description: "Informe d'une visite et permet une levée de doute si l'option vidéo est activée.",
    price: 129.99, icon: Video, accent: "#0967D2", bg: "bg-blue-50", badge: "Option premium",
  },
  {
    id: "smart-lock", ref: "O005", category: "Confort & automatismes", name: "Serrure connectée",
    brand: "Nuki", model: "Smart Lock Pro", description: "Facilite les accès autorisés et temporaires pour les proches ou intervenants.",
    price: 269, icon: KeyRound, accent: "#08122E", bg: "bg-slate-100", badge: "Sur devis installation",
  },
  {
    id: "senior-watch", ref: "X001", category: "Bien-être & lien social", name: "Montre SOS senior",
    brand: "Secure Senior / équivalent", model: "À sélectionner", description: "Montre d'alerte et de contact pensée pour un usage simple au quotidien.",
    price: null, icon: Watch, accent: "#8E44CC", bg: "bg-purple-50", badge: "À sourcer",
  },
  {
    id: "airbag", ref: "X002", category: "Bien-être & lien social", name: "Airbag de protection anti-chute",
    brand: "À sourcer", model: "Ceinture / wearable dédié", description: "Protection corporelle complémentaire pour les personnes à risque de chute.",
    price: null, icon: ShieldCheck, accent: "#0B8A4A", bg: "bg-emerald-50", badge: "À sourcer",
  },
  {
    id: "memory-album", ref: "X003", category: "Bien-être & lien social", name: "Album souvenir intelligent",
    brand: "À sourcer", model: "Écran / album familial connecté", description: "Photos et messages envoyés facilement par la famille, sans complexité technique.",
    price: null, icon: Album, accent: "#F25A1D", bg: "bg-orange-50", badge: "À sourcer",
  },
];

const services: Service[] = [
  {
    id: "full-install", name: "Déplacement & installation complète",
    description: "Déplacement, pose, mise en service des objets et configuration de l'installation.",
    price: 250, unit: "forfait", icon: Wrench,
  },
  {
    id: "scenario-simple", name: "Scénario simple",
    description: "Une automatisation standard : alerte, lumière, ouverture ou horaire.",
    price: 29, unit: "scénario", icon: Sparkles,
  },
  {
    id: "scenario-advanced", name: "Scénario avancé",
    description: "Automatisation multi-capteurs avec conditions, temporisations ou escalade.",
    price: 59, unit: "scénario", icon: Activity,
  },
  {
    id: "training", name: "Formation à domicile",
    description: "1 heure pour comprendre l'installation et savoir l'utiliser simplement.",
    price: 69, unit: "heure", icon: GraduationCap,
  },
];

const categoryOrder = [
  "Cœur technique",
  "Alertes & sécurité",
  "Présence & routines",
  "Eau, air & environnement",
  "Confort & automatismes",
  "Bien-être & lien social",
];

const categoryMeta: Record<string, { eyebrow: string; description: string; icon: LucideIcon; accent: string; bg: string; border: string; button: string }> = {
  "Cœur technique": {
    eyebrow: "La base de votre installation",
    description: "Le cœur du système, sa connexion aux objets et les solutions de secours.",
    icon: HousePlug, accent: "#0F766E", bg: "bg-teal-50", border: "border-teal-100", button: "bg-teal-600",
  },
  "Alertes & sécurité": {
    eyebrow: "Prévenir et réagir",
    description: "SOS, fumée, ouverture, sirène et détection de chute.",
    icon: ShieldAlert, accent: "#F25A1D", bg: "bg-orange-50", border: "border-orange-100", button: "bg-orange-500",
  },
  "Présence & routines": {
    eyebrow: "Comprendre le quotidien sans caméra",
    description: "Mouvement, présence, lever, repas et habitudes de vie.",
    icon: Activity, accent: "#8E44CC", bg: "bg-purple-50", border: "border-purple-100", button: "bg-purple-600",
  },
  "Eau, air & environnement": {
    eyebrow: "Protéger le logement",
    description: "Fuite, température, humidité, CO₂ et coupure d'eau.",
    icon: Droplets, accent: "#0967D2", bg: "bg-blue-50", border: "border-blue-100", button: "bg-blue-600",
  },
  "Confort & automatismes": {
    eyebrow: "Simplifier les gestes du quotidien",
    description: "Éclairage, prises, sonnette et accès pour un quotidien plus simple.",
    icon: Lightbulb, accent: "#F59E0B", bg: "bg-amber-50", border: "border-amber-100", button: "bg-amber-500",
  },
  "Bien-être & lien social": {
    eyebrow: "Compléter la solution",
    description: "Des solutions complémentaires pour la sécurité et le lien familial.",
    icon: HeartHandshake, accent: "#0B8A4A", bg: "bg-emerald-50", border: "border-emerald-100", button: "bg-emerald-600",
  },
};

function formatPrice(value: number) {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function SoleryaLandingPage() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const purchasableProducts = products.filter((product) => product.price !== null);
  const allPurchasableItems = [...purchasableProducts, ...services];

  const total = useMemo(
    () => allPurchasableItems.reduce((sum, item) => sum + (cart[item.id] ?? 0) * (item.price ?? 0), 0),
    [cart, allPurchasableItems],
  );

  const itemCount = useMemo(() => Object.values(cart).reduce<number>((sum, qty) => sum + qty, 0), [cart]);
  const productCount = useMemo(() => purchasableProducts.reduce((sum, item) => sum + (cart[item.id] ?? 0), 0), [cart, purchasableProducts]);
  const serviceCount = useMemo(() => services.reduce((sum, item) => sum + (cart[item.id] ?? 0), 0), [cart]);
  const selectedItems = useMemo(() => allPurchasableItems.filter((item) => (cart[item.id] ?? 0) > 0), [cart, allPurchasableItems]);

  function updateItem(id: string, delta: number) {
    setCart((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + delta) }));
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        header img[src*="logo"], header img[alt*="Solerya"], footer img[src*="logo"], footer img[alt*="Solerya"] {
          width: 154px !important;
          max-width: 154px !important;
          height: auto !important;
          object-fit: contain !important;
        }
        @media (max-width: 768px) {
          header img[src*="logo"], header img[alt*="Solerya"], footer img[src*="logo"], footer img[alt*="Solerya"] {
            width: 132px !important;
            max-width: 132px !important;
          }
        }
      `}</style>

      {/* HERO : deux rangées alignées, sans hauteur forcée */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_8%,#FFF1E6_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#fffaf5)]">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8 lg:pb-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(8,18,46,0.14)]">
              <video className="h-[310px] w-full object-cover lg:h-[330px]" src="/family-international.mp4" autoPlay muted loop playsInline />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur">Découvrir Solerya</div>
            </div>

            <div className="flex flex-col justify-center py-1">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-medium text-[#C95F07]">
                <HousePlug className="h-4 w-4 text-[#F58220]" /><span>La domotique à la carte, installée si vous le souhaitez</span>
              </div>
              <h1 className="mt-4 max-w-2xl text-[42px] font-bold leading-[1.03] tracking-[-0.045em] md:text-[52px]">
                Composez votre logement connecté, à votre rythme.
              </h1>
              <p className="mt-4 max-w-xl text-[17px] leading-7 text-slate-600">
                Choisissez vos objets, ajoutez l'installation, les scénarios ou la formation dont vous avez besoin. Rien de plus.
              </p>
            </div>
          </div>

          {/* Deux blocs strictement alignés */}
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <div className="flex h-full flex-col rounded-[26px] bg-white/90 p-5 shadow-[0_16px_45px_rgba(8,18,46,0.06)] backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">Solerya, pour aujourd'hui et pour demain</p>
                  <p className="mt-1 text-sm font-extrabold">Bien vivre chez soi. Rassurer ceux qui comptent.</p>
                </div>
                <Target className="h-5 w-5 shrink-0 text-[#F58220]" />
              </div>
              <div className="mt-4 grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {categoryOrder.map((category) => {
                  const meta = categoryMeta[category];
                  const Icon = meta.icon;
                  return (
                    <button key={category} type="button" onClick={() => scrollTo(`cat-${slugify(category)}`)} className={`group flex min-h-[86px] items-start gap-2.5 rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${meta.bg} ${meta.border}`}>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80"><Icon className="h-4 w-4" style={{ color: meta.accent }} /></div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.08em]" style={{ color: meta.accent }}>{meta.eyebrow}</p>
                        <p className="mt-0.5 text-xs font-extrabold leading-4">{category}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex h-full flex-col rounded-[26px] border border-orange-200 bg-white p-5 shadow-[0_18px_50px_rgba(245,130,32,0.11)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">Mon installation</p>
                  <p className="mt-1 text-xl font-extrabold">{productCount} objet{productCount > 1 ? "s" : ""} sélectionné{productCount > 1 ? "s" : ""}</p>
                  {serviceCount > 0 && <p className="mt-1 text-xs font-medium text-slate-500">+ {serviceCount} service{serviceCount > 1 ? "s" : ""}</p>}
                </div>
                <Link href="/commande" className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F58220] transition hover:scale-105" aria-label="Voir le résumé de la commande">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#08122E] px-1 text-[10px] font-bold text-white">{productCount}</span>
                </Link>
              </div>
              <div className="mt-3 flex items-end justify-between gap-4 border-t border-slate-100 pt-3">
                <div><p className="text-xs text-slate-500">Total actuel</p><p className="text-3xl font-extrabold">{formatPrice(total)} €</p></div>
                <div className="flex flex-col items-end gap-2"><span className="rounded-full bg-[#08122E] px-3 py-2 text-xs font-semibold text-white">Sans abonnement</span><Link href="/commande" className="text-xs font-extrabold text-[#F58220] hover:underline">Voir ma commande →</Link></div>
              </div>
              <div className="mt-auto grid gap-3 pt-4 sm:grid-cols-[1.35fr_0.85fr]">
                <button type="button" onClick={() => scrollTo("boutique")} className="group flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(245,130,32,0.30)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]">Composer mon installation <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
                <button type="button" onClick={() => scrollTo("services")} className="rounded-full border border-slate-300 px-5 py-3.5 text-sm font-semibold transition hover:bg-slate-50">Ajouter des services</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPEMENTS : aperçu des 6 univers + panier latéral dès le premier écran */}
      <section id="boutique" className="scroll-mt-[104px] border-t border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
            <div className="min-w-0">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F58220]">1. Les équipements</p>
                  <h2 className="mt-2 text-4xl font-extrabold tracking-tight">Choisissez vos objets connectés</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">Commencez par un univers, découvrez les objets qui le composent et ajoutez vos quantités au panier.</p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {categoryOrder.map((category) => {
                  const meta = categoryMeta[category];
                  const Icon = meta.icon;
                  const count = products.filter((p) => p.category === category).length;
                  return (
                    <button key={category} type="button" onClick={() => scrollTo(`cat-${slugify(category)}`)} className={`group flex min-h-[166px] items-start gap-4 rounded-[24px] border p-5 text-left shadow-[0_10px_30px_rgba(8,18,46,0.04)] transition hover:-translate-y-1 hover:shadow-lg ${meta.bg} ${meta.border}`}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80"><Icon className="h-5 w-5" style={{ color: meta.accent }} /></div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: meta.accent }}>{meta.eyebrow}</p>
                        <h3 className="mt-1 text-lg font-extrabold leading-5">{category}</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-600">{meta.description}</p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-extrabold" style={{ color: meta.accent }}>Voir {count} produit{count > 1 ? "s" : ""} <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 space-y-10">
                {categoryOrder.map((category) => {
                  const items = products.filter((p) => p.category === category);
                  const meta = categoryMeta[category];
                  return (
                    <section key={category} id={`cat-${slugify(category)}`} className={`scroll-mt-[104px] rounded-[30px] border p-5 sm:p-6 ${meta.bg} ${meta.border}`}>
                      <div className="mb-5 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                        <div><p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: meta.accent }}>{meta.eyebrow}</p><h3 className="mt-1 text-2xl font-extrabold">{category}</h3></div>
                        <p className="max-w-xl text-sm leading-6 text-slate-600 lg:text-right">{meta.description}</p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((product) => {
                          const Icon = product.icon;
                          const qty = cart[product.id] ?? 0;
                          const available = product.price !== null;
                          return (
                            <article key={product.id} className={`flex min-h-[286px] min-w-0 flex-col overflow-hidden rounded-[22px] border p-5 shadow-[0_10px_28px_rgba(8,18,46,0.045)] transition hover:-translate-y-1 hover:shadow-md ${meta.bg} ${meta.border}`}>
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/85"><Icon className="h-5 w-5" style={{ color: meta.accent }} /></div>
                                <div className="min-w-0 text-right"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{product.ref}</span>{product.badge && <div className="mt-1 max-w-[126px] truncate rounded-full bg-white/80 px-2 py-1 text-[9px] font-semibold text-slate-600">{product.badge}</div>}</div>
                              </div>
                              <h4 className="mt-4 break-words text-[15px] font-extrabold leading-5">{product.name}</h4>
                              <p className="mt-1 break-words text-[11px] font-semibold leading-4 text-slate-500">{product.brand} · {product.model}</p>
                              <p className="mt-3 text-[13px] leading-5 text-slate-600">{product.description}</p>
                              <div className="mt-auto pt-4">
                                {available ? (
                                  <>
                                    <p className="text-2xl font-extrabold">{formatPrice(product.price as number)} €</p>
                                    <div className="mt-3 flex items-center justify-between rounded-full bg-white/75 p-1.5 ring-1 ring-white/80">
                                      <button type="button" onClick={() => updateItem(product.id, -1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm" aria-label={`Retirer ${product.name}`}><Minus className="h-4 w-4" /></button>
                                      <span className="text-sm font-bold">{qty}</span>
                                      <button type="button" onClick={() => updateItem(product.id, 1)} className={`flex h-9 w-9 items-center justify-center rounded-full text-white shadow-sm ${meta.button}`} aria-label={`Ajouter ${product.name}`}><Plus className="h-4 w-4" /></button>
                                    </div>
                                  </>
                                ) : (
                                  <div className="rounded-2xl bg-white/75 px-4 py-3"><p className="text-sm font-extrabold" style={{ color: meta.accent }}>Bientôt disponible</p><p className="mt-1 text-xs leading-5 text-slate-500">Référence en cours de validation Solerya.</p></div>
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
            </div>

            <aside className="h-fit xl:sticky xl:top-[92px]">
              <div className="flex max-h-[calc(100vh-108px)] min-h-[530px] flex-col rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_24px_60px_rgba(8,18,46,0.10)]">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F58220]">Mon installation</p><h3 className="mt-1 text-xl font-extrabold">Votre panier</h3></div>
                  <Link href="/commande" className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F58220]" aria-label="Voir ma commande"><ShoppingCart className="h-5 w-5" /><span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#08122E] px-1 text-[10px] font-bold text-white">{itemCount}</span></Link>
                </div>
                <div className="mt-4 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1">
                  {selectedItems.length === 0 ? <div className="rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500">Votre panier est vide. Ajoutez les objets utiles depuis les rubriques à gauche.</div> : selectedItems.map((item) => (
                    <div key={item.id} className="rounded-xl bg-slate-50 px-3 py-2"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="truncate text-[11px] font-semibold leading-4">{item.name}</p><p className="mt-0.5 text-[10px] text-slate-500">{cart[item.id]} × {formatPrice(item.price as number)} €</p></div><p className="whitespace-nowrap text-[11px] font-extrabold">{formatPrice((cart[item.id] ?? 0) * (item.price as number))} €</p></div></div>
                  ))}
                </div>
                <div className="shrink-0 border-t border-slate-100 bg-white pt-3">
                  <div className="rounded-[22px] bg-[#08122E] p-4 text-white"><p className="text-[11px] font-medium text-white/60">Total de votre sélection</p><div className="mt-1 flex items-end justify-between gap-3"><p className="text-2xl font-extrabold">{formatPrice(total)} €</p><span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-semibold">Sans abonnement</span></div></div>
                  <button type="button" onClick={() => scrollTo("services")} className="mt-3 flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-xs font-bold transition hover:bg-slate-50">Ajouter des services</button>
                  <Link href="/commande" className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-full bg-[#F58220] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(245,130,32,0.25)] transition hover:bg-[#E36E08]"><ShoppingCart className="h-4 w-4" /> Passer la commande</Link>
                  <p className="mt-1.5 text-center text-[10px] leading-4 text-slate-400">Vous pourrez vérifier votre panier avant le paiement.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SERVICES SIMPLIFIÉS */}
      <section id="services" className="scroll-mt-[112px] bg-[#FFF7EF] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8E44CC]">2. Les services</p><h2 className="mt-2 text-4xl font-extrabold tracking-tight">Ajoutez uniquement l'accompagnement utile</h2><p className="mt-3 text-base leading-7 text-slate-600">Quatre services simples, ajoutés au même panier que vos équipements.</p></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              const qty = cart[service.id] ?? 0;
              return (
                <article key={service.id} className="flex min-h-[260px] flex-col rounded-[24px] bg-white p-5 shadow-[0_12px_34px_rgba(8,18,46,0.06)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-[#8E44CC]"><Icon className="h-5 w-5" /></div>
                  <h4 className="mt-4 text-base font-extrabold leading-5">{service.name}</h4><p className="mt-2 text-sm leading-5 text-slate-600">{service.description}</p>
                  <div className="mt-auto pt-5"><p className="text-2xl font-extrabold">{formatPrice(service.price)} € <span className="text-[11px] font-medium text-slate-500">/ {service.unit}</span></p><div className="mt-3 flex items-center justify-between rounded-full bg-slate-50 p-1.5"><button type="button" onClick={() => updateItem(service.id, -1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"><Minus className="h-4 w-4" /></button><span className="text-sm font-bold">{qty}</span><button type="button" onClick={() => updateItem(service.id, 1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8E44CC] text-white shadow-sm"><Plus className="h-4 w-4" /></button></div></div>
                </article>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center"><button type="button" onClick={() => scrollTo("boutique")} className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5">← Revenir aux équipements</button></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-[30px] bg-[#08122E] p-7 text-white lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F7B477]">Votre installation, votre choix</p><h2 className="mt-2 text-3xl font-extrabold">Achetez uniquement ce qui vous est utile.</h2><p className="mt-3 text-sm leading-6 text-white/70">Votre installation vous appartient. Aucun abonnement obligatoire. Solerya peut vous accompagner pour le choix, l'installation, les scénarios et la formation.</p></div>
          <button type="button" onClick={() => scrollTo("boutique")} className="mt-6 shrink-0 rounded-full bg-[#F58220] px-7 py-4 text-sm font-extrabold text-white lg:mt-0">Composer mon installation →</button>
        </div>
      </section>
    </main>
  );
}
