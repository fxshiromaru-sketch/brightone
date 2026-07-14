type Props = {
  description: string;
};

export default function SalePoint({ description }: Props) {
  return (
    <section className="bg-zinc-900 rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold border-l-4 border-yellow-500 pl-3 mb-5">
        セールスポイント
      </h2>

      <p className="leading-8 whitespace-pre-wrap text-zinc-300">
        {description || "コメントはありません。"}
      </p>

    </section>
  );
}