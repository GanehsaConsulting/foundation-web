"use client"
import { formatDate } from "@/app/helper/formatDateTime";
import { slugify } from "@/app/helper/slugify";
import { DataArticles } from "@/app/system";
import { Book, BookOpen, BookOpenIcon, Calendar, Dot } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PostDetailPage() {
    const pathname = usePathname(); // Get the current pathname
    const slug = pathname.split("/").pop(); // Extract the slug from the pathname
    const data = DataArticles.find((article) => slugify(article.title) === slug); // Match the slug with your data

    if (!data) {
        return <div>Artikel tidak ditemukan</div>;
    }

    return (
        <>
            <div className="margin mt-20 space-y-3">
                <div>
                    <div className="flex flex-col items-center justify-center gap-2 mb-10">
                        <div className="max-w-3xl flex items-center justify-center flex-col">
                            <div className="flex mb-5">
                                <div className="flex items-center gap-2 text-xs font-semibold bg-brand-accent px-2 py-1 rounded-full w-fit text-muted">
                                    <BookOpen size={15} />
                                    {data.category}
                                </div>
                                <Dot />
                                <div className="flex items-center gap-2 text-xs font-semibold bg-brand-base px-2 py-1 rounded-full w-fit">
                                    <Calendar size={15} />
                                    {formatDate(data.createdAt)}
                                </div>

                            </div>

                            <h1 className="text-3xl font-semibold  text-center mb-3">
                                {data.title}
                            </h1>
                            <p className="text-sm text-center opacity-60">
                                {data.excerpt}
                            </p>
                        </div>

                    </div>
                    <Image
                        width={500}
                        height={500}
                        src={data.thumbnailImage}
                        alt=""
                        className="w-full h-[70vh] object-cover rounded-main"
                    />

                    <div className="flex items-center justify-center gap-2 mt-5">
                        <div
                            dangerouslySetInnerHTML={{ __html: data.content }}
                            className="max-w-3xl prose prose-sm prose-slate mt-5 prose-headings:font-semibold prose-headings:text-brand-accent prose-p:opacity-80 prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-main prose-img:shadow-custom"
                        >

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}