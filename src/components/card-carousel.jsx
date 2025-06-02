"use client";

import { formatDate } from "@/app/helper/formatDateTime";
import { slugify } from "@/app/helper/slugify";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRight, ArrowRightIcon, ChevronRight } from "lucide-react";

export const CardCarousel = ({
    articles = [],
    showNavigation = true,
    showTopLabel = false,
    topLabelTitle = "Artikel Kami",
    showViewAllButton = false,
    viewAllButtonHref = "/artikel",
    viewAllButtonText = "Cek Semua",
    viewAllButtonClassName = "text-brand-main",
    viewAllButtonIcon = <ChevronRight />,
    cardMinWidth = "40vh",
    gap = "3",
    containerPadding = { mobile: "ml-5 mr-5", desktop: "md:ml-16 md:mr-16" },
    scrollAmount = 300,
    className = "",
    ...props
}) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const carouselRef = useRef(null);

    // Check scroll position
    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Scroll functions
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Early return if no articles
    if (!articles || articles.length === 0) {
        return <div className="text-center py-8 text-gray-500">No articles to display</div>;
    }

    return (
        <div className={`relative ${className}`} {...props}>
            {showTopLabel && (
                <div className="margin mt-10 mb-5 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            {topLabelTitle}
                        </h1>
                        <Button
                            size={"none"}
                            className={`text-brand-main ${viewAllButtonClassName} !p-0 !hover:p-5`}
                            variant={"ghost"}
                        >
                            {viewAllButtonIcon}
                            {viewAllButtonText}
                        </Button>
                    </div>

                    {/* Navigation Buttons */}
                    {showNavigation && (
                        <div className="flex items-center gap-2">
                            {/* Left Button */}
                            <button
                                onClick={scrollLeft}
                                disabled={!canScrollLeft}
                                className={` w-10 h-10 rounded-full bg-brand-base text-black dark:text-white hover:bg-brand-main shadow-lg flex items-center justify-center transition-all duration-200 ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
                                    }`}
                                aria-label="Previous articles"
                            >
                                <ArrowLeftIcon />
                            </button>

                            {/* Right Button */}
                            <button
                                onClick={scrollRight}
                                disabled={!canScrollRight}
                                className={` w-10 h-10 rounded-full bg-brand-base text-black dark:text-white hover:bg-brand-main shadow-lg flex items-center justify-center transition-all duration-200 ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
                                    }`}
                                aria-label="Next articles"
                            >
                                <ArrowRightIcon />
                            </button>
                        </div>
                    )}
                </div>
            )}



            {/* Carousel Container */}
            <section
                ref={carouselRef}
                className={`carousel w-full gap-${gap}`}
                onScroll={checkScrollPosition}
                style={{ scrollBehavior: 'smooth' }}
            >
                {articles.map((article, idx) => {
                    const isActivity = article.category === "Activity";
                    const customSlug = isActivity
                        ? "/activity/" + slugify(article.title)
                        : "/artikel/" + slugify(article.title);

                    // const firstItem = idx === 0
                    //     ? `${containerPadding.desktop} ${containerPadding.mobile.split(' ')[0]}`
                    //     : "";
                    // const lastItem = idx === articles.length - 1
                    //     ? `${containerPadding.desktop.split(' ')[1]} ${containerPadding.mobile.split(' ')[1]}`
                    //     : "";

                    const firstItem = idx === 0 ? "md:ml-16 ml-5" : "";
                    const lastItem = idx === articles.length - 1 ? "md:mr-16 mr-5" : "";

                    return (
                        <Link
                            key={article.id || idx}
                            href={customSlug}
                            className={` ${firstItem} ${lastItem} flex flex-col gap-4 bg-brand-neutral rounded-main relative duration-300 ease-in-out hover:scale-99 hover:shadow-custom group overflow-hidden`}
                            style={{ minWidth: cardMinWidth }}
                        >
                            <img
                                width={500}
                                height={500}
                                className="min-w-40 min-h-120 max-h-120 w-full h-full object-cover rounded-main group-hover:scale-120 duration-200"
                                src={article.thumbnailImage}
                                alt={article.title}
                                loading="lazy"
                            />
                            <div className="linear-blur h-50 !rounded-b-main"></div>

                            {/* Category badge */}
                            <div className={`${article.category === "Activity" && "bg-brand-accent"} absolute top-4 left-4 text-xs font-semibold bg-brand-main px-2 py-1 rounded-full w-fit h-fit shadow-custom text-white`}>
                                {article.category}
                            </div>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-b-main">
                                <div className="flex flex-col items-start justify-end min-h-[80px] gap-1">
                                    <div className="flex-grow flex items-end">
                                        <h4 className="text-lg font-semibold text-left line-clamp-2 drop-shadow-xl">
                                            {article.title}
                                        </h4>
                                    </div>
                                    <p className="text-sm opacity-60 text-left">
                                        {formatDate(article.createdAt)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </div>
    );
};