import { formatDate } from "@/app/helper/formatDateTime";
import { DataArticles } from "@/app/system";
import Image from "next/image";
import Link from "next/link";

export const HeroArticle = () => {
    const main = DataArticles.new[4];

    return (
        <>
            <main className="margin">
                <section className="grid grid-cols-10 gap-5 my-10">
                    <div className="col-span-6">
                        <Link href="" className="relative">
                            <Image
                                width={500}
                                height={500}
                                className="w-full h-[70vh] object-center object-cover rounded-main"
                                src={main.thumbnailImg}
                                alt={main.title}
                            />

                            {/* Linear Blur Effect */}
                            <div className="linear-blur h-60 !rounded-b-main"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full px-6 py-5 text-white z-10 bg-gradient-to-t from-black/30 to-transparent rounded-b-main">
                                <div className="text-xs font-semibold bg-brand-main px-2 py-1 rounded-full w-fit mb-2">
                                    {main.categories}
                                </div>
                                <h3 className="text-3xl font-semibold mb-2">{main.title}</h3>
                                <p className="text-sm opacity-90">{main.exerp}</p>
                            </div>

                        </Link>
                    </div>
                    <div className="col-span-4">
                        <h2 className="text-2xl font-semibold mb-4">Artikel Terbaru</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {DataArticles.new.slice(1, 4).map((article, index) => (
                                <Link key={index} href={article.title} className="flex gap-4 bg-white rounded-main">
                                    <Image
                                        width={100}
                                        height={100}
                                        className="min-w-40 min-h-40 aspect-square object-cover rounded-main"
                                        src={article.thumbnailImg}
                                        alt={article.title}
                                    />
                                    <div className="flex flex-col justify-evenly">
                                        <div className="text-xs font-semibold bg-brand-main px-2 py-1 rounded-full w-fit mb-2 text-white">
                                            {main.categories}
                                        </div>
                                        <h4 className="text-md font-semibold">{article.title}</h4>
                                        <p className="text-sm opacity-60">
                                            {formatDate(article.date)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}