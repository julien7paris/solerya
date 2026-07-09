"use client";

import { useState } from "react";

export default function ContactPage() {
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
      need: formData.get("need"),
      message: formData.get("message"),
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
    <main className="bg-[#FAFBFD] px-5 py-8 text-[#08122E] sm:px-6 lg:px-8 lg:py-10">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[34px] bg-[#08122E] px-6 py-8 shadow-[0_24px_80px_rgba(8,18,46,0.18)] sm:px-10 lg:px-14 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="lg:pr-6">
              <p className="text-base font-semibold text-[#8FD8B1]">
                Intervention en Île-de-France
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
                Parlons de votre projet de maison connectée pour un proche.
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Solerya vous accompagne pour sécuriser le domicile d’un senior,
                installer les bons objets connectés et rassurer la famille avec
                une solution simple, utile et non intrusive.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white">
                  Réponse sous 24 à 48h
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white">
                  Installation accompagnée
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white">
                  Île-de-France
                </span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto w-full max-w-[480px] rounded-[28px] bg-white/[0.06] p-3"
            >
              <div className="space-y-2.5">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="h-[52px] w-full rounded-full border border-white/10 bg-white/10 px-6 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Votre e-mail"
                  className="h-[52px] w-full rounded-full border border-white/10 bg-white/10 px-6 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Votre téléphone"
                  className="h-[52px] w-full rounded-full border border-white/10 bg-white/10 px-6 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <select
                  required
                  name="need"
                  defaultValue=""
                  className="h-[52px] w-full rounded-full border border-white/10 bg-[#303B58] px-6 text-base text-slate-200 outline-none transition focus:border-[#8FD8B1]"
                >
                  <option value="" disabled>
                    Votre besoin principal
                  </option>

                  <option value="Sécuriser le domicile d’un proche">
                    Sécuriser le domicile d’un proche
                  </option>

                  <option value="Installer un bouton SOS / détecteurs">
                    Installer un bouton SOS / détecteurs
                  </option>

                  <option value="Choisir un pack Solerya">
                    Choisir un pack Solerya
                  </option>

                  <option value="Autre demande">
                    Autre demande
                  </option>
                </select>

                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={2}
                  className="h-[92px] w-full resize-none rounded-[24px] border border-white/10 bg-white/10 px-6 py-4 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-[52px] w-full rounded-full bg-[#F58220] px-7 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(245,130,32,0.25)] transition hover:-translate-y-0.5 hover:bg-[#E36E08] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading"
                    ? "Envoi en cours..."
                    : "Être recontacté →"}
                </button>

                {status === "success" && (
                  <p className="rounded-2xl bg-[#EAF8F0] px-5 py-3 text-sm font-semibold text-[#0B8A4A]">
                    Votre demande a bien été envoyée. Nous vous recontacterons
                    rapidement.
                  </p>
                )}

                {status === "error" && (
                  <p className="rounded-2xl bg-red-50 px-5 py-3 text-sm font-semibold text-red-600">
                    Une erreur est survenue. Merci de réessayer dans quelques
                    instants.
                  </p>
                )}
              </div>

              <p className="mt-3 px-2 text-xs leading-5 text-slate-400">
                En envoyant ce formulaire, vous acceptez d’être recontacté dans
                le cadre de votre demande. Intervention actuellement proposée
                en Île-de-France.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}