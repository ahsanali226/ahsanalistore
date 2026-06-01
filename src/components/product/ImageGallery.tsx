"use client"
import { useState } from "react"
import { motion } from "framer-motion"

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[active]}
          alt="Product image"
          className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-108"
        />
      </div>

      {/* Thumbnails */}
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {images.map((src, idx) => (
          <motion.button
            key={src}
            className={`p-1 rounded ${idx === active ? "border-gold-500" : "border-gray-600"} border`}
            onClick={() => setActive(idx)}
            whileHover={{ scale: 1.05 }}
          >
            <img src={src} alt={`Thumb ${idx + 1}`} className="w-16 h-16 object-cover rounded" />
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
