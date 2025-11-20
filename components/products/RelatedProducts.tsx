import { products } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';
import { useTranslations } from 'next-intl';

interface RelatedProductsProps {
    currentProductId: string;
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
    const t = useTranslations('Products');
    // Get 3 random products excluding the current one
    const related = products
        .filter((p) => p.id !== currentProductId)
        .slice(0, 3);

    return (
        <section className="py-20 border-t border-neutral-900">
            <h2 className="text-2xl font-bold text-white mb-8">{t('youMightAlsoLike')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {related.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
