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


      {/* メイン画像 */}

      <div className="
        w-full
        h-[520px]
        bg-zinc-900
        rounded-2xl
        overflow-hidden
        flex
        items-center
        justify-center
      ">


        <img
          src={images[current]}
          className="
            max-w-full
            max-h-full
            object-contain
          "
          alt=""
        />


      </div>




      {/* サムネイル */}

      <div className="
        flex
        gap-3
        mt-4
        overflow-x-auto
        pb-2
      ">


        {images.map((image, index) => (


          <div
            key={index}
            className={`
              flex-shrink-0
              w-28
              h-20
              bg-zinc-900
              rounded-lg
              overflow-hidden
              cursor-pointer
              border-2
              ${
                current === index
                  ? "border-yellow-500"
                  : "border-zinc-700"
              }
            `}
          >


            <img
              src={image}
              onClick={() => setCurrent(index)}
              className="
                w-full
                h-full
                object-contain
              "
              alt=""
            />


          </div>


        ))}


      </div>


    </div>

  );

}