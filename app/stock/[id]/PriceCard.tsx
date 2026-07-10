type Props = {
  price?: number | null;
  totalPrice?: number | null;
};


export default function PriceCard({
  price,
  totalPrice,
}: Props) {


  const expense =
    totalPrice && price
      ? totalPrice - price
      : null;



  return (

    <div
      className="
      rounded-2xl
      overflow-hidden
      border
      border-zinc-300
      bg-white
      text-black
      shadow-xl
      "
    >


      {/* 黄色タイトル */}

      <div
        className="
        bg-yellow-500
        px-6
        py-4
        "
      >

        <p
          className="
          font-bold
          text-black
          text-lg
          "
        >
          支払総額（税込）
        </p>

      </div>




      {/* 総額 */}

      <div
        className="
        px-6
        py-7
        text-center
        "
      >

        <p className="text-sm text-zinc-500">
          お支払い総額
        </p>


        <div
          className="
          text-5xl
          font-black
          mt-2
          "
        >

          {totalPrice
            ? `${Math.floor(totalPrice / 10000)}万円`
            : "-"
          }

        </div>


      </div>




      {/* 内訳 */}

      <div
        className="
        border-t
        border-zinc-200
        px-6
        py-5
        space-y-5
        "
      >


        <div>

          <p className="text-sm text-zinc-500">
            車両本体価格
          </p>


          <p className="text-2xl font-bold">
            {price
              ? `${Math.floor(price / 10000)}万円`
              : "-"
            }
          </p>

        </div>




        <div>

          <p className="text-sm text-zinc-500">
            諸費用
          </p>


          <p className="text-2xl font-bold">
            {expense
              ? `${Math.floor(expense / 10000)}万円`
              : "-"
            }
          </p>

        </div>



      </div>


    </div>

  );

}