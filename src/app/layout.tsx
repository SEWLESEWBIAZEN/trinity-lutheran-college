// src/app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import { NavigationProgressProvider } from "@/components/navigation/NavigationProgressProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Trinity Lutheran College — Gambella, Ethiopia",
    template: "%s | Trinity Lutheran College",
  },
  description:
    "Advancing academic excellence and fostering a nurturing environment for students in Gambella, Ethiopia.",
  keywords: ["Trinity Lutheran College", "Gambella", "Ethiopia", "university", "higher education"],
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Trinity Lutheran College",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-source antialiased bg-stone-50 text-stone-800">
        <SessionProvider>
          <NavigationProgressProvider>{children}</NavigationProgressProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
