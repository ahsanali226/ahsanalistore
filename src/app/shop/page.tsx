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
    <div className="flex min-h-screen bg-[#1A1A1A] text-white">
      {/* Sidebar */}
      <aside className="hidden w-64 lg:block">
        <FilterSidebar />
      </aside>

      <main className="flex-1 p-4 lg:ml-64">
        {/* Mobile Filters button */}
        <div className="lg:hidden mb-4">
          <button
            className="rounded bg-gray-800 px-4 py-2 text-white"
            onClick={() => {
              // Simple toggle for demo – could open a bottom sheet
              const el = document.getElementById('mobile-filter-sheet');
              if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
            }}
          >
            Filters
          </button>
        </div>

        {/* Mobile filter sheet */}
        <div id="mobile-filter-sheet" className="fixed inset-x-0 bottom-0 bg-[#1A1A1A] p-4 border-t border-gray-700 hidden lg:hidden">
          <FilterSidebar />
        </div>

        <SortToolbar />
        <ProductGrid />
        <Pagination />
      </main>
    </div>
  );
}
