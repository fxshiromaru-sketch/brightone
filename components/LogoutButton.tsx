"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function LogoutButton(){


  const router = useRouter();



  async function logout(){


    await supabase.auth.signOut();


    router.push(
      "/admin/login"
    );


    router.refresh();


  }




  return (

    <button

      onClick={logout}

      className="
      bg-zinc-800
      hover:bg-red-600
      transition
      px-5
      py-2
      rounded-xl
      text-sm
      font-bold
      "

    >

      ログアウト

    </button>

  );


}