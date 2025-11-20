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
    const [isHovering, setIsHovering] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative bg-surface border border-neutral-800 overflow-hidden"
        >
            <Link href={`/product/${product.id}`} className="block h-full">
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
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </motion.div>
                        </>
                    ) : (
                        <>
                            {/* Secondary Image (Hover) */}
                            {product.images[1] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isHovering ? 1 : 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 z-10"
                                >
                                    <Image
                                        src={product.images[1]}
                                        alt={`${product.name} - Alternate View`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </motion.div>
                            )}

                            {/* Main Image */}
                            <div className="w-full h-full">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </>
                    )}

                    {/* Overlay Gradient - Subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
