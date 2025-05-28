import Image from "next/image";

export const HeroHome = () => {
    return (
        <main className="min-h-screen h-screen relative">
            <Image
                width={2942}
                height={1650}
                className="object-cover object-center w-full h-full"
                src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
            />
            <div className="absolute inset-0 bg-neutral-800/50" />
            <div className="absolute inset-0 flex items-center text-white">
                <div className="flex flex-col gap-4 text-left px-6">
                    <div className="text-5xl font-bold leading-relaxed">
                        <p className="text-4xl px-3.5 rounded-third bg-brand-neutral/80 text-foreground w-fit">
                            Welcome to
                        </p>
                        <div className="flex gap-2 mt-2">
                            <h1 className="px-3.5 rounded-secondary bg-brand-main/80">
                                Riven
                            </h1>
                            <h1 className="px-3.5 rounded-secondary bg-brand-accent/80">
                                Foundation
                            </h1>
                        </div>
                    </div>
                    <p className="text-lg max-w-2xl opacity-80">
                        Riven Foundation is dedicated to empowering communities through education, technology, and sustainable development.
                    </p>
                </div>
            </div>
        </main>
    );
}