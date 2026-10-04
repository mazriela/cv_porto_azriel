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
  openGraph: {
    title: "Muhamad Azriel Akbar | Senior Mobile Engineer & Creative Technologist",
    description: "Cinematic portfolio showcasing 8+ enterprise mobile applications, 4 published technical books, corporate training programs, and national competition awards.",
    images: ["/assets/profile-azriel.png"],
    type: "website",
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
