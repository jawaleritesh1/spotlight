import Image from 'next/image'
import Link from 'next/link'
import type { CoverStoryData } from '@/lib/data/mockData'

interface CoverStorySectionProps {
  data: CoverStoryData
}

export default function CoverStorySection({ data }: CoverStorySectionProps) {
  return (
    <section className="w-full bg-[#0D0D0F] text-white relative overflow-hidden border-b border-[#222226]">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-9 lg:py-10">
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]">
          {/* Left Column: Editorial Information */}
          <div className="relative z-10 w-full lg:w-[55%] xl:w-[50%] space-y-4 py-2">
            {/* Header / Issue Date with horizontal accent line */}
            <div className="space-y-1.5">
              <p className="text-[10.5px] uppercase tracking-[0.26em] text-[#CFCFCF] font-sans font-semibold">
                THE COVER STORY
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A059] font-medium shrink-0">
                  {data.issueTitle}
                </span>
                <div className="h-[1px] w-24 sm:w-36 bg-[#2B2B30]" />
              </div>
            </div>

            {/* Headline (Title Case Serif) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-white font-normal leading-[1.08] tracking-tight">
              {data.personName}
            </h2>

            {/* Subtitle (Italic Serif Title Case) */}
            <p className="font-editorial-italic text-xl sm:text-2xl lg:text-[25px] text-[#CFCFCF] font-light leading-[1.2] tracking-wide">
              Building the Future<br className="hidden sm:inline" /> of Human Wellness
            </p>

            {/* Designation Badges */}
            <div className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.24em] font-sans text-[#8C8C94] font-medium pt-0.5">
              FOUNDER <span className="mx-2 text-neutral-600">•</span> ENTREPRENEUR{' '}
              <span className="mx-2 text-neutral-600">•</span> INNOVATOR
            </div>

            {/* Rectangular Outline CTA Button */}
            <div className="pt-2">
              <Link
                href={`/articles/${data.storySlug}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent hover:bg-[#C5A059]/10 text-white border border-[#A67C52]/70 hover:border-[#C5A059] text-[9.5px] sm:text-[10px] font-sans font-semibold tracking-[0.22em] uppercase rounded-none transition-colors duration-200 group"
              >
                <span>READ THE COVER STORY</span>
                <span className="text-xs font-light transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column / Center-Right: Portrait blending into the dark background */}
          <div className="relative w-full lg:w-[48%] xl:w-[50%] h-[260px] sm:h-[300px] lg:h-[320px] flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            {/* Background portrait with subtle left shadow fade */}
            <div className="relative w-full h-full max-w-[500px]">
              <Image
                src="/images/christina-rahm-banner.jpg"
                alt={data.personName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-right lg:object-[85%_top] filter contrast-[1.03]"
              />
              {/* Soft gradient to seamlessly merge portrait with dark background on the left */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0D0F] to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
