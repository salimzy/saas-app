'use client'
import { useState, FormEvent, JSX } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'




export default function RegisterPage(): JSX.Element {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const validateEmail = (e: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault()
        setError(null)
        setSuccess(null)

        if (!name.trim() || !email.trim() || !password) {
            setError('Please fill in all required fields.')
            return
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.')
            return
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            return
        }
        if (password !== confirm) {
            setError('Passwords do not match.')
            return
        }

        setLoading(true)
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim(), email: email.trim(), password }),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                const msg = data?.error || data?.message || 'Registration failed.'
                throw new Error(msg)
            }

            setSuccess('Registration successful. Redirecting...')
            setTimeout(() => router.push('/dashboard'), 1000)
        } catch (err: any) {
            setError(err?.message || 'An unexpected error occurred.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main style={{ maxWidth: 480, margin: '4rem auto', padding: '1rem' }}>
            <h1 style={{ marginBottom: '1rem' }}>Create an account</h1>

            <form onSubmit={handleSubmit} aria-label="Sign up form">
                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: 4 }}>
                        Full name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="confirm" style={{ display: 'block', marginBottom: 4 }}>
                        Confirm password
                    </label>
                    <input
                        id="confirm"
                        name="confirm"
                        type="password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        required
                        autoComplete="new-password"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                {error && (
                    <div role="alert" style={{ color: 'white', background: '#e11', padding: 8, marginBottom: 12 }}>
                        {error}
                    </div>
                )}

                {success && (
                    <div role="status" style={{ color: 'white', background: '#059669', padding: 8, marginBottom: 12 }}>
                        {success}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        display: 'inline-block',
                        padding: '10px 16px',
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {loading ? 'Creating account...' : 'Sign up'}
                </button>
            </form>

            <p style={{ marginTop: 12 }}>
                Already have an account? <Link href="/login">Log in</Link>
            </p>
        </main>
    );

}