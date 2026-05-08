import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-charcoal border-t border-text-cream/5 pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-heading text-primary">
              MARINATION
            </Link>
            <p className="text-text-beige text-sm leading-relaxed max-w-xs">
              Seattle's sauciest food truck turned brick-and-mortar serving up Everyday Aloha since 2009. Hawaiian-Korean cuisine that melts in your mouth.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-bg-dark border border-text-cream/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer text-text-cream">
                IG
              </div>
              <div className="w-10 h-10 rounded-full bg-bg-dark border border-text-cream/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer text-text-cream">
                FB
              </div>
              <div className="w-10 h-10 rounded-full bg-bg-dark border border-text-cream/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer text-text-cream">
                TW
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-text-cream font-heading tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-text-beige hover:text-primary transition-colors text-sm">HOME</Link>
              </li>
              <li>
                <Link href="/menu" className="text-text-beige hover:text-primary transition-colors text-sm">OUR MENU</Link>
              </li>
              <li>
                <Link href="/#catering" className="text-text-beige hover:text-primary transition-colors text-sm">CATERING</Link>
              </li>
              <li>
                <Link href="/#locations" className="text-text-beige hover:text-primary transition-colors text-sm">LOCATIONS</Link>
              </li>
              <li>
                <Link href="/#about" className="text-text-beige hover:text-primary transition-colors text-sm">OUR STORY</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-text-cream font-heading tracking-widest">LOCATIONS</h4>
            <ul className="space-y-4 text-sm text-text-beige">
              <li>
                <p className="text-text-cream font-medium">COLUMBIA CITY</p>
                <p>3714 S Hudson St, Seattle</p>
              </li>
              <li>
                <p className="text-text-cream font-medium">MA KAI (WEST SEATTLE)</p>
                <p>1660 Harbor Ave SW, Seattle</p>
              </li>
              <li>
                <p className="text-text-cream font-medium">6TH & VIRGINIA (DOWNTOWN)</p>
                <p>2000 6th Ave, Seattle</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-text-cream font-heading tracking-widest">NEWSLETTER</h4>
            <p className="text-text-beige text-sm mb-4">Subscribe to get the latest updates and "Everyday Aloha".</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-bg-dark border border-text-cream/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary flex-grow"
              />
              <button className="bg-primary p-2 rounded-full text-text-cream hover:bg-accent-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-text-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-beige/60 uppercase tracking-widest font-heading">
          <p>© 2024 MARINATION MOBILE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
