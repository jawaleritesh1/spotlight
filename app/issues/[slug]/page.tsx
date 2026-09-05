'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Download } from 'lucide-react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { COVER_STORY_DATA, EDITORS_PRIMARY_DATA } from '@/lib/data/mockData'

export default function IssuePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Issue Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A67C52] block">
              Digital &amp; Print Edition
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight text-neutral-900 font-normal">
              {COVER_STORY_DATA.issueTitle}
            </h1>
            <p className="font-editorial-italic text-lg text-neutral-600">
              Featuring {COVER_STORY_DATA.personName} &bull; &ldquo;{COVER_STORY_DATA.tagline}&rdquo;
            </p>
          </div>

          {/* 3D Presentation & Table of Contents */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0E0E10] text-white p-8 sm:p-12 shadow-2xl mb-16 border border-[#222226]">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 aspect-[3/4] bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden group">
                <Image
                  src={COVER_STORY_DATA.magazineCoverUrl}
                  alt="Issue Cover"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A059] font-bold block mb-1">
                  Lead Feature
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal uppercase">
                  {COVER_STORY_DATA.personName}
                </h2>
                <p className="font-editorial-italic text-lg text-neutral-300 mt-1">
                  {COVER_STORY_DATA.tagline}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href={`/articles/${COVER_STORY_DATA.storySlug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#A67C52] hover:bg-[#8E6740] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Online Edition</span>
                </Link>

                <button
                  onClick={() => alert('Digital Issue Reader downloaded for offline reading.')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:border-white text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Executive PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="font-serif text-xl uppercase tracking-[0.16em] text-neutral-900 font-medium pb-3 border-b border-[#E8E8E2]">
              In This Issue
            </h3>

            <div className="divide-y divide-[#E8E8E2]">
              {EDITORS_PRIMARY_DATA.map((article, idx) => (
                <div key={article.id} className="py-4 flex items-start justify-between gap-4 group">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A67C52]">
                      {article.category}
                    </span>
                    <h4 className="font-serif text-base text-neutral-900 group-hover:text-[#A67C52] transition-colors">
                      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                    </h4>
                    <p className="text-xs text-neutral-500 font-sans">{article.excerpt}</p>
                  </div>
                  <span className="font-serif text-xs text-neutral-400 font-semibold shrink-0">
                    Page 0{idx * 12 + 14}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
