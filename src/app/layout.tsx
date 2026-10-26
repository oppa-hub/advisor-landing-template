import type { Metadata } from "next";
import { site } from "@/config/site";
import "./globals.css";

const shareImage = site.seo.canonicalUrl && site.seo.openGraphImage ? [site.seo.openGraphImage] : undefined;

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  ...(site.seo.canonicalUrl ? { metadataBase: new URL(site.seo.canonicalUrl) } : {}),
  alternates: site.seo.canonicalUrl ? { canonical: site.seo.canonicalUrl } : undefined,
  icons: { icon: site.seo.favicon },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    images: shareImage,
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description, images: shareImage },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH">
      <body>{children}</body>
    </html>
  );
}
