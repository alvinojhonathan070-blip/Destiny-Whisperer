const layanan = [
  {
    no: '壹',
    hanzi: '命',
    judul: 'Analisa Karakter',
    harga: 'IDR 250K',
    deskripsi: 'Membaca kelebihan dan kekurangan karaktermu, lengkap dengan saran untuk tumbuh.',
    untuk: 'kamu yang ingin mengenal diri lebih dalam',
  },
  {
    no: '贰',
    hanzi: '缘',
    judul: 'Analisa Jodoh',
    harga: 'IDR 350K',
    deskripsi: 'Melihat apakah jodoh sulit atau mudah, kapan dan di mana potensi bertemu, serta arah hubunganmu ke depan.',
    untuk: 'kamu yang sedang menunggu atau mencari pasangan',
  },
  {
    no: '叁',
    hanzi: '财',
    judul: 'Analisa Rejeki',
    harga: 'IDR 400K',
    deskripsi: 'Kekuatan dan kelemahan rejeki, periode lesu dan jaya, serta bidang kerja dan usaha yang cocok.',
    untuk: 'kamu yang ingin memutuskan jalur karier atau usaha',
  },
  {
    no: '肆',
    hanzi: '合',
    judul: 'Analisa Kecocokan',
    harga: 'IDR 600K',
    deskripsi: 'Potensi dan benturan dalam hubungan, perjalanan ke depan, dan tips untuk memperkuat hubungan.',
    untuk: 'pasangan yang ingin memahami dinamika hubungan',
  },
  {
    no: '伍',
    hanzi: '运',
    judul: 'Analisa Peluang Tahunan',
    harga: 'IDR 550K',
    deskripsi: 'Peluang dan tantangan di karier, keuangan, percintaan, dan kesehatan untuk tahun ini.',
    untuk: 'kamu yang ingin tahu peta tahun ini',
  },
  {
    no: '陆',
    hanzi: '紫',
    judul: 'Zi Wei Dou Shu',
    harga: 'IDR 850K',
    deskripsi: 'Pembacaan lengkap 12 domain kehidupan melalui bintang kelahiranmu.',
    untuk: 'kamu yang ingin gambaran paling menyeluruh',
    featured: true,
  },
]

const igLink = 'https://www.instagram.com/destiny_whisperer/'

function Service() {
  return (
    <section id="service" className="scroll-mt-24 w-full bg-ink px-5 py-24 text-cream md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-brand text-xl tracking-[0.35em] text-gold">LAYANAN</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight md:text-6xl">
              Baca peta hidupmu
            </h2>
          </div>
          <p className="max-w-sm font-body text-cream/70 md:text-right">
            Setiap sesi dibuat dari tanggal, bulan, tahun, dan jam lahirmu.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-gold/20 md:grid-cols-2 lg:grid-cols-3">
          {layanan.map((item) => (
            <article
              key={item.judul}
              className={`group relative flex flex-col overflow-hidden p-8 transition duration-300 ${
                item.featured ? 'bg-maroon' : 'bg-ink hover:bg-white/[0.03]'
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 font-hanzi text-[8rem] leading-none text-gold/10 transition duration-500 group-hover:text-gold/25"
              >
                {item.hanzi}
              </span>

              <div className="relative flex items-center gap-3">
                <p className="font-body text-xs tracking-[0.25em] text-gold">{item.no}</p>
                {item.featured && (
                  <span className="rounded-full border border-gold/60 px-3 py-0.5 font-body text-[11px] tracking-wider text-gold">
                    PALING LENGKAP
                  </span>
                )}
              </div>

              <h3 className="relative mt-4 font-heading text-2xl font-bold">{item.judul}</h3>
              <p className="relative mt-3 font-body text-sm leading-relaxed text-cream/75">
                {item.deskripsi}
              </p>
              <p className="relative mt-4 font-body text-xs text-cream/50">
                Cocok untuk {item.untuk}
              </p>

              <div className="relative mt-auto mt-8 flex items-end justify-between border-t border-gold/20 pt-6">
                <p className="font-heading text-2xl font-bold text-gold">{item.harga}</p>
                <a
                  href={igLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-medium underline underline-offset-4 transition hover:text-gold"
                >
                  DM di IG
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-px flex flex-col items-start justify-between gap-6 border border-gold/20 p-8 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-2xl font-bold">Kasus Khusus</p>
            <p className="mt-2 max-w-xl font-body text-sm text-cream/70">
              Konsultasi untuk mencari hari baik, membuat nama mandarin, atau pindah usaha. Harga dibahas lewat DM.
            </p>
          </div>
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold px-6 py-3 font-body text-sm font-medium text-gold transition hover:bg-gold hover:text-ink"
          >
            Tanya via DM
          </a>
        </div>
      </div>
    </section>
  )
}

export default Service