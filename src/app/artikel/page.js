export default function ArtikelPage() {
    return (
        <>
            <main>
                <section className="margin flex flex-col items-center justify-center py-10">
                    <h1
                        className="text-3xl font-bold mb-2"
                    >
                    <span className="text-brand-main">
                            Artikel
                        </span>
                        {" "}
                        &
                        {" "}
                        <span className="text-brand-accent">
                            Aktivitas
                        </span>
                    </h1>
                    <p className="max-w-xl text-center text-neutral-600">
                        Kabar terbaru, cerita lapangan, dan dokumentasi kegiatan dari program-program kami untuk mendukung anak-anak Indonesia.
                    </p>

                </section>
            </main>
        </>
    );
}