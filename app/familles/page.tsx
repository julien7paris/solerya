"use client";

import Image from "next/image";
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
    position: "left-[30%] top-[20%]",
    description:
      "Un espace clé pour prévenir les chutes nocturnes, rassurer les proches et sécuriser les réveils.",
    products: [
      ["Montre détecteur de chute", "Alerte automatique en cas de chute ou d’immobilité."],
      ["Capteur de mouvement", "Détecte les mouvements et assure une veille discrète."],
      ["Veilleuse automatique", "S’allume la nuit pour sécuriser les déplacements."],
      ["Bouton SOS", "Permet de déclencher une alerte rapidement."],
    ],
    familyBenefit:
      "Vous êtes alerté uniquement en cas d’anomalie. Votre proche reste indépendant, vous restez serein.",
    pack: "Solerya Autonomie",
    price: "79",
    href: "/packs/autonomie",
  },
  {
    id: "salon",
    name: "Salon",
    icon: Sofa,
    color: "#0967D2",
    soft: "#EAF4FF",
    position: "left-[21%] top-[43%]",
    description:
      "Le salon devient un espace rassurant pour garder le lien et repérer les changements d’habitudes.",
    products: [
      ["Appels vidéo simplifiés", "Maintient le lien avec la famille sans complexité."],
      ["Caméra optionnelle", "Permet une levée de doute en cas d’alerte."],
      ["Capteur de présence", "Repère les habitudes de vie sans intrusion."],
      ["Aspirateur connecté", "Allège les tâches du quotidien."],
    ],
    familyBenefit:
      "La famille garde un lien simple et reçoit les bonnes informations au bon moment.",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
  },
  {
    id: "salle-bain",
    name: "Salle de bain",
    icon: Bath,
    color: "#0B8A4A",
    soft: "#E9FFF3",
    position: "right-[18%] top-[28%]",
    description:
      "Une pièce sensible où la détection rapide d’une chute ou d’un incident peut tout changer.",
    products: [
      ["Montre détecteur de chute", "Alerte automatiquement en cas de chute."],
      ["Bouton SOS", "Permet d’appeler à l’aide immédiatement."],
      ["Détecteur de fuite", "Préviens en cas de présence d’eau anormale."],
      ["Capteur de présence", "Aide à identifier les situations inhabituelles."],
    ],
    familyBenefit:
      "Les proches peuvent être prévenus rapidement dans l’une des pièces les plus à risque.",
    pack: "Solerya Sérénité",
    price: "39",
    href: "/packs/serenite",
  },
  {
    id: "cuisine",
    name: "Cuisine",
    icon: ChefHat,
    color: "#F25A1D",
    soft: "#FFF1E6",
    position: "left-[53%] top-[46%]",
    description:
      "La cuisine est sécurisée grâce aux alertes fumée, fuite et rappels de traitement.",
    products: [
      ["Détecteur de fumée connecté", "Alerte en cas de fumée détectée."],
      ["Détecteur de fuite", "Préviens avant qu’un dégât ne s’aggrave."],
      ["Pilulier intelligent", "Rappelle les prises de médicaments à l’heure."],
      ["Notifications famille", "Informe les proches si une action est nécessaire."],
    ],
    familyBenefit:
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
    position: "left-[34%] bottom-[19%]",
    description:
      "L’entrée sécurise les accès et permet de mieux comprendre les sorties inhabituelles.",
    products: [
      ["Détecteur d’ouverture", "Alerte en cas d’ouverture inhabituelle."],
      ["Sonnette vidéo", "Permet de voir qui se présente au domicile."],
      ["Caméra extérieure", "Aide à sécuriser l’entrée."],
      ["Application famille", "Centralise les alertes importantes."],
    ],
    familyBenefit:
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
    position: "right-[23%] bottom-[16%]",
    description:
      "Les zones de passage deviennent plus sûres, surtout pendant les déplacements nocturnes.",
    products: [
      ["Veilleuse automatique", "S’allume au passage la nuit."],
      ["Capteur de mouvement", "Repère les déplacements inhabituels."],
      ["Éclairage intelligent", "Limite les risques de chute."],
      ["Alerte famille", "Informe uniquement en cas de situation anormale."],
    ],
    familyBenefit:
      "Les déplacements sont plus sûrs, sans que votre proche ait besoin d’y penser.",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
  },
];

const trustItems = [
  ["Sécurité", "Des solutions qui préviennent et alertent en cas de besoin."],
  ["Sérénité", "Pour vos proches comme pour toute la famille."],
  ["Simplicité", "Des équipements faciles à installer et à utiliser."],
  ["Accompagnement", "Un conseiller dédié à chaque étape."],
];

export default function FamillesPage() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const ActiveIcon = activeRoom.icon;

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFBFD] text-[#08122E]">
      <header className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF2E8] text-[#F58220]">
            <Home className="h-6 w-6" />
          </div>
          <div>
            <p className="text-3xl font-extrabold leading-none">Solerya</p>
            <p className="mt-1 text-xs text-slate-500">
              Bien vivre chez soi, en toute sérénité
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-bold lg:flex">
          <Link href="/">Accueil</Link>
          <Link href="/#solutions">Solutions</Link>
          <Link href="/familles" className="text-[#F58220]">
            Pour les familles
          </Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/ressources">Ressources</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full border border-[#08122E]/20 px-5 py-3 text-sm font-bold transition hover:bg-white lg:flex"
        >
          <Phone className="h-4 w-4" />
          Être rappelé
        </Link>
      </header>

      <section className="mx-auto grid max-w-[1500px] gap-8 px-6 pb-14 lg:grid-cols-[1fr_430px] lg:px-8">
        <div className="relative min-h-[720px]">
          <div className="absolute left-0 top-8 z-20 max-w-[260px]">
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-[-0.04em]">
              Découvrez la maison Solerya
            </h1>
            <p className="mt-7 text-lg leading-8 text-slate-600">
              Cliquez sur une pièce ou un objet pour découvrir les solutions
              connectées adaptées et le pack recommandé.
            </p>
          </div>

          <div className="absolute inset-x-0 top-0 z-0 mx-auto h-[690px] max-w-[1050px] overflow-hidden rounded-[42px]">
            <Image
              src="/maison-solerya.png"
              alt="Maison connectée Solerya"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFD] via-transparent to-transparent" />
          </div>

          {rooms.map((room) => {
            const Icon = room.icon;
            const isActive = activeRoom.id === room.id;

            return (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room)}
                className={`absolute z-30 flex items-center gap-3 rounded-full border bg-[#08122E] px-4 py-3 text-sm font-extrabold text-white shadow-2xl transition duration-300 hover:-translate-y-1 ${room.position} ${
                  isActive ? "scale-110 border-[#F58220]" : "border-white/40"
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#08122E]">
                  <Icon className="h-5 w-5" />
                </span>
                {room.name}
              </button>
            );
          })}

          <div className="absolute bottom-0 left-0 z-30 w-[230px] rounded-[28px] bg-white/95 p-6 shadow-[0_24px_70px_rgba(8,18,46,0.12)] backdrop-blur">
            <p className="text-sm font-extrabold">Comment ça marche ?</p>

            <div className="mt-5 space-y-4">
              {[
                "Cliquez sur une pièce ou un objet",
                "Découvrez les équipements connectés",
                "Choisissez le pack le plus adapté",
              ].map((step, index) => (
                <div key={step} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#FFF2E8] text-sm font-extrabold text-[#F58220]">
                    {index + 1}
                  </div>
                  <p className="text-xs font-bold leading-5 text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-[270px] right-10 z-30 grid rounded-[28px] bg-white/90 p-6 shadow-[0_24px_70px_rgba(8,18,46,0.10)] backdrop-blur md:grid-cols-4">
            {trustItems.map(([title, text]) => (
              <div key={title} className="border-slate-200 px-4 md:border-r last:border-r-0">
                <ShieldCheck className="h-7 w-7 text-[#08122E]" />
                <p className="mt-3 text-sm font-extrabold">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[32px] border border-orange-100 bg-white/90 p-6 shadow-[0_30px_90px_rgba(8,18,46,0.12)] backdrop-blur">
          <div className="grid grid-cols-[1fr_150px] gap-4">
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
              <h2 className="mt-1 text-4xl font-extrabold">{activeRoom.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {activeRoom.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[24px] bg-slate-100">
              <Image
                src="/maison-solerya.png"
                alt={activeRoom.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 rounded-[28px] bg-white p-5 shadow-[0_16px_40px_rgba(8,18,46,0.06)]">
            <p className="text-sm font-extrabold">
              Équipements connectés recommandés
            </p>

            <div className="mt-5 space-y-3">
              {activeRoom.products.map(([title, text]) => (
                <div
                  key={title}
                  className="grid grid-cols-[52px_1fr_22px] items-center gap-4 rounded-[20px] border border-slate-100 bg-white p-3 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
                    <Watch className="h-6 w-6 text-[#08122E]" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
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
                  {activeRoom.familyBenefit}
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
      </section>

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 pb-20 text-center sm:flex-row sm:justify-center">
        <Link
          href="/contact"
          className="flex items-center gap-3 rounded-full bg-[#F58220] px-10 py-5 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
        >
          Être rappelé par un conseiller
          <Phone className="h-5 w-5" />
        </Link>

        <span className="text-sm text-slate-400">ou</span>

        <Link
          href="/contact"
          className="rounded-full border border-slate-300 bg-white px-10 py-5 text-sm font-extrabold text-[#08122E] transition hover:shadow-sm"
        >
          Prendre rendez-vous en ligne
        </Link>
      </section>
    </main>
  );
}
