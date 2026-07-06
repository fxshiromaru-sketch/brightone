"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 簡易バリデーション
    if (!name || !phone || !email || !message) {
      alert("全ての項目を入力してください");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);

    const res = await fetch("https://formspree.io/f/maqgkykl", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (res.ok) {
      alert("送信しました！");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } else {
      alert("送信に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-10 flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="お名前（必須）"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded bg-black border border-gray-600 text-white"
        required
      />

      <input
        type="tel"
        placeholder="電話番号（必須）"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-3 rounded bg-black border border-gray-600 text-white"
        required
      />

      <input
        type="email"
        placeholder="メールアドレス（必須）"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded bg-black border border-gray-600 text-white"
        required
      />

      <textarea
        placeholder="お問い合わせ内容（必須）"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-3 rounded bg-black border border-gray-600 text-white h-32"
        required
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