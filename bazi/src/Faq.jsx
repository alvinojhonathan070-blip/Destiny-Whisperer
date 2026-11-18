const igLink = 'https://www.instagram.com/destiny_whisperer/'

const faqs = [
  {
    no: '一',
    q: 'Seberapa akurat hasil BaZi?',
    a: 'BaZi membaca pola dan kecenderungan dari data kelahiranmu, bukan kepastian. Hasilnya paling berguna sebagai bahan refleksi dan pertimbangan sebelum mengambil keputusan penting.',
  },
  {
    no: '二',
    q: 'Saya tidak tahu jam lahir, apakah tetap bisa?',
    a: 'Tetap bisa. Tanpa jam lahir, pilar jam tidak bisa dibaca, jadi beberapa detail analisa kurang presisi. Kalau memungkinkan, tanyakan jam lahir ke orang tua atau keluarga sebelum sesi.',
  },
  {
    no: '三',
    q: 'Sesinya online atau tatap muka?',
    a: 'Dua-duanya bisa. Sesi virtual dilakukan lewat chat, video call, atau telepon dari mana saja.',
  },
  {
    no: '四',
    q: 'Apa bedanya BaZi dan Zi Wei Dou Shu?',
    a: 'BaZi fokus pada empat pilar kelahiran dan elemen dalam dirimu. Zi Wei Dou Shu memakai peta bintang untuk membaca 12 domain kehidupan secara lebih menyeluruh, karena itu paketnya paling lengkap.',
  },
  {
    no: '五',
    q: 'Apa saja yang perlu saya siapkan?',
    a: 'Nama lengkap, tanggal, bulan, dan tahun lahir, serta jam lahir kalau ada. Kalau punya pertanyaan spesifik, tulis di pesan sebelum sesi dimulai.',
  },
  {
    no: '六',
    q: 'Format sesinya seperti apa?',
    a: 'Ada sesi interaktif lewat chat, video call, atau telepon dengan durasi 30 atau 60 menit. Ada juga format tanya jawab singkat lewat chat, dimulai dari satu pertanyaan.',
  },
  {
    no: '七',
    q: 'Apakah data saya aman?',
    a: 'Data tanggal dan jam lahirmu hanya dipakai untuk membuat analisa, dan tidak dibagikan ke pihak lain.',
  },
]

function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 w-full overflow-hidden bg-cream px-5 py-24 text-ink md:px-12 lg:px-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-10 font-hanzi text-[14rem] leading-none text-gold/10"
      >
        问
      </span>

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="font-brand text-sm tracking-[0.35em] text-maroon">TANYA JAWAB</p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
            Masih ragu? Cek dulu di sini
          </h2>
          <p className="mt-6 max-w-sm font-body leading-relaxed text-ink/75">
            Kalau pertanyaanmu belum ada di sini, langsung kirim DM di Instagram.
          </p>
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-maroon px-7 py-3 font-body font-semibold text-cream shadow-md transition hover:bg-ink"
          >
            Tanya lewat DM
          </a>
        </div>

        <div>
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-ink/15 py-6 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <div>
                  <span className="font-body text-xs tracking-[0.25em] text-maroon">{f.no}</span>
                  <span className="mt-2 block font-heading text-xl font-bold md:text-2xl">{f.q}</span>
                </div>
                <span className="mt-1 font-body text-2xl leading-none text-maroon transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq