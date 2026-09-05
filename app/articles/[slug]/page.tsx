import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { getArticleBySlug } from '@/lib/services/contentService'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 lg:py-16">
        <article className="max-w-[1000px] mx-auto px-4 sm:px-6">
          {/* Back link & Category */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8E8E2]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Editions</span>
            </Link>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A67C52]">
              {article.category}
            </span>
          </div>

          {/* Article Masthead */}
          <div className="space-y-4 text-center max-w-3xl mx-auto mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal uppercase text-neutral-950 leading-[1.12]">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="font-editorial-italic text-lg sm:text-xl text-neutral-600 leading-relaxed font-light">
                {article.subtitle}
              </p>
            )}

            {/* Author Byline & Meta */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-500">
              {article.author && (
                <div className="flex items-center gap-2">
                  {article.author.avatarUrl && (
                    <div className="relative w-7 h-7 rounded-full overflow-hidden">
                      <Image
                        src={article.author.avatarUrl}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="font-semibold text-neutral-900">{article.author.name}</span>
                  <span className="text-neutral-400">({article.author.role})</span>
                </div>
              )}

              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.publishedAt}</span>
              </span>

              {article.readingTimeMinutes && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readingTimeMinutes} min read</span>
                </span>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {article.imageUrl && (
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 mb-12 shadow-md">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div className="max-w-2xl mx-auto font-serif text-neutral-800 text-lg leading-relaxed space-y-6">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#A67C52]">
              {article.excerpt ||
                'In an epoch marked by unprecedented economic restructuring and systemic transformation, executive decision-makers are discarding twentieth-century playbooks.'}
            </p>

            <p>
              Capital allocators, institutional investors, and startup founders are converging around a new paradigm—one where technological sovereignty, regenerative practices, and operational resilience outweigh speculative acceleration.
            </p>

            <blockquote className="border-l-2 border-[#A67C52] pl-6 py-2 my-8 font-editorial-italic text-2xl text-neutral-900 font-light">
              &ldquo;The true currency of next-generation enterprise is not simply throughput, but the structural integrity of its enduring purpose.&rdquo;
            </blockquote>

            <p>
              As the global business ecosystem navigates shifting geopolitical corridors and the ubiquitous integration of algorithmic intelligence, the leaders who thrive will be those who construct decentralized resilience into their corporate DNA.
            </p>

            {/* Social Share & Actions */}
            <div className="pt-10 mt-10 border-t border-[#E8E8E2] flex items-center justify-between text-xs text-neutral-500 font-sans">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-300 hover:border-black transition-colors">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-300 hover:border-black transition-colors">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Bookmark</span>
                </button>
              </div>

              <span className="uppercase tracking-widest text-[10px]">
                The Success World &bull; Issue 2026
              </span>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
