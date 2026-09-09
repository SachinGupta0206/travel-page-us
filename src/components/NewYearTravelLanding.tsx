import { useState, useEffect } from "react";

/**
 * AURORA CROSSINGS — Christmas & New Year 2026/2027 Travel Landing Page
 * Festive theme with Christmas + New Year hero, full footer, enhanced content.
 */

const DESTINATIONS = [
  {
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    gate: "A7",
    blurb:
      "Experience the world's most spectacular New Year's Eve at Burj Khalifa with record-breaking fireworks. Enjoy luxury desert safaris, iconic Christmas brunches, and rooftop celebrations. Your perfect blend of Arabian hospitality and festive magic awaits.",
    seat: "12F",
    price: "₹1,89,000",
    nights: "5 Nights / 6 Days",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "CDG",
    city: "Paris",
    country: "France",
    gate: "B3",
    blurb: "Walk through enchanting Christmas markets along the Champs-Élysées, sip champagne under the sparkling Eiffel Tower at midnight, and indulge in gourmet French cuisine. The City of Lights becomes the City of Magic during the festive season.",
    seat: "04A",
    price: "₹2,15,000",
    nights: "6 Nights / 7 Days",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "MLE",
    city: "Maldives",
    country: "Indian Ocean Paradise",
    gate: "C1",
    blurb: "Escape to paradise with a private overwater villa where turquoise waters meet golden sunsets. Experience an intimate beachfront New Year's Eve dinner, underwater adventures, and complete serenity. Perfect for couples seeking a romantic festive escape.",
    seat: "01C",
    price: "₹2,45,000",
    nights: "5 Nights / 6 Days",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "SYD",
    city: "Sydney",
    country: "Australia",
    gate: "D9",
    blurb: "Be among the first in the world to welcome 2027! Watch the iconic Sydney Harbour Bridge light up with spectacular pyrotechnics. Enjoy summer Christmas on Bondi Beach, harbour cruises, and the legendary Opera House as your backdrop.",
    seat: "22D",
    price: "₹2,30,000",
    nights: "7 Nights / 8 Days",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "BKK",
    city: "Bangkok",
    country: "Thailand",
    gate: "A2",
    blurb: "Vibrant street celebrations, spectacular rooftop parties, and ancient temple visits create the perfect festive fusion. Experience floating markets, traditional Thai massages, world-class shopping, and an electrifying countdown under Bangkok's neon skies.",
    seat: "18B",
    price: "₹1,25,000",
    nights: "5 Nights / 6 Days",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    gate: "C5",
    blurb: "Asia's most dazzling New Year celebration awaits! Marina Bay's spectacular fireworks, festive light displays at Gardens by the Bay, world-class dining, and the iconic countdown at Marina Bay Sands. A perfect blend of modernity and festive magic.",
    seat: "09D",
    price: "₹1,65,000",
    nights: "5 Nights / 6 Days",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "HKG",
    city: "Hong Kong",
    country: "China",
    gate: "D3",
    blurb: "Experience the spectacular Victoria Harbour countdown with fireworks lighting up the skyline. Explore festive markets, take the Peak Tram for breathtaking views, visit magical Disneyland, and ring in 2027 with one of Asia's most iconic celebrations.",
    seat: "11A",
    price: "₹1,75,000",
    nights: "5 Nights / 6 Days",
    img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "TYO",
    city: "Tokyo",
    country: "Japan",
    gate: "E8",
    blurb: "Welcome 2027 with traditional Japanese New Year (Shogatsu) celebrations! Visit ancient temples for midnight bells, experience winter illuminations in Shibuya, enjoy hot springs, watch Mount Fuji sunrise, and immerse yourself in unique Japanese festive culture.",
    seat: "06B",
    price: "₹1,95,000",
    nights: "6 Nights / 7 Days",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "KUL",
    city: "Kuala Lumpur",
    country: "Malaysia",
    gate: "B9",
    blurb: "Celebrate at the iconic Petronas Towers with spectacular fireworks and light shows. Explore vibrant street markets, enjoy world-class shopping, visit Batu Caves, and experience multicultural festivities. Affordable luxury with unforgettable New Year memories.",
    seat: "14C",
    price: "₹1,15,000",
    nights: "5 Nights / 6 Days",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "BLI",
    city: "Bali",
    country: "Indonesia",
    gate: "F1",
    blurb: "Ring in the New Year on pristine beaches with bonfire parties and ocean views. Experience ancient temples, lush rice terraces, traditional Balinese culture, beach clubs in Seminyak, and serene Ubud. The perfect tropical paradise for festive celebrations.",
    seat: "03A",
    price: "₹1,35,000",
    nights: "6 Nights / 7 Days",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "IST",
    city: "Istanbul",
    country: "Turkey",
    gate: "G4",
    blurb: "Where East meets West for an unforgettable New Year! Experience the magical Bosphorus cruise with fireworks, explore historic Hagia Sophia and Blue Mosque, shop at Grand Bazaar, and celebrate at Taksim Square. A unique blend of cultures and celebrations.",
    seat: "19B",
    price: "₹1,85,000",
    nights: "6 Nights / 7 Days",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "AMD",
    city: "Ahmedabad",
    country: "India - Gujarat",
    gate: "H2",
    blurb: "Celebrate the New Year in India's heritage city! Experience the stunning Rann Utsav in white desert, visit historic sites like Sabarmati Ashram, enjoy vibrant Gujarati culture, traditional cuisine, and ring in 2027 with cultural performances under starlit skies.",
    seat: "21A",
    price: "₹85,000",
    nights: "4 Nights / 5 Days",
    img: "https://images.unsplash.com/photo-1609416921994-a11c616dcfea?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "ZRH",
    city: "Switzerland",
    country: "Swiss Alps",
    gate: "B7",
    blurb: "Picture-perfect white Christmas in a luxury Alpine chalet. Ski world-class slopes by day, warm up with Swiss hot chocolate by the fireplace, and watch fireworks burst over snow-capped mountains. The ultimate winter wonderland experience.",
    seat: "07A",
    price: "₹2,75,000",
    nights: "6 Nights / 7 Days",
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    gate: "E4",
    blurb: "Experience a traditional British Christmas with festive lights on Oxford Street, ice skating at Somerset House, and New Year's fireworks over the Thames. Visit winter wonderlands, historic markets, and ring in 2027 with Big Ben's iconic chimes.",
    seat: "08C",
    price: "₹2,05,000",
    nights: "6 Nights / 7 Days",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&auto=format&fit=crop&q=70",
  },
  {
    code: "JFK",
    city: "New York",
    country: "United States",
    gate: "F2",
    blurb: "The ultimate New Year's Eve experience at Times Square! Shop Fifth Avenue's holiday displays, ice skate in Central Park, enjoy Broadway shows, and join millions for the legendary ball drop. Plus, explore iconic Christmas window displays and festive markets.",
    seat: "15A",
    price: "₹2,95,000",
    nights: "7 Nights / 8 Days",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&auto=format&fit=crop&q=70",
  },
];

const TIERS = [
  {
    cls: "ECONOMY",
    title: "Pay 50% Now",
    discount: "20% OFF",
    badge: "",
    detail: "Reserve your seat today, settle the rest before takeoff. Ideal for early planners.",
    featured: false,
  },
  {
    cls: "FIRST CLASS",
    title: "Pay 100% In Advance",
    discount: "40% OFF",
    badge: "Best Value",
    detail: "Lock in the full price today. Includes complimentary room upgrade requests & priority boarding.",
    featured: true,
  },
];

const INCLUSIONS = [
  { icon: "✈️", text: "International round-trip flights" },
  { icon: "🏨", text: "4/5-star hotel accommodation" },
  { icon: "🍳", text: "Daily breakfast buffet included" },
  { icon: "🍽️", text: "Welcome dinner & selected meals" },
  { icon: "🚗", text: "Airport transfers both ways" },
  { icon: "🗺️", text: "Guided city sightseeing tours" },
  { icon: "📋", text: "Visa assistance & documentation" },
  { icon: "🎉", text: "New Year's Eve gala dinner" },
  { icon: "🎫", text: "VIP countdown party access" },
  { icon: "🎄", text: "Christmas Eve special dinner" },
  { icon: "🎁", text: "Festive welcome gift package" },
  { icon: "💼", text: "Dedicated travel manager 24/7" },
  { icon: "🛡️", text: "Comprehensive travel insurance" },
  { icon: "📸", text: "Professional photo session" },
  { icon: "🎭", text: "Cultural activities & experiences" },
  { icon: "🚢", text: "Optional cruise experiences" },
];

const CONFIDENCE = [
  {
    icon: "💰",
    title: "Book with a Low Deposit",
    text: "Secure any package for just 20% deposit. Pay the balance at your convenience before departure.",
  },
  {
    icon: "🧭",
    title: "Local Experts on the Ground",
    text: "Our Travel Directors and local specialists know every destination inside out — so you travel worry-free.",
  },
  {
    icon: "📞",
    title: "24/7 Support Always",
    text: "From the moment you book to the day you land back home, we're reachable around the clock.",
  },
  {
    icon: "🔄",
    title: "Flexible Cancellation",
    text: "Change your dates or destination with no rebooking fees up to 90 days before departure.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    text: "Aurora Crossings made our New Year in Dubai absolutely magical! From the moment we landed to the spectacular Burj Khalifa fireworks, every detail was perfect. The gala dinner was beyond expectations and our travel manager was always available. Best NYE ever!",
    rating: 5,
    dest: "Dubai",
  },
  {
    name: "Rahul & Ananya",
    city: "Bangalore",
    text: "Our Christmas in Switzerland was straight out of a fairytale! The chalet was stunning, skiing was incredible, and celebrating New Year with fireworks over the Alps was unforgettable. Aurora Crossings organized everything seamlessly. Worth every penny!",
    rating: 5,
    dest: "Switzerland",
  },
  {
    name: "Meera Nair",
    city: "Delhi",
    text: "The Maldives package for NYE was pure luxury and romance. Private overwater villa, candlelit beach dinner, snorkeling in crystal waters, and watching fireworks reflect on the lagoon at midnight. This was our dream honeymoon come true!",
    rating: 5,
    dest: "Maldives",
  },
  {
    name: "Vikram & Family",
    city: "Pune",
    text: "We took our parents for Christmas in Paris and it was the best gift ever! The Christmas markets, Eiffel Tower lights, Seine River cruise, and New Year champagne toast created memories for a lifetime. Our kids still talk about it every day!",
    rating: 5,
    dest: "Paris",
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad",
    text: "Bangkok was the perfect blend of culture, celebration, and value! From temple visits to rooftop parties, floating markets to spa experiences, and an electrifying countdown at Chao Phraya River. Aurora Crossings exceeded all expectations!",
    rating: 5,
    dest: "Bangkok",
  },
  {
    name: "Arjun Mehta",
    city: "Ahmedabad",
    text: "Being in Sydney to welcome 2027 FIRST was bucket-list worthy! The harbour bridge fireworks, Opera House views, Bondi Beach Christmas, and incredible food made this trip legendary. 24/7 support from the team was outstanding!",
    rating: 5,
    dest: "Sydney",
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

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ color: "#F59E0B", fontSize: "14px", marginBottom: "8px" }}>
      {"★".repeat(count)}
    </div>
  );
}

// Animated snowflakes for festive feel
function Snowflakes() {
  return (
    <div className="snowflakes" aria-hidden="true">
      {["❄", "❅", "❆", "❄", "❅", "❆", "❄", "❅", "❆", "❄", "❅", "❆"].map((flake, i) => (
        <div key={i} className={`snowflake snowflake-${i + 1}`}>{flake}</div>
      ))}
    </div>
  );
}

export default function NewYearTravelLanding() {
  const target = new Date("2026-12-31T23:59:59");
  const { days, hours, minutes, seconds } = useCountdown(target);
  const [activeTab, setActiveTab] = useState<"all" | "christmas" | "newyear">("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const filteredDests = DESTINATIONS;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c2679524-f50e-4d49-b081-e6371cbe8e5a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("🎉 Success! Your booking request has been received. Our team will contact you within 24 hours.");
        form.reset();
        setShowBookingForm(false);
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (error) {
      alert("⚠️ Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

        :root {
          --bg: #0D0F1A;
          --surface: #141728;
          --surface2: #1C2038;
          --gold: #D4A843;
          --gold-light: #F0C96A;
          --gold-dim: rgba(212,168,67,0.25);
          --red: #C0392B;
          --red-bright: #E74C3C;
          --green: #1A6B35;
          --green-bright: #27AE60;
          --cream: #FFF8EC;
          --text: #E8E4DC;
          --text-dim: rgba(232,228,220,0.6);
          --text-muted: rgba(232,228,220,0.38);
          --border: rgba(212,168,67,0.2);
          --border-dim: rgba(255,255,255,0.07);
          --radius: 16px;
          --radius-sm: 10px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        img { max-width: 100%; display: block; }

        .wrap {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ─── SNOWFLAKES ─── */
        .snowflakes {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .snowflake {
          position: absolute;
          top: -40px;
          font-size: 18px;
          color: rgba(255,255,255,0.55);
          animation: snowFall linear infinite;
          user-select: none;
        }
        .snowflake-1  { left:  5%; animation-duration: 8s;  animation-delay: 0s;   font-size: 14px; }
        .snowflake-2  { left: 12%; animation-duration: 11s; animation-delay: 1s;   font-size: 22px; }
        .snowflake-3  { left: 20%; animation-duration: 7s;  animation-delay: 2s;   font-size: 12px; }
        .snowflake-4  { left: 30%; animation-duration: 14s; animation-delay: 0.5s; font-size: 18px; }
        .snowflake-5  { left: 40%; animation-duration: 9s;  animation-delay: 3s;   font-size: 16px; }
        .snowflake-6  { left: 50%; animation-duration: 12s; animation-delay: 1.5s; font-size: 20px; }
        .snowflake-7  { left: 60%; animation-duration: 8s;  animation-delay: 0.8s; font-size: 14px; }
        .snowflake-8  { left: 70%; animation-duration: 10s; animation-delay: 2.5s; font-size: 24px; }
        .snowflake-9  { left: 78%; animation-duration: 6s;  animation-delay: 1.2s; font-size: 12px; }
        .snowflake-10 { left: 86%; animation-duration: 13s; animation-delay: 0.3s; font-size: 18px; }
        .snowflake-11 { left: 92%; animation-duration: 9s;  animation-delay: 2s;   font-size: 16px; }
        .snowflake-12 { left: 97%; animation-duration: 11s; animation-delay: 0.7s; font-size: 20px; }

        @keyframes snowFall {
          0%   { transform: translateY(-40px) rotate(0deg);   opacity: 0.7; }
          80%  { opacity: 0.5; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        /* ─── NAV ─── */
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          background: rgba(13,15,26,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .brand:hover { opacity: 0.85; }
        .brand-logo { 
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          background: linear-gradient(135deg, #D4A843 0%, #F0C96A 100%);
          border-radius: 10px;
          position: relative;
          box-shadow: 0 4px 12px rgba(212,168,67,0.25);
        }
        .brand-logo svg {
          width: 26px;
          height: 26px;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .brand-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 19px;
          color: var(--cream);
          letter-spacing: -0.01em;
        }
        .brand-name .amp {
          color: var(--gold-light);
          font-weight: 600;
          margin: 0 4px;
        }
        .brand-sub {
          font-size: 9.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
        }
        .nav-links a {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-right { display: flex; align-items: center; gap: 12px; }
        .nav-phone {
          font-size: 13px;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-cta {
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0F1A;
          border: none;
          padding: 10px 22px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(212,168,67,0.35);
        }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          min-height: min(92vh, 780px);
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          z-index: 0;
        }
        .hero-bg-left {
          background-image: url('https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=1400&auto=format&fit=crop&q=85');
          background-size: cover;
          background-position: center;
        }
        .hero-bg-right {
          background-image: url('https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1400&auto=format&fit=crop&q=85');
          background-size: cover;
          background-position: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(13,15,26,0.3) 0%,
            rgba(13,15,26,0.2) 30%,
            rgba(13,15,26,0.65) 65%,
            rgba(13,15,26,0.97) 100%
          );
          z-index: 1;
        }
        .hero-divider {
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(212,168,67,0.6) 30%, rgba(212,168,67,0.6) 70%, transparent);
          z-index: 2;
        }
        .hero-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 48px 24px 52px;
          text-align: center;
        }
        .hero-badges {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .badge-christmas {
          background: rgba(192,57,43,0.2);
          border: 1px solid rgba(192,57,43,0.5);
          color: #F08080;
        }
        .badge-newyear {
          background: rgba(212,168,67,0.15);
          border: 1px solid rgba(212,168,67,0.45);
          color: var(--gold-light);
        }
        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #E74C3C;
          margin-bottom: 16px;
          opacity: 1;
          font-weight: 600;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(36px, 6.5vw, 70px);
          line-height: 1.04;
          margin-bottom: 10px;
          color: var(--cream);
        }
        .hero h1 em {
          font-style: italic;
          color: var(--gold-light);
        }
        .hero h1 .xmas { color: #F08080; }
        .hero-sub {
          max-width: 560px;
          margin: 0 auto 30px;
          color: var(--text-dim);
          font-size: clamp(15px, 2vw, 17.5px);
          line-height: 1.6;
        }
        .hero-stats {
          display: flex;
          gap: 32px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .hero-stat { text-align: center; }
        .hero-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1;
        }
        .hero-stat-lbl {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* COUNTDOWN */
        .countdown-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
        }
        .countdown-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .board {
          display: inline-flex;
          gap: 10px;
          background: rgba(20,23,40,0.85);
          border: 1px solid rgba(212,168,67,0.3);
          border-radius: 14px;
          padding: 16px 20px;
          flex-wrap: wrap;
          justify-content: center;
          box-shadow: 0 0 40px rgba(212,168,67,0.08);
        }
        .board-sep {
          font-family: 'JetBrains Mono', monospace;
          font-size: 28px;
          color: var(--gold);
          align-self: center;
          opacity: 0.6;
          margin-bottom: 18px;
        }
        .flap {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
        }
        .flap-value {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: clamp(26px, 4.5vw, 38px);
          color: var(--gold-light);
          background: rgba(0,0,0,0.4);
          border-radius: 8px;
          padding: 8px 6px;
          width: 100%;
          text-align: center;
          border: 1px solid rgba(212,168,67,0.2);
          line-height: 1;
        }
        .flap-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 8px;
        }

        /* HERO CTAs */
        .hero-ctas {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: linear-gradient(135deg, #C0392B, #E74C3C);
          color: #fff;
          border: none;
          padding: 15px 32px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(231,76,60,0.4);
        }
        .btn-gold {
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0F1A;
          border: none;
          padding: 15px 32px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(212,168,67,0.4);
        }
        .btn-ghost {
          background: transparent;
          color: var(--text);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 15px 32px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost:hover {
          border-color: var(--gold);
          background: rgba(212,168,67,0.08);
        }

        /* ─── ANNOUNCEMENT RIBBON ─── */
        .ribbon {
          background: linear-gradient(135deg, #1A6B35, #C0392B);
          padding: 12px 24px;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.04em;
          position: relative;
          z-index: 1;
        }
        .ribbon span { opacity: 0.75; }

        /* ─── SECTIONS ─── */
        .section { padding: 72px 24px; position: relative; }
        .section-dark { background: var(--surface); }
        .section-head { text-align: center; margin-bottom: 44px; }
        .section-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
          display: block;
        }
        .section-head h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 42px);
          margin-bottom: 12px;
          color: var(--cream);
          line-height: 1.1;
        }
        .section-head p {
          color: var(--text-dim);
          font-size: 15px;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ─── FILTER TABS ─── */
        .filter-tabs {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .tab-btn {
          padding: 9px 22px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-dim);
          transition: all 0.2s;
        }
        .tab-btn.active {
          background: var(--gold);
          color: #0D0F1A;
          border-color: var(--gold);
        }
        .tab-btn:hover:not(.active) {
          border-color: var(--gold);
          color: var(--gold);
        }

        /* ─── DESTINATION CARDS ─── */
        .pass-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .pass {
          background: var(--surface);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
        }
        .pass:hover {
          transform: translateY(-6px);
          border-color: var(--gold);
          box-shadow: 0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,168,67,0.15);
        }
        .pass-photo {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .pass-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .pass:hover .pass-photo img { transform: scale(1.08); }
        .pass-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(13,15,26,0.75) 100%);
        }
        .pass-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(20,23,40,0.85);
          color: var(--gold-light);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          padding: 5px 12px;
          border-radius: 999px;
          border: 1px solid rgba(212,168,67,0.3);
        }
        .pass-price-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0F1A;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 999px;
        }
        .pass-nights {
          position: absolute;
          bottom: 12px;
          left: 12px;
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
        }
        .pass-body { padding: 20px; }
        .pass-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .pass-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--gold);
          letter-spacing: 0.08em;
          font-weight: 700;
        }
        .pass-gate { font-size: 12px; color: var(--text-muted); }
        .pass-city {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: var(--cream);
          margin-bottom: 2px;
        }
        .pass-country { font-size: 12px; color: var(--text-muted); margin-bottom: 10px; }
        .pass-blurb {
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--text-dim);
          margin-bottom: 16px;
        }
        .pass-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px dashed rgba(212,168,67,0.2);
        }
        .pass-from { font-size: 11px; color: var(--text-muted); }
        .pass-price {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          color: var(--gold-light);
          font-weight: 700;
        }
        .pass-book-btn {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-dim);
          padding: 7px 16px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pass-book-btn:hover {
          background: var(--gold);
          color: #0D0F1A;
          border-color: var(--gold);
        }

        /* ─── CHRISTMAS SPECIAL BANNER ─── */
        .xmas-banner {
          background: linear-gradient(135deg, #1A3A2A 0%, #0D1F15 50%, #1A3A2A 100%);
          border: 1px solid rgba(39,174,96,0.25);
          border-radius: var(--radius);
          padding: 40px 36px;
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 32px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }
        .xmas-banner::before {
          content: "🎄";
          position: absolute;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 80px;
          opacity: 0.15;
        }
        .xmas-banner-text { flex: 1; min-width: 220px; }
        .xmas-banner-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: var(--cream);
          margin-bottom: 8px;
        }
        .xmas-banner-text p {
          font-size: 14px;
          color: rgba(232,228,220,0.65);
          line-height: 1.5;
        }

        /* ─── CONFIDENCE GRID ─── */
        .confidence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 24px;
        }
        .confidence-item {
          background: var(--surface2);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius);
          padding: 28px 24px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .confidence-item:hover {
          border-color: var(--gold);
          transform: translateY(-3px);
        }
        .confidence-icon {
          font-size: 32px;
          margin-bottom: 16px;
          display: block;
        }
        .confidence-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          color: var(--cream);
          margin-bottom: 8px;
        }
        .confidence-item p {
          font-size: 13.5px;
          color: var(--text-dim);
          line-height: 1.55;
        }

        /* ─── TIER CARDS ─── */
        .tier-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          max-width: 680px;
          margin: 0 auto;
        }
        .tier {
          background: var(--surface);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius);
          padding: 32px 28px;
          text-align: center;
          position: relative;
          transition: transform 0.2s, border-color 0.2s;
        }
        .tier:hover { transform: translateY(-4px); }
        .tier.featured {
          border-color: var(--gold);
          background: linear-gradient(160deg, rgba(212,168,67,0.1), var(--surface));
        }
        .tier-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0F1A;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 16px;
          border-radius: 999px;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .tier-cls {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .tier h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: var(--cream);
          margin-bottom: 12px;
        }
        .tier .discount {
          font-size: 42px;
          font-weight: 800;
          color: var(--gold-light);
          line-height: 1;
          margin: 12px 0;
          font-family: 'Playfair Display', serif;
        }
        .tier p {
          font-size: 13.5px;
          color: var(--text-dim);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        /* ─── INCLUSIONS ─── */
        .incl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px 32px;
        }
        .incl-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border-dim);
          color: var(--text-dim);
        }
        .incl-icon { font-size: 18px; flex-shrink: 0; }

        /* ─── TESTIMONIALS ─── */
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .testimonial {
          background: var(--surface2);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius);
          padding: 28px 24px;
          position: relative;
        }
        .testimonial::before {
          content: """;
          position: absolute;
          top: 12px;
          right: 20px;
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          color: var(--gold);
          opacity: 0.2;
          line-height: 1;
        }
        .testimonial-text {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-dim);
          margin-bottom: 20px;
          font-style: italic;
        }
        .testimonial-author { display: flex; align-items: center; gap: 12px; }
        .testimonial-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), var(--red));
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          color: #fff;
          flex-shrink: 0;
        }
        .testimonial-name { font-size: 14px; font-weight: 600; color: var(--cream); }
        .testimonial-meta { font-size: 12px; color: var(--text-muted); }

        /* ─── FINAL CTA ─── */
        .final-cta {
          position: relative;
          text-align: center;
          padding: 90px 24px;
          overflow: hidden;
        }
        .final-cta-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1800&auto=format&fit=crop&q=80');
          background-size: cover;
          background-position: center;
          filter: saturate(0.8) brightness(0.85);
        }
        .final-cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(13,15,26,0.65), rgba(13,15,26,0.88));
        }
        .final-cta-inner {
          position: relative;
          z-index: 1;
          color: var(--cream);
          max-width: 680px;
          margin: 0 auto;
        }
        .final-cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4.5vw, 46px);
          margin-bottom: 16px;
          color: var(--cream);
          line-height: 1.1;
        }
        .final-cta p {
          color: var(--text-dim);
          margin-bottom: 32px;
          font-size: 15px;
          line-height: 1.6;
        }
        .final-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ─── FOOTER ─── */
        .footer {
          background: #08090F;
          border-top: 1px solid var(--border-dim);
          padding: 60px 24px 32px;
          color: var(--text-dim);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
          gap: 48px;
          max-width: 1160px;
          margin: 0 auto 48px;
        }
        .footer-brand {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .footer-logo {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #D4A843 0%, #F0C96A 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(212,168,67,0.2);
        }
        .footer-logo svg {
          width: 30px;
          height: 30px;
        }
        .footer-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .footer-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--cream);
          letter-spacing: -0.01em;
        }
        .footer-brand-name .amp {
          color: var(--gold-light);
          font-weight: 600;
          margin: 0 4px;
        }
        .footer-brand-sub {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          margin-top: 2px;
        }
        .footer-tagline {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 24px;
          max-width: 280px;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          color: var(--text-dim);
          text-decoration: none;
          transition: all 0.2s;
          background: var(--surface);
        }
        .social-link:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-2px);
        }
        .social-link.instagram:hover { border-color: #E1306C; color: #E1306C; }
        .footer-col h4 {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 18px;
        }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a {
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-col ul li a:hover { color: var(--gold); }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 14px;
        }
        .footer-contact-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: var(--surface);
          border: 1px solid var(--border-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .footer-contact-text { font-size: 13px; color: var(--text-dim); line-height: 1.5; }
        .footer-contact-text strong { color: var(--text); font-size: 12px; display: block; margin-bottom: 2px; }
        .footer-contact-text a { color: var(--text-dim); text-decoration: none; }
        .footer-contact-text a:hover { color: var(--gold); }
        .footer-divider {
          max-width: 1160px;
          margin: 0 auto 24px;
          border: none;
          border-top: 1px solid var(--border-dim);
        }
        .footer-bottom {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy { font-size: 12.5px; color: var(--text-muted); }
        .footer-legal {
          display: flex;
          gap: 20px;
        }
        .footer-legal a {
          font-size: 12.5px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: var(--gold); }
        .footer-festive {
          font-size: 18px;
          letter-spacing: 4px;
        }

        /* ─── BOOKING FORM MODAL ─── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-content {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          max-width: 560px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .modal-header {
          padding: 28px 32px 20px;
          border-bottom: 1px solid var(--border-dim);
          position: sticky;
          top: 0;
          background: var(--surface);
          z-index: 1;
        }
        .modal-close {
          position: absolute;
          top: 20px;
          right: 24px;
          background: transparent;
          border: 1px solid var(--border-dim);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          color: var(--text-dim);
          transition: all 0.2s;
        }
        .modal-close:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: rotate(90deg);
        }
        .modal-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          color: var(--cream);
          margin-bottom: 6px;
        }
        .modal-header p {
          font-size: 13.5px;
          color: var(--text-dim);
          line-height: 1.5;
        }
        .modal-body {
          padding: 32px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }
        .form-label .required {
          color: var(--red-bright);
          margin-left: 2px;
        }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          background: var(--surface2);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          font-size: 14px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--gold);
          background: rgba(212,168,67,0.05);
        }
        .form-textarea {
          resize: vertical;
          min-height: 100px;
          line-height: 1.6;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-submit {
          width: 100%;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0F1A;
          border: none;
          padding: 14px 32px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-top: 8px;
        }
        .form-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(212,168,67,0.4);
        }
        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .form-note {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 16px;
          text-align: center;
          line-height: 1.5;
        }

        /* CONTACT SECTION */
        .contact-section {
          background: var(--surface);
          padding: 80px 24px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }
        .contact-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          color: var(--cream);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .contact-info > p {
          color: var(--text-dim);
          font-size: 14.5px;
          line-height: 1.65;
          margin-bottom: 32px;
        }
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-method {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .contact-method-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--surface2);
          border: 1px solid var(--border-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .contact-method-text h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
        }
        .contact-method-text p {
          font-size: 13.5px;
          color: var(--text-dim);
          line-height: 1.5;
        }
        .contact-method-text a {
          color: var(--gold);
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-method-text a:hover {
          color: var(--gold-light);
        }
        .contact-form-card {
          background: var(--surface2);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius);
          padding: 36px 32px;
        }
        .contact-form-card h4 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: var(--cream);
          margin-bottom: 8px;
        }
        .contact-form-card > p {
          font-size: 13.5px;
          color: var(--text-dim);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .nav-links { display: none; }
          .hero-bg { grid-template-columns: 1fr; }
          .hero-bg-right { display: none; }
          .hero-divider { display: none; }
          .contact-grid { grid-template-columns: 1fr; gap: 36px; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .board { padding: 12px 10px; gap: 6px; }
          .flap { min-width: 50px; }
          .pass-photo { height: 170px; }
          .hero h1 { font-size: 34px; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .modal-body { padding: 24px; }
          .modal-header { padding: 20px 24px 16px; }
          .contact-form-card { padding: 28px 24px; }
        }
      `}</style>

      {/* Snowflakes */}
      <Snowflakes />

      {/* ANNOUNCEMENT RIBBON */}
      <div className="ribbon">
        🎄 Christmas & New Year Special <span>— Limited seats available · Early bird discount ends soon</span> 🎉
      </div>

      {/* NAV */}
      <nav className="nav">
        <a href="https://www.travelnexploreworld.com/" className="brand">
          <div className="brand-logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0D0F1A" />
              <circle cx="12" cy="9" r="1.5" fill="#0D0F1A" />
            </svg>
          </div>
          <div className="brand-text">
            <div className="brand-name">
              Travel<span className="amp">N</span>Explore World
            </div>
            <div className="brand-sub">Your Journey, Our Passion</div>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#inclusions">Inclusions</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <span className="nav-phone">📞 +91 98765 43210</span>
          <button className="nav-cta" onClick={() => setShowBookingForm(true)}>Book Now</button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg">
          <div className="hero-bg-left" />
          <div className="hero-bg-right" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-divider" />

        <div className="hero-inner">
          <div className="hero-badges">

          </div>
          <div className="eyebrow">Dec 24 – Jan 1 · Dream Destinations Worldwide</div>
          <h1>
            Celebrate <em>Christmas</em>
            <br />& <span className="xmas">New Year</span> in Style
          </h1>
          <p className="hero-sub">
            Curated luxury festive holidays to 15 dream destinations worldwide — Christmas market walks,
            gala dinners under the stars, rooftop countdowns with champagne, spectacular fireworks,
            and memories that sparkle forever. Book early for up to 40% off and secure your perfect celebration.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">15</div>
              <div className="hero-stat-lbl">Destinations</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">5000+</div>
              <div className="hero-stat-lbl">Happy Travellers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">40%</div>
              <div className="hero-stat-lbl">Max Savings</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">24/7</div>
              <div className="hero-stat-lbl">Support</div>
            </div>
          </div>

          <div className="countdown-wrap">
            <div className="countdown-label">🎉 Countdown to New Year 2027</div>
            <div className="board">
              <Flap value={days} label="Days" />
              <span className="board-sep">:</span>
              <Flap value={hours} label="Hours" />
              <span className="board-sep">:</span>
              <Flap value={minutes} label="Mins" />
              <span className="board-sep">:</span>
              <Flap value={seconds} label="Secs" />
            </div>
          </div>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => setShowBookingForm(true)}>🎄 Book Christmas Package</button>
            <button className="btn-gold" onClick={() => setShowBookingForm(true)}>🥂 New Year Deals</button>
            <button className="btn-ghost" onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}>Explore All Destinations</button>
          </div>
        </div>
      </header>

      {/* DESTINATIONS */}
      <section className="section" id="destinations">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">✈️ Boarding Passes</span>
            <h2>Fifteen Gates to Midnight Magic</h2>
            <p>
              Handpicked dream destinations where Christmas wonder meets New Year's Eve fireworks.
              Every journey includes international flights, luxury hotel stays, festive gala dinners,
              VIP countdown parties, and unforgettable experiences crafted just for you.
            </p>
          </div>

          {/* Christmas Special Banner */}
          <div className="xmas-banner">
            <div style={{ fontSize: "48px" }}>🎄</div>
            <div className="xmas-banner-text">
              <h3>Christmas + New Year Combo — Save Extra 10%</h3>
              <p>
                Book a combined Christmas Eve + New Year's Eve package and get an additional 10% off your total.
                Limited seats — don't miss out on the most magical nights of the year.
              </p>
            </div>
            <button className="btn-primary" style={{ flexShrink: 0 }} onClick={() => setShowBookingForm(true)}>Claim Combo Deal</button>
          </div>

          <div className="filter-tabs">
            <button
              className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >All Destinations</button>
            <button
              className={`tab-btn ${activeTab === "christmas" ? "active" : ""}`}
              onClick={() => setActiveTab("christmas")}
            >🎄 Christmas</button>
            <button
              className={`tab-btn ${activeTab === "newyear" ? "active" : ""}`}
              onClick={() => setActiveTab("newyear")}
            >🥂 New Year</button>
          </div>

          <div className="pass-grid">
            {filteredDests.map((d) => (
              <div className="pass" key={d.code}>
                <div className="pass-photo">
                  <img src={d.img} alt={`${d.city}, ${d.country}`} loading="lazy" />
                  <div className="pass-photo-overlay" />
                  <span className="pass-tag">GATE {d.gate}</span>
                  <span className="pass-price-tag">{d.price}</span>
                  <span className="pass-nights">🌙 {d.nights}</span>
                </div>
                <div className="pass-body">
                  <div className="pass-header">
                    <span className="pass-code">{d.code}</span>
                    <span className="pass-gate">SEAT {d.seat}</span>
                  </div>
                  <div className="pass-city">{d.city}</div>
                  <div className="pass-country">{d.country}</div>
                  <p className="pass-blurb">{d.blurb}</p>
                  <div className="pass-footer">
                    <div>
                      <div className="pass-from">Starting from</div>
                      <div className="pass-price">{d.price}</div>
                    </div>
                    <button className="pass-book-btn" onClick={() => setShowBookingForm(true)}>Book Now →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">✦ Why Choose Us</span>
            <h2>Travel with Confidence</h2>
            <p>We handle every detail so you can focus on making memories this festive season.</p>
          </div>
          <div className="confidence-grid">
            {CONFIDENCE.map((c) => (
              <div className="confidence-item" key={c.title}>
                <span className="confidence-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT TIERS */}
      <section className="section" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">💰 Early Bird Offers</span>
            <h2>Book Early, Save More</h2>
            <p>The sooner you book, the bigger your savings. Lock in your festive holiday today.</p>
          </div>
          <div className="tier-grid">
            {TIERS.map((t) => (
              <div className={`tier ${t.featured ? "featured" : ""}`} key={t.cls}>
                {t.badge && <div className="tier-badge">{t.badge}</div>}
                <div className="tier-cls">{t.cls}</div>
                <h3>{t.title}</h3>
                <div className="discount">{t.discount}</div>
                <p>{t.detail}</p>
                <button className={t.featured ? "btn-gold" : "btn-ghost"} style={{ width: "100%" }} onClick={() => setShowBookingForm(true)}>
                  {t.featured ? "Get Best Price" : "Book Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="section section-dark" id="inclusions">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">🎁 Package Inclusions</span>
            <h2>Everything's Taken Care Of</h2>
            <p>From the moment you leave home to the moment you return — we've got it all covered.</p>
          </div>
          <div className="incl-grid">
            {INCLUSIONS.map((item) => (
              <div className="incl-item" key={item.text}>
                <span className="incl-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">⭐ Happy Travellers</span>
            <h2>Real Stories, Real Magic</h2>
            <p>Thousands of travellers have celebrated their best Christmas and New Year with us.</p>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testimonial" key={t.name}>
                <StarRating count={t.rating} />
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-meta">{t.city} · Travelled to {t.dest}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Plan Your Perfect<br />Festive Getaway 🎄</h3>
            <p>
              Our travel experts are ready to help you create unforgettable Christmas
              and New Year memories. Reach out via phone, email, or fill out the form —
              we'll respond within 2 hours during business hours.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📞</div>
                <div className="contact-method-text">
                  <h4>Phone & WhatsApp</h4>
                  <p>
                    <a href="tel:+919876543210">+91 98765 43210</a><br />
                    <a href="tel:+911800001234">1800-000-1234</a> (Toll Free)<br />
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Mon-Sat: 9 AM - 9 PM IST</span>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">📧</div>
                <div className="contact-method-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@travelnexploreworld.com">info@travelnexploreworld.com</a><br />
                    <a href="mailto:bookings@travelnexploreworld.com">bookings@travelnexploreworld.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">📷</div>
                <div className="contact-method-text">
                  <h4>Social Media</h4>
                  <p>
                    Instagram: <a href="https://www.instagram.com/travelnexploreworld" target="_blank" rel="noopener noreferrer">@travelnexploreworld</a><br />
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>DM us for quick questions!</span>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <div className="contact-method-text">
                  <h4>Visit Our Office</h4>
                  <p>
                    42, Travel House, Connaught Place<br />
                    New Delhi – 110001, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h4>Get a Free Quote 🎁</h4>
            <p>Share your travel details and we'll send you a personalized package within 24 hours.</p>

            <form onSubmit={handleFormSubmit}>
              <input type="hidden" name="subject" value="New Booking Inquiry - Travel N Explore World" />
              <input type="hidden" name="from_name" value="Travel N Explore World Website" />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-input"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-input"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Preferred Destination <span className="required">*</span>
                </label>
                <select name="destination" className="form-select" required>
                  <option value="">Select a destination</option>
                  <option value="Dubai">Dubai, UAE</option>
                  <option value="Paris">Paris, France</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Sydney">Sydney, Australia</option>
                  <option value="Bangkok">Bangkok, Thailand</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Hong Kong">Hong Kong, China</option>
                  <option value="Tokyo">Tokyo, Japan</option>
                  <option value="Kuala Lumpur">Kuala Lumpur, Malaysia</option>
                  <option value="Bali">Bali, Indonesia</option>
                  <option value="Istanbul">Istanbul, Turkey</option>
                  <option value="Ahmedabad">Ahmedabad, India</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="London">London, UK</option>
                  <option value="New York">New York, USA</option>
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Travel Dates <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    name="travel_date"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    name="travelers"
                    className="form-input"
                    placeholder="2"
                    min="1"
                    defaultValue="2"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Special Requests / Questions
                </label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your preferences, budget range, special occasions, or any questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Free Quote 🎉"}
              </button>

              <p className="form-note">
                🔒 Your information is safe with us. We respect your privacy and will never share your details.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="final-cta">
        <div className="final-cta-bg" />
        <div className="final-cta-overlay" />
        <div className="final-cta-inner">
          <h2>Don't Miss the Most Magical<br />Night of the Year 🎉</h2>
          <p>
            Seats are filling fast for Christmas and New Year 2026/27 packages.
            Secure your spot today with just a small deposit and celebrate in style.
          </p>
          <div className="final-cta-btns">
            <button className="btn-primary" onClick={() => setShowBookingForm(true)}>🎄 Book Christmas Trip</button>
            <button className="btn-gold" onClick={() => setShowBookingForm(true)}>🥂 Reserve NYE Package</button>
          </div>
        </div>
      </div>

      {/* BOOKING MODAL */}
      {showBookingForm && (
        <div className="modal-overlay" onClick={() => setShowBookingForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Book Your Dream Holiday 🎄</h3>
              <p>Fill in your details and we'll get back to you with the best package options.</p>
              <button
                className="modal-close"
                onClick={() => setShowBookingForm(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <input type="hidden" name="subject" value="New Booking Inquiry - Travel N Explore World" />
                <input type="hidden" name="from_name" value="Travel N Explore World Website" />

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-input"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-input"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Preferred Destination <span className="required">*</span>
                  </label>
                  <select name="destination" className="form-select" required>
                    <option value="">Select a destination</option>
                    <option value="Dubai">Dubai, UAE</option>
                    <option value="Paris">Paris, France</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Sydney">Sydney, Australia</option>
                    <option value="Bangkok">Bangkok, Thailand</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="London">London, UK</option>
                    <option value="New York">New York, USA</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Travel Dates <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      name="travel_date"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      name="travelers"
                      className="form-input"
                      placeholder="2"
                      min="1"
                      defaultValue="2"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Budget Range (Optional)
                  </label>
                  <select name="budget" className="form-select">
                    <option value="">Select budget range</option>
                    <option value="Under 1 Lakh">Under ₹1,00,000</option>
                    <option value="1-2 Lakhs">₹1,00,000 - ₹2,00,000</option>
                    <option value="2-3 Lakhs">₹2,00,000 - ₹3,00,000</option>
                    <option value="Above 3 Lakhs">Above ₹3,00,000</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Special Requests / Questions
                  </label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your preferences, special occasions, or any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Your Request..." : "Submit Booking Request 🎉"}
                </button>

                <p className="form-note">
                  🔒 Your information is safe with us. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-grid">

          {/* Brand Column */}
          <div>
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0D0F1A" />
                  <circle cx="12" cy="9" r="1.5" fill="#0D0F1A" />
                </svg>
              </div>
              <div className="footer-brand-text">
                <div className="footer-brand-name">
                  Travel<span className="amp">N</span>Explore World
                </div>
                <div className="footer-brand-sub">Your Journey, Our Passion</div>
              </div>
            </div>
            <p className="footer-tagline">
              Crafting unforgettable Christmas and New Year travel experiences since 2015.
              From festive Alpine chalets to tropical NYE beach parties — we make holidays magical.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/travelnexploreworld"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://www.facebook.com/travelnexploreworld"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://www.youtube.com/@travelnexploreworld"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                ▶️
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#inclusions">What's Included</a></li>
              <li><a href="#pricing">Pricing & Offers</a></li>
              <li><a href="#">Christmas Packages</a></li>
              <li><a href="#">New Year Packages</a></li>
              <li><a href="#">Group Bookings</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-col">
            <h4>Top Destinations</h4>
            <ul>
              <li><a href="#">Dubai NYE</a></li>
              <li><a href="#">Paris Christmas</a></li>
              <li><a href="#">Maldives NYE</a></li>
              <li><a href="#">Sydney NYE</a></li>
              <li><a href="#">Bangkok NYE</a></li>
              <li><a href="#">Swiss Alps Christmas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <div className="footer-contact-text">
                <strong>Phone / WhatsApp</strong>
                <a href="tel:+919876543210">+91 98765 43210</a>
                <br />
                <a href="tel:+911800001234">1800-000-1234 (Toll Free)</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📧</div>
              <div className="footer-contact-text">
                <strong>Email</strong>
                <a href="mailto:info@travelnexploreworld.com">info@travelnexploreworld.com</a>
                <br />
                <a href="mailto:bookings@travelnexploreworld.com">bookings@travelnexploreworld.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📷</div>
              <div className="footer-contact-text">
                <strong>Instagram</strong>
                <a
                  href="https://www.instagram.com/travelnexploreworld"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @travelnexploreworld
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <div className="footer-contact-text">
                <strong>Office</strong>
                42, Travel House, Connaught Place,<br />New Delhi – 110001
              </div>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Travel N Explore World. All rights reserved. · Terms & conditions apply · Flights and visa assistance vary by route.
          </div>
          <div className="footer-festive">🎄 🥂 ❄️ 🎉 ✨</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
