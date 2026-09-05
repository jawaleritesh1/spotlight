'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ArticleItem } from '@/lib/data/mockData'

interface HeroSectionProps {
  initialLead: ArticleItem
  railItems: ArticleItem[]
}

const STORY_DETAILS: Record<
  number,
  { headline: string[]; subtitle: string; imageUrl: string }
> = {
  0: {
    headline: ['THE ARCHITECTS', 'OF TOMORROW'],
    subtitle: 'Leaders reshaping business,\ntechnology and human potential.',
    imageUrl: '/images/hero-manhattan.jpg',
  },
  1: {
    headline: ['THE NEW ERA OF', 'WELLNESS'],
    subtitle: 'Preventive healthcare and biotechnology\ntransforming human longevity.',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop',
  },
  2: {
    headline: ['BUILDING BEYOND', 'BORDERS'],
    subtitle: 'The rise of multinational ventures\nin emerging economic corridors.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
  },
  3: {
    headline: ['THE FUTURE', 'OF CAPITAL'],
    subtitle: 'Sovereign wealth and private equity\nnavigating global macroeconomic shifts.',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
  },
  4: {
    headline: ['INNOVATION', 'WITHOUT LIMITS'],
    subtitle: 'Artificial intelligence and robotics\naccelerating industrial productivity.',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
  },
}

export default function HeroSection({ initialLead, railItems }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeStory = STORY_DETAILS[activeIndex] || STORY_DETAILS[0]
  const currentItem = railItems[activeIndex] || initialLead

  return (
    <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] overflow-hidden lg:h-[calc(100vh-110px)]">
      {/* 100% Full-Bleed Container - No max-width, no outer margins */}
      <div className="w-full h-full flex flex-col lg:flex-row items-stretch">
        {/* Left Column: Full-width background image with zero gap (~75% on desktop) */}
        <div className="relative w-full lg:w-[75%] xl:w-[76%] flex flex-col justify-between p-5 sm:p-8 lg:p-10 xl:p-12 min-h-[420px] sm:min-h-[480px]">
          {/* Full-bleed background image covering 100% of left column */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <Image
              src={activeStory.imageUrl}
              alt={currentItem.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 76vw"
              className="object-cover object-[78%_center] lg:object-[82%_center] transition-all duration-700"
            />
            {/* Atmospheric gradient: Bottom-to-top on mobile with transparent top, Left-to-right on desktop */}
            <div className="absolute inset-0 w-full sm:w-[55%] lg:w-[42%] bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/85 via-50% to-transparent sm:bg-gradient-to-r sm:from-[#FBFBFA]/90 sm:via-[#FBFBFA]/40 sm:to-transparent pointer-events-none" />
          </div>

          {/* Main Editorial Typography */}
          <div className="relative z-10 max-w-xl pt-2 sm:pt-0">
            {/* Category Tag */}
            <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.28em] text-[#636363] font-sans font-semibold mb-2 sm:mb-3">
              FEATURE STORY
            </p>

            {/* Grand Headline (2 lines) */}
            <h2 className="font-serif text-[26px] xs:text-[30px] sm:text-[42px] md:text-[52px] lg:text-[60px] xl:text-[64px] text-[#121214] font-normal uppercase leading-[1.08] sm:leading-[1.0] tracking-[-0.015em] mb-2.5 sm:mb-4 break-words">
              {activeStory.headline.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {/* Subtitle */}
            <p className="font-serif text-[13.5px] sm:text-lg lg:text-[19px] text-[#333333] font-light leading-snug sm:leading-[1.35] mb-4 sm:mb-5 max-w-md whitespace-pre-line">
              {activeStory.subtitle}
            </p>

            {/* Rectangular Ochre CTA Button */}
            <div>
              <Link
                href={`/articles/${currentItem.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-[10.5px] sm:text-[11px] font-sans font-bold tracking-[0.2em] uppercase rounded-none transition-colors duration-200 shadow-xs group"
              >
                <span>READ FEATURE</span>
                <span className="text-sm font-light transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Bottom Carousel Indicator: 01 / 05 with 5 Segment Dashes */}
          <div className="relative z-10 pt-4 sm:pt-8 lg:pt-10">
            <div className="flex items-center gap-1.5 font-serif text-[12px] mb-2">
              <span className="font-bold text-[#141414]">0{activeIndex + 1}</span>
              <span className="text-neutral-400 font-light">/</span>
              <span className="text-neutral-400 font-light">0{railItems.length}</span>
            </div>

            {/* 5 Distinct Horizontal Line Segments */}
            <div className="flex items-center gap-2">
              {railItems.map((_, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-[2.5px] transition-all duration-300 ${
                      isActive
                        ? 'w-8 sm:w-9 bg-[#A17A38]'
                        : 'w-7 sm:w-8 bg-[#DCD7CE] hover:bg-neutral-400'
                    }`}
                    aria-label={`Slide 0${idx + 1}`}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Mobile Swipeable Strip (< lg) + Desktop 01-05 Stories Rail (lg:) */}
        <div className="w-full lg:w-[25%] xl:w-[24%] bg-[#FAF8F5] border-t lg:border-t-0 lg:border-l border-[#E2DDD5]">
          {/* Mobile Swipeable Card Rail (< lg) */}
          <div className="lg:hidden p-3.5 bg-[#FAF8F5]">
            <div className="flex items-center justify-between pb-2 px-1">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#767676]">
                Featured Stories
              </span>
              <span className="text-[9.5px] font-sans font-medium text-neutral-400">
                Tap or swipe to switch
              </span>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar snap-x snap-mandatory">
              {railItems.map((item, index) => {
                const isActive = activeIndex === index
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`shrink-0 w-[230px] snap-start p-3 bg-white border transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#B88E4B] shadow-xs ring-1 ring-[#B88E4B]'
                        : 'border-[#E2DDD5] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`font-serif text-lg leading-none shrink-0 ${
                          isActive ? 'text-[#B88E4B] font-bold' : 'text-neutral-400'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div className="space-y-0.5 min-w-0">
                        <p className="font-serif text-xs font-semibold text-neutral-900 line-clamp-2 leading-snug">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-neutral-500 font-sans tracking-normal">
                          <span>{item.category}</span>
                          <span className="mx-1">•</span>
                          <span>{item.readingTimeMinutes || 6}m</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop Rail (>= lg) */}
          <div className="hidden lg:flex lg:flex-col h-full justify-between">
            {railItems.map((item, index) => {
              const isActive = activeIndex === index
              return (
                <div key={item.id} className="flex-1 flex flex-col justify-center">
                  <div
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 sm:px-6 py-2.5 lg:py-3.5 xl:py-4 cursor-pointer transition-all duration-200 flex-1 flex flex-col justify-center border-l-2 ${
                      isActive
                        ? 'border-[#B88E4B] bg-[#F4EFE6]/50'
                        : 'border-transparent hover:bg-[#F5F2EB]/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Big Serif Number (01, 02, etc.) */}
                      <span
                        className={`font-serif text-xl lg:text-[23px] leading-none shrink-0 transition-colors ${
                          isActive ? 'text-[#B88E4B]' : 'text-[#333333]'
                        }`}
                      >
                        {item.trendingRank || `0${index + 1}`}
                      </span>

                      {/* Headline & Metadata */}
                      <div className="space-y-0.5">
                        <Link
                          href={`/articles/${item.slug}`}
                          className="font-serif text-[13px] lg:text-[14px] font-semibold tracking-normal text-[#141414] hover:text-[#A17A38] transition-colors leading-[1.25] block"
                        >
                          {item.title}
                        </Link>
                        <p className="text-[11px] text-[#767676] font-sans tracking-normal pt-0.5">
                          <span>{item.category}</span>
                          <span className="mx-1.5">•</span>
                          <span>{item.readingTimeMinutes || 6} min read</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Explicit Horizontal Inset Separator Line between items */}
                  {index < railItems.length - 1 && (
                    <div className="w-[88%] mx-auto border-b border-[#DDD7CD]" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
