import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <h1 className="text-6xl md:text-8xl font-bold tracking-widest">
        Bright One
      </h1>


      <p className="text-yellow-400 text-2xl md:text-3xl mt-6 italic">
        Drive Your Dream.
      </p>


<p className="mt-8 text-gray-200 max-w-5xl text-lg leading-loose">

千葉県銚子市の中古車販売店　Bright One　（ブライトワン）です。<br></br>

中古車販売・スポーツカー販売・車買取・カスタム・タイヤ交換・レッカーサービスまで対応。<br></br>

銚子市・旭市・香取市・多古町・神栖市・鹿嶋市から多数ご来店いただいております。<br></br>

  中古車販売・高価買取・カスタム・整備・タイヤ交換まで<br></br>
  <br />

  お客様の大切なカーライフをトータルサポートいたします。

  <br /><br />

  お車の購入相談、売却査定、カスタム相談など
  <br />

  LINE・電話・メールからお気軽にお問い合わせください。

</p>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14 w-full max-w-7xl">

  {/* 在庫車 */}
  <Link
    href="/stock"
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(234,179,8,0.18)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-yellow-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[0.35em] uppercase text-zinc-400">
          STOCK CARS
        </span>

        <span className="text-yellow-400 text-xl transition duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        在庫車を見る
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        スポーツカーから軽自動車まで掲載中
      </p>
    </div>
  </Link>

  {/* 買取 */}
  <Link
    href="/purchase"
    className="group relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(234,179,8,0.25)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[0.35em] uppercase text-zinc-400">
          PURCHASE
        </span>

        <span className="text-yellow-400 text-xl transition duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        車を売る・無料査定
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        出張査定・オンライン査定にも対応
      </p>
    </div>
  </Link>

  {/* メール */}
  <a
    href="#contact"
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(234,179,8,0.18)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-yellow-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[0.35em] uppercase text-zinc-400">
          CONTACT
        </span>

        <span className="text-yellow-400 text-xl transition duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        メールで相談
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        購入・売却・カスタムのご相談はこちら
      </p>
    </div>
  </a>

  {/* 電話 */}
  <a
    href="tel:08055637830"
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(234,179,8,0.18)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-yellow-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[0.35em] uppercase text-zinc-400">
          PHONE
        </span>

        <span className="text-yellow-400 text-xl transition duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        電話で相談
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        お急ぎの方はこちらからどうぞ
      </p>
    </div>
  </a>

</div>

      <div className="mt-16 text-gray-300 text-sm leading-relaxed">

        スポーツカー・カスタム車歓迎
        <br />

        事故車・不動車もお気軽にご相談ください

      </div>


<div className="mt-20 w-full max-w-3xl">

  <div className="border-t border-white/10 pt-10">

    <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 text-center">
      FOLLOW US
    </p>

    <h3 className="mt-4 text-2xl font-semibold text-white text-center">
      最新情報をチェック
    </h3>

    <p className="mt-3 text-zinc-400 text-center leading-relaxed">
      入庫車両・買取実績・カスタム事例などを
      <br />
      Instagram・Xで発信しています。
    </p>

    <div className="grid grid-cols-2 gap-5 mt-10">

      <a
        href="https://www.instagram.com/brightone2026k/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-pink-400/70 hover:bg-white/10"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition" />

        <div className="relative z-10">

<h4 className="mt-3 text-xl font-bold text-white">
  Instagram
</h4>

          <p className="mt-3 text-zinc-400 text-sm">
            入庫車両・カスタム・店舗情報
          </p>

        </div>

      </a>

      <a
        href="https://x.com/yuya_kf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10"
      >

        <div className="relative z-10">



<h4 className="mt-3 text-xl font-bold text-white">
  X
</h4>

          <p className="mt-3 text-zinc-400 text-sm">
            最新のお知らせを投稿
          </p>

        </div>

      </a>

    </div>

  </div>

</div>

    </section>
  );
}