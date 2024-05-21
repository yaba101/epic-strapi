import { FeatureSection } from "@/components/custom/feature-section";
import { HeroSection } from "@/components/custom/hero-section";
import { getHomePageData } from "@/data/loaders";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const data = await getHomePageData();
  const { blocks } = data;
  if (!blocks) return <div>No blocks found</div>;
  return (
    <main className="container mx-auto py-6">
      {blocks.map((block: any) => blockRenderer(block))}
    </main>
  );
}
