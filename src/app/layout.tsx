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
  metadataBase: new URL("https://hypergalaxy.cloud"),
  title: {
    default: "Hyper Galaxy | Software, IA, Automação e Cloud",
    template: "%s | Hyper Galaxy",
  },
  description:
    "Software, agentes de IA, automação e infraestrutura cloud para operações que querem crescer com sistemas conectados.",
  keywords: [
    "desenvolvimento de software",
    "agentes de inteligência artificial",
    "automação de processos",
    "plataformas SaaS",
    "cloud",
    "APIs e integrações",
  ],
  authors: [{ name: "Hyper Galaxy", url: "https://hypergalaxy.cloud" }],
  creator: "Hyper Galaxy",
  publisher: "Hyper Galaxy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hypergalaxy.cloud",
    siteName: "Hyper Galaxy",
    title: "Hyper Galaxy | Software, IA, Automação e Cloud",
    description:
      "Software, agentes de IA, automação e infraestrutura cloud para operações que querem crescer.",
    images: [
      {
        url: "/assets/brand/og-brand.png",
        width: 1200,
        height: 630,
        alt: "Hyper Galaxy - Intelligent systems. Stronger outcomes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyper Galaxy | Software, IA, Automação e Cloud",
    description:
      "Software, agentes de IA, automação e infraestrutura cloud para operações que querem crescer.",
    images: ["/assets/brand/og-brand.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 24x24 32x32 48x48 64x64" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hyper Galaxy",
              url: "https://hypergalaxy.cloud",
              description:
                "Empresa de software, inteligência artificial, automação e infraestrutura cloud.",
            }).replace(/</g, "\\u003c"),
          }}
        />
        <ExperienceProviders>{children}</ExperienceProviders>
      </body>
    </html>
  );
}
