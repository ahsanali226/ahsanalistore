'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '../../../lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/account')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-white text-center mb-2 tracking-widest">SIGN IN</h1>
        <p className="text-zinc-400 text-sm text-center mb-8">Welcome back to AHSANALI</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full bg-zinc-800 text-white rounded px-3 py-2 border border-zinc-700 focus:border-primary outline-none text-sm" />
          </div>
          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full bg-zinc-800 text-white rounded px-3 py-2 border border-zinc-700 focus:border-primary outline-none text-sm" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-primary text-black font-bold py-3 rounded hover:bg-yellow-500 transition disabled:opacity-50">
            {loading ? 'Signing in...' : 'SIGN IN'}
          </button>
        </form>
        <p className="text-zinc-400 text-sm text-center mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-primary hover:underline">Create one</Link>
        </p>
      </div>
    </main>
  )
}
