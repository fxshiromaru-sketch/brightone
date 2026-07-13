
"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import { supabase } from "@/lib/supabase";


export default function PurchaseForm() {


  const [images, setImages] = useState<File[]>([]);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");



  const [form, setForm] = useState({

    maker: "",
    car_name: "",
    year: "",
    mileage: "",
    inspection: "",
    repair_history: "",

    name: "",
    phone: "",
    email: "",

    zipcode: "",
    address: "",

    comment: "",

  });




  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {


    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });


  };





  const handleSubmit = async (
    e: React.FormEvent
  ) => {


    e.preventDefault();



    if(!form.name){

      alert("お名前を入力してください");

      return;

    }


    if(!form.phone){

      alert("電話番号を入力してください");

      return;

    }


    if(!form.email){

      alert("メールアドレスを入力してください");

      return;

    }


    if(!form.car_name){

      alert("車種を入力してください");

      return;

    }




    try {


      setLoading(true);

      setMessage("");



      const imageUrls:string[] = [];



      for(const file of images){


      const fileName =
  `${crypto.randomUUID()}-${file.name}`;

        const {
          error
        } = await supabase.storage
          .from("purchase-images")
        .upload(
  fileName,
  file,
  {
    contentType: file.type,
    upsert: false,
  }
);


        if(error){

          throw error;

        }



        const {
          data
        } = supabase.storage
          .from("purchase-images")
          .getPublicUrl(
            fileName
          );



        imageUrls.push(
          data.publicUrl
        );


      }





      const response =
        await fetch(
          "/api/purchase",
          {

            method:"POST",

            headers:{

              "Content-Type":
              "application/json",

            },


            body:JSON.stringify({

              form,

              imageUrls,

            }),

          }
        );




      const result =
        await response.json();




      if(!result.success){

        throw new Error(
          "登録失敗"
        );

      }





      setMessage(
        "査定依頼を送信しました。確認後ご連絡いたします。"
      );



      setForm({

        maker:"",
        car_name:"",
        year:"",
        mileage:"",
        inspection:"",
        repair_history:"",

        name:"",
        phone:"",
        email:"",

        zipcode:"",
        address:"",

        comment:"",

      });



      setImages([]);



    } catch(error){


      console.error(
        error
      );


      alert(
        "送信に失敗しました。時間をおいて再度お試しください。"
      );



    } finally {


      setLoading(false);


    }


  };




  return (

    <form
      onSubmit={handleSubmit}
      className="
      bg-zinc-900
      rounded-2xl
      p-6
      md:p-10
      space-8
      "
    >


      <h2 className="
      text-3xl
      font-bold
      text-center
      ">
        無料査定フォーム
      </h2>



      <div className="grid md:grid-cols-2 gap-5">


        <input
          name="maker"
          value={form.maker}
          onChange={handleChange}
          placeholder="メーカー"
          className="input"
        />



        <input
          name="car_name"
          value={form.car_name}
          onChange={handleChange}
          placeholder="車種 ※必須"
          className="input"
        />



        <input
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="年式"
          className="input"
        />



        <input
          name="mileage"
          value={form.mileage}
          onChange={handleChange}
          placeholder="走行距離"
          className="input"
        />



        <input
          name="inspection"
          value={form.inspection}
          onChange={handleChange}
          placeholder="車検満了日"
          className="input"
        />



        <select
          name="repair_history"
          value={form.repair_history}
          onChange={handleChange}
          className="input"
        >

          <option value="">
            修復歴
          </option>

          <option value="なし">
            なし
          </option>

          <option value="あり">
            あり
          </option>

          <option value="不明">
            不明
          </option>

        </select>


      </div>




      <div className="grid md:grid-cols-2 gap-5">


        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="お名前 ※必須"
          className="input"
        />



        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="電話番号 ※必須"
          className="input"
        />



        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="メールアドレス ※必須"
          required
          className="input"
        />



        <input
          name="zipcode"
          value={form.zipcode}
          onChange={handleChange}
          placeholder="郵便番号"
          className="input"
        />

      </div>



      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="住所"
        className="input w-full"
      />



      <textarea
        name="comment"
        value={form.comment}
        onChange={handleChange}
        placeholder="車の状態やカスタム内容など"
        className="
        input
        min-h-[150px]
        w-full
        "
      />



      <ImageUploader
        onChange={setImages}
      />



      <button
        disabled={loading}
        className="
        w-full
        bg-yellow-500
        text-black
        font-bold
        py-4
        rounded-xl
        "
      >

        {
          loading
          ? "送信中..."
          : "無料査定を依頼する"
        }

      </button>



      {
        message &&
        <p className="text-center text-yellow-400 font-bold">
          {message}
        </p>
      }


    </form>

  );

}

