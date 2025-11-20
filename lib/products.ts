export interface Product {
    id: string;
    name: string;
    price: number;
    images: string[]; // Array of images: [main, secondary, ...]
    videoUrl?: string;
    category: string;
    description: string;
    // Backward compatibility getters (optional, but good for safety)
    image?: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Tokyo Noir Hoodie',
        price: 129,
        images: [
            '/products/hoodie-main.jpg',
            '/products/hoodie-lifestyle.jpg'
        ],
        image: '/products/hoodie-main.jpg', // Fallback
        category: 'Hoodies',
        description: 'The Tokyo Noir Hoodie is the epitome of urban stealth. Featuring a "Coupe Oversize Japonaise" and crafted from "Coton Lourd" (480GSM), it embodies the "Style Harajuku". The deep black dye is fade-resistant, ensuring the "midnight" aesthetic lasts. Finished with raw hems and a double-lined hood for structure.',
    },
    {
        id: '2',
        name: 'Kyoto Artisan Tee',
        price: 65,
        images: [
            '/products/tee-main.jpg',
            '/products/tee-lifestyle.png'
        ],
        image: '/products/tee-main.jpg', // Fallback
        category: 'T-Shirts',
        description: 'Hand-finished in our Aix-en-Provence atelier, the Kyoto Artisan Tee redefines the basic white t-shirt. Made from organic Supima cotton with a unique slub texture. The fit is relaxed and airy, perfect for layering. Features subtle tonal embroidery of the Kyo emblem on the back neck.',
    },
    {
        id: '3',
        name: 'Shibuya Stealth Cap',
        price: 45,
        images: [
            '/products/cap-main.jpg',
            '/products/cap-lifestyle.jpg'
        ],
        image: '/products/cap-main.jpg', // Fallback
        category: 'Accessories',
        description: 'A low-profile dad cap elevated with premium Japanese twill. The Shibuya Stealth Cap features 3D puff embroidery of the "CS" monogram in matte black. Adjustable strap with gunmetal hardware. The brim is pre-curved for an instantly broken-in look.',
    },
    {
        id: '4',
        name: 'Osaka Tech Cargos',
        price: 145,
        images: [
            '/products/cargo-main.jpg',
            '/products/cargo-lifestyle.jpg'
        ],
        image: '/products/cargo-main.jpg', // Fallback
        category: 'Pants',
        description: 'Engineered for the urban explorer. These "Pantalon Streetwear Japonais" are the ultimate "Techwear Utility" piece. Featuring a "Coupe Large" and constructed from water-resistant nylon ripstop. Features articulated knees for movement and six functional pockets with magnetic closures.',
    },
    {
        id: '5',
        name: 'Neo-Tokyo Bomber',
        price: 189,
        images: [
            '/products/bomber-main.jpg',
            '/products/bomber-lifestyle.jpg'
        ],
        image: '/products/bomber-main.jpg', // Fallback
        category: 'Jackets',
        description: 'A futuristic take on the classic MA-1 flight jacket. The Neo-Tokyo Bomber features a high-sheen Japanese nylon shell in gunmetal grey. Insulated for warmth without bulk. Details include a heavy-duty two-way zipper, utility arm pocket, and our signature "Kyo" ribbon tag.',
    },
    {
        id: '6',
        name: 'Shinjuku Tech Sling',
        price: 85,
        images: [
            '/products/sling-main.jpg',
            '/products/sling-lifestyle.jpg'
        ],
        image: '/products/sling-main.jpg',
        category: 'Accessories',
        description: 'The ultimate urban companion. This waterproof tech sling is designed for the neon-lit streets of Shinjuku. Features a Fidlock magnetic buckle, YKK Aquaguard zippers, and a dedicated padded compartment for your essentials. Compact yet surprisingly spacious.',
    },
    {
        id: '7',
        name: 'Kyoto Noragi Cardigan',
        price: 165,
        images: [
            '/products/noragi-main.jpg',
            '/products/noragi-lifestyle.jpg'
        ],
        image: '/products/noragi-main.jpg',
        category: 'Outerwear',
        description: 'A modern reinterpretation of the traditional Japanese workwear jacket. This "Veste Kimono Moderne" defines the "Style Samourai Urbain". Perfect for "Layering Japonais", it is crafted from a heavy waffle-knit cotton blend for texture and warmth. The relaxed, collarless silhouette drapes effortlessly.',
    },
];
