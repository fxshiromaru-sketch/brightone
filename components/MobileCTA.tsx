export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">

      {/* 電話 */}
      <a
        href="tel:08055637830"
        className="flex-1 bg-yellow-500 text-black font-bold py-4 text-center"
      >
        📞 電話
      </a>

      {/* LINE */}
      <a
        href="https://line.me/ti/p/qd6RpQYTLe"
        target="_blank"
        className="flex-1 bg-green-500 text-white font-bold py-4 text-center"
      >
        💬 LINE
      </a>

    </div>
  );
}