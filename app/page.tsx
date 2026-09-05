import Header from '@/components/header/Header'
import HeroSection from '@/components/hero/HeroSection'
import EditorsSelection from '@/components/editors/EditorsSelection'
import CoverStorySection from '@/components/cover-story/CoverStorySection'
import ExploreIndustries from '@/components/industries/ExploreIndustries'
import EditorialTrio from '@/components/editorial-trio/EditorialTrio'
import InsightsSection from '@/components/insights/InsightsSection'
import MultimediaSection from '@/components/multimedia/MultimediaSection'
import IssueAndNewsletter from '@/components/newsletter/IssueAndNewsletter'
import Footer from '@/components/footer/Footer'
import {
  getHeroFeature,
  getHeroRail,
  getEditorsSelection,
  getCoverStory,
  getIndustries,
  getEditorialTrio,
  getInsights,
  getMultimedia,
} from '@/lib/services/contentService'

export const revalidate = 60 // ISR revalidation window

export default async function HomePage() {
  // Parallel data fetching via Sanity CMS / Fallback Layer
  const [
    heroFeature,
    heroRail,
    editorsSelection,
    coverStory,
    industries,
    editorialTrio,
    insights,
    multimedia,
  ] = await Promise.all([
    getHeroFeature(),
    getHeroRail(),
    getEditorsSelection(),
    getCoverStory(),
    getIndustries(),
    getEditorialTrio(),
    getInsights(),
    getMultimedia(),
  ])

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />
      <main className="flex-1">
        <HeroSection initialLead={heroFeature} railItems={heroRail} />
        <EditorsSelection primary={editorsSelection.primary} compact={editorsSelection.compact} />
        <CoverStorySection data={coverStory} />
        <ExploreIndustries industries={industries} />
        <EditorialTrio
          latestNews={editorialTrio.latestNews}
          trendingWeek={editorialTrio.trendingWeek}
          voices={editorialTrio.voices}
        />
        <InsightsSection insights={insights} />
        <MultimediaSection
          podcast={multimedia.podcast}
          event={multimedia.event}
          video={multimedia.video}
        />
        <IssueAndNewsletter />
      </main>
      <Footer />
    </div>
  )
}
