"use client";

import { useState } from "react";

type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {

  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {

    return (
      <div className="bg-zinc-900 rounded-xl h-[500px] flex items-center justify-center">
        画像がありません
      </div>
    );

  }

  return (

    <div>

      <img
        src={images[current]}
        className="w-full h-[520px] object-cover rounded-xl"
        alt=""
      />

      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

        {images.map((image, index) => (

          <img
            key={index}
            src={image}
            onClick={() => setCurrent(index)}
            className={`

            w-28
            h-20
            object-cover
            rounded-lg
            cursor-pointer
            border-2

            ${
              current === index
                ? "border-yellow-500"
                : "border-zinc-700"
            }

            `}
          />

        ))}

      </div>

    </div>

  );

}