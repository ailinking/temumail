import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
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
  title: "TemuMail - Free Disposable Temporary Email | Anonymous & Secure",
  description: "Keep your real email safe from spam. Get a free, secure, and anonymous temporary email address instantly with TemuMail. No registration required.",
  keywords: ["temporary email", "disposable email", "temp mail", "throwaway email", "fake email", "anonymous email", "email generator"],
  openGraph: {
    title: "TemuMail - Free Disposable Temporary Email",
    description: "Secure, anonymous, temporary email addresses to protect your privacy.",
    url: "https://temumail.com",
    siteName: "TemuMail",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TemuMail - Free Disposable Temporary Email",
    description: "Protect your privacy with instant disposable email addresses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
