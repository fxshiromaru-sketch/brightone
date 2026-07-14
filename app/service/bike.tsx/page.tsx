import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BikePage() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Header />


      <section className="pt-32 pb-16 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="text-yellow-400 tracking-widest text-sm">
            SERVICE
          </p>

          <h1 className="text-5xl font-bold mt-4">
            バイク買取・販売
          </h1>


          <p className="text-zinc-400 mt-6 text-lg">
            バイクの買取から販売まで、お気軽にご相談ください。
          </p>

        </div>

      </section>





      <section className="px-6 pb-20">


        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">



          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">


            <h2 className="text-2xl font-bold mb-6">
              バイク買取
            </h2>


            <ul className="space-y-4 text-zinc-300">


              <li>
                ✓ 国産・輸入車対応
              </li>


              <li>
                ✓ カスタム車歓迎
              </li>


              <li>
                ✓ 旧車・希少車相談可能
              </li>


              <li>
                ✓ 不動車・長期保管車もご相談ください
              </li>


              <li>
                ✓ 出張査定対応
              </li>


            </ul>


          </div>





          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">


            <h2 className="text-2xl font-bold mb-6">
              Bright Oneだからできる査定
            </h2>



            <p className="text-zinc-300 leading-8">


              車だけではなく、バイクの買取・販売にも対応しています。
              <br /><br />

              カスタム内容や車両状態など、
              一般的な査定では評価されにくい部分もしっかり確認します。
              <br /><br />

              乗り換えや車とバイクのまとめたご相談もお気軽にどうぞ。


            </p>


          </div>



        </div>


      </section>






      <section className="px-6 pb-20">


        <div
          className="
          max-w-6xl
          mx-auto
          bg-zinc-900
          rounded-2xl
          p-10
          border
          border-zinc-800
          "
        >


          <h2 className="text-3xl font-bold mb-6">
            こんなバイクもご相談ください
          </h2>



          <div className="grid md:grid-cols-3 gap-4">


            <div className="bg-black rounded-xl p-5">
              スポーツバイク
            </div>


            <div className="bg-black rounded-xl p-5">
              ネイキッド
            </div>


            <div className="bg-black rounded-xl p-5">
              カスタム車
            </div>


            <div className="bg-black rounded-xl p-5">
              旧車・希少車
            </div>


            <div className="bg-black rounded-xl p-5">
              不動車
            </div>


            <div className="bg-black rounded-xl p-5">
              車検切れ車両
            </div>


          </div>


        </div>


      </section>






      <section className="px-6 pb-24">


        <div
          className="
          max-w-6xl
          mx-auto
          bg-zinc-900
          rounded-2xl
          p-10
          text-center
          border
          border-yellow-500
          "
        >


          <h2 className="text-3xl font-bold text-yellow-400">
            バイクのご相談はこちら
          </h2>



          <p className="mt-4 leading-8">


            査定・販売・乗り換え相談など
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




            <Link
              href="/#contact"
              className="
              bg-yellow-500
              text-black
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