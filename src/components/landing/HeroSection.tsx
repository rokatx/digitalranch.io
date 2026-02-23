export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-earth/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Digital Ranch Technologies LLC
          </p>
          <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Technology Solutions for the Modern Ranch
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-foreground sm:text-xl">
            We build software that helps ranchers work smarter &mdash; from the
            chute to the office. Modern tools designed for the people who feed
            the world.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  )
}
