import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";
import StockCard from "@/components/stock/StockCard";

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

      <div className="max-w-7xl mx-auto pt-32 px-5 md:px-8">

        <div className="mb-12">

          <h1 className="text-5xl font-black">
            在庫車一覧
          </h1>

          <p className="text-zinc-400 mt-4">
            Bright Oneの在庫車一覧です。
          </p>

          <div className="mt-6 inline-flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-3">

            <span className="text-zinc-400">
              掲載台数
            </span>

            <span className="text-yellow-400 text-3xl font-black">
              {cars?.length ?? 0}
            </span>

            <span className="text-zinc-400">
              台
            </span>

          </div>

        </div>

        <div className="space-y-8">

          {cars?.map((car) => (

            <StockCard
              key={car.id}
              car={car}
            />

          ))}

        </div>

      </div>

    </main>
  );

}