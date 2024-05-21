import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalPageData, getGlobalPageMetaData } from "@/data/loaders";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const globalMetaData = await getGlobalPageMetaData();
  return {
    title: globalMetaData.title,
    description: globalMetaData.description,
  };
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalPageData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header data={globalData.header} />
        <div className="">{children}</div>
        <Footer data={globalData.footer} />
      </body>
    </html>
  );
}
