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

        <div className="flex justify-center gap-5 flex-wrap mt-14">

          <a
            href="#contact"
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            ✉ メールで無料査定
          </a>

          <a
            href="https://lin.ee/NHhNj1t"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition"
          >
            LINEで無料査定
          </a>

          <Link
            href="/purchase"
            className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition"
          >
            買取依頼の前にこちらをご覧ください
          </Link>

        </div>

      </div>

    </section>
  );
}