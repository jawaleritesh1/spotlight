export interface ArticleItem {
  id: string
  title: string
  slug: string
  subtitle?: string
  excerpt?: string
  category: string
  categorySlug?: string
  readingTimeMinutes?: number
  publishedAt: string
  imageUrl: string
  trendingRank?: string
  author?: {
    name: string
    role: string
    avatarUrl?: string
  }
}

export interface VoiceItem {
  id: string
  name: string
  slug: string
  role: string
  quote: string
  avatarUrl: string
}

export interface IndustryItem {
  id: string
  number: string
  name: string
  slug: string
  articleCount: number
  iconName: string
}

export interface CoverStoryData {
  issueTitle: string
  personName: string
  tagline: string
  designations: string[]
  organization: string
  storySlug: string
  personPortraitUrl: string
  magazineCoverUrl: string
  signatureText: string
}

export interface PodcastData {
  title: string
  guestName: string
  guestRole: string
  duration: string
  guestPhotoUrl: string
  audioUrl?: string
}

export interface EventData {
  title: string
  subtitle: string
  day: string
  month: string
  location: string
  bgImageUrl: string
  registrationUrl?: string
}

export interface VideoData {
  title: string
  duration: string
  thumbnailUrl: string
  videoUrl?: string
}

export const HERO_FEATURE_DATA: ArticleItem = {
  id: 'hero-1',
  title: 'THE ARCHITECTS OF TOMORROW',
  slug: 'architects-of-tomorrow',
  subtitle: 'Leaders reshaping business, technology and human potential.',
  excerpt: 'Across boardroom corridors, research laboratories, and decentralized ecosystems, a vanguard of multidisciplinary visionaries is redefining what it means to build enduring enterprises in the twenty-first century.',
  category: 'FEATURE STORY',
  categorySlug: 'leadership',
  readingTimeMinutes: 8,
  publishedAt: '08 SEP 2026',
  imageUrl: '/images/hero-manhattan.jpg',
  author: {
    name: 'Julian Vance',
    role: 'Editor-in-Chief',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
}

export const HERO_RAIL_DATA: ArticleItem[] = [
  {
    id: 'rail-1',
    title: 'THE ARCHITECTS OF TOMORROW',
    slug: 'architects-of-tomorrow',
    category: 'Leadership',
    readingTimeMinutes: 8,
    publishedAt: '08 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    trendingRank: '01',
  },
  {
    id: 'rail-2',
    title: 'THE NEW ERA OF WELLNESS',
    slug: 'the-new-era-of-wellness',
    category: 'Healthcare',
    readingTimeMinutes: 6,
    publishedAt: '07 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    trendingRank: '02',
  },
  {
    id: 'rail-3',
    title: 'BUILDING BEYOND BORDERS',
    slug: 'building-beyond-borders',
    category: 'Entrepreneurship',
    readingTimeMinutes: 5,
    publishedAt: '06 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    trendingRank: '03',
  },
  {
    id: 'rail-4',
    title: 'THE FUTURE OF CAPITAL',
    slug: 'the-future-of-capital',
    category: 'Finance',
    readingTimeMinutes: 7,
    publishedAt: '05 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    trendingRank: '04',
  },
  {
    id: 'rail-5',
    title: 'INNOVATION WITHOUT LIMITS',
    slug: 'innovation-without-limits',
    category: 'Technology',
    readingTimeMinutes: 6,
    publishedAt: '04 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    trendingRank: '05',
  },
]

export const EDITORS_PRIMARY_DATA: ArticleItem[] = [
  {
    id: 'ed-1',
    title: 'Redefining Luxury Living: The New Real Estate Wave',
    slug: 'redefining-luxury-living-the-new-real-estate-wave',
    excerpt: 'Architectural biophilia and off-grid sanctuary homes are transforming prime global real estate investments.',
    category: 'REAL ESTATE',
    readingTimeMinutes: 8,
    publishedAt: '08 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'ed-2',
    title: 'The Mindset Shift Every Leader Needs',
    slug: 'the-mindset-shift-every-leader-needs',
    excerpt: 'In complex operating environments, humility and agility outpace rigid top-down command frameworks.',
    category: 'LEADERSHIP',
    readingTimeMinutes: 6,
    publishedAt: '06 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'ed-3',
    title: 'Why Wellness Is The New Wealth',
    slug: 'why-wellness-is-the-new-wealth',
    excerpt: 'High-performing founders are treating biological longevity and cognitive health as their ultimate portfolio assets.',
    category: 'WELLNESS',
    readingTimeMinutes: 5,
    publishedAt: '04 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop',
  },
]

export const EDITORS_COMPACT_DATA: ArticleItem[] = [
  {
    id: 'ed-c1',
    title: 'AI Beyond the Hype: What Actually Matters',
    slug: 'ai-beyond-the-hype-what-actually-matters',
    category: 'TECHNOLOGY',
    publishedAt: '03 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'ed-c2',
    title: 'The New Rules of Modern Finance',
    slug: 'the-new-rules-of-modern-finance',
    category: 'FINANCE',
    publishedAt: '02 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'ed-c3',
    title: 'Sustainable Growth in Uncertain Times',
    slug: 'sustainable-growth-in-uncertain-times',
    category: 'BUSINESS',
    publishedAt: '01 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop',
  },
]

export const COVER_STORY_DATA: CoverStoryData = {
  issueTitle: 'SEPTEMBER 2026 ISSUE',
  personName: 'CHRISTINA RAHM, PHD',
  tagline: 'Building the Future of Human Wellness',
  designations: ['FOUNDER', 'ENTREPRENEUR', 'INNOVATOR'],
  organization: 'FOUNDER, CYNERTIKA',
  storySlug: 'christina-rahm-building-the-future-of-human-wellness',
  personPortraitUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  magazineCoverUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  signatureText: 'Christina Rahm',
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  { id: 'ind-1', number: '01', name: 'TECHNOLOGY', slug: 'technology', articleCount: 52, iconName: 'Cpu' },
  { id: 'ind-2', number: '02', name: 'FINANCE', slug: 'finance', articleCount: 38, iconName: 'Coins' },
  { id: 'ind-3', number: '03', name: 'HEALTHCARE', slug: 'healthcare', articleCount: 41, iconName: 'HeartPulse' },
  { id: 'ind-4', number: '04', name: 'REAL ESTATE', slug: 'real-estate', articleCount: 26, iconName: 'Building2' },
  { id: 'ind-5', number: '05', name: 'AUTOMOTIVE', slug: 'automotive', articleCount: 19, iconName: 'Car' },
  { id: 'ind-6', number: '06', name: 'BEAUTY & WELLNESS', slug: 'beauty-wellness', articleCount: 37, iconName: 'Sparkles' },
  { id: 'ind-7', number: '07', name: 'EDUCATION', slug: 'education', articleCount: 22, iconName: 'GraduationCap' },
  { id: 'ind-8', number: '08', name: 'ENTREPRENEURSHIP', slug: 'entrepreneurship', articleCount: 63, iconName: 'Briefcase' },
]

export const LATEST_NEWS_DATA = [
  { time: '09:42', title: 'Global markets respond to new economic policy shift', category: 'FINANCE', slug: 'global-markets-economic-shift' },
  { time: '09:10', title: 'New technologies reshape the future of smart manufacturing', category: 'TECHNOLOGY', slug: 'smart-manufacturing-tech' },
  { time: '08:51', title: 'Wellness industry enters a new phase of growth', category: 'HEALTHCARE', slug: 'wellness-industry-growth-phase' },
  { time: '08:32', title: 'Sustainable real estate investments on the rise', category: 'REAL ESTATE', slug: 'sustainable-real-estate-investments' },
  { time: '08:10', title: 'Global leaders meet to discuss future economic cooperation', category: 'BUSINESS', slug: 'global-leaders-economic-cooperation' },
]

export const TRENDING_WEEK_DATA = [
  { rank: '01', title: 'The changing face of global entrepreneurship', slug: 'changing-face-of-global-entrepreneurship' },
  { rank: '02', title: 'Why wellness is becoming a business priority', slug: 'why-wellness-business-priority' },
  { rank: '03', title: 'AI beyond the hype: What actually matters', slug: 'ai-beyond-the-hype' },
  { rank: '04', title: 'The new generation of business leaders', slug: 'new-generation-of-business-leaders' },
  { rank: '05', title: 'Building companies that last for decades', slug: 'building-companies-that-last' },
]

export const VOICES_DATA: VoiceItem[] = [
  {
    id: 'v-1',
    name: 'ANITA SHARMA',
    slug: 'anita-sharma',
    role: 'Founder',
    quote: 'Leadership is not about position, it’s about purpose.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'v-2',
    name: 'DAVID PARK',
    slug: 'david-park',
    role: 'CEO',
    quote: 'The future belongs to those who build with conviction.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'v-3',
    name: 'CHRISTINA RAHM',
    slug: 'christina-rahm',
    role: 'Entrepreneur',
    quote: 'Wellness is not a trend. It’s the foundation.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
]

export const INSIGHTS_DATA: ArticleItem[] = [
  {
    id: 'ins-1',
    title: "What's Next for the Global Economy?",
    slug: 'whats-next-for-global-economy',
    category: 'GLOBAL ECONOMY',
    readingTimeMinutes: 10,
    publishedAt: '08 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-2',
    title: '5 Habits of Highly Effective Leaders',
    slug: '5-habits-of-highly-effective-leaders',
    category: 'LEADERSHIP',
    readingTimeMinutes: 7,
    publishedAt: '07 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-3',
    title: 'The Next Wave of Disruptive Innovation',
    slug: 'next-wave-disruptive-innovation',
    category: 'INNOVATION',
    readingTimeMinutes: 9,
    publishedAt: '06 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-4',
    title: 'The Business Case for Sustainable Future',
    slug: 'business-case-for-sustainable-future',
    category: 'SUSTAINABILITY',
    readingTimeMinutes: 8,
    publishedAt: '05 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-5',
    title: 'Building Future-Ready Organizations',
    slug: 'building-future-ready-organizations',
    category: 'DIGITAL TRANSFORMATION',
    readingTimeMinutes: 6,
    publishedAt: '04 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
  },
]

export const PODCAST_DATA: PodcastData = {
  title: 'The Future of Work & Leadership',
  guestName: 'Anjali Mehta',
  guestRole: 'CHRO, InnovateX',
  duration: '35:20 MIN',
  guestPhotoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
  audioUrl: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg',
}

export const EVENT_DATA: EventData = {
  title: 'GLOBAL BUSINESS LEADERS SUMMIT 2026',
  subtitle: 'The Future of Business, Leadership and Innovation',
  day: '15',
  month: 'OCT',
  location: 'Dubai, UAE',
  bgImageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
}

export const VIDEO_DATA: VideoData = {
  title: 'Building a Purpose-Driven Business in the Modern World',
  duration: '05:49 MIN',
  thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
}

export interface PopularInsight {
  rank: string
  title: string
  slug: string
  readingTime: string
}

export interface FormatInsight {
  title: string
  description: string
  count: string
  iconName: string
  href: string
}

export const POPULAR_INSIGHTS: PopularInsight[] = [
  {
    rank: '01',
    title: 'Why Human Skills Matter More Than Ever',
    slug: 'why-human-skills-matter-more-than-ever',
    readingTime: '5 Min Read',
  },
  {
    rank: '02',
    title: 'The Rise of AI-Native Businesses',
    slug: 'the-rise-of-ai-native-businesses',
    readingTime: '6 Min Read',
  },
  {
    rank: '03',
    title: 'Sustainability as a Growth Strategy',
    slug: 'sustainability-as-a-growth-strategy',
    readingTime: '5 Min Read',
  },
  {
    rank: '04',
    title: 'Redefining Leadership in a Hybrid World',
    slug: 'redefining-leadership-in-a-hybrid-world',
    readingTime: '7 Min Read',
  },
  {
    rank: '05',
    title: 'The Future of Global Talent',
    slug: 'the-future-of-global-talent',
    readingTime: '6 Min Read',
  },
]

export const LATEST_INSIGHTS_GRID: ArticleItem[] = [
  {
    id: 'lat-1',
    title: 'AI Beyond the Hype: Real-World Impact',
    slug: 'ai-beyond-the-hype-real-world-impact',
    category: 'TECHNOLOGY',
    categorySlug: 'technology',
    publishedAt: 'Sep 01, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-2',
    title: 'How Great Leaders Build Great Cultures',
    slug: 'how-great-leaders-build-great-cultures',
    category: 'LEADERSHIP',
    categorySlug: 'leadership',
    publishedAt: 'Aug 30, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-3',
    title: 'A Greener Future Through Innovation',
    slug: 'a-greener-future-through-innovation',
    category: 'SUSTAINABILITY',
    categorySlug: 'sustainability',
    publishedAt: 'Aug 28, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-4',
    title: 'Technology Transforming Patient Care',
    slug: 'technology-transforming-patient-care',
    category: 'HEALTHCARE',
    categorySlug: 'healthcare',
    publishedAt: 'Aug 25, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-5',
    title: 'Global Markets: Risks and Opportunities',
    slug: 'global-markets-risks-and-opportunities',
    category: 'ECONOMY',
    categorySlug: 'economy',
    publishedAt: 'Aug 24, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-6',
    title: 'The Future of Urban Living',
    slug: 'the-future-of-urban-living',
    category: 'REAL ESTATE',
    categorySlug: 'real-estate',
    publishedAt: 'Aug 22, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-7',
    title: 'Redefining Productivity in a Hybrid Era',
    slug: 'redefining-productivity-in-a-hybrid-era',
    category: 'WORK & CULTURE',
    categorySlug: 'work-culture',
    publishedAt: 'Aug 20, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-8',
    title: 'From Ideas to Impact: The Startup Mindset',
    slug: 'from-ideas-to-impact-the-startup-mindset',
    category: 'INNOVATION',
    categorySlug: 'innovation',
    publishedAt: 'Aug 18, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
  },
]

export const INSIGHTS_FORMATS: FormatInsight[] = [
  {
    title: 'In-Depth Articles',
    description: 'Long-form analysis and research',
    count: '120+ Articles',
    iconName: 'FileText',
    href: '/category/insights',
  },
  {
    title: 'Expert Interviews',
    description: 'Conversations with industry leaders',
    count: '50+ Interviews',
    iconName: 'Mic',
    href: '/leaders',
  },
  {
    title: 'Opinion Pieces',
    description: 'Fresh perspectives and bold ideas',
    count: '90+ Articles',
    iconName: 'MessageSquare',
    href: '/features',
  },
  {
    title: 'Data & Trends',
    description: 'Insights backed by numbers',
    count: '70+ Articles',
    iconName: 'BarChart3',
    href: '/category/insights',
  },
  {
    title: 'Case Studies',
    description: 'Real-world stories of success and learning',
    count: '60+ Articles',
    iconName: 'Briefcase',
    href: '/category/business-strategy',
  },
  {
    title: 'Video Insights',
    description: 'Expert conversations and visual stories',
    count: '50+ Videos',
    iconName: 'Video',
    href: '/multimedia/videos',
  },
]

