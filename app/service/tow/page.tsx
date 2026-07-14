import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TowPage() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Header />


      <section className="pt-32 pb-16 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="text-yellow-400 tracking-widest text-sm">
            SERVICE
          </p>

          <h1 className="text-5xl font-bold mt-4">
            レッカーサービス
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            事故や故障など、お車が動かせない時にも対応いたします。
          </p>

        </div>

      </section>




      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">


          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

            <h2 className="text-2xl font-bold mb-6">
              対応内容
            </h2>


            <ul className="space-y-4 text-zinc-300">

              <li>
                ✓ 事故車・故障車の搬送
              </li>

              <li>
                ✓ 不動車の引取
              </li>

              <li>
                ✓ バッテリー上がり対応
              </li>

              <li>
                ✓ タイヤトラブル対応
              </li>

              <li>
                ✓ 廃車・処分のご相談
              </li>

            </ul>


          </div>




          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">


            <h2 className="text-2xl font-bold mb-6">
              困った時はご相談ください
            </h2>


            <p className="text-zinc-300 leading-8">

              突然の事故や故障など、
              車が動かなくなった場合はお気軽にご相談ください。
              <br /><br />

              状況を確認し、必要に応じて
              車両搬送などの対応を行います。
              <br /><br />

              動かなくなった車両の買取や
              廃車についてもご相談いただけます。

            </p>


          </div>


        </div>

      </section>





      {/* 注意事項 */}

      <section className="px-6 pb-20">


        <div
          className="
          max-w-6xl
          mx-auto
          bg-zinc-900
          rounded-2xl
          p-8
          border
          border-red-900
          "
        >


          <h2 className="text-2xl font-bold mb-6 text-red-400">
            ご利用時の注意事項
          </h2>



          <p className="text-zinc-300 leading-8">


            ※ご加入の自動車保険内容によっては、
            当店でのレッカー対応ができない場合がございます。
            <br /><br />

            ※ネット保険等、一部の保険会社では
            当店でのレッカー対応ができない場合がございます。
            <br /><br />

            ご利用前に保険会社へ対応可能かご確認ください。


          </p>



        </div>


      </section>






      {/* 問い合わせ */}

      <section className="px-6 pb-24">


        <div
          className="
          max-w-6xl
          mx-auto
          bg-zinc-900
          text-white
          rounded-2xl
          p-10
          text-center
          border
          border-yellow-500
          "
        >

          <h2 className="text-3xl font-bold text-yellow-400">
            レッカーのご相談はこちら
          </h2>


          <p className="mt-4 leading-8">

            緊急時や車両トラブルについて
            お気軽にお問い合わせください。
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



            <a
              href="tel:08055637830"
              className="
              bg-yellow-500
              text-black
              px-8
              py-4
              rounded-xl
              font-bold
              "
            >
              電話で問い合わせ
            </a>


          </div>


        </div>


      </section>




      <Footer />

    </main>

  );

}