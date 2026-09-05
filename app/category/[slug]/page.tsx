import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import {
  EDITORS_PRIMARY_DATA,
  EDITORS_COMPACT_DATA,
  INSIGHTS_DATA,
  HERO_RAIL_DATA,
} from '@/lib/data/mockData'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const title = slug.replace(/-/g, ' ').toUpperCase()

  const allArticles = [
    ...EDITORS_PRIMARY_DATA,
    ...EDITORS_COMPACT_DATA,
    ...INSIGHTS_DATA,
    ...HERO_RAIL_DATA,
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pb-8 mb-10 border-b border-[#E8E8E2] text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A67C52] block">
              Editorial Dossier
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider text-neutral-900 font-normal">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-sans">
              Exclusive reporting, strategic analysis, and executive profiles in {title.toLowerCase()}.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.slice(0, 6).map((item) => (
              <article key={item.id} className="group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 mb-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 block mb-2">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-lg leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors">
                    <Link href={`/articles/${item.slug}`}>{item.title}</Link>
                  </h3>

                  {item.excerpt && (
                    <p className="text-xs text-neutral-600 font-sans mt-2 line-clamp-2">
                      {item.excerpt}
                    </p>
                  )}
                </div>

                <p className="text-[10.5px] text-neutral-400 uppercase tracking-wider mt-4">
                  {item.publishedAt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
