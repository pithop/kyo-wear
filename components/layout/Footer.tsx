import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-surface py-8 border-t border-neutral-900">
            <div className="container mx-auto px-4 text-center">
                <p className="text-neutral-400 text-sm">
                    {t('designedIn')}
                </p>
                <p className="text-neutral-600 text-xs mt-2">
                    &copy; {new Date().getFullYear()} Kyo Wear. {t('rights')}
                </p>
            </div>
        </footer>
    );
}
