import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CustomPage() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Header />


      <section className="pt-32 pb-16 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="text-yellow-400 tracking-widest text-sm">
            SERVICE
          </p>

          <h1 className="text-5xl font-bold mt-4">
            カスタム
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            愛車の個性を引き出すカスタムをサポートします。
          </p>

        </div>

      </section>



      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">


          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

            <h2 className="text-2xl font-bold mb-6">
              対応サービス
            </h2>


            <ul className="space-y-4 text-zinc-300">

              <li>
                ✓ ホイール交換
              </li>

              <li>
                ✓ 車高調・足回りパーツ取付
              </li>

              <li>
                ✓ エアロパーツ取付
              </li>

              <li>
                ✓ LED・電装品取付
              </li>

              <li>
                ✓ 持込パーツ取付相談
              </li>

            </ul>

          </div>



          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">


            <h2 className="text-2xl font-bold mb-6">
              Bright Oneのカスタム
            </h2>


            <p className="text-zinc-300 leading-8">

              スポーツカーを中心に、
              お客様の理想のスタイル作りをお手伝いします。
              <br /><br />

              長年の板金塗装・磨き経験を活かし、
              細かな仕上がりにもこだわっています。
              <br /><br />

              パーツ持込での取付についても
              お気軽にご相談ください。

            </p>


          </div>


        </div>

      </section>




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
            カスタムのご相談はこちら
          </h2>


          <p className="mt-4 leading-8">

            パーツ取付やカスタム内容について
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