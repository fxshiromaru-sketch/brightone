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
<Link
  href="/purchase"
  className="hover:text-yellow-400 transition"
>
  車買取
</Link>


<Link
  href="/purchase-results"
  className="hover:text-yellow-400 transition"
>
  買取実績
</Link>
  <Link href="/#service" className="hover:text-yellow-400 transition">
    サービス
  </Link>

  <Link href="/#access" className="hover:text-yellow-400 transition">
    アクセス
  </Link>

  <Link href="/#contact" className="hover:text-yellow-400 transition">
    お問い合わせ
  </Link>
</nav>

        {/* 右側ボタン */}
        <div className="hidden lg:flex items-center gap-3">
<a
  href="tel:08055637830"
  className="
    border
    border-yellow-500/50
    text-yellow-400
    px-5
    py-3
    rounded-full
    font-bold
    hover:bg-yellow-500
    hover:text-black
    transition
  "
>
  TELお問い合わせ
</a>

     <a
  href="https://lin.ee/NHhNj1t"
  target="_blank"
  rel="noopener noreferrer"
  className="
    border
    border-green-500/50
    text-green-400
    px-5
    py-3
    rounded-full
    font-bold
    hover:bg-green-500
    hover:text-black
    transition
  "
>
  LINE公式アカウント登録
</a>

        </div>

      </div>
    </header>
  );
}