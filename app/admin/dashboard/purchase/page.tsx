import Link from "next/link";
import { supabase } from "@/lib/supabase";


export default async function PurchaseDashboardPage() {


  const {
    data,
    error
  } = await supabase
    .from("purchase_requests")
    .select("*")
    .order(
      "created_at",
      {
        ascending:false
      }
    );



  if(error){

    console.error(error);

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


        <h1
          className="
          text-4xl
          font-bold
          mb-10
          "
        >

          買取査定管理

        </h1>




        <div
          className="
          space-y-5
          "
        >


        {
          data?.map((item)=>(


            <Link

              key={item.id}

             href={`/admin/dashboard/purchase/${item.id}`}
              className="
              block
              bg-zinc-900
              rounded-2xl
              p-6
              hover:border
              hover:border-yellow-500
              transition
              "

            >



              <div
                className="
                flex
                justify-between
                flex-wrap
                gap-4
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


                </div>




                <div
                  className="
                  text-right
                  "
                >


                  <p
                    className="
                    bg-yellow-500
                    text-black
                    px-4
                    py-1
                    rounded-full
                    font-bold
                    inline-block
                    "
                  >

                    {item.status}

                  </p>


                  <p
                    className="
                    text-sm
                    text-zinc-400
                    mt-3
                    "
                  >

                    {
                      new Date(
                        item.created_at
                      )
                      .toLocaleDateString(
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
          !data?.length && (

            <p
              className="
              text-zinc-400
              "
            >
              査定依頼はありません

            </p>

          )
        }



        </div>



      </div>



    </main>

  );


}