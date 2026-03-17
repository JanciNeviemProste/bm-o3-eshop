import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Domov', href: '#domov' },
  { label: 'Produkty', href: '#produkty' },
  { label: 'O nás', href: '#o-nas' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-md border-b border-white/10"
      aria-label="Hlavná navigácia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#domov"
            className="font-serif text-xl font-bold text-white hover:text-blue-400 transition-all duration-300"
          >
            🫙 Babičkine Marmelády
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#produkty"
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Objednať
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
            aria-expanded={isOpen}
            aria-label="Otvoriť menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#produkty"
              onClick={() => setIsOpen(false)}
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-3 rounded-lg text-sm font-semibold shadow-md text-center transition-all duration-300"
            >
              Objednať
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
