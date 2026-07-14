import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Gallery from "@/components/stock/Gallery";
import ContactBox from "@/components/stock/ContactBox";
import SalePoint from "@/components/stock/SalePoint";
import Equipment from "@/components/stock/Equipment";
import SpecTable from "@/components/stock/SpecTable";
import CoatingPlan from "@/components/stock/CoatingPlan";
import Footer from "@/components/Footer";
export default async function StockDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const { data: car } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (!car) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        車両が見つかりません
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <Header />

      <div className="pt-28 px-5 md:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* 左側 */}
            <div className="lg:col-span-2">

              <Gallery images={car.images || []} />

              <div className="mt-8">

                <p className="text-zinc-400 tracking-widest text-sm">
                  {car.maker}
                </p>

                <h1 className="text-4xl font-bold mt-2">
                  {car.name}
                </h1>

              </div>

              <SpecTable car={car} />

              <SalePoint
                description={car.description}
              />

              <Equipment
                car={car}
              />
<CoatingPlan
  car={car}
/>
            </div>

            {/* 右側 */}
            <div>

              <ContactBox
                car={car}
              />

            </div>

          </div>

        </div>

      </div>
<Footer />
    </main>
  );
}