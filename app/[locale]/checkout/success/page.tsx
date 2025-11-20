'use client';

import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
    const t = useTranslations('Success');
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setOrderNumber('#KYO-' + Math.floor(1000 + Math.random() * 9000));
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-8">
                <CheckCircle className="w-10 h-10 text-accent" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {t('title')}
            </h1>

            <p className="text-xl text-neutral-400 mb-2">
                {t('message')}
            </p>

            <p className="text-neutral-500 mb-12">
                {t('orderNumber')}: <span className="text-white font-mono">{orderNumber}</span>
            </p>

            <Link href="/">
                <Button size="lg" className="min-w-[200px]">
                    {t('continueShopping')}
                </Button>
            </Link>
        </div>
    );
}
