export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-6xl md:text-8xl font-bold tracking-widest">
        BRIGHT ONE
      </h1>

      <p className="text-yellow-400 text-2xl mt-6 italic">
        Drive Your Dream.
      </p>

      <p className="mt-8 text-xl text-gray-300">
        中古車販売・買取・タイヤ交換・レッカー
      </p>

      <div className="flex gap-4 mt-10 flex-wrap justify-center">
        <a
          href="tel:0479213038"
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition"
        >
          📞 お問い合わせ
        </a>

        <a
          href="#contact"
          className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
        >
          LINEで相談
        </a>
      </div>
    </section>
  );
}