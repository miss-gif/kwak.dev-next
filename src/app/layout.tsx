import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import HeaderWrap from "@/components/layout/header-wrap";
import Inner from "@/components/layout/inner";
import TopBanner from "@/components/layout/top-banner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kwak.dev",
  description: "Kwak's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBanner />
        <HeaderWrap />
        <Inner className="min-h-dvh">
          <main>{children}</main>
        </Inner>
        <Footer />
      </body>
    </html>
  );
}
