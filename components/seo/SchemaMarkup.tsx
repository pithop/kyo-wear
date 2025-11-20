export const SchemaMarkup = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kyo Wear",
        "url": "https://kyowear.com",
        "logo": "https://kyowear.com/logo.png",
        "foundingDate": "2025",
        "foundingLocation": {
            "@type": "Place",
            "name": "Aix-en-Provence, France"
        },
        "description": "Marque de streetwear premium inspirée par l'esthétique japonaise et le minimalisme d'Aix-en-Provence. Spécialiste du Cut & Sew et des textiles lourds.",
        "sameAs": [
            "https://instagram.com/kyowear",
            "https://twitter.com/kyowear"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
