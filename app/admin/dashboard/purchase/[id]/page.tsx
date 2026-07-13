import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import StatusUpdate from "./StatusUpdate";
import DeleteButton from "./DeleteButton";

type Props = {

  params: Promise<{
    id:string;
  }>;

};




export default async function PurchaseDetailPage({
  params
}: Props) {



  const {
    id
  } = await params;




  const {
    data,
    error
  } = await supabaseAdmin

    .from("purchase_requests")

    .select("*")

    .eq(
      "id",
      id
    )

    .single();





  if(error || !data){

    return (

      <main
        className="
        min-h-screen
        bg-black
        text-white
        p-10
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          "
        >

          査定情報が見つかりません

        </h1>


      </main>

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
            font-bold
            "
          >

            査定詳細

          </h1>



          <Link

            href="/admin/dashboard/purchase"

            className="
            text-zinc-400
            hover:text-yellow-500
            "
          >

            ← 一覧へ戻る

          </Link>


        </div>





        <section
          className="
          bg-zinc-900
          rounded-2xl
          p-6
          mb-8
          "
        >


          <h2
            className="
            text-2xl
            font-bold
            mb-6
            "
          >

            車両情報

          </h2>



          <div
            className="
            grid
            md:grid-cols-2
            gap-4
            text-zinc-300
            "
          >

            <p>
              メーカー：
              {data.maker}
            </p>


            <p>
              車種：
              {data.car_name}
            </p>


            <p>
              年式：
              {data.year}
            </p>


            <p>
              走行距離：
              {data.mileage}
            </p>


            <p>
              車検：
              登録なし
              {data.inspection}
            </p>


            <p>
              修復歴：
              {data.repair_history}
            </p>


          </div>


        </section>





        <section
          className="
          bg-zinc-900
          rounded-2xl
          p-6
          mb-8
          "
        >


          <h2
            className="
            text-2xl
            font-bold
            mb-6
            "
          >

            お客様情報

          </h2>



          <div
            className="
            space-y-3
            text-zinc-300
            "
          >

            <p>
              名前：
              {data.name}
            </p>


            <p>
              電話：
              {data.phone}
            </p>


            <p>
              メール：
              {data.email}
            </p>


            <p>
              住所：
              {data.address}
            </p>


          </div>


        </section>






        <section
          className="
          bg-zinc-900
          rounded-2xl
          p-6
          mb-8
          "
        >


          <h2
            className="
            text-2xl
            font-bold
            mb-6
            "
          >

            車両写真

          </h2>




          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-5
            gap-4
            "
          >



            {
              data.images?.map(
                (
                  image:string,
                  index:number
                )=>(


                <img

                  key={index}

                  src={image}

                  alt={`vehicle-${index}`}

                  className="
                  rounded-xl
                  h-32
                  w-full
                  object-cover
                  "

                />


              ))
            }



          </div>



        </section>






        <section
          className="
          bg-zinc-900
          rounded-2xl
          p-6
          "
        >


          <h2
            className="
            text-2xl
            font-bold
            mb-4
            "
          >

            コメント

          </h2>



          <p
            className="
            text-zinc-300
            whitespace-pre-line
            "
          >

           {data.message || "なし"}

          </p>



          <div
            className="
            mt-6
            "
          >

            <span
              className="
              bg-yellow-500
              text-black
              px-4
              py-2
              rounded-full
              font-bold
              "
            >

              {data.status}

            </span>

           <StatusUpdate
  id={data.id}
  currentStatus={data.status}
/>

<DeleteButton
  id={data.id}
/>

          </div>

        </section>


      </div>



    </main>

  );

}