
  
  export default function Services() {
  return (
    <section id="service" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">
        SERVICE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">

        <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-[320px] min-h-[240px] shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">中古車販売</h3>
          <p className="text-base leading-7 text-gray-300">
            スポーツカーから軽自動車まで幅広く対応します。
            修理、カスタムも可能です。お気軽にご相談ください。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-[320px] min-h-[240px] shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">車買取</h3>
          <p className="text-base leading-7 text-gray-300">
            高価買取・無料査定対応しています。
            ラインかメールで気軽にご連絡ください。
            他社より高く買い取れる自信があります。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-[320px] min-h-[240px] shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">タイヤ交換</h3>
          <p className="text-base leading-7 text-gray-300">
            持ち込みタイヤの交換を安くやります！
            予約して直接こちらに送ってもらうことも可能です。
            
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-[320px] min-h-[240px] shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-5">レッカー</h3>
          <p className="text-base leading-7 text-gray-300">
            事故・故障時も迅速対応します。
            緊急時は携帯電話にご連絡ください。
          </p>
        </div>

      </div>
    </section>
  );
}