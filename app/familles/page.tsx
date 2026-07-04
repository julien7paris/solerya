"use client";

import Image from "next/image";
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
    position: "left-[11%] top-[10%] h-[34%] w-[39%]",
    description:
      "Un espace clé pour prévenir les chutes nocturnes, sécuriser les levers et rassurer les proches.",
    products: [
      { title: "Montre détecteur de chute", text: "Alerte automatique en cas de chute ou d’immobilité.", image: "/objets/montre-detecteur-chute.png" },
      { title: "Veilleuse automatique", text: "S’allume la nuit pour sécuriser les déplacements.", image: "/objets/veilleuse-automatique.png" },
      { title: "Bouton SOS", text: "Permet de déclencher une alerte rapidement.", image: "/objets/bouton-sos.png" },
    ],
    benefit: "Votre proche reste indépendant, et vous êtes alerté uniquement en cas d’anomalie.",
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
    position: "left-[53%] top-[10%] h-[34%] w-[36%]",
    description:
      "Une pièce sensible où la détection rapide d’un incident peut faire toute la différence.",
    products: [
      { title: "Montre détecteur de chute", text: "Alerte automatiquement en cas de chute.", image: "/objets/montre-detecteur-chute.png" },
      { title: "Détecteur de fuite", text: "Préviens en cas de présence d’eau anormale.", image: "/objets/detecteur-fuite.png" },
      { title: "Capteur de présence", text: "Aide à identifier les situations inhabituelles.", image: "/objets/capteur-mouvement.png" },
    ],
    benefit: "La famille peut être prévenue rapidement dans l’une des pièces les plus à risque.",
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
    position: "left-[11%] top-[48%] h-[31%] w-[39%]",
    description:
      "Le salon devient un espace rassurant pour garder le lien et suivre les habitudes de vie.",
    products: [
      { title: "Appels vidéo simplifiés", text: "Maintient le lien avec la famille sans complexité.", image: "/objets/tablette-visio.png" },
      { title: "Capteur de mouvement", text: "Repère les habitudes sans intrusion.", image: "/objets/capteur-mouvement.png" },
      { title: "Caméra optionnelle", text: "Permet une levée de doute en cas d’alerte.", image: "/objets/camera-interieure.png" },
    ],
    benefit: "La famille garde un lien simple et reçoit les bonnes informations au bon moment.",
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
    position: "left-[53%] top-[48%] h-[31%] w-[36%]",
    description:
      "La cuisine est sécurisée grâce aux alertes fumée, fuite et rappels de traitement.",
    products: [
      { title: "Détecteur de fumée connecté", text: "Alerte en cas de fumée détectée.", image: "/objets/detecteur-fumee.png" },
      { title: "Détecteur de fuite", text: "Préviens avant qu’un dégât ne s’aggrave.", image: "/objets/detecteur-fuite.png" },
      { title: "Pilulier intelligent", text: "Rappelle les prises de médicaments à l’heure.", image: "/objets/pilulier-intelligent.png" },
    ],
    benefit: "Les incidents domestiques sont détectés plus tôt, sans perturber la vie quotidienne.",
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
    position: "left-[11%] top-[83%] h-[12%] w-[25%]",
    description:
      "L’entrée sécurise les accès et permet de mieux comprendre les sorties inhabituelles.",
    products: [
      { title: "Détecteur d’ouverture", text: "Alerte en cas d’ouverture inhabituelle.", image: "/objets/detecteur-ouverture.png" },
      { title: "Sonnette vidéo", text: "Permet de voir qui se présente au domicile.", image: "/objets/sonnette-video.png" },
      { title: "Application famille", text: "Centralise les alertes importantes.", image: "/objets/application-famille.png" },
    ],
    benefit: "Vous êtes rassuré sur les entrées, les sorties et les visites au domicile.",
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
    position: "left-[39%] top-[83%] h-[12%] w-[50%]",
    description:
      "Les zones de passage deviennent plus sûres, surtout pendant les déplacements nocturnes.",
    products: [
      { title: "Veilleuse automatique", text: "S’allume au passage la nuit.", image: "/objets/veilleuse-automatique.png" },
      { title: "Capteur de mouvement", text: "Repère les déplacements inhabituels.", image: "/objets/capteur-mouvement.png" },
      { title: "Alerte famille", text: "Informe uniquement en cas de situation anormale.", image: "/objets/application-famille.png" },
    ],
    benefit: "Les déplacements sont plus sûrs, sans que votre proche ait besoin d’y penser.",
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
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-8">
        <div className="mb-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
              <HeartHandshake className="h-4 w-4 text-[#F58220]" />
              Pour les familles
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Explorez la maison Solerya.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Cliquez sur une pièce pour découvrir les objets connectés utiles,
              le bénéfice pour la famille et le pack recommandé.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-5 shadow-[0_14px_45px_rgba(8,18,46,0.07)]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[["1", "Cliquez sur une pièce"], ["2", "Découvrez les équipements"], ["3", "Choisissez le bon pack"]].map(([number, text]) => (
                <div key={number} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#FFF2E8] text-sm font-extrabold text-[#F58220]">{number}</div>
                  <p className="text-sm font-bold leading-5">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[38px] bg-white p-6 shadow-[0_24px_70px_rgba(8,18,46,0.10)]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold text-[#F58220]">Maison virtuelle</p>
                <h2 className="mt-1 text-2xl font-extrabold">Cliquez sur une pièce</h2>
              </div>
              <div className="hidden rounded-full bg-[#FAFBFD] px-4 py-2 text-sm font-bold text-slate-600 sm:block">6 zones</div>
            </div>

            <div className="relative mx-auto aspect-[1.18/1] max-h-[560px] w-full max-w-[720px] overflow-hidden rounded-[32px] bg-[#F3F6FA] p-4">
              <div className="absolute inset-4 rounded-[28px] border-[10px] border-[#D9E0EA] bg-white shadow-inner" />
              <div className="absolute left-[50%] top-[8%] h-[74%] w-[2px] bg-[#D9E0EA]" />
              <div className="absolute left-[8%] top-[45%] h-[2px] w-[84%] bg-[#D9E0EA]" />
              <div className="absolute left-[8%] top-[80%] h-[2px] w-[84%] bg-[#D9E0EA]" />
              <div className="absolute left-[37%] top-[80%] h-[15%] w-[2px] bg-[#D9E0EA]" />

              {rooms.map((room) => {
                const Icon = room.icon;
                const isActive = activeRoom.id === room.id;
                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setActiveRoom(room)}
                    className={`absolute rounded-[24px] border p-4 text-left transition duration-300 hover:-translate-y-1 ${room.position} ${
                      isActive
                        ? "z-20 border-[#F58220] bg-white shadow-[0_20px_50px_rgba(8,18,46,0.16)]"
                        : "z-10 border-white/80 bg-white/75 shadow-[0_10px_25px_rgba(8,18,46,0.08)] hover:bg-white"
                    }`}
                    style={{ background: isActive ? `linear-gradient(135deg, #ffffff, ${room.soft})` : `linear-gradient(135deg, rgba(255,255,255,0.92), ${room.soft})` }}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ backgroundColor: room.soft, color: room.color }}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="h-3 w-3 rounded-full shadow-[0_0_18px_currentColor]" style={{ color: room.color, backgroundColor: room.color }} />
                      </div>
                      <div>
                        <p className="text-xl font-extrabold leading-tight">{room.name}</p>
                        <p className="mt-1 hidden text-xs font-semibold text-slate-500 sm:block">Découvrir →</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="rounded-[38px] border border-orange-100 bg-white p-6 shadow-[0_24px_70px_rgba(8,18,46,0.10)] lg:sticky lg:top-24 lg:h-fit">
            <div className="grid grid-cols-[1fr_80px] gap-5">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: activeRoom.soft, color: activeRoom.color }}>
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">Pièce sélectionnée</p>
                <h2 className="mt-1 text-3xl font-extrabold">{activeRoom.name}</h2>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px]" style={{ backgroundColor: activeRoom.soft, color: activeRoom.color }}>
                <ActiveIcon className="h-10 w-10" />
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">{activeRoom.description}</p>

            <div className="mt-6 rounded-[26px] bg-[#FAFBFD] p-4">
              <p className="text-sm font-extrabold">Équipements connectés recommandés</p>
              <div className="mt-4 space-y-3">
                {activeRoom.products.map((product) => (
                  <div key={product.title} className="grid grid-cols-[72px_1fr_22px] items-center gap-4 rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(8,18,46,0.08)]">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-inner">
                      <Image src={product.image} alt={product.title} fill className="object-contain p-1.5" sizes="64px" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold">{product.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{product.text}</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-[#F58220]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[22px] bg-emerald-50 p-5">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0B8A4A]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-[#0B8A4A]">Le bénéfice pour la famille</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{activeRoom.benefit}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold">Pack recommandé</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: activeRoom.soft, color: activeRoom.color }}>
                  <CalendarClock className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xl font-extrabold" style={{ color: activeRoom.color }}>{activeRoom.pack}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Pour une protection adaptée à cette pièce.</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Dès</p>
                  <p className="text-2xl font-extrabold">{activeRoom.price} €</p>
                </div>
              </div>
              <Link href={activeRoom.href} className="mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5" style={{ backgroundColor: activeRoom.color }}>
                Découvrir ce pack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="flex items-center gap-3 rounded-full bg-[#F58220] px-9 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]">
            Être rappelé par un conseiller
            <Phone className="h-5 w-5" />
          </Link>
          <Link href="/" className="rounded-full border border-slate-300 bg-white px-9 py-4 text-sm font-extrabold text-[#08122E] transition hover:shadow-sm">
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </main>
  );
}
