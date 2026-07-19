"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function EditCarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const router = useRouter();
const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
const [uploading, setUploading] = useState(false);
  useEffect(() => {

  async function load(){


    const { id } = await params;

    setId(id);

    getCar(id);

  }

  load();

}, []);
 const [form, setForm] = useState<any>({
  maker: "",
  name: "",
  price: "",
  total_price: "",
  year: "",
  mileage: "",
  inspection: "",
  displacement: "",
  transmission: "",
  drive: "",
  color: "",
  fuel: "",
  capacity: "",
  doors: "",
  repair_history: "",
  warranty: "",
  maintenance: "",
  recycle_fee: "",
  chassis_number: "",
  description: "",
  featured: false,
});



const uploadImages = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const files = e.target.files;

  if (!files || files.length === 0) return;

  setUploading(true);

  try {
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {

      const fileExt = file.name.split(".").pop();

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;

      const filePath = fileName;


      // Storageへアップロード
      const { error: uploadError } = await supabase.storage
        .from("car-images")
        .upload(filePath, file);


      if (uploadError) {
        throw uploadError;
      }


      // 公開URL取得
      const {
        data: {
          publicUrl,
        },
      } = supabase.storage
        .from("car-images")
        .getPublicUrl(filePath);


      uploadedUrls.push(publicUrl);
    }


    // 既存画像 + 新規画像
    const newImages = [
      ...images,
      ...uploadedUrls,
    ];


    setImages(newImages);


  } catch (error) {

    console.error(
      "画像アップロードエラー:",
      error
    );

    alert(
      "画像アップロードに失敗しました"
    );

  } finally {

    setUploading(false);

  }
};
const deleteImage = async (url: string) => {

  try {

    // Storage内のファイル名を取得
    const fileName = url.split("/car-images/")[1];


    if (!fileName) {
      alert("画像情報が取得できません");
      return;
    }


    // Storageから削除
    const { error } = await supabase.storage
      .from("car-images")
      .remove([
        fileName
      ]);


    if (error) {
      throw error;
    }


    // 画面から削除
    const newImages = images.filter(
      (img) => img !== url
    );


    setImages(newImages);


  } catch (error) {

    console.error(
      "画像削除エラー:",
      error
    );

    alert(
      "画像削除に失敗しました"
    );

  }

};

const moveImage = (
  index: number,
  direction: "left" | "right"
) => {

  const newImages = [...images];

  const targetIndex =
    direction === "left"
      ? index - 1
      : index + 1;


  // 範囲外なら何もしない
  if (
    targetIndex < 0 ||
    targetIndex >= newImages.length
  ) {
    return;
  }


  // 入れ替え
  [
    newImages[index],
    newImages[targetIndex],
  ] = [
    newImages[targetIndex],
    newImages[index],
  ];


  setImages(newImages);

};
async function getCar(id:string){

 const { data, error } = await supabase
  .from("cars")
  .select("*")
  .eq("id", id)
  .single();


    if(error){

      alert(error.message);
      return;

    }


    setForm(data);
setImages(data.images || []);
  }



  function handleChange(e:any){

    const {name,value} = e.target;

    setForm({
      ...form,
      [name]:value
    });

  }



  async function updateCar(e:React.FormEvent){

    e.preventDefault();

    setLoading(true);


    const {error}=await supabase
      .from("cars")
      .update({
images: images,
        maker:form.maker,
        name:form.name,
        price:Number(form.price),
        total_price: Number(form.total_price),
        year:form.year,
        mileage:form.mileage,
        inspection:form.inspection,
        transmission:form.transmission,
        drive:form.drive,
       color: form.color,
displacement: form.displacement,
fuel: form.fuel,
capacity: form.capacity,
doors: form.doors,
repair_history: form.repair_history,
warranty: form.warranty,
maintenance: form.maintenance,
recycle_fee: form.recycle_fee,
chassis_number: form.chassis_number,
description: form.description,
        featured:form.featured,

      })
     .eq("id",id);



    if(error){

      alert(error.message);
      setLoading(false);
      return;

    }


    alert("更新しました");

    router.push("/admin/dashboard");

  }



return (

<main className="min-h-screen bg-black text-white p-10">

<h1>
Brigaht One
</h1>
<h1 className="text-3xl font-bold mb-8">
車両編集
</h1>


<form
onSubmit={updateCar}
className="max-w-xl space-y-4"
>


{[
"maker",
"name",
"price",
"total_price",
"year",
"mileage",
"inspection",
"displacement",
"transmission",
"drive",
"color",
"capacity",
"doors",
"recycle_fee",
"chassis_number"

].map((item)=>(

<input
key={item}
name={item}
value={form[item] || ""}
onChange={handleChange}
placeholder={item}
className="w-full p-3 bg-zinc-900 rounded"
/>

))}

<select
  name="fuel"
  value={form.fuel || ""}
  onChange={handleChange}
  className="w-full p-3 bg-zinc-900 rounded"
>
  <option value="">燃料</option>
  <option value="ガソリン">ガソリン</option>
  <option value="ハイブリッド">ハイブリッド</option>
  <option value="ディーゼル">ディーゼル</option>
  <option value="EV">EV</option>
</select>
<select
  name="repair_history"
  value={form.repair_history || ""}
  onChange={handleChange}
  className="w-full p-3 bg-zinc-900 rounded"
>
  <option value="">修復歴</option>
  <option value="なし">なし</option>
  <option value="あり">あり</option>
  <option value="わからない">わからない</option>
</select>
<select
  name="warranty"
  value={form.warranty || ""}
  onChange={handleChange}
  className="w-full p-3 bg-zinc-900 rounded"
>
  <option value="">保証</option>
  <option value="あり">あり</option>
  <option value="なし">なし</option>
  
</select>

<select
  name="maintenance"
  value={form.maintenance || ""}
  onChange={handleChange}
  className="w-full p-3 bg-zinc-900 rounded"
>
 <option value="">法定整備</option>
<option value="点検整備付">点検整備付</option>
<option value="整備なし">整備なし</option>
</select>

<textarea
name="description"
value={form.description || ""}
onChange={handleChange}
placeholder="コメント"
className="w-full p-3 bg-zinc-900 rounded h-32"
/>



<label>

<input
type="checkbox"
checked={form.featured || false}
onChange={(e)=>
setForm({
...form,
featured:e.target.checked
})
}
/>

</label>


<div className="mt-6">

  <h2 className="text-lg font-bold mb-3">
    車両画像
  </h2>


  <label className="inline-block cursor-pointer bg-white text-black px-4 py-2 rounded">
    {uploading ? "アップロード中..." : "画像を追加"}

    <input
      type="file"
      accept="image/*"
      multiple
      onChange={uploadImages}
      className="hidden"
      disabled={uploading}
    />

  </label>


  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

    {images.map((img,index)=>(

      <div
        key={img}
        className="relative border rounded overflow-hidden"
      >

        <img
          src={img}
          alt={`car-${index}`}
          className="w-full h-32 object-cover"
        />


        {index === 0 && (
          <span className="absolute top-1 left-1 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
            メイン
          </span>
        )}


        <button
          type="button"
          onClick={() => deleteImage(img)}
          className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
        >
          削除
        </button>


        <div className="absolute bottom-1 left-1 flex gap-1">

          <button
            type="button"
            onClick={() => moveImage(index,"left")}
            className="bg-gray-800 text-white text-xs px-2 py-1 rounded"
          >
            ←
          </button>


          <button
            type="button"
            onClick={() => moveImage(index,"right")}
            className="bg-gray-800 text-white text-xs px-2 py-1 rounded"
          >
            →
          </button>

        </div>


      </div>

    ))}

  </div>

</div>


<button
disabled={loading}
className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold"
>

{loading ? "更新中..." : "保存"}

</button>


</form>


</main>

)

}