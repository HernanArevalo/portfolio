import { Metadata, Viewport } from "next";
import "./globals.css";
import { Syne } from "next/font/google";

const fontSyne = Syne({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: "#0a0a0a",

}

export const metadata: Metadata = {
  title: "Hernán Arévalo | FullStack Developer",
  description:
    "Portfolio of Hernán Arévalo, FullStack Developer specialized in Next.js, Angular, and modern frontend and backend projects.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Hernán Arévalo | FullStack Developer",
    description:
      "Portfolio of Hernán Arévalo, FullStack Developer specialized in Next.js, React, Angular, and modern frontend and backend projects.",
    url: "https://hernanarevalo.com.ar/",
    siteName: "Hernán Arévalo Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Hernán Arévalo | FullStack Developer",
    description:
      "Portfolio of Hernán Arévalo, FullStack Developer specialized in Next.js, Angular, and modern frontend and backend projects.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSyne.className}>{children}</body>
    </html>
  );
}
