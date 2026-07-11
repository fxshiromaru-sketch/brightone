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


      <p className="mt-8 text-gray-200 text-lg max-w-3xl leading-relaxed">

        千葉県銚子市の中古車販売店 Bright One。
        <br />

        中古車販売・高価買取・カスタムまで
        <br />

        車を知り尽くしたスタッフが
        あなたのカーライフをサポートします。

      </p>



      <div className="flex gap-5 mt-10 flex-wrap justify-center">


        <Link
          href="/stock"
          className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition"
        >
          🚗 在庫車を見る
        </Link>



        <a
          href="https://line.me/ti/p/qd6RpQYTLe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-400 transition"
        >
          💰 車買取LINE無料査定
        </a>
  <a
    href="#contact"
    className="border border-white px-8 py-4 rounded-full"
  >
    ✉ メールでご相談
  </a>

        <a
          href="tel:0479213038"
          className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
        >
          📞 電話でご相談
        </a>


      </div>



      <div className="mt-16 text-gray-300 text-sm leading-relaxed">

        スポーツカー・カスタム車歓迎
        <br />

        事故車・不動車もお気軽にご相談ください

      </div>


      <div className="flex gap-4 mt-10">

        <a
          href="https://www.instagram.com/brightone2026k/"
          target="_blank"
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold"
        >
          Instagram
        </a>


        <a
          href="https://x.com/yuya_kf"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-full font-bold"
        >
          𝕏
        </a>

      </div>


    </section>
  );
}