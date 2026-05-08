import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Header />
      <section className="pt-40 pb-20 container-wide max-w-3xl mx-auto">
        <h1 className="text-5xl font-heading text-text-cream mb-4">PRIVACY POLICY</h1>
        <p className="text-text-beige/60 text-sm mb-12">Last updated: January 1, 2024</p>

        <div className="space-y-10 text-text-beige leading-relaxed">
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">INFORMATION WE COLLECT</h2>
            <p>We collect information you provide directly to us, such as your name and email address when you subscribe to our newsletter or make a catering inquiry. We also collect standard usage data such as pages visited and browser type.</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">HOW WE USE YOUR INFORMATION</h2>
            <p>We use your information to respond to your inquiries, send newsletters you have opted into, and improve our website experience. We do not sell your personal information to third parties.</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">COOKIES</h2>
            <p>Our website uses cookies to enhance your browsing experience. You may disable cookies in your browser settings, though some features may not function properly as a result.</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">CONTACT US</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@marinationmobile.com" className="text-primary hover:underline">info@marinationmobile.com</a>.</p>
          </div>
        </div>

        <Link href="/" className="inline-block mt-12 text-primary font-heading tracking-widest border-b border-primary pb-1 hover:text-accent-red hover:border-accent-red transition-all">
          &larr; BACK HOME
        </Link>
      </section>
      <Footer />
    </main>
  );
}
