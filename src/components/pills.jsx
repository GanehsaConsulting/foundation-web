export const Pills = ({ pills }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {pills.map((pill, index) => (
                <span
                    key={index}
                    className="text-sm font-medium bg-brand-accent/10 dark:bg-brand-accent/30 px-2 py-1 rounded-full w-fit"
                >
                    {pill}
                </span>
            ))}
        </div>
    );  
}