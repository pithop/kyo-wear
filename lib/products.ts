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
        description: 'The Tokyo Noir Hoodie is the epitome of urban stealth. Crafted from 480GSM heavyweight French Terry cotton, it features a boxy, oversized fit with dropped shoulders. The deep black dye is fade-resistant, ensuring the "midnight" aesthetic lasts. Finished with raw hems and a double-lined hood for structure.',
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
        description: 'Engineered for the urban explorer. The Osaka Tech Cargos are constructed from water-resistant nylon ripstop. Features articulated knees for movement and six functional pockets with magnetic closures. The fit is tapered with adjustable ankle toggles to customize the silhouette.',
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
];
