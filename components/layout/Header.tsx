'use client';

import { Link } from '@/i18n/routing';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Header() {
    const { toggleCart, items } = useCart();
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const t = useTranslations('Header');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 h-20 z-50 flex items-center backdrop-blur-md bg-black/80 border-b border-white/10"
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-white hover:text-accent transition-colors"
                        aria-label={t('menu')}
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-accent transition-colors duration-300">
                        KYO WEAR
                    </Link>

                    {/* Desktop Nav (Optional - currently just logo and cart) */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Add desktop links here if needed later */}
                    </div>

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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-8">
                            <Link
                                href="/"
                                className="text-4xl font-bold text-white hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/#products"
                                className="text-4xl font-bold text-white hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Shop
                            </Link>
                            {/* Add more links as pages are built */}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
