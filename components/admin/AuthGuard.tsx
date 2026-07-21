"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  children: ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      setChecking(false);
    }

    checkAuth();
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        認証確認中...
      </div>
    );
  }

  return <>{children}</>;
}