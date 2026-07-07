type Car = {
  slug: string;
  name: string;
  price: string;
  year: string;
  mileage: string;
  image: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden">

      <div className="h-60 bg-zinc-800 flex items-center justify-center">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {car.name}
        </h2>

        <p className="text-yellow-400 text-xl mt-3">
          {car.price}
        </p>

        <p className="text-gray-400 mt-2">
          年式：{car.year}
        </p>

        <p className="text-gray-400">
          走行距離：{car.mileage}
        </p>

     <a
  href={`/inventory/${car.slug}`}
  className="mt-5 block w-full text-center border border-white py-2 rounded-full hover:bg-white hover:text-black transition"
>
  詳細を見る
</a>

      </div>

    </div>
  );
}