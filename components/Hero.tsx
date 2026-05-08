import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  cta1: { text: string; link: string };
  cta2: { text: string; link: string };
  badge?: string;
}

export default function Hero({ title, subtitle, image, cta1, cta2, badge }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Marination Food"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient filter so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="container-wide relative z-10 text-center space-y-8 max-w-5xl mx-auto px-6">
        {badge && (
          <span className="inline-block py-1 px-4 border border-primary/50 text-primary rounded-full text-xs font-heading tracking-[0.2em] bg-black/30 backdrop-blur-sm">
            {badge}
          </span>
        )}

        <h1 className="text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-text-cream drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          {title}
        </h1>

        <p className="text-text-cream/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-xl">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Link href={cta1.link} className="btn-primary w-full sm:w-auto text-center shadow-[0_0_20px_rgba(245,212,66,0.4)]">
            {cta1.text}
          </Link>
          <Link href={cta2.link} className="btn-secondary w-full sm:w-auto text-center shadow-xl">
            {cta2.text}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-text-beige/40">
        <span className="text-[10px] font-heading tracking-widest uppercase">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
