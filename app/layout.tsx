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
      "Bright One｜銚子市の中古車販売・車買取・スポーツカー買取",
    template: "%s | Bright One",
  },

  description:
    "千葉県銚子市のBright Oneでは、中古車販売・車買取・スポーツカー買取・カスタム・タイヤ交換・レッカーサービスまで対応。旭市・香取市・多古町・神栖市・鹿嶋市からの査定も歓迎しております。",

  keywords: [
    "銚子市 中古車",
    "銚子市 車買取",
    "匝瑳市 車買取",
    "匝瑳市 中古車",
    "八日市場 車買取",
    "八日市場 中古車",
    "横芝光町 車買取",
    "横芝光町 中古車",
    "東金市 車買取",
    "東金市 中古車",
    "成田市 車買取",
    "成田市 中古車",
    "佐倉市 車買取",
    "佐倉市 中古車",
    "富里市 車買取",
    "富里市 中古車",
    "印西市 車買取",
    "印西市 中古車",
    "白井市 車買取",
    "白井市 中古車",
    "我孫子市 車買取",
    "我孫子市 中古車",
    "柏市 車買取",
    "柏市 中古車",
    "松戸市 車買取",
    "松戸市 中古車",
    "流山市 車買取",
    "流山市 中古車",
    "野田市 車買取",
    "野田市 中古車",
    "鎌ケ谷市 車買取",
    "鎌ケ谷市 中古車",
    "船橋市 車買取",
    "船橋市 中古車",
    "習志野市 車買取",
    "習志野市 中古車",
    "八千代市 車買取",
    "八千代市 中古車",
    "市川市 車買取",
    "市川市 中古車",
    "浦安市 車買取",
    "浦安市 中古車",
    "旭市 車買取",
    "旭市 中古車",
    "香取市 車買取",
    "小見川 車買取",
    "神栖市 車買取",
    "鹿嶋市 車買取",
    "多古町 車買取",
    "スポーツカー 買取",
    "中古車販売",
    "車買取",
    "車査定",
    "カスタムカー 買取",
    "Bright One",
    "千葉県銚子市の中古車販売店",
    "千葉県銚子市の車買取店",
    "千葉県銚子市のスポーツカー買取店",
    "千葉県銚子市のカスタムカー買取店",
    "千葉県銚子市のBright One",
    "千葉県銚子市の中古車販売 Bright One",
    "千葉県銚子市の車買取 Bright One",
    "千葉県銚子市のスポーツカー買取 Bright One",
    "千葉県銚子市のカスタムカー買取 Bright One",
    "タイヤ交換",
    "レッカーサービス",
    "中古車販売 Bright One",
    "車買取 Bright One",
    "スポーツカー買取 Bright One",
    "カスタムカー買取 Bright One",
    "タイヤ交換 Bright One",
    "レッカーサービス Bright One",
    "中古車販売 千葉県銚子市 Bright One",
    "車買取 千葉県銚子市 Bright One",
    "スポーツカー買取 千葉県銚子市 Bright One",
    "カスタムカー買取 千葉県銚子市 Bright One",
    "タイヤ交換 千葉県銚子市 Bright One",
    "レッカーサービス 千葉県銚子市 Bright One",
    "Bright One"
  ],

  openGraph: {
    title: "Bright One",
    description:
      "中古車販売・車買取・スポーツカー買取ならBright One",
    url: "https://brightone2026.com",
    siteName: "Bright One",
    locale: "ja_JP",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};