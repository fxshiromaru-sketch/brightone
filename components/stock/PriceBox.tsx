type Props = {
  total_price: number | string;
  price: number | string;
};

export default function PriceBox({
  total_price,
  price,
}: Props) {


  const formatPrice = (value: number | string) => {

    if (!value) return null;

    const num = Number(value);

    return {
      number: (num / 10000).toFixed(1),
      unit: "万円",
    };

  };


  const total = formatPrice(total_price);
  const body = formatPrice(price);


  const fee = formatPrice(
    Number(total_price) - Number(price)
  );



  return (

    <div className="mt-6 rounded-xl overflow-hidden border border-yellow-500">


      <div className="bg-yellow-500 text-black px-5 py-2 font-bold">

        支払総額（税込）

      </div>



      <div className="bg-zinc-900 p-5">



        {/* 支払総額 */}

        <div className="flex items-end">


          <span className="text-5xl font-black text-yellow-400 leading-none">

            {total?.number ?? "-"}

          </span>


          <span className="text-lg font-bold text-yellow-400 ml-1 mb-1">

            {total?.unit}

          </span>


        </div>





        <div className="grid grid-cols-2 gap-5 mt-6">



          {/* 車両本体価格 */}

          <div>


            <p className="text-zinc-400 text-sm">

              車両本体価格（税込）

            </p>



            <div className="flex items-end">


              <span className="text-2xl font-bold">

                {body?.number ?? "-"}

              </span>


              <span className="text-sm ml-1 mb-1">

                {body?.unit}

              </span>


            </div>


          </div>





          {/* 諸費用 */}

          <div>


            <p className="text-zinc-400 text-sm">

              諸費用

            </p>



            <div className="flex items-end">


              <span className="text-2xl font-bold">

                {fee?.number ?? "-"}

              </span>


              <span className="text-sm ml-1 mb-1">

                {fee?.unit}

              </span>


            </div>


          </div>



        </div>


      </div>


    </div>

  );

}