import type { Metadata } from 'next'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
}

const lastUpdated = 'February 2026'

export default function PrivacyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {COMPANY.name} d/b/a {COMPANY.dba}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        <article className="space-y-8">
          <Section title="1. Introduction">
            <p>
              Digital Ranch Technologies LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              operating under the trade name RANCHGRIT, is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
            <p>
              By using our Services, you consent to the data practices described
              in this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              <strong>Information You Provide:</strong>
            </p>
            <ul>
              <li>
                Name, email address, and contact information when you create an
                account or contact us
              </li>
              <li>
                Ranch and operational data you input into the platform
              </li>
              <li>
                Payment information processed through our third-party payment
                providers
              </li>
              <li>Communications you send to us</li>
            </ul>
            <p>
              <strong>Information Collected Automatically:</strong>
            </p>
            <ul>
              <li>
                Device information (browser type, operating system, device
                identifiers)
              </li>
              <li>
                Usage data (pages visited, features used, time spent)
              </li>
              <li>
                Log data (IP address, access times, referring URLs)
              </li>
              <li>
                Cookies and similar tracking technologies
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our Services</li>
              <li>
                Improve, personalize, and expand our Services
              </li>
              <li>
                Communicate with you, including customer support and updates
              </li>
              <li>
                Process transactions and send related information
              </li>
              <li>
                Analyze usage patterns to improve user experience
              </li>
              <li>
                Detect, prevent, and address technical issues or security
                threats
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. How We Share Your Information">
            <p>
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                assist in operating our Services (hosting, analytics, payment
                processing)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, or legal process
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
              <li>
                <strong>Protection of Rights:</strong> To protect the safety,
                rights, or property of Digital Ranch Technologies, our users, or
                the public
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your information for as long as your account is active or
              as needed to provide you Services. We may also retain and use your
              information to comply with legal obligations, resolve disputes, and
              enforce our agreements.
            </p>
            <p>
              When you request account deletion, we will delete or anonymize your
              personal data within a reasonable timeframe, except where retention
              is required by law.
            </p>
          </Section>

          <Section title="6. Your Rights and Choices">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>
                Access the personal information we hold about you
              </li>
              <li>
                Request correction of inaccurate personal information
              </li>
              <li>Request deletion of your personal information</li>
              <li>
                Object to or restrict certain processing of your data
              </li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-primary hover:text-accent"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </Section>

          <Section title="7. Cookies and Tracking Technologies">
            <p>
              We use cookies and similar tracking technologies to collect
              information about your browsing activities. You can control cookies
              through your browser settings. Disabling cookies may affect the
              functionality of certain features.
            </p>
            <p>We may use the following types of cookies:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for the Services to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our Services
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and
                preferences
              </li>
            </ul>
          </Section>

          <Section title="8. Children&apos;s Privacy">
            <p>
              Our Services are not directed to individuals under the age of 13.
              We do not knowingly collect personal information from children
              under 13. If we become aware that a child under 13 has provided us
              with personal information, we will take steps to delete such
              information.
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>
              Our Services may contain links to third-party websites or services.
              We are not responsible for the privacy practices of these third
              parties. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of material changes by posting the updated policy on our
              website with a new &ldquo;Last updated&rdquo; date.
            </p>
            <p>
              Continued use of the Services after changes constitutes acceptance
              of the revised policy.
            </p>
          </Section>

          <Section title="12. Contact Information">
            <p>
              If you have questions about this Privacy Policy or our data
              practices, contact us at:
            </p>
            <p>
              <strong>{COMPANY.name}</strong>
              <br />
              d/b/a <strong>{COMPANY.dba}</strong>
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
