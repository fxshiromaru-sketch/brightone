type Props = {
  car: any;
};

export default function SpecTable({ car }: Props) {
  const specs = [
    ["年式", car.year],
    ["走行距離", car.mileage],
    ["車検", car.inspection],
    ["修復歴", car.repair_history],
    ["ミッション", car.transmission],
    ["駆動方式", car.drive],
    ["燃料", car.fuel],
    ["排気量", car.displacement],
    ["保証", car.warranty],
    ["法定整備", car.maintenance],
    ["乗車定員", car.capacity],
    ["ドア数", car.doors],
    ["ボディカラー", car.color],
  ];

  return (
    <section className="bg-zinc-900 rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold border-l-4 border-yellow-500 pl-3 mb-6">
        車両詳細
      </h2>

      <div className="overflow-hidden rounded-xl border border-zinc-700">

        {specs.map(([title, value], index) => (

          <div
            key={title}
            className={`grid grid-cols-[180px_1fr] ${
              index !== specs.length - 1
                ? "border-b border-zinc-700"
                : ""
            }`}
          >

            <div className="bg-zinc-800 px-5 py-4 font-semibold">
              {title}
            </div>

            <div className="px-5 py-4">
              {value || "-"}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}