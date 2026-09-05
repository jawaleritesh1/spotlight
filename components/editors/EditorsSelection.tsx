import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ArticleItem } from '@/lib/data/mockData'

interface EditorsSelectionProps {
  primary: ArticleItem[]
  compact: ArticleItem[]
}

export default function EditorsSelection({ primary, compact }: EditorsSelectionProps) {
  return (
    <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-9 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Horizontal Line Between Title and View All */}
        <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
          <h2 className="font-serif text-lg sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
            Editor&apos;s Selection
          </h2>
          <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
          <Link
            href="/category/editors-choice"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors shrink-0 group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-Column Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: 3 Primary Cards (9 cols) */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {primary.slice(0, 3).map((item) => (
              <article key={item.id} className="group flex flex-col justify-between">
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 mb-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Category tag */}
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-neutral-500 block mb-2">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors line-clamp-2">
                    <Link href={`/articles/${item.slug}`}>{item.title}</Link>
                  </h3>
                </div>

                {/* Date & Read time */}
                <p className="text-[11px] text-neutral-400 font-sans tracking-wider uppercase mt-4">
                  {item.publishedAt}
                  {item.readingTimeMinutes && (
                    <>
                      <span className="mx-1.5">•</span>
                      <span>{item.readingTimeMinutes} Min Read</span>
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>

          {/* Right: 3 Compact Row Cards (3 cols) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between divide-y divide-[#E8E8E2] border-t lg:border-t-0 lg:border-l border-[#E8E8E2] lg:pl-8 pt-6 lg:pt-0">
            {compact.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="py-4 first:pt-0 last:pb-0 flex items-center gap-4 group"
              >
                <div className="relative w-20 h-20 shrink-0 overflow-hidden bg-neutral-200">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-[13.5px] leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors line-clamp-2">
                    <Link href={`/articles/${item.slug}`}>{item.title}</Link>
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase">
                    <span className="font-medium text-neutral-700">{item.category}</span>
                    <span className="mx-1.5">•</span>
                    <span>{item.publishedAt}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
