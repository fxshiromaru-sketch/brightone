"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function PurchaseResultsAdminPage() {

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getResults();
  }, []);

  async function getResults() {

    const { data, error } = await supabase
      .from("purchase_results")
      .select("*")
      .order("created_at", {
        ascending: false,
      });
console.log("error:", error);
console.log("data:", data);
    if (error) {

      alert(error.message);
      return;

    }

    setResults(data || []);

  }

  async function deleteResult(item: any) {

    const ok = confirm("この買取実績を削除しますか？");

    if (!ok) return;

    setLoading(true);

    try {

      if (item.images?.length > 0) {

        const fileNames = item.images.map((url: string) => {

          const parts = url.split("/");
          return parts[parts.length - 1];

        });

        const { error: storageError } = await supabase.storage
          .from("purchase-results")
          .remove(fileNames);

        if (storageError) {

          throw storageError;

        }

      }

      const { error } = await supabase
        .from("purchase_results")
        .delete()
        .eq("id", item.id);

      if (error) {

        throw error;

      }

      alert("削除しました");

      getResults();

    } catch (e: any) {

      alert(e.message);

    }

    setLoading(false);

  }

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          買取実績管理
        </h1>

        <Link
          href="/admin/purchase-results/new"
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
        >
          ＋ 新規登録
        </Link>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {results.map((item) => (

          <div
            key={item.id}
            className="
              bg-zinc-900
              rounded-2xl
              overflow-hidden
              border
              border-zinc-800
              hover:border-yellow-500
              transition
            "
          >

            <img
              src={
                item.images?.[0] ||
                "https://placehold.co/800x600?text=No+Image"
              }
              alt={item.car_name}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <p className="text-zinc-400 text-sm">
                {item.prefecture}
                {item.city && `・${item.city}`}
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {item.car_name}
              </h2>

              {item.grade && (
                <p className="text-zinc-400 mt-1">
                  {item.grade}
                </p>
              )}

              <div className="flex gap-5 text-sm text-zinc-300 mt-5">

                <span>
                  📅 {item.year}
                </span>

                <span>
                  🚗 {item.mileage}
                </span>

              </div>

              <div className="flex gap-3 mt-8">

                <Link
                  href={`/admin/purchase-results/edit/${item.id}`}
                  className="
                    flex-1
                    text-center
                    bg-blue-600
                    hover:bg-blue-500
                    rounded-xl
                    py-3
                    font-bold
                    transition
                  "
                >
                  編集
                </Link>

                <button
                  onClick={() => deleteResult(item)}
                  disabled={loading}
                  className="
                    flex-1
                    bg-red-600
                    hover:bg-red-500
                    rounded-xl
                    py-3
                    font-bold
                    transition
                  "
                >
                  削除
                </button>

              </div>

            </div>

          </div>

        ))}
            </div>

      {results.length === 0 && (
        <div className="text-center py-24">

          <h2 className="text-3xl font-bold">
            買取実績はまだありません
          </h2>

          <p className="text-zinc-400 mt-6">
            「＋ 新規登録」から最初の買取実績を登録してください。
          </p>

        </div>
      )}

    </main>

  );

}