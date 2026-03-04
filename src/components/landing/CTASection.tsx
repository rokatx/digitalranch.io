'use client'

import { useState } from 'react'
import { ContactModal } from './ContactModal'

export function CTASection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Ready to modernize your ranch operations?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-secondary-foreground">
          We&apos;re building the next generation of tools for the agricultural
          and ranch industries. Get in touch to learn more.
        </p>
        <div className="mt-8">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            Contact Us
          </button>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
