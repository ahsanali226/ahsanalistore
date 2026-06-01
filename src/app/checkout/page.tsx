'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Truck, Smartphone, Building2 } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { createClient } from '../../lib/supabase/client'

const schema = z.object({
  fullName: z.string().min(2, 'Full name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  street: z.string().min(5, 'Street address required'),
  city: z.string().min(2, 'City required'),
  postalCode: z.string().min(4, 'Postal code required'),
  saveInfo: z.boolean().optional(),
  shippingMethod: z.enum(['standard', 'express']),
  paymentMethod: z.enum(['cod', 'easypaisa', 'jazzcash', 'bank']),
})

type FormData = z.infer<typeof schema>

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCartStore()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { shippingMethod: 'standard', paymentMethod: 'cod' },
  })

  const shippingMethod = watch('shippingMethod')
  const shippingCost = shippingMethod === 'express' ? 300 : 0
  const total = subtotal + shippingCost

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const supabase = createClient()
      const orderNumber = 'AA' + Date.now()
      const { error } = await supabase.from('orders').insert({
        order_number: orderNumber,
        customer_name: data.fullName,
        customer_email: data.email,
        customer_phone: data.phone,
        shipping_address: { street: data.street, city: data.city, postal_code: data.postalCode },
        items: items.map(item => ({
          id: item.id, name: item.name, quantity: item.quantity,
          price: item.price, size: item.size, color: item.color,
        })),
        subtotal,
        shipping: shippingCost,
        discount: 0,
        total,
        payment_method: data.paymentMethod,
        shipping_method: data.shippingMethod,
        status: 'pending',
      })
      if (error) console.error('Order insert error:', error.message)
      clearCart()
      router.push(`/order/success?orderId=${orderNumber}`)
    } catch (err) {
      console.error('Checkout error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mb-8 tracking-widest">CHECKOUT</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Col 1 — Shipping Info */}
            <div className="bg-zinc-900 rounded-lg p-6 space-y-4">
              <h2 className="text-white font-semibold mb-4">1. Shipping Information</h2>
              {[
                { name: 'fullName', label: 'Full Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'street', label: 'Street Address', type: 'text' },
                { name: 'city', label: 'City', type: 'text' },
                { name: 'postalCode', label: 'Postal Code', type: 'text' },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label className="text-sm text-zinc-400 mb-1 block">{label}</label>
                  <input
                    type={type}
                    {...register(name as keyof FormData)}
                    className="w-full bg-zinc-800 text-white rounded px-3 py-2 text-sm border border-zinc-700 focus:border-primary outline-none"
                  />
                  {errors[name as keyof FormData] && (
                    <p className="text-red-400 text-xs mt-1">{errors[name as keyof FormData]?.message}</p>
                  )}
                </div>
              ))}
              <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
                <input type="checkbox" {...register('saveInfo')} className="accent-primary" />
                Save this information
              </label>
            </div>

            {/* Col 2 — Shipping & Payment */}
            <div className="bg-zinc-900 rounded-lg p-6 space-y-6">
              <div>
                <h2 className="text-white font-semibold mb-4">2. Shipping Method</h2>
                {[
                  { value: 'standard', label: 'Standard Shipping (5–7 days)', price: 'FREE', icon: <Truck size={18} /> },
                  { value: 'express', label: 'Express Shipping (1–2 days)', price: 'PKR 300', icon: <Truck size={18} /> },
                ].map(opt => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 rounded border border-zinc-700 mb-2 cursor-pointer hover:border-primary">
                    <input type="radio" value={opt.value} {...register('shippingMethod')} className="accent-primary" />
                    <span className="text-white text-sm flex items-center gap-2">{opt.icon}{opt.label}</span>
                    <span className={`ml-auto text-sm font-semibold ${opt.value === 'standard' ? 'text-green-400' : 'text-white'}`}>{opt.price}</span>
                  </label>
                ))}
              </div>
              <div>
                <h2 className="text-white font-semibold mb-4">3. Payment Method</h2>
                {[
                  { value: 'cod', label: 'Cash on Delivery', icon: <Truck size={18} /> },
                  { value: 'easypaisa', label: 'EasyPaisa', icon: <Smartphone size={18} /> },
                  { value: 'jazzcash', label: 'JazzCash', icon: <Smartphone size={18} /> },
                  { value: 'bank', label: 'Bank Transfer', icon: <Building2 size={18} /> },
                ].map(opt => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 rounded border border-zinc-700 mb-2 cursor-pointer hover:border-primary">
                    <input type="radio" value={opt.value} {...register('paymentMethod')} className="accent-primary" />
                    <span className="text-white text-sm flex items-center gap-2">{opt.icon}{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Col 3 — Order Summary */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-white font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-white text-sm">{item.name}</p>
                      <p className="text-zinc-400 text-xs">{item.size} · {item.color} · x{item.quantity}</p>
                    </div>
                    <p className="text-white text-sm font-semibold">PKR {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-700 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-zinc-400"><span>Subtotal</span><span>PKR {subtotal.toLocaleString()}</span></div>
                <div className="flex justify-between text-zinc-400"><span>Shipping</span><span className={shippingCost === 0 ? 'text-green-400' : 'text-white'}>{shippingCost === 0 ? 'FREE' : `PKR ${shippingCost}`}</span></div>
                <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-zinc-700">
                  <span>Total</span><span>PKR {total.toLocaleString()}</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || items.length === 0}
                className="w-full mt-6 bg-primary text-black font-bold py-3 rounded hover:bg-yellow-5 0 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Placing Order...' : 'PLACE ORDER'}
              </button>
              {items.length === 0 && <p className="text-zinc-500 text-xs text-center mt-2">Your cart is empty</p>}
            </div>

          </div>
        </form>
      </div>
    </main>
  )
}
