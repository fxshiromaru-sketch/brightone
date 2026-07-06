const cars = [
  {
    name: "スカイライン GT-R",
    price: "450万円",
    year: "2010年",
    desc: "人気スポーツカー・状態良好",
  },
  {
    name: "アルト",
    price: "80万円",
    year: "2018年",
    desc: "低燃費・通勤向け",
  },
];

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-16">
        在庫車一覧
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {cars.map((car, i) => (
          <div key={i} className="bg-zinc-900 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-2">
              {car.name}
            </h2>

            <p className="text-yellow-400 font-bold text-xl">
              {car.price}
            </p>

            <p className="text-gray-400 mt-2">
              年式：{car.year}
            </p>

            <p className="text-gray-500 mt-4 text-sm">
              {car.desc}
            </p>

            <a
              href="tel:08055637830"
              className="mt-6 inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold"
            >
              📞 問い合わせ
            </a>

          </div>
        ))}

      </div>

    </main>
  );
}