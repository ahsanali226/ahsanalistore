"use client";

import React from "react";

import { useState } from "react";

interface ProductTabsProps {
  description: string;
}

export default function ProductTabs({ description }: ProductTabsProps) {
  const [active, setActive] = useState("details");

  return (
    <div className="mt-8">
      <div className="flex border-b border-gray-700">
        <button
          className={`px-4 py-2 focus:outline-none ${active === "details" ? "border-b-2 border-yellow-500" : "text-gray-400"}`}
          onClick={() => setActive("details")}
        >
          Details
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${active === "reviews" ? "border-b-2 border-yellow-500" : "text-gray-400"}`}
          onClick={() => setActive("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className="p-4">
        {active === "details" && (
          <p className="text-gray-300">{description}</p>
        )}
        {active === "reviews" && (
          <p className="text-gray-300">Customer reviews will be displayed here.</p>
        )}
      </div>
    </div>
  );
}
