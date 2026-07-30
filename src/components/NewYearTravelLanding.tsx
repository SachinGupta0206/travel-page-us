import { useState, useEffect } from "react";

/**
 * AURORA CROSSINGS — New Year 2026/2027 Travel Landing Page
 * Reference: trafalgar.com/en-us (full-bleed photography, trust bar, deal cards)
 * Signature element: a split-flap "departure board" countdown to midnight,
 * paired with real destination photography styled as boarding passes.
 */

const DESTINATIONS = [
  {
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    gate: "A7",
    blurb:
      "Desert dunes by day, the world's tallest fireworks show by midnight.",
    seat: "12F",
    img: "https://images.unsplash.com/photo-1753029111752-f12018752cd3?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "CDG",
    city: "Paris",
    country: "France",
    gate: "B3",
    blurb: "Champagne courses under the Eiffel Tower's countdown sparkle.",
    seat: "04A",
    img: "https://images.unsplash.com/photo-1642947392578-b37fbd9a4d45?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "MLE",
    city: "Maldives",
    country: "Indian Ocean",
    gate: "C1",
    blurb: "A private overwater deck, no crowd but the tide.",
    seat: "01C",
    img: "https://images.unsplash.com/photo-1756048830711-3e69f12ddf74?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "SYD",
    city: "Sydney",
    country: "Australia",
    gate: "D9",
    blurb: "First harbour on Earth to light up for 2027.",
    seat: "22D",
    img: "https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "BKK",
    city: "Bangkok",
    country: "Thailand",
    gate: "A2",
    blurb: "Rooftop DJs, night markets, and a countdown that never sits still.",
    seat: "18B",
    img: "https://images.unsplash.com/photo-1582541537694-965be7aed707?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "ZRH",
    city: "Switzerland",
    country: "Alps",
    gate: "B7",
    blurb: "Snow underfoot, fireworks over the peaks, chalet warmth after.",
    seat: "07A",
    img: "https://images.unsplash.com/photo-1764067656521-ed9d4994f3d9?w=900&auto=format&fit=crop&q=70",
  },
];

const TIERS = [
  {
    cls: "ECONOMY",
    title: "Pay 50% Now",
    discount: "20% OFF",
    detail: "Reserve your seat today, settle the rest before takeoff.",
  },
  {
    cls: "BUSINESS",
    title: "Pay 100% This Month",
    discount: "Up to 50% OFF",
    detail: "Our steepest fare of the season — limited seats, limited time.",
    featured: true,
  },
  {
    cls: "FIRST",
    title: "Pay 100% In Advance",
    discount: "Up to 40% OFF",
    detail: "Lock in early. Includes complimentary room upgrade requests.",
  },
];

const INCLUSIONS = [
  "International flights",
  "Premium hotel accommodation",
  "Daily breakfast & selected meals",
  "Airport transfers",
  "Guided sightseeing tours",
  "Visa assistance",
  "Travel insurance options",
  "New Year's Eve gala dinner",
  "VIP party passes",
  "Fireworks viewing access",
];

const CONFIDENCE = [
  {
    icon: "◈",
    title: "Book with a low deposit",
    text: "Secure any package for a small deposit; pay the balance closer to departure.",
  },
  {
    icon: "✦",
    title: "Local experts on the ground",
    text: "Travel Directors and local specialists who know each destination inside out.",
  },
  {
    icon: "☏",
    title: "Support every step of the way",
    text: "From the moment you book to the day you land back home, we're reachable 24/7.",
  },
  {
    icon: "↺",
    title: "Flexible up to 90 days out",
    text: "Change your dates or destination with no rebooking fees, well ahead of departure.",
  },
];

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState<number>(
    () => targetDate.getTime() - new Date().getTime(),
  );

  useEffect(() => {
    const id = setInterval(
      () => setTimeLeft(targetDate.getTime() - new Date().getTime()),
      1000,
    );
    return () => clearInterval(id);
  }, [targetDate]);

  const clamped = Math.max(timeLeft, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function Flap({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flap">
      <div className="flap-value">{padded}</div>
      <div className="flap-label">{label}</div>
    </div>
  );
}

export default function NewYearTravelLanding() {
  const target = new Date("2026-12-31T23:59:59");
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

        :root {
          --paper: #FAF6EE;
          --panel: #FFFFFF;
          --board: #1B2140;
          --gold: #B8863C;
          --gold-soft: #8A6425;
          --ink: #241F14;
          --ember: #C6431F;
          --line: rgba(184,134,60,0.28);
          --cream: #FFF8EC;
        }

        * { box-sizing: border-box; }

        .page {
          background: var(--paper);
          color: var(--ink);
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .page a, .page button { font-family: inherit; }
        img { max-width: 100%; display: block; }

        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* NAV */
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: rgba(250,246,238,0.88);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .brand {
          font-family: 'Fraunces', serif;
          font-size: 19px;
          letter-spacing: 0.04em;
          color: var(--gold-soft);
        }
        .brand span { color: var(--ink); }
        .nav-cta {
          background: var(--gold);
          color: var(--cream);
          border: none;
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          letter-spacing: 0.02em;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: min(88vh, 720px);
          display: flex;
          align-items: flex-end;
          background-size: cover;
          background-position: center 35%;
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,13,26,0.15) 0%, rgba(11,13,26,0.35) 45%, rgba(11,13,26,0.88) 100%);
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 40px 20px 36px;
          text-align: center;
          color: var(--cream);
        }
        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #E8B98E;
          margin-bottom: 16px;
        }
        .hero h1 {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(32px, 6.4vw, 62px);
          line-height: 1.06;
          margin: 0 0 14px;
          color: var(--cream);
        }
        .hero h1 em {
          font-style: italic;
          color: #E7BE7E;
        }
        .hero p.sub {
          max-width: 540px;
          margin: 0 auto 28px;
          color: rgba(255,248,236,0.82);
          font-size: clamp(14.5px, 1.9vw, 17px);
        }

        /* DEPARTURE BOARD COUNTDOWN */
        .board {
          display: inline-flex;
          gap: 12px;
          background: rgba(27,33,64,0.75);
          border: 1px solid rgba(212,175,106,0.35);
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .flap {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 58px;
        }
        .flap-value {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: clamp(24px, 4.4vw, 36px);
          color: #E7BE7E;
          background: rgba(0,0,0,0.35);
          border-radius: 8px;
          padding: 6px 4px;
          width: 100%;
          text-align: center;
          border: 1px solid rgba(212,175,106,0.25);
        }
        .flap-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,248,236,0.6);
          margin-top: 8px;
        }
        .board-caption {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,248,236,0.55);
          margin-bottom: 26px;
        }

        .hero-ctas {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--ember);
          color: var(--cream);
          border: none;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
        }
        .btn-ghost {
          background: rgba(255,248,236,0.08);
          color: var(--cream);
          border: 1px solid rgba(255,248,236,0.5);
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
        }
        .btn-ghost-light {
          background: transparent;
          color: var(--gold-soft);
          border: 1px solid var(--line);
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
        }

        /* SECTION HEADERS */
        .section { padding: 56px 20px; }
        .section-head { text-align: center; margin-bottom: 36px; }
        .section-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ember);
          margin-bottom: 10px;
        }
        .section-head h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(26px, 4vw, 38px);
          margin: 0 0 8px;
          color: var(--ink);
        }
        .section-head p {
          color: rgba(36,31,20,0.62);
          font-size: 14.5px;
          max-width: 480px;
          margin: 0 auto;
        }

        /* BOARDING PASS CARDS (with photo) */
        .pass-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .pass {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(36,31,20,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .pass:hover {
          transform: translateY(-5px);
          border-color: var(--gold);
          box-shadow: 0 16px 32px rgba(36,31,20,0.12);
        }
        .pass-photo {
          height: 190px;
          overflow: hidden;
          position: relative;
        }
        .pass-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .pass:hover .pass-photo img { transform: scale(1.06); }
        .pass-photo-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(27,33,64,0.78);
          color: var(--cream);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .pass-body { display: flex; }
        .pass-main { flex: 1; padding: 18px 20px; }
        .pass-route {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
        }
        .pass-code { font-size: 26px; font-weight: 700; color: var(--gold); }
        .pass-gate { font-size: 11px; color: rgba(36,31,20,0.5); letter-spacing: 0.1em; }
        .pass-city { font-family: 'Fraunces', serif; font-size: 21px; margin: 4px 0 2px; }
        .pass-country { font-size: 12px; color: rgba(36,31,20,0.55); margin-bottom: 10px; }
        .pass-blurb { font-size: 13.5px; line-height: 1.5; color: rgba(36,31,20,0.75); }
        .pass-stub {
          width: 70px;
          border-left: 1px dashed rgba(184,134,60,0.4);
          background: rgba(184,134,60,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'JetBrains Mono', monospace;
        }
        .pass-stub .seat-label {
          font-size: 9px;
          letter-spacing: 0.12em;
          color: rgba(36,31,20,0.5);
          transform: rotate(90deg);
          white-space: nowrap;
        }
        .pass-stub .seat-val { font-size: 13px; color: var(--gold-soft); font-weight: 700; }

        /* TRUST / CONFIDENCE BAR */
        .confidence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 22px;
        }
        .confidence-item { text-align: left; }
        .confidence-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--panel);
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--gold);
          margin-bottom: 14px;
        }
        .confidence-item h3 {
          font-family: 'Fraunces', serif;
          font-size: 18px;
          margin: 0 0 6px;
        }
        .confidence-item p {
          font-size: 13.5px;
          color: rgba(36,31,20,0.65);
          line-height: 1.5;
          margin: 0;
        }

        /* TIER CARDS */
        .tier-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .tier {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 28px 22px;
          text-align: center;
        }
        .tier.featured {
          border-color: var(--gold);
          background: linear-gradient(180deg, rgba(184,134,60,0.10), var(--panel));
        }
        .tier-cls {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--ember);
        }
        .tier h3 { font-family: 'Fraunces', serif; font-size: 20px; margin: 10px 0 4px; }
        .tier .discount { font-size: 28px; font-weight: 800; color: var(--gold); margin: 8px 0; }
        .tier p { font-size: 13px; color: rgba(36,31,20,0.68); line-height: 1.5; }

        /* INCLUSIONS */
        .incl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px 24px;
        }
        .incl-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(184,134,60,0.16);
        }
        .incl-item .tick { color: var(--gold); font-weight: 700; }

        /* FINAL CTA (photo background) */
        .final-cta {
          position: relative;
          text-align: center;
          padding: 76px 20px;
          background-size: cover;
          background-position: center 30%;
        }
        .final-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,13,26,0.55), rgba(11,13,26,0.82));
        }
        .final-cta-inner { position: relative; z-index: 1; color: var(--cream); }
        .final-cta h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(26px, 4vw, 40px);
          margin: 0 0 14px;
          color: var(--cream);
        }
        .final-cta p { color: rgba(255,248,236,0.8); margin: 0 0 28px; font-size: 14.5px; }

        .footer {
          text-align: center;
          padding: 26px 20px;
          font-size: 12px;
          color: rgba(36,31,20,0.45);
          border-top: 1px solid var(--line);
        }

        @media (max-width: 480px) {
          .board { padding: 12px; gap: 7px; }
          .flap { min-width: 48px; }
          .pass-photo { height: 160px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="brand">
          AURORA <span>CROSSINGS</span>
        </div>
        <button className="nav-cta">Book Now</button>
      </nav>

      {/* HERO */}
      <header
        className="hero"
        style={{
          backgroundImage:
            "url(https://www.trafalgar.com/media/4sylfxpa/large-getty-542508063.jpg?&quality=80)",
        }}
      >
        <div className="hero-inner">
          <div className="eyebrow">
            Departures for 31 Dec 2026 · USA · Canada · UK
          </div>
          <h1>
            Fly into <em>2027</em>
            <br />
            in style
          </h1>
          <p className="sub">
            Six countdowns, one night. Choose your gate to Dubai, Paris, the
            Maldives, Sydney, Bangkok, or the Alps — gala dinner, fireworks, and
            a VIP pass to midnight included.
          </p>

          <div className="board">
            <Flap value={days} label="Days" />
            <Flap value={hours} label="Hrs" />
            <Flap value={minutes} label="Min" />
            <Flap value={seconds} label="Sec" />
          </div>
          <div className="board-caption">Until boarding closes on 2026</div>

          <div className="hero-ctas">
            <button className="btn-primary">Reserve Your Seat</button>
            <button className="btn-ghost">View All Destinations</button>
          </div>
        </div>
      </header>

      {/* DESTINATIONS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Boarding Passes</div>
            <h2>Six Gates to Midnight</h2>
            <p>
              Every route below includes flights, stay, gala dinner and a VIP
              countdown pass.
            </p>
          </div>
          <div className="pass-grid">
            {DESTINATIONS.map((d) => (
              <div className="pass" key={d.code}>
                <div className="pass-photo">
                  <img
                    src={d.img}
                    alt={`${d.city}, ${d.country}`}
                    loading="lazy"
                  />
                  <span className="pass-photo-tag">GATE {d.gate}</span>
                </div>
                <div className="pass-body">
                  <div className="pass-main">
                    <div className="pass-route">
                      <span className="pass-code">{d.code}</span>
                    </div>
                    <div className="pass-city">{d.city}</div>
                    <div className="pass-country">{d.country}</div>
                    <p className="pass-blurb">{d.blurb}</p>
                  </div>
                  <div className="pass-stub">
                    <span className="seat-label">SEAT {d.seat}</span>
                    <span className="seat-val">NYE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL WITH CONFIDENCE */}
      <section
        className="section"
        style={{ background: "rgba(184,134,60,0.06)" }}
      >
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Why Travel With Us</div>
            <h2>Travel with confidence</h2>
          </div>
          <div className="confidence-grid">
            {CONFIDENCE.map((c) => (
              <div className="confidence-item" key={c.title}>
                <div className="confidence-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT TIERS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Fare Classes</div>
            <h2>Book Early, Save More</h2>
          </div>
          <div className="tier-grid">
            {TIERS.map((t) => (
              <div
                className={`tier ${t.featured ? "featured" : ""}`}
                key={t.cls}
              >
                <div className="tier-cls">{t.cls}</div>
                <h3>{t.title}</h3>
                <div className="discount">{t.discount}</div>
                <p>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section
        className="section"
        style={{ background: "rgba(184,134,60,0.06)" }}
      >
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">On Every Itinerary</div>
            <h2>What's Included</h2>
          </div>
          <div className="incl-grid">
            {INCLUSIONS.map((item) => (
              <div className="incl-item" key={item}>
                <span className="tick">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA (photo background) */}
      <div
        className="final-cta"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1642947392578-b37fbd9a4d45?w=1800&auto=format&fit=crop&q=75)",
        }}
      >
        <div className="final-cta-inner">
          <h2>Seats are boarding for 2027</h2>
          <p>Secure your gate before this month's fare class closes.</p>
          <button className="btn-primary">
            Reserve Your New Year Adventure
          </button>
        </div>
      </div>

      <div className="footer">
        Aurora Crossings · Terms & conditions apply · *Flights and visa
        assistance vary by route
      </div>
    </div>
  );
}
