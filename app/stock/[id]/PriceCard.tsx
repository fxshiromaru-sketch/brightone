type Props = {
  price: number;
  totalPrice: number;
};

export default function PriceCard({
  price,
  totalPrice,
}: Props) {

  const expenses =
    totalPrice && price
      ? totalPrice - price
      : 0;

  return (

    <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg">

      {/* 支払総額 */}

      <div className="bg-yellow-500 text-black p-6">

        <p className="text-sm font-semibold uppercase tracking-widest">
          TOTAL PRICE
        </p>

        <div className="text-5xl font-extrabold mt-2">
          {totalPrice
            ? `${Math.floor(totalPrice / 10000)}万円`
            : "-"}
        </div>

        <p className="text-sm mt-2">
          支払総額（税込）
        </p>

      </div>

      {/* 本体価格 */}

      <div className="p-6 space-y-5">

        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">

          <span className="text-zinc-400">
            車両本体価格
          </span>

          <span className="text-2xl font-bold text-white">
            {price
              ? `${Math.floor(price / 10000)}万円`
              : "-"}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-zinc-400">
            諸費用
          </span>

          <span className="text-xl font-bold text-yellow-400">
            {expenses
              ? `${Math.floor(expenses / 10000)}万円`
              : "0万円"}
          </span>

        </div>

      </div>

    </div>

  );

}