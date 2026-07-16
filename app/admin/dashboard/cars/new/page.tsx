"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import ImageManager from "@/components/admin/ImageManager";


export default function NewCarPage() {
const [carImages,setCarImages] = useState<string[]>([]);
  const router = useRouter();
const [images, setImages] = useState<File[]>([]);
  const [form, setForm] = useState({
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

const imageUrls = carImages;



const { error } = await supabase
  .from("cars")
  .insert([
    {
      maker: form.maker,
      name: form.name,
      price: Number(form.price),
      total_price: Number(form.total_price),
      status: "published",
      year: form.year,
      mileage: form.mileage,
      inspection: form.inspection,
      transmission: form.transmission,
      drive: form.drive,
  color: form.color,
fuel: form.fuel,
displacement: form.displacement,
capacity: form.capacity,
doors: form.doors,
repair_history: form.repair_history,
warranty: form.warranty,
maintenance: form.maintenance,
recycle_fee: form.recycle_fee,
chassis_number: form.chassis_number,
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
className="space-y-6"
>
<div className="grid md:grid-cols-2 gap-4">

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
</div>

<div className="grid md:grid-cols-2 gap-4">

<input
name="price"
type="number"
placeholder="価格（例：2500000）"
value={form.price}
onChange={handleChange}
className="border p-3 w-full"
/>
<input
  name="total_price"
  type="number"
  placeholder="支払総額（例：2698000）"
  value={form.total_price}
  onChange={handleChange}
  className="border p-3 w-full"
/>

</div>

<div className="grid md:grid-cols-2 gap-4">

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
</div>
<div className="grid md:grid-cols-2 gap-4">
<input
name="inspection"
placeholder="車検"
value={form.inspection}
onChange={handleChange}
className="border p-3 w-full"
/>
<input
name="displacement"
placeholder="排気量"
value={form.displacement}
onChange={handleChange}
className="border p-3 w-full"
/>
</div>

<div className="grid md:grid-cols-2 gap-4">


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

</div>

<div className="grid md:grid-cols-2 gap-4">

<input
name="color"
placeholder="カラー"
value={form.color}
onChange={handleChange}
className="border p-3 w-full"
/>
<select
  name="fuel"
  value={form.fuel}
  onChange={(e)=>
    setForm({
      ...form,
      fuel:e.target.value
    })
  }
  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
>

  <option value="">燃料</option>
  <option value="ガソリン">ガソリン</option>
  <option value="ハイブリッド">ハイブリッド</option>
  <option value="ディーゼル">ディーゼル</option>
  <option value="EV">EV</option>

</select>
</div>

<div className="grid md:grid-cols-2 gap-4">

<input
  name="capacity"
  placeholder="乗車定員"
  value={form.capacity}
  onChange={handleChange}
  className="border p-3 w-full"
/>

<input
  name="doors"
  placeholder="ドア数"
  value={form.doors}
  onChange={handleChange}
  className="border p-3 w-full"
/>

</div>

<div className="grid md:grid-cols-2 gap-4">

<select
  name="repair_history"
  value={form.repair_history}
  onChange={(e)=>
    setForm({
      ...form,
      repair_history:e.target.value
    })
  }
  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
>

<option value="">修復歴</option>
<option value="なし">なし</option>
<option value="あり">あり</option>

</select>

<select
  name="warranty"
  value={form.warranty}
  onChange={(e)=>
    setForm({
      ...form,
      warranty:e.target.value
    })
  }
  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
>

<option value="">保証</option>
<option value="あり">あり</option>
<option value="なし">なし</option>
<option value="わからない">
わからない
</option>
</select>

</div>

<div className="grid md:grid-cols-2 gap-4">

<select
  name="maintenance"
  value={form.maintenance}
  onChange={(e)=>
    setForm({
      ...form,
      maintenance:e.target.value
    })
  }
  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
>

<option value="">法定整備</option>
<option value="実施済">実施済</option>
<option value="実施なし">実施なし</option>

</select>

<input
  name="recycle_fee"
  placeholder="リサイクル料"
  value={form.recycle_fee}
  onChange={handleChange}
  className="border p-3 w-full"
/>

</div>

<input
  name="chassis_number"
  placeholder="車台番号（下3桁）"
  value={form.chassis_number}
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



<div className="mt-10">

<ImageManager
  images={carImages}
  onChange={(images)=>{
    setCarImages(images);
  }}
/>

</div>
<button
disabled={loading}
className="bg-black text-white px-6 py-3 rounded"
>

{loading ? "保存中..." : "保存"}

</button>
</form>

</div>

)

}