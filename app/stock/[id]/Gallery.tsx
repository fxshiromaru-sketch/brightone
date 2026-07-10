"use client";

import { useState } from "react";

export default function Gallery({
  images,
  sold,
}: {
  images: string[];
  sold: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>

      <div className="relative">

        <img
          src={selectedImage}
          className={`w-full h-[500px] object-cover rounded-2xl border border-zinc-800 ${
            sold ? "opacity-50" : ""
          }`}
        />

        {sold && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-red-600 text-white text-3xl font-bold px-8 py-4 rounded-xl rotate-[-12deg]">
              SOLD OUT
            </span>
          </div>
        )}

      </div>

      <div className="grid grid-cols-5 gap-3 mt-4">

        {images.map((image, index) => (

        <button
  key={index}
  onClick={() => setSelectedImage(image)}
  className={`overflow-hidden rounded-xl border-2 transition-all duration-300 ${
    selectedImage === image
      ? "border-yellow-500 scale-105 shadow-lg shadow-yellow-500/30"
      : "border-zinc-700 hover:border-zinc-500 hover:scale-105"
  }`}
>

         <img
  src={image}
  className="w-full h-24 object-cover transition duration-300 hover:scale-110"
/>

          </button>

        ))}

      </div>

    </div>
  );
}