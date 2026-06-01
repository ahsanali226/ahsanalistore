'use client';

import { Heart, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const mockProducts = [
  {
    id: 1,
    name: 'Signature Black Hoodie',
    price: 3499,
    originalPrice: 4399,
    discount: 20,
    rating: 4.8,
    reviews: 184,
    badge: '-20%',
    isNew: false,
    image: '/p1.jpg' // Placeholder
  },
  {
    id: 2,
    name: 'Oversized Beige T-Shirt',
    price: 2299,
    originalPrice: 3499,
    discount: 15,
    rating: 4.7,
    reviews: 164,
    badge: '-15%',
    isNew: false,
    image: '/p2.jpg'
  },
  {
    id: 3,
    name: 'Premium Polo Shirt',
    price: 2799,
    originalPrice: 3099,
    discount: 0,
    rating: 4.8,
    reviews: 140,
    badge: 'NEW',
    isNew: true,
    image: '/p3.jpg'
  },
  {
    id: 4,
    name: 'Cargo Pants Black',
    price: 2499,
    originalPrice: 4699,
    discount: 25,
    rating: 4.9,
    reviews: 122,
    badge: '-25%',
    isNew: false,
    image: '/p4.jpg'
  },
  {
    id: 5,
    name: 'Check Shirt',
    price: 2699,
    originalPrice: 3099,
    discount: 0,
    rating: 4.6,
    reviews: 109,
    badge: 'NEW',
    isNew: true,
    image: '/p5.jpg'
  },
  {
    id: 6,
    name: 'Graphic Print T-Shirt',
    price: 2199,
    originalPrice: 3149,
    discount: 30,
    rating: 4.7,
    reviews: 113,
    badge: '-30%',
    isNew: false,
    image: '/p6.jpg'
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      {mockProducts.map((product) => (
        <div key={product.id} className="group flex flex-col bg-[#1A1A1A] rounded overflow-hidden border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors relative">
          
          {/* Top Badges & Heart */}
          <div className="absolute top-3 left-3 z-10 flex gap-2">
            {product.badge && (
              <span className={`px-2 py-1 text-[10px] font-bold rounded ${product.isNew ? 'bg-white text-black' : 'bg-[#E74C3C] text-white'}`}>
                {product.badge}
              </span>
            )}
          </div>
          <button className="absolute top-3 right-3 z-10 text-gray-400 hover:text-white transition-colors">
            <Heart size={18} strokeWidth={1.5} />
          </button>
          
          {/* Image Area */}
          <Link href={`/products/${product.id}`} className="relative h-64 bg-gray-800 w-full flex items-center justify-center overflow-hidden">
             {/* Using placeholder div, replace with actual Image later */}
             <div className="text-gray-600 text-xs">Image {product.id}</div>
             
             {/* Hover Add to Cart */}
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <button className="bg-primary hover:bg-[#b08030] text-black font-semibold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                 Add to Cart
               </button>
             </div>
          </Link>
          
          {/* Info Area */}
          <div className="p-4 flex flex-col gap-2">
            <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
              <h3 className="font-semibold text-sm lg:text-base text-white line-clamp-1">{product.name}</h3>
            </Link>
            
            <div className="flex items-center gap-1 text-[10px] lg:text-xs">
              <Star size={12} className="text-primary fill-primary" />
              <span className="text-white font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviews})</span>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold text-white">PKR {product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-gray-500 line-through text-xs">PKR {product.originalPrice.toLocaleString()}</span>
              )}
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}
