export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD] px-6 py-16 text-[#08122E] lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-[#08122E] px-6 py-10 shadow-[0_24px_80px_rgba(8,18,46,0.18)] sm:px-10 lg:px-14 lg:py-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-base font-semibold text-[#8FD8B1]">
                Intervention en Île-de-France
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Parlons de votre projet de maison connectée pour un proche.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Solerya vous accompagne pour sécuriser le domicile d’un senior,
                installer les bons objets connectés et rassurer la famille avec
                une solution simple, utile et non intrusive.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">
                  Réponse sous 24 à 48h
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">
                  Installation accompagnée
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">
                  Île-de-France
                </span>
              </div>
            </div>

            <form className="rounded-[30px] bg-white/5 p-2">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-7 py-4 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Votre e-mail"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-7 py-4 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Votre téléphone"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-7 py-4 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <select
                  name="need"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-7 py-4 text-base text-slate-300 outline-none transition focus:border-[#8FD8B1] focus:bg-white/15"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Votre besoin principal
                  </option>
                  <option value="securiser-domicile">
                    Sécuriser le domicile d’un proche
                  </option>
                  <option value="bouton-sos">
                    Installer un bouton SOS / détecteurs
                  </option>
                  <option value="pack-solerya">
                    Choisir un pack Solerya
                  </option>
                  <option value="autre">Autre demande</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={4}
                  className="w-full resize-none rounded-[28px] border border-white/10 bg-white/10 px-7 py-4 text-base text-white outline-none placeholder:text-slate-400 transition focus:border-[#8FD8B1] focus:bg-white/15"
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#F58220] px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_40px_rgba(245,130,32,0.30)] transition hover:-translate-y-0.5 hover:bg-[#E36E08]"
                >
                  Être recontacté →
                </button>
              </div>

              <p className="mt-5 px-2 text-sm leading-6 text-slate-400">
                En envoyant ce formulaire, vous acceptez d’être recontacté dans
                le cadre de votre demande. Intervention actuellement proposée en
                Île-de-France.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}