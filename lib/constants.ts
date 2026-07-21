import { FeatureItem, FAQItem, PlayerRank, Testimonial, Partner } from "@/types";

export const SITE_CONFIG = {
  name: "ROYAL FLUSH POKER",
  title: "Royal Flush Poker | World-Class AAA Online Poker & High Stakes Tournaments",
  description: "Experience the ultimate AAA online poker platform. Real-time 3D tables, certified RNG fair play, multi-million dollar tournaments, and instant crypto & fiat cashouts.",
  url: "https://royalflushpoker.com",
};

export const LIVE_STATS = [
  { id: "players", label: "Players Online", value: 142850, prefix: "", suffix: "+" },
  { id: "prize", label: "Monthly Prize Pool", value: 10000000, prefix: "$", suffix: "" },
  { id: "hands", label: "Hands Dealt Daily", value: 2500000, prefix: "", suffix: "+" },
  { id: "countries", label: "Global Regions", value: 120, prefix: "", suffix: " Countries" },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "rng-fair",
    title: "Certified RNG Fair Play",
    description: "Military-grade quantum-entropy random number generator independently audited by iTech Labs and GLI.",
    icon: "ShieldCheck",
    badge: "100% Certified",
  },
  {
    id: "payouts",
    title: "Instant Lightning Payouts",
    description: "Withdraw your high-roller winnings in under 60 seconds via Crypto (BTC, ETH, USDT) or Visa/Mastercard.",
    icon: "Zap",
    badge: "< 60s Cashout",
  },
  {
    id: "multi-table",
    title: "Extreme Multi-Tabling",
    description: "Play up to 16 high-stakes tables simultaneously with dynamic HUD overlays and custom hotkeys.",
    icon: "Layers",
    badge: "16-Table Max",
  },
  {
    id: "vip-club",
    title: "Royal VIP Concierge",
    description: "Unlock up to 60% rakeback, dedicated personal account managers, and exclusive private jet packages to Vegas.",
    icon: "Crown",
    badge: "60% Rakeback",
  },
];

export const LEADERBOARD: PlayerRank[] = [
  {
    rank: 1,
    name: "Alex 'VegasViper' Mercer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    country: "🇺🇸 USA",
    totalEarnings: 2450800,
    winRate: 74.8,
    vipTier: "ROYAL",
  },
  {
    rank: 2,
    name: "Viktor 'NordicBluff' Lindqvist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    country: "🇸🇪 Sweden",
    totalEarnings: 1890400,
    winRate: 71.2,
    vipTier: "DIAMOND",
  },
  {
    rank: 3,
    name: "Sophia 'IceQueen' Chen",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    country: "🇨🇦 Canada",
    totalEarnings: 1420100,
    winRate: 69.5,
    vipTier: "DIAMOND",
  },
  {
    rank: 4,
    name: "Marco 'ElTabor' Rossi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    country: "🇮🇹 Italy",
    totalEarnings: 980500,
    winRate: 66.4,
    vipTier: "PLATINUM",
  },
  {
    rank: 5,
    name: "Elena 'CyberAce' Petrov",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    country: "🇩🇪 Germany",
    totalEarnings: 840200,
    winRate: 64.9,
    vipTier: "PLATINUM",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Daniel N.",
    role: "6-Time WSOP Bracelet Winner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    content: "Royal Flush Poker is hands-down the slickest 3D poker client I've ever tested. The hand mechanics, RNG integrity, and high-roller liquidity are unparalleled.",
    rating: 5,
    winnings: "$4,200,000+",
  },
  {
    id: "t2",
    name: "Sarah 'Nuts' Jenkins",
    role: "High Stakes Cash Game Pro",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    content: "The instant crypto cashout feature is a game-changer. I withdrew a six-figure tournament win directly to my wallet in under 40 seconds!",
    rating: 5,
    winnings: "$1,850,000+",
  },
  {
    id: "t3",
    name: "Marcus 'HighRoller' Vance",
    role: "VIP Club Member",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    content: "The 60% rakeback rewards system and personal VIP account manager make Royal Flush the only platform worth playing on.",
    rating: 5,
    winnings: "$950,000+",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Security",
    question: "How do I know the game cards are 100% fair and unmanipulated?",
    answer: "Our software uses a Quantum Random Number Generator (tRNG) certified by Gaming Laboratories International (GLI) and iTech Labs. Hand histories are cryptographically hashed on-chain to ensure zero operator manipulation.",
  },
  {
    id: "faq-2",
    category: "Payments",
    question: "What withdrawal methods are supported and how fast are payouts?",
    answer: "We support instant withdrawals via Bitcoin, Ethereum, USDT (TRC-20 & ERC-20), Solana, as well as instant Bank Wire and Visa/Mastercard. Crypto payouts complete automatically in < 60 seconds.",
  },
  {
    id: "faq-3",
    category: "Tournaments",
    question: "How do I enter the $5,000,000 World Championship Series?",
    answer: "You can buy in directly for $530 or win your seat for as low as $1 via daily Satellite tournaments running every hour in the app.",
  },
  {
    id: "faq-4",
    category: "General",
    question: "Can I play on Mobile devices without installing software?",
    answer: "Yes! Royal Flush Poker offers a zero-install Progressive Web App (PWA) that runs smoothly on any iOS or Android browser with full WebGL 3D table support.",
  },
];

export const PARTNERS: Partner[] = [
  { name: "iTech Labs Certified", logo: "iTech Labs", category: "Audit" },
  { name: "GLI Certified", logo: "Gaming Labs Intl", category: "Compliance" },
  { name: "eCOGRA Approved", logo: "eCOGRA", category: "Fair Play" },
  { name: "Curacao eGaming", logo: "Curacao License", category: "Licensing" },
  { name: "NVIDIA DLSS Partner", logo: "NVIDIA", category: "Graphics" },
  { name: "Coinspaid Payouts", logo: "Coinspaid", category: "Crypto" },
];
