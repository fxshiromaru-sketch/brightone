import CarCard from "../../components/CarCard";

export default function Inventory() {
  const cars = [
    {
      slug:"gtr",
      name: "車両名サンプル",
      price: "価格準備中",
      year: "年式",
      mileage: "走行距離",
      image: "/cars/看板.png",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-12">
        在庫車
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}

      </div>

    </main>
  );
}