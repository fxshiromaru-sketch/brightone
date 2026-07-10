import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export const revalidate = 0;

export default async function StockPage() {

  const { data: cars } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="min-h-screen bg-black text-white">

      <Header />

     <div className="pt-32 px-10">

        <h1 className="text-4xl font-bold mb-10">
          在庫車両
        </h1>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

         {cars?.map((car) => (

 <div
  key={car.id}
  className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition duration-300"
>

    {/* 画像 */}
    <div className="relative">

      {car.images?.[0] && (
        <img
          src={car.images[0]}
          alt={car.name || "車両画像"}
          className={`w-full h-64 object-cover transition duration-500 group-hover:scale-105 ${
            car.status === "sold" ? "opacity-40" : ""
          }`}
        />
      )}

      {/* SOLD OUT */}
      {car.status === "sold" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-red-600 text-white text-2xl font-bold px-6 py-3 rounded-xl rotate-[-12deg] shadow-xl">
            SOLD OUT
          </span>
        </div>
      )}

      {/* NEW */}
      {car.featured && (
        <div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </div>
      )}

    </div>

    {/* 情報 */}
    <div className="p-6">

  <p className="text-sm text-zinc-400 tracking-widest">
  {car.maker}
</p>

<h2 className="text-3xl font-bold mt-1">
  {car.name}
</h2>

 <div className="mt-5 bg-black border border-zinc-700 rounded-xl p-5">

  <p className="text-xs uppercase tracking-widest text-zinc-400">
    PRICE
  </p>

  <p className="text-4xl font-extrabold text-yellow-400 mt-1">
    {car.price
      ? `${Math.floor(car.price / 10000)}万円`
      : ""}
  </p>

  <div className="border-t border-zinc-700 my-4"></div>

  <div className="flex justify-between text-sm">
    <span className="text-zinc-400">
      支払総額
    </span>

    <span className="font-bold text-white">
      {car.total_price
        ? `${Math.floor(car.total_price / 10000)}万円（税込）`
        : "-"}
    </span>

  </div>



</div>
<div className="grid grid-cols-2 gap-3 mt-6">

        <div>
          <span className="text-gray-500">年式</span>
          <p>{car.year}</p>
        </div>

        <div>
          <span className="text-gray-500">走行距離</span>
          <p>{car.mileage}</p>
        </div>

        <div>
          <span className="text-gray-500">車検</span>
          <p>{car.inspection}</p>
        </div>

        <div>
          <span className="text-gray-500">駆動</span>
          <p>{car.drive}</p>
        </div>

      </div>

      <Link
        href={`/stock/${car.id}`}
       className="mt-8 block text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition duration-300 hover:scale-[1.02]"
      >
        詳細を見る →
      </Link>

    </div>

  </div>

))}

        </div>

      </div>

    </main>
  );
}