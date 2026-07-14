import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TirePage() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Header />


      {/* タイトル */}

      <section className="pt-32 pb-16 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="text-yellow-400 tracking-widest text-sm">
            SERVICE
          </p>

          <h1 className="text-5xl font-bold mt-4">
            タイヤ交換
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            持込タイヤ交換・ネット購入タイヤの取付にも対応しています。
          </p>

        </div>

      </section>



      {/* 内容 */}

      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">


          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

            <h2 className="text-2xl font-bold mb-6">
              対応サービス
            </h2>


            <ul className="space-y-4 text-zinc-300">

              <li>
                ✓ タイヤ交換
              </li>

              <li>
                ✓ 持込タイヤ取付
              </li>

              <li>
                ✓ ネット購入タイヤ直送対応
              </li>

              <li>
                ✓ タイヤ履き替え
              </li>

              <li>
                ✓ タイヤ交換のご相談
              </li>

            </ul>


          </div>



          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

            <h2 className="text-2xl font-bold mb-6">
              Bright Oneの特徴
            </h2>


            <p className="text-zinc-300 leading-8">

              ご自身で購入されたタイヤの
              持ち込み交換にも対応しています。
              <br /><br />

              ネット通販で購入したタイヤを
              当店へ直送していただくことも可能です。
              <br /><br />

              車種やサイズについてのご相談も
              お気軽にお問い合わせください。

            </p>


          </div>


        </div>

      </section>



<section className="px-6 pb-24">

  <div className="max-w-6xl mx-auto bg-yellow-500 text-black rounded-2xl p-10 text-center">

    <h2 className="text-3xl font-bold">
      タイヤ交換のご相談はこちら
    </h2>

    <p className="mt-4 leading-8">
      料金や対応サイズなどお気軽にお問い合わせください。
      <br />
      公式LINEからのお問い合わせが
      <br />
      一番スムーズにご返信できます。
    </p>


    <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">


      <a
        href="https://lin.ee/NHhNj1t"
        target="_blank"
        className="
          bg-green-600
          text-white
          px-8
          py-4
          rounded-xl
          font-bold
          hover:bg-green-500
          transition
        "
      >
        LINEで問い合わせ
      </a>


      <Link
        href="/#contact"
        className="
          bg-black
          text-white
          px-8
          py-4
          rounded-xl
          font-bold
        "
      >
        メール問い合わせ
      </Link>


    </div>


  </div>

</section>



      <Footer />

    </main>

  );

}