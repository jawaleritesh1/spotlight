import { sanityFetch } from '@/sanity/lib/client'
import {
  HERO_FEATURE_QUERY,
  HERO_RAIL_QUERY,
  EDITORS_SELECTION_QUERY,
  COVER_STORY_QUERY,
  INDUSTRIES_QUERY,
  EDITORIAL_TRIO_QUERY,
  INSIGHTS_QUERY,
  MULTIMEDIA_QUERY,
  ARTICLE_BY_SLUG_QUERY,
} from '@/sanity/lib/queries'
import {
  HERO_FEATURE_DATA,
  HERO_RAIL_DATA,
  EDITORS_PRIMARY_DATA,
  EDITORS_COMPACT_DATA,
  COVER_STORY_DATA,
  INDUSTRIES_DATA,
  LATEST_NEWS_DATA,
  TRENDING_WEEK_DATA,
  VOICES_DATA,
  INSIGHTS_DATA,
  PODCAST_DATA,
  EVENT_DATA,
  VIDEO_DATA,
  type ArticleItem,
  type CoverStoryData,
  type IndustryItem,
  type VoiceItem,
  type PodcastData,
  type EventData,
  type VideoData,
} from '@/lib/data/mockData'

export async function getHeroFeature(): Promise<ArticleItem> {
  const data = await sanityFetch<ArticleItem>({ query: HERO_FEATURE_QUERY })
  return data && data.title ? data : HERO_FEATURE_DATA
}

export async function getHeroRail(): Promise<ArticleItem[]> {
  const data = await sanityFetch<ArticleItem[]>({ query: HERO_RAIL_QUERY })
  return data && data.length ? data : HERO_RAIL_DATA
}

export async function getEditorsSelection(): Promise<{
  primary: ArticleItem[]
  compact: ArticleItem[]
}> {
  const data = await sanityFetch<{ primary: ArticleItem[]; compact: ArticleItem[] }>({
    query: EDITORS_SELECTION_QUERY,
  })
  return {
    primary: data?.primary?.length ? data.primary : EDITORS_PRIMARY_DATA,
    compact: data?.compact?.length ? data.compact : EDITORS_COMPACT_DATA,
  }
}

export async function getCoverStory(): Promise<CoverStoryData> {
  const data = await sanityFetch<CoverStoryData>({ query: COVER_STORY_QUERY })
  return data && data.personName ? data : COVER_STORY_DATA
}

export async function getIndustries(): Promise<IndustryItem[]> {
  const data = await sanityFetch<IndustryItem[]>({ query: INDUSTRIES_QUERY })
  return data && data.length ? data : INDUSTRIES_DATA
}

export async function getEditorialTrio() {
  const data = await sanityFetch<{
    latestNews: any[]
    trending: any[]
    voices: VoiceItem[]
  }>({ query: EDITORIAL_TRIO_QUERY })

  return {
    latestNews: data?.latestNews?.length ? data.latestNews : LATEST_NEWS_DATA,
    trendingWeek: data?.trending?.length ? data.trending : TRENDING_WEEK_DATA,
    voices: data?.voices?.length ? data.voices : VOICES_DATA,
  }
}

export async function getInsights(): Promise<ArticleItem[]> {
  const data = await sanityFetch<ArticleItem[]>({ query: INSIGHTS_QUERY })
  return data && data.length ? data : INSIGHTS_DATA
}

export async function getMultimedia(): Promise<{
  podcast: PodcastData
  event: EventData
  video: VideoData
}> {
  const data = await sanityFetch<{ podcast: PodcastData; event: EventData }>({
    query: MULTIMEDIA_QUERY,
  })
  return {
    podcast: data?.podcast?.title ? data.podcast : PODCAST_DATA,
    event: data?.event?.title ? data.event : EVENT_DATA,
    video: VIDEO_DATA,
  }
}

export async function getArticleBySlug(slug: string) {
  const data = await sanityFetch<any>({
    query: ARTICLE_BY_SLUG_QUERY,
    params: { slug },
  })

  if (data && data.title) return data

  // Fallback to match mock data
  const allMocks = [
    HERO_FEATURE_DATA,
    ...HERO_RAIL_DATA,
    ...EDITORS_PRIMARY_DATA,
    ...EDITORS_COMPACT_DATA,
    ...INSIGHTS_DATA,
  ]

  const matched = allMocks.find((m) => m.slug === slug) || HERO_FEATURE_DATA
  return {
    ...matched,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text:
              matched.excerpt ||
              'Across global business hubs and frontier technology corridors, leaders are spearheading a systemic shift in how legacy enterprises approach longevity, digital integration, and purpose-driven impact.',
          },
        ],
      },
    ],
  }
}
