import type { Metadata } from "next";
import FilterSidebar from '../../components/shop/FilterSidebar'
import SortToolbar from '../../components/shop/SortToolbar'
import ProductGrid from '../../components/shop/ProductGrid'
import Pagination from '../../components/shop/Pagination'

export const metadata: Metadata = {
  title: "Shop",
};

export const revalidate = 60; // ISR

export default function ShopPage() {
  return (
    <div className="flex min-h-screen bg-[#111111] text-white">
      {/* Sidebar */}
      <aside className="hidden w-64 lg:block border-r border-[#2A2A2A] bg-[#111111]">
        <FilterSidebar />
      </aside>

      <main className="flex-1 p-4 lg:p-8">
        {/* Mobile Filters button */}
        <div className="lg:hidden mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">SHOP</h1>
          <button
            className="rounded border border-gray-700 px-4 py-2 text-white text-sm"
            onClick={() => {
              const el = document.getElementById('mobile-filter-sheet');
              if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
            }}
          >
            Filters
          </button>
        </div>

        {/* Mobile filter sheet */}
        <div id="mobile-filter-sheet" className="fixed inset-x-0 bottom-0 bg-[#1A1A1A] p-4 border-t border-[#2A2A2A] hidden lg:hidden z-40">
          <FilterSidebar />
        </div>

        <SortToolbar />
        <div className="mt-6">
          <ProductGrid />
        </div>
        <div className="mt-8">
          <Pagination />
        </div>
      </main>
    </div>
  );
}
