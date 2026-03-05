import type { Metadata } from 'next'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
}

const lastUpdated = 'March 2026'

export default function PrivacyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {COMPANY.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        <article className="space-y-8">
          <Section title="1. Introduction">
            <p>
              Digital Ranch Technologies LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website (digitalranch.io) or contact us through it.
            </p>
            <p>
              This policy applies to this marketing website only. If you are a
              RanchGrit platform user, a separate Privacy Policy governing your
              account and operational data is available within the platform.
            </p>
            <p>
              By using this website, you consent to the data practices described
              in this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              <strong>Information You Provide:</strong>
            </p>
            <ul>
              <li>
                Name, email address, and message when you submit the contact
                form on this website
              </li>
            </ul>
            <p>
              <strong>Information Collected Automatically:</strong>
            </p>
            <p>
              This website does not use analytics software, advertising trackers,
              or fingerprinting technologies. We do not set cookies on your
              device, and we do not collect device identifiers or track your
              browsing behavior.
            </p>
            <p>
              This website loads fonts from Google Fonts. When your browser
              requests a font, Google&rsquo;s servers receive your IP address as part
              of the standard HTTP request. We have no control over Google&rsquo;s
              handling of that data. See{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent"
              >
                Google&rsquo;s Privacy Policy
              </a>{' '}
              for details.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use contact form submissions solely to:</p>
            <ul>
              <li>Respond to your inquiry</li>
              <li>Follow up on sales or partnership discussions you initiate</li>
            </ul>
            <p>
              We do not use your contact information for unsolicited marketing.
            </p>
          </Section>

          <Section title="4. How We Share Your Information">
            <p>
              We do not sell your personal information. We share your information
              only in the following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Formspree:</strong> Contact form submissions are
                processed by Formspree, Inc. (formspree.io), which receives your
                name, email address, and message in order to deliver your
                inquiry to us. Formspree&rsquo;s privacy policy is available at{' '}
                <a
                  href="https://formspree.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent"
                >
                  formspree.io/legal/privacy-policy
                </a>
                .
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, or legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
              <li>
                <strong>Protection of Rights:</strong> To protect the safety,
                rights, or property of Digital Ranch Technologies, our users, or
                the public.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              Contact form submissions are retained by Formspree according to
              their data retention policy. We retain email correspondence for as
              long as needed to support the business relationship initiated by
              your inquiry, or as required by law.
            </p>
            <p>
              You may request deletion of your contact information by emailing
              us at{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-primary hover:text-accent"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </Section>

          <Section title="6. Your Rights and Choices">
            <p>You have the right to:</p>
            <ul>
              <li>
                Request access to any personal information we hold about you
              </li>
              <li>
                Request correction of inaccurate information
              </li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of any future communications from us</li>
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
              This website does not set cookies on your device. We do not use
              analytics, advertising, or tracking cookies of any kind.
            </p>
            <p>
              Your browser may cache standard web assets (HTML, CSS, fonts) for
              performance. This is controlled by your browser, not by us.
            </p>
          </Section>

          <Section title="8. Children&apos;s Privacy">
            <p>
              Our website and services are not directed to individuals under the
              age of 18. We do not knowingly collect personal information from
              anyone under 18. If you believe a minor has submitted information
              through this website, contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              This website is served over HTTPS (TLS encryption in transit). We
              do not store contact form data on our own servers — submissions are
              handled by Formspree and delivered directly to our inbox.
            </p>
            <p>
              No method of electronic transmission is 100% secure. We encourage
              you not to send sensitive information (such as financial or health
              data) through the contact form.
            </p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>
              Our website may contain links to third-party websites or services.
              We are not responsible for the privacy practices of those third
              parties. We encourage you to review their privacy policies before
              providing any personal information.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the updated policy on
              this page with a new &ldquo;Last updated&rdquo; date.
            </p>
            <p>
              Continued use of this website after changes constitutes acceptance
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
