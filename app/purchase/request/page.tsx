import Header from "@/components/Header";
import PurchaseForm from "@/components/purchase/PurchaseForm";



export const metadata = {

  title:
    "無料車査定依頼 | Bright One",

  description:
    "千葉県銚子市の中古車販売店Bright One。スポーツカー・カスタムカー・普通車・軽自動車など無料査定受付中。愛車の価値を専門スタッフが査定します。",

  keywords:[
    "車買取",
    "車査定",
    "中古車買取",
    "スポーツカー買取",
    "銚子市 車買取",
    "Bright One"
  ]

};





export default function PurchaseRequestPage(){



  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      "
    >


      <Header />



      <section
        className="
        pt-36
        px-6
        pb-20
        "
      >


        <div
          className="
          max-w-5xl
          mx-auto
          text-center
          "
        >



          <h1
            className="
            text-4xl
            md:text-6xl
            font-bold
            mb-8
            "
          >

            無料車査定依頼

          </h1>




          <p
            className="
            text-zinc-300
            text-lg
            leading-8
            "
          >

            車両情報と写真を送るだけで簡単査定。
            <br />

            Bright Oneが愛車の価値を
            正しく確認します。

          </p>



        </div>


      </section>





      <section
        className="
        px-6
        pb-24
        "
      >


        <div
          className="
          max-w-4xl
          mx-auto
          "
        >


          <PurchaseForm />


        </div>


      </section>




    </main>

  );


}