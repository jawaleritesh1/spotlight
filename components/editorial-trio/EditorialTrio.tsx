import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { VoiceItem } from '@/lib/data/mockData'

interface EditorialTrioProps {
  latestNews: Array<{ time: string; title: string; category: string; slug: string }>
  trendingWeek: Array<{ rank: string; title: string; slug: string }>
  voices: VoiceItem[]
}

export default function EditorialTrio({
  latestNews,
  trendingWeek,
  voices,
}: EditorialTrioProps) {
  return (
    <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-9 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: LATEST NEWS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3">
              <h3 className="font-serif text-base uppercase tracking-[0.14em] text-[#121214] font-medium shrink-0">
                Latest News
              </h3>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/category/news"
                className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A67C52] transition-colors shrink-0"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="divide-y divide-[#E2DDD5]">
              {latestNews.map((news, index) => (
                <article key={index} className="py-3.5 first:pt-0 last:pb-0 group">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-neutral-400 font-medium shrink-0">
                      {news.time}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-[13.5px] leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors">
                        <Link href={`/articles/${news.slug}`}>{news.title}</Link>
                      </h4>
                      <span className="text-[9.5px] uppercase tracking-wider text-neutral-400 font-bold block">
                        {news.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Column 2: TRENDING THIS WEEK */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3">
              <h3 className="font-serif text-base uppercase tracking-[0.14em] text-[#121214] font-medium shrink-0">
                Trending This Week
              </h3>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/category/trending"
                className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A67C52] transition-colors shrink-0"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="divide-y divide-[#E2DDD5]">
              {trendingWeek.map((item) => (
                <article key={item.rank} className="py-3.5 first:pt-0 last:pb-0 group">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-base text-neutral-400 group-hover:text-[#A67C52] transition-colors shrink-0">
                      {item.rank}
                    </span>
                    <h4 className="font-serif text-[13.5px] leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors">
                      <Link href={`/articles/${item.slug}`}>{item.title}</Link>
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Column 3: VOICES */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 pb-3">
              <h3 className="font-serif text-base uppercase tracking-[0.14em] text-[#121214] font-medium shrink-0">
                Voices
              </h3>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/voices"
                className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A67C52] transition-colors shrink-0"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {voices.map((voice) => (
                <div key={voice.id} className="flex flex-col items-center text-center group">
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 overflow-hidden bg-neutral-200 mb-2.5 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={voice.avatarUrl}
                      alt={voice.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>

                  <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-neutral-900">
                    {voice.name}
                  </h4>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                    {voice.role}
                  </span>

                  <p className="font-editorial-italic text-xs text-neutral-700 leading-snug italic px-1">
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
