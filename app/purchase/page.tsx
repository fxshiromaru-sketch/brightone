import Header from "@/components/Header";

export default function PurchasePage() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Header />


      {/* ヒーロー */}

      <section className="pt-40 px-6 pb-20">

        <div className="max-w-5xl mx-auto text-center">


          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            車買取
          </h1>


          <p className="text-xl text-zinc-300 leading-loose">

            愛車の価値を正しく査定。
            <br />

            車を知り尽くしたスタッフが
            <br />

            あなたの大切な一台を評価します。

          </p>


        </div>

      </section>



      {/* 強み */}

      <section className="px-6 py-16 bg-zinc-900">

        <div className="max-w-5xl mx-auto">


          <h2 className="text-3xl font-bold text-center mb-12">
            Bright Oneが選ばれる理由
          </h2>



          <div className="grid md:grid-cols-2 gap-6">


            <div className="bg-black rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                🛠 車を知るプロが査定
              </h3>

              <p className="text-zinc-400 leading-7">

                二級自動車整備士の知識と
                自動車業界11年の経験を活かし、
                車両状態をしっかり確認します。

              </p>

            </div>



            <div className="bg-black rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                🏎 スポーツカー・カスタム車歓迎
              </h3>

              <p className="text-zinc-400 leading-7">

                86・BRZなどのスポーツカーや
                カスタム車もお気軽にご相談ください。

              </p>

            </div>



            <div className="bg-black rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                🎨 板金・塗装経験
              </h3>

              <p className="text-zinc-400 leading-7">

                傷や修復歴など、
                車の状態を正しく判断します。

              </p>

            </div>



            <div className="bg-black rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                🚗 不動車・事故車も相談OK
              </h3>

              <p className="text-zinc-400 leading-7">

                動かない車や処分に困った車も
                一度ご相談ください。

              </p>

            </div>


          </div>


        </div>


      </section>



      {/* 買取対応 */}

      <section className="px-6 py-16">

        <div className="max-w-5xl mx-auto text-center">


          <h2 className="text-3xl font-bold mb-10">
            買取対応車種
          </h2>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">


            {[
              "普通車",
              "軽自動車",
              "スポーツカー",
              "カスタムカー",
              "旧車",
              "事故車",
              "不動車",
              "廃車相談"
            ].map((item)=>(
              
              <div
                key={item}
                className="
                bg-zinc-900
                rounded-xl
                p-5
                font-bold
                "
              >

                {item}

              </div>

            ))}


          </div>


        </div>


      </section>



{/* 査定依頼の流れ */}

<section className="px-6 py-16">

  <div className="max-w-5xl mx-auto">


    <h2 className="text-3xl font-bold text-center mb-10">
      査定依頼の流れ
    </h2>


    <div className="grid md:grid-cols-3 gap-6">


      <div className="bg-zinc-900 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-4">
          ① お客様と車両の情報を送信
        </h3>

        <p className="text-zinc-400 leading-8">

          お名前<br />
          都道府県・市区町村<br />
          メーカー<br />
          車種<br />
          年式<br />
          走行距離<br />
          車検満了日

        </p>

      </div>



      <div className="bg-zinc-900 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-4">
          ② 車両写真を送信
        </h3>

        <p className="text-zinc-400 leading-8">

          車両全体（前後左右）<br />
          内装写真<br />
          メーター<br />
          傷・凹み箇所<br />
          カスタム箇所

        </p>

      </div>



      <div className="bg-zinc-900 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-4">
          ③ 査定結果をご連絡
        </h3>

        <p className="text-zinc-400 leading-8">

          いただいた情報を確認し、
          <br />
          査定金額をご案内します。

          <br /><br />

          ご来店での査定も可能です。

        </p>

      </div>


    </div>


  </div>


</section>



{/* 査定時の入力内容 */}

<section className="px-6 py-16 bg-zinc-900">


  <div className="max-w-4xl mx-auto">


    <h2 className="text-3xl font-bold text-center mb-8">

      LINE・メール査定で送る内容

    </h2>



    <div className="bg-black rounded-2xl p-8">


      <p className="text-zinc-300 leading-9 whitespace-pre-line">

{`査定お願いします。

お名前：

お住まい
都道府県：
市区町村：

車両情報
メーカー：
車種：
年式：
走行距離：
グレード：
車検満了日：

車両状態
修復歴：
カスタム内容：
傷・凹みなど：

その他ご希望：`}


      </p>


    </div>


  </div>


</section>

     {/* 問い合わせ */}

<section className="px-6 py-20 bg-zinc-900">

  <div className="max-w-4xl mx-auto text-center">


    <h2 className="text-3xl md:text-4xl font-bold mb-6">

      無料査定受付中

    </h2>


    <p className="text-zinc-300 mb-10 leading-8">

      写真を送るだけのLINE査定、
      <br />

      電話・メールでのご相談も受付しています。

      <br />

      愛車の売却をお考えの方は
      お気軽にお問い合わせください。

    </p>



    <div className="flex gap-5 justify-center flex-wrap">


      <a
        href="https://line.me/ti/p/qd6RpQYTLe"
        target="_blank"
        rel="noopener noreferrer"
        className="
        bg-green-500
        text-white
        px-8
        py-4
        rounded-xl
        font-bold
        "
      >
        LINE査定
      </a>



      <a
        href="tel:0479213038"
        className="
        bg-yellow-500
        text-black
        px-8
        py-4
        rounded-xl
        font-bold
        "
      >
        電話相談
      </a>



      <a
        href="#contact"
        className="
        border
        border-white
        px-8
        py-4
        rounded-xl
        font-bold
        hover:bg-white
        hover:text-black
        transition
        "
      >
        メール相談
      </a>


    </div>


  </div>


</section>
    </main>

  );
}