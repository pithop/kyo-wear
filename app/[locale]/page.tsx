import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { FAQ } from "@/components/home/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyo Wear | Premium Streetwear - Aix-en-Provence",
  description: "Japanese-inspired streetwear designed in Val Saint André. Limited edition prints.",
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Kyo Wear est-elle une marque française ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, inspirée par le Japon, dessinée à Aix-en-Provence (Val Saint André)."
      }
    }, {
      "@type": "Question",
      "name": "Quels sont les délais de livraison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Livraison rapide en France pour nos pièces streetwear premium."
      }
    }]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ProductGrid />
      <FAQ />
    </div>
  );
}
