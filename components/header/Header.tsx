'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X, ChevronRight } from 'lucide-react'
import SearchModal from './SearchModal'
import SubscribeModal from './SubscribeModal'

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'FEATURES', href: '/features' },
  { label: 'LEADERS', href: '/leaders' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'INSIGHTS', href: '/insights' },
  { label: 'NEWS', href: '/category/news' },
  { label: 'CULTURE', href: '/category/culture' },
  { label: 'MAGAZINE', href: '/issues/september-2026' },
]

export default function Header() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [subscribeOpen, setSubscribeOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <header className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] sticky top-0 z-40 h-[110px]">
        {/* Top Header Bar */}
        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
          {/* Left: Mobile/Drawer Menu Button */}
          <div className="flex items-center gap-4 z-10">
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-1.5 text-neutral-800 hover:text-black hover:bg-neutral-100/60 rounded transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Center: Brand Identity (Mathematically Dead Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center z-10 pointer-events-auto">
            <Link href="/" className="inline-block group">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-[32px] tracking-[0.2em] uppercase font-normal text-[#121214] group-hover:opacity-90 transition-opacity leading-tight">
                The Spotlight Leaders
              </h1>
              <p className="text-[8.5px] sm:text-[9.5px] tracking-[0.42em] uppercase text-[#737373] font-sans font-medium mt-0.5">
                Inspiring the Future of Business
              </p>
            </Link>
          </div>

          {/* Right: Search & Subscribe CTA */}
          <div className="flex items-center gap-4 sm:gap-6 z-10">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-neutral-800 hover:text-black uppercase transition-colors"
            >
              <span className="hidden sm:inline">Search</span>
              <Search className="w-3.5 h-3.5 stroke-[2]" />
            </button>

            <button
              onClick={() => setSubscribeOpen(true)}
              className="px-3.5 sm:px-4 py-1 text-[11px] font-sans font-bold tracking-[0.18em] uppercase text-neutral-900 hover:text-[#A17A38] underline decoration-neutral-400 underline-offset-4 hover:decoration-[#A17A38] transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Nav: Editorial Categories */}
        <nav className="border-t border-[#E8E3DA] hidden md:block w-full h-[42px]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <ul className="flex items-center justify-center space-x-8 lg:space-x-12 text-[11px] tracking-[0.2em] font-sans font-semibold text-neutral-800">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href)
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`transition-colors py-1 relative ${
                        active
                          ? 'text-[#A67C52] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#A67C52]'
                          : 'hover:text-[#A67C52] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A67C52] hover:after:w-full after:transition-all after:duration-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </header>

      {/* Slide-out Navigation Drawer for Mobile & Detailed Exploration */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-[#0E0E10] text-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2E]">
                <span className="font-serif text-lg tracking-widest text-[#C5A059]">
                  THE SPOTLIGHT LEADERS
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-[10px] tracking-widest text-[#C5A059] uppercase font-bold">
                  Editorial Sections
                </p>
                <div className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between py-2.5 text-sm tracking-wider hover:text-[#C5A059] transition-colors border-b border-white/5"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-500" />
                    </Link>
                  ))}
                  <Link
                    href="/studio"
                    target="_blank"
                    className="flex items-center justify-between py-2.5 text-sm tracking-wider text-[#C5A059] font-medium border-b border-white/5 hover:underline"
                  >
                    <span>Sanity CMS Studio</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2A2E] space-y-4">
              <button
                onClick={() => {
                  setDrawerOpen(false)
                  setSubscribeOpen(true)
                }}
                className="w-full py-2.5 bg-[#A67C52] text-white text-xs uppercase tracking-widest font-semibold"
              >
                Subscribe Now
              </button>
              <p className="text-[11px] text-neutral-500 text-center">
                &copy; 2026 The Spotlight Leaders. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <SubscribeModal isOpen={subscribeOpen} onClose={() => setSubscribeOpen(false)} />
    </>
  )
}
