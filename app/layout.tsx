import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brothers Plumbing | Plumbing, Heating & Air in Costa Mesa",
  description: "Dependable plumbing, heating, and air-conditioning service for Costa Mesa and Orange County. Call Brothers Plumbing at (949) 548-5558.",
  icons: { icon: "/brothers-plumbing-logo.png", shortcut: "/brothers-plumbing-logo.png" },
  openGraph: {
    title: "Brothers Plumbing | Costa Mesa, CA",
    description: "Reliable home comfort, handled like family.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Brothers Plumbing — Reliable home comfort, handled like family." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brothers Plumbing | Costa Mesa, CA",
    description: "Reliable home comfort, handled like family.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
