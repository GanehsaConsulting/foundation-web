/**
 * =========================================================================
 * ENHANCED PAGE BANNER COMPONENT WITH ANIMATIONS
 * =========================================================================
 * 
 * Beautiful animated page banner with multiple visual effects and layouts.
 * Supports various animation types, backgrounds, and visual enhancements.
 * 
 * FEATURES:
 * - Multiple animation presets
 * - Gradient backgrounds and overlays
 * - Decorative elements
 * - Responsive design
 * - Customizable timing and effects
 * 
 * =========================================================================
 */

"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

/**
 * Enhanced PageBanner Component
 * 
 * @param {string} title - Full title (used when highlight/accent not provided)
 * @param {string} highlight - First part of title (colored with brand-main)
 * @param {string} accent - Second part of title (colored with brand-accent)
 * @param {string} description - Subtitle/description text
 * @param {boolean} divider - Show "&" divider between highlight and accent
 * @param {string} variant - Visual variant: "default", "gradient", "glass", "minimal"
 * @param {string} animation - Animation type: "fade", "slide", "scale", "blur", "bounce"
 * @param {string} size - Size variant: "sm", "md", "lg", "xl"
 * @param {boolean} decorative - Show decorative background elements
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 */
export default function PageBanner({
    title,
    highlight,
    accent,
    description,
    divider = false,
    variant = "default",
    animation = "blur",
    size = "md",
    decorative = true,
    className = "",
    delay = 0,
    duration = 0.8
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            })
        }

        if (variant === "glass") {
            window.addEventListener('mousemove', handleMouseMove)
            return () => window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [variant])

    // Animation variants
    const animations = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        slide: {
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        blur: {
            hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0 }
        },
        bounce: {
            hidden: { opacity: 0, y: -30, scale: 0.9 },
            visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    delay 
                }
            }
        }
    }

    // Size configurations
    const sizes = {
        sm: {
            section: "py-8 md:py-12",
            title: "text-2xl md:text-3xl",
            description: "text-sm md:text-base max-w-lg",
            spacing: "mb-3"
        },
        md: {
            section: "py-10 md:py-16",
            title: "text-3xl md:text-4xl lg:text-5xl",
            description: "text-base md:text-lg max-w-xl",
            spacing: "mb-4"
        },
        lg: {
            section: "py-12 md:py-20",
            title: "text-4xl md:text-5xl lg:text-6xl",
            description: "text-lg md:text-xl max-w-2xl",
            spacing: "mb-6"
        },
        xl: {
            section: "py-16 md:py-24",
            title: "text-5xl md:text-6xl lg:text-7xl",
            description: "text-xl md:text-2xl max-w-3xl",
            spacing: "mb-8"
        }
    }

    // Variant styles
    const variants = {
        default: {
            section: "bg-transparent",
            container: "relative"
        },
        gradient: {
            section: "bg-gradient-to-br from-brand-main/10 via-transparent to-brand-accent/10",
            container: "relative backdrop-blur-sm"
        },
        glass: {
            section: "bg-gradient-to-br from-brand-base/20 to-brand-base/5 backdrop-blur-lg border-b border-white/10 dark:border-gray-700/30",
            container: "relative"
        },
        minimal: {
            section: "bg-transparent border-b border-gray-200 dark:border-gray-800",
            container: "relative"
        }
    }

    const currentAnimation = animations[animation] || animations.fade
    const currentSize = sizes[size]
    const currentVariant = variants[variant]

    // Stagger animation for title parts
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay + 0.2
            }
        }
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className={`
             flex flex-col items-center justify-center relative overflow-hidden
            ${currentSize.section}
            ${currentVariant.section}
            ${className}
        `}>
            {/* Decorative Background Elements */}
            {decorative && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Animated gradient orbs */}
                    <motion.div
                        className="absolute -top-20 -left-20 w-40 h-40 bg-brand-main/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute -top-32 -right-32 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                    
                    {/* Interactive mouse follower for glass variant */}
                    {variant === "glass" && (
                        <motion.div
                            className="absolute w-32 h-32 bg-gradient-to-r from-brand-main/30 to-brand-accent/30 rounded-full blur-2xl"
                            animate={{
                                x: `${mousePosition.x}%`,
                                y: `${mousePosition.y}%`
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20
                            }}
                            style={{
                                transform: "translate(-50%, -50%)"
                            }}
                        />
                    )}

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-brand-accent/40 rounded-full"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 40}%`
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3
                            }}
                        />
                    ))}
                </div>
            )}

            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={currentAnimation}
                transition={{ duration, delay, ease: "easeOut" }}
                className={`${currentVariant.container} z-10`}
            >
                {/* Main Title with Stagger Animation */}
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={`
                        font-bold text-center flex flex-wrap items-center justify-center gap-2 md:gap-3
                        ${currentSize.title}
                        ${currentSize.spacing}
                    `}
                >
                    {highlight && (
                        <motion.span
                            variants={wordVariants}
                            className="text-brand-main relative"
                        >
                            {highlight}
                            {/* Underline decoration */}
                            <motion.div
                                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-brand-main to-transparent rounded-full"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ duration: 0.8, delay: delay + 0.5 }}
                            />
                        </motion.span>
                    )}

                    {divider && highlight && accent && (
                        <motion.span
                            variants={wordVariants}
                            className="bg-gradient-to-br from-brand-main via-brand-accent to-brand-main bg-clip-text text-transparent font-black text-lg md:text-xl"
                        >
                            &
                        </motion.span>
                    )}

                    {accent && (
                        <motion.span
                            variants={wordVariants}
                            className="text-brand-accent relative"
                        >
                            {accent}
                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 text-brand-accent opacity-50 blur-sm"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
                                transition={{ duration: 1, delay: delay + 0.7 }}
                            >
                                {accent}
                            </motion.div>
                        </motion.span>
                    )}

                    {!highlight && !accent && (
                        <motion.span
                            variants={wordVariants}
                            className="bg-gradient-to-r from-brand-main via-brand-accent to-brand-main bg-clip-text text-transparent"
                        >
                            {title}
                        </motion.span>
                    )}
                </motion.div>

                {/* Description with Typewriter Effect */}
                {description && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: delay + 0.4 }}
                        className={`
                            text-center text-muted-foreground leading-relaxed
                            ${currentSize.description}
                        `}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: delay + 0.6 }}
                        >
                            {description}
                        </motion.p>
                        
                        {/* Decorative line under description */}
                        <motion.div
                            className="mt-4 mx-auto h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent"
                            initial={{ width: 0, opacity: 0 }}
                            animate={isInView ? { width: "60%", opacity: 0.6 } : { width: 0, opacity: 0 }}
                            transition={{ duration: 1, delay: delay + 0.8 }}
                        />
                    </motion.div>
                )}

                {/* Call to Action Hint (optional) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: delay + 1,
                        type: "spring",
                        stiffness: 200
                    }}
                    className="mt-6 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                        }}
                        className="text-brand-accent/60 text-sm"
                    >
                        <svg 
                            className="w-5 h-5 mx-auto" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
``
/**
 * =========================================================================
 * USAGE EXAMPLES
 * =========================================================================
 * 
 * // === BASIC USAGE ===
 * <PageBanner
 *   highlight="Tentang"
 *   accent="Kami"
 *   description="Learn more about our mission and values"
 * />
 * 
 * // === WITH ANIMATIONS ===
 * <PageBanner
 *   highlight="Visi"
 *   accent="Misi"
 *   description="Our vision and mission for the future"
 *   animation="blur"
 *   duration={1.2}
 *   delay={0.3}
 * />
 * 
 * // === LARGE HERO BANNER ===
 * <PageBanner
 *   highlight="Welcome"
 *   accent="Home"
 *   description="Experience the future of technology with our innovative solutions"
 *   variant="gradient"
 *   size="xl"
 *   animation="bounce"
 *   decorative={true}
 * />
 * 
 * // === GLASS EFFECT ===
 * <PageBanner
 *   title="Modern Design"
 *   description="Beautiful glassmorphism effects"
 *   variant="glass"
 *   animation="scale"
 *   size="lg"
 * />
 * 
 * // === MINIMAL CLEAN ===
 * <PageBanner
 *   highlight="Portfolio"
 *   accent="Work"
 *   description="Showcasing our best projects"
 *   variant="minimal"
 *   animation="fade"
 *   decorative={false}
 * />
 * 
 * =========================================================================
 * PROPS REFERENCE
 * =========================================================================
 * 
 * ANIMATIONS: "fade", "slide", "scale", "blur", "bounce"
 * VARIANTS: "default", "gradient", "glass", "minimal"  
 * SIZES: "sm", "md", "lg", "xl"
 * 
 * TIMING:
 * - duration: 0.3-2.0 seconds (animation length)
 * - delay: 0-1.0 seconds (delay before start)
 * 
 * VISUAL:
 * - decorative: true/false (background elements)
 * - divider: true/false (show "&" between highlight/accent)
 * 
 * =========================================================================
 */