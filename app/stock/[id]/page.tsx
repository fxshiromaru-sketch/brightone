import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";

export default async function StockDetailPage({
  params,
}: {
  params: Promise<{ id:string }>;
}) {


 const { id } = await params;

const { data: car, error } = await supabase
  .from("cars")
  .select("*")
  .eq("id", id)
  .single();

if (!car) {
  return (
    <main className="p-10">
      車両が見つかりません
    </main>
  );
}



return (

<main className="min-h-screen bg-black text-white">

<Header />

<div className="pt-30 px-10">

<div className="max-w-5xl mx-auto">


<div className="relative">

  {car.images?.[0] && (
    <img
      src={car.images[0]}
      alt={car.name || "車両画像"}
      className={`w-full h-64 object-cover ${
        car.status === "sold" ? "opacity-50" : ""
      }`}
    />
  )}

  {car.status === "sold" && (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="bg-red-600 text-white text-3xl font-bold px-6 py-3 rounded-xl rotate-[-12deg] shadow-lg">
        SOLD OUT
      </span>
    </div>
  )}

</div>

<div className="mt-12">






<h1 className="text-4xl font-bold mt-8">

{car.maker} {car.name}

</h1>



<div className="text-yellow-400 text-2xl font-bold">
  {car.price
    ? `${Math.floor(car.price / 10000)}万円（税込）`
    : ""}
</div>

<div className="text-sm text-white mt-2">
  支払総額：
  {car.total_price
    ? `${Math.floor(car.total_price / 10000)}万円（税込）`
    : ""}
</div>

<div className="grid md:grid-cols-2 gap-5 mt-8">


<p>
年式：{car.year}
</p>


<p>
走行距離：{car.mileage}
</p>


<p>
車検：{car.inspection}
</p>


<p>
ミッション：{car.transmission}
</p>


<p>
駆動方式：{car.drive}
</p>


<p>
カラー：{car.color}
</p>


</div>



<div className="mt-10">


<h2 className="text-2xl font-bold mb-3">
コメント
</h2>


<p className="whitespace-pre-wrap">
{car.description}
</p>


</div>


<div className="flex gap-10 mt-10 flex-wrap">
<a
href="tel:08055637830"
className="inline-block  bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl"
>
電話で問い合わせ
</a>


<a
href="https://line.me/ti/p/qd6RpQYTLe"
target="_blank"
className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl"
>
LINEで問い合わせ
</a>

</div>

</div>

<div className="mt-12"></div>
<h2 className="text-2xl font-bold mb-5">
その他の写真
</h2>

<div className="grid md:grid-cols-3 gap-5">

{car.images?.slice(1).map((image:string, index:number)=>(

<img
key={index}
src={image}
alt={`${car.name} ${index + 2}`}
className="w-full h-48 object-cover rounded-xl"
/>

))}

</div>

</div>
</div>
</main>

)

}