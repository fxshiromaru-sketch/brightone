import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Gallery from "./Gallery";
import PriceCard from "./PriceCard";
import InfoCard from "./InfoCard";
import CommentBox from "./CommentBox";
import ContactButtons from "./ContactButtons";
export default async function StockDetailPage({
  params,
}: {
  params: Promise<{ id:string }>;
}) {
function InfoCard({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-yellow-500 transition">
      <p className="text-zinc-500 text-sm">
        {title}
      </p>

      <p className="text-xl font-bold text-white mt-2">
        {value || "-"}
      </p>
    </div>
  );
}

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

<PriceCard
  price={car.price}
  totalPrice={car.total_price}
/>


<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

  <InfoCard title="年式" value={car.year} />
  <InfoCard title="走行距離" value={car.mileage} />
  <InfoCard title="車検" value={car.inspection} />

  <InfoCard title="ミッション" value={car.transmission} />
  <InfoCard title="駆動方式" value={car.drive} />
  <InfoCard title="燃料" value={car.fuel} />

  <InfoCard title="排気量" value={car.displacement} />
  <InfoCard title="修復歴" value={car.repair_history} />
  <InfoCard title="保証" value={car.warranty} />

  <InfoCard title="法定整備" value={car.maintenance} />
  <InfoCard title="定員" value={car.capacity} />
  <InfoCard title="ドア数" value={car.doors} />

</div>
<CommentBox
  comment={car.description}
/>

</div>

</div>

</div>



</div>




<ContactButtons
  carName={`${car.maker} ${car.name}`}
/>




</main>

)

}