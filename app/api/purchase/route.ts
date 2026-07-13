import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function POST(
  request: Request
) {

  try {


    const body =
      await request.json();



    const {

      form,

      imageUrls

    } = body;




    const {

      error

    } = await supabase

      .from("purchase_requests")

      .insert([

        {

          name:
            form.name,


          phone:
            form.phone,


          email:
            form.email,


          maker:
            form.maker,


          car_name:
            form.car_name,


          year:
            form.year,


          mileage:
            form.mileage,


          repair_history:
            form.repair_history,


          address:
            `${form.prefecture}${form.city}`,


          comment:
            form.message,


          images:
            imageUrls,


          status:
            "受付"

        }

      ]);




    if(error){

      throw error;

    }



    return NextResponse.json({

      success:true

    });



  } catch(error){


    console.error(error);



    return NextResponse.json(

      {
        success:false
      },

      {
        status:500
      }

    );


  }


}