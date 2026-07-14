type Props = {
  total_price: number;
  price: number;
};

export default function PriceBox({
  total_price,
  price,
}: Props) {

  const total = total_price
    ? `${Math.floor(total_price / 10000)}万円`
    : "-";

  const body = price
    ? `${Math.floor(price / 10000)}万円`
    : "-";

  const fee =
    total_price && price
      ? `${Math.floor((total_price - price) / 10000)}万円`
      : "-";

  return (

    <div className="mt-6 rounded-xl overflow-hidden border border-yellow-500">

      <div className="bg-yellow-500 text-black px-5 py-2 font-bold">
        支払総額（税込）
      </div>

      <div className="bg-zinc-900 p-5">

        <div className="text-5xl font-black text-yellow-400">
          {total}
        </div>

        <div className="grid grid-cols-2 gap-5 mt-6">

          <div>

            <p className="text-zinc-400 text-sm">
              車両本体価格
            </p>

            <p className="text-2xl font-bold">
              {body}
            </p>

          </div>

          <div>

            <p className="text-zinc-400 text-sm">
              諸費用
            </p>

            <p className="text-2xl font-bold">
              {fee}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}