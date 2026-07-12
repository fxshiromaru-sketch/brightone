"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {

const [cars, setCars] = useState<any[]>([]);
const [purchaseCount, setPurchaseCount] = useState(0);
const [recentPurchases, setRecentPurchases] = useState<any[]>([]);
const [deleting, setDeleting] = useState(false);
useEffect(() => {

  getCars();
  async function getPurchaseData(){


  const {
    data,
    error,
    count
  } = await supabase

    .from("purchase_requests")

    .select("*", {
      count:"exact"
    })

    .order(
      "created_at",
      {
        ascending:false
      }
    )
    .limit(3);



  if(error){

    console.log(error);

    return;

  }



  setPurchaseCount(
    count || 0
  );


  setRecentPurchases(
    data || []
  );


}
  getPurchaseData();

  async function getPurchaseCount(){

  const {
    count,
    error
  } = await supabase
    .from("purchase_requests")
    .select("*", {
      count:"exact",
      head:true
    });


  if(error){

    console.log(error);
    return;

  }


  setPurchaseCount(
    count || 0
  );

}
  getPurchaseCount();

}, []);


  async function getCars(){

    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("created_at", {
        ascending:false
      });


    if(error){

      console.log(error);
      return;

    }


    setCars(data || []);

  }
async function deleteCar(id:string){

  const result = confirm(
    "この車両を削除しますか？"
  );

  if(!result){
    return;
  }


  const { error } = await supabase
    .from("cars")
    .delete()
    .eq("id", id);


  if(error){

    alert(error.message);
    return;

  }


  alert("削除しました");

  getCars();

}
async function toggleSold(car:any){

 const newStatus =
  car.status === "sold"
    ? "published"
    : "sold";


  const { error } = await supabase
    .from("cars")
    .update({
      status: newStatus,
    })
    .eq("id", car.id);


  if(error){

    alert(error.message);
    return;

  }


  getCars();

}
 const publicCars = cars.filter(
  (car)=> car.status !== "sold"
);

  const featuredCars = cars.filter(
    (car)=> car.featured
  );




const soldCars = cars.filter(
(car)=> car.status === "sold"
);


return (

<main className="min-h-screen bg-black text-white p-10">


<h1 className="text-4xl font-bold mb-8">
Bright One 管理画面
</h1>


<div className="grid gap-6 md:grid-cols-4">


<div className="bg-zinc-900 rounded-2xl p-6">

<h2 className="text-xl font-bold">
🚗 公開中
</h2>

<p className="text-4xl mt-4">
{publicCars.length}台
</p>

</div>



<div className="bg-zinc-900 rounded-2xl p-6">

<h2 className="text-xl font-bold">
⭐ おすすめ
</h2>

<p className="text-4xl mt-4">
{featuredCars.length}台
</p>

</div>



<div className="bg-zinc-900 rounded-2xl p-6">

<h2 className="text-xl font-bold">
🔴 SOLD OUT
</h2>

<p className="text-4xl mt-4">
{soldCars.length}台
</p>

</div>
<div className="bg-zinc-900 rounded-2xl p-6">

<h2 className="text-xl font-bold">
💰 買取査定
</h2>

<p className="text-4xl mt-4">
{purchaseCount}件
</p>


<Link

href="/admin/dashboard/purchase"

className="
inline-block
mt-4
text-yellow-500
hover:text-yellow-400
"

>

査定管理へ →

</Link>


</div>

</div>


<div className="mt-10">

<Link
href="/admin/new"
className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl"
>

＋ 新しい車を登録

</Link>

</div>
<div className="mt-10">


<h2 className="text-2xl font-bold mb-5">

最近の査定依頼

</h2>



<div className="grid gap-5 md:grid-cols-3">


{
recentPurchases.map((item)=>(


<Link

key={item.id}

href={`/admin/dashboard/purchase/${item.id}`}

className="
bg-zinc-900
rounded-xl
p-5
hover:border
hover:border-yellow-500
transition
"

>


<h3 className="text-xl font-bold">

{item.car_name}

</h3>



<p className="text-zinc-400 mt-2">

{item.name}

</p>



<span className="
inline-block
mt-3
bg-yellow-500
text-black
px-3
py-1
rounded-full
text-sm
font-bold
">

{item.status}

</span>


</Link>


))

}


</div>


</div>
<div className="mt-6 flex gap-4 flex-wrap">


<Link

href="/admin/dashboard/purchase"

className="
bg-zinc-800
px-6
py-3
rounded-xl
hover:border
hover:border-yellow-500
"

>

🚗 買取査定管理

</Link>



<Link

href="/admin/new"

className="
bg-zinc-800
px-6
py-3
rounded-xl
hover:border
hover:border-yellow-500
"

>

＋ 車両登録

</Link>


</div>

<div className="mt-10">

<h2 className="text-2xl font-bold mb-5">
登録車両一覧
</h2>


<div className="grid gap-5 md:grid-cols-3">


{cars.map((car)=>(


<div
key={car.id}
className="bg-zinc-900 rounded-xl p-5"
>
{car.images?.[0] && (
  <img
    src={car.images[0]}
    alt={car.name}
    className="w-full h-48 object-cover rounded-xl mb-4"
  />
)}

<h3 className="text-xl font-bold">
{car.maker} {car.name}
</h3>


車両価格：
{car.price
 ? `${Math.floor(car.price / 10000)}万円（税込）`
 : ""}

<p>
支払総額：
{car.total_price
 ? `${Math.floor(car.total_price / 10000)}万円（税込）`
 : ""}
</p>

<p>
年式：{car.year}
</p>


<p>
走行距離：{car.mileage}
</p>
<div className="flex gap-3 mt-5 flex-wrap">

<Link
href={`/admin/edit/${car.id}`}
className="bg-yellow-500 text-black px-4 py-2 rounded"
>
編集
</Link>


<button
onClick={()=>deleteCar(car.id)}
className="bg-red-600 text-white px-4 py-2 rounded"
>
削除
</button>


<button
onClick={()=>toggleSold(car)}
className="bg-gray-700 text-white px-4 py-2 rounded"
>
{car.status === "sold"
 ? "掲載中に戻す"
 : "SOLD OUT"}
</button>


</div>
</div>


))}


</div>

</div>


</main>

)
 }
