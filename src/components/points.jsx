import { keunggulanSection } from "@/app/system";
import { Title } from "./title";

export const Points = () => {
    return (
        <main className="margin my-10">
            <Title
                className={"mb-5"}
                highlight=" Bagaimana Cara"
                accent="Kerja Kami"
            />
            <section
                className="grid grid-cols-4 gap-3"
            >
                {keunggulanSection.map((el, idx) => (
                    <div
                        key={idx}
                        className="duration-300 ease-in-out hover:-translate-y-2 hover:hue-rotate-60 h-full flex flex-col p-5 rounded-main shadow-custom bg-gradient-to-b from-brand-accent/10 to-brand-base/50">
                        <div className="min-h-[20vh] text-4xl text-brand-main">
                            {el.icon}
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-2xl font-bold bg-gradient-to-bl from-brand-main to-brand-accent bg-clip-text text-transparent">
                                {el.title}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {el.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}