'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, Pause, MapPin, Volume2 } from 'lucide-react'
import type { PodcastData, EventData, VideoData } from '@/lib/data/mockData'

interface MultimediaSectionProps {
  podcast: PodcastData
  event: EventData
  video: VideoData
}

export default function MultimediaSection({
  podcast,
  event,
  video,
}: MultimediaSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
          
          {/* Card 1: THE SUCCESS TALKS (Podcast) */}
          <div className="flex flex-col h-full">
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <h3 className="font-serif text-sm sm:text-base uppercase tracking-[0.18em] text-[#121214] font-medium shrink-0">
                  The Success Talks
                </h3>
              </div>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/multimedia/podcasts"
                className="group/link flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A67C52] transition-colors shrink-0"
              >
                <span>Listen Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Card Content */}
            <div className="flex-1 bg-gradient-to-b from-[#18181B] via-[#121214] to-[#0A0A0C] border border-[#27272A] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-md hover:shadow-2xl hover:border-[#C5A059]/40 transition-all duration-500">
              {/* Background ambient glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C5A059]/20 transition-all duration-700" />

              {/* Card Top: Tags & Duration */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] bg-[#C5A059]/15 border border-[#C5A059]/30 px-3 py-1">
                  <Volume2 className="w-3 h-3" />
                  Podcast
                </span>
                <span className="font-mono text-[11px] tracking-wider text-neutral-400">
                  {podcast.duration}
                </span>
              </div>

              {/* Card Middle: Episode Title & Guest Details */}
              <div className="relative z-10 my-6 space-y-5">
                <h4 className="font-serif text-xl sm:text-2xl font-normal leading-[1.3] text-white group-hover:text-[#D4AF37] transition-colors">
                  {podcast.title}
                </h4>

                {/* Guest Profile Box */}
                <div className="flex items-center gap-3.5 pt-2 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C5A059]/40 shrink-0 bg-neutral-800">
                    <Image
                      src={podcast.guestPhotoUrl}
                      alt={podcast.guestName}
                      fill
                      sizes="48px"
                      className="object-cover object-top filter contrast-105"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-200">
                      {podcast.guestName}
                    </div>
                    <div className="text-xs text-neutral-400 font-sans">
                      {podcast.guestRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom: Interactive Audio Bar */}
              <div className="relative z-10 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggleAudio}
                    className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#C5A059] text-black flex items-center justify-center group-hover:scale-105 transition-all shadow-md">
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-black" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                      )}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                      {isPlaying ? 'Playing Audio' : 'Play Episode'}
                    </span>
                  </button>

                  {/* Audio Waveform animation bars */}
                  <div className="flex items-end gap-1 h-5">
                    <span className={`w-1 bg-[#C5A059] transition-all duration-300 ${isPlaying ? 'h-5 animate-pulse' : 'h-2 opacity-40'}`} />
                    <span className={`w-1 bg-[#C5A059] transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse delay-75' : 'h-3 opacity-40'}`} />
                    <span className={`w-1 bg-[#C5A059] transition-all duration-300 ${isPlaying ? 'h-5 animate-pulse delay-150' : 'h-1.5 opacity-40'}`} />
                    <span className={`w-1 bg-[#C5A059] transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse delay-200' : 'h-2.5 opacity-40'}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: UPCOMING EVENTS */}
          <div className="flex flex-col h-full">
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <h3 className="font-serif text-sm sm:text-base uppercase tracking-[0.18em] text-[#121214] font-medium shrink-0">
                  Upcoming Events
                </h3>
              </div>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/events"
                className="group/link flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A67C52] transition-colors shrink-0"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Card Content */}
            <div className="flex-1 relative p-7 sm:p-8 text-white flex flex-col justify-between overflow-hidden group bg-neutral-900 border border-[#27272A] shadow-md hover:shadow-2xl hover:border-[#C5A059]/40 transition-all duration-500">
              <Image
                src={event.bgImageUrl}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.45]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

              {/* Card Top: Date Badge & Summit Tag */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="border border-[#C5A059] bg-black/75 backdrop-blur-sm px-3.5 py-2.5 text-center shrink-0 shadow-lg">
                  <span className="font-serif text-2xl font-bold text-white block leading-none">
                    {event.day}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block mt-1">
                    {event.month}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-bold text-white/90 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1">
                  Global Summit
                </span>
              </div>

              {/* Card Middle: Title & Subtitle */}
              <div className="relative z-10 my-6 space-y-2">
                <h4 className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-white uppercase leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {event.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed line-clamp-2">
                  {event.subtitle}
                </p>
              </div>

              {/* Card Bottom: Location & Action */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/15 text-xs">
                <span className="inline-flex items-center gap-1.5 text-neutral-300 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  {event.location}
                </span>

                <Link
                  href="/events"
                  className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-[#D4AF37] hover:text-white font-semibold transition-colors"
                >
                  <span>Register</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: VIDEOS */}
          <div className="flex flex-col h-full md:col-span-2 lg:col-span-1">
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <h3 className="font-serif text-sm sm:text-base uppercase tracking-[0.18em] text-[#121214] font-medium shrink-0">
                  Videos
                </h3>
              </div>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/multimedia/videos"
                className="group/link flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A67C52] transition-colors shrink-0"
              >
                <span>Watch All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Card Content */}
            <div className="flex-1 relative overflow-hidden group bg-black border border-[#27272A] shadow-md hover:shadow-2xl hover:border-[#C5A059]/40 transition-all duration-500 flex flex-col justify-between p-7 sm:p-8">
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top brightness-60 group-hover:scale-105 group-hover:brightness-75 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/25" />

              {/* Card Top: Video Tag & Duration */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] bg-[#C5A059]/15 backdrop-blur-md border border-[#C5A059]/30 px-3 py-1">
                  Exclusive Video
                </span>
                <span className="font-mono text-[11px] tracking-wider text-neutral-300 bg-black/50 backdrop-blur-xs px-2 py-0.5 border border-white/10">
                  {video.duration}
                </span>
              </div>

              {/* Play icon centerpiece */}
              <div className="relative z-10 flex items-center justify-center my-8">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/60 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black group-hover:border-[#C5A059] transition-all duration-300 shadow-2xl">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Card Bottom: Video Title & Action */}
              <div className="relative z-10 pt-4 border-t border-white/15 space-y-2">
                <h4 className="font-serif text-lg sm:text-xl font-normal text-white leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
                    Watch Feature
                  </span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform inline-flex items-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
