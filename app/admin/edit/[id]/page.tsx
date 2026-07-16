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


  useEffect(() => {

  async function load(){

    const { id } = await params;

    setId(id);

    getCar(id);

  }

  load();

}, []);

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
  <option value="わからない">わからない</option>
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

おすすめ車両

</label>



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