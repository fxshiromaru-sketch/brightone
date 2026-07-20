import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function PurchaseResultDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const { data: item, error } = await supabase
    .from("purchase_results")
    .select("*")
    .eq("id", id)
    .eq("published", true)
    .single();

  if (error || !item) {
    notFound();
  }

  return (

    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <Link
          href="/purchase-results"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          ← 買取実績一覧へ戻る
        </Link>

        <div className="mt-8">

          <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm">
            PURCHASE RESULT
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {item.car_name}
          </h1>

          {item.grade && (
            <p className="text-2xl text-zinc-400 mt-3">
              {item.grade}
            </p>
          )}

          <p className="mt-6 text-zinc-300 text-lg">
            {item.prefecture}
            {item.city && ` ${item.city}`}
            のお客様よりお買取りさせていただきました。
          </p>

        </div>

        <div className="mt-14">
                    <img
          src={
            item.images?.[0] ||
            "https://placehold.co/1200x800?text=No+Image"
          }
          alt={item.car_name}
          className="
            w-full
            h-[520px]
            object-cover
            rounded-3xl
            border
            border-white/10
          "
        />

        {item.images?.length > 1 && (

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            {item.images.map((image: string, index: number) => (

              <img
                key={index}
                src={image}
                alt={`${item.car_name}-${index}`}
                className="
                  w-full
                  h-36
                  object-cover
                  rounded-2xl
                  border
                  border-white/10
                  hover:border-yellow-400
                  transition
                "
              />

            ))}

          </div>

        )}

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div className="bg-zinc-900 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              車両情報
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">車名</span>
                <span>{item.car_name}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">グレード</span>
                <span>{item.grade || "-"}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">年式</span>
                <span>{item.year}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">走行距離</span>
                <span>{item.mileage}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">買取方法</span>
                <span>{item.purchase_type}</span>
              </div>

            </div>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              コメント
            </h2>

            <p className="leading-9 text-zinc-300 whitespace-pre-wrap">
              {item.comment}
            </p>

          </div>

        </div>
                <div className="mt-20 text-center">

          <h2 className="text-3xl font-bold">
            お車の売却をご検討中ですか？
          </h2>

          <p className="text-zinc-400 mt-5 leading-8 max-w-2xl mx-auto">
            スポーツカー・カスタムカーから普段使いのお車まで、
            Bright Oneが丁寧に査定いたします。
            査定は無料ですので、お気軽にご相談ください。
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              href="/purchase"
              className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                font-bold
                px-8
                py-4
                rounded-2xl
                transition
              "
            >
              無料査定はこちら
            </Link>

            <Link
              href="/purchase-results"
              className="
                border
                border-white/20
                hover:border-yellow-400
                hover:text-yellow-400
                px-8
                py-4
                rounded-2xl
                transition
              "
            >
              買取実績一覧へ戻る
            </Link>

          </div>

        </div>
 </div>
      </section>

    </main>

  );

}