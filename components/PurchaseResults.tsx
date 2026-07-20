import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function PurchaseResults() {

  const { data: results } = await supabase
    .from("purchase_results")
    .select("*")
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    })
    .limit(3);


  if (!results || results.length === 0) {
    return null;
  }



  return (

    <section className="py-24 bg-black text-white">


      <div className="max-w-7xl mx-auto px-6">



        <div className="text-center">


          <p className="
            text-yellow-400
            tracking-[0.35em]
            uppercase
            text-sm
          ">
            PURCHASE RESULTS
          </p>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-4
          ">
            最新の買取実績
          </h2>



          <p className="
            mt-6
            text-zinc-400
            max-w-3xl
            mx-auto
            leading-8
          ">
            Bright Oneで実際にお買取りさせていただいた車両をご紹介します。
            <br />
            スポーツカー・カスタムカー・低年式車まで幅広く対応しております。
          </p>


        </div>





        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          mt-14
        ">



          {results.map((item, index) => (


            <Link

              key={item.id}

              href={`/purchase-results/${item.id}`}

              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-white/5
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-400/50
              "

            >




              <div className="
                relative
                overflow-hidden
              ">



         <img

  src={
    item.images?.[0] ??
    "https://placehold.co/800x600?text=No+Image"
  }

  alt={item.car_name ?? ""}

  className="
    w-full
    h-56
    object-contain
    bg-black
  "

/>




                {index === 0 && (

                  <div className="
                    absolute
                    top-4
                    left-4
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



              </div>







              <div className="p-6">



                <p className="
                  text-sm
                  text-yellow-400
                ">

                  {item.prefecture}
                  {item.city && `・${item.city}`}

                </p>





                <h3 className="
                  mt-3
                  text-2xl
                  font-bold
                ">

                  {item.maker}
                  {" "}
                  {item.car_name}

                </h3>





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
                  flex
                  gap-5
                  text-sm
                  text-zinc-300
                ">



                  {item.year && (

                    <span>
                      年式 {item.year}
                    </span>

                  )}



                  {item.mileage && (

                    <span>
                      距離 {item.mileage}
                    </span>

                  )}



                </div>







                <div className="
                  mt-8
                  flex
                  justify-end
                  items-center
                  gap-2
                  text-yellow-400
                  font-bold
                  transition
                  duration-300
                  group-hover:translate-x-2
                ">

                  詳細を見る →

                </div>



              </div>




            </Link>


          ))}



        </div>







        <div className="
          flex
          justify-center
          mt-16
        ">


          <Link

            href="/purchase-results"

            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-yellow-500/40
              bg-yellow-500/10
              px-8
              py-4
              font-bold
              text-yellow-400
              transition-all
              duration-300
              hover:bg-yellow-400
              hover:text-black
            "

          >

            買取実績一覧を見る


            <span className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            ">
              →
            </span>


          </Link>


        </div>



      </div>


    </section>


  );

}