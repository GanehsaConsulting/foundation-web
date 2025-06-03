import { Title } from "./title";

export const AbotUs = () => {
    return (
        <main className="margin my-10">
            <section className="grid grid-cols-2 gap-4">
                <img
                    className="w-full h-[50vh] object-cover rounded-main mb-5"
                    src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=3238&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
                <div className="flex flex-col justify-center gap-3">
                    <Title
                        highlight="Yayasan Aksata "
                        accent="Cendekia Nusantara"
                    />

                    <div className="-ml-20 bg-brand-base/50 backdrop-blur-md p-4 rounded-main shadow-custom space-y-3">
                        <p className="text-lg text-neutral-700 dark:text-neutral-200">
                            Yayasan Aksata Cendekia Nusantara (YACN) adalah organisasi sosial yang berkomitmen untuk mendukung pendidikan anak-anak Indonesia melalui pemenuhan kebutuhan gizi.

                        </p>
                        <p className="text-lg text-neutral-700 dark:text-neutral-200">
                            Sejak didirikan pada tahun 2021, kami dipercaya sebagai pelaksana program makan siang gratis untuk siswa SD hingga SMA/SMK dari keluarga prasejahtera, bekerja sama dengan pemerintah dan berbagai mitra lokal.
                        </p>
                        <p className="text-lg text-neutral-700 dark:text-neutral-200">
                            Kami percaya bahwa anak yang kenyang adalah anak yang siap belajar dan meraih masa depan yang lebih cerah.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}