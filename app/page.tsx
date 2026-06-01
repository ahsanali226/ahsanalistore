import Link from 'next/link';
import { ArrowRight, Truck, RefreshCcw, ShieldCheck, PhoneCall } from 'lucide-react';
import ProductGrid from '@/src/components/shop/ProductGrid';

export default function Home() {
  return (
    <div className="bg-[#111111] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[800px] flex items-center overflow-hidden">
        {/* Background Visuals - The Golden Ring */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full border border-primary/20 shadow-[0_0_100px_rgba(200,150,60,0.15)] animate-pulse" />
          <div className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full border border-primary/40 shadow-[0_0_80px_rgba(200,150,60,0.2)]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mt-20 lg:mt-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-semibold tracking-widest text-sm uppercase">New Collection 2025</span>
              <div className="h-px w-8 bg-primary lg:hidden"></div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              DEFINE YOUR <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                OWN STYLE
              </span>
            </h1>
            
            <p className="text-gray-400 mb-8 max-w-md mx-auto lg:mx-0 text-lg">
              Premium quality clothing crafted for comfort, confidence and your everyday style.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/shop" className="bg-primary hover:bg-[#b08030] text-black font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2">
                SHOP NOW <ArrowRight size={18} />
              </Link>
              <Link href="/shop" className="border border-gray-600 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition-all">
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative h-[400px] lg:h-[700px] w-full flex justify-center items-center">
             {/* Note: User should replace this div with actual model images in a carousel */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10"></div>
             <div className="w-[300px] h-[400px] lg:w-[450px] lg:h-[600px] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden border border-gray-700">
                <span className="text-gray-500">Model Image Space</span>
             </div>
          </div>
        </div>
      </section>

      {/* Info Row */}
      <section className="border-y border-[#2A2A2A] bg-[#161616]">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="text-primary"><Truck size={32} strokeWidth={1.5} /></div>
              <div>
                <h4 className="font-bold text-sm">Free Shipping</h4>
                <p className="text-xs text-gray-400">On all orders over PKR 5000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-primary"><RefreshCcw size={32} strokeWidth={1.5} /></div>
              <div>
                <h4 className="font-bold text-sm">Easy Returns</h4>
                <p className="text-xs text-gray-400">30 days return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-primary"><ShieldCheck size={32} strokeWidth={1.5} /></div>
              <div>
                <h4 className="font-bold text-sm">Secure Payment</h4>
                <p className="text-xs text-gray-400">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-primary"><PhoneCall size={32} strokeWidth={1.5} /></div>
              <div>
                <h4 className="font-bold text-sm">24/7 Support</h4>
                <p className="text-xs text-gray-400">We're here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Men', img: '/men.jpg' },
              { name: 'Women', img: '/women.jpg' },
              { name: 'Hoodies', img: '/hoodies.jpg' },
              { name: 'T-Shirts', img: '/tshirts.jpg' },
              { name: 'Shirts', img: '/shirts.jpg' },
              { name: 'Accessories', img: '/accessories.jpg' }
            ].map((cat) => (
              <Link key={cat.name} href={`/shop?category=${cat.name.toLowerCase()}`} className="group relative h-40 rounded overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                  <p className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">Shop Now →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Preview */}
      <section className="py-16 bg-[#161616]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-wider">BEST SELLERS</h2>
            <Link href="/shop" className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="h-[400px] overflow-hidden">
             {/* We wrap the ProductGrid in a fixed height container to only show the top row for now, 
                 or we can pass a prop to ProductGrid to limit items. For now we use the existing component. */}
             <ProductGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
