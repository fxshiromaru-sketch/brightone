"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function PurchaseSearch(){


  const router = useRouter();


  const [keyword,setKeyword] = useState("");



  function handleSearch(){


    router.push(

      `/admin/dashboard/purchase?keyword=${encodeURIComponent(keyword)}`

    );


  }




  return (

    <div
      className="
      bg-zinc-900
      rounded-2xl
      p-5
      mb-8
      "
    >


      <div
        className="
        flex
        flex-col
        md:flex-row
        gap-4
        "
      >



        <input

          value={keyword}

          onChange={(e)=>
            setKeyword(e.target.value)
          }

          placeholder="
名前・車種・電話番号で検索
          "

          className="
          flex-1
          bg-black
          border
          border-zinc-700
          rounded-xl
          px-4
          py-3
          text-white
          "

        />



        <button

          onClick={handleSearch}

          className="
          bg-yellow-500
          text-black
          font-bold
          px-8
          py-3
          rounded-xl
          "

        >

          検索

        </button>



      </div>



    </div>

  );

}