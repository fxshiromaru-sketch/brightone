"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function EditPurchaseResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [images, setImages] = useState<string[]>([]);

  const [form, setForm] = useState({
    prefecture: "",
    city: "",
    car_name: "",
    grade: "",
    year: "",
    mileage: "",
    purchase_type: "",
    comment: "",
    published: true,
  });

  useEffect(() => {
    async function load() {
      const { id } = await params;

      setId(id);

      getResult(id);
    }

    load();
  }, []);

  async function getResult(id: string) {
    const { data, error } = await supabase
      .from("purchase_results")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    setForm({
      prefecture: data.prefecture || "",
      city: data.city || "",
      car_name: data.car_name || "",
      grade: data.grade || "",
      year: data.year || "",
      mileage: data.mileage || "",
      purchase_type: data.purchase_type || "",
      comment: data.comment || "",
      published: data.published,
    });

    setImages(data.images || []);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }
  const uploadImages = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const files = e.target.files;

  if (!files || files.length === 0) return;

  setUploading(true);

  try {
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      const fileExt = file.name.split(".").pop();

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;

      const { error } = await supabase.storage
        .from("purchase-results")
        .upload(fileName, file);

      if (error) throw error;

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("purchase-results")
        .getPublicUrl(fileName);

      uploadedUrls.push(publicUrl);
    }

    setImages([...images, ...uploadedUrls]);

  } catch (error) {
    console.error(error);
    alert("画像アップロードに失敗しました");
  } finally {
    setUploading(false);
  }
};

const deleteImage = async (url: string) => {
  try {
    const fileName = url.split("/purchase-results/")[1];

    if (!fileName) return;

    const { error } = await supabase.storage
      .from("purchase-results")
      .remove([fileName]);

    if (error) throw error;

    setImages(images.filter((img) => img !== url));

  } catch (error) {
    console.error(error);
    alert("削除できませんでした");
  }
};

const moveImage = (
  index: number,
  direction: "left" | "right"
) => {
  const newImages = [...images];

  const target =
    direction === "left"
      ? index - 1
      : index + 1;

  if (target < 0 || target >= newImages.length) return;

  [newImages[index], newImages[target]] = [
    newImages[target],
    newImages[index],
  ];

  setImages(newImages);
};
async function updateResult(
  e: React.FormEvent
) {
  e.preventDefault();

  setLoading(true);

  const { error } = await supabase
    .from("purchase_results")
    .update({
      prefecture: form.prefecture,
      city: form.city,
      car_name: form.car_name,
      grade: form.grade,
      year: form.year,
      mileage: form.mileage,
      purchase_type: form.purchase_type,
      comment: form.comment,
      published: form.published,
      images: images,
    })
    .eq("id", id);

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  alert("更新しました");

  router.push("/admin/purchase-results");
}

return (
  <main className="min-h-screen bg-black text-white p-10">

    <h1 className="text-3xl font-bold mb-8">
      買取実績編集
    </h1>

    <form
      onSubmit={updateResult}
      className="max-w-3xl space-y-4"
    >

      <input
        name="prefecture"
        placeholder="都道府県"
        value={form.prefecture}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-900 rounded"
      />

      <input
        name="city"
        placeholder="市区町村"
        value={form.city}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-900 rounded"
      />

      <input
        name="car_name"
        placeholder="車種"
        value={form.car_name}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-900 rounded"
      />

      <input
        name="grade"
        placeholder="グレード"
        value={form.grade}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-900 rounded"
      />

      <input
        name="year"
        placeholder="年式"
        value={form.year}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-900 rounded"
      />

      <input
        name="mileage"
        placeholder="走行距離"
        value={form.mileage}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-900 rounded"
      />

      <select
        name="purchase_type"
        value={form.purchase_type}
        onChange={handleChange}
        className="w-full p-3 bg-zinc-900 rounded"
      >
        <option value="">買取方法</option>
        <option value="店頭買取">店頭買取</option>
        <option value="出張買取">出張買取</option>
        <option value="下取り">下取り</option>
      </select>

      <textarea
        name="comment"
        placeholder="コメント"
        value={form.comment}
        onChange={handleChange}
        className="w-full h-40 p-3 bg-zinc-900 rounded"
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={form.published}
          onChange={(e) =>
            setForm({
              ...form,
              published: e.target.checked,
            })
          }
        />

        公開する
      </label>

      <div className="pt-6 border-t border-zinc-800">

        <h2 className="text-xl font-bold mb-4">
          画像管理
        </h2>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={uploadImages}
        />

        {uploading && (
          <p className="mt-3">
            アップロード中...
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

          {images.map((img, index) => (

            <div
              key={img}
              className="relative"
            >

              <img
                src={img}
                className="w-full h-32 object-cover rounded"
              />

              {index === 0 && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
                  メイン
                </div>
              )}

              <div className="absolute bottom-2 left-2 flex gap-2">

                <button
                  type="button"
                  onClick={() =>
                    moveImage(index, "left")
                  }
                  className="bg-black/70 px-2 rounded"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() =>
                    moveImage(index, "right")
                  }
                  className="bg-black/70 px-2 rounded"
                >
                  →
                </button>

              </div>

              <button
                type="button"
                onClick={() =>
                  deleteImage(img)
                }
                className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded text-xs"
              >
                削除
              </button>

            </div>

          ))}

        </div>

      </div>

      <button
        disabled={loading}
        className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold"
      >
        {loading ? "保存中..." : "保存"}
      </button>

    </form>

  </main>
);
}