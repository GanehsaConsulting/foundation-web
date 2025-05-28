import PageBanner from "@/components/page-banner";

export default function ArtikelPage() {
    return (
        <>
            <PageBanner
                highlight="Artikel"
                accent="Aktivitas"
                divider={true}
                description="Kabar terbaru, cerita lapangan, dan dokumentasi kegiatan dari program-program kami untuk mendukung anak-anak Indonesia."
            />
        </>
    );
}