export default function CarDetail() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          サンプル
        </h1>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden">

          <img
            src="/cars/看板.png"
            alt="サンプル"
            className="w-full h-96 object-cover"
          />

          <div className="p-8">

            <p className="text-yellow-400 text-3xl font-bold">
              ？？？万円
            </p>

            <p className="mt-5 text-gray-300">
              年式：2060年
            </p>

            <p className="text-gray-300">
              走行距離：35,000km
            </p>

            <p className="mt-8 text-gray-400">
              程度良好な車です。
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}