import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function StockPreview() {

  const { data: cars } = await supabase
    .from("cars")
    .select("*")
    .eq("featured", true)
    .order("created_at", {
      ascending: false
    })
    .limit(6);


  if (!cars || cars.length === 0) {

    return null;

  }


  const formatPrice = (value:number | string) => {

    if (!value) return null;

    const num = Number(value);

    return {
      number: (num / 10000).toFixed(1),
      unit: "万円"
    };

  };


  return (

<section className="py-20 px-5 md:px-10 bg-black text-white">

<div className="max-w-6xl mx-auto">


<div className="flex justify-between items-end mb-8">

<div>

<p className="text-yellow-400 text-sm font-bold tracking-widest">
STOCK
</p>


<h2 className="text-3xl md:text-4xl font-bold">
おすすめ車両
</h2>


</div>


<Link
href="/stock"
className="
text-sm
text-zinc-400
hover:text-yellow-400
transition
"
>

在庫一覧を見る →

</Link>


</div>




<div
className="
flex
gap-6
overflow-x-auto
pb-5
scrollbar-hide
"
>


{cars.map((car)=>(


<Link
key={car.id}
href={`/stock/${car.id}`}
className="
min-w-[280px]
bg-zinc-900
rounded-2xl
overflow-hidden
border
border-zinc-800
hover:border-yellow-500
transition
"
>


<div className="relative">

{car.images?.[0] && (

<img
src={car.images[0]}
alt={car.name}
className="
w-full
h-48
object-cover
"
/>

)}



{car.status === "sold" && (

<div
className="
absolute
inset-0
flex
items-center
justify-center
bg-black/40
"
>

<span
className="
bg-red-600
text-white
font-bold
text-xl
px-5
py-2
rounded-xl
rotate-[-10deg]
"
>

SOLD OUT

</span>

</div>

)}

</div>





<div className="p-5">


<p className="text-zinc-400 text-sm">

{car.maker}

</p>



<h3 className="text-xl font-bold mt-1">

{car.name}

</h3>




<div className="mt-4">


<p className="text-zinc-400 text-xs">
支払総額（税込）
</p>



<div className="flex items-end">


<span className="text-yellow-400 text-5xl font-black leading-none">

{formatPrice(car.total_price)?.number ?? "-"}

</span>


<span className="text-yellow-400 text-sm font-normal ml-1 mb-1">

{formatPrice(car.total_price)?.unit}

</span>


</div>





<p className="text-zinc-500 text-sm mt-3">

車両本体価格（税込）

</p>



<div className="flex items-end">


<span className="text-white text-xl font-bold">

{formatPrice(car.price)?.number ?? "-"}

</span>


<span className="text-white text-xs ml-1 mb-1">

{formatPrice(car.price)?.unit}

</span>


</div>


</div>





<div className="grid grid-cols-2 gap-3 mt-4">



<div className="bg-zinc-900 rounded-lg p-3">

<p className="text-xs text-zinc-400">
年式
</p>

<p className="font-bold">
{car.year || "-"}
</p>

</div>




<div className="bg-zinc-900 rounded-lg p-3">

<p className="text-xs text-zinc-400">
走行距離
</p>

<p className="font-bold">
{car.mileage || "-"}
</p>

</div>


</div>



</div>


</Link>


))}



</div>


</div>

</section>

  );

}