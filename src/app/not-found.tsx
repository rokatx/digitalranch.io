import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-mono text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-secondary-foreground">
        Page not found.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
      >
        Back to Home
      </Link>
    </div>
  )
}
