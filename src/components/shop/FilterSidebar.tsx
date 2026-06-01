"use client";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function FilterSidebar() {
  const [price, setPrice] = useState<[number, number]>([0, 5000]);
  const handlePriceChange = (vals: number | number[]) => {
    if (Array.isArray(vals)) {
      setPrice(vals as [number, number]);
    } else {
      // If a single number is provided, update the upper bound while keeping the lower bound unchanged
      setPrice([price[0], vals]);
    }
  };
  const clearFilters = () => {
    // reset UI – in a real app would also reset query params
    setPrice([0, 5000]);
    // other state resets omitted for brevity
  };

  return (
    <div className="p-4 space-y-6 text-white">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>

      {/* Category */}
      <section>
        <h3 className="font-medium mb-1">Category</h3>
        <div className="flex flex-col space-y-1">
          {[
            { label: "All", count: 0 },
            { label: "Hoodies", count: 24 },
            { label: "T-Shirts", count: 32 },
            { label: "Shirts", count: 18 },
            { label: "Pants", count: 16 },
            { label: "Accessories", count: 12 },
          ].map((c) => (
            <label key={c.label} className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">{c.label} ({c.count})</span>
            </label>
          ))}
        </div>
      </section>

      {/* Price range */}
      <section>
        <h3 className="font-medium mb-1">Price (PKR)</h3>
        <div className="px-2">
          <Slider
            range
            min={0}
            max={5000}
            defaultValue={price}
            onChange={handlePriceChange}
            trackStyle={[{ backgroundColor: "#ffd700" }]}
            handleStyle={[{ borderColor: "#ffd700" }, { borderColor: "#ffd700" }]}
          />
          <div className="flex justify-between text-sm mt-1">
            <span>{price[0]}</span>
            <span>{price[1]}</span>
          </div>
        </div>
      </section>

      {/* Size */}
      <section>
        <h3 className="font-medium mb-1">Size</h3>
        <div className="flex flex-wrap gap-2">
          {"S M L XL XXL".split(" ").map((size) => (
            <button
              key={size}
              className="px-2 py-1 border border-gray-500 rounded text-sm"
            >
              {size}
            </button>
          ))}
        </div>
      </section>

      {/* Color */}
      <section>
        <h3 className="font-medium mb-1">Color</h3>
        <div className="flex gap-2">
          {[
            { name: "Black", bg: "bg-black" },
            { name: "White", bg: "bg-white border" },
            { name: "Brown", bg: "bg-amber-800" },
            { name: "Beige", bg: "bg-amber-200" },
            { name: "Green", bg: "bg-green-600" },
          ].map((c) => (
            <button
              key={c.name}
              className={`w-6 h-6 rounded-full ${c.bg} border border-gray-400`}
              aria-label={c.name}
            />
          ))}
        </div>
      </section>

      {/* Material */}
      <section>
        <h3 className="font-medium mb-1">Material</h3>
        <div className="flex flex-col space-y-1">
          {"Cotton Fleece Linen Denim Polyester".split(" ").map((m) => (
            <label key={m} className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">{m}</span>
            </label>
          ))}
        </div>
      </section>

      <button
        onClick={clearFilters}
        className="mt-4 w-full bg-gray-800 hover:bg-gray-700 py-2 rounded"
      >
        Clear Filters
      </button>
    </div>
  );
}
