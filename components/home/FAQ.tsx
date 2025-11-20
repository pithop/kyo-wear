'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Kyo Wear est-elle une marque française ?",
        answer: "Oui, Kyo Wear est née à Aix-en-Provence (Val Saint André). Bien que notre esthétique soit profondément inspirée par le streetwear japonais de Tokyo (Harajuku, Shibuya), toutes nos pièces sont dessinées et conceptualisées en France."
    },
    {
        question: "Quels sont les délais de livraison ?",
        answer: "Nous expédions toutes les commandes depuis notre entrepôt en France. La livraison standard prend généralement 2 à 4 jours ouvrables. Pour les précommandes ou les éditions limitées, les délais peuvent varier et sont toujours indiqués sur la page produit."
    },
    {
        question: "Comment choisir ma taille ?",
        answer: "Nos coupes sont volontairement 'Oversize' pour respecter le style japonais. Si vous souhaitez un rendu ample (comme sur les photos), prenez votre taille habituelle. Pour un rendu plus ajusté, prenez une taille en dessous. Consultez notre 'Guide du Style' pour plus de détails."
    },
    {
        question: "Quelle est la politique de retour ?",
        answer: "Vous disposez de 14 jours après réception pour nous retourner un article s'il ne vous convient pas. Les articles doivent être non portés, avec leurs étiquettes d'origine. Les frais de retour sont à votre charge, sauf en cas d'erreur de notre part."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-neutral-950 text-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Questions Fréquentes</h2>
                    <p className="text-neutral-400">Tout ce que vous devez savoir sur Kyo Wear.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/50 hover:border-neutral-700 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-medium text-lg pr-8">{faq.question}</span>
                                <span className="text-neutral-400 flex-shrink-0">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
