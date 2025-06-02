"use client";
import { HeroPost } from "@/components/hero-post";
import { DataArticles } from "../system";
import { Card } from "@/components/card";
import { SearchBar } from "@/components/search-bar";
import { Pills } from "@/components/pills";

export default function ArtikelPage() {
    return (
        <>
            <HeroPost />
            <div className="margin mt-10 space-y-3">
                <SearchBar />
                
                <Pills pills={["Semua", "Terbaru", "Populer", "Terkait"]} />
            </div>
            <div className="margin grid grid-cols-4 gap-3 my-10">
                {DataArticles.map((article, index) => (
                    <Card key={index} article={article} />
                ))}
            </div>
        </>
    );
}