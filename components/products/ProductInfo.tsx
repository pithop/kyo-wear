'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Minus, Plus, Ruler } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { SizeRecommender } from '@/components/product/SizeRecommender';

interface ProductInfoProps {
    product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const [isSizeRecommenderOpen, setIsSizeRecommenderOpen] = useState(false);
    const t = useTranslations('Products');

    const sizes = ['S', 'M', 'L', 'XL'];

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    const handleSizeRecommend = (size: string) => {
        setSelectedSize(size);
        setIsSizeRecommenderOpen(false);
    };

    return (
        <>
            <div className="flex flex-col space-y-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-200 tracking-widest uppercase mb-4">
                        {product.name}
                    </h1>
                    <p className="text-3xl text-white font-mono">€{product.price}</p>
                </div>

                <div className="space-y-4">
                    <p className="text-neutral-400 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                {/* Size Selection */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="block text-sm text-neutral-400 uppercase tracking-widest">
                            Size
                        </label>
                        <button
                            onClick={() => setIsSizeRecommenderOpen(true)}
                            className="flex items-center gap-2 text-xs text-accent hover:text-accent/80 transition-colors uppercase tracking-wider"
                        >
                            <Ruler className="w-3 h-3" />
                            Find My Size
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`p-3 border transition-all uppercase tracking-wider text-sm ${selectedSize === size
                                        ? 'border-accent bg-accent/10 text-white'
                                        : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity */}
                <div className="space-y-4">
                    <label className="block text-sm text-neutral-400 uppercase tracking-widest">
                        Quantity
                    </label>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center text-white font-mono">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Add to Cart */}
                <Button onClick={handleAddToCart} size="lg" className="w-full tracking-widest">
                    Add to Cart - €{(product.price * quantity).toFixed(2)}
                </Button>
            </div>

            {/* Size Recommender Modal */}
            <SizeRecommender
                isOpen={isSizeRecommenderOpen}
                onClose={() => setIsSizeRecommenderOpen(false)}
                onRecommend={handleSizeRecommend}
            />
        </>
    );
}
