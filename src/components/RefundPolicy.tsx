import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, ArrowLeft, Globe, Clock, CreditCard, AlertCircle, CheckCircle, Phone, Mail } from "lucide-react";

export default function RefundPolicy() {
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
          <RefreshCw size={40} color="#D4A843" />
        </div>
        <h1 style={styles.heroTitle}>Refund Policy</h1>
        <p style={styles.heroSub}>Last updated: January 1, 2026</p>
      </div>

      {/* Content */}
      <div style={styles.container}>

        <div style={styles.intro}>
          <p style={styles.introText}>
            At <strong style={styles.gold}>Travel N Explore World</strong>, we strive to make your holiday planning
            as stress-free as possible. Our refund policy is designed to be fair and transparent. Please read this
            policy carefully before making a booking.
          </p>
        </div>

        {/* Cancellation Timeline */}
        <div style={styles.timelineCard}>
          <h2 style={styles.timelineTitle}>Cancellation & Refund Schedule</h2>
          <p style={styles.timelineSub}>The following charges apply when you cancel a confirmed booking:</p>
          <div style={styles.timeline}>
            <TimelineItem
              range="91+ Days Before Departure"
              charge="Deposit retained"
              refund="Balance fully refunded"
              color="#27AE60"
              icon="✓"
            />
            <TimelineItem
              range="61–90 Days Before Departure"
              charge="50% of total package price"
              refund="50% refunded"
              color="#F0C96A"
              icon="~"
            />
            <TimelineItem
              range="31–60 Days Before Departure"
              charge="75% of total package price"
              refund="25% refunded"
              color="#E67E22"
              icon="!"
            />
            <TimelineItem
              range="0–30 Days Before Departure"
              charge="100% of total package price"
              refund="No refund"
              color="#E74C3C"
              icon="✗"
            />
          </div>
          <p style={styles.timelineNote}>
            * All cancellation requests must be submitted in writing via email. The date of written notification determines the applicable cancellation period.
          </p>
        </div>

        <Section icon={<CheckCircle size={20} color="#D4A843" />} title="1. How to Request a Refund">
          <p>To initiate a cancellation and refund request, please follow these steps:</p>
          <ol>
            <li>Send a written cancellation request to <strong>travelnexploreworld@gmail.com</strong> with your booking reference number, full name, and reason for cancellation.</li>
            <li>Our team will acknowledge your request within <strong>2 business days</strong>.</li>
            <li>We will calculate the refund amount based on the cancellation timeline above and confirm the figure in writing.</li>
            <li>Approved refunds will be processed within <strong>7–14 business days</strong> from the date of confirmation.</li>
            <li>Refunds will be issued to the original payment method used at the time of booking.</li>
          </ol>
        </Section>

        <Section icon={<CreditCard size={20} color="#D4A843" />} title="2. Refund Processing">
          <p>Once a refund is approved:</p>
          <ul>
            <li>Credit/debit card refunds typically appear within <strong>5–10 business days</strong>, depending on your bank or card issuer.</li>
            <li>Bank transfer refunds are processed within <strong>7–14 business days</strong>.</li>
            <li>Transaction fees or currency conversion charges are non-refundable.</li>
            <li>We are not responsible for delays caused by third-party financial institutions.</li>
          </ul>
          <p>You will receive an email confirmation once your refund has been initiated on our end.</p>
        </Section>

        <Section icon={<Clock size={20} color="#D4A843" />} title="3. Non-Refundable Components">
          <p>Certain elements of your travel package are non-refundable regardless of when the cancellation is made:</p>
          <ul>
            <li>Airline tickets once issued (subject to individual airline policies)</li>
            <li>Visa application fees and associated processing charges</li>
            <li>Travel insurance premiums</li>
            <li>Peak-season surcharges for Christmas, New Year, and special events</li>
            <li>Tickets for events, shows, or activities that are non-transferable</li>
            <li>Hotel bookings marked as "non-refundable" at time of booking</li>
          </ul>
          <p>We will clearly communicate any non-refundable components at the time of booking so there are no surprises.</p>
        </Section>

        <Section icon={<AlertCircle size={20} color="#D4A843" />} title="4. Force Majeure & Exceptional Circumstances">
          <p>In the event of cancellations caused by circumstances beyond our control — such as natural disasters, pandemics, government-imposed travel restrictions, civil unrest, or extreme weather — the following applies:</p>
          <ul>
            <li>We will make every effort to offer an alternative travel date or destination of equivalent value.</li>
            <li>If no suitable alternative is available, a <strong>travel credit</strong> valid for 18 months will be issued.</li>
            <li>Cash refunds in force majeure situations are evaluated on a case-by-case basis and may take longer to process.</li>
            <li>We strongly recommend comprehensive travel insurance to cover such events.</li>
          </ul>
        </Section>

        <Section icon={<RefreshCw size={20} color="#D4A843" />} title="5. Booking Modifications">
          <p>If you wish to modify rather than cancel your booking:</p>
          <ul>
            <li><strong>90+ days before departure:</strong> Date changes and destination swaps are permitted at no rebooking fee. Any price difference applies.</li>
            <li><strong>Within 90 days:</strong> Amendment fees may apply based on supplier charges (airlines, hotels, etc.).</li>
            <li>Name changes on airline bookings depend on the airline's policy and may not always be possible.</li>
          </ul>
          <p>All modification requests must be submitted in writing to our team. Verbal requests cannot be guaranteed.</p>
        </Section>

        <Section icon={<CheckCircle size={20} color="#D4A843" />} title="6. Travel Credits">
          <p>Instead of a cash refund, you may opt to receive a Travel Credit which offers additional benefits:</p>
          <ul>
            <li>Credits are valid for <strong>18 months</strong> from the date of issue</li>
            <li>Credits can be applied toward any Travel N Explore World package</li>
            <li>Credits are non-transferable and cannot be exchanged for cash</li>
            <li>In certain cases, we may offer a <strong>bonus credit</strong> as an incentive for choosing credit over a cash refund</li>
          </ul>
        </Section>

        <Section icon={<AlertCircle size={20} color="#D4A843" />} title="7. Trip Interruption">
          <p>If you need to cut your trip short after departure:</p>
          <ul>
            <li>No refunds are provided for unused portions of your tour once travel has commenced, unless due to a medical emergency with supporting documentation.</li>
            <li>In genuine medical emergencies, we will assist with arrangements and evaluate refund eligibility on a case-by-case basis.</li>
            <li>Travel insurance is strongly recommended to cover trip interruption scenarios.</li>
          </ul>
        </Section>

        <Section icon={<CreditCard size={20} color="#D4A843" />} title="8. Chargebacks & Disputes">
          <p>We encourage you to contact us directly before initiating any chargeback through your bank or payment provider. In most cases, our team can resolve issues quickly and efficiently.</p>
          <p>Unjustified chargebacks that contradict this Refund Policy will be contested. Initiating a chargeback does not waive our right to recover funds owed according to these terms.</p>
        </Section>

        {/* Contact Box */}
        <div style={styles.contactBox}>
          <h3 style={styles.contactTitle}>Need Help with a Refund?</h3>
          <p style={styles.contactText}>
            Our team is available to assist you with any refund or cancellation queries. Don't hesitate to reach out — we're here to help.
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
            <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
            <Link to="/terms" style={styles.footerLink}>Terms of Use</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function TimelineItem({
  range, charge, refund, color, icon,
}: { range: string; charge: string; refund: string; color: string; icon: string }) {
  return (
    <div style={{ ...styles.timelineItem, borderLeft: `3px solid ${color}` }}>
      <div style={{ ...styles.timelineIcon, background: color }}>{icon}</div>
      <div style={styles.timelineContent}>
        <div style={{ ...styles.timelineRange, color }}>{range}</div>
        <div style={styles.timelineCharge}>{charge} retained</div>
        <div style={styles.timelineRefund}>{refund}</div>
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
  timelineCard: {
    background: "#141728",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: "28px",
    marginBottom: 40,
  },
  timelineTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 20,
    fontWeight: 700,
    color: "#FFF8EC",
    marginBottom: 8,
  },
  timelineSub: {
    fontSize: 14,
    color: "rgba(232,228,220,0.55)",
    marginBottom: 24,
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 20,
  },
  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    padding: "16px 20px",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 10,
  },
  timelineIcon: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 13,
    color: "#fff",
    flexShrink: 0,
  },
  timelineContent: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  timelineRange: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.01em",
  },
  timelineCharge: {
    fontSize: 13.5,
    color: "rgba(232,228,220,0.65)",
  },
  timelineRefund: {
    fontSize: 13,
    color: "rgba(232,228,220,0.45)",
    fontStyle: "italic",
  },
  timelineNote: {
    fontSize: 12.5,
    color: "rgba(232,228,220,0.4)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: 16,
    marginTop: 4,
    lineHeight: 1.6,
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
    flexWrap: "wrap" as any,
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
