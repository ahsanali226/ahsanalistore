import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-400 border-t border-[#2A2A2A] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center text-primary">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C8963C]">
                  <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 10L7 20H17L12 10Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-wider text-white">AHSANALI<span className="text-xs text-gray-400 font-normal">.com</span></span>
            </Link>
            <p className="text-sm max-w-sm">
              Premium quality clothing crafted for comfort, confidence and style.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=hoodies" className="hover:text-primary transition-colors">Hoodies</Link></li>
              <li><Link href="/shop?category=t-shirts" className="hover:text-primary transition-colors">T-Shirts</Link></li>
              <li><Link href="/shop?category=shirts" className="hover:text-primary transition-colors">Shirts</Link></li>
              <li><Link href="/shop?category=pants" className="hover:text-primary transition-colors">Pants</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider">CUSTOMER CARE</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/our-story" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#2A2A2A]">
          <p className="text-xs mb-4 md:mb-0">
            © 2025 AHSANALI.com. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold text-white">
            <span>PAYMENT METHODS</span>
            <div className="flex gap-2">
              <span className="bg-white text-blue-800 px-2 py-1 rounded text-[10px]">VISA</span>
              <span className="bg-white text-red-600 px-2 py-1 rounded text-[10px]">Mastercard</span>
              <span className="bg-[#00A859] px-2 py-1 rounded text-[10px]">easypaisa</span>
              <span className="bg-[#ED1C24] px-2 py-1 rounded text-[10px]">JazzCash</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
