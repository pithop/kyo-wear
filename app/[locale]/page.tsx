import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyo Wear | Premium Streetwear - Aix-en-Provence",
  description: "Japanese-inspired streetwear designed in Val Saint André. Limited edition prints.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProductGrid />
    </div>
  );
}
