type Props = {
  car: any;
};

export default function Equipment({ car }: Props) {

  const equipmentList = [
    "ABS",
    "エアバッグ",
    "ナビ",
    "TV",
    "Bluetooth",
    "ETC",
    "バックカメラ",
    "ドライブレコーダー",
    "スマートキー",
    "LEDヘッドライト",
    "アルミホイール",
    "サンルーフ",
  ];


  return (

    <section className="bg-zinc-900 rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold border-l-4 border-yellow-500 pl-3 mb-6">
        装備・オプション
      </h2>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {equipmentList.map((item)=>(

          <div
            key={item}
            className={`
              rounded-xl
              border
              p-4
              text-center
              ${
                car.equipment?.includes(item)
                ? "border-yellow-500 bg-zinc-800"
                : "border-zinc-700 bg-zinc-900 text-zinc-500"
              }
            `}
          >

            <div className="text-2xl mb-2">
              {
                car.equipment?.includes(item)
                ? "✓"
                : "－"
              }
            </div>


            <div className="font-medium">
              {item}
            </div>


          </div>

        ))}

      </div>

    </section>

  );

}