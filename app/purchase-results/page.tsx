import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

import { supabase } from "@/lib/supabase";


export default async function PurchaseResultsPage() {


  const { data: results, error } = await supabase
    .from("purchase_results")
    .select("*")
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    });



  if (error) {
    console.error(error);
  }



  return (

    <main className="min-h-screen bg-black text-white">


      <Header />



      <section className="py-24">


        <div className="
          max-w-5xl
          mx-auto
          px-6
        ">

<div className="text-center mb-16">


  <p className="
    text-yellow-400
    tracking-[0.35em]
    uppercase
    text-sm
  ">
    PURCHASE RESULTS
  </p>



  <h1 className="
    text-4xl
    md:text-5xl
    font-bold
    mt-4
  ">
    買取実績
  </h1>



  <p className="
    mt-6
    text-zinc-400
    leading-8
  ">
    地域のお客様から大切なお車を買取させていただいております。
    <br />
    スポーツカー・カスタムカー・低年式車まで幅広く対応しております。
  </p>



</div>






          <div className="
            space-y-8
          ">



            {results?.map((item, index) => (


              <Link

                key={item.id}

                href={`/purchase-results/${item.id}`}

                className="
                  group
                  block
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:border-yellow-400/50
                  hover:-translate-y-1
                "

              >




                <div className="
                  md:flex
                ">



                  {/* 画像 */}

                  <div className="
  md:w-1/3
  h-52
md:h-auto
  md:aspect-auto
  overflow-hidden
  bg-zinc-900
  relative
">


                    {index === 0 && (

                      <div className="
                        absolute
                        top-4
                        left-4
                        z-10
                        rounded-full
                        bg-yellow-400
                        px-4
                        py-1
                        text-xs
                        font-bold
                        text-black
                      ">
                        NEW
                      </div>

                    )}



                    <img

                      src={
                        item.images?.[0] ??
                        "https://placehold.co/800x600?text=No+Image"
                      }

                      alt={item.car_name ?? ""}
className="
  h-full
  w-full
  object-contain
  bg-black
  transition
  duration-500
  group-hover:scale-105
"

                    />


                  </div>







                  {/* 内容 */}

                  <div className="
                    flex-1
                    p-6
                    md:p-8
                  ">




                    <p className="
                      text-yellow-400
                      font-bold
                      text-sm
                    ">

                      {item.prefecture}
                      {item.city && ` ${item.city}`}

                    </p>




                    <p className="
                      mt-2
                      text-zinc-300
                    ">
                      のお客様より買取させていただきました
                    </p>






                    <h2 className="
                      mt-5
                      text-3xl
                      font-bold
                    ">

                      {item.maker}
                      {" "}
                      {item.car_name}

                    </h2>





                    {item.grade && (

                      <p className="
                        mt-2
                        text-zinc-400
                      ">
                        {item.grade}
                      </p>

                    )}







                    <div className="
                      mt-6
                      grid
                      grid-cols-2
                      gap-3
                      text-sm
                      text-zinc-300
                    ">



                      {item.year && (

                        <p>
                          年式：{item.year}
                        </p>

                      )}




                      {item.mileage && (

                        <p>
                          走行距離：{item.mileage}
                        </p>

                      )}



                    </div>






{item.comment && (

  <div className="
    mt-6
    rounded-xl
    bg-black/30
    p-4
    border
    border-white/5
  ">

    <p className="
      text-xs
      text-yellow-400
      font-bold
      mb-2
    ">
      買取ポイント
    </p>


    <p className="
      text-sm
      text-zinc-300
      leading-relaxed
      line-clamp-3
    ">
      {item.comment}
    </p>


  </div>

)}







                    <div className="
                      mt-8
                      text-yellow-400
                      font-bold
                    ">

                      詳細を見る →

                    </div>




                  </div>




                </div>



              </Link>



            ))}



          </div>




        </div>



      </section>





      <MobileCTA />

      <Footer />



    </main>

  );

}