import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brothers Plumbing | Local Plumber in Costa Mesa",
  description: "Dependable plumbing service for Costa Mesa and Orange County. Call Brothers Plumbing at (949) 548-5558.",
  icons: { icon: "/brothers-plumbing-logo.png", shortcut: "/brothers-plumbing-logo.png" },
  openGraph: {
    title: "Brothers Plumbing | Costa Mesa, CA",
    description: "Reliable plumbing, handled like family.",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Brothers Plumbing — Reliable plumbing, handled like family." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brothers Plumbing | Costa Mesa, CA",
    description: "Reliable plumbing, handled like family.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

