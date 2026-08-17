"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  HeartHandshake,
  ShieldCheck,
  Bell,
  PhoneCall,
  ShoppingCart,
  Plus,
  Minus,
  Droplets,
  DoorOpen,
  Activity,
  Siren,
  Router,
  Wrench,
  Settings2,
  Sparkles,
  GraduationCap,
  Headphones,
  ArrowRight,
  Check,
  PackageCheck,
  HousePlug,
  BadgeCheck,
} from "lucide-react";

const highlights = [
  [BadgeCheck, "Produits référencés", "Des objets testés et compatibles entre eux."],
  [ShoppingCart, "100 % à la carte", "Vous ajoutez uniquement ce dont vous avez besoin."],
  [Wrench, "Installation possible", "Solerya installe et met en service votre équipement."],
  [HeartHandshake, "Accompagnement humain", "Conseil, formation et assistance quand vous le souhaitez."],
];

const products = [
  {
    id: "leak",
    name: "Détecteur de fuite",
    description: "Alerte en cas de présence d’eau anormale.",
    price: 39,
    icon: Droplets,
    color: "#0B8A4A",
    bg: "bg-emerald-50",
  },
  {
    id: "door",
    name: "Détecteur d’ouverture",
    description: "Porte ou fenêtre ouverte, fermée ou restée ouverte.",
    price: 29,
    icon: DoorOpen,
    color: "#0967D2",
    bg: "bg-blue-50",
  },
  {
    id: "presence",
    name: "Détecteur de présence",
    description: "Détecte les mouvements et facilite les automatisations.",
    price: 49,
    icon: Activity,
    color: "#8E44CC",
    bg: "bg-purple-50",
  },
  {
    id: "sos",
    name: "Bouton SOS",
    description: "Un bouton simple pour déclencher une alerte rapidement.",
    price: 39,
    icon: Siren,
    color: "#F25A1D",
    bg: "bg-orange-50",
  },
  {
    id: "ha",
    name: "Home Assistant Green",
    description: "Le cœur local de votre logement connecté.",
    price: 129,
    icon: Router,
    color: "#0F766E",
    bg: "bg-teal-50",
  },
];

const services = [
  {
    id: "install",
    name: "Installation à domicile",
    description: "Déplacement, pose et vérification de votre installation.",
    price: 99,
    unit: "forfait",
    icon: Wrench,
  },
  {
    id: "ha-config",
    name: "Mise en service Home Assistant",
    description: "Installation, réseau, sauvegarde et première configuration.",
    price: 99,
    unit: "forfait",
    icon: Settings2,
  },
  {
    id: "scenario",
    name: "Scénario personnalisé",
    description: "Une automatisation créée selon votre besoin réel.",
    price: 29,
    unit: "scénario",
    icon: Sparkles,
  },
  {
    id: "training",
    name: "Formation à domicile",
    description: "1 heure pour apprendre à utiliser votre installation simplement.",
    price: 69,
    unit: "heure",
    icon: GraduationCap,
  },
  {
    id: "support",
    name: "Assistance à distance",
    description: "30 minutes de diagnostic, aide ou modification à la demande.",
    price: 29,
    unit: "session",
    icon: Headphones,
  },
];

const journey = [
  ["1", "Vous choisissez", "Sécurité, éclairage, ouverture, fuite d’eau, présence, chauffage… ajoutez librement vos objets au panier."],
  ["2", "Nous vérifions la compatibilité", "Solerya référence des produits éprouvés et vous aide à compléter votre installation si nécessaire."],
  ["3", "Vous ajoutez les services", "Installation, Home Assistant, configuration, scénarios, formation ou assistance : uniquement ce que vous voulez."],
  ["4", "Solerya installe et configure", "Nous mettons les équipements en service, connectons les appareils et créons vos automatisations."],
  ["5", "Vous restez autonome", "Votre installation vous appartient. Besoin d’aide plus tard ? Ajoutez simplement une assistance à votre panier."],
];

export default function SoleryaLandingPage() {
  const [cart, setCart] = useState<Record<string, number>>({
    door: 2,
    ha: 1,
    install: 1,
    "ha-config": 1,
  });

  const allItems = [...products, ...services];

  const total = useMemo(
    () =>
      allItems.reduce(
        (sum, item) => sum + (cart[item.id] ?? 0) * item.price,
        0,
      ),
    [cart],
  );

  const itemCount = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart],
  );

  function updateItem(id: string, delta: number) {
    setCart((current) => {
      const next = Math.max(0, (current[id] ?? 0) + delta);
      return { ...current, [id]: next };
    });
  }

  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_8%,#FFF1E6_0%,transparent_30%),linear-gradient(to_bottom,#ffffff,#fffaf5)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-20 lg:pt-14">
          <div>
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF2E8] px-4 py-2 text-sm font-medium text-[#C95F07]">
              <HousePlug className="h-4 w-4 text-[#F58220]" />
              <span>La domotique à la carte, installée si vous le souhaitez</span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.045em] text-[#08122E] md:text-6xl">
              Composez votre logement connecté, comme vous faites vos courses.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Choisissez vos équipements, ajoutez l’installation, les scénarios,
              la formation ou l’assistance dont vous avez besoin. Rien de plus.
              Aucun abonnement obligatoire.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {highlights.map(([Icon, title, text]) => (
                <div key={title as string} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F58220]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#08122E]">{title as string}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text as string}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#boutique"
                className="rounded-full bg-[#F58220] px-8 py-4 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(245,130,32,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
              >
                Composer mon installation →
              </Link>
              <Link
                href="#parcours"
                className="rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-semibold text-[#08122E] transition hover:bg-white hover:shadow-sm"
              >
                Je préfère être conseillé
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-orange-100/70 blur-3xl" />
            <div className="relative rounded-[32px] bg-white p-5 shadow-[0_30px_80px_rgba(8,18,46,0.14)] sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F58220]">Mon installation</p>
                  <h2 className="mt-1 text-2xl font-extrabold">Votre panier Solerya</h2>
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F58220]">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#08122E] px-1 text-[10px] font-bold text-white">{itemCount}</span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {allItems
                  .filter((item) => (cart[item.id] ?? 0) > 0)
                  .slice(0, 5)
                  .map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="mt-1 text-xs text-slate-500">{cart[item.id]} × {item.price} €</p>
                      </div>
                      <p className="text-sm font-extrabold">{(cart[item.id] ?? 0) * item.price} €</p>
                    </div>
                  ))}
              </div>

              <div className="mt-6 rounded-[24px] bg-[#08122E] p-5 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-white/60">Total de votre sélection</p>
                    <p className="mt-1 text-3xl font-extrabold">{total} €</p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold">Sans abonnement</div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Exemple interactif : ajoutez ou retirez des produits plus bas et le panier se met à jour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="boutique" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F58220]">1. Les équipements</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Choisissez vos objets connectés</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Tous les produits sont proposés à l’unité. Vous gardez la main sur le contenu et le budget de votre installation.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => {
            const Icon = product.icon;
            const qty = cart[product.id] ?? 0;
            return (
              <article key={product.id} className="flex min-h-[340px] flex-col rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(8,18,46,0.07)] transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${product.bg}`}>
                  <Icon className="h-6 w-6" style={{ color: product.color }} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{product.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                <div className="mt-auto pt-6">
                  <p className="text-2xl font-extrabold">{product.price} €</p>
                  <div className="mt-4 flex items-center justify-between rounded-full bg-slate-50 p-1.5">
                    <button onClick={() => updateItem(product.id, -1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm" aria-label={`Retirer ${product.name}`}><Minus className="h-4 w-4" /></button>
                    <span className="text-sm font-bold">{qty}</span>
                    <button onClick={() => updateItem(product.id, 1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F58220] text-white shadow-sm" aria-label={`Ajouter ${product.name}`}><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#FFF7EF] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8E44CC]">2. Les services</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Ajoutez seulement l’accompagnement dont vous avez besoin</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Installation, paramétrage, scénarios, formation ou assistance : chaque service se commande exactement comme un produit.</p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              const qty = cart[service.id] ?? 0;
              return (
                <article key={service.id} className="flex min-h-[320px] flex-col rounded-[28px] bg-white p-5 shadow-[0_14px_40px_rgba(8,18,46,0.07)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-[#8E44CC]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold">{service.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <div className="mt-auto pt-6">
                    <p className="text-2xl font-extrabold">{service.price} € <span className="text-xs font-medium text-slate-500">/ {service.unit}</span></p>
                    <div className="mt-4 flex items-center justify-between rounded-full bg-slate-50 p-1.5">
                      <button onClick={() => updateItem(service.id, -1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm" aria-label={`Retirer ${service.name}`}><Minus className="h-4 w-4" /></button>
                      <span className="text-sm font-bold">{qty}</span>
                      <button onClick={() => updateItem(service.id, 1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8E44CC] text-white shadow-sm" aria-label={`Ajouter ${service.name}`}><Plus className="h-4 w-4" /></button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="parcours" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A4A]">Composez votre logement connecté</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Simple à acheter. Simple à comprendre. Simple à faire évoluer.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">Vous pouvez tout choisir seul ou demander à Solerya de vous guider. Dans les deux cas, vous voyez clairement chaque produit, chaque service et chaque prix.</p>

            <div className="mt-8 rounded-[28px] bg-[#08122E] p-6 text-white">
              <PackageCheck className="h-7 w-7 text-[#F58220]" />
              <p className="mt-4 text-xl font-extrabold">Votre installation vous appartient.</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Aucun abonnement obligatoire. Vous pouvez commander de l’assistance plus tard, seulement lorsque vous en avez besoin.</p>
            </div>
          </div>

          <div className="space-y-4">
            {journey.map(([number, title, text]) => (
              <div key={number} className="flex gap-5 rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_12px_35px_rgba(8,18,46,0.05)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF2E8] text-sm font-extrabold text-[#F58220]">{number}</div>
                <div>
                  <h3 className="text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-[#08122E] px-7 py-10 text-white md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#F7B477]">Besoin d’un coup de main ?</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">Vous ne savez pas quoi choisir ? Nous pouvons composer le panier avec vous.</h2>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#F58220]" /> Conseil humain</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#F58220]" /> Budget visible</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#F58220]" /> Aucun engagement</span>
              </div>
            </div>
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F58220] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#E36E08]">Être conseillé <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
