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

  metadataBase: new URL("https://brightone2026.com"),

  title: {
    default:
      "Bright One｜千葉県銚子市の中古車販売・車買取・スポーツカー買取",
    template: "%s | Bright One",
  },

  description:
    "千葉県銚子市の中古車販売店 Bright One。中古車販売・車買取・スポーツカー買取・カスタムカー販売・タイヤ交換・レッカーサービスまで対応。銚子市・旭市・香取市・神栖市・鹿嶋市周辺のお客様をサポートします。",

  keywords: [
    "銚子市 中古車",
    "銚子市 車買取",
    "銚子 中古車販売",
    "旭市 中古車",
    "旭市 車買取",
    "香取市 車買取",
    "神栖市 車買取",
    "鹿嶋市 車買取",
    "スポーツカー 買取",
    "スポーツカー販売",
    "カスタムカー 買取",
    "カスタムカー販売",
    "車査定",
    "中古車販売",
    "Bright One",
  ],


  alternates: {
    canonical: "https://brightone2026.com",
  },


  openGraph: {

    title:
      "Bright One｜千葉県銚子市の中古車販売・車買取",

    description:
      "中古車販売・車買取・スポーツカー買取ならBright One。銚子市を中心に旭市・香取市・神栖市周辺まで対応。",

    url:
      "https://brightone2026.com",

    siteName:
      "Bright One",

    locale:
      "ja_JP",

    type:
      "website",

  },


  robots: {

    index: true,

    follow: true,

  },

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",

    name: "Bright One",

    description:
      "千葉県銚子市の中古車販売店。中古車販売・車買取・スポーツカー買取・カスタム・タイヤ交換・レッカーサービスに対応。",

    url:
      "https://brightone2026.com",

    telephone:
      "080-5563-7830",

    address: {

      "@type": "PostalAddress",

      streetAddress:
        "猿田町622-1",

      addressLocality:
        "銚子市",

      addressRegion:
        "千葉県",

      postalCode:
        "288-0855",

      addressCountry:
        "JP",

    },


    openingHoursSpecification: {

      "@type":
        "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],

      opens:
        "09:00",

      closes:
        "18:00",

    },


    priceRange:
      "¥¥",


    areaServed: [

      "銚子市",

      "旭市",

      "香取市",

      "神栖市",

      "鹿嶋市",

      "多古町",

    ],


    makesOffer: [

      {
        "@type":
          "Offer",

        itemOffered: {

          "@type":
            "Service",

          name:
            "中古車販売",

        },

      },


      {
        "@type":
          "Service",

        name:
          "車買取・無料査定",

      },


      {
        "@type":
          "Service",

        name:
          "スポーツカー買取",

      },


      {
        "@type":
          "Service",

        name:
          "タイヤ交換",

      },


      {
        "@type":
          "Service",

        name:
          "レッカーサービス",

      },

    ],

  };


  return (
    <html lang="ja">

      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(jsonLd),
          }}
        />

      </head>


      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {children}

      </body>

    </html>
  );
}