import { Check, ArrowRight, Monitor } from 'lucide-react'

const options = [
  {
    name: 'Option A: Electric Lime',
    color: '#84cc16',
    hover: '#a3e635',
    description: 'Bright and punchy — high contrast, very modern/tech',
    tw: 'lime-electric',
  },
  {
    name: 'Option B: Neon Chartreuse',
    color: '#bef264',
    hover: '#d9f99d',
    description: 'Slightly more yellow-green — energetic, startup vibe',
    tw: 'lime-neon',
  },
  {
    name: 'Option C: Muted Sage',
    color: '#65a30d',
    hover: '#84cc16',
    description: 'Softer, more professional — less flashy, more refined',
    tw: 'lime-sage',
  },
]

export function ColorSamples() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Temporary — Color Selection
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Pick Your Accent Color
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            All three options shown against the slate grey + graphite noise
            background. Pick your favorite and let me know.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {options.map((opt) => (
            <div key={opt.name} className="space-y-6">
              {/* Label */}
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: opt.color }}
                >
                  {opt.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {opt.description}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {opt.color} / {opt.hover}
                </p>
              </div>

              {/* Swatch bar */}
              <div className="flex gap-2">
                <div
                  className="h-10 flex-1 rounded"
                  style={{ backgroundColor: opt.color }}
                />
                <div
                  className="h-10 flex-1 rounded"
                  style={{ backgroundColor: opt.hover }}
                />
                <div
                  className="h-10 flex-1 rounded"
                  style={{ backgroundColor: opt.color, opacity: 0.3 }}
                />
              </div>

              {/* Sample button */}
              <div className="flex gap-3">
                <button
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: opt.color,
                    color: '#1e1e24',
                  }}
                >
                  Primary Button
                  <ArrowRight size={16} />
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold"
                  style={{
                    borderColor: opt.color,
                    color: opt.color,
                  }}
                >
                  Outline
                </button>
              </div>

              {/* Sample card */}
              <div
                className="rounded-lg border bg-card p-5"
                style={{ borderColor: `${opt.color}40` }}
              >
                <Monitor
                  className="h-7 w-7"
                  style={{ color: opt.color }}
                />
                <h4 className="mt-3 text-sm font-semibold text-foreground">
                  Sample Card Title
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  This is what a service card would look like with this accent.
                </p>
              </div>

              {/* Sample text */}
              <div className="space-y-2">
                <p className="text-sm">
                  <span style={{ color: opt.color }} className="font-semibold">
                    Accent heading text
                  </span>{' '}
                  <span className="text-secondary-foreground">
                    with regular body copy next to it.
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <Check
                    className="h-4 w-4"
                    style={{ color: opt.color }}
                  />
                  <span className="text-sm text-secondary-foreground">
                    Checklist item in this accent
                  </span>
                </div>
                <div
                  className="h-1 w-20 rounded"
                  style={{ backgroundColor: opt.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
