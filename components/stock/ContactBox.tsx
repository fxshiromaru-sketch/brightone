import Link from "next/link";

type Props = {
  car: any;
};

export default function ContactBox({ car }: Props) {


  const formatPrice = (value:number | string) => {

    if (!value) return null;

    const num = Number(value);

    return {
      number: (num / 10000).toFixed(1),
      unit: "万円",
    };

  };


  const total = formatPrice(car.total_price);
  const body = formatPrice(car.price);

  const fee = formatPrice(
    Number(car.total_price) - Number(car.price)
  );


  return (

    <div className="sticky top-24">


      <div className="bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">



        <div className="bg-yellow-500 text-black p-5">


          <p className="text-sm">
            支払総額（税込）
          </p>


          <div className="flex items-end mt-2">


            <span className="text-5xl font-black leading-none">
              {total?.number ?? "-"}
            </span>


            <span className="text-lg font-bold ml-1 mb-1">
              {total?.unit}
            </span>


          </div>


        </div>





        <div className="p-6">


          <div className="flex justify-between items-end py-3 border-b border-zinc-800">


            <span className="text-zinc-400">
              車両本体価格（税込）
            </span>


            <div className="flex items-end">


              <span className="font-bold text-xl">
                {body?.number ?? "-"}
              </span>


              <span className="text-sm ml-1 mb-1">
                {body?.unit}
              </span>


            </div>


          </div>





          <div className="flex justify-between items-end py-3">


            <span className="text-zinc-400">
              諸費用
            </span>


            <div className="flex items-end">


              <span className="font-bold text-xl">
                {fee?.number ?? "-"}
              </span>


              <span className="text-sm ml-1 mb-1">
                {fee?.unit}
              </span>


            </div>


          </div>





          <a
            href="tel:08055637830"
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