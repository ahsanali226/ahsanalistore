"use client"

import React from "react"
import { ChevronDown } from "lucide-react"

export default function SortToolbar({
  onSortChange,
}: {
  onSortChange?: (sort: string) => void
}) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
      <h1 className="hidden lg:block text-2xl font-bold tracking-wider uppercase">SHOP</h1>
      <div className="flex items-center ml-auto">
        <span className="text-xs text-gray-400 mr-2">Sort by:</span>
        <div className="relative">
          <select
            className="appearance-none bg-transparent text-white text-xs font-medium focus:outline-none pr-4 cursor-pointer"
            defaultValue="featured"
            onChange={(e) => onSortChange?.(e.target.value)}
          >
            <option value="featured" className="bg-[#1A1A1A]">Featured</option>
            <option value="priceLowHigh" className="bg-[#1A1A1A]">Price: Low to High</option>
            <option value="priceHighLow" className="bg-[#1A1A1A]">Price: High to Low</option>
            <option value="newest" className="bg-[#1A1A1A]">Newest</option>
          </select>
          <ChevronDown size={14} className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
        </div>
      </div>
    </div>
  )
}
