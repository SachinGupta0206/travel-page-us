import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Globe, Lock, Eye, Database, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      {/* Nav */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <div style={styles.navBrand}>
          <div style={styles.navLogo}>
            <Globe size={20} color="#0D0F1A" />
          </div>
          <span style={styles.navBrandName}>Travel<span style={styles.amp}>N</span>Explore World</span>
        </div>
      </nav>

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroIcon}>
          <Shield size={40} color="#D4A843" />
        </div>
        <h1 style={styles.heroTitle}>Privacy Policy</h1>
        <p style={styles.heroSub}>Last updated: January 1, 2026</p>
      </div>

      {/* Content */}
      <div style={styles.container}>

        <div style={styles.intro}>
          <p style={styles.introText}>
            At <strong style={styles.gold}>Travel N Explore World</strong>, we are committed to protecting your personal
            information and your right to privacy. This policy explains what information we collect, how we use it,
            and what rights you have in relation to it.
          </p>
        </div>

        <Section icon={<Database size={20} color="#D4A843" />} title="1. Information We Collect">
          <p>We collect information you provide directly to us when you:</p>
          <ul>
            <li>Submit a booking request or enquiry form</li>
            <li>Contact us via phone, WhatsApp, or email</li>
            <li>Subscribe to our newsletter or promotional offers</li>
            <li>Interact with our website or social media pages</li>
          </ul>
          <p>This information may include your <strong>full name, email address, phone number, travel dates, passport details, and payment information</strong> as required to process your booking.</p>
          <p>We also automatically collect certain technical data such as your IP address, browser type, device information, and pages visited to help us improve our website experience.</p>
        </Section>

        <Section icon={<Eye size={20} color="#D4A843" />} title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and confirm your travel bookings and payments</li>
            <li>Communicate with you about your itinerary, visa requirements, and travel documents</li>
            <li>Send booking confirmations, reminders, and important travel updates</li>
            <li>Provide 24/7 customer support before, during, and after your trip</li>
            <li>Send promotional offers, newsletters, and seasonal deals (you may opt out at any time)</li>
            <li>Comply with legal obligations and prevent fraudulent activity</li>
            <li>Improve our website, services, and customer experience</li>
          </ul>
        </Section>

        <Section icon={<Lock size={20} color="#D4A843" />} title="3. How We Protect Your Information">
          <p>We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include:</p>
          <ul>
            <li>SSL encryption for all data transmitted through our website</li>
            <li>Secure payment processing through PCI-compliant payment providers</li>
            <li>Restricted access to personal data on a need-to-know basis</li>
            <li>Regular security assessments and staff training</li>
          </ul>
          <p>While we take every precaution, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.</p>
        </Section>

        <Section icon={<Globe size={20} color="#D4A843" />} title="4. Sharing Your Information">
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only with:</p>
          <ul>
            <li><strong>Airlines and hotels</strong> — to confirm your reservations</li>
            <li><strong>Visa processing agencies</strong> — to assist with documentation</li>
            <li><strong>Ground transportation providers</strong> — to arrange airport transfers</li>
            <li><strong>Payment processors</strong> — to securely handle transactions</li>
            <li><strong>Legal authorities</strong> — when required by applicable law</li>
          </ul>
          <p>All third-party partners are bound by confidentiality agreements and are required to handle your data responsibly.</p>
        </Section>

        <Section icon={<Shield size={20} color="#D4A843" />} title="5. Cookies & Tracking">
          <p>Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences, analyse traffic patterns, and deliver relevant content. You can control cookie settings through your browser preferences.</p>
          <p>We use the following types of cookies:</p>
          <ul>
            <li><strong>Essential cookies</strong> — required for the website to function correctly</li>
            <li><strong>Analytics cookies</strong> — help us understand how visitors use our site</li>
            <li><strong>Marketing cookies</strong> — used to show you relevant advertisements</li>
          </ul>
        </Section>

        <Section icon={<Eye size={20} color="#D4A843" />} title="6. Your Rights">
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right to Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Right to Correction</strong> — request correction of inaccurate or incomplete data</li>
            <li><strong>Right to Deletion</strong> — request deletion of your personal data (subject to legal obligations)</li>
            <li><strong>Right to Opt-Out</strong> — unsubscribe from marketing communications at any time</li>
            <li><strong>Right to Data Portability</strong> — request your data in a portable format</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the details below.</p>
        </Section>

        <Section icon={<Database size={20} color="#D4A843" />} title="7. Data Retention">
          <p>We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, including for the duration of your travel booking and any post-trip follow-up. We may retain certain data for longer periods where required by law or for legitimate business purposes such as financial record-keeping.</p>
        </Section>

        <Section icon={<Globe size={20} color="#D4A843" />} title="8. Third-Party Links">
          <p>Our website may contain links to third-party websites, such as airline portals, hotel booking platforms, or visa application sites. We are not responsible for the privacy practices of these external sites and encourage you to read their privacy policies before providing any personal information.</p>
        </Section>

        <Section icon={<Lock size={20} color="#D4A843" />} title="9. Children's Privacy">
          <p>Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will take steps to remove such data.</p>
        </Section>

        <Section icon={<Shield size={20} color="#D4A843" />} title="10. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting the updated policy on this page with a revised "Last updated" date. We encourage you to review this page periodically.</p>
        </Section>

        {/* Contact Box */}
        <div style={styles.contactBox}>
          <h3 style={styles.contactTitle}>Privacy Enquiries</h3>
          <p style={styles.contactText}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us:
          </p>
          <div style={styles.contactMethods}>
            <a href="mailto:travelnexploreworld@gmail.com" style={styles.contactMethod}>
              <Mail size={16} color="#D4A843" />
              travelnexploreworld@gmail.com
            </a>
            <a href="tel:+19293433673" style={styles.contactMethod}>
              <Phone size={16} color="#D4A843" />
              +1 929 343 3673
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div style={styles.pageFooter}>
          <Link to="/" style={styles.footerLink}>← Back to Home</Link>
          <div style={styles.footerLinks}>
            <Link to="/terms" style={styles.footerLink}>Terms of Use</Link>
            <Link to="/refund" style={styles.footerLink}>Refund Policy</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>
        <div style={styles.sectionIcon}>{icon}</div>
        <h2 style={styles.sectionTitle}>{title}</h2>
      </div>
      <div style={styles.sectionBody}>{children}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "#0D0F1A",
    color: "#E8E4DC",
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
  },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 28px",
    background: "rgba(13,15,26,0.92)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(212,168,67,0.2)",
  },
  backLink: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#D4A843",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    transition: "opacity 0.2s",
  },
  navBrand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  navLogo: {
    width: 38,
    height: 38,
    background: "linear-gradient(135deg, #D4A843, #F0C96A)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navBrandName: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 17,
    color: "#FFF8EC",
  },
  amp: {
    color: "#F0C96A",
    margin: "0 3px",
  },
  hero: {
    textAlign: "center",
    padding: "72px 24px 48px",
    background: "linear-gradient(180deg, #141728 0%, #0D0F1A 100%)",
    borderBottom: "1px solid rgba(212,168,67,0.15)",
  },
  heroIcon: {
    width: 80,
    height: 80,
    background: "rgba(212,168,67,0.12)",
    border: "1px solid rgba(212,168,67,0.3)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: 700,
    color: "#FFF8EC",
    marginBottom: 12,
  },
  heroSub: {
    fontSize: 14,
    color: "rgba(232,228,220,0.5)",
    letterSpacing: "0.05em",
  },
  container: {
    maxWidth: 820,
    margin: "0 auto",
    padding: "48px 24px 80px",
  },
  intro: {
    background: "rgba(212,168,67,0.07)",
    border: "1px solid rgba(212,168,67,0.2)",
    borderRadius: 14,
    padding: "24px 28px",
    marginBottom: 40,
  },
  introText: {
    fontSize: 15.5,
    lineHeight: 1.7,
    color: "rgba(232,228,220,0.85)",
    margin: 0,
  },
  gold: {
    color: "#D4A843",
  },
  section: {
    marginBottom: 40,
    background: "#141728",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    overflow: "hidden",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "18px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(212,168,67,0.05)",
  },
  sectionIcon: {
    flexShrink: 0,
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 18,
    fontWeight: 600,
    color: "#FFF8EC",
    margin: 0,
  },
  sectionBody: {
    padding: "20px 24px",
    fontSize: 14.5,
    lineHeight: 1.75,
    color: "rgba(232,228,220,0.75)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  contactBox: {
    background: "linear-gradient(135deg, rgba(212,168,67,0.12), rgba(212,168,67,0.05))",
    border: "1px solid rgba(212,168,67,0.3)",
    borderRadius: 16,
    padding: "32px",
    marginTop: 48,
    marginBottom: 48,
    textAlign: "center",
  },
  contactTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 22,
    fontWeight: 700,
    color: "#FFF8EC",
    marginBottom: 12,
  },
  contactText: {
    fontSize: 14.5,
    color: "rgba(232,228,220,0.7)",
    lineHeight: 1.6,
    marginBottom: 20,
  },
  contactMethods: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  contactMethod: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#D4A843",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    padding: "10px 20px",
    background: "rgba(212,168,67,0.08)",
    border: "1px solid rgba(212,168,67,0.25)",
    borderRadius: 999,
  },
  pageFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    paddingTop: 32,
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  footerLinks: {
    display: "flex",
    gap: 20,
  },
  footerLink: {
    fontSize: 13.5,
    color: "rgba(232,228,220,0.5)",
    textDecoration: "none",
    transition: "color 0.2s",
  },
};
