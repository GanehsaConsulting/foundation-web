export const Title = ({ className, title, highlight, accent, divider = false }) => {
    return (
        <h1 className={`${className} text-3xl font-bold mb-2 flex items-center gap-2`}>
            {highlight && <span className="text-brand-main">{highlight}</span>}{" "}
            {divider === true && (
                <p className="bg-gradient-to-br from-brand-main to-brand-accent bg-clip-text text-transparent">
                    &{" "}
                </p>
            )}
            {accent && <span className="text-brand-accent">{accent}</span>}
            {!highlight && !accent && title}
        </h1>
    );
}   