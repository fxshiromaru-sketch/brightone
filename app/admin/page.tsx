"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

   if (error) {
  alert(error.message);
  return;
}

    router.push("/admin/dashboard");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={login}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md"
      >
        <img
          src="/logo.png"
          className="h-16 mx-auto mb-6"
          alt="Bright One"
        />

        <h1 className="text-3xl font-bold text-center mb-8">
          管理画面ログイン
        </h1>

        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-zinc-800"
        />

        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-zinc-800"
        />

        <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold hover:bg-yellow-400">
          ログイン
        </button>
      </form>
    </main>
  );
}