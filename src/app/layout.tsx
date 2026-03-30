import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Asad Raza — Senior Frontend Engineer | React Specialist",
    template: "%s | Muhammad Asad Raza",
  },
  description:
    "Senior Frontend Engineer with 5+ years of experience building scalable React applications, enterprise dashboards, and high-performance web products. Specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Senior Developer",
    "Portfolio",
    "Muhammad Asad Raza",
  ],
  authors: [{ name: "Muhammad Asad Raza" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Asad Raza — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 5+ years building scalable React applications, enterprise dashboards, and high-performance web products.",
    siteName: "Muhammad Asad Raza Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asad Raza — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 5+ years building scalable React applications, enterprise dashboards, and high-performance web products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
