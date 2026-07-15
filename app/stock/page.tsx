"use client";

import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";
import StockCard from "@/components/stock/StockCard";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import StockFilter from "@/components/stock/StockFilter";


export default function StockPage() {


  const [cars,setCars] = useState<any[]>([]);

  const [keyword,setKeyword] = useState("");

  const [sort,setSort] = useState("new");

  const [loading,setLoading] = useState(true);
const [maker,setMaker] = useState("");

const [priceRange,setPriceRange] = useState("");


  useEffect(()=>{


    const getCars = async()=>{


      const { data,error } = await supabase
        .from("cars")
        .select("*");


      if(error){

        console.log(error);

      }else{

        setCars(data || []);

      }


      setLoading(false);

    };


    getCars();


  },[]);





  let filteredCars = [...cars];



  // 検索

  if(keyword){


    filteredCars = filteredCars.filter((car)=>


      car.maker?.includes(keyword) ||

      car.name?.includes(keyword)


    );


  }

// メーカー絞り込み

if(maker){


filteredCars = filteredCars.filter((car)=>


car.maker === maker


);


}





// 価格帯絞り込み

if(priceRange){


filteredCars = filteredCars.filter((car)=>


Number(car.price) <= Number(priceRange)


);


}



  // 並び替え

  filteredCars.sort((a,b)=>{


    if(sort==="price_low"){

      return Number(a.price) - Number(b.price);

    }



    if(sort==="price_high"){

      return Number(b.price) - Number(a.price);

    }



    if(sort==="mileage"){

      return Number(a.mileage) - Number(b.mileage);

    }



    return new Date(b.created_at).getTime()
    -
    new Date(a.created_at).getTime();


  });





  return (

    <main className="min-h-screen bg-black text-white">


      <Header />



      <section className="pt-32 pb-10 border-b border-zinc-800">


        <div className="max-w-7xl mx-auto px-6">


          <h1 className="text-5xl font-bold">
            在庫車一覧
          </h1>



          <p className="text-zinc-400 mt-4">
            Bright One 厳選中古車
          </p>



  <div className="mt-6 text-sm text-zinc-500">

  全 {filteredCars.length} 台掲載

</div>


{keyword && (

  <p className="mt-3 text-yellow-400 font-bold">

    「{keyword}」の検索結果　
    {filteredCars.length}台

  </p>

)}


          <div className="mt-8">

           <StockFilter

keyword={keyword}

sort={sort}

maker={maker}

priceRange={priceRange}

setKeyword={setKeyword}

setSort={setSort}

setMaker={setMaker}

setPriceRange={setPriceRange}

/>

          </div>


        </div>


      </section>





      <section className="py-10">


        <div className="max-w-7xl mx-auto px-6">


          {loading ? (

            <p className="text-center text-zinc-400">
              読み込み中...
            </p>


          ) : (


            <div className="space-y-8">


              {filteredCars.map((car)=>(


                <StockCard

                  key={car.id}

                  car={car}

                />


              ))}



            </div>


          )}



        </div>


      </section>





      <Footer />


    </main>

  );

}