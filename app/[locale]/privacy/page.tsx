import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    const t = useTranslations('Legal');

    return (
        <div className="container mx-auto px-4 py-20 max-w-3xl">
            <h1 className="text-3xl font-bold text-white mb-8">{t('privacyTitle')}</h1>

            <div className="space-y-6 text-neutral-300 leading-relaxed">
                <p>{t('privacyIntro')}</p>

                <h2 className="text-xl font-bold text-white mt-8 mb-4">{t('dataCollectionTitle')}</h2>
                <p>{t('dataCollectionText')}</p>

                <h2 className="text-xl font-bold text-white mt-8 mb-4">{t('cookiesTitle')}</h2>
                <p>{t('cookiesText')}</p>

                <h2 className="text-xl font-bold text-white mt-8 mb-4">{t('contactTitle')}</h2>
                <p>{t('contactText')}</p>
            </div>
        </div>
    );
}
