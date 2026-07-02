import Link from "next/link";

export default function SoleryaHomePage() {
  return (
    <main className="min-h-screen bg-white text-[#08122E]">
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="text-2xl font-bold text-[#08122E]">
            solerya
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <Link href="#">Nos solutions</Link>
            <Link href="#">Pour les familles</Link>
            <Link href="#">Nos engagements</Link>
            <Link href="#">À propos</Link>
          </nav>

          <Link
            href="#solutions"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600"
          >
            Découvrir nos solutions
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff,#fff7ef)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
            <video
              className="h-full min-h-[420px] w-full object-cover"
              src="/family-international.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-black/20" />

            <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl shadow-xl">
              ▶
            </button>

            <div className="absolute bottom-6 left-6 rounded-full bg-black/60 px-5 py-3 text-sm font-semibold text-white">
              Découvrir Solerya en 90 secondes
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6 w-fit rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              N°1 des objets connectés pour le bien vieillir à domicile
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[#08122E] md:text-6xl">
              Parce que vos parents méritent de rester chez eux, en toute
              sécurité.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Solerya sélectionne les meilleures technologies pour protéger,
              rassurer et préserver l’autonomie de ceux que vous aimez.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                "Solutions simples et faciles à utiliser",
                "Données sécurisées et respect de la vie privée",
                "Accompagnement humain et bienveillant",
                "Produits testés et approuvés",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-xl text-orange-500">♡</span>
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#solutions"
                className="rounded-full bg-orange-500 px-7 py-4 text-center text-sm font-semibold text-white shadow-xl hover:bg-orange-600"
              >
                Découvrir nos solutions →
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-slate-300 px-7 py-4 text-center text-sm font-semibold text-[#08122E] hover:bg-slate-50"
              >
                Être rappelé par un conseiller
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 rounded-[32px] bg-orange-50 p-8 md:grid-cols-4">
          {[
            ["Sécurité au quotidien", "Détecteurs de chute, alertes et capteurs pour protéger vos proches 24h/24."],
            ["Maintien à domicile", "Des solutions pour vivre chez soi plus longtemps, en toute sérénité."],
            ["Lien et autonomie", "Gardez le lien avec vos proches et soutenez leur indépendance."],
            ["Technologies fiables", "Des objets connectés sélectionnés pour leur efficacité et leur fiabilité."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🛡️
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        <p className="text-sm font-semibold text-slate-500">Ils parlent de nous</p>

        <div className="mt-8 grid grid-cols-2 gap-8 text-2xl font-bold text-slate-800 md:grid-cols-6">
          <span>france·2</span>
          <span>Le Parisien</span>
          <span>Les Echos</span>
          <span>BFM</span>
          <span>franceinfo:</span>
          <span>Le Figaro</span>
        </div>
      </section>
    </main>
  );
}