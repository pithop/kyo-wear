import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
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

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Kyo Wear est-elle une marque française ?</h3>
              <p className="text-neutral-600">Oui, inspirée par le Japon, dessinée à Aix-en-Provence (Val Saint André).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Quels sont les délais de livraison ?</h3>
              <p className="text-neutral-600">Livraison rapide en France pour nos pièces streetwear premium.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
