const igLink = 'https://www.instagram.com/destiny_whisperer/'

const area = ['Jakarta', 'Surabaya', 'Palembang']

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#service' },
  { label: 'Tanya Jawab', href: '#faq' },
]

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 w-full bg-ink px-5 py-16 text-cream md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-brand text-xl font-semibold">Destiny Whisperer</p>
          <p className="mt-2 font-body text-sm text-gold">BaZi &amp; Zi Wei Dou Shu</p>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-cream/65">
            Membaca karakter, jodoh, rejeki, dan peluang tahunan lewat tanggal, bulan, tahun, dan jam lahir.
          </p>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.3em] text-gold">MENU</p>
          <ul className="mt-5 space-y-3 font-body text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-cream/75 transition hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.3em] text-gold">KONTAK</p>
          <ul className="mt-5 space-y-3 font-body text-sm text-cream/75">
            <li>
              <a
                href={igLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gold"
              >
                Instagram @destiny_whisperer
              </a>
            </li>
            <li>Jakarta</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-4 border-t border-gold/20 pt-8 font-body text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Destiny Whisperer.</p>
        <p className="font-hanzi tracking-widest text-gold/70">命理 · 八字</p>
      </div>
    </footer>
  )
}

export default Footer