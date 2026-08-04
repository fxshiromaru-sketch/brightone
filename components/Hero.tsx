import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[720px]
        flex
        items-center
        overflow-hidden
      "
    >
      {/* 背景画像 */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
      style={{
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.75)), url('/shop.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
}}
      />

      {/* 左側暗めグラデーション */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/80
          to-black/20
        "
      />

      {/* コンテンツ */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          px-6
          pt-20
        "
      >
        <div className="max-w-xl">


          <p
            className="
              text-yellow-500
              tracking-[0.35em]
              text-sm
              font-semibold
              mb-5
            "
          >
            TOTAL CAR SUPPORT
          </p>


          <h1
            className="
              text-white
              font-serif
              text-7xl
              md:text-8xl
              leading-none
              tracking-wide
              font-bold
            "
          >
            BRIGHT
            <br />

            <span
              className="
                text-yellow-500
                italic
              "
            >
              ONE
            </span>
          </h1>


          <p
            className="
              mt-8
              text-white
              text-lg
              leading-relaxed
            "
          >
            中古車販売・買取・カスタム・タイヤ交換・緊急レッカー
            <br />

            お客様のカーライフをトータルサポート。
          </p>


          <p
            className="
              mt-4
              text-gray-300
              leading-relaxed
            "
          >
            スポーツカーから軽自動車まで、
            <br />
            幅広い車種に対応いたします。
          </p>



          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
          >

            <Link
              href="/stock"
              className="
                bg-yellow-600
                hover:bg-yellow-500
                text-white
                px-8
                py-4
                font-semibold
                transition
                flex
                items-center
                gap-3
              "
            >
              🚗 在庫車を見る
              <span>
                →
              </span>
            </Link>


            <Link
              href="/purchase"
              className="
                border
                border-yellow-600
                text-white
                px-8
                py-4
                hover:bg-yellow-600
                transition
                flex
                items-center
                gap-3
              "
            >
              ¥ 無料査定を依頼する
              <span>
                →
              </span>
            </Link>

          </div>

        </div>
      </div>


      {/* 下部ライン */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-px
          bg-yellow-600/40
        "
      />

    </section>
  );
}