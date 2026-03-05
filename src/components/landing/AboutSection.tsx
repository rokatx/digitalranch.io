import { Sprout } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-card/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Who We Are
          </h2>
          <div className="mt-3 h-1 w-20 rounded bg-primary" />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5">
            <p className="text-base leading-7 text-secondary-foreground">
              Digital Ranch Technologies LLC is an ag-tech startup focused on
              building modern technology solutions for the agricultural and ranch
              industries. We were founded by a rancher who got tired of waiting
              for someone else to build the right tool &mdash; so he built it
              himself.
            </p>
            <p className="text-base leading-7 text-secondary-foreground">
              We own and operate a ranch. Since 2025, we run cattle on it too.
              So when we say we understand what ranch management software needs
              to do, we mean it from the saddle up.
            </p>
            <p className="text-base leading-7 text-secondary-foreground">
              All hat, no cattle isn&apos;t our style. We built this running
              cows.
            </p>
            <p className="text-base leading-7 text-secondary-foreground">
              We believe ranchers deserve the same quality of software that other
              industries take for granted. We&apos;re building tools that
              respect how ranch work actually gets done &mdash; in the field, at
              the chute, and after dark at the kitchen table.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-border bg-card p-6 flex items-center gap-4">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQEBkcSnTLIMsA/profile-displayphoto-scale_400_400/B56Zx46LG6J4Ag-/0/1771555043951?e=1774483200&v=beta&t=bmXSp91CR-fv9e5LQ24wOzeRQEg0qjEUF_npQ04Owh4"
                alt="Ronny Katzenberger"
                width={64}
                height={64}
                className="rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-semibold text-foreground">Ronny Katzenberger</p>
                <p className="text-sm text-muted-foreground">Founder &amp; Rancher</p>
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <Sprout className="h-6 w-6 text-primary" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Startup Mode
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-secondary-foreground">
                We&apos;re actively building and shipping. We move fast, listen to
                our users, and ship features that matter to real ranch operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
