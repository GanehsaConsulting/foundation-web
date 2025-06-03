import { AbotUs } from "@/components/about-us";
import PageBanner from "@/components/page-banner";
import { Points } from "@/components/points";
import { ProgramOverview } from "@/components/program-overview";
import { VisiMisi } from "@/components/visi-misi";

export default function TentangPage() {
    return (
        <>
            <PageBanner
                highlight="Tentang"
                accent="Kami"
                description="Yayasan Piring Harapan berdedikasi untuk memastikan setiap anak mendapat asupan gizi layak. Kenali lebih dalam visi, misi, dan perjalanan kami"
            />

            <AbotUs />

            <VisiMisi />
            
            <Points />
        </>
    );
}