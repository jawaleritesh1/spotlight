'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Award,
  Lightbulb,
  Leaf,
  BarChart2,
  Users,
  Heart,
  Building2,
  MoreHorizontal,
  FileText,
  Mic,
  MessageSquare,
  BarChart3,
  Briefcase,
  Video,
  Check,
  Quote,
} from 'lucide-react'
import {
  POPULAR_INSIGHTS,
  LATEST_INSIGHTS_GRID,
  INSIGHTS_FORMATS,
  type ArticleItem,
} from '@/lib/data/mockData'

const CATEGORIES = [
  { id: 'all', label: 'All Insights', icon: Sparkles },
  { id: 'leadership', label: 'Leadership', icon: Award },
  { id: 'technology', label: 'Technology', icon: Cpu },
  { id: 'business-strategy', label: 'Business Strategy', icon: TrendingUp },
  { id: 'innovation', label: 'Innovation', icon: Lightbulb },
  { id: 'sustainability', label: 'Sustainability', icon: Leaf },
  { id: 'economy', label: 'Economy', icon: BarChart2 },
  { id: 'work-culture', label: 'Work & Culture', icon: Users },
  { id: 'healthcare', label: 'Healthcare', icon: Heart },
  { id: 'real-estate', label: 'Real Estate', icon: Building2 },
  { id: 'more', label: 'More', icon: MoreHorizontal },
]

export default function InsightsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

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

  // Filter latest insights based on selected category tab
  const filteredArticles =
    selectedCategory === 'all' || selectedCategory === 'more'
      ? LATEST_INSIGHTS_GRID
      : LATEST_INSIGHTS_GRID.filter(
          (article) =>
            article.categorySlug === selectedCategory ||
            article.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
        )

  const displayedArticles =
    filteredArticles.length > 0 ? filteredArticles : LATEST_INSIGHTS_GRID

  return (
    <div className="w-full bg-[#FBFBFA] min-h-screen text-[#121214]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full border-b border-[#E2DDD5] overflow-hidden bg-gradient-to-b from-[#F7F5F0] to-[#FBFBFA]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6339]">
                Insights
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.08] tracking-tight text-[#121214]">
                Ideas Today. A<br className="hidden sm:inline" /> Brighter Tomorrow.
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed max-w-xl">
                Expert perspectives, in-depth analysis and thought-provoking ideas to help you navigate a changing world.
              </p>

              <div className="pt-2">
                <a
                  href="#featured-section"
                  className="inline-flex items-center gap-2.5 bg-[#8C6339] hover:bg-[#734F2B] text-white px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span>Explore Insights</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2DDD5] max-w-lg">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#121214]">
                    1000+
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-0.5">
                    Insight Articles
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#121214]">
                    250+
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-0.5">
                    Expert Contributors
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#121214]">
                    50+
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-0.5">
                    Topics Covered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual with Quote Overlay (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden shadow-xl border border-[#E2DDD5] bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
                  alt="Ideas Drive Change Workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

                {/* Editorial Quote Card Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                  <div className="flex justify-end">
                    <span className="font-serif text-4xl text-[#C5A059] leading-none">“</span>
                  </div>

                  <div className="space-y-4">
                    <p className="font-serif text-lg sm:text-xl font-normal leading-snug text-neutral-100">
                      Insight is the bridge between information and transformation.
                    </p>
                    <div className="w-12 h-[1.5px] bg-[#C5A059]" />
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold">
                      <span>People</span>
                      <span>·</span>
                      <span>Ideas</span>
                      <span>·</span>
                      <span>Perspectives</span>
                      <span>·</span>
                      <span>Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TOPIC FILTER BAR */}
      <section className="w-full bg-[#FAF9F5] border-b border-[#E2DDD5] py-4 sticky top-[110px] z-30 shadow-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center justify-center gap-1.5 px-4 py-2.5 min-w-[84px] sm:min-w-[94px] transition-all shrink-0 rounded-xs ${
                    isActive
                      ? 'bg-[#8C6339] text-white shadow-sm'
                      : 'bg-white hover:bg-[#F0EBE1] text-neutral-700 border border-[#E5DFD5]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8C6339]'}`} />
                  <span className="text-[10.5px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap">
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED INSIGHT + SIDEBAR (NEWSLETTER & POPULAR) */}
      <section id="featured-section" className="w-full py-12 lg:py-16 border-b border-[#E2DDD5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 8 Cols: FEATURED INSIGHT */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Header Bar */}
              <div className="flex items-center gap-3 pb-3 mb-4">
                <h2 className="font-serif text-sm sm:text-base uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
                  Featured Insight
                </h2>
                <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
                <Link
                  href="/features"
                  className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#8C6339] transition-colors shrink-0"
                >
                  <span>View All Featured</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Featured Banner Card */}
              <div className="relative min-h-[420px] sm:min-h-[480px] p-7 sm:p-10 text-white flex flex-col justify-between overflow-hidden group bg-neutral-900 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
                  alt="The Next Decade of Global Opportunity"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.45]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />

                {/* Top Category Badge */}
                <div className="relative z-10">
                  <span className="inline-block text-[10px] uppercase tracking-[0.24em] font-bold text-[#D4AF37] bg-black/40 backdrop-blur-xs border border-[#C5A059]/40 px-3 py-1">
                    Business Strategy
                  </span>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 my-6 space-y-4 max-w-2xl">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-tight group-hover:text-[#D4AF37] transition-colors">
                    The Next Decade of Global Opportunity
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">
                    As industries evolve and new markets emerge, leaders must rethink strategies, embrace innovation and build for a more resilient future.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/articles/next-decade-global-opportunity"
                      className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#D4AF37] hover:text-black px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all shadow-sm"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-neutral-700 overflow-hidden relative border border-white/40">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                        alt="Rohan Mehta"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-neutral-200 font-medium">By Rohan Mehta</span>
                  </div>

                  <div className="flex items-center gap-3 text-neutral-300 text-[11px]">
                    <span>Sep 02, 2026</span>
                    <span>·</span>
                    <span>8 Min Read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: NEWSLETTER & POPULAR INSIGHTS */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Box 1: THE INSIGHTS NEWSLETTER */}
              <div className="bg-[#FAF9F5] border border-[#E2DDD5] p-6 sm:p-7 shadow-xs">
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#8C6339] block mb-2">
                  The Insights Newsletter
                </span>
                <h3 className="font-serif text-xl font-normal text-[#121214] leading-snug mb-2">
                  Fresh perspectives. Straight to your inbox.
                </h3>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed mb-4">
                  Get the latest insights, expert opinions and exclusive content delivered weekly.
                </p>

                {subscribed ? (
                  <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Thank you for subscribing to The Insights!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full bg-white border border-[#D6CFC3] px-3.5 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#8C6339]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#8C6339] hover:bg-[#734F2B] text-white py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                    >
                      Subscribe
                    </button>
                    <label className="flex items-start gap-2 pt-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 accent-[#8C6339]"
                        required
                      />
                      <span className="text-[10px] text-neutral-500 leading-tight">
                        I agree to receive communications from The Success World.
                      </span>
                    </label>
                  </form>
                )}
              </div>

              {/* Box 2: POPULAR INSIGHTS */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-[#E2DDD5]">
                  <h3 className="font-serif text-sm uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
                    Popular Insights
                  </h3>
                </div>

                <div className="divide-y divide-[#EAE6DF]">
                  {POPULAR_INSIGHTS.map((item) => (
                    <Link
                      key={item.rank}
                      href={`/articles/${item.slug}`}
                      className="flex items-start gap-4 py-3.5 group"
                    >
                      <span className="font-serif text-2xl font-light text-neutral-400 group-hover:text-[#8C6339] transition-colors shrink-0 w-8">
                        {item.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm font-medium text-neutral-900 group-hover:text-[#8C6339] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-[10.5px] text-neutral-400 font-sans mt-1 block">
                          {item.readingTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. LATEST INSIGHTS (GRID) + MAGAZINE PROMO */}
      <section className="w-full py-12 lg:py-16 border-b border-[#E2DDD5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 8 Cols: LATEST INSIGHTS GRID (4x2) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 pb-3">
                <h2 className="font-serif text-sm sm:text-base uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
                  Latest Insights
                </h2>
                <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
                <Link
                  href="/category/insights"
                  className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#8C6339] transition-colors shrink-0"
                >
                  <span>View All Insights</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4 Columns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {displayedArticles.slice(0, 8).map((article) => (
                  <article key={article.id} className="group flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 mb-3 shadow-2xs">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#8C6339] block mb-1">
                        {article.category}
                      </span>

                      <h3 className="font-serif text-xs sm:text-[13.5px] font-medium text-neutral-900 group-hover:text-[#8C6339] transition-colors leading-snug line-clamp-2">
                        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-neutral-400 font-sans mt-3 pt-2 border-t border-[#EAE6DF]">
                      <span>{article.publishedAt}</span>
                      <span>·</span>
                      <span>{article.readingTimeMinutes} Min Read</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: SUCCESS WORLD MAGAZINE PROMO */}
            <div className="lg:col-span-4">
              <div className="bg-[#0F0F11] text-white p-7 sm:p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden group shadow-lg border border-[#27272A]">
                {/* Background lighting */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#C5A059] block">
                    The
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-white uppercase leading-snug">
                    Success World Magazine
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-1">
                    In-depth stories. Exclusive insights. Real impact.
                  </p>
                </div>

                {/* 3D Magazine Cover Mockup */}
                <div className="relative z-10 my-6 flex items-center justify-center">
                  <div className="relative w-44 aspect-[3/4] shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-neutral-700 overflow-hidden bg-neutral-900">
                    <Image
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop"
                      alt="The Success World Magazine Cover"
                      fill
                      sizes="180px"
                      className="object-cover filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                    <div className="absolute bottom-3 inset-x-3 text-center">
                      <span className="font-serif text-[11px] tracking-widest uppercase text-white font-medium block">
                        THE SUCCESS WORLD
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <Link
                    href="/issues/september-2026"
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all"
                  >
                    <span>Read Latest Issue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PANORAMIC MID-PAGE BANNER */}
      <section className="w-full relative bg-neutral-900 text-white overflow-hidden py-20 lg:py-28">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
          alt="Different perspectives. A bigger picture."
          fill
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/70" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-white leading-tight tracking-tight">
                Different perspectives.<br />A bigger picture.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-lg">
                Explore long-form stories, expert analysis and fresh ideas that challenge conventional thinking.
              </p>
              <div className="pt-2">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 bg-[#8C6339] hover:bg-[#A67C52] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all"
                >
                  <span>Browse All Insights</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Quote (5 cols) */}
            <div className="lg:col-span-5 space-y-3 lg:pl-8 lg:border-l border-white/20">
              <p className="font-serif text-lg sm:text-xl text-neutral-100 italic leading-relaxed">
                “ Progress happens when curious minds ask better questions. ”
              </p>
              <div className="w-12 h-[1.5px] bg-[#C5A059]" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. INSIGHTS BY FORMAT */}
      <section className="w-full bg-[#FAF9F5] py-14 lg:py-18">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 pb-3 mb-8">
            <h2 className="font-serif text-sm sm:text-base uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
              Insights by Format
            </h2>
            <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSIGHTS_FORMATS.map((format) => {
              const iconMap: Record<string, typeof FileText> = {
                FileText,
                Mic,
                MessageSquare,
                BarChart3,
                Briefcase,
                Video,
              }
              const Icon = iconMap[format.iconName] || FileText
              return (
                <Link
                  key={format.title}
                  href={format.href}
                  className="bg-white border border-[#E2DDD5] p-5 flex flex-col justify-between hover:border-[#8C6339] hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center text-[#8C6339] group-hover:bg-[#8C6339] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-neutral-900 group-hover:text-[#8C6339] transition-colors leading-snug">
                      {format.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-sans leading-snug">
                      {format.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[10.5px] font-semibold text-[#8C6339] tracking-wider uppercase">
                    <span>{format.count}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
