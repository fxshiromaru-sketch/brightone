import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import PurchaseSearch from "./PurchaseSearch";


type Props = {

  searchParams: Promise<{

    keyword?: string;

    status?: string;

  }>;

};




export default async function PurchaseDashboardPage({

  searchParams

}: Props) {



  const params = await searchParams;



  const keyword =
    params.keyword || "";


  const status =
    params.status || "";




  let query =
    supabaseAdmin

      .from("purchase_requests")

      .select("*")

      .order(
        "created_at",
        {
          ascending:false
        }
      );





  if(keyword){


    query =
      query.or(

        `
        name.ilike.%${keyword}%,
        car_name.ilike.%${keyword}%,
        phone.ilike.%${keyword}%
        `

      );

  }





  if(status){


    query =
      query.eq(
        "status",
        status
      );


  }





  const {

    data:requests,

    error

  } = await query;




  if(error){

    console.error(error);

  }





  const count =
    requests?.length || 0;




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
          mb-8
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
            text-zinc-400
            hover:text-yellow-500
            "

          >

            ← 戻る

          </Link>


        </div>





        <PurchaseSearch />





        <div
          className="
          bg-zinc-900
          rounded-xl
          px-5
          py-4
          mb-8
          "
        >

          現在の査定件数：

          <span
            className="
            text-yellow-500
            font-bold
            ml-2
            "
          >

            {count}件

          </span>


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

              className={`
              block
              rounded-2xl
              p-6
              transition
              ${
                item.status === "受付"
                ?
                "bg-zinc-800 border border-yellow-500"
                :
                "bg-zinc-900"
              }
              hover:border
              hover:border-yellow-500
              `}

            >




              <div
                className="
                flex
                flex-col
                md:flex-row
                gap-5
                md:justify-between
                "
              >





                <div
                  className="
                  flex
                  gap-5
                  "
                >



                  {
                    item.images?.[0] && (

                      <img

                        src={
                          item.images[0]
                        }

                        alt="車両"

                        className="
                        w-24
                        h-24
                        rounded-xl
                        object-cover
                        "
                      />

                    )
                  }




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
                      "
                    >

                      {item.phone}

                    </p>


                  </div>



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
                    rounded-full
                    px-4
                    py-1
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
          count === 0 && (

            <div
              className="
              bg-zinc-900
              rounded-xl
              p-10
              text-center
              text-zinc-400
              "
            >

              査定依頼はありません

            </div>

          )
        }




        </div>



      </div>



    </main>

  );

}