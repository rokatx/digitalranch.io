import { RanchgritLogoMark } from '@/components/ui/RanchgritLogoMark'
import { Check } from 'lucide-react'

const features = [
  'Herd Records & Cattle Management',
  'Chute Mode — Rapid Field Data Entry',
  'Pasture & Grazing Management',
  'Expense Tracking & Financial Reporting',
  'COLT AI Assistant',
]

export function ProductSection() {
  return (
    <section id="product" className="scroll-mt-20 bg-card/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Flagship Product
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              RANCHGRIT
            </h2>
            <div className="mt-3 h-1 w-20 rounded bg-primary" />
            <p className="mt-6 text-base leading-7 text-secondary-foreground">
              Comprehensive ranch management. Built with grit. A complete
              platform for managing cattle operations, finances, and day-to-day
              ranch work.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-secondary-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="https://ranchgrit.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
              >
                Visit ranchgrit.io
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-2xl border border-border bg-card p-12">
              <RanchgritLogoMark className="h-40 w-64 text-primary" />
              <p className="mt-6 text-center font-mono text-lg font-bold tracking-tight text-foreground">
                RANCHGRIT
              </p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                ranchgrit.io
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
