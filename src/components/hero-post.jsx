'use client'

import { DataArticles } from "@/app/system";
import Image from "next/image";
import { useState, useEffect } from "react";

export const HeroPost = () => {
    const articles = DataArticles.new.slice(0, 5); // Ambil 5 artikel pertama
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 5000); // Ganti slide setiap 5 detik

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNextSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === articles.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 150);
    };

    const handlePrevSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? articles.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 150);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 150);
    };

    const currentArticle = articles[currentIndex];

    return (
        <>
            <main className="min-h-screen max-h-screen overflow-hidden">
                <section className="relative h-screen w-full">
                    {/* Background Images dengan Fading Effect */}
                    {articles.map((article, index) => (
                        <Image
                            key={index}
                            width={1920}
                            height={1080}
                            className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            src={article.thumbnailImg}
                            alt={article.title}
                            priority={index === 0}
                        />
                    ))}

                    {/* Linear Blur Effect */}
                    <div className="linear-blur h-70 !rounded-b-main"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                    <div className="absolute inset-0 h-50 bg-gradient-to-b from-black/50 via-black/10 to-transparent"></div>

                    <div className="absolute bottom-0 flex flex-col text-white p-6">
                        {/* Content dengan Fading Effect */}
                        <div 
                            className={`transition-all duration-700 ease-out ${
                                isTransitioning 
                                    ? 'opacity-0  blur-lg' 
                                    : 'opacity-100  blur-none'
                            }`}
                        >
                            <div className="text-sm font-semibold bg-brand-main px-2 py-1 rounded-full w-fit mb-2">
                                {currentArticle.categories}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentArticle.title}</h1>
                            <p className="text-lg opacity-60 mb-6">{currentArticle.exerp}</p>
                        </div>

                        
                    </div>

                    {/* Slide Indicators - Center Right Edge */}
                    <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col space-y-2 items-center">
                        {articles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-white h-5'
                                        : 'bg-white/40 hover:bg-white/60'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}