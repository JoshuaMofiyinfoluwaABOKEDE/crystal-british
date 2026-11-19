import type { MetadataRoute } from "next";
import { school } from "@/config/school";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: school.name,
    short_name: school.shortName,
    description: school.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#202054",
    icons: [
      { src: "/logos/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logos/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
