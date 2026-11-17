import { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import 'lenis/dist/lenis.css'
import logo from './assets/logo.webp'
import SpecularButton from './components/SpecularButton';
import GradientASCII from './components/GradientASCII';
import CircularCarousel from './components/CircularCarousel';
import StarBorder from './components/StarBorder';
import CountUp from './components/CountUp'
import StaggeredMenu from './components/StaggeredMenu';
import HorizontalGallery from './components/HorizontalGallery';

import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.webp';
import img5 from './assets/img5.webp';
import img6 from './assets/img6.webp';
import img7 from './assets/img7.webp';

const items = [
  {src: img1},
  {src: img2},
  {src: img3},
  {src: img4},
  {src: img5},
  {src: img6},
  {src: img7}
];

const menuItems = [
  { label: 'Beranda', ariaLabel: 'Ke beranda', link: '#home' },
  { label: 'Tentang Kami', ariaLabel: 'Ke tentang kami', link: '#about' },
  { label: 'Layanan', ariaLabel: 'Ke layanan', link: '#service' },
  { label: 'Testimoni', ariaLabel: 'Ke testimoni', link: '#testimoni' },
  { label: 'Tanya Jawab', ariaLabel: 'Ke tanya jawab', link: '#faq' },
  { label: 'Hubungi Saya', ariaLabel: 'Hubungi lewat Instagram', link: 'https://ig.me/destiny_whisperer/' },
]

const socialItems = [
  { label: 'Instagram', link: 'https://ig.me/destiny_whisperer/' },
]

function App() {
  const lenisRef = useRef(null)
  const overlayRef = useRef(null)

  const openService = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const overlay = overlayRef.current
    const lenis = lenisRef.current

    lenis.stop()

    gsap.set(overlay, {
      display: 'block',
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      borderRadius: 30,
      opacity: 1,
    })

    gsap.timeline()
      .to(overlay, {
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        borderRadius: 0,
        duration: 0.7,
        ease: 'power3.inOut',
      })
      .add(() => lenis.scrollTo('#service', { immediate: true, force: true, offset: -80 }))
      .to(overlay, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set(overlay, { display: 'none' })
          lenis.start()
        },
      })
  }

  const [showBg, setShowBg] = useState(false)
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280)

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -80 },
    })
    lenisRef.current = lenis

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isMobile = vw < 640
  const isTablet = vw >= 640 && vw < 1024
  const carouselCardWidth = vw < 640 ? 520 : vw < 1024 ? 760 : vw < 1280 ? 560 : vw < 1536 ? 720 : 1000
  const carouselPerspective = vw < 640 ? 2200 : vw < 1024 ? 2800 : vw < 1536 ? 3000 : 3500
  const carouselGap = isMobile ? 12 : isTablet ? 18 : 25

  useEffect(() => {
    let idleId
    let timeoutId

    const mountBg = () => {
      if ('requestIdleCallback' in window) {
        idleId = requestIdleCallback(() => setShowBg(true), { timeout: 1500 })
      } else {
        timeoutId = setTimeout(() => setShowBg(true), 600)
      }
    }

    if (document.readyState === 'complete') {
      mountBg()
    } else {
      window.addEventListener('load', mountBg, { once: true })
    }

    return () => {
      window.removeEventListener('load', mountBg)
      if (idleId && 'cancelIdleCallback' in window) cancelIdleCallback(idleId)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
  <div className="overflow-x-hidden">
    <div ref={overlayRef} className="fixed z-60 hidden bg-white" />
  <header>
    {/* Navbar desktop */}
    <nav className="fixed inset-x-0 top-0 z-50 hidden items-center justify-between border-b-gold/80 border-b-2 bg-cream px-10 py-4 text-ink shadow-lg shadow-maroon/10 lg:flex">
  <div className="flex items-center gap-3">
    <img
      src={logo}
      loading="eager"
      decoding="async"
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
    rel="noreferrer"
    href="https://ig.me/destiny_whisperer/"
    className="rounded-full bg-maroon px-6 py-2.5 font-body text-base font-medium text-cream shadow-[1px_1px_5px_#a87a1e] shadow-gold transition duration-150 hover:scale-105 hover:bg-ink active:scale-100"
  >
  Hubungi Saya
  </a>
    </li>
  </ul>
    </nav>

    {/* Navbar tablet & hp */}
    <nav className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b-2 border-b-gold/80 bg-cream px-4 shadow-lg shadow-maroon/10 md:h-18 md:px-10 lg:hidden">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          loading="eager"
          decoding="async"
          alt="Logo Destiny Whisperer"
          className="w-9 object-contain md:w-10"
        />
        <p className="font-brand text-ink">
          <span className="block text-xs font-semibold leading-tight md:text-base">Destiny Whisperer</span>
          <span className="block font-body text-xs leading-tight text-ink/75">BaZi &amp; Zi Wei Dou Shu</span>
        </p>
      </div>
    </nav>

    {/* Tombol menu tablet & hp (duduk di atas navbar) */}
    <div className="lg:hidden">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={false}
        menuButtonColor="#1a1a1a"
        openMenuButtonColor="#1a1a1a"
        changeMenuColorOnOpen
        colors={['#d4a84b', '#7d1616']}
        accentColor="#8b1a1a"
        isFixed
        showLogo={false}
        compact
        showText={false}
      />
    </div>

  <section id="home" className="relative min-h-dvh h-auto w-full bg-cream">
     <div
    className={`absolute inset-0 transition-opacity duration-1000 ${showBg ? 'opacity-100' : 'opacity-0'}`}
  >
    {showBg && (
      <GradientASCII
colors={["#7d1616", "#a87a1e", "#d4a84b", "#fbf7f0"]}
shape="horizon"
characters="·.:乙己丁子巳八甲辛戌寅命理"
cellSize={isMobile ? 14 : 20}
density={0.6}
glyphOpacity={0.5}
gradientOpacity={0.4}
glow={0.25}
depthOfField={0.25}
flicker={0}
softness={0.4}
scale={2.5}
speed={0.2}
grain={0.04}
variation={0.2}
scrambleRadius={0.18}
mouseInteraction={true}
intro={true}
lightMode
      />
    )}
  </div>

  <div className="pointer-events-none absolute inset-y-0 left-0 z-5 w-full bg-linear-to-r from-cream/30 via-cream/40 to-transparent lg:w-3/5" />

  <div className="relative z-10 grid min-h-dvh grid-cols-1 items-center gap-8 px-5 pb-10 pt-28 sm:px-8 md:px-12 lg:mt-[3%] lg:grid-cols-2 lg:gap-12 lg:px-24 lg:pb-0 lg:pt-0">
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <h1 className="text-shadow-black text-shadow-sm font-brand text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Destiny
        <br />
        <span className="text-shadow-maroon text-shadow-md text-maroon">Whisperer</span>
      </h1>

      <p className="mt-6 max-w-md font-body text-base font-medium leading-relaxed text-ink/85 md:mt-8 md:text-lg">
        Baca karakter, jodoh, rejeki, dan peluang tahunanmu lewat tanggal, bulan, tahun, dan jam lahir. Ambil keputusan dengan lebih tenang.
      </p>

<div className="mt-6 flex flex-row flex-nowrap items-center justify-center gap-x-2 sm:gap-x-3 lg:justify-start [&>*]:shrink-0 [&_*]:whitespace-nowrap max-sm:[&_*]:text-[13px]">
  <a target='_blank' rel="noreferrer" href='https://ig.me/destiny_whisperer/'>
    <SpecularButton
      size="md"
      radius={40}
      tint="#8d1e1a"
      tintOpacity={1}
      textColor="#fafafa"
      lineColor="#ffffff"
      baseColor="#ffffff"
      intensity={1}
      idleIntensity={0.35}
      shineSize={10}
      shineFade={34}
      thickness={1.2}
      glow={1}
      followMouse
      proximity={250}
      onClick={() => console.log('clicked')}
    >
      Konsultasi Sekarang
    </SpecularButton>
  </a>
  <StarBorder
    href="#service"
    onClick={(e) => {
      e.preventDefault()
      openService(e)
    }}
    color="#f5b128"
    trailColor="#f5b128"
    duration={7.5}
    direction="clockwise"
    stars={1}
    trailLength={0.45}
    thickness={1}
    radius={30}
    glow={1}
    hover="lap"
    sparkle={false}
    clickPulse
    theme="light"
  >
    Lihat Layanan
  </StarBorder>
</div>

<div className='mt-8 flex flex-row justify-center gap-x-8 gap-y-4 font-body cursor-alias sm:gap-x-10 lg:mt-[5%] lg:justify-start lg:gap-[10%]'>
<div className='flex flex-row items-center gap-2 lg:gap-[8%]'>
<div className='flex flex-row gap-0 items-center'>
<CountUp
  from={0}
  to={100}
  mode="count"
  easing="easeOut"
  format="standard"
  separator=","
  prefix=""
  suffix=""
  direction="up"
  duration={1}
  delay={0}
  trigger="view"
  replayOnHover
  className="count-up-text"
  style={{"fontSize":"1.5rem","fontWeight":700, "color": "#8A6212"}}
/>
<p className='font-bold text-[#8A6212]'>+</p>
</div>
<p>Client</p>
</div>

<div className='flex flex-row items-center gap-2 lg:gap-[8%]'>
<div className='flex flex-row gap-0 items-end'>
<CountUp
  from={0}
  to={5}
  mode="count"
  easing="easeOut"
  format="standard"
  separator=","
  prefix=""
  suffix=""
  direction="up"
  duration={1}
  delay={0}
  trigger="view"
  replayOnHover
  className="count-up-text"
  style={{"fontSize":"1.5rem","fontWeight":700, "color": "#8A6212"}}
/>
<p className='font-bold text-md text-[#8A6212]'>/5</p>
</div>
<p>Rating</p>
</div>

<div className='flex flex-row items-center gap-2 lg:gap-[8%]'>
<p>Sejak</p>
<CountUp
  from={0}
  to={2018}
  mode="count"
  easing="easeOut"
  format="standard"
  separator=""
  prefix=""
  suffix=""
  direction="up"
  duration={1}
  delay={0}
  trigger="view"
  replayOnHover
  className="count-up-text"
  style={{"fontSize":"1.5rem","fontWeight":700, "color": "#8A6212"}}
/>
</div>

    </div>
    </div>

    <div
      className="relative h-65 w-full sm:h-95 md:h-115 lg:h-140"
      style={{ width: '100%', position: 'relative' }}
    >
      <CircularCarousel
        items={items}
        preset="cylinder"
        intro="rise"
        cardWidth={carouselCardWidth}
        aspectRatio={14 / 9}
        speed={20}
        captions={false}
        gap={carouselGap}
        tilt={-6}
        curve={1}
        perspective={carouselPerspective}
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
