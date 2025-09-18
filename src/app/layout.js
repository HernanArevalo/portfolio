import "./globals.css";
import { Syne } from "next/font/google";

const fontSyne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Hernán Arévalo | Fullstack Dev. ",
  description: "Hernán Arevalo's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSyne.className}>{children}</body>
    </html>
  );
}
