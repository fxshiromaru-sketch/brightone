import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

import { supabase } from "@/lib/supabase";


export default async function PurchaseResultDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;



  const { data: result, error } = await supabase
    .from("purchase_results")
    .select("*")
    .eq("id", id)
    .single();



  if (error || !result) {

    return (

      <main className="min-h-screen bg-black text-white">

        <Header />

        <div className="
          min-h-[60vh]
          flex
          items-center
          justify-center
        ">

          <div className="text-center">


            <h1 className="
              text-3xl
              font-bold
            ">
              買取実績が見つかりません
            </h1>


            <Link
              href="/purchase-results"
              className="
                inline-block
                mt-6
                text-yellow-400
              "
            >
              一覧へ戻る
            </Link>


          </div>


        </div>


        <MobileCTA />

        <Footer />

      </main>

    );

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



          <Link

            href="/purchase-results"

            className="
              text-sm
              text-gray-400
              hover:text-yellow-400
            "

          >

            ← 買取実績一覧へ戻る

          </Link>






          {/* タイトル */}

          <div className="mt-10">


            <p className="
              text-yellow-400
              mb-3
            ">

              {result.prefecture}
              {result.city}

            </p>



            <h1 className="
              text-4xl
              md:text-5xl
              font-bold
            ">

              {result.maker}
              {" "}
              {result.car_name}

            </h1>



          </div>







          {/* メイン画像 */}

          {result.images?.length > 0 && (
<div className="
  mt-10
  rounded-3xl
  overflow-hidden
  border
  border-white/10
  bg-black
">

         <img

  src={result.images[0]}

  alt={result.car_name ?? ""}

  className="
    w-full
    max-h-[600px]
    object-contain
    bg-black
  "

/>


            </div>

          )}







          {/* 車両情報 */}

          <div className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          ">


            <h2 className="
              text-2xl
              font-bold
              mb-8
            ">

              車両情報

            </h2>




            <div className="
              grid
              md:grid-cols-2
              gap-5
              text-gray-300
            ">



              {result.grade && (

                <p>
                  グレード：{result.grade}
                </p>

              )}



              {result.year && (

                <p>
                  年式：{result.year}
                </p>

              )}



              {result.mileage && (

                <p>
                  走行距離：{result.mileage}
                </p>

              )}



              {result.purchase_type && (

                <p>
                  買取方法：{result.purchase_type}
                </p>

              )}



            </div>



          </div>







          {/* コメント */}

          {result.comment && (

            <div className="
              mt-8
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
            ">


              <h2 className="
                text-2xl
                font-bold
                mb-5
              ">

                買取コメント

              </h2>



              <p className="
                whitespace-pre-line
                text-gray-300
                leading-relaxed
              ">

                {result.comment}

              </p>



            </div>

          )}








          {/* CTA */}

          <div className="
            mt-12
            text-center
          ">


            <Link

              href="/purchase"

              className="
                inline-flex
                rounded-full
                bg-yellow-400
                px-10
                py-4
                font-bold
                text-black
                transition
                hover:bg-yellow-300
              "

            >

              無料査定を依頼する

            </Link>


          </div>





        </div>


      </section>





      <MobileCTA />

      <Footer />


    </main>

  );

}