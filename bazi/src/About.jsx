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
                className={`flex flex-col items-center justify-between rounded-t-full border px-1.5 pb-5 pt-8 text-center sm:px-3 sm:pb-6 sm:pt-10 ${
                  p.main
                    ? 'h-72 border-maroon bg-maroon text-cream shadow-lg shadow-maroon/20 sm:h-96'
                    : 'h-60 border-gold/60 bg-white/70 text-ink sm:h-80'
                }`}
              >
                <span
                  className={`font-brand text-4xl font-bold sm:text-5xl md:text-6xl ${
                    p.main ? 'text-cream' : 'text-maroon'
                  }`}
                >
                  {p.glyph}
                </span>

                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[11px] font-semibold leading-tight sm:text-sm">
                    {p.label}
                  </span>
                  <span
                    className={`hidden font-body text-xs leading-snug sm:block ${
                      p.main ? 'text-cream/80' : 'text-ink/70'
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