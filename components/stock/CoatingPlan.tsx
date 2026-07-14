type Props = {
  car: any;
};

export default function CoatingPlan({ car }: Props) {


  if (!car.coating_name || !car.coating_price) {
    return null;
  }


  return (

    <section className="bg-zinc-900 rounded-2xl p-6 mt-8 border border-zinc-800">


      <h2 className="text-2xl font-bold border-l-4 border-yellow-500 pl-3 mb-6">
        コーティングプラン
      </h2>



      <div className="bg-black rounded-xl p-5">


        <h3 className="text-xl font-bold">
          {car.coating_name}
        </h3>



        <div className="flex items-end mt-3">


          <span className="text-3xl font-black text-yellow-400">
            {Number(car.coating_price).toLocaleString()}
          </span>


          <span className="text-sm ml-2 mb-1">
            円（税込）
          </span>


        </div>



        {car.coating_description && (

          <p className="text-zinc-400 mt-5 leading-relaxed whitespace-pre-line">

            {car.coating_description}

          </p>

        )}


      </div>


    </section>

  );

}