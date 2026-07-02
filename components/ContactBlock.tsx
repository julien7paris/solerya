export default function ContactBlock() {
  return (
    <section id="contact" className="scroll-mt-36 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="relative overflow-hidden rounded-[36px] bg-[#08122E] px-8 py-12 text-white sm:px-12 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,93,184,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(95,174,123,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(244,208,0,0.12),transparent_26%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-[#B8D7FF]">Parlons de votre projet</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Une première conversation pour cadrer vos enjeux et vos priorités.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Approche premium, confidentielle et structurée pour clarifier votre situation,
              hiérarchiser les sujets critiques et identifier les prochaines étapes utiles.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-slate-200">
                Réponse sous 24 à 48h
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-slate-200">
                Échange confidentiel
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-slate-200">
                France & international
              </span>
            </div>
          </div>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20 focus:bg-white/15"
            />
            <input
              type="email"
              placeholder="Votre e-mail"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20 focus:bg-white/15"
            />
            <input
              type="tel"
              placeholder="Votre téléphone (optionnel)"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20 focus:bg-white/15"
            />
            <button className="rounded-full bg-[#F4D000] px-6 py-3 text-sm font-medium text-[#08122E] transition hover:-translate-y-0.5 hover:bg-[#E5C300] hover:shadow-lg">
              Être recontacté
            </button>
            <p className="text-xs text-slate-400">
              En envoyant ce formulaire, vous acceptez d’être recontacté dans le cadre de votre demande.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}