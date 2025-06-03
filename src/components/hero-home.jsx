"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export const HeroHome = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.2 })
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

    const { scrollY } = useScroll()
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 200])
    const overlayOpacity = useTransform(scrollY, [0, 500], [0.5, 0.8])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <main ref={containerRef} className="min-h-screen h-screen relative overflow-hidden">
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0"
            >
                <Image
                    width={2942}
                    height={1650}
                    className="object-cover object-center w-full h-full scale-110"
                    src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Banner"
                    priority
                />
            </motion.div>

            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-neutral-900/60 via-neutral-800/50 to-neutral-900/70"
                style={{ opacity: overlayOpacity }}
            />

            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-brand-main/20 to-brand-accent/20 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 3,
                        y: mousePosition.y * 2,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 50, damping: 20 },
                        y: { type: "spring", stiffness: 50, damping: 20 },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                        left: '-10%',
                        top: '-10%'
                    }}
                />

                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                            left: `${20 + i * 10}%`,
                            top: `${20 + (i % 3) * 25}%`
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center lg:justify-start text-white z-10">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left px-6 lg:px-12 max-w-4xl"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                    >
                        <motion.p 
                            className="text-2xl md:text-3xl lg:text-4xl px-4 py-2 rounded-2xl bg-brand-neutral/90 backdrop-blur-sm text-foreground w-fit mx-auto lg:mx-0 mb-3 lg:mb-4"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Welcome to
                        </motion.p>
                        
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.3,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                            className="flex flex-col sm:flex-row gap-2 lg:gap-3 justify-center lg:justify-start"
                        >
                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, x: -50, rotateY: -45 },
                                    visible: { 
                                        opacity: 1, 
                                        x: 0, 
                                        rotateY: 0,
                                        transition: { 
                                            type: "spring", 
                                            stiffness: 100, 
                                            damping: 20 
                                        }
                                    }
                                }}
                                className="px-4 py-2 rounded-2xl bg-brand-main/90 backdrop-blur-sm hover:bg-brand-main transition-colors cursor-default"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                                }}
                            >
                                Riven
                            </motion.h1>
                            
                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, x: 50, rotateY: 45 },
                                    visible: { 
                                        opacity: 1, 
                                        x: 0, 
                                        rotateY: 0,
                                        transition: { 
                                            type: "spring", 
                                            stiffness: 100, 
                                            damping: 20 
                                        }
                                    }
                                }}
                                className="px-4 py-2 rounded-2xl bg-brand-accent/90 backdrop-blur-sm hover:bg-brand-accent transition-colors cursor-default"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                                }}
                            >
                                Foundation
                            </motion.h1>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-lg lg:text-xl max-w-3xl opacity-90 leading-relaxed mx-auto lg:mx-0"
                    >
                        Riven Foundation is dedicated to empowering communities through education, 
                        technology, and sustainable development initiatives that create lasting positive impact.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-6 justify-center lg:justify-start"
                    >
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-brand-main to-brand-accent text-white font-semibold rounded-2xl shadow-lg backdrop-blur-sm"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Involved
                        </motion.button>
                        
                        <motion.button
                            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                            whileHover={{ 
                                scale: 1.05,
                                borderColor: "rgba(255,255,255,0.6)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex justify-center lg:justify-start mt-6 lg:mt-8"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-white/60"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}