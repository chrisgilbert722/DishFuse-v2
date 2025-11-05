export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1424] border-t border-[#1f2b45] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto flex justify-between items-start px-6 flex-wrap gap-10">
        {/* Left side — logo + about */}
        <div className="flex flex-col max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo-footer.png" alt="DishFuse" className="h-8 w-auto" />
            <span className="font-bold text-yellow-400 text-xl">DishFuse</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            DishFuse helps restaurants automate reports, optimize menus, and
            increase profit — all powered by AI. Manage your business in one
            dashboard and grow effortlessly.
          </p>
        </div>

        {/* Middle — navigation */}
        <div>
          <h3 className="font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
            <li><a href="#pricing" className="hover:text-yellow-400">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-400">Testimonials</a></li>
            <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
          </ul>
        </div>

        {/* Right — contact + socials */}
        <div>
          <h3 className="font-semibold text-yellow-400 mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@dishfuse.com" className="hover:text-yellow-400">support@dishfuse.com</a></li>
            <li>Phone: <a href="tel:+15555555555" className="hover:text-yellow-400">(555) 555-5555</a></li>
          </ul>
          <div className="flex gap-4 mt-4 opacity-80">
            <img src="/social-fb.png" alt="Facebook" className="h-5 w-5" />
            <img src="/social-ig.png" alt="Instagram" className="h-5 w-5" />
            <img src="/social-li.png" alt="LinkedIn" className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#1f2b45] mt-10 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} DishFuse. All rights reserved.
      </div>
    </footer>
  );
}
