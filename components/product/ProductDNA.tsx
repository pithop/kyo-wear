'use client';

import { motion } from 'framer-motion';
import { MapPin, Scissors, Ruler } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ProductDNA() {
    const t = useTranslations('ProductDNA');

    const dnaItems = [
        {
            icon: MapPin,
            label: t('origin'),
            value: t('originValue'),
        },
        {
            icon: Scissors,
            label: t('material'),
            value: t('materialValue'),
        },
        {
            icon: Ruler,
            label: t('cut'),
            value: t('cutValue'),
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-950 border border-neutral-800 p-8"
        >
            <h3 className="text-xl font-bold text-white mb-6 tracking-widest uppercase">
                {t('title')}
            </h3>

            <div className="space-y-6">
                {dnaItems.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                    >
                        <div className="flex-shrink-0 w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                                {item.label}
                            </p>
                            <p className="text-neutral-200 font-medium">
                                {item.value}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
                <p className="text-xs text-neutral-500 leading-relaxed">
                    {t('disclaimer')}
                </p>
            </div>
        </motion.div>
    );
}
