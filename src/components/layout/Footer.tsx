import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {COMPANY.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {COMPANY.state}
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href="/terms/"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy/"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="transition-colors hover:text-primary"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {COMPANY.year} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
