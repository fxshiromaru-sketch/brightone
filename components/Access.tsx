
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
        TEL/FAX：0479-21-3038
        携帯：080-5563-7830
      </p>

      <p className="mt-2 text-gray-400">
        営業時間 9:00〜18:00
      </p>

      <p className="text-gray-400">
        定休日：日曜日
      </p>
      <p className="text-gray-400 text-center mb-6">
  ご来店前にお電話またはLINEでご連絡いただけますと、
  スムーズにご案内できます。
</p>
<div className="mt-10 rounded-2xl overflow-hidden shadow-xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.1100606647174!2d140.7385857!3d35.748099499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60231ee8f18346bb%3A0xf3748575914adf89!2z44CSMjg4LTA4NTUg5Y2D6JGJ55yM6Yqa5a2Q5biC54y_55Sw55S677yW77yS77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1783586531403!5m2!1sja!2sjp"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    className="rounded-2xl"
  />
</div>
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

