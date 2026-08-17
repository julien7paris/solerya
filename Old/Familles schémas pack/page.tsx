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

const packStyles = {
  serenite: {
    color: "#0B8A4A",
    soft: "#EAF8F0",
    appImage: "/objets/application-serenite.jpg",
  },
  confort: {
    color: "#0967D2",
    soft: "#EAF4FF",
    appImage: "/objets/application-confort.jpg",
  },
  autonomie: {
    color: "#8E44CC",
    soft: "#F5ECFF",
    appImage: "/objets/application-autonomie.jpg",
  },
  signature: {
    color: "#F25A1D",
    soft: "#FFF1E6",
    appImage: "/objets/application-signature.jpg",
  },
};

const getApplicationImage = (packKey: keyof typeof packStyles) =>
  packStyles[packKey].appImage;

const rooms = [
  {
    id: "chambre",
    name: "Chambre",
    subtitle: "Présence & levers nocturnes",
    icon: BedDouble,
    color: "#8E44CC",
    soft: "#F5ECFF",
    area: "col-span-5 row-span-3",
    description:
      "Un espace clé pour comprendre les levers nocturnes, sécuriser les déplacements et préserver l’intimité, sans caméra.",
    products: [
      {
        title: "Présence détectée sans caméra",
        text: "Aide à comprendre si la personne est présente, même avec peu de mouvement.",
        image: "/objets/capteur-presence.jpg",
      },
      {
        title: "Chemin lumineux de nuit",
        text: "S’allume automatiquement pour accompagner les levers nocturnes.",
        image: "/objets/chemin-lumineux.jpg",
      },
      {
        title: "Bouton SOS à portée de main",
        text: "Permet de demander de l’aide simplement depuis la chambre.",
        image: "/objets/bouton-sos.jpg",
      },
    ],
    benefit:
      "Votre proche garde son autonomie, pendant que la famille dispose de repères rassurants sans surveillance vidéo.",
    packKey: "autonomie",
    pack: "Solerya Autonomie",
    price: "79",
    href: "/packs/autonomie",
    packColor: packStyles.autonomie.color,
    packSoft: packStyles.autonomie.soft,
  },
  {
    id: "salle-bain",
    name: "Salle de bain",
    subtitle: "Fuite & sécurité quotidienne",
    icon: Bath,
    color: "#0B8A4A",
    soft: "#E9FFF3",
    area: "col-span-4 row-span-3",
    description:
      "Une pièce sensible où Solerya aide à repérer rapidement les incidents du quotidien, sans changer les habitudes.",
    products: [
      {
        title: "Bouton SOS mural ou portable",
        text: "Une demande d’aide simple dans une pièce à risque.",
        image: "/objets/bouton-sos.jpg",
      },
      {
        title: "Détecteur de fuite",
        text: "Repère une présence d’eau anormale dès son apparition.",
        image: "/objets/fuites.jpg",
      },
      {
        title: "Présence non intrusive",
        text: "Aide à identifier une situation inhabituelle sans caméra.",
        image: "/objets/capteur-presence.jpg",
      },
    ],
    benefit:
      "La salle de bain devient plus rassurante, avec des équipements discrets et utiles.",
    packKey: "confort",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
    packColor: packStyles.confort.color,
    packSoft: packStyles.confort.soft,
  },
  {
    id: "salon",
    name: "Salon",
    subtitle: "Rythme de vie & lien familial",
    icon: Sofa,
    color: "#0967D2",
    soft: "#EAF4FF",
    area: "col-span-5 row-span-3",
    description:
      "Le salon devient un espace de repères : activité quotidienne, présence discrète et nouvelles rassurantes pour les proches.",
    products: [
      {
        title: "Capteur de mouvement",
        text: "Donne un signe rassurant d’activité dans la pièce de vie.",
        image: "/objets/capteur-mouvement-veilleuse.jpg",
      },
      {
        title: "Présence détectée sans caméra",
        text: "Permet de mieux comprendre l’occupation du salon, sans image.",
        image: "/objets/capteur-presence.jpg",
      },
      {
        title: "Application famille",
        text: "Affiche des informations simples et compréhensibles pour les proches.",
        image: "application",
      },
    ],
    benefit:
      "La famille garde une vision claire du quotidien, sans transformer le domicile en lieu de surveillance.",
    packKey: "autonomie",
    pack: "Solerya Autonomie",
    price: "79",
    href: "/packs/autonomie",
    packColor: packStyles.autonomie.color,
    packSoft: packStyles.autonomie.soft,
  },
  {
    id: "cuisine",
    name: "Cuisine",
    subtitle: "Fumée, fuite & chaleur",
    icon: ChefHat,
    color: "#F25A1D",
    soft: "#FFF1E6",
    area: "col-span-4 row-span-3",
    description:
      "La cuisine est protégée contre les incidents domestiques les plus fréquents : fumée, fuite et variations de température.",
    products: [
      {
        title: "Détecteur de fumée connecté",
        text: "La maison veille en cas de fumée dans une pièce sensible.",
        image: "/objets/detecteur-fumee.jpg",
      },
      {
        title: "Détecteur de fuite",
        text: "Repère rapidement une présence d’eau anormale.",
        image: "/objets/fuites.jpg",
      },
      {
        title: "Température & humidité",
        text: "Aide à garder un repère en cas de forte chaleur ou de froid.",
        image: "/objets/capteur-de-temperature-et-d-humidite.jpg",
      },
    ],
    benefit:
      "Les incidents domestiques sont repérés plus tôt, sans perturber la vie quotidienne.",
    packKey: "confort",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
    packColor: packStyles.confort.color,
    packSoft: packStyles.confort.soft,
  },
  {
    id: "entree",
    name: "Entrée",
    subtitle: "Accès & sorties",
    icon: DoorOpen,
    color: "#D97706",
    soft: "#FFF7E6",
    area: "col-span-3 row-span-2",
    description:
      "L’entrée donne un repère simple sur les ouvertures importantes et les sorties inhabituelles.",
    products: [
      {
        title: "Surveillance de la porte d’entrée",
        text: "Un repère discret sur les ouvertures importantes du logement.",
        image: "/objets/detecteur-ouverture-porte.jpg",
      },
      {
        title: "Application famille",
        text: "Les proches reçoivent les informations utiles au bon moment.",
        image: "application",
      },
      {
        title: "Bouton SOS",
        text: "Un moyen simple de demander de l’aide au domicile.",
        image: "/objets/bouton-sos.jpg",
      },
    ],
    benefit:
      "Vous êtes rassuré sur les entrées, les sorties et les moments importants du domicile.",
    packKey: "serenite",
    pack: "Solerya Sérénité",
    price: "39",
    href: "/packs/serenite",
    packColor: packStyles.serenite.color,
    packSoft: packStyles.serenite.soft,
  },
  {
    id: "couloir",
    name: "Couloir",
    subtitle: "Déplacements nocturnes",
    icon: LampDesk,
    color: "#64748B",
    soft: "#F1F5F9",
    area: "col-span-6 row-span-2",
    description:
      "Les zones de passage deviennent plus sûres, surtout pendant les déplacements nocturnes.",
    products: [
      {
        title: "Chemin lumineux automatique",
        text: "S’allume au passage pour guider les déplacements la nuit.",
        image: "/objets/chemin-lumineux.jpg",
      },
      {
        title: "Capteur de mouvement",
        text: "Rend les scénarios du domicile plus utiles et plus rassurants.",
        image: "/objets/capteur-mouvement-veilleuse.jpg",
      },
      {
        title: "Application famille",
        text: "Le logement devient plus lisible pour les proches.",
        image: "application",
      },
    ],
    benefit:
      "Les déplacements sont plus sûrs, sans que votre proche ait besoin d’y penser.",
    packKey: "confort",
    pack: "Solerya Confort",
    price: "59",
    href: "/packs/confort",
    packColor: packStyles.confort.color,
    packSoft: packStyles.confort.soft,
  },
];

export default function FamillesPage() {
  const [activeRoom, setActiveRoom] = useState(rooms[2]);
  const ActiveIcon = activeRoom.icon;

  return (
    <main className="min-h-screen bg-[#FAFBFD] text-[#08122E]">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-5 lg:px-8">
        <div className="mx-auto mb-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-semibold text-[#C95F07]">
            <HeartHandshake className="h-4 w-4 text-[#F58220]" />
            Pour les familles
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-5xl">
            Explorez la maison Solerya.
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Découvrez comment Solerya rend chaque pièce plus rassurante, plus
            sûre et plus simple à vivre, sans caméra ni intrusion.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="rounded-[34px] bg-white p-4 shadow-[0_20px_60px_rgba(8,18,46,0.09)] md:p-5">
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold text-[#F58220]">
                  Maison virtuelle
                </p>
                <h2 className="mt-1 text-xl font-extrabold">
                  Cliquez sur une pièce
                </h2>
              </div>

              <div className="hidden rounded-full bg-[#FAFBFD] px-4 py-2 text-xs font-bold text-slate-600 sm:block">
                6 espaces interactifs
              </div>
            </div>

            <div className="relative mx-auto max-w-[720px] overflow-hidden rounded-[30px] bg-[#EEF3F8] p-3 md:p-4">
              <div className="relative grid h-[460px] grid-cols-9 grid-rows-[repeat(6,minmax(0,1fr))_1.2fr_1.2fr] gap-3 md:h-[500px]">
                {rooms.map((room) => {
                  const Icon = room.icon;
                  const isActive = activeRoom.id === room.id;
                  const isSmallRoom =
                    room.id === "entree" || room.id === "couloir";

                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setActiveRoom(room)}
                      className={`${room.area} group relative overflow-hidden rounded-[24px] border text-left transition duration-300 hover:-translate-y-1 ${
                        isSmallRoom ? "p-3" : "p-4"
                      } ${
                        isActive
                          ? "z-20 border-[#F58220] bg-white shadow-[0_20px_45px_rgba(8,18,46,0.15)]"
                          : "z-10 border-white/80 bg-white/90 shadow-[0_10px_24px_rgba(8,18,46,0.07)] hover:bg-white"
                      }`}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, #ffffff, ${room.soft})`
                          : `linear-gradient(135deg, rgba(255,255,255,0.98), ${room.soft})`,
                      }}
                    >
                      <div className="relative flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between gap-3">
                          <div
                            className={`flex items-center justify-center rounded-2xl ${
                              isSmallRoom ? "h-9 w-9" : "h-10 w-10"
                            }`}
                            style={{
                              backgroundColor: room.soft,
                              color: room.color,
                            }}
                          >
                            <Icon
                              className={isSmallRoom ? "h-5 w-5" : "h-6 w-6"}
                            />
                          </div>

                          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-500 shadow-sm">
                            Voir
                          </span>
                        </div>

                        <div
                          className={`rounded-[20px] bg-white/60 backdrop-blur ${
                            isSmallRoom ? "p-2" : "p-2.5"
                          }`}
                        >
                          <p
                            className={`truncate font-extrabold leading-tight ${
                              isSmallRoom
                                ? "text-lg"
                                : "text-xl md:text-2xl"
                            }`}
                          >
                            {room.name}
                          </p>
                          <p className="mt-1 text-xs font-semibold leading-snug text-slate-500">
                            {room.subtitle}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="rounded-[34px] border border-orange-100 bg-white p-5 shadow-[0_20px_60px_rgba(8,18,46,0.09)] lg:sticky lg:top-20 lg:h-fit">
            <div className="grid grid-cols-[1fr_72px] gap-4">
              <div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: activeRoom.soft,
                    color: activeRoom.color,
                  }}
                >
                  <ActiveIcon className="h-6 w-6" />
                </div>

                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Pièce sélectionnée
                </p>

                <h2 className="mt-1 text-3xl font-extrabold">
                  {activeRoom.name}
                </h2>
              </div>

              <div
                className="flex h-18 w-18 items-center justify-center rounded-[22px]"
                style={{
                  backgroundColor: activeRoom.soft,
                  color: activeRoom.color,
                }}
              >
                <ActiveIcon className="h-9 w-9" />
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {activeRoom.description}
            </p>

            <div className="mt-5 rounded-[24px] bg-[#FAFBFD] p-4">
              <p className="text-sm font-extrabold">
                Solutions recommandées
              </p>

              <div className="mt-3 space-y-3">
                {activeRoom.products.map((product) => {
                  const imageSrc =
                    product.image === "application"
                      ? getApplicationImage(
                          activeRoom.packKey as keyof typeof packStyles
                        )
                      : product.image;

                  return (
                    <div
                      key={product.title}
                      className="grid grid-cols-[66px_1fr_22px] items-center gap-4 rounded-[18px] bg-white p-2.5 shadow-[0_8px_22px_rgba(8,18,46,0.07)]"
                    >
                      <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-inner">
                        <Image
                          src={imageSrc}
                          alt={product.title}
                          fill
                          className="object-contain p-1"
                          sizes="56px"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold">
                          {product.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {product.text}
                        </p>
                      </div>

                      <CheckCircle2
                        className="h-5 w-5"
                        style={{ color: activeRoom.packColor }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 rounded-[20px] bg-emerald-50 p-4">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#0B8A4A]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-base font-extrabold text-[#0B8A4A]">
                    Le bénéfice pour la famille
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {activeRoom.benefit}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[22px] border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-extrabold">Pack recommandé</p>

              <div className="mt-3 flex items-center justify-between gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: activeRoom.packSoft,
                    color: activeRoom.packColor,
                  }}
                >
                  <CalendarClock className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className="text-lg font-extrabold"
                    style={{ color: activeRoom.packColor }}
                  >
                    {activeRoom.pack}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Pour une solution adaptée à cette pièce.
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
                className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: activeRoom.packColor }}
              >
                Découvrir ce pack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-[#F58220] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
          >
            Être rappelé par un conseiller
            <Phone className="h-5 w-5" />
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-extrabold text-[#08122E] transition hover:shadow-sm"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </main>
  );
}