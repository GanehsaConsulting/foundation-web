'use client'

import { DataArticles } from "@/app/system";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const HeroPost = () => {
    const articles = DataArticles.slice(0, 5); // Ambil 5 artikel pertama
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    // Removed mouse parallax

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 6000); // Increased to 6 seconds for better UX

        return () => clearInterval(interval);
    }, [currentIndex]);

    // Removed mouse tracking

    const handleNextSlide = () => {
        setDirection(1);
        changeSlide((currentIndex + 1) % articles.length);
    };

    const handlePrevSlide = () => {
        setDirection(-1);
        changeSlide(currentIndex === 0 ? articles.length - 1 : currentIndex - 1);
    };

    const changeSlide = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        if (index === currentIndex) return;
        setDirection(index > currentIndex ? 1 : -1);
        changeSlide(index);
    };

    const currentArticle = articles[currentIndex];

    // Animation variants - Simplified fade only
    const imageVariants = {
        enter: {
            opacity: 0,
            filter: "blur(16px)"
        },
        center: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                opacity: { duration: 0.8, ease: "easeInOut" },
                filter: { duration: 0.8, ease: "easeInOut" }
            }
        },
        exit: {
            opacity: 1,
            filter: "blur(16px)",
            transition: {
                opacity: { duration: 0.4, ease: "easeInOut" },
                filter: { duration: 0.4, ease: "easeInOut" }
            }
        }
    };

    const contentVariants = {
        enter: {
            opacity: 0
        },
        center: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const overlayVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };


    const navigationButtonVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5, duration: 0.3 }
        },
        hover: {
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    const playPauseVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.3 }
        },
        hover: {
            scale: 1.1,
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            transition: { duration: 0.2 }
        }
    };

    const progressVariants = {
        initial: { scaleX: 0 },
        animate: {
            scaleX: 1,
            transition: {
                duration: 6,
                ease: "linear",
                repeat: Infinity
            }
        }
    };

    return (
        <motion.main
            className="min-h-screen max-h-screen overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.section
                className="relative h-screen w-full"
            >
                {/* Background Images with Simple Fade Transitions */}
                <div className="absolute inset-0">
                    <AnimatePresence mode="sync">
                        <motion.div
                            key={currentIndex}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0"
                        >
                            <Image
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover object-center"
                                src={currentArticle.thumbnailImage}
                                alt={currentArticle.title}
                                priority={currentIndex === 0}
                            />

                            {/* Animated overlay for better contrast */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Enhanced Gradient Overlays */}
                <motion.div
                    className="linear-blur h-70 !rounded-b-main"
                    variants={overlayVariants}
                    initial="initial"
                    animate="animate"
                />

                <motion.div
                    className="absolute inset-0 h-50 bg-gradient-to-b from-black/60 via-black/20 to-transparent"
                    variants={overlayVariants}
                    initial="initial"
                    animate="animate"
                />

                {/* Navigation Arrows - REMOVED */}

                {/* Content Section with Enhanced Animations */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            variants={contentVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="text-white max-w-4xl"
                        >
                            {/* Category Badge */}
                            <motion.div
                                className="inline-block text-sm font-semibold bg-brand-main px-3 py-1.5 rounded-full mb-4 shadow-lg backdrop-blur-sm"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentArticle.category}
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                            >
                                {currentArticle.title}
                            </motion.h1>

                            {/* Excerpt */}
                            <motion.p
                                className="text-base md:text-lg lg:text-xl opacity-80 mb-6 max-w-2xl leading-relaxed"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                {currentArticle.excerpt}
                            </motion.p>

                            {/* Read More Button */}
                            <motion.button
                                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full text-white font-medium transition-all duration-300"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <span>Baca Selengkapnya</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ChevronRight size={20} />
                                </motion.div>
                            </motion.button>

                        </motion.div>
                    </AnimatePresence>
                </div>
               
            </motion.section>
        </motion.main>
    );
}