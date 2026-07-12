export default function FixedContact() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-700 p-3 flex gap-3 z-50 md:hidden">

      <a
        href="tel:08055637830"
        className="flex-1 bg-yellow-500 text-black text-center py-3 rounded-full font-bold"
      >
        📞 電話
      </a>


      <a
        href="https://lin.ee/NHhNj1t"
        target="_blank"
        className="flex-1 bg-green-500 text-white text-center py-3 rounded-full font-bold"
      >
        LINE相談
      </a>

    </div>
  );
}