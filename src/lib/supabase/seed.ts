import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const products = [
  { slug: 'signature-black-hoodie', name: 'Signature Black Hoodie', category: 'hoodies', price: 3499, compare_price: 4299, discount_percent: 20, stock: 45, is_new: false, rating: 4.8, review_count: 186, images: ['https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800','https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600','https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400'], sizes: ['S','M','L','XL','XXL'], colors: ['Black','Brown','Gray','White'], description: 'Premium quality hoodie made with ultra-soft fabric for maximum comfort and style. 80% Cotton, 20% Polyester. Soft fleece fabric. Regular fit. Drawstring hood. Kangaroo pocket.' },
  { slug: 'oversized-beige-tshirt', name: 'Oversized Beige T-Shirt', category: 't-shirts', price: 2299, compare_price: 2899, discount_percent: 20, stock: 60, is_new: false, rating: 4.7, review_count: 164, images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800','https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600'], sizes: ['S','M','L','XL'], colors: ['Beige','White','Black'], description: 'Relaxed oversized fit t-shirt in premium cotton blend.' },
  { slug: 'premium-polo-shirt', name: 'Premium Polo Shirt', category: 'shirts', price: 2799, compare_price: 3099, discount_percent: 10, stock: 30, is_new: false, rating: 4.8, review_count: 148, images: ['https://images.unsplash.com/photo-1594938298603-c8148c4b4466?w=800','https://images.unsplash.com/photo-1594938298603-c8148c4b4466?w=600'], sizes: ['S','M','L','XL','XXL'], colors: ['White','Black','Navy'], description: 'Classic polo shirt with premium pique fabric.' },
  { slug: 'cargo-pants-black', name: 'Cargo Pants Black', category: 'pants', price: 3499, compare_price: 4699, discount_percent: 26, stock: 25, is_new: false, rating: 4.8, review_count: 132, images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800','https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600'], sizes: ['S','M','L','XL'], colors: ['Black','Khaki'], description: 'Tactical cargo pants with multiple pockets.' },
  { slug: 'check-shirt-brown', name: 'Check Shirt', category: 'shirts', price: 2699, compare_price: 2899, discount_percent: 7, stock: 40, is_new: false, rating: 4.8, review_count: 129, images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600'], sizes: ['S','M','L','XL','XXL'], colors: ['Brown','Green','Blue'], description: 'Classic check pattern shirt for everyday wear.' },
  { slug: 'graphic-print-tshirt', name: 'Graphic Print T-Shirt', category: 't-shirts', price: 2199, compare_price: 3149, discount_percent: 30, stock: 55, is_new: false, rating: 4.7, review_count: 113, images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600'], sizes: ['S','M','L','XL'], colors: ['White','Black','Gray'], description: 'Bold graphic print t-shirt with premium cotton fabric.' },
  { slug: 'navy-blue-hoodie', name: 'Navy Blue Hoodie', category: 'hoodies', price: 3299, compare_price: 3999, discount_percent: 18, stock: 35, is_new: true, rating: 4.6, review_count: 87, images: ['https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800'], sizes: ['S','M','L','XL','XXL'], colors: ['Navy','Black'], description: 'Premium navy blue hoodie for everyday comfort.' },
  { slug: 'slim-fit-chinos', name: 'Slim Fit Chinos', category: 'pants', price: 2999, compare_price: 3499, discount_percent: 14, stock: 20, is_new: true, rating: 4.5, review_count: 76, images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800'], sizes: ['S','M','L','XL'], colors: ['Beige','Navy','Black'], description: 'Slim fit chinos in wrinkle-resistant fabric.' },
  { slug: 'white-oxford-shirt', name: 'White Oxford Shirt', category: 'shirts', price: 2499, compare_price: 2999, discount_percent: 17, stock: 50, is_new: true, rating: 4.7, review_count: 95, images: ['https://images.unsplash.com/photo-1594938298603-c8148c4b4466?w=800'], sizes: ['S','M','L','XL','XXL'], colors: ['White','Blue'], description: 'Classic Oxford shirt for formal and casual wear.' },
  { slug: 'grey-melange-hoodie', name: 'Grey Melange Hoodie', category: 'hoodies', price: 3199, compare_price: 3799, discount_percent: 16, stock: 28, is_new: true, rating: 4.6, review_count: 102, images: ['https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800'], sizes: ['M','L','XL','XXL'], colors: ['Gray','White'], description: 'Soft grey melange hoodie with brushed inner lining.' },
  { slug: 'black-polo-shirt', name: 'Black Polo Shirt', category: 'shirts', price: 2599, compare_price: 2999, discount_percent: 13, stock: 45, is_new: false, rating: 4.5, review_count: 68, images: ['https://images.unsplash.com/photo-1594938298603-c8148c4b4466?w=800'], sizes: ['S','M','L','XL'], colors: ['Black','White'], description: 'Classic black polo for a sharp everyday look.' },
  { slug: 'streetwear-joggers', name: 'Streetwear Joggers', category: 'pants', price: 2899, compare_price: 3499, discount_percent: 17, stock: 33, is_new: true, rating: 4.4, review_count: 54, images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800'], sizes: ['S','M','L','XL','XXL'], colors: ['Black','Gray','Navy'], description: 'Comfortable streetwear joggers with tapered fit.' }
]

async function seed() {
  console.log('Seeding products...')
  const { error } = await supabase.from('products').upsert(products, { onConflict: 'slug' })
  if (error) {
    console.error('Seed failed:', error.message)
    process.exit(1)
  }
  console.log(`✅ Seeded ${products.length} products successfully`)
  process.exit(0)
}

seed()
