import AnimateOnScroll from "@/components/animate-on-scroll";
import PageBanner from "@/components/page-banner";
import { AbotUs } from "@/components/about-us";
import { Points } from "@/components/points";
import { VisiMisi } from "@/components/visi-misi";

export default function TentangPage() {
    return (
        <>
            <PageBanner
                highlight="Tentang"
                accent="Kami"
                description="Yayasan Piring Harapan berdedikasi untuk memastikan setiap anak mendapat asupan gizi layak. Kenali lebih dalam visi, misi, dan perjalanan kami"
            />

            <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
                <AbotUs />
            </AnimateOnScroll>
            <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
                <VisiMisi />
            </AnimateOnScroll>
            <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
                <Points />
            </AnimateOnScroll>

        </>
    );
}