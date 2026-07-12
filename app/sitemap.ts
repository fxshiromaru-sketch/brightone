import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://brightone2026.com",
      priority: 1,
    },

    {
      url: "https://brightone2026.com/stock",
      priority: 0.9,
    },

    {
      url: "https://brightone2026.com/purchase",
      priority: 0.9,
    },

  ];

}