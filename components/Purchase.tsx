import Link from "next/link";

export default function Purchase() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-white">

      <div className="max-w-[1700px] mx-auto px-6">

        <div className="text-center">

          <p className="text-yellow-400 tracking-[0.35em] uppercase text-sm">
            PURCHASE
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            車を売るなら Bright Oneへ
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-4xl mx-auto">
            スポーツカー・カスタム車から普段使いのお車まで幅広く対応。
            <br />
            車を知り尽くしたスタッフが一台一台丁寧に査定し、
            お客様の大切なお車を適正価格で買取いたします。
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {/* HIGH VALUE */}
         <Link
  href="/purchase"
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-yellow-400/60
    hover:bg-yellow-400/5
    hover:shadow-[0_20px_50px_rgba(234,179,8,0.18)]
  "
></Link>

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">

              <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                HIGH VALUE
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                高価買取
              </h3>

              <p className="mt-6 leading-8 text-zinc-300">
                車の価値を細かく見極め、
                カスタムや整備状態まで含めて
                適正価格をご提示いたします。
              </p>

              <div className="mt-10 flex justify-end text-yellow-400 group-hover:translate-x-2 transition">
                →
              </div>

            </div>

          </div>

          {/* SPORTS CAR */}
             <Link
  href="/purchase"
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-yellow-400/60
    hover:bg-yellow-400/5
    hover:shadow-[0_20px_50px_rgba(234,179,8,0.18)]
  "
></Link>

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">

              <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                SPORTS CAR
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                カスタム車歓迎
              </h3>

              <p className="mt-6 leading-8 text-zinc-300">
                スポーツカー・ドリ車・
                カスタムカーも大歓迎。
                専門店だからこその査定を行います。
              </p>

              <div className="mt-10 flex justify-end text-yellow-400 group-hover:translate-x-2 transition">
                →
              </div>

            </div>

          </div>

          {/* NON RUNNER */}
             <Link
  href="/purchase"
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-yellow-400/60
    hover:bg-yellow-400/5
    hover:shadow-[0_20px_50px_rgba(234,179,8,0.18)]
  "
></Link>

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">

              <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                NON RUNNER
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                不動車も相談OK
              </h3>

              <p className="mt-6 leading-8 text-zinc-300">
                事故車・故障車・
                廃車予定のお車もお気軽にご相談ください。
                買取可能な場合があります。
              </p>

              <div className="mt-10 flex justify-end text-yellow-400 group-hover:translate-x-2 transition">
                →
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
              rounded-3xl
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
              hover:shadow-[0_20px_50px_rgba(255,255,255,0.10)]
            "
          >
            <div className="flex justify-between items-center">
              <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                CONTACT
              </span>

              <span className="text-white group-hover:translate-x-2 transition">
                →
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              メール査定
            </h3>

            <p className="mt-3 text-zinc-400 text-sm leading-7">
              24時間受付。
              お好きなタイミングで査定依頼できます。
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
              rounded-3xl
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
              hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)]
            "
          >

            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">

              <div className="flex justify-between items-center">

                <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                  LINE
                </span>

                <span className="text-green-400 group-hover:translate-x-2 transition">
                  →
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-bold">
                LINE査定
              </h3>

              <p className="mt-3 text-zinc-400 text-sm leading-7">
                写真を送るだけ。
                最短で概算査定をご案内します。
              </p>

            </div>

          </a>

          {/* 買取ページ */}
          <Link
            href="/purchase"
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
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
              hover:shadow-[0_20px_50px_rgba(234,179,8,0.25)]
            "
          >

            <div className="flex justify-between items-center">

              <span className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                PURCHASE
              </span>

              <span className="text-yellow-400 group-hover:translate-x-2 transition">
                →
              </span>

            </div>

            <h3 className="mt-5 text-2xl font-bold">
              買取のご案内
            </h3>

            <p className="mt-3 text-zinc-400 text-sm leading-7">
              買取の流れや必要書類など、
              初めての方はこちらをご覧ください。
            </p>

          </Link>

        </div>

      

    </section>
  );
}