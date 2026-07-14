type Props = {
  car: any;
};

export default function BadgeList({ car }: Props) {

  const badges = [];

  if (car.featured) badges.push("NEW");
  if (car.repair_history === "なし") badges.push("修復歴なし");
  if (car.transmission === "MT") badges.push("MT");
  if (car.drive === "4WD") badges.push("4WD");

  return (

    <div className="flex flex-wrap gap-2 mt-5">

      {badges.map((badge) => (

        <span
          key={badge}
          className={`
            px-3
            py-1
            rounded-full
            text-sm
            font-bold
            ${
              badge === "NEW"
                ? "bg-yellow-500 text-black"
                : "bg-green-600 text-white"
            }
          `}
        >
          {badge}
        </span>

      ))}

    </div>

  );

}