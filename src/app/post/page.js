"use client";
import { HeroArticle } from "@/components/hero-article";
import { HeroPost } from "@/components/hero-post";
import { DataArticles } from "../system";
import { Card } from "@/components/card";

export default function ArtikelPage() {
    return (
        <>
            <HeroPost />
            <div className="margin grid grid-cols-4 gap-3 my-10">
                {DataArticles.new.map((article, index) => (
                    <Card key={index} article={article} />   
                ))}
            </div>
        </>
    );
}