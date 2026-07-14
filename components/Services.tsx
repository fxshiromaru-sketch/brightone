import Link from "next/link";

export default function Services() {

  const services = [

    {
      title: "中古車販売",
      description: (
        <>
          スポーツカーから軽自動車まで
          幅広い車種を取り扱っています。
          <br /><br />
          ご希望のお車探しや整備、
          カスタムのご相談もお気軽にどうぞ。
        </>
      ),
      href: "/stock",
    },


    {
      title: "車買取",
      description: (
        <>
          無料査定・高価買取に対応しています。
          <br /><br />
          スポーツカーやカスタム車、
          走行距離の多いお車も積極的に買取します。
        </>
      ),
      href: "/purchase",
    },


    {
      title: "タイヤ交換",
      description: (
        <>
          持ち込みタイヤ交換大歓迎。
          <br /><br />
          ネット購入タイヤの直送にも
          対応しています。
        </>
      ),
      href: "/service/tire",
    },


    {
      title: "カスタム",
      description: (
        <>
          ホイール交換やパーツ取付など、
          お好みのスタイル作りをサポート。
          <br /><br />
          愛車のカスタムもお任せください。
        </>
      ),
      href: "/service/custom",
    },


    {
      title: "レッカー",
      description: (
        <>
          事故・故障など緊急時にも対応。
          <br /><br />
          動かなくなった車両の搬送も
          ご相談ください。
        </>
      ),
      href: "/service/tow",
    },

  ];


  return (

    <section
      id="service"
      className="py-24 px-6 max-w-[1700px] mx-auto"
    >


      <h2 className="text-5xl font-bold text-center mb-16">
        SERVICE
      </h2>



      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >


        {services.map((service) => (

          <Link
            key={service.title}
            href={service.href}
            className="
              block
              bg-zinc-900
              rounded-2xl
              p-8
              min-h-[280px]
              border
              border-zinc-800
              hover:border-yellow-500
              hover:-translate-y-1
              hover:shadow-yellow-500/20
              hover:shadow-lg
              transition-all
              duration-300
            "
          >


            <h3
              className="
                text-2xl
                font-bold
                mb-5
              "
            >
              {service.title}
            </h3>



            <p
              className="
                text-base
                leading-8
                text-gray-300
              "
            >
              {service.description}
            </p>



            <div
              className="
                mt-8
                text-yellow-400
                font-bold
              "
            >
              詳細はこちら →
            </div>



          </Link>

        ))}


      </div>


    </section>

  );

}