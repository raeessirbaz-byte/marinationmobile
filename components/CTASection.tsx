import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="container-wide text-center space-y-8">
        <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
          READY FOR YOUR <br /> <span className="text-primary">ALOHA FIX?</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
          Order online for pickup or visit us at one of our three locations across Seattle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/menu" className="btn-primary">ORDER ONLINE</Link>
          <Link href="/menu" className="border border-gray-900 text-gray-900 font-heading px-8 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:bg-gray-900 hover:text-white active:scale-95">VIEW OUR MENU</Link>
        </div>
      </div>
    </section>
  );
}
