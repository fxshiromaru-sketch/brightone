"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `お問い合わせ内容%0A` +
      `お名前: ${name}%0A` +
      `電話番号: ${phone}%0A` +
      `内容: ${message}`;

    // LINE送信用（仮リンク）
    window.open(`https://line.me/R/msg/text/?${text}`, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-10 flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="お名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded bg-black border border-gray-600 text-white"
      />

      <input
        type="tel"
        placeholder="電話番号"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-3 rounded bg-black border border-gray-600 text-white"
      />

      <textarea
        placeholder="お問い合わせ内容"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-3 rounded bg-black border border-gray-600 text-white h-32"
      />

      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-full transition"
      >
        LINEで送信する
      </button>
    </form>
  );
}