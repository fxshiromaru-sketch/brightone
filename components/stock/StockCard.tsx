import Link from "next/link";
import PriceBox from "./PriceBox";
import SpecGrid from "./SpecGrid";
import BadgeList from "./BadgeList";




type Props = {
  car: any;
};

export default function StockCard({ car }: Props) {
  return (
    <div
      className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-xl
      overflow-hidden
      hover:border-yellow-500
      transition
      duration-300
      "
    >
      <div className="flex flex-col lg:flex-row">

        {/* ================= 画像 ================= */}

        <div className="relative lg:w-[360px] shrink-0">

          {car.images?.[0] && (
            <img
              src={car.images[0]}
              alt={car.name}
              className={`w-full h-[260px] object-cover ${
                car.status === "sold"
                  ? "opacity-40"
                  : ""
              }`}
            />
          )}

          {car.featured && (
            <div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </div>
          )}

          {car.status === "sold" && (
            <div className="absolute inset-0 flex items-center justify-center">

              <span className="bg-red-600 text-white font-bold text-2xl px-6 py-3 rounded-lg rotate-[-12deg]">
                SOLD OUT
              </span>

            </div>
          )}

        </div>

        {/* ================= 情報 ================= */}

        <div className="flex-1 p-7">

          <p className="text-zinc-400 text-sm">
            {car.maker}
          </p>

          <h2 className="text-3xl font-bold mt-1">
            {car.name}
          </h2>

<BadgeList car={car} />

          {/* 金額 */}

         <PriceBox
  total_price={car.total_price}
  price={car.price}
/>
<SpecGrid car={car} />

          <Link
            href={`/stock/${car.id}`}
            className="
            mt-8
            inline-flex
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-bold
            px-8
            py-3
            rounded-lg
            transition
            "
          >
            詳細を見る →
          </Link>

        </div>

      </div>
    </div>
  );
}

function Spec({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border border-zinc-700 rounded-lg overflow-hidden">

      <div className="bg-zinc-800 text-zinc-400 text-sm px-3 py-2">
        {title}
      </div>

      <div className="bg-zinc-900 px-3 py-3 font-semibold">
        {value || "-"}
      </div>

    </div>
  );
}