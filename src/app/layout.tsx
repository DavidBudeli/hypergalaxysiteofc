import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ExperienceProviders } from "@/components/layout/ExperienceProviders";
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
  title: "Hyper Galaxy",
  description:
    "Fundacao oficial da nova experiencia publica da Hyper Galaxy.",
  icons: {
    icon: [
      {
        url: "/assets/brand/hyper-galaxy-wordmark.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ExperienceProviders>{children}</ExperienceProviders>
      </body>
    </html>
  );
}
