# Kyo Wear - Premium Streetwear E-Commerce

A "Print on Demand" E-Commerce Web Application for "KYO WEAR" with a "Night Mode" Luxury design aesthetic. Built with Next.js 14, Tailwind CSS, and Stripe.

## Features

- **Design:** Custom "Night Mode" luxury aesthetic.
- **Internationalization:** English, French, Spanish support using `next-intl`.
- **Payments:** Stripe integration with Payment Element.
- **Legal:** GDPR compliant Cookie Consent and Privacy Policy.
- **SEO:** Optimized metadata and OpenGraph tags.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd kyo-wear-pod
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory with the following keys:
    ```env
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
    STRIPE_SECRET_KEY=sk_test_...
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the repository in Vercel.
3.  Add the Environment Variables (`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`) in the Vercel dashboard.
4.  Deploy!

## Print on Demand Integration

To integrate with Printful or Printify:
1.  Obtain API keys from your provider.
2.  Create a new API route (e.g., `app/api/create-order/route.ts`) to handle order creation webhook from Stripe.
3.  Upon successful payment (verified via Stripe Webhook), send the order details to the POD provider's API.

## License

All rights reserved. Designed in Aix-en-Provence.
