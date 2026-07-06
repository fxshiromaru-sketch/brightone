export default function Access() {
  return (
    <section id="access" className="bg-zinc-950 py-24 text-center px-6">

      <h2 className="text-5xl font-bold mb-10">
        ACCESS
      </h2>

      <p className="text-xl font-semibold">
        Bright One
      </p>

      <p className="mt-4 text-gray-400">
        〒288-0855<br />
        千葉県銚子市猿田町622-1
      </p>

      <p className="mt-6 text-gray-400">
        TEL：0479-21-3038
        携帯：080-5563-7830
      </p>

      <p className="mt-2 text-gray-400">
        営業時間 9:00〜18:00
      </p>

      <p className="text-gray-400">
        定休日：日曜日
      </p>

      {/* Googleマップリンク */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=千葉県銚子市猿田町622-1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-6 inline-block"
      >
        Googleマップで開く
      </a>

    </section>
  );
}