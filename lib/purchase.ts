import { supabase } from "@/lib/supabase";



type PurchaseForm = {

  maker: string;
  car_name: string;
  year: string;
  mileage: string;
  inspection: string;
  repair_history: string;

  name: string;
  phone: string;
  email: string;

  zipcode: string;
  address: string;

  comment: string;

};





export async function submitPurchaseRequest(

  form: PurchaseForm,

  images: File[]

) {



  try {



    const imageUrls: string[] = [];



    /*
      画像アップロード
    */

    for (
      let i = 0;
      i < images.length;
      i++
    ) {



      const file = images[i];



      const ext =
        file.name.split(".").pop();



      const fileName =
        `${crypto.randomUUID()}.${ext}`;



      const filePath =
        `purchase/${fileName}`;



      const {
        error: uploadError
      } = await supabase
        .storage
        .from("purchase-images")
        .upload(
          filePath,
          file
        );



      if(uploadError){

        throw uploadError;

      }




      const {
        data
      } = supabase
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
      DB保存
    */


    const {
      error
    } = await supabase
      .from("purchase_requests")
      .insert({


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



      });





    if(error){

      throw error;

    }



    return true;



  } catch(error){


    console.error(
      "査定依頼エラー:",
      error
    );


    throw error;


  }


}