export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0b1424]/90 backdrop-blur-md text-white z-50 border-b border-[#1f2b45]">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-3">
          <img src="/logo-header.png" alt="DishFuse" className="h-8 w-auto" />
          <span className="font-bold text-yellow-400 text-xl">DishFuse</span>
        </div>
        <nav className="flex gap-8 text-sm">
          <a href="#features" className="hover:text-yellow-400">Features</a>
          <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
          <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
          <a href="/login" className="hover:text-yellow-400">Login</a>
          <a
            href="#cta"
            className="bg-yellow-400 text-[#0b1424] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300"
          >
            Start Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}
