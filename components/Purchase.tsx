import Link from "next/link";

export default function Purchase() {
  return (
    <section className="py-24 bg-zinc-900 text-white">

      <div className="max-w-[1700px] mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          車を売るなら Bright Oneへ
        </h2>

        <p className="text-zinc-300 text-center text-lg leading-8 max-w-4xl mx-auto mb-14">
          スポーツカー・カスタム車から普段使いのお車まで幅広く対応。
          <br />
          車を知り尽くしたスタッフが一台一台丁寧に査定し、
          お客様の大切なお車を適正価格で買取いたします。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 高価買取 */}
          <div className="bg-black rounded-2xl p-8 min-h-[270px] shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">

            <h3 className="text-2xl font-bold mb-5">
              💰 高価買取
            </h3>

            <p className="text-base leading-8 text-zinc-300">
              車の価値をしっかり確認し、
              適正価格をご提示いたします。
              <br /><br />
              走行距離が多いお車や
              年式の古いお車も
              他店より高く買取できる場合があります。
            </p>

          </div>

          {/* カスタム車歓迎 */}
          <div className="bg-black rounded-2xl p-8 min-h-[270px] shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">

            <h3 className="text-2xl font-bold mb-5">
              🏁 カスタム車歓迎
            </h3>

            <p className="text-base leading-8 text-zinc-300">
              スポーツカー・ドリ車・
              カスタムカーも大歓迎。
              <br /><br />
              LINE査定で遠方のお客様にも
              概算価格をご案内いたします。
            </p>

          </div>

          {/* 不動車 */}
          <div className="bg-black rounded-2xl p-8 min-h-[270px] shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">

            <h3 className="text-2xl font-bold mb-5">
              🚛 不動車も相談OK
            </h3>

            <p className="text-base leading-8 text-zinc-300">
              事故車・故障車・
              動かないお車でもご相談ください。
              <br /><br />
              廃車予定のお車も
              買取できる場合があります。
            </p>

          </div>

        </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">

  {/* メール査定 */}
  <a
    href="/purchase/request"
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-white/40
      hover:bg-white/10
    "
  >
    <div className="flex justify-between items-center">

      <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
        CONTACT
      </span>

      <span className="text-white transition group-hover:translate-x-2">
        →
      </span>

    </div>

    <h3 className="mt-5 text-2xl font-bold">
      メール査定
    </h3>

    <p className="mt-3 text-zinc-400 text-sm">
      フォームから24時間受付しています。
    </p>

  </a>



  {/* LINE査定 */}
  <a
    href="https://lin.ee/NHhNj1t"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-green-400
      hover:bg-green-400/10
      hover:shadow-[0_15px_40px_rgba(34,197,94,0.25)]
    "
  >

    <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />

    <div className="relative">

      <div className="flex justify-between items-center">

        <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
          LINE
        </span>

        <span className="text-green-400 transition group-hover:translate-x-2">
          →
        </span>

      </div>

      <h3 className="mt-5 text-2xl font-bold">
        LINE査定
      </h3>

      <p className="mt-3 text-zinc-400 text-sm">
        写真を送るだけで簡単査定。
      </p>

    </div>

  </a>



  {/* 詳細ページ */}
  <Link
    href="/purchase"
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-yellow-500/30
      bg-white/5
      backdrop-blur-xl
      p-6
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-400
      hover:bg-yellow-400/10
      hover:shadow-[0_15px_40px_rgba(234,179,8,0.25)]
    "
  >

    <div className="flex justify-between items-center">

      <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
        PURCHASE
      </span>

      <span className="text-yellow-400 transition group-hover:translate-x-2">
        →
      </span>

    </div>

    <h3 className="mt-5 text-2xl font-bold">
      買取のご案内
    </h3>

    <p className="mt-3 text-zinc-400 text-sm">
      買取の流れや特徴をご紹介しています。
    </p>

  </Link>

</div>
   </div>

    </section>
);

}