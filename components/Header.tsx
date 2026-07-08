import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-red-600">

      {/* 赤ライン */}
      <div className="h-1 bg-red-600"></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Bright One"
            className="h-16 w-auto"
          />
        </Link>

        {/* メニュー */}
        <nav className="hidden lg:flex items-center gap-10 font-bold text-white">

          <Link href="/">
            HOME
          </Link>

          <Link href="/inventory">
            在庫車一覧
          </Link>

          <a href="#service">
            サービス
          </a>

          <a href="#access">
            アクセス
          </a>

          <a href="#contact">
            お問い合わせ
          </a>

        </nav>

        {/* 電話番号 */}
        <div className="hidden xl:flex flex-col border border-red-600 rounded-lg overflow-hidden">

          <a
            href="tel:0479213038"
            className="bg-black px-5 py-2 text-white hover:bg-red-600 transition"
          >
            ☎ 0479-21-3038
          </a>

          <a
            href="tel:08055637830"
            className="bg-zinc-900 px-5 py-2 text-white hover:bg-red-600 transition"
          >
            📱 080-5563-7830
          </a>

        </div>

      </div>

      {/* 下ライン */}
      <div className="flex h-3">

        <div className="bg-red-600 w-1/3"></div>

        <div className="bg-white w-12 skew-x-[-35deg]"></div>

        <div className="bg-black flex-1"></div>

      </div>

    </header>
  );
}