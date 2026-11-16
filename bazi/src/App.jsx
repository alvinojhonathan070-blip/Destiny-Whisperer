import logo from './assets/logo.webp'
import SpecularButton from './components/SpecularButton';
import GradientASCII from './components/GradientASCII';
import CircularCarousel from './components/CircularCarousel';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg'

const items = [
  {src: img1},
  {src: img2},
  {src: img3},
  {src: img4}
];

function App() {
  return (
  <div>
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b-white/40 border-b-2 bg-cream/20 px-10 py-4 text-ink shadow-lg shadow-maroon/10 backdrop-blur-xl backdrop-saturate-150">
  <div className="flex items-center gap-3">
    <img
      src={logo}
      loading="eager"
      alt="Logo Destiny Whisperer"
      className="w-10 object-contain"
    />
    <p className="font-brand text-ink">
      <span className="block text-base font-semibold leading-tight">Destiny Whisperer</span>
      <span className="block font-body text-xs leading-tight text-ink/75">BaZi &amp; Zi Wei Dou Shu</span>
    </p>
  </div>

  <ul className="flex items-center gap-6 font-heading text-md tracking-normal">
    <li><a href="#home" className="nav-item transition">Beranda</a></li>
    <li><a href="#about" className="nav-item transition">Tentang Kami</a></li>
    <li><a href="#service" className="nav-item transition">Layanan</a></li>
    <li><a href="#testimoni" className="nav-item transition">Testimoni</a></li>
    <li><a href="#faq" className="nav-item transition">Tanya Jawab</a></li>
    <li>
  <a
    target="_blank"
    href="https://ig.me/destiny_whisperer/"
    className="rounded-full bg-maroon px-6 py-2.5 font-body text-base font-medium text-cream shadow-md transition duration-150 hover:scale-105 hover:bg-ink active:scale-100"
  >
  Hubungi Saya
  </a>
    </li>
  </ul>
      </nav>
<header>
  <section id="home" className="relative min-h-dvh w-full overflow-hidden bg-white">
  {/* background */}
  <div className="absolute inset-0">
    <GradientASCII
    colors={["#7d1616", "#a87a1e", "#d4a84b", "#fbf7f0"]}
    shape="horizon"
    characters="·.:乙己丁子巳八甲辛戌寅命理"
    cellSize={16}
    density={0.55}
    glyphOpacity={0.55}
    gradientOpacity={0.85}
    glow={0.2}
    depthOfField={0.2}
    flicker={0}
    softness={0.35}
    scale={2.5}
    speed={0.25}
    grain={0.03}
    variation={0}
    scrambleRadius={0.14}
    mouseInteraction={true}
    intro={true}
    lightMode
  />
  </div>

  {/* overlay hanya di area teks */}
  <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-3/5 bg-linear-to-r from-cream/30 via-cream/40 to-transparent" />

  <div className="relative z-10 grid min-h-dvh grid-cols-2 items-center gap-12 px-24">
    {/* kolom kiri: teks */}
    <div className="flex flex-col">
      <h1 className="font-heading text-8xl font-extrabold tracking-tight text-ink">
        Destiny
        <br />
        <span className="text-maroon">Whisperer</span>
      </h1>

      <p className="mt-8 max-w-md font-body text-base font-medium leading-relaxed text-ink/85 md:text-lg">
        Baca karakter, jodoh, rejeki, dan peluang tahunanmu lewat tanggal, bulan, tahun, dan jam lahir. Ambil keputusan dengan lebih tenang.
      </p>

      <div className="mt-6">
        <SpecularButton
        size="md"
        tint="#8b1a1a"
        tintOpacity={1}
        textColor="#fafafa"
        lineColor="#a87a1e"
        baseColor="#3f3f46"
        intensity={1}
        idleIntensity={0.35}
        shineSize={10}
        shineFade={34}
        thickness={1.2}
        glow={1}
        followMouse
        proximity={250}
        onClick={() => console.log('clicked')}
        radius={17}
></SpecularButton>
      </div>
    </div>

    {/* kolom kanan: carousel */}
    <div style={{ width: '100%', height: '560px', position: 'relative' }}>
      <CircularCarousel
        items={items}
        preset="cylinder"
        intro="rise"
        cardWidth={450}
        aspectRatio={16 / 9}
        speed={20}
        captions={false}
        gap={25}
        tilt={-3}
        curve={1}
        perspective={2500}
        autoplay="drift"
        interval={3}
        direction="left"
        momentum={0.6}
        snap
        pauseOnHover
        focusOnClick
        draggable
        parallax={0.3}
        stretch={0.5}
        fadeColor="#FBF7F0"
        depthFade={0.39}
        innerShade={0.6}
        cornerRadius={12}
      />
    </div>
  </div>
</section>
</header>




    </div>
  )
}

export default App