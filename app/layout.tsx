import type { Metadata } from "next";
import { Crimson_Text, Gantari } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../AppContext";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const gantari = Gantari({
  variable: "--font-gantari",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${gantari.variable} ${gantari.className} ${crimsonText.variable} ${crimsonText.className}`}>
      <body className={`antialiased bg-[var(--color-brown-1000)]`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
