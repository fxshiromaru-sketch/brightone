import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  const { data: cars } = await supabase
    .from("cars")
    .select("id, created_at");



  const carPages =
    cars?.map((car) => ({

      url:
        `https://brightone2026.com/stock/${car.id}`,

      lastModified:
        car.created_at
          ? new Date(car.created_at)
          : new Date(),

      priority:
        0.8,

    })) || [];



  return [


    {
      url:
        "https://brightone2026.com",

      lastModified:
        new Date(),

      priority:
        1,

    },


    {
      url:
        "https://brightone2026.com/stock",

      lastModified:
        new Date(),

      priority:
        0.9,

    },


    {
      url:
        "https://brightone2026.com/purchase",

      lastModified:
        new Date(),

      priority:
        0.9,

    },


    {
      url:
        "https://brightone2026.com/service",

      lastModified:
        new Date(),

      priority:
        0.8,

    },


    {
      url:
        "https://brightone2026.com/service/tire",

      lastModified:
        new Date(),

      priority:
        0.7,

    },


    {
      url:
        "https://brightone2026.com/service/recker",

      lastModified:
        new Date(),

      priority:
        0.7,

    },


    {
      url:
        "https://brightone2026.com/service/bike",

      lastModified:
        new Date(),

      priority:
        0.7,

    },


    ...carPages,


  ];

}