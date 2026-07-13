import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";



export async function POST(
  request: Request
) {


  try {



    const formData =
      await request.formData();




    const formRaw =
      formData.get("form");



    if(!formRaw){

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



    const form =
      JSON.parse(
        formRaw.toString()
      );




    const files =
      formData.getAll("images") as File[];




    const imageUrls:string[] = [];





    /*
      Storageへ画像保存
    */

    for(
      const file of files
    ){


      if(!file || file.size === 0){

        continue;

      }



      const ext =
        file.name.split(".").pop();



      const fileName =
        `${crypto.randomUUID()}.${ext}`;



      const filePath =
        `purchase/${fileName}`;





      const arrayBuffer =
        await file.arrayBuffer();



      const buffer =
        Buffer.from(
          arrayBuffer
        );





      const {
        error:uploadError
      } = await supabaseAdmin
        .storage
        .from("purchase-images")
        .upload(
          filePath,
          buffer,
          {
            contentType:
              file.type,
          }
        );



      if(uploadError){

        throw uploadError;

      }




      const {
        data
      } =
      supabaseAdmin
      .storage
      .from("purchase-images")
      .getPublicUrl(
        filePath
      );



      imageUrls.push(
        data.publicUrl
      );


    }





    /*
      査定依頼DB保存
    */


    const {
      error
    } =
    await supabaseAdmin
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

      throw error;

    }





    return NextResponse.json({

      success:true

    });





  }catch(error){


    console.error(
      "purchase api error:",
      error
    );



    return NextResponse.json(

      {

        success:false,

        error:
          error instanceof Error
          ?
          error.message
          :
          "server error"

      },

      {
        status:500
      }

    );


  }


}