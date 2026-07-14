import Link from "next/link";

type Props = {
  car: any;
};

export default function StockCard({ car }: Props) {


  const formatPrice = (value:number | string) => {

    if(!value) return null;

    const num = Number(value);

    return {
      number:(num / 10000).toFixed(1),
      unit:"万円"
    };

  };


  const total = formatPrice(car.total_price);
  const body = formatPrice(car.price);


  return (
    <Link
      href={`/stock/${car.id}`}
      className="block bg-zinc-900 rounded-2xl overflow:hidden border border-zinc-800 hover:border-yellow-500 transition duration-300"
    >

      <div className="md:flex">


        {/* 左：画像 */}
        <div className="relative md:w-[360px] flex-shrink-0">


          <img
            src={car.images?.[0] || "/noimage.jpg"}
            alt={car.name}
            className={`w-full h-[260px] object-cover ${
              car.status === "sold" ? "opacity-40" : ""
            }`}
          />


          {car.status === "sold" && (

            <div className="absolute inset-0 flex items-center justify-center">

              <span className="bg-red-600 text-white text-2xl font-bold px-6 py-3 rounded-xl">

                SOLD OUT

              </span>

            </div>

          )}



          {car.featured && (

            <div className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">

              NEW

            </div>

          )}


        </div>




        {/* 右：情報 */}

        <div className="flex-1 p-6">


          <p className="text-zinc-400 text-sm">

            {car.maker}

          </p>



          <h2 className="text-3xl font-bold mt-1">

            {car.name}

          </h2>





          <div className="mt-5 flex flex-wrap items-end gap-6">



            <div>


              <p className="text-zinc-400 text-sm">

                支払総額（税込）

              </p>



              <div className="flex items-end">


                <span className="text-yellow-400 text-5xl font-black leading-none">

                  {total?.number ?? "-"}

                </span>


                <span className="text-yellow-400 text-sm ml-1 mb-1">

                  {total?.unit}

                </span>


              </div>


            </div>





            <div>


              <p className="text-zinc-400 text-sm">

                車両本体価格（税込）

              </p>



              <div className="flex items-end">


                <span className="text-xl font-bold">

                  {body?.number ?? "-"}

                </span>


                <span className="text-xs ml-1 mb-1">

                  {body?.unit}

                </span>


              </div>


            </div>



          </div>





          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">


            <div>
              <div className="text-zinc-500">年式</div>
              <div>{car.year || "-"}</div>
            </div>


            <div>
              <div className="text-zinc-500">走行距離</div>
              <div>{car.mileage || "-"}</div>
            </div>


            <div>
              <div className="text-zinc-500">車検</div>
              <div>{car.inspection || "-"}</div>
            </div>


            <div>
              <div className="text-zinc-500">修復歴</div>
              <div>{car.repair_history || "-"}</div>
            </div>


            <div>
              <div className="text-zinc-500">ミッション</div>
              <div>{car.transmission || "-"}</div>
            </div>


            <div>
              <div className="text-zinc-500">駆動方式</div>
              <div>{car.drive || "-"}</div>
            </div>


            <div>
              <div className="text-zinc-500">排気量</div>
              <div>{car.displacement || "-"}</div>
            </div>


            <div>
              <div className="text-zinc-500">カラー</div>
              <div>{car.color || "-"}</div>
            </div>


          </div>





          <div className="mt-6 line-clamp-2 text-zinc-400">

            {car.description || "詳細ページをご覧ください。"}

          </div>




          <div className="mt-6 flex justify-end">

            <span className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">

              詳細を見る →

            </span>

          </div>


        </div>


      </div>

    </Link>
  );
}