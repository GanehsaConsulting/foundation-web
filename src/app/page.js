import { CardCarousel } from "@/components/card-carousel";
import { HeroHome } from "@/components/hero-home";
import { DataArticles, keunggulanSection } from "./system";
import { Points } from "@/components/points";

export default function Home() {
  const activity = DataArticles.filter((article) => article.category === "Activity");
  const noActivity = DataArticles.filter((article) => article.category !== "Activity");
  return (
    <>
      <HeroHome />

      <Points/>

      <CardCarousel
        articles={activity}
        showTopLabel={true}
        topLabelTitle="Aktivitas Terbaru"
        showViewAllButton={true}
        viewAllButtonHref="/post"
        cardMinWidth="60vh"
      />

      <CardCarousel
        articles={noActivity}
        showTopLabel={true}
        topLabelTitle="Artikel Terbaru"
        showViewAllButton={true}
        viewAllButtonHref="/post"
      />
    </>
  );
}
