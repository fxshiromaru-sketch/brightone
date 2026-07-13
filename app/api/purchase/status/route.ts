import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";


export async function POST(
  request: Request
){

  try {


    const body = await request.json();


    const {
      id,
      status
    } = body;



    if(!id || !status){

      return NextResponse.json(
        {
          success:false,
          error:"データ不足"
        },
        {
          status:400
        }
      );

    }



    const {
      error
    } = await supabaseAdmin

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



    return NextResponse.json({

      success:true

    });



  }catch(error){


    console.error(error);


    return NextResponse.json(

      {
        success:false,
        error:"更新失敗"
      },

      {
        status:500
      }

    );

  }

}