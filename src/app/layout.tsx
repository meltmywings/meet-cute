import type { Metadata, Viewport } from "next"; // Note: No more Viewport import
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

// Metadata for the Meet Cute app (General metadata - title, description, **manifest link**)
export const metadata: Metadata = {
  title: "Meet Cute",
  description: "A dating app interface built with Next.js and Gemini",
  manifest: "/manifest.json", // **ADD THIS LINE!**  Link to your manifest file
};

 export const viewport: Viewport = {
   width: 'device-width',
   initialScale: 1,
   maximumScale: 1,
   userScalable: false,
   viewportFit: 'cover',
   themeColor: '#0f172a',
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}