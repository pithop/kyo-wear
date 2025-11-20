import { products } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';
import { useTranslations } from 'next-intl';

export function ProductGrid() {
    const t = useTranslations('Products');

    return (
        <section id="products" className="py-20 container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">{t('latestDrops')}</h2>
                <div className="h-px flex-1 bg-neutral-800 ml-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
