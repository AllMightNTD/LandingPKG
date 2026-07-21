export interface PlayerRank {
  rank: number;
  name: string;
  avatar: string;
  country: string;
  totalEarnings: number;
  winRate: number;
  vipTier: "DIAMOND" | "ROYAL" | "PLATINUM" | "GOLD";
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Security" | "Tournaments" | "Payments";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  winnings: string;
}

export interface Partner {
  name: string;
  logo: string;
  category: string;
}
