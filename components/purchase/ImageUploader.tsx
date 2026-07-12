"use client";

import { ChangeEvent, useState } from "react";

type Props = {
  onChange: (files: File[]) => void;
};

export default function ImageUploader({ onChange }: Props) {

  const [previews, setPreviews] = useState<string[]>([]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const files = Array.from(e.target.files || []);


    if (files.length > 10) {
      alert("画像は最大10枚まで登録できます");
      return;
    }


    const urls = files.map((file) =>
      URL.createObjectURL(file)
    );


    setPreviews(urls);

    onChange(files);

  };


  return (

    <div className="space-y-5">


      <label className="
        block
        border
        border-zinc-700
        rounded-xl
        p-6
        text-center
        cursor-pointer
        hover:border-yellow-500
        transition
      ">


        <p className="font-bold mb-2">
          車両写真を選択
        </p>


        <p className="text-sm text-zinc-400">
          最大10枚までアップロード可能
        </p>


        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="hidden"
        />


      </label>



      {
        previews.length > 0 && (

          <div className="
            grid
            grid-cols-2
            md:grid-cols-5
            gap-4
          ">

            {
              previews.map((src,index)=>(

                <img
                  key={index}
                  src={src}
                  alt={`preview-${index}`}
                  className="
                    h-32
                    w-full
                    object-cover
                    rounded-xl
                  "
                />

              ))
            }


          </div>

        )
      }



    </div>

  );
}