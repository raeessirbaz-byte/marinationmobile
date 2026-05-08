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
      </div>

      <div className="container-wide relative z-10 text-center flex justify-center items-center">
        <div className="bg-bg-dark/60 backdrop-blur-md p-8 md:p-16 rounded-[40px] border border-text-cream/10 shadow-2xl max-w-5xl w-full space-y-8">
          {badge && (
            <span className="inline-block py-1 px-4 border border-primary/50 text-primary rounded-full text-xs font-heading tracking-[0.2em] mb-4 bg-bg-dark/80 backdrop-blur-sm animate-fade-in shadow-lg">
              {badge}
            </span>
          )}
          
          <h1 className="text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-text-cream animate-slide-up drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
            {title}
          </h1>

          <p className="text-text-cream text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300 font-medium drop-shadow-xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in delay-500">
            <Link href={cta1.link} className="btn-primary w-full sm:w-auto text-center shadow-[0_0_20px_rgba(245,212,66,0.4)]">
              {cta1.text}
            </Link>
            <Link href={cta2.link} className="btn-secondary bg-bg-dark/80 hover:bg-text-cream w-full sm:w-auto text-center border-text-cream/20 shadow-xl">
              {cta2.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-text-beige/40">
        <span className="text-[10px] font-heading tracking-widest uppercase">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
