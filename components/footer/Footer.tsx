import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E0E10] text-white pt-16 pb-12 border-t border-[#222226]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#222226]">
          {/* Column 1: Brand & Social (3.5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.16em] text-white font-normal">
                The Spotlight Leaders
              </h2>
            </Link>

            <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
              Inspiring the future of business through stories, insights and leadership across global markets.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#C5A059] flex items-center justify-center text-neutral-400 hover:text-[#C5A059] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#C5A059] flex items-center justify-center text-neutral-400 hover:text-[#C5A059] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#C5A059] flex items-center justify-center text-neutral-400 hover:text-[#C5A059] transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#C5A059] flex items-center justify-center text-neutral-400 hover:text-[#C5A059] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/category/features" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/category/leaders" className="hover:text-white transition-colors">Leaders</Link>
              </li>
              <li>
                <Link href="/category/industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/category/insights" className="hover:text-white transition-colors">Insights</Link>
              </li>
              <li>
                <Link href="/category/news" className="hover:text-white transition-colors">News</Link>
              </li>
              <li>
                <Link href="/issues/september-2026" className="hover:text-white transition-colors">Magazine</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition-colors">Partnerships</Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-white transition-colors">Advertise</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: LEGAL (1.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
              Legal
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: MAGAZINE SUBSCRIBE BOX (2 cols) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                The Spotlight Leaders Magazine
              </h3>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Subscribe to the magazine and never miss an issue.
              </p>
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors font-semibold"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="relative w-20 aspect-[3/4] bg-[#1a1a1d] border border-neutral-700 overflow-hidden shadow-lg mt-2">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                alt="Magazine Cover"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright & Sanity Studio link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>&copy; 2026 The Spotlight Leaders. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/studio" target="_blank" className="hover:text-[#C5A059] transition-colors">
              Editorial Studio (Sanity CMS)
            </Link>
            <span>•</span>
            <span>Inspiring the Future of Business</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
