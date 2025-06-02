import { formatDate } from "@/app/helper/formatDateTime";

export const Card = ({ article }) => {
    return (
        <div className="fle flex-col gap-4 bg-white rounded-main relative">
            <img
                className="min-w-40 min-h-120 max-h-120 w-full h-full object-cover rounded-main"
                src={article.thumbnailImg}
                alt={article.title}
            />
            <div className="linear-blur h-70 !rounded-b-main"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10 bg-gradient-to-t from-black/30 to-transparent rounded-b-main">
                <div className="flex flex-col justify-evenly">
                    <div className="text-xs font-semibold bg-brand-main px-2 py-1 rounded-full w-fit mb-2 text-white">
                        {article.categories}
                    </div>
                    <h4 className="text-md font-semibold">{article.title}</h4>
                    <p className="text-sm opacity-60">
                        {formatDate(article.date)}
                    </p>
                </div>
            </div>
        </div>
    );
}