'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const t = useTranslations('Legal');

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Use timeout to avoid synchronous state update warning
            const timer = setTimeout(() => setIsVisible(true), 0);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 p-4 md:p-6 z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-neutral-300 text-center md:text-left">
                    {t('cookieText')} <Link href="/privacy" className="text-white underline hover:text-accent">{t('privacyPolicy')}</Link>.
                </p>
                <Button onClick={acceptCookies} size="sm" className="whitespace-nowrap">
                    {t('accept')}
                </Button>
            </div>
        </div>
    );
}
