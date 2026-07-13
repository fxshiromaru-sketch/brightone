"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import { submitPurchaseRequest } from "@/lib/purchase";


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
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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
if(!form.email){

  alert("メールアドレスを入力してください。");

  return;

}


if(!form.phone){

  alert("電話番号を入力してください。");

  return;

}

    if (!form.name || !form.phone || !form.car_name) {

      alert(
        "お名前・メールアドレス・電話番号・車種は必須です"
      );

      return;

    }



    try {


      setLoading(true);

      setMessage("");



      await submitPurchaseRequest(
        form,
        images
      );



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


      console.error(error);


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
      space-y-8
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
  placeholder="メールアドレス"
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

        placeholder="
車の状態やカスタム内容など
ご自由に入力してください
        "

        className="
        input
        min-h-[150px]
        w-full
        "

      />




      <div>


        <h3 className="font-bold mb-4">
          車両写真
        </h3>


        <ImageUploader
          onChange={setImages}
        />


      </div>





      <button

        disabled={loading}

        className="
        w-full
        bg-yellow-500
        text-black
        font-bold
        py-4
        rounded-xl
        hover:bg-yellow-400
        transition
        "

      >

        {
          loading
          ?
          "送信中..."
          :
          "無料査定を依頼する"
        }


      </button>




      {
        message && (

          <p className="
          text-center
          text-yellow-400
          font-bold
          ">
            {message}
          </p>

        )
      }



    </form>

  );

}