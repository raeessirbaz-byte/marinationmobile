import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1614717142435-0A3V8Z7X5W4O6H4B4Y4W/big-blue.jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-bg-dark/80 backdrop-blur-sm" />
      </div>

      <div className="container-wide relative z-10 text-center space-y-8">
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-cream leading-none mb-6">
          READY FOR YOUR <br /> <span className="text-primary">ALOHA FIX?</span>
        </h2>
        <p className="text-text-beige text-lg max-w-xl mx-auto mb-10">
          Order online for pickup or visit us at one of our three locations across Seattle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/menu" className="btn-primary">ORDER ONLINE</Link>
          <Link href="/menu" className="btn-secondary">VIEW OUR MENU</Link>
        </div>
      </div>
    </section>
  );
}
