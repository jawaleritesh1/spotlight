'use client'

import { useState } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const POPULAR_SEARCHES = [
  'Artificial Intelligence',
  'Global Economy',
  'Christina Rahm',
  'Real Estate Trends',
  'Venture Capital 2026',
  'Wellness & Longevity',
]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-20 px-4 transition-opacity">
      <div className="relative w-full max-w-2xl bg-white border border-[#E8E8E2] shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b-2 border-black pb-3">
          <Search className="w-6 h-6 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, interviews, analysis, leaders..."
            className="w-full text-lg md:text-xl font-serif placeholder:font-sans placeholder:text-neutral-400 outline-none bg-transparent"
            autoFocus
          />
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((item) => (
              <button
                key={item}
                onClick={() => setQuery(item)}
                className="px-3 py-1.5 text-xs bg-[#F7F7F5] hover:bg-[#EAEAE6] text-neutral-700 transition-colors border border-[#E8E8E2]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {query && (
          <div className="mt-6 pt-4 border-t border-[#E8E8E2]">
            <p className="text-xs text-neutral-500 mb-2">Search Results for &ldquo;{query}&rdquo;</p>
            <Link
              href={`/articles/architects-of-tomorrow`}
              onClick={onClose}
              className="flex items-center justify-between p-2.5 hover:bg-[#F7F7F5] group transition-colors"
            >
              <div>
                <span className="text-xs font-semibold text-[#A67C52] uppercase tracking-wider">Leadership</span>
                <h4 className="font-serif text-sm font-medium text-neutral-900 group-hover:text-[#A67C52] transition-colors">
                  The Architects of Tomorrow: Reshaping Business & Technology
                </h4>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
