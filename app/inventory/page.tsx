export default function Inventory() {
  const cars = [
    {
      name: "車両名サンプル",
      price: "価格準備中",
      year: "年式",
      mileage: "走行距離",
      image: "/car.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-12">
        STOCK CAR
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl overflow-hidden"
          >

            <div className="h-60 bg-zinc-800 flex items-center justify-center">
              車両画像
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {car.name}
              </h2>

              <p className="mt-3 text-yellow-400">
                {car.price}
              </p>

              <p className="text-gray-400 mt-2">
                {car.year}
              </p>

              <p className="text-gray-400">
                {car.mileage}
              </p>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}