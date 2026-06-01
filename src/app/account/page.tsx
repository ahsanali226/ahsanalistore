import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'
import Link from 'next/link'

export default async function AccountPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: orders } = await supabase
    .from('orders')
    .select('*')
    .eq('customer_email', user.email)
    .order('created_at', { ascending: false })
    .limit(5)

  const allOrders = orders || []
  const delivered = allOrders.filter(o => o.status === 'delivered').length
  const pending = allOrders.filter(o => o.status === 'pending').length
  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Customer'

  const statusColor: Record<string, string> = {
    delivered: 'text-green-400 bg-green-400/10',
    pending: 'text-yellow-400 bg-yellow-400/10',
    processing: 'text-blue-400 bg-blue-400/10',
  }

  return (
    <main className="min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="w-56 shrink-0 hidden md:block">
            <nav className="bg-zinc-900 rounded-lg p-4 space-y-1">
              {[
                { href: '/account', label: 'Dashboard' },
                { href: '/account/orders', label: 'My Orders' },
                { href: '/account/wishlist', label: 'Wishlist' },
                { href: '/account/addresses', label: 'Addresses' },
                { href: '/account/profile', label: 'Profile Settings' },
              ].map(link => (
                <Link key={link.href} href={link.href}
                  className="block px-3 py-2 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 text-sm transition">
                  {link.label}
                </Link>
              ))}
              <form action="/account/logout" method="POST">
                <button type="submit"
                  className="w-full text-left px-3 py-2 rounded text-zinc-400 hover:text-red-400 hover:bg-zinc-800 text-sm transition">
                  Logout
                </button>
              </form>
            </nav>
          </aside>
          <div className="flex-1">
            <div className="bg-zinc-900 rounded-lg p-6 mb-6">
              <h1 className="text-white text-xl font-bold">Welcome back, {userName}!</h1>
              <p className="text-zinc-400 text-sm mt-1">Here&apos;s what&apos;s happening with your account.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Orders', value: allOrders.length },
                { label: 'Pending', value: pending },
                { label: 'Delivered', value: delivered },
                { label: 'Wishlist', value: 0 },
              ].map(stat => (
                <div key={stat.label} className="bg-zinc-900 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-zinc-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-white font-semibold mb-4">Recent Orders</h2>
              {allOrders.length === 0 ? (
                <p className="text-zinc-400 text-sm">No orders yet. <Link href="/shop" className="text-primary hover:underline">Start shopping</Link></p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-zinc-400 text-left border-b border-zinc-700">
                      <th className="pb-2">Order #</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allOrders.map(order => (
                      <tr key={order.id} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                        <td className="py-3 text-primary font-mono">{order.order_number}</td>
                        <td className="py-3 text-zinc-400">{new Date(order.created_at).toLocaleDateString()}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[order.status] || 'text-zinc-400 bg-zinc-700'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 text-white text-right font-semibold">PKR {order.total?.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
