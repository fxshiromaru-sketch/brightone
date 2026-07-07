export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-[0.3em] text-white">
            Bright One
          </h1>
          <p className="text-xs text-yellow-400">
            Drive Your Dream.
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-white">

          <a href="#" className="hover:text-yellow-400 transition">
            HOME
          </a>

          <a href="#service" className="hover:text-yellow-400 transition">
            サービス
          </a>

          <a href="#access" className="hover:text-yellow-400 transition">
            アクセス
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            お問い合わせ
          </a>

        </nav>

        <a
          href="tel:08055637930"
          className="hidden lg:flex bg-yellow-500 text-black px-5 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
        >
          📞 お問い合わせ
        </a>
<a
  href="https://line.me/ti/p/qd6RpQYTLe"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-white px-4 py-2 rounded-full font-bold"
>
  LINE登録
</a>
      </div>
    </header>
  );
}