'use client'

import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgonwwlo'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {
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

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Get In Touch
          </h2>
          <div className="mt-3 h-1 w-20 rounded bg-primary" />
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-secondary-foreground">
          Whether you&apos;re a rancher looking for better tools, an investor
          interested in ag-tech, or just curious about what we&apos;re building
          &mdash; we&apos;d love to hear from you.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="grid content-start gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-1 text-sm text-primary transition-colors hover:text-accent"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Location</p>
                <p className="mt-1 text-sm text-muted-foreground">{COMPANY.name}</p>
                <p className="text-sm text-muted-foreground">{COMPANY.state}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            {formState === 'success' ? (
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
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
