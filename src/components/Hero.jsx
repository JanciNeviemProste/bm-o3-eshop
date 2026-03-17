export default function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" />

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-blue-500/20 text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              🍓 Ručne vyrobené s láskou
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-white animate-fade-in-up-delay-1">
              Domáce marmelády
              <br />
              <span className="text-blue-400">z babičkinej kuchyne</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 text-gray-300 animate-fade-in-up-delay-2">
              Tradičné slovenské recepty, čerstvé sezónne ovocie a žiadne umelé prísady.
              Každý pohár je malé umelecké dielo plné chuti a vône.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up-delay-3">
              <a
                href="#produkty"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Prezrieť produkty
              </a>
              <a
                href="#o-nas"
                className="border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Náš príbeh
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-in-up-delay-2">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://loremflickr.com/800/800/jam,marmalade,homemade?random=1"
                alt="Domáce marmelády a džemy v sklenených pohároch"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-gray-800/90 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 shadow-lg">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-400">prírodné zloženie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
