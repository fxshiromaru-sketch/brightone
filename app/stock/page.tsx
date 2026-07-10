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
    className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition duration-300"
  >

    {/* 画像 */}
    <div className="relative">

      {car.images?.[0] && (
        <img
          src={car.images[0]}
          alt={car.name || "車両画像"}
          className={`w-full h-60 object-cover transition ${
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

      <p className="text-sm text-gray-400">
        {car.maker}
      </p>

      <h2 className="text-2xl font-bold mt-1">
        {car.name}
      </h2>

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
      <div className="grid grid-cols-2 gap-y-3 mt-6 text-sm">

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
        className="mt-8 block text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition"
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