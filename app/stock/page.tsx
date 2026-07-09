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

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-10">
          Bright One 在庫車両
        </h1>

        <div className="grid gap-8 md:grid-cols-3">

          {cars?.map((car) => (

            <div
              key={car.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >

              {car.images?.[0] && (

                <img
                  src={car.images[0]}
                  alt={car.name || "車両画像"}
                  className="w-full h-64 object-cover rounded-xl"
                />

              )}

              <div className="p-5">

                <h2 className="text-xl font-bold">
                  {car.maker} {car.name}
                </h2>

                <p className="mt-3 text-yellow-400 text-2xl font-bold">
                  {car.price
                    ? `${Number(car.price).toLocaleString()}円（税込）`
                    : "価格相談"}
                </p>

                <p>
                  年式：{car.year}
                </p>

                <p>
                  走行距離：{car.mileage}
                </p>

                <Link
                  href={`/stock/${car.id}`}
                  className="inline-block mt-5 bg-yellow-500 text-black px-5 py-2 rounded-xl font-bold"
                >
                  詳細を見る
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}