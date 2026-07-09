
  
  export default function Services() {
  return (
    <section id="service" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">
        SERVICE
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">🚗 中古車販売</h3>
          <p className="text-gray-400">
            スポーツカーから軽自動車まで幅広く対応します。
            修理、カスタムも可能です。お気軽にご相談ください。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">💰 車買取</h3>
          <p className="text-gray-400">
            高価買取・無料査定対応しています。
            ラインかメールで気軽にご連絡ください。
            他社より高く買い取れる自信があります。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">🔧 タイヤ交換</h3>
          <p className="text-gray-400">
            持ち込みタイヤの交換を安くやります！
            予約して直接こちらに送ってもらうことも可能です。
            
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">🚨 レッカー</h3>
          <p className="text-gray-400">
            事故・故障時も迅速対応します。
            緊急時は携帯電話にご連絡ください。
          </p>
        </div>

      </div>
    </section>
  );
}