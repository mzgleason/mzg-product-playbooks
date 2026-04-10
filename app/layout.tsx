import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: "Product Management Operating System",
    template: "%s | Product Management Operating System"
  },
  description:
    "A practical operating system for product managers who need sharper judgment, better tradeoffs, and frameworks they can use immediately."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
