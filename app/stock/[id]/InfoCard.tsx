type Props = {
  title: string;
  value?: string | number | null;
};

export default function InfoCard({
  title,
  value,
}: Props) {


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

      {/* タイトル */}

      <div
        className="
        bg-zinc-800
        px-4
        py-2
        "
      >

        <p
          className="
          text-xs
          text-zinc-400
          font-bold
          tracking-wider
          "
        >

          {title}

        </p>

      </div>



      {/* 内容 */}

      <div
        className="
        px-4
        py-5
        "
      >

        <p
          className="
          text-lg
          md:text-xl
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