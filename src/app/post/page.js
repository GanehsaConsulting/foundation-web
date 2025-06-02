"use client";
import { HeroPost } from "@/components/hero-post";
import { DataArticles } from "../system";
import { Card } from "@/components/card";
import { SearchBar } from "@/components/search-bar";
import { Pills } from "@/components/pills";
import { DropdownFilter } from "@/components/dropdown-filter";
import { PaginationNumber } from "@/components/pagtination-number";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CardCarousel } from "@/components/card-carousel";

export default function ArtikelPage() {
    const categories = [...new Set(DataArticles.map((article) => article.category))];
    const activity = DataArticles.filter((article) => article.category === "Activity");
    const noActivity = DataArticles.filter((article) => article.category !== "Activity");
    return (
        <>
            <HeroPost />
            <div className="margin mt-10 mb-5 space-y-3">
                <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-9">
                        <SearchBar />
                    </div>
                    <div className="col-span-1 flex justify-end">
                        <DropdownFilter />
                    </div>
                </div>

                <Pills pills={categories} />
            </div>

            <div className="margin grid grid-cols-4 grid-flow-dense gap-3">
                {DataArticles.map((article, index) => (
                    <Card key={index} idx={index} article={article} articlesLength={DataArticles.length} />
                ))}

            </div>
            <CardCarousel
                articles={activity}
                showTopLabel={true}
                topLabelTitle="Aktivitas Kami"
                showViewAllButton={true}
                viewAllButtonHref="/artikel"
                cardMinWidth="60vh"
            />

            <CardCarousel
                articles={noActivity}
                showTopLabel={true}
                topLabelTitle="Artikel Kami"
                showViewAllButton={true}
                viewAllButtonHref="/artikel"
            />

            {/* <div className="margin my-10">
                <PaginationNumber />
            </div> */}
        </>
    );
}