import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hyper Galaxy",
    short_name: "Hyper Galaxy",
    description: "Software, IA, automação e cloud para operações conectadas.",
    start_url: "/",
    display: "standalone",
    background_color: "#050507",
    theme_color: "#050507",
    icons: [
      { src: "/assets/brand/app-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/assets/brand/app-icon-1024.png", sizes: "1024x1024", type: "image/png", purpose: "maskable" },
    ],
  };
}
