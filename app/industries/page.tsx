'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Cpu,
  BarChart3,
  Activity,
  Building2,
  Car,
  Zap,
  GraduationCap,
  ShoppingBag,
} from 'lucide-react'

export default function IndustriesPage() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const industriesList = [
    {
      num: '01',
      name: 'Technology',
      description: 'Exploring innovations, digital transformation and emerging technologies reshaping the future.',
      articleCount: '120+ ARTICLES',
      imageUrl: '/images/perspective-tech.jpg',
      slug: 'technology',
      icon: Cpu,
    },
    {
      num: '02',
      name: 'Finance',
      description: 'Markets, investments, fintech and the strategies driving the global economy forward.',
      articleCount: '150+ ARTICLES',
      imageUrl: '/images/explore-finance.jpg',
      slug: 'finance',
      icon: BarChart3,
    },
    {
      num: '03',
      name: 'Healthcare',
      description: 'Advancements in medicine, health tech and improving lives through innovation and care.',
      articleCount: '110+ ARTICLES',
      imageUrl: '/images/explore-healthcare-v2.jpg',
      slug: 'healthcare',
      icon: Activity,
    },
    {
      num: '04',
      name: 'Real Estate',
      description: 'Trends, opportunities and insights shaping the evolving real estate landscape.',
      articleCount: '80+ ARTICLES',
      imageUrl: '/images/explore-real-estate.jpg',
      slug: 'real-estate',
      icon: Building2,
    },
    {
      num: '05',
      name: 'Automotive',
      description: 'The future of mobility, electric vehicles, and innovations driving smarter transportation.',
      articleCount: '70+ ARTICLES',
      imageUrl: '/images/explore-automotive.jpg',
      slug: 'automotive',
      icon: Car,
    },
    {
      num: '06',
      name: 'Energy',
      description: 'Sustainable energy, renewables, and solutions powering a cleaner tomorrow.',
      articleCount: '65+ ARTICLES',
      imageUrl: '/images/perspective-energy.jpg',
      slug: 'energy',
      icon: Zap,
    },
    {
      num: '07',
      name: 'Education',
      description: 'New-age learning, edtech innovations and building the leaders of tomorrow.',
      articleCount: '80+ ARTICLES',
      imageUrl: '/images/explore-education.jpg',
      slug: 'education',
      icon: GraduationCap,
    },
    {
      num: '08',
      name: 'Retail',
      description: 'Consumer trends, retail innovation and the future of shopping experiences.',
      articleCount: '60+ ARTICLES',
      imageUrl: '/images/explore-retail-v2.jpg',
      slug: 'retail',
      icon: ShoppingBag,
    },
  ]

  const deeperPerspectives = [
    {
      category: 'TECHNOLOGY',
      title: "AI Beyond the Hype: What's Actually Real",
      readingTime: '8 MIN READ',
      imageUrl: '/images/perspective-tech.jpg',
      slug: 'ai-beyond-the-hype-whats-actually-real',
    },
    {
      category: 'FINANCE',
      title: 'The Future of Global Investments',
      readingTime: '7 MIN READ',
      imageUrl: '/images/perspective-finance.jpg',
      slug: 'the-future-of-global-investments',
    },
    {
      category: 'HEALTHCARE',
      title: 'Biotechnology Changing Lives',
      readingTime: '6 MIN READ',
      imageUrl: '/images/perspective-healthcare.jpg',
      slug: 'biotechnology-changing-lives',
    },
    {
      category: 'REAL ESTATE',
      title: 'Smart Cities of the Future',
      readingTime: '6 MIN READ',
      imageUrl: '/images/perspective-real-estate.jpg',
      slug: 'smart-cities-of-the-future',
    },
    {
      category: 'ENERGY',
      title: 'The Global Shift to Clean Energy',
      readingTime: '7 MIN READ',
      imageUrl: '/images/perspective-energy.jpg',
      slug: 'the-global-shift-to-clean-energy',
    },
    {
      category: 'AUTOMOTIVE',
      title: "Electric Vehicles: What's Next?",
      readingTime: '7 MIN READ',
      imageUrl: '/images/perspective-automotive.jpg',
      slug: 'electric-vehicles-whats-next',
    },
  ]


  const growthData = [
    { name: 'Technology', pct: 28 },
    { name: 'Finance', pct: 22 },
    { name: 'Healthcare', pct: 16 },
    { name: 'Real Estate', pct: 12 },
    { name: 'Energy', pct: 10 },
    { name: 'Others', pct: 12 },
  ]

  const voices = [
    {
      name: 'Anita Sharma',
      role: 'Founder, HealTech',
      industry: 'Healthcare',
      quote: 'Innovation is the currency of the future.',
      imageUrl: '/images/leader-anita-sharma.jpg',
    },
    {
      name: 'David Park',
      role: 'CEO, FutureWorks',
      industry: 'Technology',
      quote: 'The future belongs to those who build with conviction.',
      imageUrl: '/images/leader-david-park.jpg',
    },
    {
      name: 'Marcus Lee',
      role: 'Partner, Elevate Capital',
      industry: 'Finance',
      quote: "Sustainability is no longer a choice, it's a responsibility.",
      imageUrl: '/images/leader-marcus-lee.jpg',
    },
    {
      name: 'Isabella Moretti',
      role: 'Founder, GreenFuture',
      industry: 'Real Estate',
      quote: 'Great spaces create greater possibilities.',
      imageUrl: '/images/leader-isabella-moretti.jpg',
    },
    {
      name: 'Rohan Mehta',
      role: 'CTO, BrightGrid',
      industry: 'Energy',
      quote: 'The energy transition is the economic transition.',
      imageUrl: '/images/leader-rohan-mehta.jpg',
    },
    {
      name: 'Elena Vance',
      role: 'Director, Vanguard Retail',
      industry: 'Retail',
      quote: 'Consumer trust is the ultimate foundation of enduring market leadership.',
      imageUrl: '/images/leader-elena-vance.jpg',
    },
  ]

  const latestNews = [
    {
      time: '09:42 AM',
      title: 'Global markets respond to new economic policy shift',
      category: 'FINANCE',
      slug: 'global-markets-respond-economic-policy-shift',
    },
    {
      time: '08:18 AM',
      title: 'New AI model improves healthcare diagnostics',
      category: 'HEALTHCARE',
      slug: 'new-ai-model-improves-healthcare-diagnostics',
    },
    {
      time: '07:55 AM',
      title: 'Major investment boost for renewable-energy start-ups',
      category: 'ENERGY',
      slug: 'major-investment-boost-renewable-energy-startups',
    },
    {
      time: '07:20 AM',
      title: 'Autonomous vehicles move closer to mainstream adoption',
      category: 'AUTOMOTIVE',
      slug: 'autonomous-vehicles-move-closer-mainstream-adoption',
    },
    {
      time: '06:45 AM',
      title: 'Edtech platforms see record user growth in 2026',
      category: 'EDUCATION',
      slug: 'edtech-platforms-record-growth-2026',
    },
    {
      time: '06:10 AM',
      title: 'Retail brands embrace AI for personalized shopping',
      category: 'RETAIL',
      slug: 'retail-brands-embrace-ai-personalized-shopping',
    },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !agreed) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
      setAgreed(false)
    }, 4000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* SECTION 1: HERO SECTION (Editorial 2-Column Masthead)        */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Typography & Navigation (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#A17A38]" />
                  <p className="text-[10.5px] uppercase tracking-[0.28em] text-[#A17A38] font-sans font-bold">
                    GLOBAL SECTOR INTELLIGENCE
                  </p>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#121214] font-normal leading-[1.06] tracking-tight">
                  Insights Across<br />Every Industry.
                </h1>

                <p className="font-serif text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                  From frontier technologies and healthcare innovations to energy transitions
                  and global financial markets—explore comprehensive analysis, research-driven
                  reporting, and executive perspectives redefining commerce.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#explore-industries"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-[11px] font-sans font-bold tracking-[0.22em] uppercase rounded-none transition-colors group shadow-xs"
                  >
                    <span>EXPLORE ALL SECTORS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#industry-spotlight"
                    className="text-[11px] font-sans font-semibold uppercase tracking-wider text-neutral-600 hover:text-[#A17A38] transition-colors py-2"
                  >
                    Industry Spotlight &amp; Data →
                  </a>
                </div>

                <div className="pt-4 border-t border-[#EAE5DC] flex flex-wrap items-center gap-4 sm:gap-6 text-[10.5px] font-sans uppercase tracking-widest text-neutral-400">
                  <span>Quarterly Sector Dossier</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Curated by The Editorial Board</span>
                </div>
              </div>

              {/* Right Column: Editorial Visual Spread (6 cols) */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-[2px] shadow-xl border border-[#E2DDD5] bg-neutral-200 group">
                  <Image
                    src="/images/hero-manhattan.jpg"
                    alt="Global Industries & City Architecture"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

                  {/* Editorial Caption Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#E0C285] font-sans font-bold block mb-1">
                        EXECUTIVE DISPATCH
                      </span>
                      <p className="font-serif text-sm sm:text-base text-white/95 font-light leading-snug max-w-sm">
                        Metropolitan commerce &amp; the evolving architecture of international trade.
                      </p>
                    </div>
                    <span className="text-[9.5px] uppercase tracking-widest text-white/60 font-sans shrink-0 hidden sm:block">
                      Editorial Archives
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: EXPLORE INDUSTRIES (2 Rows of 4 Columns Grid)     */}
        {/* ============================================================ */}
        <section id="explore-industries" className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-12 lg:py-16">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <h2 className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.14em] text-[#141414] uppercase">
                EXPLORE INDUSTRIES
              </h2>
              <Link
                href="/category/industries"
                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-neutral-600 hover:text-black transition-colors group"
              >
                <span>VIEW ALL INDUSTRIES</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* 8 Industries in 2 Rows of 4 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
              {industriesList.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/category/${ind.slug}`}
                  className="group flex flex-row items-stretch transition-all duration-300"
                >
                  {/* Left: Narrow Vertical Image Strip */}
                  <div className="relative w-[38%] sm:w-[40%] min-h-[210px] overflow-hidden rounded-[1px] bg-neutral-100 shrink-0">
                    <Image
                      src={ind.imageUrl}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 640px) 40vw, (max-width: 1280px) 20vw, 12vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right: Content Column */}
                  <div className="pl-4 sm:pl-5 pr-1 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top: Large Numeral & Line Icon */}
                      <div className="flex items-start justify-between">
                        <span className="font-serif text-3xl sm:text-[34px] text-[#7A7265] font-light leading-none">
                          {ind.num}
                        </span>
                        <ind.icon className="w-5 h-5 text-[#9E8050] stroke-[1.25]" />
                      </div>

                      {/* Industry Title */}
                      <h3 className="font-serif text-[17px] sm:text-[18px] font-normal text-[#121214] mt-2 mb-2 leading-snug group-hover:text-[#9E8050] transition-colors">
                        {ind.name}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] sm:text-[11.5px] text-neutral-600 font-sans leading-relaxed line-clamp-3">
                        {ind.description}
                      </p>
                    </div>

                    {/* Bottom: Article Count & View Insights */}
                    <div className="pt-3 sm:pt-4">
                      <span className="text-[9.5px] font-sans font-bold tracking-wider uppercase text-[#141414] block mb-1">
                        {ind.articleCount}
                      </span>
                      <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#A17A38] group-hover:text-[#121214] inline-flex items-center gap-1 transition-colors">
                        <span>VIEW INSIGHTS</span>
                        <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: DEEPER PERSPECTIVES FROM EACH INDUSTRY            */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-12 lg:py-16">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.14em] text-[#141414] uppercase">
                DEEPER PERSPECTIVES FROM EACH INDUSTRY
              </h2>
              <Link
                href="/category/insights"
                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-neutral-600 hover:text-black transition-colors group"
              >
                <span>VIEW ALL INSIGHTS</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* 6 Full-Bleed Image Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4">
              {deeperPerspectives.map((card) => (
                <Link
                  key={card.slug}
                  href={`/articles/${card.slug}`}
                  className="relative aspect-[3/4] overflow-hidden rounded-[2px] group block bg-neutral-950 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Full-bleed Background Image */}
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark Vignette Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />

                  {/* Floating Content Over Photo */}
                  <div className="absolute inset-0 p-4 sm:p-4.5 flex flex-col justify-end">
                    {/* Golden Pill Tag */}
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full border border-[#D4AF37]/80 bg-black/45 backdrop-blur-[2px] text-[8.5px] uppercase tracking-[0.18em] font-sans font-semibold text-[#D4AF37]">
                        {card.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-serif text-[13.5px] sm:text-[14.5px] font-medium text-white leading-snug group-hover:text-[#F3D68A] transition-colors mb-3.5">
                      {card.title}
                    </h3>

                    {/* Bottom Metadata Bar */}
                    <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-[9px] uppercase tracking-wider font-sans font-semibold text-neutral-300">
                      <span className="group-hover:text-white transition-colors">
                        {card.readingTime} →
                      </span>
                      <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: INDUSTRY SPOTLIGHT & DATA SNAPSHOT                 */}
        {/* ============================================================ */}
        <section id="industry-spotlight" className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-10 lg:py-14">
          <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 lg:px-6">
            {/* Top Row: Two Large Editorial Cards taking full expansive size with minimal gap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3.5 mb-8 sm:mb-10">
              {/* Card 1: Industry Spotlight */}
              <div className="bg-[#F5F2EB] border border-[#E2DDD5] overflow-hidden rounded-[2px] flex flex-col sm:flex-row items-stretch min-h-[380px] lg:min-h-[420px]">
                <div className="sm:w-[54%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] uppercase tracking-[0.24em] text-neutral-500 font-sans font-bold block mb-2.5">
                      INDUSTRY SPOTLIGHT
                    </span>
                    <h3 className="font-serif text-2xl sm:text-[32px] lg:text-[36px] text-[#121214] font-normal leading-[1.08] mb-3.5">
                      Technology at the Core of Transformation
                    </h3>
                    <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed max-w-md">
                      From artificial intelligence to quantum computing, explore how technology
                      continues to accelerate innovation and redefine industries.
                    </p>
                  </div>

                  <div className="pt-8 mt-auto">
                    <Link
                      href="/category/technology"
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#A17A38] hover:text-[#7E5933] transition-colors group"
                    >
                      <span>EXPLORE TECHNOLOGY</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="sm:w-[46%] relative min-h-[280px] sm:min-h-full overflow-hidden bg-neutral-900 border-t sm:border-t-0 sm:border-l border-[#E2DDD5]/60">
                  <Image
                    src="/images/tech-spotlight-control-room.jpg"
                    alt="Technology at the Core of Transformation"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Card 2: Data Snapshot */}
              <div className="bg-[#F5F2EB] border border-[#E2DDD5] p-6 sm:p-8 lg:p-10 flex flex-col justify-between rounded-[2px] min-h-[380px] lg:min-h-[420px]">
                <div>
                  <span className="text-[10.5px] uppercase tracking-[0.24em] text-neutral-500 font-sans font-bold block mb-2.5">
                    DATA SNAPSHOT
                  </span>
                  <h3 className="font-serif text-2xl sm:text-[32px] lg:text-[36px] text-[#121214] font-normal leading-[1.08] mb-7">
                    Industries Driving Global Growth
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Left: Progress Bars */}
                    <div className="sm:col-span-7 space-y-4">
                      {growthData.map((item) => (
                        <div key={item.name} className="flex items-center text-xs sm:text-[13px] font-sans">
                          <span className="w-22 sm:w-26 text-neutral-700 font-normal shrink-0">
                            {item.name}
                          </span>
                          <div className="flex-1 h-[2.5px] bg-[#DDD7CD] mx-3 rounded-full overflow-hidden flex items-center">
                            <div
                              className="h-full bg-[#B88E4B]"
                              style={{ width: `${item.pct * 2.8}%` }}
                            />
                          </div>
                          <span className="w-9 text-right text-neutral-800 font-semibold shrink-0">
                            {item.pct}%
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right: SVG Donut Chart */}
                    <div className="sm:col-span-5 flex justify-center items-center">
                      <svg viewBox="0 0 100 100" className="w-36 h-36 sm:w-42 sm:h-42 transform -rotate-90">
                        {/* 28% Technology */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#303438" strokeWidth="18" strokeDasharray="66.85 238.76" strokeDashoffset="0" />
                        {/* 22% Finance */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#B88E4B" strokeWidth="18" strokeDasharray="52.53 238.76" strokeDashoffset="-66.85" />
                        {/* 16% Healthcare */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#65737C" strokeWidth="18" strokeDasharray="38.20 238.76" strokeDashoffset="-119.38" />
                        {/* 12% Real Estate */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C29F65" strokeWidth="18" strokeDasharray="28.65 238.76" strokeDashoffset="-157.58" />
                        {/* 10% Energy */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#1C2023" strokeWidth="18" strokeDasharray="23.88 238.76" strokeDashoffset="-186.23" />
                        {/* 12% Others */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#D9D2C7" strokeWidth="18" strokeDasharray="28.65 238.76" strokeDashoffset="-210.11" />
                        {/* Center Hole */}
                        <circle cx="50" cy="50" r="26" fill="#F5F2EB" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Voices Across Industries (High Visibility, 2 Rows of 3 Cards) */}
            <div className="pt-8 sm:pt-10 border-t border-[#EAE5DC]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#A17A38] font-sans font-bold block mb-1.5">
                    EXECUTIVE PERSPECTIVES • THE SPOTLIGHT LEADERS VOICES
                  </span>
                  <div className="flex items-center gap-3">
                    <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.12em] text-[#121214] font-medium">
                      Voices Across Industries
                    </h2>
                    <span className="text-[10px] uppercase tracking-widest font-sans font-bold px-2.5 py-0.5 rounded-full bg-[#A17A38]/10 text-[#A17A38] border border-[#A17A38]/25">
                      6 Leaders
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden lg:block h-[1px] w-48 bg-[#E2DDD5]" />
                  <Link
                    href="/voices"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors group shrink-0"
                  >
                    <span>View All Experts</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* 2 Rows of 3 Cards Grid (Bigger cards, higher visibility, richer interior design) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {voices.map((voice) => (
                  <div
                    key={voice.name}
                    className="bg-white border border-[#E2DDD5] overflow-hidden rounded-[2px] flex items-stretch min-h-[220px] sm:min-h-[240px] group hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-500"
                  >
                    {/* Portrait Photo (Flush full bleed on left, top, bottom) */}
                    <div className="relative w-[38%] sm:w-[40%] shrink-0 overflow-hidden bg-neutral-200">
                      <Image
                        src={voice.imageUrl}
                        alt={voice.name}
                        fill
                        sizes="(max-width: 768px) 40vw, 20vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                      {/* Industry tag replacing leader tag at bottom of image */}
                      <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-[9px] uppercase tracking-[0.16em] text-white/95 font-sans font-semibold rounded-[1px] border border-white/10 flex items-center gap-1.5 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E0C285]" />
                        <span>{voice.industry}</span>
                      </div>
                    </div>

                    {/* Rich Interior Content */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-w-0 bg-[#FFFFFF]">
                      <div>
                        {/* Top: Triple-sized sculptural quote symbol */}
                        <div className="mb-2">
                          <span className="font-serif text-6xl sm:text-7xl text-[#C5A059]/30 leading-[0.6] select-none font-normal block">
                            &ldquo;
                          </span>
                        </div>

                        {/* Quote Text */}
                        <p className="font-serif text-[13.5px] sm:text-[14.5px] leading-[1.45] text-[#141414] my-2 italic line-clamp-3">
                          &ldquo;{voice.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Bylines & Profile Action */}
                      <div className="pt-3 border-t border-[#EAE5DC] flex items-end justify-between mt-auto">
                        <div>
                          <h4 className="font-sans text-[12px] sm:text-[13px] font-bold text-[#141414] group-hover:text-[#A17A38] transition-colors leading-snug">
                            {voice.name}
                          </h4>
                          <p className="text-[10px] text-neutral-500 font-sans mt-0.5 leading-tight">
                            {voice.role}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1 text-[10px] font-sans font-bold uppercase tracking-wider text-[#A17A38] group-hover:translate-x-1 transition-transform shrink-0">
                          <span>Profile</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: LATEST INDUSTRY NEWS (Featured Story + 6 News Grid)*/}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
                Latest Industry News
              </h2>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/category/news"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors shrink-0 group"
              >
                <span>View All News</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Featured News Card (4.5 cols) */}
              <div className="lg:col-span-4 relative overflow-hidden rounded-[2px] min-h-[300px] flex flex-col justify-end p-6 group">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="Green Buildings are the Future of Real Estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="relative z-10 space-y-2 text-white">
                  <span className="px-2 py-0.5 bg-[#A17A38] text-white text-[9px] font-sans font-bold tracking-wider uppercase inline-block">
                    REAL ESTATE
                  </span>
                  <h3 className="font-serif text-xl font-normal leading-snug">
                    <Link href="/articles/sustainable-real-estate-buildings-better-tomorrow" className="hover:text-[#C5A059] transition-colors">
                      Green Buildings are the Future of Real Estate
                    </Link>
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-sans pt-1">
                    6 MIN READ
                  </p>
                </div>
              </div>

              {/* Right: 6 Timestamped News Grid (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {latestNews.map((news) => (
                  <article key={news.slug} className="space-y-1.5 border-b sm:border-b-0 pb-3 sm:pb-0">
                    <span className="font-mono text-xs text-neutral-400 font-medium block">
                      {news.time}
                    </span>
                    <h4 className="font-serif text-[13.5px] font-medium text-[#141414] leading-snug hover:text-[#A17A38] transition-colors">
                      <Link href={`/articles/${news.slug}`}>{news.title}</Link>
                    </h4>
                    <span className="text-[9.5px] uppercase tracking-wider text-[#A17A38] font-bold block pt-1">
                      {news.category}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7: STAY AHEAD ACROSS INDUSTRIES (Newsletter Banner)  */}
        {/* ============================================================ */}
        <section className="w-full bg-[#2A2925] text-white border-b border-[#222226] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Form (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  Stay ahead across industries.
                </h2>

                <p className="text-sm text-neutral-300 font-sans max-w-lg">
                  Subscribe to get the latest insights, trends and analysis delivered
                  straight to your inbox every week.
                </p>

                {subscribed ? (
                  <div className="p-4 bg-emerald-900/40 border border-emerald-500 text-emerald-200 text-xs font-sans font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Thank you for subscribing to Industries Weekly!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                    <div className="flex flex-col sm:flex-row items-stretch gap-2 max-w-lg">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 bg-white/10 border border-neutral-600 px-4 py-3 text-xs font-sans text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-[#C5A059]"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-xs font-sans font-bold tracking-[0.2em] uppercase rounded-none transition-colors shrink-0"
                      >
                        SUBSCRIBE
                      </button>
                    </div>

                    <label className="flex items-center gap-2 text-[11px] text-neutral-400 font-sans cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="rounded-xs border-neutral-600 text-[#A17A38] focus:ring-[#A17A38]"
                      />
                      <span>I agree to receive communications from The Spotlight Leaders.</span>
                    </label>
                  </form>
                )}
              </div>

              {/* Right: Magazine Flatlay (4 cols) */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-full max-w-[320px] aspect-[4/3] overflow-hidden rounded-[2px] shadow-2xl border border-white/10">
                  <Image
                    src="/images/features-editorial-spread.jpg"
                    alt="The Spotlight Leaders Magazine"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center filter contrast-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
