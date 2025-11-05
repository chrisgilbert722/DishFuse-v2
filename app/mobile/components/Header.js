export default function HeaderMobile() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0b1424]/90 backdrop-blur-md text-white z-50 border-b border-[#1f2b45] px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo-header.png" alt="DishFuse" className="h-6 w-auto" />
        <span className="font-bold text-yellow-400 text-lg">DishFuse</span>
      </div>
      <a
        href="#cta"
        className="bg-yellow-400 text-[#0b1424] font-semibold px-3 py-2 rounded-md text-xs"
      >
        Start Free Trial
      </a>
    </header>
  );
}
