'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  Lightbulb,
  Sparkles,
  Cpu,
  Heart,
  TrendingUp,
  Leaf,
  Megaphone,
  Check,
} from 'lucide-react'

export default function LeadersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [selectedExpertise, setSelectedExpertise] = useState('All Expertise')
  const [selectedRole, setSelectedRole] = useState('All Roles')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const featuredLeaders = [
    {
      id: 'christina-rahm',
      name: 'Christina Rahm, PhD',
      role: 'Founder & CEO, Cymbiotika',
      badge: 'WELLNESS',
      bio: 'Building the future of human wellness through science, innovation and purpose.',
      imageUrl: '/images/christina-rahm-banner.jpg',
      slug: 'christina-rahm-building-the-future-of-human-wellness',
    },
    {
      id: 'david-park',
      name: 'David Park',
      role: 'CEO, FutureWave',
      badge: 'TECHNOLOGY',
      bio: 'Leading technology transformations that empower businesses.',
      imageUrl: '/images/leader-david-park.jpg',
      slug: 'david-park-futurewave-technology-transformations',
    },
    {
      id: 'anita-sharma',
      name: 'Anita Sharma',
      role: 'Founder, HealTech',
      badge: 'HEALTHCARE',
      bio: 'Making healthcare accessible, affordable and effective for all.',
      imageUrl: '/images/leader-anita-sharma.jpg',
      slug: 'anita-sharma-healtech-healthcare-access',
    },
    {
      id: 'marcus-lee',
      name: 'Marcus Lee',
      role: 'Managing Partner, Elevate Capital',
      badge: 'FINANCE',
      bio: 'Investing in ideas that have the potential to change the world.',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      slug: 'marcus-lee-elevate-capital-investing-in-ideas',
    },
    {
      id: 'isabella-moretti',
      name: 'Isabella Moretti',
      role: 'Founder, GreenFuture',
      badge: 'SUSTAINABILITY',
      bio: 'Creating sustainable solutions for a better, cleaner tomorrow.',
      imageUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      slug: 'isabella-moretti-greenfuture-sustainable-solutions',
    },
  ]

  const expertiseList = [
    { title: 'Innovation', count: '120 Leaders', icon: Lightbulb },
    { title: 'Entrepreneurship', count: '200 Leaders', icon: Sparkles },
    { title: 'Technology', count: '150 Leaders', icon: Cpu },
    { title: 'Healthcare', count: '110 Leaders', icon: Heart },
    { title: 'Finance', count: '140 Leaders', icon: TrendingUp },
    { title: 'Leadership', count: '160 Leaders', icon: Users },
    { title: 'Sustainability', count: '90 Leaders', icon: Leaf },
    { title: 'Marketing', count: '80 Leaders', icon: Megaphone },
  ]

  const spotlightStories = [
    {
      date: 'SEP 02, 2026',
      title: 'The Art of Purposeful Leadership',
      category: 'LEADERSHIP',
      readingTime: '6 MIN READ',
      imageUrl:
        'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80',
      slug: 'the-art-of-purposeful-leadership',
    },
    {
      date: 'AUG 28, 2026',
      title: 'Building Companies That Last',
      category: 'ENTREPRENEURSHIP',
      readingTime: '7 MIN READ',
      imageUrl:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      slug: 'building-companies-that-last',
    },
    {
      date: 'AUG 24, 2026',
      title: 'Innovation in Healthcare',
      category: 'HEALTHCARE',
      readingTime: '5 MIN READ',
      imageUrl:
        'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80',
      slug: 'innovation-in-healthcare',
    },
    {
      date: 'AUG 20, 2026',
      title: 'Sustainability as a Business Strategy',
      category: 'SUSTAINABILITY',
      readingTime: '6 MIN READ',
      imageUrl:
        'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      slug: 'sustainability-as-a-business-strategy',
    },
    {
      date: 'AUG 15, 2026',
      title: 'The Future of Investing',
      category: 'FINANCE',
      readingTime: '7 MIN READ',
      imageUrl:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      slug: 'the-future-of-investing',
    },
  ]

  const industriesList = [
    {
      name: 'Technology',
      count: '150 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      slug: 'technology',
    },
    {
      name: 'Healthcare',
      count: '110 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      slug: 'healthcare',
    },
    {
      name: 'Finance',
      count: '140 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      slug: 'finance',
    },
    {
      name: 'Real Estate',
      count: '90 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      slug: 'real-estate',
    },
    {
      name: 'Automotive',
      count: '70 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80',
      slug: 'automotive',
    },
    {
      name: 'Education',
      count: '80 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80',
      slug: 'education',
    },
    {
      name: 'Energy',
      count: '65 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
      slug: 'energy',
    },
    {
      name: 'Retail',
      count: '85 Leaders',
      imageUrl:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
      slug: 'retail',
    },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !agreed) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
      setAgreed(false)
    }, 4000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* SECTION 1: HERO SECTION (Editorial 2-Column Masthead)        */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Vision (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#A17A38]" />
                  <p className="text-[10.5px] uppercase tracking-[0.28em] text-[#A17A38] font-sans font-bold">
                    LEADERSHIP &amp; EXECUTIVE VISION
                  </p>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#121214] font-normal leading-[1.06] tracking-tight">
                  The Minds<br />Shaping Tomorrow.
                </h1>

                <p className="font-serif text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                  Inspiring dialogues, candid perspectives, and masterclasses in strategic resilience
                  from the visionaries, founders, and innovators directing today&apos;s global enterprise.
                </p>

                <div className="border-l-2 border-[#A17A38] pl-4 py-1 italic font-editorial-italic text-sm sm:text-base text-neutral-700 max-w-lg">
                  &ldquo;True leadership does not follow the momentum of the market; it creates the gravity that pulls the future forward.&rdquo;
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#featured-leaders"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-[11px] font-sans font-bold tracking-[0.22em] uppercase rounded-none transition-colors group shadow-xs"
                  >
                    <span>EXPLORE PROFILES</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#spotlight-leaders"
                    className="text-[11px] font-sans font-semibold uppercase tracking-wider text-neutral-600 hover:text-[#A17A38] transition-colors py-2"
                  >
                    Executive Spotlights →
                  </a>
                </div>

                <div className="pt-4 border-t border-[#EAE5DC] flex flex-wrap items-center gap-4 sm:gap-6 text-[10.5px] font-sans uppercase tracking-widest text-neutral-400">
                  <span>Executive Leadership Series</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Curated by The Success World</span>
                </div>
              </div>

              {/* Right Column: Executive Portrait Spread (5 cols) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-[2px] shadow-xl border border-[#E2DDD5] bg-neutral-200 group">
                  <Image
                    src="/images/leaders-hero-portrait.jpg"
                    alt="Distinguished Business Leader"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                  {/* Editorial Caption Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex flex-col justify-end">
                    <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#E0C285] font-sans font-bold block mb-1">
                      SPOTLIGHT CONVERSATION
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal leading-snug">
                      Architects of Sustainable Enterprise
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-white/60 font-sans mt-1">
                      Executive Series • Global Edition
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: SEARCH & FILTER BAR                               */}
        {/* ============================================================ */}
        <section className="w-full bg-[#F5F2EB]/60 border-b border-[#E2DDD5] py-4">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
              {/* Search input with icon */}
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search leaders by name, company or keyword..."
                  className="w-full bg-white border border-[#DDD7CD] px-4 py-2.5 pr-10 text-xs font-sans text-neutral-800 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#A17A38] transition-colors"
                />
                <Search className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Industry Dropdown */}
              <div className="w-full lg:w-44">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-white border border-[#DDD7CD] px-3 py-2.5 text-xs font-sans text-neutral-800 focus:outline-hidden focus:border-[#A17A38] cursor-pointer"
                >
                  <option>All Industries</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Sustainability</option>
                </select>
              </div>

              {/* Expertise Dropdown */}
              <div className="w-full lg:w-44">
                <select
                  value={selectedExpertise}
                  onChange={(e) => setSelectedExpertise(e.target.value)}
                  className="w-full bg-white border border-[#DDD7CD] px-3 py-2.5 text-xs font-sans text-neutral-800 focus:outline-hidden focus:border-[#A17A38] cursor-pointer"
                >
                  <option>All Expertise</option>
                  <option>Innovation</option>
                  <option>Leadership</option>
                  <option>Investing</option>
                  <option>Transformation</option>
                </select>
              </div>

              {/* Role Dropdown */}
              <div className="w-full lg:w-36">
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-white border border-[#DDD7CD] px-3 py-2.5 text-xs font-sans text-neutral-800 focus:outline-hidden focus:border-[#A17A38] cursor-pointer"
                >
                  <option>All Roles</option>
                  <option>Founder / CEO</option>
                  <option>Managing Partner</option>
                  <option>C-Suite Executive</option>
                </select>
              </div>

              {/* Location Dropdown */}
              <div className="w-full lg:w-36">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-white border border-[#DDD7CD] px-3 py-2.5 text-xs font-sans text-neutral-800 focus:outline-hidden focus:border-[#A17A38] cursor-pointer"
                >
                  <option>All Locations</option>
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia Pacific</option>
                  <option>Global</option>
                </select>
              </div>

              {/* Filter Button */}
              <button className="inline-flex items-center justify-center gap-2 bg-[#121214] hover:bg-neutral-800 text-white px-5 py-2.5 text-xs uppercase font-sans font-semibold tracking-wider transition-colors shrink-0">
                <span>FILTER</span>
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: FEATURED LEADERS (5 Carousel Cards)               */}
        {/* ============================================================ */}
        <section id="featured-leaders" className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with full-width horizontal rule */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
                Featured Leaders
              </h2>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/category/leaders"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors shrink-0 group"
              >
                <span>View All Leaders</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 5-Column Grid with Prev/Next buttons */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
                {featuredLeaders.map((leader) => (
                  <div
                    key={leader.id}
                    className="bg-white border border-[#E8E3DA] p-3.5 flex flex-col justify-between group hover:shadow-md transition-shadow duration-300"
                  >
                    <div>
                      {/* Portrait */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 mb-3.5">
                        <Image
                          src={leader.imageUrl}
                          alt={leader.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Name & Title */}
                      <h3 className="font-serif text-sm font-bold text-[#141414] leading-snug">
                        {leader.name}
                      </h3>
                      <p className="text-[11px] text-neutral-500 font-sans mt-0.5 leading-snug">
                        {leader.role}
                      </p>

                      {/* Badge */}
                      <div className="mt-2.5 mb-2.5">
                        <span className="inline-block px-2 py-0.5 bg-[#A17A38]/10 text-[#A17A38] text-[9px] font-sans font-bold tracking-wider uppercase rounded-xs">
                          {leader.badge}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="text-[11.5px] text-neutral-600 font-sans leading-relaxed line-clamp-3">
                        {leader.bio}
                      </p>
                    </div>

                    {/* Read Story link */}
                    <div className="pt-4 border-t border-neutral-100 mt-3">
                      <Link
                        href={`/articles/${leader.slug}`}
                        className="inline-flex items-center gap-1.5 text-[10.5px] font-sans font-bold uppercase tracking-widest text-[#141414] hover:text-[#A17A38] transition-colors group/link"
                      >
                        <span>READ STORY</span>
                        <span className="text-xs transition-transform group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: BROWSE LEADERS BY EXPERTISE (8 Icon Cards)        */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with full-width horizontal rule */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
                Browse Leaders by Expertise
              </h2>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/category/leaders"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors shrink-0 group"
              >
                <span>View All Expertise</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 8-Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {expertiseList.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.title}
                    href={`/category/${item.title.toLowerCase()}`}
                    className="bg-white border border-[#E8E3DA] p-4 text-center flex flex-col items-center justify-between hover:border-[#A17A38] hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F0] flex items-center justify-center text-neutral-700 group-hover:text-[#A17A38] group-hover:scale-110 transition-all mb-3">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xs font-semibold text-[#141414] leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-[10px] text-neutral-500 font-sans block mt-1">
                        {item.count}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: EXCLUSIVE INTERVIEW FEATURE (Dark Luxury Banner)  */}
        {/* ============================================================ */}
        <section className="w-full bg-[#0E0E10] text-white border-b border-[#222226] py-16 lg:py-20 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Interview Intro (4.5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.26em] text-[#C5A059] font-sans font-semibold block">
                  EXCLUSIVE INTERVIEW
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white leading-[1.12]">
                  Leadership in a<br />Changing World
                </h2>

                <p className="text-sm text-neutral-400 font-sans leading-relaxed pt-1">
                  An exclusive conversation with Christina Rahm, PhD on building a
                  purpose-driven enterprise and creating lasting impact in the wellness industry.
                </p>

                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-sans font-semibold pt-1">
                  08 MIN READ
                </p>

                <div className="pt-2">
                  <Link
                    href="/articles/christina-rahm-building-the-future-of-human-wellness"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#C5A059]/60 hover:border-[#C5A059] hover:bg-[#C5A059]/10 text-white text-[10px] font-sans font-semibold tracking-[0.2em] uppercase transition-colors"
                  >
                    <span>READ INTERVIEW</span>
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </div>

              {/* Center Column: Portrait (3.5 cols) */}
              <div className="lg:col-span-3 flex items-center justify-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl">
                  <Image
                    src="/images/christina-rahm-banner.jpg"
                    alt="Christina Rahm, PhD"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-top filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Prominent Pull-Quote (4 cols) */}
              <div className="lg:col-span-4 space-y-4 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[#26262B] pt-6 lg:pt-0">
                <span className="font-serif text-5xl sm:text-6xl text-[#C5A059] leading-none block">
                  &ldquo;
                </span>

                <blockquote className="font-serif text-xl sm:text-2xl text-white font-light leading-snug">
                  The future belongs to those who lead with purpose, innovate fearlessly
                  and put people first.
                </blockquote>

                <div className="pt-2">
                  <span className="font-serif text-sm text-white font-semibold block">
                    Christina Rahm, PhD
                  </span>
                  <span className="text-xs text-[#C5A059] font-sans font-medium block">
                    Founder &amp; CEO, Cymbiotika
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: LEADERS SPOTLIGHT (5 Story Cards)                 */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with full-width horizontal rule */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
                Leaders Spotlight
              </h2>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/category/leaders"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors shrink-0 group"
              >
                <span>View All Stories</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 5 Spotlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {spotlightStories.map((story) => (
                <article
                  key={story.slug}
                  className="bg-white border border-[#E8E3DA] p-3 flex flex-col justify-between group hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Photo */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-200 mb-3">
                      <Image
                        src={story.imageUrl}
                        alt={story.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <span className="text-[9.5px] uppercase tracking-wider text-neutral-400 font-sans block mb-1">
                      {story.date}
                    </span>

                    <h3 className="font-serif text-sm font-semibold text-[#141414] leading-snug group-hover:text-[#A17A38] transition-colors">
                      <Link href={`/articles/${story.slug}`}>{story.title}</Link>
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 mt-3 flex items-center justify-between text-[9.5px] font-sans">
                    <span className="font-bold text-[#A17A38] uppercase tracking-wider">
                      {story.category}
                    </span>
                    <span className="text-neutral-400">{story.readingTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7: LEADERS BY INDUSTRY (8 Image Tiles)               */}
        {/* ============================================================ */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#E2DDD5] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with full-width horizontal rule */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
                Leaders by Industry
              </h2>
              <div className="flex-1 h-[1px] bg-[#E2DDD5]" />
              <Link
                href="/category/industries"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors shrink-0 group"
              >
                <span>View All Industries</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 2x4 Grid of Image Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {industriesList.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/category/${ind.slug}`}
                  className="relative h-36 sm:h-40 overflow-hidden rounded-[2px] border border-neutral-300 group flex flex-col justify-end p-4 text-white shadow-xs"
                >
                  <Image
                    src={ind.imageUrl}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.65]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  <div className="relative z-10">
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-white leading-tight">
                      {ind.name}
                    </h3>
                    <span className="text-[10.5px] text-[#C5A059] font-sans font-medium block mt-0.5">
                      {ind.count}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 8: STAY INSPIRED NEWSLETTER BANNER                   */}
        {/* ============================================================ */}
        <section className="w-full bg-[#F5F2EB] border-b border-[#E2DDD5] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Form (7.5 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#121214] font-normal leading-tight">
                  Stay inspired by<br />great leadership.
                </h2>

                <p className="text-sm text-neutral-600 font-sans max-w-lg">
                  Get the latest leadership stories, interviews and insights delivered
                  to your inbox every week.
                </p>

                {subscribed ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-sans font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Thank you for subscribing! You are now on the Leadership VIP list.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                    <div className="flex flex-col sm:flex-row items-stretch gap-2 max-w-lg">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 bg-white border border-[#DDD7CD] px-4 py-3 text-xs font-sans text-neutral-800 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#A17A38]"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-xs font-sans font-bold tracking-[0.2em] uppercase rounded-none transition-colors shrink-0"
                      >
                        SUBSCRIBE
                      </button>
                    </div>

                    <label className="flex items-center gap-2 text-[11px] text-neutral-500 font-sans cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="rounded-xs border-neutral-300 text-[#A17A38] focus:ring-[#A17A38]"
                      />
                      <span>I agree to receive communications from The Success World.</span>
                    </label>
                  </form>
                )}
              </div>

              {/* Right: Magazine & Coffee Flatlay (4.5 cols) */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-full max-w-[320px] aspect-[4/3] overflow-hidden rounded-[2px] shadow-lg border border-[#DDD5C7]">
                  <Image
                    src="/images/features-editorial-spread.jpg"
                    alt="The Success World Magazine on desk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
