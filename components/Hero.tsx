export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-6xl md:text-8xl font-bold tracking-widest">
        Bright One
      </h1>

      <p className="text-yellow-400 text-2xl mt-6 italic">
        Drive Your Dream.
      </p>

      <p className="mt-6 text-gray-400 max-w-3xl leading-relaxed">
  千葉県銚子市の中古車販売店 Bright One。
  スポーツカーから軽自動車まで幅広く取り扱い、
  車両販売・買取・修理・カスタム・タイヤ交換・レッカーサービスまで
  お客様のカーライフをサポートいたします。
  お車の査定依頼はＬＩＮＥ、メールで気軽にお問い合わせください。
</p>
<div className="flex gap-4 mt-10 flex-wrap justify-center">

  <a
    href="tel:08055637830"
    className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition"
  >
    📞 電話で相談
  </a>

  <a
    href="https://line.me/ti/p/qd6RpQYTLe"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold transition"
  >
    LINEで相談
  </a>

  <a
    href="#contact"
    className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
  >
    ✉ メールで相談
  </a>

</div>
<div className="mt-16 text-gray-400 text-sm leading-relaxed">
  SNSで最新情報更新中<br />
  入庫車両・作業風景・営業情報などを発信しています。
</div>
<div className="flex gap-4 mt-16 flex-wrap justify-center">
  <a
    href="https://www.instagram.com/brightone2026k/"
    target="_blank"
    className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-full font-bold transition"
  >
    📷 Instagram
  </a>


  <a
    href="https://x.com/yuya_kf"
    target="_blank"
    className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-full font-bold transition"
  >
    𝕏 
  </a>

</div>
    </section>
  );
}