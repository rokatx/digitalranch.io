import type { Metadata } from 'next'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY.name}`,
}

const lastUpdated = 'February 2026'

export default function TermsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {COMPANY.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        <article className="space-y-8">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Digital Ranch Technologies website,
              applications, or services (collectively, the &ldquo;Services&rdquo;), you agree
              to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not
              agree to these Terms, you may not use the Services.
            </p>
            <p>
              These Terms apply to all users, including visitors, registered
              users, and paying customers.
            </p>
          </Section>

          <Section title="2. Description of Services">
            <p>
              Digital Ranch Technologies LLC provides software-as-a-service platforms and technology
              solutions designed to assist ranch and livestock operations with
              data management, recordkeeping, analysis, and operational support
              tools.
            </p>
            <p>
              The Services may include features powered by automation, analytics,
              or artificial intelligence intended to assist users in organizing
              information and making decisions.
            </p>
          </Section>

          <Section title="3. No Professional, Veterinary, Medical, or Financial Advice">
            <p className="font-semibold text-foreground">
              IMPORTANT DISCLAIMER
            </p>
            <p>
              The Services are provided for informational and decision-support
              purposes only.
            </p>
            <p>
              Digital Ranch Technologies does not provide veterinary, medical,
              legal, financial, regulatory, or other professional advice.
            </p>
            <p>You acknowledge and agree that:</p>
            <ul>
              <li>
                Any information, insights, suggestions, or outputs provided by
                the Services are not advice
              </li>
              <li>
                You are solely responsible for evaluating information and making
                decisions
              </li>
              <li>
                You should consult qualified professionals before acting on
                information from the Services
              </li>
              <li>
                Digital Ranch Technologies does not guarantee outcomes, results,
                accuracy, or suitability for any specific purpose
              </li>
            </ul>
          </Section>

          <Section title="4. User Responsibilities">
            <p>You are responsible for:</p>
            <ul>
              <li>
                Maintaining the accuracy and completeness of data you input
              </li>
              <li>
                Ensuring compliance with applicable laws and regulations
              </li>
              <li>
                Maintaining the confidentiality of your account credentials
              </li>
              <li>All activities that occur under your account</li>
            </ul>
            <p>
              You agree not to misuse the Services or use them for unlawful,
              harmful, misleading, or deceptive purposes.
            </p>
          </Section>

          <Section title="5. AI-Assisted Features and Limitations">
            <p>
              Certain features of the Services may use automated or AI-assisted
              processes.
            </p>
            <p>You acknowledge and agree that:</p>
            <ul>
              <li>
                Outputs may be incomplete, inaccurate, or based on limited or
                outdated information
              </li>
              <li>AI-generated content is not guaranteed to be correct</li>
              <li>
                Human review and judgment are required before taking action
              </li>
              <li>
                You remain fully responsible for all decisions and actions taken
                based on the Services
              </li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All software, code, designs, content, trademarks, and materials
              related to the Services are owned by or licensed to Digital Ranch
              Technologies LLC.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable,
              revocable license to use the Services solely for your internal
              business purposes, subject to these Terms.
            </p>
            <p>
              You may not copy, modify, distribute, reverse engineer, resell, or
              exploit the Services except as expressly permitted.
            </p>
          </Section>

          <Section title="7. User Content and Data">
            <p>
              You retain ownership of the data you submit to the Services.
            </p>
            <p>
              By using the Services, you grant Digital Ranch Technologies a
              limited license to host, process, analyze, and display your data
              solely as necessary to operate, maintain, and improve the Services.
            </p>
            <p>
              Digital Ranch Technologies does not claim ownership of your
              operational data.
            </p>
          </Section>

          <Section title="8. Service Availability and Modifications">
            <p>
              The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            </p>
            <p>
              Digital Ranch Technologies may modify, suspend, or discontinue any
              part of the Services at any time, with or without notice, and
              without liability.
            </p>
            <p>
              We do not guarantee uninterrupted, secure, or error-free
              operation.
            </p>
          </Section>

          <Section title="9. Fees and Payments">
            <p>
              Certain features of the Services may require payment.
            </p>
            <p>
              All fees are non-refundable unless expressly stated otherwise in
              writing.
            </p>
            <p>
              Failure to pay applicable fees may result in suspension or
              termination of access to the Services.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p className="font-semibold text-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <p>
              Digital Ranch Technologies shall not be liable for any indirect,
              incidental, consequential, special, or punitive damages, including
              but not limited to loss of profits, loss of data, loss of
              livestock, loss of business opportunities, or loss of goodwill.
            </p>
            <p>
              Digital Ranch Technologies&apos; total liability for any claim arising
              out of or related to the Services shall not exceed the amount paid
              by you for the Services during the twelve (12) months preceding the
              claim.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Digital Ranch
              Technologies and its members, managers, officers, employees, and
              agents from any claims, damages, losses, liabilities, and expenses
              (including reasonable attorneys&apos; fees) arising out of or related
              to:
            </p>
            <ul>
              <li>Your use of the Services</li>
              <li>Your data or content</li>
              <li>Your violation of these Terms</li>
              <li>
                Decisions or actions you take based on the Services
              </li>
            </ul>
          </Section>

          <Section title="12. Termination">
            <p>
              Digital Ranch Technologies may suspend or terminate your access to
              the Services at any time for violation of these Terms or misuse of
              the Services.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately
              cease.
            </p>
          </Section>

          <Section title="13. Governing Law and Venue">
            <p>
              These Terms are governed by the laws of the State of Texas, without
              regard to conflict of law principles.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or the
              Services shall be resolved exclusively in the state or federal
              courts located in Texas.
            </p>
          </Section>

          <Section title="14. Changes to Terms">
            <p>
              Digital Ranch Technologies may update these Terms from time to
              time.
            </p>
            <p>
              Continued use of the Services after any changes constitutes
              acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="15. Contact Information">
            <p>
              <strong>{COMPANY.name}</strong>
              <br />
              Email:{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-primary hover:text-accent"
              >
                {COMPANY.email}
              </a>
            </p>
          </Section>
        </article>
      </div>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <hr className="my-3 border-border" />
      <div className="space-y-3 text-sm leading-6 text-foreground/90 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_li]:pl-1">
        {children}
      </div>
    </section>
  )
}
