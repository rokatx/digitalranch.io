import { Monitor, BrainCircuit, BarChart3, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Ranch Management Software',
    description:
      'Comprehensive platforms for cattle operations, herd records, health tracking, breeding, and financial management.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Decision Support',
    description:
      'Intelligent tools that help operators process information faster, surface insights from herd data, and stay ahead of operational needs.',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description:
      'Turning ranch data into actionable intelligence. Expense tracking, performance analytics, and audit-ready reporting.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Field Tools',
    description:
      'Designed for gloved hands and bad signal. Offline-capable tools that work where the work happens.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What We Do
          </h2>
          <div className="mt-3 h-1 w-20 rounded bg-primary" />
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-secondary-foreground">
          We focus on technology solutions purpose-built for the agricultural and
          ranch industries.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <service.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
