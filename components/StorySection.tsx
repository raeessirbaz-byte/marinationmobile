import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function StorySection() {
  return (
    <section id="about" className="section-padding bg-white text-gray-900">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <SectionTitle
              subtitle="OUR JOURNEY"
              title="FROM BIG BLUE TO EVERYDAY ALOHA"
            />
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                In 2009, Kamala and Roz hit the streets of Seattle with a single food truck called &quot;Big Blue&quot;. Their mission was simple: serve up the bold, spicy flavors of Hawaiian-Korean fusion with a side of Everyday Aloha.
              </p>
              <p>
                What started as a mobile kitchen quickly grew into a local obsession. From the shores of Alki to the heart of Columbia City, we&apos;ve remained true to our roots—melting delicate heat and the flavors of aloha together in your mouth.
              </p>
              <p className="font-heading text-primary text-xl tracking-wider">
                WE BELIEVE IN GOOD FOOD, GOOD PEOPLE, AND GOOD VIBES.
              </p>
            </div>
            <div className="pt-4">
              <button className="border border-gray-900 text-gray-900 font-heading px-8 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:bg-gray-900 hover:text-white active:scale-95">
                READ OUR FULL STORY
              </button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/a39c5af4-1301-4bb9-9076-707faaab1535/Exterior+2+%281%29.JPG"
                alt="Marination Big Blue Truck"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
              <p className="font-heading text-4xl text-gray-900 leading-none">15+</p>
              <p className="text-[10px] tracking-[0.2em] font-heading text-gray-900/80">YEARS OF ALOHA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
