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
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      overflow-hidden
      shadow-xl
      "
    >


      {/* 支払総額タイトル */}

      <div
        className="
        bg-yellow-500
        px-6
        py-3
        "
      >

        <p
          className="
          text-black
          text-base
          font-bold
          tracking-widest
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
        "
      >

        <p
          className="
          text-zinc-400
          text-sm
          mb-2
          "
        >

          お支払い総額

        </p>


        <div
          className="
          text-5xl
          font-black
          text-white
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
        border-zinc-700
        px-6
        py-5
        space-y-5
        "
      >



        {/* 車両価格 */}

        <div
          className="
          flex
          justify-between
          items-center
          "
        >

          <span
            className="
            text-zinc-400
            text-base
            "
          >
            車両本体価格
          </span>


          <span
            className="
            text-white
            text-xl
            font-bold
            "
          >

            {price
              ? `${Math.floor(price / 10000)}万円`
              : "-"
            }

          </span>


        </div>





        {/* 諸費用 */}

        <div
          className="
          flex
          justify-between
          items-center
          "
        >

          <span
            className="
            text-zinc-400
            text-base
            "
          >

            諸費用

          </span>


          <span
            className="
            text-white
            text-xl
            font-bold
            "
          >

            {expense
              ? `${Math.floor(expense / 10000)}万円`
              : "-"
            }

          </span>


        </div>



      </div>


    </div>

  );

}