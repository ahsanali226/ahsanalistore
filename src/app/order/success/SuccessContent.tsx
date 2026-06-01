"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function OrderSuccessContent({ orderId }: { orderId: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A] text-white p-4">
      <motion.div
        className="text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Green checkmark circle */}
        <div className="flex items-center justify-center mx-auto mb-6 w-24 h-24 rounded-full bg-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2">THANK YOU!</h1>
        <p className="mb-4">Your order has been placed successfully.</p>
        <p className="mb-6">Order <strong>#{orderId}</strong> has been confirmed and will be shipped soon.</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/account/orders"
            className="px-4 py-2 bg-yellow-500 text-black rounded font-semibold"
          >
            VIEW ORDER
          </Link>
          <Link
            href="/"
            className="px-4 py-2 border border-gray-500 rounded text-gray-300"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
