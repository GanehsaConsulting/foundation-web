import { programOverview, tujuanProgram } from "@/app/system"
import { Title } from "./title"

export const ProgramOverview = () => {
    return (
        <main className="margin my-10">
            <section>
                {/* Program Description with enhanced styling */}
                <div className="relative">
                    <div className="hidden md:absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-main to-brand-accent rounded-full opacity-30" />
                    <div className="md:pl-8">
                        <p className="text-2xl text-justify md:text-3xl lg:text-4xl font-medium leading-relaxed bg-gradient-to-tr from-brand-invert via-brand-invert to-brand-accent bg-clip-text text-transparent">
                            {programOverview.description}
                        </p>
                    </div>
                </div>
                {/* Hero Image with enhanced styling */}
                <div className="relative overflow-hidden rounded-main mt-10 md:mt-16 group">
                    <img
                        className="w-full h-[35vh] object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1440288736878-766bd5839edb?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Program Overview"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Title Section */}
                <Title
                    className="mt-16 mb-2 flex items-center justify-center"
                    highlight="Tujuan"
                    accent="Program"
                />

                {/* Horizontal Timeline Container */}
                <div className="relative overflow-x-auto pb-6">
                    {/* Main horizontal line */}
                    <div className="absolute top-12 left-0 right-0 h-0.5 bg-radial from-transparent via-brand-main to-transparent rounded-full" />

                    {/* Program Goals Horizontal Timeline */}
                    <div className="flex justify-center gap-8 min-w-max px-4">
                        {tujuanProgram.map((el, idx) => (
                            <div key={idx} className="relative flex-shrink-0 h-full w-80">
                                {/* Timeline Node */}
                                <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-4 h-4 bg-brand-main rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10">
                                    <div className="absolute inset-0 bg-brand-main rounded-full animate-ping opacity-30" />
                                </div>

                                {/* Connecting line to card */}
                                <div className="absolute left-1/2 top-16 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-brand-main to-transparent opacity-60" />

                                {/* Goal Card */}
                                <div className="h-80 mt-24 ease-in-out duration-300 hover:scale-105">
                                    <div className="group duration-300 ease-in-out hover:-translate-y-2 h-full flex flex-col p-5 rounded-main shadow-custom bg-gradient-to-b from-brand-accent/10 to-brand-base/50">
                                        {/* Card glow effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-main to-brand-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />

                                        <div className="relative">
                                            {/* Icon with enhanced styling */}
                                            <div className="flex items-center justify-center w-16 h-16 mb-7  bg-gradient-to-br from-brand-main/20 to-brand-accent/20 rounded-xl text-3xl text-brand-main">
                                                {el.icon}
                                            </div>

                                            {/* Title with enhanced styling */}
                                            <h1 className="text-xl font-bold mb-3 bg-gradient-to-r from-brand-main to-brand-accent bg-clip-text text-transparent">
                                                {el.title}
                                            </h1>

                                            {/* Description with improved readability */}
                                            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                                {el.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}