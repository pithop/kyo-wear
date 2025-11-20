'use client';

import { X, Minus, Plus, Trash2, Package } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '@/context/CartContext';
import { useState } from 'react';

const FREE_SHIPPING_THRESHOLD = 150;

export function CartDrawer() {
    const { items, isCartOpen, toggleCart, removeFromCart, addToCart } = useCart();
    const t = useTranslations('Cart');

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
    const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
    const hasFreeShipping = shippingProgress >= 100;

    const updateQuantity = (item: CartItem, delta: number) => {
        if (delta > 0) {
            addToCart(item);
        } else if (item.quantity > 1) {
            // Decrease quantity logic - need to implement in context
            removeFromCart(item.id);
            if (item.quantity > 1) {
                for (let i = 0; i < item.quantity - 1; i++) {
                    addToCart(item);
                }
            }
        }
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-neutral-800">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-bold text-white tracking-tight">
                                    {t('title')}
                                </h2>
                                <button
                                    onClick={toggleCart}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Free Shipping Progress Bar */}
                            <div className="space-y-2">
                                <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${shippingProgress}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        className={`h-full ${hasFreeShipping
                                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                                                : 'bg-accent'
                                            }`}
                                    />
                                </div>
                                <p className="text-xs text-neutral-400 text-center">
                                    {hasFreeShipping ? (
                                        <span className="text-yellow-400 font-bold flex items-center justify-center gap-1">
                                            <Package className="w-3 h-3" />
                                            {t('freeShippingUnlocked')}
                                        </span>
                                    ) : (
                                        <>
                                            {t('freeShippingProgress', { amount: amountToFreeShipping.toFixed(0) })}
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-neutral-500">
                                    <p className="text-lg mb-2">{t('empty')}</p>
                                    <p className="text-sm">{t('emptySubtitle')}</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <AnimatePresence>
                                        {items.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="flex gap-4 bg-neutral-900 p-4 border border-neutral-800"
                                            >
                                                <div className="relative w-20 h-24 flex-shrink-0 bg-neutral-800">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-white font-medium truncate">{item.name}</h3>
                                                    <p className="text-neutral-500 text-sm">{item.category}</p>
                                                    <p className="text-accent font-mono mt-1">€{item.price}</p>

                                                    <div className="flex items-center gap-2 mt-2">
                                                        <button
                                                            onClick={() => updateQuantity(item, -1)}
                                                            className="w-6 h-6 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item, 1)}
                                                            className="w-6 h-6 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-neutral-500 hover:text-accent transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-neutral-800 space-y-4">
                                <div className="flex justify-between text-lg">
                                    <span className="text-neutral-400">{t('subtotal')}</span>
                                    <span className="text-white font-bold font-mono">€{subtotal}</span>
                                </div>

                                <Link href="/checkout" onClick={toggleCart}>
                                    <Button className="w-full" size="lg">
                                        {t('checkout')}
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
