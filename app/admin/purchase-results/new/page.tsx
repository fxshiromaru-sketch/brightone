"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function NewPurchaseResultPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [images, setImages] = useState<string[]>([]);

  const [form, setForm] = useState({

    maker: "",

    prefecture: "",
    city: "",

    car_name: "",
    grade: "",

    year: "",
    mileage: "",

    purchase_type: "",

    comment: "",

    published: true,

  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ){

    const {
      name,
      value
    } = e.target;

    setForm({
      ...form,
      [name]: value
    });

  }

  const uploadImages = async (

    e: React.ChangeEvent<HTMLInputElement>

  ) => {

    const files = e.target.files;

    if(!files || files.length===0) return;

    setUploading(true);

    try{

      const uploadedUrls:string[]=[];

      for(const file of Array.from(files)){

        const ext=file.name.split(".").pop();

        const fileName=
`${Date.now()}-${Math.random()
.toString(36)
.substring(2)}.${ext}`;

        const {error}=await supabase.storage

          .from("car-images")

          .upload(fileName,file);

        if(error) throw error;

        const {

          data:{
            publicUrl
          }

        }=supabase.storage

          .from("car-images")

          .getPublicUrl(fileName);

        uploadedUrls.push(publicUrl);

      }

      setImages([
        ...images,
        ...uploadedUrls
      ]);

    }catch(err){

      console.error(err);

      alert("画像アップロードに失敗しました");

    }finally{

      setUploading(false);

    }

  };

  const deleteImage = async (
    url:string
  )=>{

    try{

      const fileName=url.split("/car-images/")[1];

      if(!fileName){

        alert("画像が見つかりません");

        return;

      }

      const {error}=await supabase.storage

        .from("car-images")

        .remove([fileName]);

      if(error) throw error;

      setImages(
        images.filter(img=>img!==url)
      );

    }catch(err){

      console.error(err);

      alert("削除に失敗しました");

    }

  };

  const moveImage=(

    index:number,

    direction:"left"|"right"

  )=>{

    const newImages=[...images];

    const target=

      direction==="left"

      ? index-1

      : index+1;

    if(

      target<0 ||

      target>=newImages.length

    ) return;

    [

      newImages[index],

      newImages[target]

    ]=[

      newImages[target],

      newImages[index]

    ];

    setImages(newImages);

  };
    async function saveResult(
    e: React.FormEvent
  ){

    e.preventDefault();

    setLoading(true);

    const { error } = await supabase

      .from("purchase_results")

      .insert({

        maker: form.maker,

        prefecture: form.prefecture,
        city: form.city,

        car_name: form.car_name,
        grade: form.grade,

        year: form.year,
        mileage: form.mileage,

        purchase_type: form.purchase_type,

        comment: form.comment,

        images: images,

        published: form.published,

      });

    setLoading(false);

    if(error){

      alert(error.message);

      return;

    }

    alert("買取実績を登録しました");

    router.push("/admin/purchase-results");

  }

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">

        買取実績登録

      </h1>

      <form

        onSubmit={saveResult}

        className="max-w-5xl space-y-6"

      >

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="maker"
            placeholder="メーカー"
            value={form.maker}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          />

          <input
            name="car_name"
            placeholder="車名"
            value={form.car_name}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          />

          <input
            name="grade"
            placeholder="グレード"
            value={form.grade}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          />

          <input
            name="year"
            placeholder="年式"
            value={form.year}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          />

          <input
            name="mileage"
            placeholder="走行距離"
            value={form.mileage}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          />

          <select
            name="purchase_type"
            value={form.purchase_type}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          >
            <option value="">
              買取方法
            </option>

            <option value="店頭">
              店頭
            </option>

            <option value="出張">
              出張
            </option>

            <option value="LINE">
              LINE
            </option>

          </select>

          <input
            name="prefecture"
            placeholder="都道府県"
            value={form.prefecture}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          />

          <input
            name="city"
            placeholder="市区町村"
            value={form.city}
            onChange={handleChange}
            className="bg-zinc-900 rounded-xl p-3"
          />

        </div>

        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="コメント"
          className="w-full h-40 bg-zinc-900 rounded-xl p-4"
        />
                <div>

          <h2 className="text-2xl font-bold mb-5">
            車両画像
          </h2>

          <label
            className="
            inline-block
            bg-yellow-500
            text-black
            px-5
            py-3
            rounded-xl
            cursor-pointer
            font-bold
            hover:bg-yellow-400
            transition
            "
          >

            {uploading
              ? "アップロード中..."
              : "画像を追加"}

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={uploadImages}
              className="hidden"
              disabled={uploading}
            />

          </label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            {images.map((img,index)=>(

              <div
                key={img}
                className="relative rounded-xl overflow-hidden border border-zinc-700"
              >

                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover"
                />

                {index===0 && (

                  <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                    メイン
                  </span>

                )}

                <div className="absolute bottom-2 left-2 flex gap-2">

                  <button
                    type="button"
                    onClick={()=>moveImage(index,"left")}
                    className="bg-black/70 px-2 py-1 rounded"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={()=>moveImage(index,"right")}
                    className="bg-black/70 px-2 py-1 rounded"
                  >
                    →
                  </button>

                </div>

                <button
                  type="button"
                  onClick={()=>deleteImage(img)}
                  className="absolute bottom-2 right-2 bg-red-600 px-2 py-1 rounded text-sm"
                >
                  削除
                </button>

              </div>

            ))}

          </div>

        </div>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={form.published}
            onChange={(e)=>

              setForm({

                ...form,

                published:e.target.checked

              })

            }
          />

          公開する

        </label>

        <button

          type="submit"

          disabled={loading}

          className="
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          font-bold
          px-10
          py-4
          rounded-xl
          "

        >

          {loading
            ? "保存中..."
            : "買取実績を登録"}

        </button>

      </form>

    </main>

  );

}