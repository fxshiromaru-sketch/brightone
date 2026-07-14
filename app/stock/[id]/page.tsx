import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";

import Gallery from "@/components/stock/Gallery";
import ContactBox from "@/components/stock/ContactBox";
import SpecTable from "@/components/stock/SpecTable";
import SalePoint from "@/components/stock/SalePoint";
import Equipment from "@/components/stock/Equipment";

import PriceCard from "./PriceCard";
import ContactButtons from "./ContactButtons";

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

<div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_350px] gap-10">

<div>

<Gallery images={car.images || []} />

<div className="mt-8">

<p className="text-zinc-500 tracking-widest text-sm">

{car.maker}

</p>

<h1 className="text-4xl font-bold mt-2">

{car.name}

</h1>

</div>

<div className="mt-8">

<PriceCard

price={car.price}

totalPrice={car.total_price}

/>

</div>
</div>


{/* ======================
    車両情報
====================== */}

<div className="mt-12">

  <SpecTable car={car} />

</div>

{/* ======================
    セールスポイント
====================== */}

<div className="mt-12">

  <SalePoint
    description={car.description}
  />

</div>

{/* ======================
    装備
====================== */}

<div className="mt-12">

  <Equipment
    car={car}
  />

</div>

{/* ======================
    問い合わせ
====================== */}

<div className="mt-12">

  <ContactButtons
    carName={`${car.maker} ${car.name}`}
  />

</div>

</div>

{/* ======================
    右サイド
====================== */}

<div>

  <div className="sticky top-24">

    <ContactBox
      car={car}
    />

  </div>

</div>

</div>

</main>

);

}
