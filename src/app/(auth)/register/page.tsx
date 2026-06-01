'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '../../../lib/supabase/client'

export default function RegisterPage() {
  const router = useRouter()
  const supabase = createClient()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: name } }
    })
    if (error) { setError(error.message); setLoading(false); return }
    setSuccess(true)
    setLoading(false)
  }

  if (success) return (
    <main className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✉️</div>
        <h2 className="text-white text-xl font-bold mb-2">Check your email</h2>
        <p className="text-zinc-400 text-sm">We sent a confirmation link to <span className="text-primary">{email}</span></p>
        <Link href="/login" className="mt-6 inline-block text-primary hover:underline text-sm">Back to Sign In</Link>
      </div>
    </main>
  )

  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-white text-center mb-2 tracking-widest">CREATE ACCOUNT</h1>
        <p className="text-zinc-400 text-sm text-center mb-8">Join AHSANALI today</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Full Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required
              className="w-full bg-zinc-800 text-white rounded px-3 py-2 border border-zinc-700 focus:border-primary outline-none text-sm" />
          </div>
          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full bg-zinc-800 text-white rounded px-3 py-2 border border-zinc-700 focus:border-primary outline-none text-sm" />
          </div>
          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6}
              className="w-full bg-zinc-800 text-white rounded px-3 py-2 border border-zinc-700 focus:border-primary outline-none text-sm" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-primary text-black font-bold py-3 rounded hover:bg-yellow-500 transition disabled:opacity-50">
            {loading ? 'Creating account...' : 'CREATE ACCOUNT'}
          </button>
        </form>
        <p className="text-zinc-400 text-sm text-center mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">Sign in</Link>
        </p>
      </div>
    </main>
  )
}
