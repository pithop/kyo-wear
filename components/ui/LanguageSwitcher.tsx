'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('Header');

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'fr', label: 'FR' },
        { code: 'es', label: 'ES' },
    ];

    return (
        <div className={cn("flex items-center gap-3", className)}>
            {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center">
                    <button
                        onClick={() => handleLocaleChange(lang.code)}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-accent uppercase tracking-wider",
                            locale === lang.code ? "text-white" : "text-neutral-500"
                        )}
                    >
                        {lang.label}
                    </button>
                    {index < languages.length - 1 && (
                        <span className="ml-3 text-neutral-700">|</span>
                    )}
                </div>
            ))}
        </div>
    );
}
