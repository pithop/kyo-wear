'use client';

import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4 tracking-tighter">404</h1>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                {t('title')}
            </h2>

            <p className="text-xl text-neutral-400 mb-12 max-w-md">
                {t('message')}
            </p>

            <Link href="/">
                <Button size="lg" className="min-w-[200px]">
                    {t('returnHome')}
                </Button>
            </Link>
        </div>
    );
}
