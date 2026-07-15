import {
  CalendarDays,
  Gauge,
  CarFront,
  Fuel,
  Settings,
  CircleCheck,
  Wrench,
  Users,
  DoorOpen,
  BadgeInfo,
} from "lucide-react";


type Props = {
  title: string;
  value?: string | number | null;
};


const icons: Record<string, any> = {

  "年式": CalendarDays,
  "走行距離": Gauge,
  "車検": BadgeInfo,
  "ミッション": Settings,
  "駆動方式": CarFront,
  "燃料": Fuel,
  "排気量": Gauge,
  "修復歴": CircleCheck,
  "保証": CircleCheck,
  "法定整備": Wrench,
  "定員": Users,
  "ドア数": DoorOpen,

};



export default function InfoCard({
  title,
  value,
}: Props) {


const Icon = icons[title] || CarFront;


return (

<div
className="
bg-zinc-900
border
border-zinc-800
rounded-xl
overflow-hidden
transition
hover:border-yellow-500
hover:-translate-y-1
"
>


{/* 上部分 */}

<div
className="
bg-zinc-800
px-3
py-2
flex
items-center
gap-2
"
>

<Icon
size={16}
className="text-yellow-400"
/>


<p
className="
text-xs
text-zinc-400
font-bold
"
>

{title}

</p>


</div>



{/* 下部分 */}

<div
className="
px-3
py-3
"
>
<p
className="
text-base
md:text-lg
font-bold
text-white
"
>

{value || "-"}

</p>



</div>


</div>


);

}