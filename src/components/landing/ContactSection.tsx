import { Mail, MapPin } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function ContactSection() {
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
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
              <p className="mt-1 text-sm text-muted-foreground">
                {COMPANY.name}
              </p>
              <p className="text-sm text-muted-foreground">{COMPANY.state}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
