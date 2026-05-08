import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FoodCard from "@/components/FoodCard";
import StorySection from "@/components/StorySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  const highlights = [
    {
      name: "TACO 2-PACK",
      description: "Two corn tortillas, signature slaw, pickled jalapeños, and your choice of protein: Miso Ginger Chicken, Kalbi Beef, or Sexy Tofu.",
      price: "$11.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1698444302468-GTMI5UE1XE7PV3HWSTMI/PorkSandwich_MarinationCC_SEA_NateWatters-1665.jpg",
      badge: "BEST SELLER"
    },
    {
      name: "ALOHA SLIDERS",
      description: "Two sliders with Nappa cabbage slaw, and pickled jalapeños on sweet Hawaiian rolls. A fan favorite since 2009.",
      price: "$11.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1707582741757-9Q7CCYK4J6IJSQDJLMQ6/aloha-sliders.jpg",
    },
    {
      name: "TOCINO BOWL",
      description: "Filipino-style sweet pork over rice with kimchi, bacon, spam, and a sunny-side-up egg.",
      price: "$14.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1698444333015-7RNGSDJUYPHJEAGDATNX/TocinoBowl_MarinationCC_SEA_NateWatters-1611.jpg",
      badge: "MUST TRY"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero 
        title="BOLD FLAVORS FROM THE STREETS"
        subtitle="Seattle's sauciest food truck turned brick-and-mortar serving up Everyday Aloha Hawaiian-Korean fusion since 2009."
        image="https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1698443675673-V28M0FA1LY2RIVRSDXHQ/Spread_MarinationCC_SEA_NateWatters-1678.jpg"
        cta1={{ text: "ORDER ONLINE", link: "/menu" }}
        cta2={{ text: "VIEW MENU", link: "/menu" }}
        badge="SEATTLE STREET FOOD"
      />

      {/* Highlights Section */}
      <section className="section-padding bg-bg-charcoal">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionTitle 
              subtitle="SIGNATURE MENU" 
              title="MOST LOVED DISHES" 
            />
            <Link href="/menu" className="text-primary font-heading tracking-widest border-b border-primary pb-1 mb-2 hover:text-accent-red hover:border-accent-red transition-all">
              SEE FULL MENU
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <FoodCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <StorySection />

      {/* Locations Section */}
      <section id="locations" className="section-padding bg-bg-dark border-t border-text-cream/5">
        <div className="container-wide">
          <SectionTitle 
            subtitle="FIND US" 
            title="OUR LOCATIONS" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card flex flex-col group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/2698e70f-c483-4a38-8faa-28ba6053603c/DSC03878.jpg"
                  alt="Columbia City"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10 text-center">
                <h3 className="text-3xl mb-6 text-text-cream group-hover:text-primary transition-colors">COLUMBIA CITY</h3>
                <div className="space-y-4 text-text-beige text-sm mb-8">
                  <p>3714 S Hudson St<br />Seattle, WA 98118</p>
                  <p>Mon - Sun: 11am - 9pm</p>
                </div>
                <Link href="https://goo.gl/maps/6KfJRmDS9sGtf7e28" target="_blank" className="btn-secondary py-2 text-xs">DIRECTIONS</Link>
              </div>
            </div>
            
            <div className="glass-card flex flex-col border-primary/20 group scale-105 z-10 bg-bg-charcoal shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/a39c5af4-1301-4bb9-9076-707faaab1535/Exterior+2+%281%29.JPG"
                  alt="Ma Kai"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10 text-center">
                <h3 className="text-3xl mb-6 text-text-cream group-hover:text-primary transition-colors">MA KAI (WEST SEATTLE)</h3>
                <div className="space-y-4 text-text-beige text-sm mb-8">
                  <p>1660 Harbor Ave SW<br />Seattle, WA 98126</p>
                  <p>Mon - Sun: 9am - 9pm<br />(Brunch Sat-Sun 9-2)</p>
                </div>
                <Link href="https://goo.gl/maps/y9nVA" target="_blank" className="btn-primary py-2 text-xs">DIRECTIONS</Link>
              </div>
            </div>

            <div className="glass-card flex flex-col group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/7bd829b4-74bc-457f-aba5-07f177ab6281/DSC03791.jpg"
                  alt="Downtown"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10 text-center">
                <h3 className="text-3xl mb-6 text-text-cream group-hover:text-primary transition-colors">6TH & VIRGINIA</h3>
                <div className="space-y-4 text-text-beige text-sm mb-8">
                  <p>2000 6th Ave<br />Seattle, WA 98121</p>
                  <p>Mon - Fri: 11am - 8pm</p>
                </div>
                <Link href="https://goo.gl/maps/JvfmyT3Cuq32" target="_blank" className="btn-secondary py-2 text-xs">DIRECTIONS</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
