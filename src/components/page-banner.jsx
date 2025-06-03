export default function PageBanner({
    title,
    highlight,
    accent,
    description,
    divider = false,
}) {
    return (
        <section className="margin flex flex-col items-center justify-center py-10 md:mt-15 mt-10">
            <div className="text-3xl font-bold mb-2 text-center flex items-center gap-2">
                {highlight && <span className="text-brand-main">{highlight}</span>}{" "}
                {divider === true && (
                    <p className="bg-gradient-to-br from-brand-main to-brand-accent bg-clip-text text-transparent">
                        &{" "}
                    </p>
                )}
                {accent && <span className="text-brand-accent">{accent}</span>}
                {!highlight && !accent && title}
            </div>
            {description && (
                <p className="max-w-xl text-center text-muted-foreground">{description}</p>
            )}
        </section>
    )
}
