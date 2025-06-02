import { formatDate } from "@/app/helper/formatDateTime";
import Image from "next/image";

export const Card = ({ article }) => {
    return (
        <div className="flex flex-col gap-4 bg-brand-neutral rounded-main relative duration-300 ease-in-out hover:scale-101 origin-bottom hover:shadow-custom group overflow-hidden">
            <img
                width={500}
                height={500}
                className="min-w-40 min-h-120 max-h-120 w-full h-full object-cover rounded-main group-hover:scale-120 duration-200"
                src={article.thumbnailImage}
                alt={article.title}
            />
            <div className="linear-blur h-50 !rounded-b-main"></div>
            
            {/* Category badge - aligned to start */}
            <div className={`${article.category === "Activity" && "bg-brand-accent"} absolute top-4 left-4 text-xs font-semibold bg-brand-main px-2 py-1 rounded-full w-fit h-fit shadow-custom text-white`}>
                {article.category}
            </div>
            
            {/* Bottom content - aligned to start with consistent height */}
            <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-b-main">
                <div className="flex flex-col items-start justify-end min-h-[80px] gap-1">
                    <div className="flex-grow flex items-end">
                        <h4 className="text-lg font-semibold text-left line-clamp-2 drop-shadow-xl">{article.title}</h4>
                    </div>
                    <p className="text-sm opacity-60 text-left">
                        {formatDate(article.createdAt)}
                    </p>
                </div>
            </div>
        </div>
    );
}