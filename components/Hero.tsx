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

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12 w-full max-w-6xl">

  <Link
    href="/stock"
    className="group border border-yellow-500/40 bg-black/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-xs tracking-[0.35em] text-zinc-400">
        STOCK CARS
      </span>

      <span className="text-yellow-400 text-xl transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </div>

    <h3 className="text-2xl font-bold text-white">
      在庫車を見る
    </h3>
  </Link>



  <Link
    href="/purchase"
    className="group border border-yellow-500/40 bg-black/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-xs tracking-[0.35em] text-zinc-400">
        PURCHASE
      </span>

      <span className="text-yellow-400 text-xl transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </div>

    <h3 className="text-2xl font-bold text-white">
      車を売る・無料査定
    </h3>
  </Link>



  <a
    href="#contact"
    className="group border border-yellow-500/40 bg-black/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-xs tracking-[0.35em] text-zinc-400">
        CONTACT
      </span>

      <span className="text-yellow-400 text-xl transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </div>

    <h3 className="text-2xl font-bold text-white">
      メールで相談
    </h3>
  </a>



  <a
    href="tel:08055637830"
    className="group border border-yellow-500/40 bg-black/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-xs tracking-[0.35em] text-zinc-400">
        PHONE
      </span>

      <span className="text-yellow-400 text-xl transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </div>

    <h3 className="text-2xl font-bold text-white">
      電話で相談
    </h3>
  </a>

</div>

      <div className="mt-16 text-gray-300 text-sm leading-relaxed">

        スポーツカー・カスタム車歓迎
        <br />

        事故車・不動車もお気軽にご相談ください

      </div>

<div className="mt-12">

  <p className="text-zinc-300 text-sm mb-5">
    入庫車両・カスタム作業・店舗情報を発信しています
  </p>


  <div className="flex gap-4 justify-center">


    <a
      href="https://www.instagram.com/brightone2026k/"
      target="_blank"
      className="
      bg-gradient-to-r
      from-purple-500
      via-pink-500
      to-orange-400
      text-white
      px-7
      py-3
      rounded-full
      font-bold
      hover:opacity-90
      transition
      "
    >
      📷 Instagram
    </a>



    <a
      href="https://x.com/yuya_kf"
      target="_blank"
      className="
      bg-white
      text-black
      px-7
      py-3
      rounded-full
      font-bold
      hover:bg-zinc-200
      transition
      "
    >
      𝕏 X
    </a>


  </div>

</div>


    </section>
  );
}