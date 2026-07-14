import Link from "next/link";

type Props = {
  car: any;
};

export default function StockCard({ car }: Props) {
  return (
    <Link
      href={`/stock/${car.id}`}
      className="block bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition"
    >
      <div className="grid md:grid-cols-[340px_1fr]">

        {/* 画像 */}
        <div className="relative">

          <img
            src={car.images?.[0] || "/noimage.jpg"}
            alt={car.name}
            className="w-full h-full min-h-[250px] object-cover"
          />

          {car.status === "sold" && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

              <span className="bg-red-600 text-white px-6 py-3 rounded-xl text-2xl font-bold">

                SOLD OUT

              </span>

            </div>
          )}

        </div>

        {/* 情報 */}
        <div className="p-7">

          <p className="text-sm text-zinc-400">
            {car.maker}
          </p>

          <h2 className="text-3xl font-bold mt-1">
            {car.name}
          </h2>

          <div className="mt-6">

            <p className="text-zinc-400 text-sm">

              支払総額（税込）

            </p>

            <div className="text-yellow-400 text-4xl font-black">

              {car.total_price
                ? `${Math.floor(car.total_price / 10000)}万円`
                : "-"}

            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 text-sm">

            <div>年式<br /><span className="font-bold">{car.year}</span></div>

            <div>走行距離<br /><span className="font-bold">{car.mileage}</span></div>

            <div>車検<br /><span className="font-bold">{car.inspection}</span></div>

            <div>修復歴<br /><span className="font-bold">{car.repair_history}</span></div>

          </div>

          <div className="mt-8 flex justify-end">

            <span className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">

              詳細を見る →

            </span>

          </div>

        </div>

      </div>

    </Link>
  );
}