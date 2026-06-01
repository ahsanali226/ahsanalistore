"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Truck, RotateCcw, ShieldCheck } from "lucide-react"

interface ProductInfoProps {
  product: {
    name: string
    price: number
    salePrice: number
    discount: number
    stock: boolean
    rating: number
    reviewCount: number
    colors: string[]
    sizes: string[]
  }
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)

  const increase = () => setQuantity((q) => q + 1)
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1))

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400">
        Home &gt; Hoodies &gt; {product.name}
      </nav>

      {/* Title + badge */}
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl font-bold text-white">{product.name}</h1>
        <span className="bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-semibold">
          NEW
        </span>
      </div>

      {/* Rating and stock */}
      <div className="flex items-center space-x-4 text-sm text-gray-300">
        <div className="flex items-center">
          {/* Simple star rating */}
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              color={i < Math.floor(product.rating) ? "#ffd700" : "#555"}
            >
              <polygon points="10 1 12.59 6.92 18.9 7.27 14 11.47 15.45 17.73 10 14.25 4.55 17.73 6 11.47 1.1 7.27 7.41 6.92 10 1" />
            </svg>
          ))}
          <span className="ml-2">({product.reviewCount} Reviews)</span>
        </div>
        <div className="flex items-center">
          <span
            className={`h-2 w-2 rounded-full mr-1 ${product.stock ? "bg-green-500" : "bg-red-500"}`}
          />
          {product.stock ? "In Stock" : "Out of Stock"}
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline space-x-3 text-lg">
        <span className="text-2xl font-bold text-yellow-500">PKR {product.salePrice}</span>
        <span className="line-through text-gray-400">PKR {product.price}</span>
        <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-sm">{product.discount}% OFF</span>
      </div>

      {/* Color swatches */}
      <div>
        <h3 className="text-sm font-medium text-gray-200 mb-2">Color</h3>
        <div className="flex gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              className={`w-8 h-8 rounded-full border-2 ${c === selectedColor ? "border-yellow-500" : "border-gray-600"}`}
              style={{ backgroundColor: c.toLowerCase() }}
              aria-label={c}
              onClick={() => setSelectedColor(c)}
            />
          ))}
        </div>
      </div>

      {/* Size buttons */}
      <div>
        <h3 className="text-sm font-medium text-gray-200 mb-2">Size</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              className={`px-3 py-1 border rounded ${s === selectedSize ? "border-yellow-500" : "border-gray-600"}`}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <a href="#" className="text-sm text-yellow-500 underline">
          Size Guide
        </a>
      </div>

      {/* Quantity stepper */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-200">Quantity</span>
        <button
          onClick={decrease}
          className="w-8 h-8 flex items-center justify-center border border-gray-600"
        >
          –
        </button>
        <span className="w-8 text-center text-white">{quantity}</span>
        <button
          onClick={increase}
          className="w-8 h-8 flex items-center justify-center border border-gray-600"
        >
          +
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col space-y-3 mt-4">
        <button className="w-full bg-yellow-500 text-black py-3 rounded font-semibold">
          ADD TO CART
        </button>
        <button className="w-full border border-gray-500 text-gray-300 py-3 rounded font-semibold">
          BUY NOW
        </button>
        <div className="flex space-x-4 text-sm text-gray-400">
          <a href="#" className="flex items-center space-x-1">
            <span>♡</span>
            <span>Add to Wishlist</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <span>⇄</span>
            <span>Compare</span>
          </a>
        </div>
      </div>

      {/* Trust strip */}
      <div className="flex items-center space-x-6 mt-6 text-gray-300">
        <div className="flex items-center space-x-1">
          <Truck size={20} className="text-yellow-500" />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center space-x-1">
          <RotateCcw size={20} className="text-yellow-500" />
          <span>Easy Returns</span>
        </div>
        <div className="flex items-center space-x-1">
          <ShieldCheck size={20} className="text-yellow-500" />
          <span>Secure Payment</span>
        </div>
      </div>
    </motion.div>
  )
}
