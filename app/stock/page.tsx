import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";
import StockCard from "@/components/stock/StockCard";
import Footer from "@/components/Footer";
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

      {/* タイトル */}
      <section className="pt-32 pb-10 border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            在庫車一覧
          </h1>

          <p className="text-zinc-400 mt-4">
            Bright One 厳選中古車
          </p>

          <div className="mt-6 text-sm text-zinc-500">
            全 {cars?.length ?? 0} 台掲載
          </div>

        </div>

      </section>

      {/* 在庫一覧 */}
      <section className="py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="space-y-8">

            {cars?.map((car) => (

              <StockCard
                key={car.id}
                car={car}
              />

            ))}

          </div>

        </div>

      </section>

<Footer />
    </main>

  );

}