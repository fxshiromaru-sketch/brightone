"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleDelete() {

    const ok = confirm(
      "この査定依頼を削除しますか？\nこの操作は元に戻せません。"
    );

    if (!ok) return;

    try {

      setLoading(true);

      const response = await fetch(
        "/api/purchase/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {

        throw new Error(result.error);

      }

      alert("削除しました");

      router.push("/admin/dashboard/purchase");

      router.refresh();

    } catch (error) {

      console.error(error);

      alert("削除に失敗しました");

    } finally {

      setLoading(false);

    }

  }

  return (

    <button
      onClick={handleDelete}
      disabled={loading}
      className="
      mt-8
      bg-red-600
      hover:bg-red-700
      text-white
      font-bold
      px-6
      py-3
      rounded-xl
      transition
      "
    >

      {loading ? "削除中..." : "🗑 この査定を削除"}

    </button>

  );

}