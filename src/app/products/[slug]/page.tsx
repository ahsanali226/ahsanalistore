import type { Metadata } from "next";
import ImageGallery from "../../../components/product/ImageGallery";
import ProductInfo from "../../../components/product/ProductInfo";
import ProductTabs from "../../../components/product/ProductTabs";
import { motion } from "framer-motion";

// Mock product data (12 items)
const mockProducts = Array.from({ length: 12 }, (_, i) => ({
  slug: `product-${i + 1}`,
  name: `Awesome Hoodie ${i + 1}`,
  images: [
    "/next.svg",
    "/file.svg",
    "/globe.svg",
    "/window.svg",
  ],
  price: 3999 + i * 100,
  salePrice: 2999 + i * 100,
  discount: 25,
  stock: true,
  rating: 4.5,
  reviewCount: 186,
  colors: ["Black", "Brown", "Gray", "White"],
  sizes: ["S", "M", "L", "XL", "XXL"],
}));

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  return mockProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = mockProducts.find((p) => p.slug === params.slug);
  return {
    title: product?.name ?? "Product",
    openGraph: {
      images: product?.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = mockProducts.find((p) => p.slug === params.slug);
  if (!product) return <div className="p-8 text-white">Product not found</div>;

  return (
    <motion.div
      className="bg-[#1A1A1A] text-white min-h-screen p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <ImageGallery images={product.images} />
        </div>
        <div className="lg:col-span-7">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="mt-12">
        <ProductTabs description={"This is a great hoodie."} />
      </div>
    </motion.div>
  );
}
