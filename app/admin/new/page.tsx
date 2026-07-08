"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewCarPage() {

  const router = useRouter();
const [images, setImages] = useState<File[]>([]);
  const [form, setForm] = useState({
    maker: "",
    name: "",
    price: "",
    year: "",
    mileage: "",
    inspection: "",
    transmission: "",
    drive: "",
    color: "",
    description: "",
    featured: false,
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

  };


  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);


  // 画像URL保存用
const imageUrls: string[] = [];


// 画像アップロード
for (const image of images) {

  const fileName = `${Date.now()}-${image.name}`;


  const { error: uploadError } = await supabase.storage
    .from("car-images")
    .upload(fileName, image);


  if(uploadError){

    alert(uploadError.message);
    setLoading(false);
    return;

  }


  const { data } = supabase.storage
    .from("car-images")
    .getPublicUrl(fileName);


  imageUrls.push(
    data.publicUrl
  );

}




const { error } = await supabase
  .from("cars")
  .insert([
    {
      maker: form.maker,
      name: form.name,
      price: Number(form.price),
      status: "published",
      year: form.year,
      mileage: form.mileage,
      inspection: form.inspection,
      transmission: form.transmission,
      drive: form.drive,
      color: form.color,
      description: form.description,
      featured: form.featured,
      images: imageUrls,
    },
  ]);


    if(error){

      alert(error.message);
      setLoading(false);
      return;

    }


    alert("車両を登録しました");

    router.push("/admin");

  };


return (

<div className="max-w-3xl mx-auto p-8">

<h1 className="text-3xl font-bold mb-8">
車両登録
</h1>


<form
onSubmit={handleSubmit}
className="space-y-4"
>


<input
name="maker"
placeholder="メーカー"
value={form.maker}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="name"
placeholder="車名"
value={form.name}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="price"
type="number"
placeholder="価格（例：2500000）"
value={form.price}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="year"
placeholder="年式"
value={form.year}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="mileage"
placeholder="走行距離"
value={form.mileage}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="inspection"
placeholder="車検"
value={form.inspection}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="transmission"
placeholder="ミッション"
value={form.transmission}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="drive"
placeholder="駆動方式"
value={form.drive}
onChange={handleChange}
className="border p-3 w-full"
/>


<input
name="color"
placeholder="カラー"
value={form.color}
onChange={handleChange}
className="border p-3 w-full"
/>


<textarea
name="description"
placeholder="コメント"
value={form.description}
onChange={handleChange}
className="border p-3 w-full h-32"
/>


<label className="flex gap-2">

<input
type="checkbox"
checked={form.featured}
onChange={(e)=>
setForm({
...form,
featured:e.target.checked
})
}
/>

おすすめ車両

</label>


<button
disabled={loading}
className="bg-black text-white px-6 py-3 rounded"
>

{loading ? "保存中..." : "保存"}

</button>
<div>

<p className="mb-2">
写真
</p>

<input
type="file"
multiple
accept="image/*"
onChange={(e)=>{

 if(e.target.files){

  setImages(
   Array.from(e.target.files)
  );

 }

}}
className="w-full text-white bg-zinc-800 border border-zinc-600 rounded-xl p-3"
/>
{images.length > 0 && (

<p className="text-yellow-400 mt-2">
{images.length}枚選択中
</p>

)}
</div>

</form>

</div>

)

}