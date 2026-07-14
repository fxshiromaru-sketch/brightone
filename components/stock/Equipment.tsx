type Props = {
  car: any;
};

export default function Equipment({ car }: Props) {

  const items = [

    { name: "ABS", value: car.abs },
    { name: "エアバッグ", value: car.airbag },
    { name: "ナビ", value: car.navigation },
    { name: "TV", value: car.tv },
    { name: "Bluetooth", value: car.bluetooth },
    { name: "ETC", value: car.etc },
    { name: "バックカメラ", value: car.back_camera },
    { name: "ドライブレコーダー", value: car.drive_recorder },
    { name: "スマートキー", value: car.smart_key },
    { name: "LEDヘッドライト", value: car.led },
    { name: "アルミホイール", value: car.aluminum },
    { name: "サンルーフ", value: car.sunroof },

  ];

  return (

    <section className="bg-zinc-900 rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold border-l-4 border-yellow-500 pl-3 mb-6">
        装備・オプション
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {items.map((item) => (

          <div
            key={item.name}
            className={`
              rounded-xl
              border
              p-4
              text-center
              ${
                item.value
                  ? "border-yellow-500 bg-zinc-800"
                  : "border-zinc-700 bg-zinc-900 text-zinc-500"
              }
            `}
          >

            <div className="text-2xl mb-2">
              {item.value ? "✓" : "－"}
            </div>

            <div className="font-medium">
              {item.name}
            </div>

          </div>

        ))}

      </div>

    </section>

  );

}