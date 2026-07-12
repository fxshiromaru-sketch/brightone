"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


type Props = {

  id:string;

  currentStatus:string;

};



const statuses = [

  "受付",
  "査定中",
  "商談中",
  "成約",
  "不成立"

];




export default function StatusUpdate({

  id,

  currentStatus

}:Props){


  const router = useRouter();


  const [status,setStatus] = useState(
    currentStatus
  );


  const [loading,setLoading] = useState(false);



  async function updateStatus(){


    try {


      setLoading(true);



      const {
        error
      } = await supabase

        .from("purchase_requests")

        .update({

          status

        })

        .eq(

          "id",

          id

        );



      if(error){

        throw error;

      }



      router.refresh();



    } catch(error){


      console.error(
        error
      );


      alert(
        "ステータス更新に失敗しました"
      );



    } finally {


      setLoading(false);


    }


  }




  return (

    <div
      className="
      mt-6
      bg-black
      rounded-xl
      p-5
      "
    >


      <h3
        className="
        font-bold
        mb-4
        "
      >

        ステータス変更

      </h3>




      <div
        className="
        flex
        flex-col
        md:flex-row
        gap-4
        "
      >


        <select

          value={status}

          onChange={(e)=>
            setStatus(e.target.value)
          }

          className="
          bg-zinc-900
          border
          border-zinc-700
          rounded-xl
          px-4
          py-3
          "

        >


          {
            statuses.map((item)=>(

              <option
                key={item}
                value={item}
              >

                {item}

              </option>

            ))
          }


        </select>




        <button

          onClick={updateStatus}

          disabled={loading}

          className="
          bg-yellow-500
          text-black
          font-bold
          px-6
          py-3
          rounded-xl
          hover:bg-yellow-400
          transition
          "

        >

          {
            loading
            ?
            "更新中..."
            :
            "変更する"
          }


        </button>



      </div>



    </div>

  );

}