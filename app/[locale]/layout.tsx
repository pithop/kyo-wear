import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Kyo Wear - Marque Streetwear Japonais Premium',
    default: 'Kyo Wear | Premium Streetwear - Aix-en-Provence',
  },
  description: "Découvrez Kyo Wear : L'alliance du design minimaliste d'Aix-en-Provence et du style streetwear japonais. Hoodies, Pantalons Cargo et Kimonos Noragi haut de gamme.",
  keywords: ["streetwear japonais homme", "marque streetwear france", "pantalon cargo techwear", "hoodie oversize japonais", "mode tokyo"],
  openGraph: {
    title: "Kyo Wear | Premium Streetwear",
    description: "Japanese-inspired streetwear designed in Val Saint André. Limited edition prints.",
    url: "https://kyowear.com",
    siteName: "Kyo Wear",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551488852-a80a62c79d45?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Kyo Wear Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <NextIntlClientProvider messages={messages}>
            <CartProvider>
              <Header />
              <main className="pt-20 min-h-screen">
                {children}
              </main>
              <Footer />
              <CartDrawer />
              <CookieConsent />
              <Analytics />
              <SchemaMarkup />
            </CartProvider>
          </NextIntlClientProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
