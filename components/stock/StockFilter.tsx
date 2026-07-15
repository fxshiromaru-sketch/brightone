"use client";

type Props = {
  keyword: string;
  sort: string;
  setKeyword: (value:string)=>void;
  setSort: (value:string)=>void;
};

export default function StockFilter({
  keyword,
  sort,
  setKeyword,
  setSort,
}: Props) {


  return (

    <div className="
      bg-zinc-900
      rounded-2xl
      p-6
      border
      border-zinc-800
      mb-10
    ">


      <div className="grid md:grid-cols-2 gap-4">


        <input
          type="text"
          placeholder="メーカー・車名で検索"
          value={keyword}
          onChange={(e)=>
            setKeyword(e.target.value)
          }
          className="
          bg-black
          border
          border-zinc-700
          rounded-xl
          px-4
          py-3
          text-white
          "
        />



        <select
          value={sort}
          onChange={(e)=>
            setSort(e.target.value)
          }
          className="
          bg-black
          border
          border-zinc-700
          rounded-xl
          px-4
          py-3
          text-white
          "
        >

          <option value="new">
            新着順
          </option>


          <option value="price_low">
            価格が安い順
          </option>


          <option value="price_high">
            価格が高い順
          </option>


          <option value="mileage">
            走行距離が少ない順
          </option>


        </select>


      </div>


    </div>

  );

}