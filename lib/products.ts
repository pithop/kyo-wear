export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    videoUrl?: string; // Optional video for hover effect
    category: string;
    description: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Midnight Tokyo Tee',
        price: 45,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600',
        videoUrl: 'https://videos.pexels.com/video-files/7533315/7533315-hd_720_1366_25fps.mp4',
        category: 'T-Shirts',
        description: 'Premium quality streetwear designed in Aix-en-Provence. Features a relaxed fit, heavy-weight cotton fabric, and our signature Kyo styling. Perfect for night-outs or casual wear.',
    },
    {
        id: '2',
        name: 'Osaka Hoodie',
        price: 89,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600',
        category: 'Hoodies',
        description: 'Premium quality streetwear designed in Aix-en-Provence. Features a relaxed fit, heavy-weight cotton fabric, and our signature Kyo styling. Perfect for night-outs or casual wear.',
    },
    {
        id: '3',
        name: 'Kyoto Bomber',
        price: 139,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600',
        category: 'Jackets',
        description: 'Premium quality streetwear designed in Aix-en-Provence. Features a relaxed fit, heavy-weight cotton fabric, and our signature Kyo styling. Perfect for night-outs or casual wear.',
    },
    {
        id: '4',
        name: 'Shibuya Sweatpants',
        price: 65,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600',
        category: 'Pants',
        description: 'Premium quality streetwear designed in Aix-en-Provence. Features a relaxed fit, heavy-weight cotton fabric, and our signature Kyo styling. Perfect for night-outs or casual wear.',
    },
    {
        id: '5',
        name: 'Harajuku Cap',
        price: 35,
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600',
        category: 'Accessories',
        description: 'Premium quality streetwear designed in Aix-en-Provence. Features a relaxed fit, heavy-weight cotton fabric, and our signature Kyo styling. Perfect for night-outs or casual wear.',
    },
    {
        id: '6',
        name: 'Neon Nights Longsleeve',
        price: 55,
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600',
        category: 'T-Shirts',
        description: 'Premium quality streetwear designed in Aix-en-Provence. Features a relaxed fit, heavy-weight cotton fabric, and our signature Kyo styling. Perfect for night-outs or casual wear.',
    },
];
