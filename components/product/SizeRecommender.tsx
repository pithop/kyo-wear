'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslations } from 'next-intl';

interface SizeRecommenderProps {
    isOpen: boolean;
    onClose: () => void;
    onRecommend: (size: string) => void;
}

export function SizeRecommender({ isOpen, onClose, onRecommend }: SizeRecommenderProps) {
    const t = useTranslations('SizeRecommender');
    const [height, setHeight] = useState(175);
    const [weight, setWeight] = useState(75);
    const [fitPreference, setFitPreference] = useState<'slim' | 'oversized'>('slim');
    const [recommendation, setRecommendation] = useState<string | null>(null);

    const calculateSize = () => {
        let size = 'M';

        if (weight > 85 || height > 185) {
            size = 'XL';
        } else if (weight > 75) {
            size = 'L';
        } else if (weight < 65 && height < 170) {
            size = 'S';
        }

        // Adjust for fit preference
        if (fitPreference === 'oversized') {
            const sizes = ['S', 'M', 'L', 'XL'];
            const currentIndex = sizes.indexOf(size);
            if (currentIndex < sizes.length - 1) {
                size = sizes[currentIndex + 1];
            }
        }

        setRecommendation(size);
        onRecommend(size);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-neutral-950 border border-neutral-800 max-w-lg w-full p-8 relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <Ruler className="w-8 h-8 text-accent" />
                                <h2 className="text-2xl font-bold text-white tracking-tight">
                                    {t('title')}
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                {/* Height Slider */}
                                <div>
                                    <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wider">
                                        {t('height')} ({height} cm)
                                    </label>
                                    <input
                                        type="range"
                                        min="150"
                                        max="210"
                                        value={height}
                                        onChange={(e) => setHeight(parseInt(e.target.value))}
                                        className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                </div>

                                {/* Weight Slider */}
                                <div>
                                    <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wider">
                                        {t('weight')} ({weight} kg)
                                    </label>
                                    <input
                                        type="range"
                                        min="50"
                                        max="120"
                                        value={weight}
                                        onChange={(e) => setWeight(parseInt(e.target.value))}
                                        className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                </div>

                                {/* Fit Preference */}
                                <div>
                                    <label className="block text-sm text-neutral-400 mb-3 uppercase tracking-wider">
                                        {t('fitPreference')}
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setFitPreference('slim')}
                                            className={`p-3 border transition-all ${fitPreference === 'slim'
                                                    ? 'border-accent bg-accent/10 text-white'
                                                    : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                                                }`}
                                        >
                                            {t('slim')}
                                        </button>
                                        <button
                                            onClick={() => setFitPreference('oversized')}
                                            className={`p-3 border transition-all ${fitPreference === 'oversized'
                                                    ? 'border-accent bg-accent/10 text-white'
                                                    : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                                                }`}
                                        >
                                            {t('oversized')}
                                        </button>
                                    </div>
                                </div>

                                {/* Calculate Button */}
                                <Button
                                    onClick={calculateSize}
                                    className="w-full"
                                    size="lg"
                                >
                                    {t('calculate')}
                                </Button>

                                {/* Recommendation */}
                                <AnimatePresence>
                                    {recommendation && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-accent/10 border border-accent p-4 text-center overflow-hidden"
                                        >
                                            <p className="text-neutral-300 text-sm mb-2">{t('recommendation')}</p>
                                            <p className="text-3xl font-bold text-accent tracking-widest">{recommendation}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
