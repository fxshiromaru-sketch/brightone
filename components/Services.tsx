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
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">💰 車買取</h3>
          <p className="text-gray-400">
            高価買取・無料査定対応しています。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">🔧 タイヤ交換</h3>
          <p className="text-gray-400">
            持ち込みタイヤも対応可能です。
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">🚨 レッカー</h3>
          <p className="text-gray-400">
            事故・故障時も迅速対応します。
          </p>
        </div>

      </div>
    </section>
  );
}