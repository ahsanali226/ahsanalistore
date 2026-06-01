"use client"

import React from "react"
import { ChevronDown, Grid, List } from "lucide-react"

export default function SortToolbar({
  totalCount = 24,
  viewMode = "grid",
  onViewChange,
  onSortChange,
}: {
  totalCount?: number
  viewMode?: "grid" | "list"
  onViewChange?: (mode: "grid" | "list") => void
  onSortChange?: (sort: string) => void
}) {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        Showing {totalCount} products
      </div>
      <div className="flex items-center space-x-3">
        <select
          className="rounded border border-gray-300 bg-white dark:bg-gray-800 dark:text-gray-200 p-1"
          defaultValue="featured"
          onChange={(e) => onSortChange?.(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="bestRated">Best Rated</option>
        </select>
        <button
          type="button"
          className={`p-1 rounded ${viewMode === "grid" ? "bg-gold-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
          onClick={() => onViewChange?.("grid")}
          aria-label="Grid view"
        >
          <Grid size={20} />
        </button>
        <button
          type="button"
          className={`p-1 rounded ${viewMode === "list" ? "bg-gold-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
          onClick={() => onViewChange?.("list")}
          aria-label="List view"
        >
          <List size={20} />
        </button>
      </div>
    </div>
  )
}
