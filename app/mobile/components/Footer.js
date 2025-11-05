export default function FooterMobile() {
  return (
    <footer className="w-full bg-[#0b1424] border-t border-[#1f2b45] text-white py-10 mt-16 px-6 flex flex-col items-center text-center">
      <img src="/logo-footer.png" alt="DishFuse" className="h-8 w-auto mb-3" />
      <h3 className="font-bold text-yellow-400 text-lg mb-2">DishFuse</h3>
      <p className="text-gray-400 text-xs mb-6 max-w-xs leading-relaxed">
        DishFuse automates reports, menu pricing, and profit optimization for restaurants using AI — all in one place.
      </p>

      <div className="flex gap-4 mb-6 opacity-80">
        <img src="/social-fb.png" alt="Facebook" className="h-5 w-5" />
        <img src="/social-ig.png" alt="Instagram" className="h-5 w-5" />
        <img src="/social-li.png" alt="LinkedIn" className="h-5 w-5" />
      </div>

      <ul className="space-y-2 text-xs mb-6">
        <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
        <li><a href="#pricing" className="hover:text-yellow-400">Pricing</a></li>
        <li><a href="#testimonials" className="hover:text-yellow-400">Testimonials</a></li>
        <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
      </ul>

      <div className="text-gray-500 text-[10px]">
        © {new Date().getFullYear()} DishFuse. All rights reserved.
      </div>
    </footer>
  );
}
