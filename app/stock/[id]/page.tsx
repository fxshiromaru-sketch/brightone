import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Gallery from "./Gallery";
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

<div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">

  {/* 左：画像 */}
  <div>

  <Gallery
  images={car.images || []}
  sold={car.status === "sold"}
/>

  </div>

  {/* 右：情報 */}

  <div>

    <p className="text-zinc-400 text-sm">
      {car.maker}
    </p>

    <h1 className="text-4xl font-bold mb-6">
      {car.name}
    </h1>

    {/* 車両価格 */}

    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

      <p className="text-zinc-400 text-sm">
        車両本体価格（税込）
      </p>

      <div className="text-4xl font-bold text-yellow-400">

        {car.price
          ? `${Math.floor(car.price / 10000)}万円`
          : "-"}

      </div>

      <div className="border-t border-zinc-700 my-5"></div>

      <p className="text-zinc-400 text-sm">
        支払総額（税込）
      </p>

      <div className="text-3xl font-bold">

        {car.total_price
          ? `${Math.floor(car.total_price / 10000)}万円`
          : "-"}

      </div>

    </div>


<div className="mt-8 overflow-hidden rounded-2xl border border-zinc-700">

  {[
    ["年式", car.year],
    ["走行距離", car.mileage],
    ["車検", car.inspection],
    ["排気量", car.displacement],
    ["燃料", car.fuel],
    ["ミッション", car.transmission],
    ["駆動方式", car.drive],
    ["カラー", car.color],
    ["乗車定員", car.capacity],
    ["ドア数", car.doors],
    ["修復歴", car.repair_history],
    ["保証", car.warranty],
    ["法定整備", car.maintenance],
    ["リサイクル料", car.recycle_fee],
    ["車台番号", car.chassis_number],
  ].map(([label, value], index) => (
    <div
      key={label}
      className="grid grid-cols-[140px_1fr]"
    >
      <div
        className={`bg-zinc-800 p-4 font-semibold border-r border-zinc-700 ${
          index !== 14 ? "border-b border-zinc-700" : ""
        }`}
      >
        {label}
      </div>

      <div
        className={`bg-zinc-900 p-4 ${
          index !== 14 ? "border-b border-zinc-700" : ""
        }`}
      >
        {value || "-"}
      </div>
    </div>
  ))}

</div>

</div>

</div>



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



</main>

)

}