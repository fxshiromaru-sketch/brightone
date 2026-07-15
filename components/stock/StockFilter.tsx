"use client";

type Props = {

  keyword:string;

  sort:string;

  maker:string;

  priceRange:string;

  setKeyword:(value:string)=>void;

  setSort:(value:string)=>void;

  setMaker:(value:string)=>void;

  setPriceRange:(value:string)=>void;

};


export default function StockFilter({

  keyword,

  sort,

  maker,

  priceRange,

  setKeyword,

  setSort,

  setMaker,

  setPriceRange,

}:Props){



return (

<div className="
bg-zinc-900
rounded-2xl
p-6
border
border-zinc-800
">


<div className="grid md:grid-cols-4 gap-4">



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

value={maker}

onChange={(e)=>
setMaker(e.target.value)
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


<option value="">
メーカー指定なし
</option>

<option value="トヨタ">
トヨタ
</option>

<option value="日産">
日産
</option>

<option value="ホンダ">
ホンダ
</option>

<option value="スズキ">
スズキ
</option>

<option value="マツダ">
マツダ
</option>


</select>





<select

value={priceRange}

onChange={(e)=>
setPriceRange(e.target.value)
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


<option value="">
価格指定なし
</option>

<option value="500000">
50万円以下
</option>

<option value="1000000">
100万円以下
</option>

<option value="2000000">
200万円以下
</option>

<option value="3000000">
300万円以下
</option>

<option value="4000000">
400万円以下
</option>

<option value="5000000">
500万円以下
</option>
</select>





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