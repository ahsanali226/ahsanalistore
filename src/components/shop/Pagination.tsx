"use client";

import React from "react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
}: PaginationProps) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-300">
      <button
        onClick={handlePrev}
        disabled={currentPage <= 1}
        className={`px-3 py-1 rounded ${currentPage <= 1 ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"}`}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        className={`px-3 py-1 rounded ${currentPage >= totalPages ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"}`}
      >
        Next
      </button>
    </div>
  );
}
