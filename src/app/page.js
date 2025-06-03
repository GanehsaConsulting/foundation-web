import { CardCarousel } from "@/components/card-carousel";
import { HeroHome } from "@/components/hero-home";
import { DataArticles } from "./system";

export default function Home() {
  const activity = DataArticles.filter((article) => article.category === "Activity");
  const noActivity = DataArticles.filter((article) => article.category !== "Activity");
  return (
    <>
      <HeroHome />

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
