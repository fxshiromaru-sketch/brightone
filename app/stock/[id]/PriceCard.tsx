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
     bg-zinc-100
border
border-yellow-500
text-black
      rounded-2xl
      overflow-hidden
      shadow-xl
      "
    >


      {/* タイトル */}

      <div
        className="
        border-b
        border-yellow-500/40
        px-6
        py-3
        "
      >

        <p
          className="
          text-sm
          text-zinc-600
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
        py-6
        "
      >

        <div
          className="
          text-5xl
          font-bold
          text-black
          "
        >

          {totalPrice
            ? `${Math.floor(totalPrice / 10000)}万円`
            : "-"}

        </div>


        <p
          className="
          mt-2
          text-yellow-400
          text-sm
          "
        >

          諸費用込み

        </p>


      </div>




      {/* 内訳 */}

      <div
        className="
        bg-white
border-t
border-zinc-300
        px-6
        py-4
        space-y-2
        "
      >


        <div
          className="
          flex
          justify-between
          text-sm
          "
        >

          <span className="text-zinc-400">
            車両本体価格
          </span>


          <span className="font-bold">
            {price
              ? `${Math.floor(price / 10000)}万円`
              : "-"
            }
          </span>


        </div>



        <div
          className="
          flex
          justify-between
          text-sm
          "
        >

          <span className="text-zinc-400">
            諸費用
          </span>


          <span className="font-bold">
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