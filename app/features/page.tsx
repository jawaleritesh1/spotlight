import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header/Header'
import IssueAndNewsletter from '@/components/newsletter/IssueAndNewsletter'
import Footer from '@/components/footer/Footer'
import {
  BookOpen,
  Mic,
  TrendingUp,
  FileText,
  Lightbulb,
  Layers,
  Mail,
  Play,
  Target,
  Users,
  Share2,
  Globe,
  ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Our Features | The Spotlight Leaders',
  description:
    'A complete ecosystem of content and experiences designed to inform, inspire and create impact for leaders and innovators.',
}

export default function FeaturesPage() {
  const featurePillars = [
    {
      title: 'IN-DEPTH FEATURES',
      description:
        'Award-winning, long-form stories on leadership, innovation, strategy and transformation.',
      icon: BookOpen,
    },
    {
      title: 'LEADER INTERVIEWS',
      description:
        'Exclusive conversations with visionaries, founders and industry pioneers.',
      icon: Mic,
    },
    {
      title: 'INDUSTRY INSIGHTS',
      description:
        'Expert analysis and data-driven perspectives across key industries and markets.',
      icon: TrendingUp,
    },
    {
      title: 'NEWS & TRENDS',
      description:
        'Timely business news, market updates and global trends that matter.',
      icon: FileText,
    },
    {
      title: 'THOUGHT LEADERSHIP',
      description:
        'Opinion pieces and expert viewpoints on the future of business and society.',
      icon: Lightbulb,
    },
    {
      title: 'MAGAZINE EDITIONS',
      description:
        'Premium digital magazine issues, beautifully designed for an immersive reading experience.',
      icon: Layers,
    },
  ]

  const contentFormats = [
    {
      title: 'ARTICLES & STORIES',
      description:
        'Well-researched, beautifully written stories on the topics that shape business today.',
      imageUrl: '/images/format-article.jpg',
      icon: FileText,
    },
    {
      title: 'PODCASTS',
      description:
        'In-depth conversations with leaders and experts on our exclusive shows.',
      imageUrl: '/images/format-podcast.jpg',
      icon: Mic,
    },
    {
      title: 'NEWSLETTERS',
      description:
        'Curated insights and top stories delivered straight to your inbox.',
      imageUrl: '/images/format-newsletter.jpg',
      icon: Mail,
    },
    {
      title: 'VIDEOS',
      description:
        "Interviews, explainers and exclusive video content you won't find anywhere else.",
      imageUrl: '/images/format-video.jpg',
      icon: Play,
    },
    {
      title: 'DIGITAL MAGAZINE',
      description:
        'High-quality digital editions for a premium reading experience on any device.',
      imageUrl: '/images/format-magazine.jpg',
      icon: BookOpen,
    },
  ]

  const whyItMatters = [
    {
      title: 'STAY AHEAD',
      description:
        'Get the insights you need to stay informed and ahead of the curve.',
      icon: Target,
    },
    {
      title: 'BE INSPIRED',
      description:
        'Learn from the journeys of exceptional leaders and innovators.',
      icon: Users,
    },
    {
      title: 'BUILD CONNECTIONS',
      description:
        'Connect with a community of ambitious professionals and changemakers.',
      icon: Share2,
    },
    {
      title: 'CREATE IMPACT',
      description:
        'Use knowledge and ideas to build a better future for all.',
      icon: Globe,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* SECTION 1: HERO BANNER (Executive Skyline Lounge)            */}
        {/* ============================================================ */}
        <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden border-b border-[#E2DDD5]">
          {/* Background Photograph */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/features-hero-lounge.jpg"
              alt="The Spotlight Leaders Executive Lounge"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.78]"
            />
            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              {/* Gold Outline Pill */}
              <div className="inline-block mb-5 sm:mb-6">
                <span className="text-[10px] uppercase tracking-[0.26em] text-[#C5A059] font-sans font-semibold border border-[#C5A059]/60 px-3.5 py-1.5 rounded-[2px] bg-black/30 backdrop-blur-xs">
                  WHAT WE OFFER
                </span>
              </div>

              {/* Grand Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] text-white font-normal leading-[1.08] tracking-tight mb-5">
                Powerful Stories.<br />Real Impact.
              </h1>

              {/* Subtitle */}
              <p className="font-serif text-base sm:text-lg lg:text-[19px] text-[#E0E0E0] font-light leading-relaxed max-w-xl">
                The Spotlight Leaders delivers intelligent, insightful and inspiring content
                for leaders, entrepreneurs and changemakers shaping the future.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: OUR FEATURES (Ecosystem Grid)                     */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-4 space-y-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.14em] text-[#121214] font-medium">
                    Our Features
                  </h2>
                  <div className="h-[2px] w-12 bg-[#A17A38] mt-3" />
                </div>

                <p className="text-sm text-neutral-600 font-sans leading-relaxed max-w-sm pt-2">
                  A complete ecosystem of content and experiences designed to inform,
                  inspire and create impact.
                </p>

                <div className="pt-4">
                  <Link
                    href="/category/magazine"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-[11px] font-sans font-bold tracking-[0.22em] uppercase rounded-none transition-colors group shadow-xs"
                  >
                    <span>SUBSCRIBE NOW</span>
                    <span className="text-sm font-light transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: 2x3 Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {featurePillars.map((pillar) => {
                  const Icon = pillar.icon
                  return (
                    <div key={pillar.title} className="space-y-2.5 group">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-neutral-700 stroke-[1.6] group-hover:text-[#A17A38] transition-colors" />
                        <h3 className="font-serif text-xs uppercase tracking-[0.16em] font-semibold text-[#141414] leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-[12px] text-neutral-500 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: EDITORIAL EXCELLENCE                              */}
        {/* ============================================================ */}
        <section className="w-full bg-[#F4EFE6] border-b border-[#E2DDD5] py-14 lg:py-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading, Description & Metrics (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.12em] text-[#121214] font-medium leading-[1.12]">
                    Editorial<br />Excellence
                  </h2>
                  <div className="h-[2px] w-12 bg-[#A17A38] mt-3" />
                </div>

                <p className="text-sm text-neutral-700 font-sans leading-relaxed max-w-md">
                  Our editorial team is committed to accuracy, depth and integrity. Every story
                  is researched, fact-checked and crafted to deliver real value.
                </p>

                {/* 3 Metrics in a row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#DED7CB]">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121214] block leading-none">
                      200+
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium block mt-1.5">
                      Expert Contributors
                    </span>
                  </div>

                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121214] block leading-none">
                      50+
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium block mt-1.5">
                      Industries Covered
                    </span>
                  </div>

                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121214] block leading-none">
                      10K+
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium block mt-1.5">
                      Stories Published
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Printed Magazine Spread & Cover Mockup (7 cols) */}
              <div className="lg:col-span-7 flex items-center justify-center">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] shadow-xl border border-[#DDD5C7] group">
                  <Image
                    src="/images/features-editorial-spread.jpg"
                    alt="The Spotlight Leaders Editorial Spread & Printed Magazine"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: CONTENT FORMATS                                   */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with full-width horizontal rule */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-4 sm:gap-6 mb-2">
                <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.14em] text-[#121214] font-medium shrink-0">
                  Content Formats
                </h2>
                <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 font-sans">
                Diverse formats for every kind of reader and listener.
              </p>
            </div>

            {/* 5 Column Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {contentFormats.map((format) => {
                const Icon = format.icon
                return (
                  <div
                    key={format.title}
                    className="bg-white border border-[#E8E3DA] p-4 flex flex-col justify-between group hover:shadow-md transition-shadow duration-300"
                  >
                    <div>
                      {/* Card Photo Container */}
                      <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                        <Image
                          src={format.imageUrl}
                          alt={format.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Icon Badge */}
                      <div className="flex justify-center -mt-8 mb-3 relative z-10">
                        <div className="w-9 h-9 rounded-full bg-white border border-[#E2DDD5] shadow-sm flex items-center justify-center text-neutral-700 group-hover:text-[#A17A38] group-hover:border-[#A17A38] transition-colors">
                          <Icon className="w-4 h-4 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="text-center space-y-1.5">
                        <h3 className="font-serif text-xs uppercase tracking-[0.14em] font-semibold text-[#141414]">
                          {format.title}
                        </h3>
                        <p className="text-[11px] text-neutral-500 font-sans leading-relaxed">
                          {format.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: WHY IT MATTERS (Luxury Dark Section)               */}
        {/* ============================================================ */}
        <section className="w-full bg-[#0E0E10] text-white border-b border-[#222226] py-16 lg:py-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
              {/* Column 1: Intro & Community CTA */}
              <div className="space-y-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.14em] text-white font-normal leading-tight">
                    Why It<br />Matters
                  </h2>
                  <div className="h-[2px] w-12 bg-[#C5A059] mt-3" />
                </div>

                <p className="text-xs sm:text-[13px] text-neutral-400 font-sans leading-relaxed">
                  We go beyond reporting. We connect ideas, people and opportunities to drive
                  meaningful change.
                </p>

                <div className="pt-2">
                  <Link
                    href="/category/leaders"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#A17A38] hover:bg-[#8D682E] text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase rounded-none transition-colors group"
                  >
                    <span>JOIN OUR COMMUNITY</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Columns 2-5: Core Pillars with Gold Icons */}
              {whyItMatters.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="space-y-3 pt-1">
                    <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 bg-[#161619] flex items-center justify-center text-[#C5A059]">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <h3 className="font-serif text-xs uppercase tracking-[0.18em] font-semibold text-white">
                      {pillar.title}
                    </h3>

                    <p className="text-[11.5px] text-neutral-400 font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: THE WEEK IN BUSINESS (Newsletter)                 */}
        {/* ============================================================ */}
        <IssueAndNewsletter />
      </main>

      <Footer />
    </div>
  )
}
