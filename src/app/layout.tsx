import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import LoadingScreen from "@/components/layout/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shubham Saurabh — UI/UX Designer",
    template: "%s | Shubham Saurabh",
  },
  description:
    "Premium UI/UX Designer crafting intuitive digital experiences. Specializing in SaaS design, design systems, and product strategy.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "SaaS Design",
    "Design Systems",
    "Figma",
    "Shubham Saurabh",
  ],
  authors: [{ name: "Shubham Saurabh" }],
  creator: "Shubham Saurabh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shubham Saurabh — UI/UX Designer",
    description:
      "Premium UI/UX Designer crafting intuitive digital experiences.",
    siteName: "Shubham Saurabh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Saurabh — UI/UX Designer",
    description:
      "Premium UI/UX Designer crafting intuitive digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">
        <LoadingScreen />
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
