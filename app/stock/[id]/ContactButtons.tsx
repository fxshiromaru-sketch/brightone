import {
  Phone,
  MessageCircle,
} from "lucide-react";

type Props = {
  carName: string;
};

export default function ContactButtons({
  carName,
}: Props) {

  const lineMessage = encodeURIComponent(
    `ホームページを見ました。

【${carName}】について問い合わせしたいです。`
  );

  return (

    <div className="mt-12 grid md:grid-cols-2 gap-5">

      {/* 電話 */}

      <a
        href="tel:08055637830"
        className="
        flex items-center justify-center gap-3
        rounded-2xl
        bg-yellow-500
        hover:bg-yellow-400
        text-black
        font-bold
        py-5
        text-lg
        transition
        shadow-lg
        hover:scale-[1.02]
        "
      >

        <Phone size={22} />

        電話で問い合わせ

      </a>

      {/* LINE */}

      <a
        href={`https://lin.ee/NHhNj1t`}
        target="_blank"
        className="
        flex items-center justify-center gap-3
        rounded-2xl
        bg-[#06C755]
        hover:bg-[#05b14c]
        text-white
        font-bold
        py-5
        text-lg
        transition
        shadow-lg
        hover:scale-[1.02]
        "
      >

        <MessageCircle size={22} />

        LINEで問い合わせ

      </a>

    </div>

  );

}