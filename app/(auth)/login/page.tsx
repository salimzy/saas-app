'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"


export default function Page() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const validate = () => {
        if (!email) return 'Email is required'
        // simple email check
        // eslint-disable-next-line no-useless-escape
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (!ok) return 'Enter a valid email'
        if (!password) return 'Password is required'
        if (password.length < 6) return 'Password must be at least 6 characters'
        return null
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        const validation = validate()
        if (validation) {
            setError(validation)
            return
        }

        setLoading(true)
        try {
            // replace this endpoint with your real auth API
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, remember }),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                setError(data?.message || 'Authentication failed')
                setLoading(false)
                return
            }

            // On success navigate to dashboard (adjust as needed)
            router.push('/dashboard')
        } catch (err) {
            setError('Network error')
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-dark-bg via-dark-bg to-purple-950/10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 p-6">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-center text-3xl font-extrabold bg-clip-text text-gray-300 bg-linear-to-r from-purple-400 to-pink-400">Sign in to your account</h1>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Or <Link href="/register" className="font-medium text-purple-400 hover:text-purple-300">create a new account</Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6 glass-morphism-card rounded-2xl border border-purple-500/20 px-6 py-8" onSubmit={handleSubmit} noValidate>
                    <div className="space-y-4">
                        {error && (
                            <div className="text-sm text-pink-300 bg-pink-500/10 border border-pink-500/30 p-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-purple-300">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="flex items-center justify-between text-sm font-medium text-purple-300">
                                <span>Password</span>
                                <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">Forgot?</Link>
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-300"
                                >
                                    {showPassword ? <MdVisibilityOff className="w-5 h-5" /> : <MdVisibility className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="remember-me" 
                                name="remember-me"
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-400/50 rounded bg-purple-500/10"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"   
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-linear-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-all"
                        >
                            {loading ? 'Signing in...' : 'Sign in'} 
                        </button>
                    </div>
                </form> 
            </div>
        </div>
    );
}



