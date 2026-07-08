import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* ロゴ */}
        <Link href="/">
         <img
  src="/logo.png"
  alt="Bright One"
  className="h-10 md:h-12 w-auto"
/>
        </Link>

        {/* メニュー */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">
            HOME
          </Link>

          <Link href="/stock" className="hover:text-yellow-400 transition">
            在庫車一覧
          </Link>

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

        {/* 右側ボタン */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href="tel:0479213038"
            className="bg-yellow-500 text-black px-5 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            📞 電話
          </a>

          <a
            href="https://line.me/ti/p/qd6RpQYTLe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-3 rounded-full font-bold hover:bg-green-400 transition"
          >
            💬 LINE登録
          </a>

        </div>

      </div>
    </header>
  );
}