"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PurchaseForm() {
  const [loading, setLoading] = useState(false);

  const [files, setFiles] = useState<File[]>([]);

  const [form, setForm] = useState({
    name: "",
    prefecture: "",
    city: "",
    phone: "",
    email: "",

    maker: "",
    car_name: "",
    year: "",
    mileage: "",
    repair_history: "不明",

    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const selected = Array.from(e.target.files);

    if (selected.length > 10) {
      alert("写真は10枚までです。");
      return;
    }

    setFiles(selected);
  }
    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {

      const imageUrls: string[] = [];

      for (const file of files) {

        const fileName =
          Date.now() +
          "-" +
          Math.random().toString(36).substring(2) +
          "-" +
          file.name;

        const { error: uploadError } = await supabase.storage
          .from("purchase-images")
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("purchase-images")
          .getPublicUrl(fileName);

        imageUrls.push(data.publicUrl);
      }

      const { error } = await supabase
        .from("purchase_requests")
        .insert([
          {
            ...form,
            images: imageUrls,
          },
        ]);

      if (error) throw error;

      alert("査定依頼を送信しました！");

      setForm({
        name: "",
        prefecture: "",
        city: "",
        phone: "",
        email: "",

        maker: "",
        car_name: "",
        year: "",
        mileage: "",

        repair_history: "不明",

        message: "",
      });

      setFiles([]);

    } catch (err) {
      console.error(err);
      alert("送信に失敗しました。");
    }

    setLoading(false);
  }
  }