"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import ImageManager from "@/components/admin/ImageManager";

export default function NewCarPage() {

  const router = useRouter();

  const [carImages, setCarImages] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

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

  const [form, setForm] = useState({
    maker: "",
    name: "",
    price: "",
    total_price: "",
    year: "",
    mileage: "",
    inspection: "",
    displacement: "",
    transmission: "",
    drive: "",
    color: "",
    fuel: "",
    capacity: "",
    doors: "",
    repair_history: "",
    warranty: "",
    maintenance: "",
    recycle_fee: "",
    chassis_number: "",
    description: "",

    coating_name: "",
    coating_price: "",
    coating_description: "",

    equipment: [] as string[],

    featured: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("cars")
      .insert([
        {
          maker: form.maker,
          name: form.name,
          price: Number(form.price),
          total_price: Number(form.total_price),
          year: form.year,
          mileage: form.mileage,
          inspection: form.inspection,
          displacement: form.displacement,
          transmission: form.transmission,
          drive: form.drive,
          color: form.color,
          fuel: form.fuel,
          capacity: form.capacity,
          doors: form.doors,
          repair_history: form.repair_history,
          warranty: form.warranty,
          maintenance: form.maintenance,
          recycle_fee: form.recycle_fee,
          chassis_number: form.chassis_number,
          description: form.description,

          coating_name: form.coating_name,
          coating_price: Number(form.coating_price || 0),
          coating_description: form.coating_description,

          equipment: form.equipment,

          featured: form.featured,

          status: "published",

          images: carImages,
        },
      ]);

          if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    alert("車両を登録しました");

    router.push("/admin");
  };

  return (

    <div className="max-w-4xl mx-auto p-8">

      <h1 className="mb-8 text-3xl font-bold">
        車両登録
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <ImageManager
          images={carImages}
          onChange={setCarImages}
        />

        <div className="grid gap-4 md:grid-cols-2">

          <input
            name="maker"
            placeholder="メーカー"
            value={form.maker}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <input
            name="name"
            placeholder="車名"
            value={form.name}
            onChange={handleChange}
            className="border rounded p-3"
          />

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            name="price"
            type="number"
            placeholder="車両価格"
            value={form.price}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <input
            name="total_price"
            type="number"
            placeholder="支払総額"
            value={form.total_price}
            onChange={handleChange}
            className="border rounded p-3"
          />

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            name="year"
            placeholder="年式"
            value={form.year}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <input
            name="mileage"
            placeholder="走行距離"
            value={form.mileage}
            onChange={handleChange}
            className="border rounded p-3"
          />

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            name="inspection"
            placeholder="車検"
            value={form.inspection}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <input
            name="displacement"
            placeholder="排気量"
            value={form.displacement}
            onChange={handleChange}
            className="border rounded p-3"
          />

        </div>

                <div className="grid gap-4 md:grid-cols-2">

          <input
            name="transmission"
            placeholder="ミッション"
            value={form.transmission}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <input
            name="drive"
            placeholder="駆動方式"
            value={form.drive}
            onChange={handleChange}
            className="border rounded p-3"
          />

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            name="color"
            placeholder="カラー"
            value={form.color}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <select
            value={form.fuel}
            onChange={(e) =>
              setForm({
                ...form,
                fuel: e.target.value,
              })
            }
            className="border rounded p-3"
          >
            <option value="">燃料</option>
            <option value="ガソリン">ガソリン</option>
            <option value="ハイブリッド">ハイブリッド</option>
            <option value="ディーゼル">ディーゼル</option>
            <option value="EV">EV</option>
          </select>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            name="capacity"
            placeholder="乗車定員"
            value={form.capacity}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <input
            name="doors"
            placeholder="ドア数"
            value={form.doors}
            onChange={handleChange}
            className="border rounded p-3"
          />

        </div>
<div className="grid md:grid-cols-2 gap-4">

  <select
    name="repair_history"
    value={form.repair_history}
    onChange={(e) =>
      setForm({
        ...form,
        repair_history: e.target.value,
      })
    }
    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
  >
    <option value="">修復歴</option>
    <option value="なし">なし</option>
    <option value="あり">あり</option>
    <option value="わからない">わからない</option>
  </select>

</div>
<div className="grid md:grid-cols-2 gap-4">

  <select
    name="warranty"
    value={form.warranty}
    onChange={(e) =>
      setForm({
        ...form,
        warranty: e.target.value,
      })
    }
    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
  >
    <option value="">保証</option>
    <option value="あり">あり</option>
    <option value="なし">なし</option>
  </select>

  <select
    name="maintenance"
    value={form.maintenance}
    onChange={(e) =>
      setForm({
        ...form,
        maintenance: e.target.value,
      })
    }
    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
  >
    <option value="">法定整備</option>
    <option value="点検整備付">点検整備付</option>
    <option value="整備なし">整備なし</option>
  </select>

</div>
        <textarea
          name="description"
          placeholder="コメント"
          value={form.description}
          onChange={handleChange}
          className="border rounded p-3 h-32 w-full"
        />

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) =>
              setForm({
                ...form,
                featured: e.target.checked,
              })
            }
          />

          おすすめ車両

        </label>

                <div>

          <h2 className="mb-3 text-xl font-bold">
            コーティング
          </h2>

          <div className="space-y-3">

            <input
              name="coating_name"
              placeholder="プラン名"
              value={form.coating_name}
              onChange={handleChange}
              className="w-full rounded border p-3"
            />

            <input
              name="coating_price"
              type="number"
              placeholder="料金"
              value={form.coating_price}
              onChange={handleChange}
              className="w-full rounded border p-3"
            />

            <textarea
              name="coating_description"
              placeholder="説明"
              value={form.coating_description}
              onChange={handleChange}
              className="h-24 w-full rounded border p-3"
            />

          </div>

        </div>

        <div>

          <h2 className="mb-3 text-xl font-bold">
            装備
          </h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

            {equipmentList.map((item) => (

              <label
                key={item}
                className="flex items-center gap-2 rounded border p-3"
              >

                <input
                  type="checkbox"
                  checked={form.equipment.includes(item)}
                  onChange={(e) => {

                    if (e.target.checked) {

                      setForm({
                        ...form,
                        equipment: [
                          ...form.equipment,
                          item,
                        ],
                      });

                    } else {

                      setForm({
                        ...form,
                        equipment: form.equipment.filter(
                          (x) => x !== item
                        ),
                      });

                    }

                  }}
                />

                {item}

              </label>

            ))}

          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded bg-black px-6 py-3 text-white"
        >
          {loading ? "保存中..." : "保存"}
        </button>

              </form>

    </div>

  );

}