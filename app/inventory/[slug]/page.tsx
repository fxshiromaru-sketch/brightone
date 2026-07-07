import FixedContact from "../../../components/FixedContact";
export default function CarDetail() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          日産 GT-R
        </h1>


        {/* メイン画像 */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/cars/gtr.jpg"
            alt="日産 GT-R"
            className="w-full h-[500px] object-cover"
          />
        </div>


        {/* サブ画像 */}
        <div className="grid grid-cols-3 gap-4 mt-5">

          <img
            src="/cars/gtr.jpg"
            className="rounded-xl h-32 w-full object-cover"
          />

          <img
            src="/cars/gtr.jpg"
            className="rounded-xl h-32 w-full object-cover"
          />

          <img
            src="/cars/gtr.jpg"
            className="rounded-xl h-32 w-full object-cover"
          />

        </div>



        <div className="bg-zinc-900 rounded-2xl mt-10 p-8">


          <p className="text-yellow-400 text-4xl font-bold">
            ？？？万円
          </p>


          <h2 className="text-3xl font-bold mt-8">
            車両情報
          </h2>


          <div className="grid md:grid-cols-2 gap-4 mt-6 text-gray-300">


            <p>
              年式：2018年
            </p>

            <p>
              走行距離：35,000km
            </p>

            <p>
              ミッション：AT
            </p>

            <p>
              車検：あり
            </p>

            <p>
              色：ブラック
            </p>

            <p>
              排気量：3,800cc
            </p>


          </div>



          <h2 className="text-3xl font-bold mt-10">
            装備・コメント
          </h2>


          <p className="text-gray-300 mt-5 leading-relaxed">
            程度良好なGT-Rです。
            オプション装備多数。
            詳細はお気軽にお問い合わせください。
          </p>



          <div className="flex gap-4 flex-wrap mt-10">


            <a
              href="tel:08055637830"
              className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold"
            >
              📞 電話で問い合わせ
            </a>



            <a
              href="https://line.me/ti/p/qd6RpQYTLe"
              target="_blank"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold"
            >
              LINEで相談
            </a>

<FixedContact />

          </div>


        </div>


      </div>

    </main>
  );
}