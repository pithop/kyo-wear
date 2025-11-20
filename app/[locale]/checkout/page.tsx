'use client';

import { OrderSummary } from '@/components/checkout/OrderSummary';
import { PaymentForm } from '@/components/checkout/PaymentForm';
import { useTranslations } from 'next-intl';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe-client';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
    const t = useTranslations('Checkout');
    const { total } = useCart();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: total * 100 }), // Amount in cents
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [total]);

    const appearance = {
        theme: 'night' as const,
        variables: {
            colorPrimary: '#E11D48',
            colorBackground: '#171717',
            colorText: '#ffffff',
        },
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">{t('title')}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Forms */}
                <div className="lg:col-span-2">
                    {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                            <PaymentForm />
                        </Elements>
                    )}
                </div>

                {/* Right Column: Summary */}
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
}
