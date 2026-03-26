import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

export default function SimpleHero({
  title,
  description,
  badgeText = "Universidad de San Pablo T",
  badgeLabel = "USPT",
  ctaButtons = [
    { text: "Ver Oferta Académica", href: "/carreras", primary: true },
    { text: "Solicitar Información", href: "/contacto" }
  ],
  microDetails = ["15+ años de experiencia", "5,000+ egresados exitosos", "98% inserción laboral"]
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    // Set initial states
    if (badgeRef.current) {
      gsap.set(badgeRef.current, { opacity: 0, y: -20 });
    }

    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
    }

    if (paraRef.current) {
      gsap.set(paraRef.current, { opacity: 0, y: 30 });
    }

    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 30 });
    }

    if (microRef.current) {
      gsap.set(microRef.current, { opacity: 0, y: 20 });
    }

    // Create timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.5
    });

    if (badgeRef.current) {
      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0);
    }

    if (headerRef.current) {
      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2);
    }

    if (paraRef.current) {
      tl.to(paraRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.4);
    }

    if (ctaRef.current) {
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.6);
    }

    if (microRef.current) {
      tl.to(microRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.8);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_60deg,transparent_120deg)] animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
        <div 
          ref={badgeRef} 
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-white/80">
            {badgeLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="text-sm font-light tracking-tight text-white">
            {badgeText}
          </span>
        </div>

        <h1 
          ref={headerRef} 
          className="max-w-4xl text-left text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl font-heading"
        >
          {title}
        </h1>

        <p 
          ref={paraRef} 
          className="max-w-2xl text-left text-lg font-light leading-relaxed text-white/90 sm:text-xl font-body"
        >
          {description}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-4">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`rounded-xl px-8 py-4 text-base font-medium tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                button.primary
                  ? "bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-lg"
                  : "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              }`}
            >
              {button.text}
            </a>
          ))}
        </div>

        <ul ref={microRef} className="mt-8 flex flex-wrap gap-8 text-sm font-light text-white/70">
          {microDetails.map((detail, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white/50" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}