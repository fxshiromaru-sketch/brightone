import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-zinc-900">

      <h2 className="text-5xl font-bold mb-6">
        CONTACT
      </h2>

      <p className="text-gray-400 mb-10">
        お車に関することはお気軽にお問い合わせください
      </p>

      <div className="bg-green-500 text-white text-center py-3 rounded-xl font-bold text-xl mb-8 max-w-3xl mx-auto">
        🚗 ＼ LINEからのお問い合わせ大歓迎！ ／
      </div>

      <p className="text-gray-300 leading-8 max-w-3xl mx-auto mb-10">

        在庫確認・追加写真のご依頼・ローンのご相談・買取査定など、<br />
        お気軽にメッセージをお送りください。
        <br /><br />

        <span className="font-bold text-white">
          こんなお問い合わせも大歓迎です！
        </span>

        <br /><br />

        「この車はまだ購入できますか？」
        <br />
        「気になる部分の写真を送ってほしいです。」
        <br />
        「ローンは利用できますか？」
        <br />
        「今乗っている車を査定してほしいです。」
        <br />
        「車選びの相談をしたいです。」

        <br /><br />

        営業時間外にいただいたLINEにつきましても、
        確認次第、順番にご返信いたします。

        <br /><br />

        どんな些細なことでも、お気軽にご相談ください。

        <br /><br />

        <span className="font-semibold text-white">
          皆さまからのお問い合わせを心よりお待ちしております。
        </span>

      </p>

      <ContactForm />

    </section>
  );
}