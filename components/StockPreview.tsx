import Link from "next/link";
import { supabase } from "@/lib/supabase";


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



  return (

<section className="py-20 px-5 md:px-10 bg-black text-white">


<div className="max-w-6xl mx-auto">


{/* タイトル */}

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





{/* 横スクロール */}

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



<p className="text-yellow-400 text-xl font-bold mt-3">

{car.price
?
`${Math.floor(car.price / 10000)}万円`
:
"-"
}

</p>



</div>


</Link>


))}



</div>


</div>


</section>

  );

}