export default function Services() {
  return (
    <section id="service" className="py-24 px-6 max-w-[1700px] mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">
        SERVICE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-zinc-900 rounded-2xl p-8 min-h-[260px] shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">
            中古車販売
          </h3>

          <p className="text-base leading-8 text-gray-300">
            スポーツカーから軽自動車まで
            幅広い車種を取り扱っています。
            <br /><br />
            ご希望のお車探しや修理、
            カスタムのご相談もお気軽にどうぞ。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 min-h-[260px] shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">
            車買取
          </h3>

          <p className="text-base leading-8 text-gray-300">
            高価買取・無料査定に対応しています。
            <br /><br />
            LINE査定・メール査定にも対応。
            スポーツカーやカスタム車も
            積極的に買取いたします。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 min-h-[260px] shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">
            タイヤ交換
          </h3>

          <p className="text-base leading-8 text-gray-300">
            持ち込みタイヤ交換も大歓迎。
            <br /><br />
            ネットで購入したタイヤを
            当店へ直送していただくことも可能です。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 min-h-[260px] shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">
            レッカー
          </h3>

          <p className="text-base leading-8 text-gray-300">
            事故・故障などの緊急時にも
            迅速に対応いたします。
            <br /><br />
            お困りの際はお気軽に
            お電話ください。
          </p>
        </div>

      </div>
    </section>
  );
}