import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NZINGA Management | Premier Talent & Creator Agency",
  description:
    "NZINGA Management is a premier talent management agency representing top creators and influencers. We help form and create your own success personally and professionally.",
  keywords: [
    "talent management",
    "creator agency",
    "influencer management",
    "brand partnerships",
    "content creators",
  ],
  openGraph: {
    title: "NZINGA Management | Premier Talent & Creator Agency",
    description:
      "Premier talent management agency representing top creators and influencers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NZINGA Management",
    description:
      "Premier talent management agency representing top creators and influencers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased bg-[#0a0a0a] text-[#f5f5f5]`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
