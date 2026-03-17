const FOOTER_LINKS = [
  {
    title: 'Obchod',
    links: [
      { label: 'Všetky produkty', href: '#produkty' },
      { label: 'Darčekové sety', href: '#produkty' },
      { label: 'Akciové ponuky', href: '#produkty' },
    ],
  },
  {
    title: 'Informácie',
    links: [
      { label: 'O nás', href: '#o-nas' },
      { label: 'Doprava a platba', href: '#kontakt' },
      { label: 'Obchodné podmienky', href: '#' },
    ],
  },
  {
    title: 'Podpora',
    links: [
      { label: 'Kontakt', href: '#kontakt' },
      { label: 'Časté otázky', href: '#kontakt' },
      { label: 'Reklamácie', href: '#kontakt' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a
              href="#domov"
              className="font-serif text-xl font-bold text-white hover:text-blue-400 transition-all duration-300"
            >
              🫙 Babičkine Marmelády
            </a>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Domáce marmelády a džemy z čerstvého sezónneho ovocia. Varené s láskou
              v Banskej Bystrici od roku 1962.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Babičkine Marmelády s.r.o. Všetky práva vyhradené.
          </p>
          <p className="text-gray-600 text-xs">
            IČO: 12345678 · DIČ: 2012345678 · Zapísaná v OR OS Banská Bystrica
          </p>
        </div>
      </div>
    </footer>
  )
}
