"use client";

import { useState } from "react";

type Props = {
  images: string[];
  sold?: boolean;
};

export default function Gallery({
  images,
  sold = false,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(
    images?.[0] || ""
  );

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[300px] md:h-[500px] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500">
        画像はありません
      </div>
    );
  }

  return (
    <div>

      {/* メイン画像 */}
      <div className="relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800">

        <img
          key={selectedImage}
          src={selectedImage}
          alt="車両画像"
          className={`w-full h-[260px] sm:h-[350px] md:h-[500px] lg:h-[560px]
          object-contain md:object-cover
          transition-all duration-500
          hover:scale-[1.02]
          ${sold ? "opacity-50" : ""}`}
        />

        {/* 下グラデーション */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

        {/* SOLD */}
        {sold && (
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="bg-red-600 text-white text-xl md:text-4xl font-bold px-8 py-3 rounded-xl rotate-[-12deg] shadow-2xl">

              SOLD OUT

            </div>

          </div>
        )}

      </div>

      {/* サムネイル */}
      {images.length > 1 && (

        <div className="grid grid-cols-4 md:grid-cols-5 gap-3 mt-5">

          {images.map((image, index) => (

            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-xl border-2 transition-all duration-300

              ${
                selectedImage === image
                  ? "border-yellow-500 scale-105 shadow-lg shadow-yellow-500/30"
                  : "border-zinc-700 hover:border-yellow-400 hover:scale-105"
              }

              `}
            >

              <img
                src={image}
                alt={`車両画像 ${index + 1}`}
                className="w-full h-20 md:h-24 object-cover transition duration-300 hover:scale-110"
              />

            </button>

          ))}

        </div>

      )}

    </div>
  );
}