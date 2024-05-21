import { HeroSection } from "@/components/custom/hero-section";
import { flattenAttributes } from "@/lib/utils";
import qs from "qs";
const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true,
        },
      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const url = new URL(path, baseUrl);
  url.search = homePageQuery;
  try {
    const response = await fetch(url.href, { cache: "no-store" });
    const data = await response.json();
    const flattendData = flattenAttributes(data);
    console.log(JSON.stringify(flattendData, null, 2));
    return flattendData;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const data = await getStrapiData("api/home-page");
  const { title, description, blocks } = data;
  return (
    <main className="container mx-auto py-6">
      <HeroSection data={blocks[0]} />
    </main>
  );
}
