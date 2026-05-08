"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import FoodCard from "@/components/FoodCard";

export default function MenuPage() {
  const categories = ["ALL", "TACOS", "SLIDERS", "PLATES", "KIMCHI FRIED RICE", "SIDES", "DRINKS"];
  const [activeCategory, setActiveCategory] = useState("ALL");

  const menuItems = [
    {
      name: "TACO 2-PACK",
      category: "TACOS",
      description: "Corn tortillas, signature slaw, pickled jalapeños, choice of protein.",
      price: "$11.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1698444302468-GTMI5UE1XE7PV3HWSTMI/PorkSandwich_MarinationCC_SEA_NateWatters-1665.jpg",
    },
    {
      name: "ALOHA SLIDERS",
      category: "SLIDERS",
      description: "Kalua pork, Nappa cabbage slaw, and pickled jalapeños on a sweet Hawaiian roll.",
      price: "$11.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1707582741757-9Q7CCYK4J6IJSQDJLMQ6/aloha-sliders.jpg",
    },
    {
      name: "TOCINO BOWL",
      category: "KIMCHI FRIED RICE",
      description: "Kimchi, bacon, spam, and a sunny-side-up egg. Bold and spicy.",
      price: "$14.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1698444333015-7RNGSDJUYPHJEAGDATNX/TocinoBowl_MarinationCC_SEA_NateWatters-1611.jpg",
      badge: "SIGNATURE",
    },
    {
      name: "LU'AU PLATE",
      category: "PLATES",
      description: "Choice of protein, 2 scoops rice, and signature Mac Salad.",
      price: "$16.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1698444224207-J59U2JEQ505V77W26879/ChickenAndWaffle_MarinationCC_SEA_NateWatters-1568.jpg",
    },
    {
      name: "FISH N' CHIPS",
      category: "PLATES",
      description: "Panko-crusted fish, signature slaw, and fries with kimchi tartar.",
      price: "$15.00",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/6908455c-f349-478b-b4e8-e612b4955807/Spread_MarinationCC_SEA_NateWatters-1678.jpg",
    },
    {
      name: "SPAM MUSUBI",
      category: "SIDES",
      description: "Grilled spam, rice, and nori. The ultimate Hawaiian snack.",
      price: "$4.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1614717142435-0A3V8Z7X5W4O6H4B4Y4W/big-blue.jpg",
    },
    {
      name: "MISO GINGER SALAD",
      category: "SIDES",
      description: "Mixed greens, cucumber, carrots, and our signature miso ginger dressing.",
      price: "$10.00",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/7f302e3f-650e-4a60-a825-aa3123673ff1/Tots.JPG",
    },
    {
      name: "THE KIMCHEESE BURGER",
      category: "PLATES",
      description: "Beef patty, kimchi, cheddar, pickled jalapeños, and secret sauce on a brioche bun.",
      price: "$15.50",
      image: "https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/d2e188c1-bfec-490d-9ee3-d4ea597c8d77/pork+katsu+burger+ma+kai",
      badge: "COLUMBIA CITY FAVORITE",
    },
  ];

  const filteredItems =
    activeCategory === "ALL"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Menu Hero */}
      <section className="relative pt-48 pb-20 bg-gray-50 overflow-hidden border-b border-gray-200">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-heading leading-none text-gray-900 select-none">
            ALOHA
          </div>
        </div>

        <div className="container-wide relative z-10 text-gray-900">
          <SectionTitle subtitle="EVERYDAY ALOHA" title="OUR MENU" centered />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-8">
            Hand-crafted Hawaiian-Korean fusion inspired by the streets of Seattle. All our sauces and pickles are made from scratch daily.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-y border-gray-200 py-4">
        <div className="container-wide">
          <div className="flex items-center justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-heading text-xs tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-gray-900"
                    : "bg-white border border-gray-300 text-gray-700 hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredItems.map((item, i) => (
                <FoodCard key={i} {...item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 font-heading tracking-widest py-20">
              NO ITEMS IN THIS CATEGORY YET.
            </p>
          )}
        </div>
      </section>

      {/* Specialty Banner */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container-wide">
          <div className="bg-white border border-gray-200 rounded-2xl flex flex-col md:flex-row items-center overflow-hidden shadow-sm">
            <div className="w-full md:w-1/2 aspect-video relative">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5495bcb6e4b027d892329413/1614717142435-0A3V8Z7X5W4O6H4B4Y4W/big-blue.jpg"
                alt="Marination Catering"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-12 space-y-6">
              <span className="text-primary font-heading tracking-widest text-sm">EVENTS &amp; CATERING</span>
              <h3 className="text-4xl text-gray-900">BRING THE ALOHA TO YOUR NEXT EVENT</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From office lunches to wedding celebrations, we&apos;ll bring our food truck vibes or customized catering menus to you.
              </p>
              <Link href="/#catering" className="btn-primary mt-4 inline-block">INQUIRE NOW</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
