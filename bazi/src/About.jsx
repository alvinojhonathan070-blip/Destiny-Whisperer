const pillars = [
  { glyph: '年', label: 'Pilar Tahun', note: 'Akar keluarga dan latar belakang' },
  { glyph: '月', label: 'Pilar Bulan', note: 'Karier dan lingkungan kerja' },
  { glyph: '日', label: 'Pilar Hari', note: 'Dirimu dan pasangan', main: true },
  { glyph: '時', label: 'Pilar Jam', note: 'Anak, cita-cita, dan masa depan' },
]

const methods = [
  {
    name: 'BaZi',
    glyph: '八字',
    text: 'Delapan karakter dari tahun, bulan, hari, dan jam lahir, dibaca untuk melihat watak, kekuatan, dan siklus keberuntunganmu.',
  },
  {
    name: 'Zi Wei Dou Shu',
    glyph: '紫微斗數',
    text: 'Peta bintang berdasarkan waktu lahir, dipakai untuk melihat gambaran karier, jodoh, dan rejeki di tiap fase hidup.',
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative min-h-dvh h-auto w-full overflow-hidden bg-cream px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-12 xl:px-16 2xl:px-24"
    >
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <h2 className="text-shadow-gold text-shadow-sm font-brand text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
            Membaca <span className="text-gold">peta hidupmu</span> dari <span className="text-maroon">tanggal lahir</span>
          </h2>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink/85 md:text-lg">
            Destiny Whisperer membantu kamu memahami karakter, hubungan, rejeki, dan peluang
            lewat dua metode klasik Tionghoa. Sejak 2018, lebih dari 100 klien sudah
            berkonsultasi di sini.
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink/85 md:text-lg">
            Hasilnya bukan ramalan yang menakut-nakuti. Kamu mendapat gambaran yang jelas,
            supaya bisa memilih langkah berikutnya dengan lebih tenang.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {methods.map((m) => (
              <div key={m.name} className="border-l-2 border-gold pl-5">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-heading text-xl font-semibold text-maroon">{m.name}</h3>
                  <span className="font-brand text-base text-gold">{m.glyph}</span>
                </div>
                <p className="mt-1 max-w-lg font-body text-base leading-relaxed text-ink/80">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kanan: empat pilar BaZi */}
        <div aria-label="Empat pilar dalam BaZi" className="flex flex-col gap-4">
  <div className="grid grid-cols-4 items-end gap-2 sm:gap-4">
    {pillars.map((p) => (
      <div
        key={p.glyph}
        className={`group relative flex cursor-default flex-col items-center justify-between overflow-hidden rounded-t-full border px-1.5 pb-5 pt-8 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 sm:px-3 sm:pb-6 sm:pt-10 ${
          p.main
            ? 'h-72 border-maroon bg-maroon text-cream shadow-lg shadow-maroon/20 hover:border-gold/70 hover:shadow-[0_18px_40px_-10px_rgba(128,0,0,0.45)] sm:h-96'
            : 'h-60 border-gold/60 bg-white/75 text-ink backdrop-blur-xs hover:border-maroon/50 hover:bg-white hover:shadow-[0_16px_35px_-10px_rgba(168,122,30,0.28)] sm:h-80'
        }`}
      >
        {/* Inner architectural arch hairline */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-1.5 rounded-t-full border transition-colors duration-500 ${
            p.main
              ? 'border-cream/15 group-hover:border-gold/45'
              : 'border-gold/25 group-hover:border-gold/60'
          }`}
        />

        {/* Subtle ambient radial glow on hover */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
            p.main ? 'bg-gold/25' : 'bg-gold/20'
          }`}
        />

        <span
          className={`relative z-10 font-brand text-4xl font-bold transition-transform duration-500 ease-out group-hover:scale-105 sm:text-5xl md:text-6xl ${
            p.main
              ? 'text-cream drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]'
              : 'text-maroon group-hover:text-maroon/90'
          }`}
        >
          {p.glyph}
        </span>

        <div className="relative z-10 flex flex-col gap-1 transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          <span className="font-heading text-[11px] font-semibold leading-tight tracking-wide sm:text-sm">
            {p.label}
          </span>
          <span
            className={`hidden font-body text-xs leading-snug transition-colors duration-300 sm:block ${
              p.main
                ? 'text-cream/80 group-hover:text-cream'
                : 'text-ink/70 group-hover:text-ink/90'
            }`}
          >
            {p.note}
          </span>
        </div>
      </div>
    ))}
  </div>

          <p className="font-body text-sm leading-relaxed text-ink/70">
            Pilar Hari menjadi pusat pembacaan BaZi, karena menggambarkan dirimu sendiri.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About