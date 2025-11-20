

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
        <div className="container mx-auto px-4 py-8 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 mb-20">
                {/* Left Column: Image Gallery (Vertical Stack) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                    {product.images.map((image, index) => (
                        <div key={index} className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden">
                            <Image
                                src={image}
                                alt={`${product.name} - View ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Column: Product Details (Sticky) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-24 h-fit">
                        <ProductInfo product={product} />
                    </div>
                </div>
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
