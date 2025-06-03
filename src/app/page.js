import { CardCarousel } from "@/components/card-carousel";
import { HeroHome } from "@/components/hero-home";
import { DataArticles, keunggulanSection } from "./system";
import { Points } from "@/components/points";
import { AbotUs } from "@/components/about-us";
import { ProgramOverview } from "@/components/program-overview";

export default function Home() {
  const activity = DataArticles.filter((article) => article.category === "Activity");
  const noActivity = DataArticles.filter((article) => article.category !== "Activity");
  return (
    <>
      <HeroHome />

      <ProgramOverview />

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
