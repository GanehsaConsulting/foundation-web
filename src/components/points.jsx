export const Points = ({ points }) => {
    return (
        <div className="flex flex-col gap-2">
            {points.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                    <span className="text-brand-accent font-bold">•</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{point}</p>
                </div>
            ))}
        </div>
    );
}