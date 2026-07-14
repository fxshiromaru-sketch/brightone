import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import PriceCard from "./PriceCard";
import InfoCard from "./InfoCard";
import CommentBox from "./CommentBox";
import ContactButtons from "./ContactButtons";
import Gallery from "@/components/stock/Gallery";
import ContactBox from "@/components/stock/ContactBox";
import SalePoint from "@/components/stock/SalePoint";
import Equipment from "@/components/stock/Equipment";


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


<div className="pt-28 px-5 md:px-10">


<div className="max-w-7xl mx-auto">

<div className="grid lg:grid-cols-3 gap-10">
<Gallery images={car.images || []} />



{/* =====================
    車名
===================== */}



<div className="mt-10">


<p className="text-zinc-500 text-xs tracking-widest">

{car.maker}

</p>



<h1 className="text-3xl md:text-4xl font-bold mt-2">
{car.name}

</h1>



</div>





{/* =====================
    価格
===================== */}









{/* =====================
    車両情報
===================== */}



<div className="mt-10">


<h2 className="text-2xl font-bold mb-5">

車両情報

</h2>



<div className="grid grid-cols-2 md:grid-cols-3 gap-4">



<InfoCard
title="年式"
value={car.year}
/>


<InfoCard
title="走行距離"
value={car.mileage}
/>


<InfoCard
title="車検"
value={car.inspection}
/>


<InfoCard
title="ミッション"
value={car.transmission}
/>


<InfoCard
title="駆動方式"
value={car.drive}
/>


<InfoCard
title="燃料"
value={car.fuel}
/>


<InfoCard
title="排気量"
value={car.displacement}
/>


<InfoCard
title="修復歴"
value={car.repair_history}
/>


<InfoCard
title="保証"
value={car.warranty}
/>


<InfoCard
title="法定整備"
value={car.maintenance}
/>


<InfoCard
title="定員"
value={car.capacity}
/>


<InfoCard
title="ドア数"
value={car.doors}
/>



</div>


</div>



{/* =====================
    販売店コメント
===================== */}

<SalePoint
  description={car.description}
/>

<Equipment car={car} />

{/* =====================
    問い合わせ
===================== */}


<ContactButtons
  carName={`${car.maker} ${car.name}`}
/>

    </div>

    <div>

      <ContactBox car={car} />

    </div>

  </div>

</div>


</main>


  );

}