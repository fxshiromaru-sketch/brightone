import { ReactNode } from "react";
import {
  Calendar,
  Gauge,
  ShieldCheck,
  Fuel,
  Cog,
  Car,
  Palette,
  Wrench,
  Users,
  DoorOpen,
} from "lucide-react";

type Props = {
  title: string;
  value: any;
};

export default function InfoCard({
  title,
  value,
}: Props) {
const icons: Record<string, ReactNode> = {
    年式: <Calendar size={20} />,
    走行距離: <Gauge size={20} />,
    車検: <ShieldCheck size={20} />,
    燃料: <Fuel size={20} />,
    ミッション: <Cog size={20} />,
    駆動方式: <Car size={20} />,
    カラー: <Palette size={20} />,
    排気量: <Wrench size={20} />,
    修復歴: <Wrench size={20} />,
    保証: <ShieldCheck size={20} />,
    法定整備: <Wrench size={20} />,
    定員: <Users size={20} />,
    ドア数: <DoorOpen size={20} />,
  };

  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-yellow-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/20">

      <div className="flex items-center gap-2 text-zinc-400">

        {icons[title]}

        <span className="text-sm">
          {title}
        </span>

      </div>

      <p className="mt-4 text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
        {value || "-"}
      </p>

    </div>
  );
}