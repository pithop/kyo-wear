'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Product } from '@/lib/products';
import { Button } from '../ui/Button';
import { useCart } from '@/context/CartContext';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart, toggleCart } = useCart();
    const t = useTranslations('ProductCard');
    const [isHovering, setIsHovering] = useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
        toggleCart();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative bg-surface border border-neutral-800 overflow-hidden"
        >
            <Link href={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                    {/* Video or Image */}
                    {product.videoUrl ? (
                        <>
                            <AnimatePresence>
                                {isHovering && (
                                    <motion.video
                                        key="video"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        src={product.videoUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}
                            </AnimatePresence>
                            <motion.div
                                animate={{ opacity: isHovering ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </motion.div>
                        </>
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Quick Add Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <Button
                            onClick={handleAddToCart}
                            className="w-full shadow-lg shadow-black/50"
                        >
                            {t('addToCart')}
                        </Button>
                    </div>
                </div>

                <div className="p-4">
                    <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">{product.category}</p>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                    <p className="text-neutral-300 font-mono">€{product.price}</p>
                </div>
            </Link>
        </motion.div>
    );
}
