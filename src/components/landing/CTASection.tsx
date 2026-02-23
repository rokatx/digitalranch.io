export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-earth/20 via-primary/10 to-earth/20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Ready to modernize your ranch operations?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-secondary-foreground">
          Join the ranchers already using RANCHGRIT to manage their operations
          with modern, purpose-built software.
        </p>
        <div className="mt-8">
          <a
            href="https://ranchgrit.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            Get Started with RANCHGRIT
          </a>
        </div>
      </div>
    </section>
  )
}
