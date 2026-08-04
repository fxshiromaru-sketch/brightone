import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
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
            "url('/shop.png')",
        }}
      />


      {/* 暗幕（左側を強めに暗くする） */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/70
          to-black/20
        "
      />


      {/* 下部の黒グラデーション */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-transparent
          to-transparent
        "
      />


      {/* メインコンテンツ */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          pt-20
        "
      >

        <div className="max-w-xl">


          {/* サブタイトル */}
          <p
            className="
              text-yellow-500
              tracking-[0.4em]
              text-sm
              font-semibold
              mb-6
            "
          >
            TOTAL CAR SUPPORT
          </p>


          {/* ロゴ */}
          <h1
            className="
              text-white
              font-serif
              text-6xl
              md:text-8xl
              leading-none
              tracking-wide
              font-bold
            "
          >
            Bright
            <br />

            <span
              className="
                text-yellow-500
                italic
              "
            >
              One
            </span>

          </h1>



          {/* 説明 */}
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
              mt-5
              text-gray-300
              leading-relaxed
            "
          >
            スポーツカーから軽自動車まで、
            <br />
            車好きが選ぶカーショップ。
          </p>



          {/* ボタン */}
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
                shadow-lg
              "
            >
              在庫車を見る →
            </Link>



            <Link
              href="/purchase"
              className="
                border
                border-yellow-600
                text-white
                px-8
                py-4
                font-semibold
                hover:bg-yellow-600
                transition
              "
            >
              無料査定を依頼する →
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