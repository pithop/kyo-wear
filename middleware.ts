import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['fr', 'en', 'es'],

    // Used when no locale matches (Force French)
    defaultLocale: 'fr',

    // 'as-needed' means: 
    // - localhost:3000/ -> Shows French (no /fr prefix)
    // - localhost:3000/en -> Shows English
    localePrefix: 'as-needed'
});

export const config = {
    // Matcher ignoring /api, /_next, and static files
    // This ensures Stripe Webhooks go through directly without redirects.
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
