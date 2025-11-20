'use client';

import Image from 'next/image';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import { ProductInfo } from '@/components/products/ProductInfo';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { ProductDNA } from '@/components/product/ProductDNA';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Product Image */}
                <div className="relative aspect-[3/4] bg-neutral-900">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Product Info with Size Recommender */}
                <ProductInfo product={product} />
            </div>

            {/* Product DNA */}
            <div className="mb-20">
                <ProductDNA />
            </div>

            {/* Related Products */}
            <RelatedProducts currentProductId={product.id} />
        </div>
    );
}
