"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function CarsPage() {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.log(error);
      return;
    }

    setCars(data || []);
  }

  async function deleteCar(id: string) {
    const result = confirm("この車両を削除しますか？");

    if (!result) return;

    const { error } = await supabase
      .from("cars")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("削除しました");

    getCars();
  }

  async function toggleSold(car: any) {
    const newStatus =
      car.status === "sold"
        ? "published"
        : "sold";

    const { error } = await supabase
      .from("cars")
      .update({
        status: newStatus,
      })
      .eq("id", car.id);

    if (error) {
      alert(error.message);
      return;
    }

    getCars();
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold">
              車両管理
            </h1>

            <p className="text-zinc-400 mt-2">
              登録済み車両一覧
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/new"
              className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl"
            >
              ＋ 車両登録
            </Link>

            <Link
              href="/admin/dashboard"
              className="bg-zinc-800 px-6 py-3 rounded-xl"
            >
              戻る
            </Link>

          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-3"></div>
                  {cars.map((car) => (

            <div
              key={car.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
            >

              {car.images?.[0] && (

                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-full h-56 object-cover"
                />

              )}

              <div className="p-5">

                <h2 className="text-2xl font-bold">

                  {car.maker} {car.name}

                </h2>

                <div className="mt-4 space-y-2 text-zinc-300">

                  <p>
                    車両価格：
                    <span className="text-yellow-400 font-bold ml-2">
                      {car.price
                        ? `${Math.floor(car.price / 10000)}万円`
                        : "-"}
                    </span>
                  </p>

                  <p>
                    支払総額：
                    <span className="text-yellow-400 font-bold ml-2">
                      {car.total_price
                        ? `${Math.floor(car.total_price / 10000)}万円`
                        : "-"}
                    </span>
                  </p>

                  <p>
                    年式：
                    {car.year || "-"}
                  </p>

                  <p>
                    走行距離：
                    {car.mileage || "-"}
                  </p>

                </div>

                <div className="mt-5 flex flex-wrap gap-3">

                  <Link
                    href={`/admin/edit/${car.id}`}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold"
                  >
                    編集
                  </Link>

                  <button
                    onClick={() => deleteCar(car.id)}
                    className="bg-red-600 px-4 py-2 rounded-lg"
                  >
                    削除
                  </button>

                  <button
                    onClick={() => toggleSold(car)}
                    className="bg-zinc-700 px-4 py-2 rounded-lg"
                  >
                    {car.status === "sold"
                      ? "掲載へ戻す"
                      : "SOLD OUT"}
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

    </main>

  );

}