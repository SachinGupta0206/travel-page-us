import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, Globe, AlertCircle, CheckCircle, CreditCard, XCircle, Scale } from "lucide-react";

export default function TermsOfUse() {
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
          <FileText size={40} color="#D4A843" />
        </div>
        <h1 style={styles.heroTitle}>Terms of Use</h1>
        <p style={styles.heroSub}>Last updated: January 1, 2026</p>
      </div>

      {/* Content */}
      <div style={styles.container}>

        <div style={styles.intro}>
          <p style={styles.introText}>
            Please read these Terms of Use carefully before using the services offered by{" "}
            <strong style={styles.gold}>Travel N Explore World</strong>. By booking a tour, submitting an enquiry,
            or using our website, you agree to be bound by these terms. If you do not agree, please do not use our services.
          </p>
        </div>

        <Section icon={<CheckCircle size={20} color="#D4A843" />} title="1. Agreement to Terms">
          <p>These Terms of Use govern your use of the Travel N Explore World website and all services provided by us. By accessing our website or making a booking, you confirm that you:</p>
          <ul>
            <li>Are at least 18 years of age or have the consent of a parent or guardian</li>
            <li>Have the legal authority to enter into this agreement</li>
            <li>Agree to provide accurate, complete, and up-to-date information</li>
            <li>Accept full responsibility for all bookings made on behalf of your travel group</li>
          </ul>
        </Section>

        <Section icon={<CreditCard size={20} color="#D4A843" />} title="2. Booking & Payment">
          <p>All bookings are subject to availability and confirmation by Travel N Explore World. A booking is confirmed only upon receipt of the required deposit and written confirmation from our team.</p>
          <ul>
            <li><strong>Economy Plan:</strong> A deposit of 50% of the total package price is required to confirm your booking, with the balance due before departure.</li>
            <li><strong>First Class Plan:</strong> Full payment of 100% is required at the time of booking to avail the stated discount.</li>
            <li>Prices are quoted in USD and are subject to change until a booking is fully confirmed.</li>
            <li>All prices are per person based on double occupancy unless otherwise stated.</li>
            <li>Payment must be made via the methods approved by Travel N Explore World. We are not responsible for any losses arising from unauthorised payment methods.</li>
          </ul>
        </Section>

        <Section icon={<Globe size={20} color="#D4A843" />} title="3. Travel Documents & Visas">
          <p>It is the traveller's responsibility to ensure they hold valid travel documents, including a valid passport (with at least 6 months validity beyond the travel date) and all required visas.</p>
          <ul>
            <li>Travel N Explore World provides visa <strong>assistance</strong> only — we do not guarantee visa approval.</li>
            <li>We are not liable for any losses, costs, or damages arising from visa refusals, delays, or incomplete documentation submitted by the traveller.</li>
            <li>Travellers are responsible for verifying all entry requirements for their destination country.</li>
            <li>Any additional costs arising from incorrect or expired documents are the sole responsibility of the traveller.</li>
          </ul>
        </Section>

        <Section icon={<AlertCircle size={20} color="#D4A843" />} title="4. Changes to Your Booking">
          <p>We understand that plans can change. The following conditions apply to booking amendments:</p>
          <ul>
            <li>Requests to change travel dates, destinations, or passenger names must be submitted in writing at least <strong>90 days before departure</strong> to avoid rebooking fees.</li>
            <li>Changes requested within 90 days of departure may be subject to amendment fees charged by airlines, hotels, and other service providers.</li>
            <li>Name changes may not be possible on certain airline tickets; additional charges may apply.</li>
            <li>Travel N Explore World reserves the right to modify itineraries due to operational reasons, weather conditions, or force majeure. Alternatives of equal value will be offered where possible.</li>
          </ul>
        </Section>

        <Section icon={<XCircle size={20} color="#D4A843" />} title="5. Cancellations">
          <p>Cancellation requests must be submitted in writing. Cancellation charges apply as follows:</p>
          <ul>
            <li><strong>91+ days before departure:</strong> Full deposit refundable (minus processing fees)</li>
            <li><strong>61–90 days before departure:</strong> 50% of total package price retained</li>
            <li><strong>31–60 days before departure:</strong> 75% of total package price retained</li>
            <li><strong>0–30 days before departure:</strong> 100% of total package price retained (no refund)</li>
          </ul>
          <p>Please refer to our <Link to="/refund" style={styles.inlineLink}>Refund Policy</Link> for full details on the refund process.</p>
        </Section>

        <Section icon={<AlertCircle size={20} color="#D4A843" />} title="6. Travel Insurance">
          <p>Comprehensive travel insurance is <strong>strongly recommended</strong> for all travellers. Your package includes basic travel insurance; however, we strongly advise purchasing additional coverage for:</p>
          <ul>
            <li>Trip cancellation and interruption</li>
            <li>Medical emergencies and evacuation</li>
            <li>Lost or delayed baggage</li>
            <li>Flight delays and missed connections</li>
          </ul>
          <p>Travel N Explore World is not liable for any expenses, losses, or damages that would have been covered by adequate travel insurance.</p>
        </Section>

        <Section icon={<Scale size={20} color="#D4A843" />} title="7. Liability">
          <p>Travel N Explore World acts as an intermediary between you and various service providers including airlines, hotels, and tour operators. While we take great care in selecting our partners, we are not directly liable for:</p>
          <ul>
            <li>Service failures, delays, or cancellations by third-party suppliers</li>
            <li>Losses or damages caused by circumstances beyond our reasonable control (force majeure)</li>
            <li>Personal injury, illness, or death unless caused by our direct negligence</li>
            <li>Any indirect, consequential, or special damages arising from your travel</li>
          </ul>
          <p>Our maximum liability to you shall not exceed the total amount paid for the affected portion of your booking.</p>
        </Section>

        <Section icon={<CheckCircle size={20} color="#D4A843" />} title="8. Your Responsibilities">
          <p>As a traveller booking with us, you agree to:</p>
          <ul>
            <li>Behave responsibly and respect local laws, customs, and fellow travellers</li>
            <li>Disclose any medical conditions or special requirements at the time of booking</li>
            <li>Arrive at all departure points at the required times</li>
            <li>Not engage in any illegal activity during your travel</li>
            <li>Not hold Travel N Explore World responsible for circumstances arising from your own actions or omissions</li>
          </ul>
        </Section>

        <Section icon={<Globe size={20} color="#D4A843" />} title="9. Intellectual Property">
          <p>All content on the Travel N Explore World website — including text, images, logos, itineraries, and design — is the intellectual property of Travel N Explore World and is protected by applicable copyright laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
        </Section>

        <Section icon={<Scale size={20} color="#D4A843" />} title="10. Governing Law">
          <p>These Terms of Use shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of our services shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be subject to binding arbitration.</p>
          <p>Travel N Explore World reserves the right to update these terms at any time. Continued use of our services following any changes constitutes acceptance of the revised terms.</p>
        </Section>

        {/* Footer links */}
        <div style={styles.pageFooter}>
          <Link to="/" style={styles.footerLink}>← Back to Home</Link>
          <div style={styles.footerLinks}>
            <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
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
    fontSize: "clamp(32px, 5vw, 52px)" as any,
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
  inlineLink: {
    color: "#D4A843",
    textDecoration: "underline",
  },
  pageFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap" as any,
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
  },
};
