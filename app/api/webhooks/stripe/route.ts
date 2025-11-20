import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { resend } from '@/lib/resend';
import OrderConfirmation from '@/components/emails/OrderConfirmation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-11-20.acacia' as any, // Suppress version mismatch for now or update package
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('stripe-signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name || 'Valued Customer';
        const amountTotal = session.amount_total || 0;
        const orderId = session.id; // Or use metadata if you passed a custom order ID

        if (customerEmail) {
            try {
                await resend.emails.send({
                    from: 'Kyo Wear <onboarding@resend.dev>', // Update this with your verified domain
                    to: customerEmail,
                    subject: `Order Confirmation #${orderId.slice(-8)}`,
                    react: OrderConfirmation({
                        orderId: orderId.slice(-8),
                        totalAmount: amountTotal,
                        customerName,
                    }) as React.ReactElement,
                });
                console.log(`Order confirmation email sent to ${customerEmail}`);
            } catch (error) {
                console.error('Error sending email:', error);
            }
        }
    }

    return new NextResponse(null, { status: 200 });
}
