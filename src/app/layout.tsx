import type { Metadata } from "next";
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
  metadataBase: new URL("https://azrielakbar.my.id"),
  title: "Muhamad Azriel Akbar | Senior Mobile Engineer & Creative Technologist",
  description: "Official interactive portfolio of Muhamad Azriel Akbar. Senior Mobile Engineer specialized in Flutter & native Android architecture, corporate developer training, and licensed aerial cinematography.",
  keywords: [
    "Muhamad Azriel Akbar",
    "Mobile Developer",
    "Flutter Developer",
    "Android Developer",
    "Kotlin Specialist",
    "BLoC Architecture",
    "Dumi ASN",
    "Corporate Trainer",
    "Drone Pilot Indonesia"
  ],
  authors: [{ name: "Muhamad Azriel Akbar" }],
  icons: {
    icon: "/assets/pp_azriel.png",
    shortcut: "/assets/pp_azriel.png",
    apple: "/assets/pp_azriel.png",
  },
  openGraph: {
    title: "Muhamad Azriel Akbar | Senior Mobile Engineer & Creative Technologist",
    description: "Cinematic portfolio showcasing 8+ enterprise mobile applications, 4 published technical books, corporate training programs, and national competition awards.",
    url: "https://azrielakbar.my.id",
    siteName: "Muhamad Azriel Akbar Portfolio",
    images: [
      {
        url: "/assets/pp_azriel.png",
        width: 600,
        height: 800,
        alt: "Muhamad Azriel Akbar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Azriel Akbar | Senior Mobile Engineer & Creative Technologist",
    description: "Cinematic portfolio showcasing 8+ enterprise mobile applications, 4 published technical books, corporate training programs, and national competition awards.",
    images: ["/assets/pp_azriel.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#030712] text-slate-100 overflow-x-hidden font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
