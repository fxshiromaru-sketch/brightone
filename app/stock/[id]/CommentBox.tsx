type Props = {
  comment?: string;
};

export default function CommentBox({
  comment,
}: Props) {
  return (
    <section className="mt-12">

      <div className="rounded-2xl bg-white shadow-xl overflow-hidden">

        <div className="bg-yellow-500 px-6 py-4">

          <h2 className="text-black text-xl font-bold">
            販売店コメント
          </h2>

        </div>

        <div className="p-8">

          <p className="text-zinc-800 whitespace-pre-wrap leading-8 text-[15px]">

            {comment || "コメントはありません。"}

          </p>

        </div>

      </div>

    </section>
  );
}