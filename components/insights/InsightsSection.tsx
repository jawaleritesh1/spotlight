'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react'
import type { ArticleItem } from '@/lib/data/mockData'

interface InsightsSectionProps {
  insights: ArticleItem[]
}

export default function InsightsSection({ insights }: InsightsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-9 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Line Between Title and Right Actions */}
        <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
          <h2 className="font-serif text-lg sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
            Insights &amp; Analysis
          </h2>

          <div className="flex-1 h-[1px] bg-[#E2DDD5]" />

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/category/insights"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-1">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center transition-colors text-neutral-700 hover:text-black"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center transition-colors text-neutral-700 hover:text-black"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5-Card Slider Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {insights.map((item) => (
            <article
              key={item.id}
              className="min-w-[240px] sm:min-w-[260px] md:min-w-[270px] flex-shrink-0 snap-start group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 mb-3.5">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="270px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 block mb-1.5">
                  {item.category}
                </span>

                <h3 className="font-serif text-sm sm:text-[15px] font-medium leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors line-clamp-2">
                  <Link href={`/articles/${item.slug}`}>{item.title}</Link>
                </h3>
              </div>

              {item.readingTimeMinutes && (
                <p className="text-[10px] text-neutral-400 font-sans tracking-widest uppercase mt-4">
                  {item.readingTimeMinutes} Min Read
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
