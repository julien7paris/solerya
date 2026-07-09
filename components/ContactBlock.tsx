"use client";

import { useState } from "react";

export default function ContactBlock() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      need: "Demande depuis la page À propos",
      message:
        "Demande de rappel depuis le bloc de contact de la page À propos.",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l’envoi");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl scroll-mt-36 px-6 pb-20 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[36px] bg-[#08122E] px-8 py-12 text-white shadow-[0_24px_80px_rgba(8,18,46,0.14)] sm:px-12 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(95,174,123,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(245,130,32,0.12),transparent_26%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[#8FD8B1]">
              Parlons de votre projet
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Échangeons sur les besoins de votre proche et de son domicile.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Quelques minutes suffisent pour comprendre votre situation,
              identifier les équipements réellement utiles et vous orienter
              vers la solution Solerya la plus adaptée.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200">
                Réponse sous 24 à 48h
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200">
                Échange sans engagement
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200">
                Intervention en Île-de-France
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Votre nom"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-[#8FD8B1] focus:bg-white/15"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Votre e-mail"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-[#8FD8B1] focus:bg-white/15"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Votre téléphone (optionnel)"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-[#8FD8B1] focus:bg-white/15"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-[#F58220] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(245,130,32,0.25)] transition hover:-translate-y-0.5 hover:bg-[#E36E08] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading"
                ? "Envoi en cours..."
                : "Être recontacté →"}
            </button>

            {status === "success" && (
              <p className="rounded-2xl bg-[#EAF8F0] px-4 py-3 text-sm font-semibold text-[#0B8A4A]">
                Votre demande a bien été envoyée. Nous vous recontacterons
                rapidement.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                Une erreur est survenue. Merci de réessayer dans quelques
                instants.
              </p>
            )}

            <p className="text-xs leading-5 text-slate-400">
              En envoyant ce formulaire, vous acceptez d’être recontacté dans le
              cadre de votre demande.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}