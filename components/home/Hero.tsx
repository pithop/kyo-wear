'use client';

import Image from "next/image";
import { Button } from "../ui/Button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const t = useTranslations('Hero');
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 scale-110"
            >
                <Image
                    src="/hero-kyo.jpg"
                    alt="Kyo Wear Streetwear"
                    fill
                    className="object-cover object-center opacity-50"
                    style={{ objectPosition: 'center 45%' }}
                    priority
                />
            </motion.div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950 z-0" />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-200 mb-6 tracking-widest uppercase"
                >
                    KYO WEAR
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-neutral-400 mb-10 font-light tracking-widest uppercase"
                >
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="/#products">
                        <Button size="lg" className="min-w-[200px] text-lg shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all tracking-widest">
                            {t('shopCollection')}
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="min-w-[200px] text-lg backdrop-blur-sm hover:bg-white/10 tracking-widest">
                        {t('viewLookbook')}
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
