const PRODUCTS = [
  {
    name: 'Jahodová marmeláda',
    price: '4,90 €',
    weight: '220 g',
    description:
      'Sladké slovenské jahody z podhorských polí, jemne dochutené citrónom a vanilkou. Ideálna na ranné toasty alebo do koláčov.',
    image: 'https://loremflickr.com/800/600/strawberry,jam?random=2',
    alt: 'Pohár domácej jahodovej marmelády',
    badge: 'Najpredávanejšia',
  },
  {
    name: 'Marhuľový džem',
    price: '5,20 €',
    weight: '220 g',
    description:
      'Slnkom vyzreté marhule z južného Slovenska, varené podľa tradičného receptu bez pridaného želírovadla. Hustá konzistencia a intenzívna chuť.',
    image: 'https://loremflickr.com/800/600/apricot,jam,fruit?random=3',
    alt: 'Pohár domáceho marhuľového džemu',
    badge: null,
  },
  {
    name: 'Slivkový lekvár',
    price: '5,50 €',
    weight: '220 g',
    description:
      'Tradičný slivkový lekvár varený v medenom kotli celých 12 hodín. Bez cukru — sladkosť pochádza výlučne zo zrelých sliviek odrody Bystričanka.',
    image: 'https://loremflickr.com/800/600/plum,jam,preserve?random=4',
    alt: 'Pohár domáceho slivkového lekváru',
    badge: 'Bez cukru',
  },
  {
    name: 'Čučoriedková marmeláda',
    price: '6,40 €',
    weight: '220 g',
    description:
      'Ručne zbierané lesné čučoriedky z Vysokých Tatier. Bohatá na antioxidanty, jemne korenená škoricou a muškátovým orieškom.',
    image: 'https://loremflickr.com/800/600/blueberry,jam?random=5',
    alt: 'Pohár domácej čučoriedkovej marmelády',
    badge: 'Limitovaná edícia',
  },
  {
    name: 'Malinový džem s mätou',
    price: '5,80 €',
    weight: '220 g',
    description:
      'Svieže maliny z ekologického pestovania, obohatené o čerstvú mätu z našej záhrady. Osviežujúca kombinácia ideálna k jogurtu alebo zmrzline.',
    image: 'https://loremflickr.com/800/600/raspberry,jam,mint?random=6',
    alt: 'Pohár domáceho malinového džemu s mätou',
    badge: null,
  },
  {
    name: 'Ríbezľový džem',
    price: '5,10 €',
    weight: '220 g',
    description:
      'Červené ríbezle z vlastnej záhrady, jemne sladené domácim medom. Príjemná kyslinka robí tento džem výborným doplnkom ku syrom aj pečivu.',
    image: 'https://loremflickr.com/800/600/currant,jam,berry?random=7',
    alt: 'Pohár domáceho ríbezľového džemu',
    badge: null,
  },
]

const BENEFITS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Čerstvé sezónne ovocie',
    text: 'Používame výlučne sezónne ovocie od lokálnych pestovateľov z okolia Banskej Bystrice a Zvolena. Každý kus je ručne vybraný v najlepšej zrelosti, aby naše marmelády mali tú najintenzívnejšiu chuť a vôňu. Spolupracujeme s viac ako 15 rodinnými farmami, ktoré zdieľajú naše hodnoty udržateľného hospodárenia.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Tradičné receptúry',
    text: 'Naše recepty si predávame z generácie na generáciu už viac ako 60 rokov. Varíme v malých dávkach v medených kotloch, presne tak, ako to robila naša babička v dedinke Čerín pod Poľanou. Nepoužívame žiadne umelé konzervačné látky, farbivá ani zahusťovadlá — iba ovocie, trstinový cukor a trochu citrónovej šťavy.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Darčekové balenia',
    text: 'Hľadáte originálny darček? Pripravíme vám krásne darčekové sety v ručne maľovaných drevených krabičkách. Na výber máte z troch veľkostí: malý set (3 poháre), stredný (5 pohárov) a veľký (8 pohárov s degustačným sprievodcom). Každé balenie doplníme ručne písaným venovaním podľa vášho priania.',
  },
]

export default function Features() {
  return (
    <section id="produkty" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Naše marmelády a džemy
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Každý pohár je ručne vyrobený z čerstvého ovocia bez umelých prísad.
            Vyberte si z našej ponuky a objednajte priamo k vám domov.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PRODUCTS.map((product, index) => (
            <article
              key={index}
              className="group bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <span className="text-blue-400 font-bold text-lg whitespace-nowrap">
                    {product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{product.weight}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-label={`Pridať ${product.name} do košíka`}
                >
                  Pridať do košíka
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Benefits / features section */}
        <div id="o-nas" className="pt-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Prečo si vybrať nás?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Za každým pohárom stojí príbeh, tradícia a starostlivosť o kvalitu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
