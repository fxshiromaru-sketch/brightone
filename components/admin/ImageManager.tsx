"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type ImageManagerProps = {
  images: string[];
  onChange: (images: string[]) => void;
};

export default function ImageManager({ images, onChange }: ImageManagerProps) {
  const [previewImages, setPreviewImages] = useState<string[]>(images);
  const [uploading, setUploading] = useState(false);

  const handleSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);

    const uploaded: string[] = [];

    for (const file of Array.from(files)) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("car-images")
        .upload(fileName, file);

      if (error) {
        alert(error.message);
        setUploading(false);
        return;
      }

      const { data } = supabase.storage
        .from("car-images")
        .getPublicUrl(fileName);

      uploaded.push(data.publicUrl);
    }

    const next = [...previewImages, ...uploaded];
    setPreviewImages(next);
    onChange(next);
    setUploading(false);
  };

  const removeImage = (index: number) => {
    const next = previewImages.filter((_, i) => i !== index);
    setPreviewImages(next);
    onChange(next);
  };

  const moveImage = (index: number, dir: -1 | 1) => {
    const next = [...previewImages];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setPreviewImages(next);
    onChange(next);
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">車両画像</h2>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleSelect}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
      />

      {uploading && <p className="text-yellow-400">アップロード中...</p>}

      {previewImages.length === 0 ? (
        <div className="rounded-xl border border-dashed p-10 text-center text-gray-400">
          画像はまだありません
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {previewImages.map((image, index) => (
            <div key={image + index} className="relative overflow-hidden rounded-xl border">
              <img src={image} alt="" className="aspect-video w-full object-cover" />
              {index === 0 && (
                <div className="absolute left-2 top-2 rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-black">
                  メイン画像
                </div>
              )}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                <button type="button" onClick={() => moveImage(index,-1)}>←</button>
                <button type="button" onClick={() => removeImage(index)}>削除</button>
                <button type="button" onClick={() => moveImage(index,1)}>→</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
