import type { Metadata } from "next";
import SortToolbar from "../../../components/shop/SortToolbar";
import ProductGrid from "../../../components/shop/ProductGrid";
import Pagination from "../../../components/shop/Pagination";

export const metadata: Metadata = {
  title: "Best Seller",
};

export const revalidate = 60; // ISR

export default function BestSellerPage() {
  return (
    <div className="flex min-h-screen bg-[#111111] text-white">
      <aside className="hidden w-64 lg:block border-r border-[#2A2A2A] bg-[#111111]">
        {/* Optionally reuse FilterSidebar */}
      </aside>
      <main className="flex-1 p-4 lg:p-8">
        <div className="lg:hidden mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">Best Seller</h1>
        </div>
        <SortToolbar />
        <div className="mt-6">
          <ProductGrid filter="best-seller" />
        </div>
        <div className="mt-8">
          <Pagination />
        </div>
      </main>
    </div>
  );
}
