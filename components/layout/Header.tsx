'use client';

import { Link } from '@/i18n/routing';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function Header() {
    const { toggleCart, items } = useCart();
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const t = useTranslations('Header');

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 h-20 z-50 flex items-center backdrop-blur-md bg-black/80 border-b border-white/10"
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-accent transition-colors duration-300">
                    KYO WEAR
                </Link>

                <button
                    onClick={toggleCart}
                    className="relative p-2 text-white hover:text-accent transition-colors duration-300 group"
                    aria-label={t('cart')}
                >
                    <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    {itemCount > 0 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            key={itemCount}
                            className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-accent/20"
                        >
                            {itemCount}
                        </motion.span>
                    )}
                </button>
            </div>
        </motion.header>
    );
}
