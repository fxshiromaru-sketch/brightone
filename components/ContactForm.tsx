"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://formspree.io/f/maqgkykl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        message,
      }),
    });

    alert("送信しました！");
    setName("");
    setPhone("");
    setMessage("");
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
        送信する
      </button>
    </form>
  );
}