import { useState, useEffect } from "react";
import type React from "react";
import {
  Plane, Hotel, Coffee, UtensilsCrossed, Car, Map, FileText, PartyPopper,
  Ticket, TreePine, Gift, Briefcase, Shield, Camera, Film, Ship, Wallet,
  Compass, Phone, RefreshCw, Sun, Moon, Star, Sparkles,
  AtSign, MapPin, Lock,
  CheckCircle, Snowflake, Globe, Wine, CalendarDays, BadgePercent,
  HeartHandshake
} from "lucide-react";


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

const INCLUSIONS: { icon: React.ReactNode; text: string }[] = [
  { icon: <Plane size={16} />, text: "International round-trip flights" },
  { icon: <Hotel size={16} />, text: "4/5-star hotel accommodation" },
  { icon: <Coffee size={16} />, text: "Daily breakfast buffet included" },
  { icon: <UtensilsCrossed size={16} />, text: "Welcome dinner & selected meals" },
  { icon: <Car size={16} />, text: "Airport transfers both ways" },
  { icon: <Map size={16} />, text: "Guided city sightseeing tours" },
  { icon: <FileText size={16} />, text: "Visa assistance & documentation" },
  { icon: <PartyPopper size={16} />, text: "New Year's Eve gala dinner" },
  { icon: <Ticket size={16} />, text: "VIP countdown party access" },
  { icon: <TreePine size={16} />, text: "Christmas Eve special dinner" },
  { icon: <Gift size={16} />, text: "Festive welcome gift package" },
  { icon: <Briefcase size={16} />, text: "Dedicated travel manager 24/7" },
  { icon: <Shield size={16} />, text: "Comprehensive travel insurance" },
  { icon: <Camera size={16} />, text: "Professional photo session" },
  { icon: <Film size={16} />, text: "Cultural activities & experiences" },
  { icon: <Ship size={16} />, text: "Optional cruise experiences" },
];

const CONFIDENCE: { icon: React.ReactNode; title: string; text: string }[] = [
  {
    icon: <Wallet size={22} />,
    title: "Book with a Low Deposit",
    text: "Secure any package for just 20% deposit. Pay the balance at your convenience before departure.",
  },
  {
    icon: <Compass size={22} />,
    title: "Local Experts on the Ground",
    text: "Our Travel Directors and local specialists know every destination inside out — so you travel worry-free.",
  },
  {
    icon: <Phone size={22} />,
    title: "24/7 Support Always",
    text: "From the moment you book to the day you land back home, we're reachable around the clock.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Flexible Cancellation",
    text: "Change your dates or destination with no rebooking fees up to 90 days before departure.",
  },
];

const TESTIMONIALS = [
  {
    name: "James & Sarah Mitchell",
    city: "London, UK",
    text: "Absolutely phenomenal experience in Bali! The water sports, Ubud rice terraces, and Nusa Penida views were breathtaking. Travel N Explore World handled every detail perfectly — transfers, hotels, activities. We've already recommended them to all our friends!",
    rating: 5,
    dest: "Bali",
  },
  {
    name: "Emily & Tom Harrington",
    city: "Sydney, Australia",
    text: "Switzerland in winter was a dream come true! Mt. Titlis snow, Lucerne's charm, and Interlaken's stunning Alps were beyond words. The team's 24/7 support made us feel completely safe. Best travel experience we've ever had — booking again next year!",
    rating: 5,
    dest: "Switzerland",
  },
  {
    name: "Carlos & Maria Fernandez",
    city: "Madrid, Spain",
    text: "Our New Zealand trip covering Auckland, Queenstown, and Milford Sound was absolutely spectacular! The itinerary was perfectly planned with zero hiccups. The Milford Sound cruise alone was worth every penny. A world-class travel agency!",
    rating: 5,
    dest: "New Zealand",
  },
  {
    name: "Sophie & Mark Laurent",
    city: "Paris, France",
    text: "Vietnam Extravaganza was extraordinary — Hanoi's Old Quarter, Ha Long Bay cruise, and Ho Chi Minh City's energy were unforgettable. Every hotel was excellent and our guide was incredibly knowledgeable. Merci for this perfect holiday!",
    rating: 5,
    dest: "Vietnam",
  },
  {
    name: "David & Lisa Thompson",
    city: "Toronto, Canada",
    text: "The Japan Cherry Blossom tour was a once-in-a-lifetime experience! Tokyo, Mt. Fuji, Kyoto temples, and Osaka's food scene — all perfectly timed with the blossoms. The bullet train rides were thrilling. Couldn't have asked for better planning!",
    rating: 5,
    dest: "Japan",
  },
  {
    name: "Anna & Peter Schneider",
    city: "Berlin, Germany",
    text: "Finland Northern Lights experience was pure magic! Seeing the Aurora Borealis over Lapland, husky rides, and Santa's Village with the kids was unforgettable. The team at Travel N Explore World made everything seamless. Wunderbar!",
    rating: 5,
    dest: "Finland",
  },
];

const PACKAGES = [
  {
    id: 1, country: "Bali", flag: "🇮🇩",
    name: "Crazy Deal Bali With Water Sports",
    duration: "6 Nights / 7 Days", price: 744,
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Bali", desc: "Arrive in Bali, hotel check-in and relax for the evening." },
      { day: "Day 2", title: "Bali Sightseeing", desc: "Explore Bali's beautiful temples, scenic landscapes and cultural attractions." },
      { day: "Day 3", title: "Water Sports Adventure", desc: "Enjoy exciting water sports such as banana boat, jet ski and parasailing." },
      { day: "Day 4", title: "Nusa Penida Island", desc: "Discover spectacular beaches, cliffs and picture-perfect viewpoints." },
      { day: "Day 5", title: "Ubud Experience", desc: "Explore Ubud's rice terraces, local culture and beautiful natural surroundings." },
      { day: "Day 6", title: "Leisure & Shopping", desc: "Enjoy a relaxing day for shopping, beaches or exploring Bali at your own pace." },
      { day: "Day 7", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 2, country: "Singapore", flag: "🇸🇬",
    name: "Crazy Deal Singapore With Sentosa Island",
    duration: "4 Nights / 5 Days", price: 726,
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Singapore", desc: "Arrive in Singapore, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Singapore City Tour", desc: "Explore Singapore's iconic landmarks and popular city attractions." },
      { day: "Day 3", title: "Sentosa Island", desc: "Enjoy an exciting day at Sentosa Island with its famous attractions and entertainment." },
      { day: "Day 4", title: "Singapore Leisure Day", desc: "Spend the day shopping, sightseeing or exploring Singapore at your own pace." },
      { day: "Day 5", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 3, country: "Thailand", flag: "🇹🇭",
    name: "Simply Thailand – Flights Inclusive",
    duration: "6 Nights / 7 Days", price: 615,
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Bangkok", desc: "Arrive in Bangkok, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Bangkok City Tour", desc: "Explore Bangkok's famous temples, local attractions and vibrant city life." },
      { day: "Day 3", title: "Bangkok → Pattaya", desc: "Travel to Pattaya, check in and spend the evening exploring at leisure." },
      { day: "Day 4", title: "Coral Island Tour", desc: "Enjoy a scenic Coral Island excursion with beautiful beaches and optional water activities." },
      { day: "Day 5", title: "Pattaya → Phuket", desc: "Transfer to Phuket and relax or explore the lively surroundings in the evening." },
      { day: "Day 6", title: "Phuket Island Experience", desc: "Discover Phuket's stunning beaches, viewpoints and popular local attractions." },
      { day: "Day 7", title: "Departure", desc: "Check out and transfer to the airport for your return flight with wonderful Thailand memories." },
    ],
  },
  {
    id: 4, country: "Vietnam", flag: "🇻🇳",
    name: "Vietnam Extravaganza",
    duration: "5 Nights / 6 Days", price: 1013,
    img: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Hanoi", desc: "Arrive in Hanoi, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Hanoi City Tour", desc: "Explore Hanoi's famous landmarks, historic sites and vibrant Old Quarter." },
      { day: "Day 3", title: "Ha Long Bay Cruise", desc: "Enjoy a scenic Ha Long Bay cruise surrounded by stunning limestone islands." },
      { day: "Day 4", title: "Fly to Ho Chi Minh City", desc: "Travel to Ho Chi Minh City and explore the lively city at your own pace." },
      { day: "Day 5", title: "Ho Chi Minh City & Cu Chi Tunnels", desc: "Discover key city attractions and visit the historic Cu Chi Tunnels." },
      { day: "Day 6", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 5, country: "Japan", flag: "🇯🇵",
    name: "Japan – Cherry Blossom",
    duration: "7 Nights / 8 Days", price: 3099,
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Tokyo", desc: "Arrive in Tokyo, hotel check-in and relax for the evening." },
      { day: "Day 2", title: "Tokyo City Tour", desc: "Explore Tokyo's iconic attractions, vibrant districts and beautiful cherry blossoms." },
      { day: "Day 3", title: "Mt. Fuji & Hakone", desc: "Experience breathtaking Mt. Fuji views and the scenic beauty of Hakone." },
      { day: "Day 4", title: "Tokyo → Kyoto", desc: "Travel by bullet train to Kyoto and enjoy the historic surroundings." },
      { day: "Day 5", title: "Kyoto Sightseeing", desc: "Discover Kyoto's famous temples, traditional streets and cherry blossom spots." },
      { day: "Day 6", title: "Kyoto → Osaka", desc: "Travel to Osaka and explore its famous castle, shopping and entertainment districts." },
      { day: "Day 7", title: "Nara Excursion", desc: "Visit Nara's famous deer park, ancient temples and traditional surroundings." },
      { day: "Day 8", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 6, country: "Europe", flag: "🇪🇺",
    name: "Europe For All (Winter)",
    duration: "7 Nights / 8 Days", price: 2659,
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Paris", desc: "Arrive in Paris, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Paris City Tour", desc: "Explore the Eiffel Tower, Champs-Élysées and other iconic Paris attractions." },
      { day: "Day 3", title: "Paris → Switzerland", desc: "Travel through scenic European countryside to beautiful Switzerland." },
      { day: "Day 4", title: "Switzerland & Mt. Titlis", desc: "Experience snow-covered Mt. Titlis and breathtaking Alpine views." },
      { day: "Day 5", title: "Switzerland → Germany", desc: "Travel to Germany and enjoy picturesque towns and winter scenery." },
      { day: "Day 6", title: "Germany → Amsterdam", desc: "Continue to Amsterdam and explore its charming canals and vibrant streets." },
      { day: "Day 7", title: "Amsterdam Sightseeing", desc: "Discover Amsterdam's famous landmarks and enjoy a scenic canal experience." },
      { day: "Day 8", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 7, country: "Europe", flag: "🇪🇺",
    name: "Fusion Europe (Winter)",
    duration: "10 Nights / 11 Days", price: 3484,
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Paris", desc: "Arrive in Paris, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Paris Sightseeing", desc: "Explore the Eiffel Tower, Champs-Élysées and other iconic Paris attractions." },
      { day: "Day 3", title: "Paris → Switzerland", desc: "Travel to Switzerland through beautiful European countryside." },
      { day: "Day 4", title: "Swiss Alps Experience", desc: "Enjoy spectacular snow-covered mountains and breathtaking Alpine scenery." },
      { day: "Day 5", title: "Switzerland → Germany", desc: "Travel to Germany and explore its charming towns and winter landscapes." },
      { day: "Day 6", title: "Germany → Austria", desc: "Continue to Austria and enjoy its stunning architecture and Alpine surroundings." },
      { day: "Day 7", title: "Austria → Italy", desc: "Travel to Italy and experience its beautiful historic streets and culture." },
      { day: "Day 8", title: "Venice Experience", desc: "Explore Venice's famous canals, bridges and St. Mark's Square." },
      { day: "Day 9", title: "Italy → Amsterdam", desc: "Continue your European journey to vibrant Amsterdam." },
      { day: "Day 10", title: "Amsterdam Sightseeing", desc: "Discover Amsterdam's canals, famous landmarks and lively city centre." },
      { day: "Day 11", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 8, country: "Europe", flag: "🇫🇷🇨🇭",
    name: "Swiss French Magic (Winter)",
    duration: "7 Nights / 8 Days", price: 3595,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Paris", desc: "Arrive in Paris, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Paris City Tour", desc: "Explore the Eiffel Tower, Champs-Élysées and other iconic Paris attractions." },
      { day: "Day 3", title: "Paris Leisure & Shopping", desc: "Enjoy Paris at your own pace with shopping, cafés and beautiful city sights." },
      { day: "Day 4", title: "Paris → Switzerland", desc: "Travel to Switzerland and enjoy the breathtaking winter landscapes." },
      { day: "Day 5", title: "Mt. Titlis Experience", desc: "Experience snow-covered Mt. Titlis, cable-car views and spectacular Alpine scenery." },
      { day: "Day 6", title: "Lucerne Sightseeing", desc: "Explore charming Lucerne, its beautiful lake and famous historic landmarks." },
      { day: "Day 7", title: "Interlaken & Swiss Alps", desc: "Discover picturesque Interlaken surrounded by magnificent snow-covered mountains." },
      { day: "Day 8", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 9, country: "Europe", flag: "🇫🇮",
    name: "Arctic Delights – Christmas in Santaland",
    duration: "8 Nights / 9 Days", price: 6067,
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Finland", desc: "Arrive in Finland, check in and experience the magical Arctic winter atmosphere." },
      { day: "Day 2", title: "Helsinki Sightseeing", desc: "Explore Helsinki's famous landmarks, Christmas markets and festive streets." },
      { day: "Day 3", title: "Journey to Lapland", desc: "Travel north to magical Lapland, the home of Santa Claus." },
      { day: "Day 4", title: "Santa Claus Village", desc: "Meet Santa, cross the Arctic Circle and enjoy the festive Christmas experience." },
      { day: "Day 5", title: "Husky & Reindeer Adventure", desc: "Experience thrilling husky and reindeer rides through snowy Arctic landscapes." },
      { day: "Day 6", title: "Northern Lights Experience", desc: "Head into the Arctic wilderness to witness the spectacular Aurora Borealis." },
      { day: "Day 7", title: "Arctic Snow Adventure", desc: "Enjoy Lapland's winter activities, snowy scenery and unforgettable Arctic experiences." },
      { day: "Day 8", title: "Leisure & Christmas Magic", desc: "Spend the day enjoying Lapland's festive atmosphere and last-minute experiences." },
      { day: "Day 9", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 10, country: "Europe", flag: "🇫🇮",
    name: "Highlights of Finland with Northern Lights – Winter Special",
    duration: "6 Nights / 7 Days", price: 6641,
    img: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Helsinki", desc: "Arrive in Helsinki, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Helsinki City Tour", desc: "Explore Helsinki's iconic landmarks, vibrant streets and beautiful winter scenery." },
      { day: "Day 3", title: "Helsinki → Lapland", desc: "Journey to magical Lapland and experience Finland's breathtaking Arctic landscapes." },
      { day: "Day 4", title: "Santa Claus Village", desc: "Visit Santa Claus Village, cross the Arctic Circle and enjoy festive attractions." },
      { day: "Day 5", title: "Arctic Adventure", desc: "Experience exciting husky or reindeer activities surrounded by snowy wilderness." },
      { day: "Day 6", title: "Northern Lights Experience", desc: "Venture into the Arctic night to witness the spectacular Aurora Borealis." },
      { day: "Day 7", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 11, country: "USA", flag: "🇺🇸",
    name: "Eastern Delights – Summer 2026",
    duration: "5 Nights / 6 Days", price: 1939,
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in New York", desc: "Arrive in New York, hotel check-in and enjoy the vibrant city atmosphere." },
      { day: "Day 2", title: "New York City Tour", desc: "Explore Times Square, Statue of Liberty and other iconic New York attractions." },
      { day: "Day 3", title: "New York → Washington D.C.", desc: "Travel to Washington D.C. and discover the highlights of the U.S. capital." },
      { day: "Day 4", title: "Washington D.C. → Niagara Falls", desc: "Journey to Niagara Falls and enjoy the spectacular natural scenery." },
      { day: "Day 5", title: "Niagara Falls Experience", desc: "Experience the breathtaking falls, viewpoints and popular surrounding attractions." },
      { day: "Day 6", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 12, country: "USA", flag: "🇺🇸",
    name: "Western Delights – Summer 2026",
    duration: "6 Nights / 7 Days", price: 2207,
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Los Angeles", desc: "Arrive in Los Angeles, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Los Angeles City Tour", desc: "Explore Hollywood, Beverly Hills and other famous Los Angeles attractions." },
      { day: "Day 3", title: "Los Angeles → Las Vegas", desc: "Travel to Las Vegas and experience the dazzling Las Vegas Strip." },
      { day: "Day 4", title: "Grand Canyon Experience", desc: "Enjoy a memorable excursion to the spectacular Grand Canyon." },
      { day: "Day 5", title: "Las Vegas → San Francisco", desc: "Travel to San Francisco and relax after your journey." },
      { day: "Day 6", title: "San Francisco City Tour", desc: "Explore the Golden Gate Bridge, Fisherman's Wharf and other city highlights." },
      { day: "Day 7", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 13, country: "USA", flag: "🇺🇸",
    name: "Funfilled Florida & Bahamas Cruise – Summer 2026",
    duration: "7 Nights / 8 Days", price: 2297,
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Florida", desc: "Arrive in Florida, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Orlando Experience", desc: "Enjoy Orlando's famous attractions, entertainment and vibrant atmosphere." },
      { day: "Day 3", title: "Florida Sightseeing", desc: "Explore popular local attractions and enjoy Florida's sunny surroundings." },
      { day: "Day 4", title: "Bahamas Cruise Begins", desc: "Board your cruise and enjoy exciting onboard entertainment and activities." },
      { day: "Day 5", title: "Bahamas Island Experience", desc: "Discover beautiful beaches, turquoise waters and tropical island scenery." },
      { day: "Day 6", title: "Cruise Experience", desc: "Relax onboard with dining, entertainment and spectacular ocean views." },
      { day: "Day 7", title: "Return to Florida", desc: "Disembark in Florida and enjoy your final evening at leisure." },
      { day: "Day 8", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 14, country: "USA", flag: "🇺🇸",
    name: "Wonderful West Coast – Fixed Departures",
    duration: "6 Nights / 7 Days", price: 2609,
    img: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in San Francisco", desc: "Arrive in San Francisco, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "San Francisco City Tour", desc: "Explore the Golden Gate Bridge, Fisherman's Wharf and other city highlights." },
      { day: "Day 3", title: "San Francisco → Las Vegas", desc: "Travel to Las Vegas and experience the dazzling lights of the famous Strip." },
      { day: "Day 4", title: "Grand Canyon Experience", desc: "Enjoy an exciting excursion to the breathtaking Grand Canyon." },
      { day: "Day 5", title: "Las Vegas → Los Angeles", desc: "Travel to Los Angeles and explore the city's vibrant surroundings." },
      { day: "Day 6", title: "Los Angeles City Tour", desc: "Discover Hollywood, Beverly Hills and other iconic Los Angeles attractions." },
      { day: "Day 7", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 15, country: "USA", flag: "🇺🇸",
    name: "Enchanting East Coast – Fixed Departures",
    duration: "6 Nights / 7 Days", price: 2682,
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in New York", desc: "Arrive in New York, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "New York City Tour", desc: "Explore Times Square, Statue of Liberty and other iconic New York attractions." },
      { day: "Day 3", title: "New York → Washington D.C.", desc: "Travel to Washington D.C. and explore the highlights of the U.S. capital." },
      { day: "Day 4", title: "Washington D.C. → Niagara Falls", desc: "Journey towards Niagara Falls and enjoy the scenic surroundings." },
      { day: "Day 5", title: "Niagara Falls Experience", desc: "Witness the magnificent Niagara Falls and enjoy its popular viewpoints." },
      { day: "Day 6", title: "Niagara Falls → New York", desc: "Return to New York and enjoy shopping or leisure time in the city." },
      { day: "Day 7", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 16, country: "New Zealand", flag: "🇳🇿",
    name: "Scenic New Zealand – Summer 2026",
    duration: "9 Nights / 10 Days", price: 4368,
    img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Auckland", desc: "Arrive in Auckland, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Auckland City Tour", desc: "Explore Auckland's waterfront, city landmarks and beautiful viewpoints." },
      { day: "Day 3", title: "Auckland → Rotorua", desc: "Travel to Rotorua and experience its geothermal wonders and Māori culture." },
      { day: "Day 4", title: "Rotorua → Queenstown", desc: "Travel to Queenstown and enjoy the spectacular mountain and lake scenery." },
      { day: "Day 5", title: "Queenstown Adventure", desc: "Explore Queenstown with optional adventure activities and scenic attractions." },
      { day: "Day 6", title: "Milford Sound Cruise", desc: "Experience breathtaking Milford Sound with a scenic cruise through dramatic landscapes." },
      { day: "Day 7", title: "Queenstown → Christchurch", desc: "Journey to Christchurch and enjoy New Zealand's stunning South Island scenery." },
      { day: "Day 8", title: "Christchurch City Tour", desc: "Explore Christchurch's gardens, landmarks and charming city attractions." },
      { day: "Day 9", title: "Scenic South Island", desc: "Enjoy a final day surrounded by New Zealand's breathtaking natural scenery." },
      { day: "Day 10", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 17, country: "Australia + New Zealand", flag: "🇦🇺🇳🇿",
    name: "Grand Bargain Australia With Scenic New Zealand – Summer 2026",
    duration: "17 Nights / 18 Days", price: 7645,
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Melbourne", desc: "Arrive in Melbourne, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Melbourne City Tour", desc: "Explore Melbourne's famous landmarks, vibrant streets and waterfront attractions." },
      { day: "Day 3", title: "Great Ocean Road", desc: "Enjoy a scenic drive along the spectacular Great Ocean Road and Twelve Apostles." },
      { day: "Day 4", title: "Melbourne → Cairns", desc: "Fly to Cairns and relax amid the beautiful tropical surroundings." },
      { day: "Day 5", title: "Great Barrier Reef", desc: "Experience the magnificent Great Barrier Reef with a memorable cruise." },
      { day: "Day 6", title: "Cairns Experience", desc: "Explore Cairns and enjoy its tropical rainforest and scenic attractions." },
      { day: "Day 7", title: "Cairns → Sydney", desc: "Fly to Sydney and enjoy the city's lively waterfront atmosphere." },
      { day: "Day 8", title: "Sydney City Tour", desc: "Visit the Sydney Opera House, Harbour Bridge and other iconic attractions." },
      { day: "Day 9", title: "Blue Mountains", desc: "Discover the breathtaking Blue Mountains and spectacular natural scenery." },
      { day: "Day 10", title: "Sydney → Auckland", desc: "Fly to Auckland, New Zealand and enjoy the evening at leisure." },
      { day: "Day 11", title: "Auckland City Tour", desc: "Explore Auckland's waterfront, landmarks and beautiful viewpoints." },
      { day: "Day 12", title: "Auckland → Rotorua", desc: "Travel to Rotorua and experience geothermal wonders and Māori culture." },
      { day: "Day 13", title: "Rotorua → Queenstown", desc: "Travel to Queenstown and enjoy spectacular mountain and lake scenery." },
      { day: "Day 14", title: "Queenstown Adventure", desc: "Explore Queenstown and enjoy optional adventure activities." },
      { day: "Day 15", title: "Milford Sound Cruise", desc: "Experience breathtaking Milford Sound with a scenic cruise." },
      { day: "Day 16", title: "Queenstown → Christchurch", desc: "Journey to Christchurch through stunning South Island scenery." },
      { day: "Day 17", title: "Christchurch Exploration", desc: "Explore Christchurch's gardens, landmarks and charming attractions." },
      { day: "Day 18", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 18, country: "Australia + New Zealand", flag: "🇦🇺🇳🇿",
    name: "Australian Extravaganza With Scenic New Zealand – Summer 2026",
    duration: "19 Nights / 20 Days", price: 8171,
    img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Melbourne", desc: "Arrive in Melbourne, hotel check-in and relax for the evening." },
      { day: "Day 2", title: "Melbourne City Tour", desc: "Explore Melbourne's famous landmarks, vibrant streets and waterfront." },
      { day: "Day 3", title: "Great Ocean Road", desc: "Enjoy the spectacular Great Ocean Road and iconic Twelve Apostles." },
      { day: "Day 4", title: "Melbourne → Cairns", desc: "Fly to Cairns and enjoy its beautiful tropical surroundings." },
      { day: "Day 5", title: "Great Barrier Reef", desc: "Experience the world-famous Great Barrier Reef on a scenic cruise." },
      { day: "Day 6", title: "Cairns & Kuranda", desc: "Discover tropical rainforests and the charming village of Kuranda." },
      { day: "Day 7", title: "Cairns → Gold Coast", desc: "Travel to Gold Coast and enjoy its beaches and lively atmosphere." },
      { day: "Day 8", title: "Gold Coast Experience", desc: "Enjoy the Gold Coast's famous attractions, beaches and entertainment." },
      { day: "Day 9", title: "Gold Coast → Sydney", desc: "Travel to Sydney and spend the evening exploring at leisure." },
      { day: "Day 10", title: "Sydney City Tour", desc: "Visit the Opera House, Harbour Bridge and other iconic Sydney attractions." },
      { day: "Day 11", title: "Blue Mountains", desc: "Experience the breathtaking Blue Mountains and spectacular natural scenery." },
      { day: "Day 12", title: "Sydney → Auckland", desc: "Fly to Auckland, New Zealand and enjoy the evening at leisure." },
      { day: "Day 13", title: "Auckland City Tour", desc: "Explore Auckland's waterfront, city landmarks and scenic viewpoints." },
      { day: "Day 14", title: "Auckland → Rotorua", desc: "Travel to Rotorua and experience geothermal wonders and Māori culture." },
      { day: "Day 15", title: "Rotorua Experience", desc: "Discover Rotorua's geysers, hot springs and beautiful natural surroundings." },
      { day: "Day 16", title: "Rotorua → Queenstown", desc: "Travel to Queenstown and enjoy spectacular mountain scenery." },
      { day: "Day 17", title: "Queenstown Sightseeing", desc: "Explore Queenstown's scenic attractions and optional adventure activities." },
      { day: "Day 18", title: "Milford Sound & Christchurch", desc: "Experience Milford Sound cruise then journey to Christchurch." },
      { day: "Day 19", title: "Christchurch City Tour", desc: "Explore Christchurch's gardens, landmarks and charming city attractions." },
      { day: "Day 20", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 19, country: "New Zealand", flag: "🇳🇿",
    name: "Magnificent New Zealand – Durga Puja & Navratri Special",
    duration: "10 Nights / 11 Days", price: 6919,
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Auckland", desc: "Arrive in Auckland, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Auckland City Tour", desc: "Explore Auckland's waterfront, famous landmarks and scenic viewpoints." },
      { day: "Day 3", title: "Auckland → Rotorua", desc: "Travel to Rotorua and experience its fascinating geothermal landscapes." },
      { day: "Day 4", title: "Rotorua Experience", desc: "Discover geysers, hot springs and traditional Māori culture." },
      { day: "Day 5", title: "Rotorua → Queenstown", desc: "Travel to Queenstown and enjoy its spectacular mountains and lakes." },
      { day: "Day 6", title: "Queenstown Sightseeing", desc: "Explore Queenstown's scenic attractions and enjoy optional adventure activities." },
      { day: "Day 7", title: "Milford Sound Cruise", desc: "Experience breathtaking Milford Sound on a spectacular scenic cruise." },
      { day: "Day 8", title: "Queenstown → Christchurch", desc: "Journey to Christchurch while enjoying beautiful South Island landscapes." },
      { day: "Day 9", title: "Christchurch City Tour", desc: "Explore Christchurch's gardens, landmarks and charming city attractions." },
      { day: "Day 10", title: "Scenic New Zealand Experience", desc: "Enjoy a memorable day surrounded by New Zealand's breathtaking natural scenery." },
      { day: "Day 11", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
  },
  {
    id: 20, country: "New Zealand", flag: "🇳🇿",
    name: "Magnificent New Zealand",
    duration: "10 Nights / 11 Days", price: 3154,
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=80",
    itinerary: [
      { day: "Day 1", title: "Arrival in Auckland", desc: "Arrive in Auckland, hotel check-in and enjoy the evening at leisure." },
      { day: "Day 2", title: "Auckland City Tour", desc: "Explore Auckland's waterfront, famous landmarks and scenic viewpoints." },
      { day: "Day 3", title: "Auckland → Rotorua", desc: "Travel to Rotorua and experience its fascinating geothermal landscapes." },
      { day: "Day 4", title: "Rotorua Experience", desc: "Discover geysers, hot springs and traditional Māori cultural attractions." },
      { day: "Day 5", title: "Rotorua → Queenstown", desc: "Travel to Queenstown and enjoy its spectacular mountains and lakes." },
      { day: "Day 6", title: "Queenstown Sightseeing", desc: "Explore Queenstown's scenic attractions and enjoy optional adventure activities." },
      { day: "Day 7", title: "Milford Sound Cruise", desc: "Experience breathtaking Milford Sound with a spectacular scenic cruise." },
      { day: "Day 8", title: "Queenstown Leisure Day", desc: "Enjoy Queenstown's charm, optional activities and stunning surroundings." },
      { day: "Day 9", title: "Queenstown → Christchurch", desc: "Journey to Christchurch through beautiful South Island scenery." },
      { day: "Day 10", title: "Christchurch City Tour", desc: "Explore Christchurch's gardens, landmarks and charming attractions." },
      { day: "Day 11", title: "Departure", desc: "Check out and transfer to the airport for your return journey." },
    ],
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
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`snowflake snowflake-${i + 1}`}>
          <Snowflake size={i % 3 === 0 ? 14 : i % 3 === 1 ? 20 : 12} />
        </div>
      ))}
    </div>
  );
}

export default function NewYearTravelLanding() {
  const target = new Date("2026-12-31T23:59:59");
  const { days, hours, minutes, seconds } = useCountdown(target);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedPkg, setExpandedPkg] = useState<number | null>(null);


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
    <div className={`page${isDark ? '' : ' light-theme'}`}>
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
        .theme-toggle {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: var(--text);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .theme-toggle:hover {
          background: rgba(255,255,255,0.16);
          transform: rotate(20deg) scale(1.1);
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
        }

        /* ─── LIGHT THEME ─── */
        .light-theme {
          --bg: #F5F0E8;
          --surface: #EDE8DC;
          --surface2: #E3DDD0;
          --text: #1A1610;
          --text-dim: rgba(26,22,16,0.65);
          --text-muted: rgba(26,22,16,0.45);
          --border: rgba(212,168,67,0.3);
          --border-dim: rgba(0,0,0,0.1);
        }

        /* Nav */
        .light-theme .nav {
          background: rgba(245,240,232,0.95);
          border-bottom: 1px solid rgba(212,168,67,0.25);
        }
        .light-theme .nav-links a  { color: rgba(26,22,16,0.7); }
        .light-theme .nav-phone    { color: rgba(26,22,16,0.65); }
        .light-theme .brand-name   { color: #1A1610; }
        .light-theme .brand-sub    { color: rgba(26,22,16,0.45); }
        .light-theme .theme-toggle {
          background: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.15);
          color: #1A1610;
        }

        /* Page & sections */
        .light-theme .page          { background: var(--bg); }
        .light-theme .section-dark  { background: #EDE8DC; }
        .light-theme .section-eyebrow { color: var(--gold); }
        .light-theme .section-head h2 { color: #1A1610; }
        .light-theme .section-head p  { color: rgba(26,22,16,0.65); }

        /* Pose / activity / food cards */
        .light-theme .pose-card  { background: #fff; border-color: rgba(0,0,0,0.08); box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
        .light-theme .pose-label { color: #1A1610; }

        /* Boarding pass cards */
        .light-theme .pass   { background: #fff; border-color: rgba(0,0,0,0.1); box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
        .light-theme .pass-city  { color: #1A1610; }
        .light-theme .pass-country { color: rgba(26,22,16,0.6); }
        .light-theme .pass-blurb  { color: rgba(26,22,16,0.7); }
        .light-theme .pass-footer { border-top-color: rgba(0,0,0,0.08); }
        .light-theme .pass-from   { color: rgba(26,22,16,0.5); }
        .light-theme .pass-price  { color: var(--gold); }
        .light-theme .pass-code   { color: #1A1610; }
        .light-theme .pass-gate   { color: rgba(26,22,16,0.5); }

        /* Confidence / trust cards */
        .light-theme .confidence-item { background: #ffffff; border-color: rgba(0,0,0,0.08); }
        .light-theme .confidence-item h3 { color: #1A1610; }
        .light-theme .confidence-item p  { color: rgba(26,22,16,0.72); }
        .light-theme .confidence-icon    { color: var(--gold); }

        /* Tier / pricing cards */
        .light-theme .tier           { background: #fff; border-color: rgba(0,0,0,0.1); }
        .light-theme .tier h3        { color: #1A1610; }
        .light-theme .tier p         { color: rgba(26,22,16,0.7); }
        .light-theme .tier-cls       { color: rgba(26,22,16,0.5); }
        .light-theme .discount       { color: var(--gold); }

        /* Testimonials */
        .light-theme .testimonial     { background: #fff; border-color: rgba(0,0,0,0.08); box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .light-theme .testimonial-text { color: rgba(26,22,16,0.75); }
        .light-theme .testimonial-name { color: #1A1610; }
        .light-theme .testimonial-meta { color: rgba(26,22,16,0.5); }

        /* Inclusions */
        .light-theme .incl-item  { background: #fff; border-color: rgba(0,0,0,0.1); color: #1A1610; }
        .light-theme .incl-icon  { background: rgba(212,168,67,0.12); color: var(--gold); }

        /* Contact section */
        .light-theme .contact-section  { background: #EDE8DC; }
        .light-theme .contact-info h3  { color: #1A1610; }
        .light-theme .contact-info p   { color: rgba(26,22,16,0.65); }
        .light-theme .contact-form-card {
          background: #fff;
          border-color: rgba(0,0,0,0.1);
        }
        .light-theme .contact-form-card h4 { color: #1A1610; }
        .light-theme .contact-form-card > p { color: rgba(26,22,16,0.65); }
        .light-theme .form-group input,
        .light-theme .form-group select,
        .light-theme .form-group textarea {
          background: #F5F0E8;
          border-color: rgba(0,0,0,0.15);
          color: #1A1610;
        }
        .light-theme .form-group label { color: rgba(26,22,16,0.7); }

        /* Footer */
        .light-theme .footer {
          background: #DDD8CC;
          border-top: 1px solid rgba(0,0,0,0.1);
          color: rgba(26,22,16,0.65);
        }
        .light-theme .footer-brand-name { color: #1A1610; }
        .light-theme .footer-brand-sub  { color: rgba(26,22,16,0.5); }
        .light-theme .footer-tagline    { color: rgba(26,22,16,0.65); }
        .light-theme .footer-col h4     { color: #1A1610; }
        .light-theme .footer-col ul li a { color: rgba(26,22,16,0.55); }
        .light-theme .footer-col ul li a:hover { color: var(--gold); }
        .light-theme .footer-contact-text       { color: rgba(26,22,16,0.65); }
        .light-theme .footer-contact-text strong { color: #1A1610; }
        .light-theme .footer-contact-text a     { color: rgba(26,22,16,0.65); }
        .light-theme .footer-contact-icon { background: #fff; border-color: rgba(0,0,0,0.1); }
        .light-theme .social-link {
          background: #fff;
          border-color: rgba(0,0,0,0.12);
          color: #1A1610;
        }
        .light-theme .footer-copy        { color: rgba(26,22,16,0.45); }
        .light-theme .footer-legal a     { color: rgba(26,22,16,0.45); }
        .light-theme .footer-divider     { border-top-color: rgba(0,0,0,0.1); }

        /* Countdown board */
        .light-theme .board {
          background: rgba(245,240,232,0.95);
          border-color: rgba(212,168,67,0.35);
        }
        .light-theme .flap-value {
          background: #fff;
          border-color: rgba(0,0,0,0.1);
          color: var(--gold);
        }
        .light-theme .flap-label  { color: rgba(26,22,16,0.5); }
        .light-theme .countdown-label { color: rgba(26,22,16,0.5); }

        /* Hero stats — always white since hero has dark overlay */
        .hero-stat-num { color: #ffffff !important; text-shadow: 0 1px 4px rgba(0,0,0,0.5); }
        .hero-stat-lbl { color: rgba(255,255,255,0.75) !important; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }

        /* Confidence cards in light theme */
        .light-theme .confidence-item { background: #ffffff; border-color: rgba(0,0,0,0.08); }
        .light-theme .confidence-item h3 { color: #1A1610; }
        .light-theme .confidence-item p  { color: rgba(26,22,16,0.72); }
        .light-theme .confidence-icon    { color: var(--gold); }

        /* Snowflakes in light mode — make them darker */
        .light-theme .snowflake { color: rgba(0,0,0,0.18); }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          min-height: min(75vh, 620px);
          display: flex;
          align-items: center;
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
          background-image: url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&auto=format&fit=crop&q=85');
          background-size: cover;
          background-position: center;
          filter: brightness(0.75);
        }
        .hero-bg-right {
          background-image: url('https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1400&auto=format&fit=crop&q=85');
          background-size: cover;
          background-position: center;
          filter: brightness(0.75);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8,10,20,0.45) 0%,
            rgba(8,10,20,0.35) 30%,
            rgba(8,10,20,0.55) 65%,
            rgba(8,10,20,0.88) 100%
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
          padding: 32px 24px 36px;
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
          font-size: 15px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 16px;
          opacity: 0;
          font-weight: 900;
          animation: eyebrowReveal 0.9s ease forwards;
        }
        @keyframes eyebrowReveal {
          0%   { opacity: 0; transform: translateY(-14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(36px, 6.5vw, 70px);
          line-height: 1.04;
          margin-bottom: 10px;
          color: var(--cream);
          animation: titlePulse 4s ease-in-out infinite;
        }
        @keyframes titlePulse {
          0%, 100% { text-shadow: 0 0 0px transparent; }
          50%       { text-shadow: 0 0 40px rgba(240,201,106,0.3), 0 0 80px rgba(240,201,106,0.15); }
        }
        .hero h1 em {
          font-style: italic;
          color: var(--gold-light);
          animation: shimmerGold 2.5s ease-in-out infinite;
          display: inline-block;
        }
        @keyframes shimmerGold {
          0%, 100% { color: var(--gold-light); text-shadow: 0 0 0px transparent; }
          50%       { color: #ffe680; text-shadow: 0 0 20px rgba(255,230,128,0.8), 0 0 40px rgba(255,200,50,0.4); }
        }
        .hero h1 .xmas {
          color: #F08080;
          animation: shimmerRed 2.5s ease-in-out infinite;
          animation-delay: 1.25s;
          display: inline-block;
        }
        @keyframes shimmerRed {
          0%, 100% { color: #F08080; text-shadow: 0 0 0px transparent; }
          50%       { color: #ff6b6b; text-shadow: 0 0 20px rgba(255,107,107,0.8), 0 0 40px rgba(231,76,60,0.4); }
        }
        }
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
          color: #ffffff;
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
        .section-h2-left {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 8px;
          line-height: 1.1;
        }
        .light-theme .section-h2-left { color: #1A1610; }
        .section-head p {
          color: var(--text-dim);
          font-size: 15px;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ─── POSE / ACTIVITY / FOOD GRID ─── */
        .pose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .pose-grid { grid-template-columns: 1fr; }
        }
        .pose-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--border-dim);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .pose-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }
        .pose-img {
          width: 100%;
          height: 220px;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s;
        }
        .pose-card:hover .pose-img {
          transform: scale(1.04);
        }
        .pose-label {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
        }
        .pose-bar {
          display: inline-block;
          width: 4px;
          height: 22px;
          border-radius: 4px;
          background: var(--gold);
          flex-shrink: 0;
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
          gap: 14px;
        }
        .incl-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
          font-weight: 500;
          padding: 16px 18px;
          border-radius: var(--radius-sm);
          background: var(--surface);
          border: 1px solid var(--border-dim);
          color: var(--text);
          transition: border-color 0.2s, transform 0.2s;
        }
        .incl-item:hover {
          border-color: var(--gold);
          transform: translateY(-2px);
        }
        .incl-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--gold-dim);
          color: var(--gold-light);
          flex-shrink: 0;
        }

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

        /* ─── TOUR PACKAGES ─── */
        .pkg-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .pkg-card {
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--border-dim);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }
        .pkg-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
        .pkg-card.expanded {
          grid-column: 1 / -1;
          flex-direction: row;
          align-items: flex-start;
          transform: none;
        }
        .pkg-card.expanded .pkg-img {
          width: 320px;
          min-width: 320px;
          height: auto;
          min-height: 240px;
        }
        .pkg-card.expanded .pkg-img img { height: 100%; }
        @media (max-width: 700px) {
          .pkg-card.expanded { flex-direction: column; }
          .pkg-card.expanded .pkg-img { width: 100%; min-width: unset; height: 200px; }
        }
        .pkg-img { position: relative; height: 200px; overflow: hidden; }
        .pkg-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .pkg-card:hover .pkg-img img { transform: scale(1.05); }
        .pkg-flag {
          position: absolute; top: 12px; left: 12px;
          font-size: 20px; background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px); border-radius: 8px; padding: 3px 8px; line-height: 1.5;
        }
        .pkg-price-badge {
          position: absolute; top: 12px; right: 12px;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0F1A; font-size: 12px; font-weight: 800;
          padding: 4px 10px; border-radius: 999px;
          font-family: 'JetBrains Mono', monospace;
        }
        .pkg-body { padding: 18px 20px; display: flex; flex-direction: column; flex: 1; text-align: left; }
        .pkg-country {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 5px;
        }
        .pkg-name {
          font-family: 'Playfair Display', serif; font-size: 16px;
          font-weight: 700; color: var(--cream); line-height: 1.3; margin-bottom: 10px;
        }
        .pkg-meta {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: var(--text-muted); margin-bottom: 14px;
        }
        .pkg-read-btn {
          background: transparent; border: 1px solid var(--border);
          color: var(--gold); padding: 8px 16px; border-radius: 999px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
          width: fit-content; margin-top: auto;
        }
        .pkg-read-btn:hover { background: var(--gold-dim); border-color: var(--gold-light); }
        .pkg-itinerary {
          margin-top: 14px; border-top: 1px solid var(--border-dim);
          padding-top: 14px; display: flex; flex-direction: column; gap: 10px;
          animation: fadeSlideDown 0.3s ease;
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pkg-day { display: flex; gap: 10px; align-items: flex-start; }
        .pkg-day-badge {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 700; color: var(--gold); background: var(--gold-dim);
          border-radius: 6px; padding: 2px 7px; white-space: nowrap;
          flex-shrink: 0; margin-top: 2px;
        }
        .pkg-day-title { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 2px; text-align: left; }
        .pkg-day-desc  { font-size: 12px; color: var(--text-dim); line-height: 1.5; text-align: left; }
        .pkg-book-btn {
          margin-top: 14px; width: 100%;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0F1A; border: none; padding: 11px;
          border-radius: 999px; font-weight: 700; font-size: 14px; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pkg-book-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,168,67,0.4); }

        .light-theme .pkg-card       { background: #fff; border-color: rgba(0,0,0,0.09); }
        .light-theme .pkg-name       { color: #1A1610; }
        .light-theme .pkg-meta       { color: rgba(26,22,16,0.5); }
        .light-theme .pkg-day-title  { color: #1A1610; }
        .light-theme .pkg-day-desc   { color: rgba(26,22,16,0.65); }
        .light-theme .pkg-itinerary  { border-top-color: rgba(0,0,0,0.08); }
        .light-theme .pkg-day-badge  { background: rgba(212,168,67,0.15); }

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
          text-align: left;
        }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 10px; text-align: left; }
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
        .footer-contact-text { font-size: 13px; color: var(--text-dim); line-height: 1.5; text-align: left; }
        .footer-contact-text strong { color: var(--text); font-size: 12px; display: block; margin-bottom: 2px; text-align: left; }
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

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 110;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile nav drawer */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(13,15,26,0.97);
          z-index: 105;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          backdrop-filter: blur(20px);
        }
        .mobile-menu.open { display: flex; }
        .light-theme .mobile-menu { background: rgba(245,240,232,0.97); }
        .mobile-menu a {
          color: var(--text);
          text-decoration: none;
          font-size: 24px;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          padding: 12px 32px;
          transition: color 0.2s;
        }
        .mobile-menu a:hover { color: var(--gold); }
        .mobile-menu-cta {
          margin-top: 16px;
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .nav-links { display: none; }
          .nav-phone { display: none; }
          .hamburger { display: flex; }
          .hero-bg { grid-template-columns: 1fr; }
          .hero-bg-right { display: none; }
          .hero-divider { display: none; }
          .contact-grid { grid-template-columns: 1fr; gap: 36px; }
          .form-row { grid-template-columns: 1fr; }
          .xmas-banner { flex-direction: column; text-align: center; gap: 16px; }
          .pose-grid { grid-template-columns: repeat(2, 1fr); }
          .confidence-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-stats { gap: 20px; }
          .pass-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
        }

        @media (max-width: 600px) {
          /* Nav */
          .nav { padding: 12px 16px; }
          .brand-name { font-size: 15px; }
          .brand-sub { display: none; }
          .nav-right { gap: 8px; }
          .nav-cta { padding: 8px 14px; font-size: 12px; }

          /* Hero */
          .hero { min-height: auto; padding-top: 20px; }
          .hero-inner { padding: 24px 16px 28px; }
          .hero h1 { font-size: clamp(28px, 8vw, 38px); }
          .eyebrow { font-size: 10px; letter-spacing: 0.14em; }
          .hero-stats { gap: 16px; flex-wrap: wrap; justify-content: center; }
          .hero-stat-num { font-size: 22px; }
          .hero-ctas { flex-direction: column; align-items: center; gap: 10px; }
          .btn-primary, .btn-gold, .btn-ghost { width: 100%; max-width: 300px; justify-content: center; }

          /* Countdown */
          .board { padding: 12px 10px; gap: 6px; flex-wrap: wrap; }
          .flap { min-width: 46px; }
          .flap-value { font-size: 22px; }
          .board-sep { font-size: 20px; }

          /* Sections */
          .section { padding: 48px 16px; }
          .section-head { margin-bottom: 28px; }
          .section-head h2 { font-size: clamp(22px, 6vw, 32px); }
          .wrap { padding: 0 16px; }

          /* Destinations */
          .pass-grid { grid-template-columns: 1fr; }
          .pass-photo { height: 200px; }
          .xmas-banner { padding: 20px 16px; }
          .filter-tabs { gap: 8px; flex-wrap: wrap; }
          .tab-btn { padding: 8px 14px; font-size: 13px; }

          /* Pose / activity grid */
          .pose-grid { grid-template-columns: 1fr; }
          .pose-img { height: 180px; }

          /* Confidence grid */
          .confidence-grid { grid-template-columns: 1fr; }

          /* Tier grid */
          .tier-grid { grid-template-columns: 1fr; max-width: 100%; }

          /* Inclusions */
          .incl-grid { grid-template-columns: 1fr 1fr; gap: 10px 16px; }
          .incl-item { font-size: 13px; }

          /* Testimonials */
          .testimonial-grid { grid-template-columns: 1fr; }

          /* Contact */
          .contact-section { padding: 48px 16px; }
          .contact-form-card { padding: 24px 16px; }
          .contact-method-icon { width: 36px; height: 36px; font-size: 15px; }

          /* Footer */
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer { padding: 40px 16px 24px; }
          .footer-bottom { flex-direction: column; text-align: center; gap: 10px; }
          .footer-festive { gap: 16px; }

          /* Modal */
          .modal-content { margin: 12px; max-height: calc(100vh - 24px); }
          .modal-body { padding: 20px 16px; }
          .modal-header { padding: 18px 16px 14px; }

          /* Final CTA */
          .final-cta-inner { padding: 40px 16px; }
          .final-cta h2 { font-size: clamp(22px, 6vw, 34px); }
          .final-cta-btns { flex-direction: column; align-items: center; gap: 10px; }
        }

        @media (max-width: 380px) {
          .incl-grid { grid-template-columns: 1fr; }
          .hero h1 { font-size: 26px; }
          .brand-logo { width: 36px; height: 36px; }
        }
      `}</style>

      {/* Snowflakes */}
      <Snowflakes />

      {/* ANNOUNCEMENT RIBBON */}
      <div className="ribbon">
        <TreePine size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
        Christmas &amp; New Year Special <span>— Limited seats available · Early bird discount ends soon</span>
        <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 6 }} />
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
          <span className="nav-phone"><Phone size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> +1 92934 33673</span>
          <button className="theme-toggle" onClick={() => setIsDark(p => !p)} title={isDark ? 'Switch to Light' : 'Switch to Dark'}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="nav-cta" onClick={() => setShowBookingForm(true)}>Book Now</button>
          <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
        <a href="#inclusions" onClick={() => setMenuOpen(false)}>Inclusions</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <div className="mobile-menu-cta">
          <button className="btn-gold" onClick={() => { setMenuOpen(false); setShowBookingForm(true); }}>Book Now</button>
        </div>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg">
          <div className="hero-bg-left" />
          <div className="hero-bg-right" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-divider" />

        <div className="hero-inner">


          <h1>
            Celebrate <em>Christmas</em>
            <br />& <span className="xmas">New Year</span> in Style
          </h1>
          <div className="eyebrow"><span style={{ color: '#F08080' }}>Dec 24 – Jan 1 · Dream</span> Destinations Worldwide</div>

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
            <div className="countdown-label"><CalendarDays size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Countdown to New Year 2027</div>
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
            <button className="btn-primary" onClick={() => setShowBookingForm(true)}><TreePine size={16} /> Book Christmas Package</button>
            <button className="btn-gold" onClick={() => setShowBookingForm(true)}><Wine size={16} /> New Year Deals</button>
            <button className="btn-ghost" onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}>Explore All Destinations</button>
          </div>
        </div>
      </header>

      {/* DESTINATIONS */}
      {/* DESTINATIONS / TOUR PACKAGES */}
      <section className="section" id="destinations">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow"><Globe size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> Tour Packages</span>
            <h2>Explore Our Holiday Packages</h2>
            <p>Handpicked worldwide tours with detailed day-by-day itineraries. Click "Read More" to see the full journey.</p>
          </div>
          <div className="pkg-grid">
            {PACKAGES.map((pkg) => {
              const isOpen = expandedPkg === pkg.id;
              return (
                <div className={`pkg-card${isOpen ? ' expanded' : ''}`} key={pkg.id}>
                  <div className="pkg-img">
                    <img src={pkg.img} alt={pkg.name} loading="lazy" />
                    <span className="pkg-flag">{pkg.flag}</span>
                    <span className="pkg-price-badge">USD {pkg.price}</span>
                  </div>
                  <div className="pkg-body">
                    <div className="pkg-country">{pkg.country}</div>
                    <div className="pkg-name">{pkg.name}</div>
                    <div className="pkg-meta">
                      <CalendarDays size={13} />{pkg.duration}
                    </div>
                    <button className="pkg-read-btn" onClick={() => setExpandedPkg(isOpen ? null : pkg.id)}>
                      <Sparkles size={13} />{isOpen ? "Show Less" : "Read More"}
                    </button>
                    {isOpen && (
                      <div className="pkg-itinerary">
                        {pkg.itinerary.map((item) => (
                          <div className="pkg-day" key={item.day}>
                            <span className="pkg-day-badge">{item.day}</span>
                            <div>
                              <div className="pkg-day-title">{item.title}</div>
                              <div className="pkg-day-desc">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                        <button className="pkg-book-btn" onClick={() => setShowBookingForm(true)}>
                          Book This Package
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow"><HeartHandshake size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> Why Choose Us</span>
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
            <span className="section-eyebrow"><BadgePercent size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> Early Bird Offers</span>
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
            <span className="section-eyebrow"><Gift size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> Package Inclusions</span>
            <h2>Everything's Taken Care Of</h2>
            <p>From the moment you leave home to the moment you return — we've got it all covered.</p>
          </div>
          <div className="incl-grid">
            {INCLUSIONS.map((item) => (
              <div className="incl-item" key={item.text}>
                <div className="incl-icon">{item.icon}</div>
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
            <span className="section-eyebrow"><Star size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> Happy Travellers</span>
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

      {/* STRIKE A POSE */}
      <section className="section" id="highlights">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'left' }}>
            <h2 className="section-h2-left">Strike a pose</h2>
          </div>
          <div className="pose-grid">
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" />Insta-worthy locations</div>
            </div>
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" />Must-see iconic towers</div>
            </div>
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" />Stunning cultural spots</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section section-dark" id="activities">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'left' }}>
            <span className="section-eyebrow">For the thrill-seekers</span>
            <h2 className="section-h2-left">Activities to get you pumped</h2>
          </div>
          <div className="pose-grid">
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" />Adrenaline-fueled activities</div>
            </div>
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" />In, around and under water</div>
            </div>
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" />Must-try adventures</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIAN FOODS */}
      <section className="section" id="indian-food">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'left' }}>
            <span className="section-eyebrow">A feast for the senses</span>
            <h2 className="section-h2-left">Taste of India on every journey</h2>
          </div>
          <div className="pose-grid">
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" style={{ background: '#E74C3C' }} />Butter Chicken & Naan</div>
            </div>
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" style={{ background: '#E74C3C' }} />Street chaat & snacks</div>
            </div>
            <div className="pose-card">
              <div className="pose-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&auto=format&fit=crop&q=80')" }} />
              <div className="pose-label"><span className="pose-bar" style={{ background: '#E74C3C' }} />Festive sweets & desserts</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Plan Your Perfect<br />Festive Getaway <TreePine size={22} style={{ display: 'inline', verticalAlign: 'middle' }} /></h3>
            <p>
              Our travel experts are ready to help you create unforgettable Christmas
              and New Year memories. Reach out via phone, email, or fill out the form —
              we'll respond within 2 hours during business hours.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon"><Phone size={18} /></div>
                <div className="contact-method-text">
                  <h4>Phone &amp; WhatsApp</h4>
                  <p>
                    <a href="tel:+19293433673">+1 9293433673</a><br />

                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Mon-Sat: 9 AM - 9 PM IST</span>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon"><AtSign size={18} /></div>
                <div className="contact-method-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@travelnexploreworld.com">info@travelnexploreworld.com</a><br />
                    <a href="mailto:bookings@travelnexploreworld.com">bookings@travelnexploreworld.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon"><AtSign size={18} /></div>
                <div className="contact-method-text">
                  <h4>Social Media</h4>
                  <p>
                    Instagram: <a href="https://www.instagram.com/travelnexploreworld" target="_blank" rel="noopener noreferrer">@travelnexploreworld</a><br />
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>DM us for quick questions!</span>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon"><MapPin size={18} /></div>
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
            <h4>Get a Free Quote <Gift size={18} style={{ display: 'inline', verticalAlign: 'middle' }} /></h4>
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
                    placeholder="+1 92934 33673"
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
                  <option value="Delhi">Delhi, India</option>
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
                {isSubmitting ? "Sending..." : <><CheckCircle size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />Get Free Quote</>}
              </button>

              <p className="form-note">
                <Lock size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> Your information is safe with us. We respect your privacy and will never share your details.
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
          <h2>Don't Miss the Most Magical<br />Night of the Year <Sparkles size={32} style={{ display: 'inline', verticalAlign: 'middle' }} /></h2>
          <p>
            Seats are filling fast for Christmas and New Year 2026/27 packages.
            Secure your spot today with just a small deposit and celebrate in style.
          </p>
          <div className="final-cta-btns">
            <button className="btn-primary" onClick={() => setShowBookingForm(true)}><TreePine size={16} /> Book Christmas Trip</button>
            <button className="btn-gold" onClick={() => setShowBookingForm(true)}><Wine size={16} /> Reserve NYE Package</button>
          </div>
        </div>
      </div>

      {/* BOOKING MODAL */}
      {showBookingForm && (
        <div className="modal-overlay" onClick={() => setShowBookingForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Book Your Dream Holiday <TreePine size={20} style={{ display: 'inline', verticalAlign: 'middle' }} /></h3>
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
                      placeholder="+1 92934 33673"
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
                  {isSubmitting ? "Sending Your Request..." : <><CheckCircle size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />Submit Booking Request</>}
                </button>

                <p className="form-note">
                  <Lock size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} /> Your information is safe with us. We'll respond within 24 hours.
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
            {/* <div className="footer-socials">
              <a
                href="https://www.instagram.com/travelnexploreworld"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <AtSign size={18} />
              </a>
              <a
                href="https://www.facebook.com/travelnexploreworld"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <Share2 size={18} />
              </a>
              <a
                href="https://www.youtube.com/@travelnexploreworld"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <MonitorPlay size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div> */}
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
              <div className="footer-contact-icon"><Phone size={16} /></div>
              <div className="footer-contact-text">
                <strong>Phone / WhatsApp</strong>
                <a href="tel:+19293433673">+1 9293433673</a>
                <br />
              </div>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Travel N Explore World. All rights reserved. · Terms & conditions apply · Flights and visa assistance vary by route.
          </div>

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
