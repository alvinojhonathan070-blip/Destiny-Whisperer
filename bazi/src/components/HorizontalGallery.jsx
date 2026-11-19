import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    id: '01',
    alt: 'Lentera merah klasik Tionghoa',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80',
  },
  {
    id: '02',
    alt: 'Atap kuil tradisional arsitektur Tiongkok',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&q=80',
  },
  {
    id: '03',
    alt: 'Kaligrafi aksara Mandarin klasik',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=900&q=80',
  },
  {
    id: '04',
    alt: 'Gerbang merah istana kuno',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&q=80',
  },
  {
    id: '05',
    alt: 'Upacara teh tradisional',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80',
  },
];

export default function HorizontalGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;

      const getScrollAmount = () => {
        const totalWidth = track.scrollWidth;
        const viewportWidth = document.documentElement.clientWidth;
        return -(totalWidth - viewportWidth);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 2,
          start: 'top top',
          end: () => `+=${Math.abs(getScrollAmount()) * 0.8}`,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center overflow-hidden bg-maroon"
    >
      <div ref={trackRef} className="flex w-max flex-nowrap items-center gap-8 px-12 md:px-24">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="group relative h-[64vh] w-[40vw] shrink-0 overflow-hidden rounded-2xl border border-gold/40 bg-maroon/60 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-colors duration-500 hover:border-gold sm:w-[380px] md:w-[440px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-2 z-10 rounded-xl border border-gold/25 transition-colors duration-500 group-hover:border-gold/60"
            />

            <img
              src={item.image}
              alt={item.alt}
              onLoad={() => ScrollTrigger.refresh()}
              className="h-full w-full object-cover brightness-95 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:brightness-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}