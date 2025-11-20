import { Button } from '@/components/ui/Button';
import { useTranslations, useLocale } from 'next-intl';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

export function PaymentForm() {
    const t = useTranslations('Checkout');
    const locale = useLocale();
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/${locale}/checkout/success`,
            },
        });

        if (error) {
            setErrorMessage(error.message ?? 'An unknown error occurred');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <section>
                <h2 className="text-xl font-bold text-white mb-4">{t('contactInfo')}</h2>
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="email"
                        placeholder={t('placeholders.email')}
                        className="w-full bg-surface border border-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors"
                    />
                </div>
            </section>

            {/* Shipping Address */}
            <section>
                <h2 className="text-xl font-bold text-white mb-4">{t('shippingAddress')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder={t('placeholders.firstName')}
                        className="w-full bg-surface border border-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                        type="text"
                        placeholder={t('placeholders.lastName')}
                        className="w-full bg-surface border border-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                        type="text"
                        placeholder={t('placeholders.address')}
                        className="w-full md:col-span-2 bg-surface border border-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                        type="text"
                        placeholder={t('placeholders.city')}
                        className="w-full bg-surface border border-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                        type="text"
                        placeholder={t('placeholders.postalCode')}
                        className="w-full bg-surface border border-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors"
                    />
                </div>
            </section>

            {/* Payment */}
            <section>
                <h2 className="text-xl font-bold text-white mb-4">{t('payment')}</h2>
                <div className="bg-surface border border-neutral-800 p-6 space-y-4">
                    <PaymentElement />
                </div>
                {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
            </section>

            <Button size="lg" className="w-full text-lg py-6" disabled={!stripe || loading}>
                {loading ? 'Processing...' : t('payNow')}
            </Button>
        </form>
    );
}
