import Link from "next/link";
export default function Purchase(){

return (

<section className="py-20 bg-zinc-900 text-white">

<div className="max-w-5xl mx-auto px-6 text-center">


<h2 className="text-3xl md:text-4xl font-bold mb-5">

車を売るなら
Bright Oneへ

</h2>


<p className="text-zinc-300 leading-8 mb-10">

スポーツカー・カスタム車から
普段使いのお車まで。
<br />

車を知り尽くしたスタッフが
大切な愛車を査定します。

</p>



<div className="grid md:grid-cols-3 gap-5 mb-10">


<div className="bg-black rounded-xl p-6">

<h3 className="font-bold text-xl mb-3">

高価買取

</h3>

<p className="text-sm text-zinc-400">

車の価値をしっかり確認して適正価格をご提示します。
距離の走ったお車や年式の古いお車も他より高く買い取れる場合がございますのでご相談ください。

</p>

</div>



<div className="bg-black rounded-xl p-6">

<h3 className="font-bold text-xl mb-3">

カスタム車歓迎

</h3>

<p className="text-sm text-zinc-400">

スポーツカー、ドリ車、改造車も査定可能。
お気軽にご相談ください。
遠方の方でもLiNE査定で概算価格をお伝え出来ます。
</p>

</div>



<div className="bg-black rounded-xl p-6">

<h3 className="font-bold text-xl mb-3">

不動車も相談OK

</h3>

<p className="text-sm text-zinc-400">

事故車・故障車・いらないお車なども
お気軽にご相談ください。

</p>

</div>


</div>



<div className="flex justify-center gap-5 flex-wrap">

  <a
    href="#contact"
    className="border border-white px-8 py-4 rounded-full"
  >
    ✉ メールでお車の無料査定
  </a>

<a
href="https://line.me/ti/p/qd6RpQYTLe"
target="_blank"
className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl"
>

LINEでお車の無料査定

</a>
<Link
href="/purchase"
className="
border
border-white
px-8
py-4
rounded-xl
font-bold
"
>
詳しい買取情報を見る
</Link>

</div>



</div>

</section>

)

}