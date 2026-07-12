import Link from "next/link";
import { supabase } from "@/lib/supabase";


export default async function PurchaseDashboardPage() {


  const {
    data: requests,
    error
  } = await supabase
    .from("purchase_requests")
    .select("*")
    .order(
      "created_at",
      {
        ascending: false
      }
    );



  if (error) {

    console.error(
      "査定一覧取得エラー:",
      error
    );

  }



  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      p-6
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        "
      >



        <div
          className="
          flex
          justify-between
          items-center
          mb-10
          "
        >


          <h1
            className="
            text-3xl
            md:text-4xl
            font-bold
            "
          >

            買取査定管理

          </h1>



          <Link

            href="/admin/dashboard"

            className="
            text-sm
            text-zinc-400
            hover:text-yellow-500
            transition
            "

          >

            ← Dashboardへ戻る

          </Link>


        </div>





        <div
          className="
          space-y-5
          "
        >



          {
            requests?.map((item)=>(


              <Link

                key={item.id}

                href={
                  `/admin/dashboard/purchase/${item.id}`
                }

                className="
                block
                bg-zinc-900
                rounded-2xl
                p-6
                border
                border-transparent
                hover:border-yellow-500
                transition
                "

              >



                <div
                  className="
                  flex
                  flex-col
                  md:flex-row
                  md:justify-between
                  gap-5
                  "
                >



                  <div>


                    <h2
                      className="
                      text-xl
                      font-bold
                      "
                    >

                      {item.car_name}

                    </h2>



                    <p
                      className="
                      text-zinc-400
                      mt-2
                      "
                    >

                      {item.name}

                    </p>



                    <p
                      className="
                      text-zinc-500
                      text-sm
                      mt-1
                      "
                    >

                      {item.phone}

                    </p>


                  </div>






                  <div
                    className="
                    md:text-right
                    "
                  >



                    <span
                      className="
                      inline-block
                      bg-yellow-500
                      text-black
                      px-4
                      py-1
                      rounded-full
                      font-bold
                      text-sm
                      "
                    >

                      {item.status}

                    </span>



                    <p
                      className="
                      text-zinc-400
                      text-sm
                      mt-3
                      "
                    >

                      {
                        new Date(
                          item.created_at
                        )
                        .toLocaleString(
                          "ja-JP"
                        )
                      }


                    </p>



                  </div>



                </div>



              </Link>


            ))
          }





          {
            (!requests || requests.length === 0) && (


              <div
                className="
                bg-zinc-900
                rounded-2xl
                p-10
                text-center
                text-zinc-400
                "
              >

                現在、査定依頼はありません。


              </div>


            )
          }





        </div>



      </div>



    </main>

  );

}