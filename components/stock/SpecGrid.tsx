type Props = {
  car: any;
};

export default function SpecGrid({ car }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">

      <Item title="年式" value={car.year} />
      <Item title="走行距離" value={car.mileage} />
      <Item title="車検" value={car.inspection} />
      <Item title="修復歴" value={car.repair_history} />
      <Item title="ミッション" value={car.transmission} />
      <Item title="駆動方式" value={car.drive} />

    </div>
  );
}

function Item({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-700">

      <div className="bg-zinc-800 text-zinc-400 text-sm px-3 py-2">
        {title}
      </div>

      <div className="bg-zinc-900 px-3 py-3 font-semibold">
        {value || "-"}
      </div>

    </div>
  );
}