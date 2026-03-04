'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgonwwlo'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setFormState('success')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMsg(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.')
        setFormState('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setFormState('error')
    }
  }

  const inputClass =
    'rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary'

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <Send className="h-6 w-6 text-primary" />
        </div>
        <p className="font-semibold text-foreground">Message sent!</p>
        <p className="text-sm text-secondary-foreground">
          Thanks for reaching out &mdash; we&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-2 text-sm text-primary hover:text-accent"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your ranch or project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {formState === 'error' && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60"
      >
        {formState === 'submitting' ? 'Sending...' : (
          <>Send Message <Send className="h-4 w-4" /></>
        )}
      </button>
    </form>
  )
}
