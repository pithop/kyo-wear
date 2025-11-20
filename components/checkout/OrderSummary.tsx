'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function OrderSummary() {
    const { items, total } = useCart();
    const t = useTranslations('Checkout');

    return (
        <div className="bg-surface p-6 md:p-8 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6">{t('orderSummary')}</h2>

            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                        <div className="relative w-16 h-16 bg-neutral-900 flex-shrink-0">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white text-sm font-medium">{item.name}</h3>
                            <p className="text-neutral-500 text-xs">{item.category}</p>
                            <div className="flex justify-between mt-1">
                                <span className="text-neutral-400 text-xs">{t('qty')}: {item.quantity}</span>
                                <span className="text-white text-sm font-medium">€{item.price * item.quantity}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-neutral-800 pt-4 space-y-2">
                <div className="flex justify-between text-neutral-400 text-sm">
                    <span>{t('subtotal')}</span>
                    <span>€{total}</span>
                </div>
                <div className="flex justify-between text-neutral-400 text-sm">
                    <span>{t('shipping')}</span>
                    <span className="text-green-500">{t('free')}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-neutral-800 mt-2">
                    <span>{t('total')}</span>
                    <span>€{total}</span>
                </div>
            </div>
        </div>
    );
}
