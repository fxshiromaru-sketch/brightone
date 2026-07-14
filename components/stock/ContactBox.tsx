import Link from "next/link";

type Props = {
  car: any;
};

export default function ContactBox({ car }: Props) {

  return (

    <div className="sticky top-24">

      <div className="bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">

        <div className="bg-yellow-500 text-black p-5">

          <p className="text-sm">
            支払総額（税込）
          </p>

          <h2 className="text-5xl font-black mt-2">
            {car.total_price
              ? `${Math.floor(car.total_price / 10000)}万円`
              : "-"}
          </h2>

        </div>

        <div className="p-6">

          <div className="flex justify-between py-3 border-b border-zinc-800">

            <span className="text-zinc-400">
              車両本体価格
            </span>

            <span className="font-bold">
              {car.price
                ? `${Math.floor(car.price / 10000)}万円`
                : "-"}
            </span>

          </div>

          <div className="flex justify-between py-3">

            <span className="text-zinc-400">
              諸費用
            </span>

            <span className="font-bold">

              {car.total_price && car.price
                ? `${Math.floor((car.total_price - car.price)/10000)}万円`
                : "-"}

            </span>

          </div>

          <a
            href="tel:09000000000"
            className="block mt-6 bg-yellow-500 text-black text-center py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
          >
            📞 電話で問い合わせ
          </a>

          <Link
            href="/#contact"
            className="block mt-4 bg-zinc-800 text-center py-4 rounded-xl hover:bg-zinc-700 transition"
          >
            ✉ メール問い合わせ
          </Link>

          <a
            href="https://lin.ee/NHhNj1t"
            target="_blank"
            className="block mt-4 bg-green-600 text-center py-4 rounded-xl font-bold hover:bg-green-500 transition"
          >
            LINEで問い合わせ
          </a>

        </div>

      </div>

    </div>

  );

}