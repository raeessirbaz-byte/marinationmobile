import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Header />
      <section className="pt-40 pb-20 container-wide max-w-3xl mx-auto">
        <h1 className="text-5xl font-heading text-text-cream mb-4">TERMS OF SERVICE</h1>
        <p className="text-text-beige/60 text-sm mb-12">Last updated: January 1, 2024</p>

        <div className="space-y-10 text-text-beige leading-relaxed">
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">USE OF WEBSITE</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">INTELLECTUAL PROPERTY</h2>
            <p>All content on this website — including text, images, logos, and graphics — is the property of Marination Mobile and is protected by applicable copyright and trademark laws.</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">CATERING & ORDERS</h2>
            <p>Catering inquiries submitted through this website are subject to availability and confirmation by our team. Prices and menu items are subject to change without notice.</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">LIMITATION OF LIABILITY</h2>
            <p>Marination Mobile is not liable for any damages arising from the use of, or inability to use, this website or its content. Use of this site is at your own risk.</p>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-text-cream mb-4">CONTACT US</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:info@marinationmobile.com" className="text-primary hover:underline">info@marinationmobile.com</a>.</p>
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
