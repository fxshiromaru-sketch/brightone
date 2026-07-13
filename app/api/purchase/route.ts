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




    if(!form){

      return NextResponse.json(
        {
          success:false,
          error:"フォームデータがありません"
        },
        {
          status:400
        }
      );

    }




    const {
      error
    } = await supabase
      .from("purchase_requests")
      .insert([

        {

          maker:
            form.maker,


          car_name:
            form.car_name,


          year:
            form.year,


          mileage:
            form.mileage,


          inspection:
            form.inspection,


          repair_history:
            form.repair_history,



          name:
            form.name,


          phone:
            form.phone,


          email:
            form.email,



          zipcode:
            form.zipcode,


          address:
            form.address,



          comment:
            form.comment,



          images:
            imageUrls,



          status:
            "受付"


        }

      ]);





    if(error){

      console.error(
        error
      );


      return NextResponse.json(

        {
          success:false,
          error:error.message
        },

        {
          status:500
        }

      );

    }




    return NextResponse.json({

      success:true

    });




  } catch(error){



    console.error(
      "purchase api error:",
      error
    );



    return NextResponse.json(

      {

        success:false,

        error:"server error"

      },

      {

        status:500

      }

    );


  }

}