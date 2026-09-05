import { groq } from 'next-sanity'

// Fetch Homepage Lead Feature Story (01/05 hero)
export const HERO_FEATURE_QUERY = groq`
  *[_type == "article" && placement == "heroFeature"][0] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    excerpt,
    readingTimeMinutes,
    publishedAt,
    "category": category->name,
    "author": author->{ name, role, "avatarUrl": avatar.asset->url },
    "imageUrl": featuredImage.asset->url
  }
`

// Fetch Hero Quick Stories (01-05 on right sidebar of hero)
export const HERO_RAIL_QUERY = groq`
  *[_type == "article" && (placement == "heroRail" || placement == "heroFeature")] | order(trendingRank asc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    readingTimeMinutes,
    trendingRank,
    "category": category->name
  }
`

// Fetch Editor's Selection (Primary 3 cards + Compact 3 cards)
export const EDITORS_SELECTION_QUERY = groq`
  {
    "primary": *[_type == "article" && placement == "editorSelectionPrimary"][0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      readingTimeMinutes,
      publishedAt,
      "category": category->name,
      "imageUrl": featuredImage.asset->url
    },
    "compact": *[_type == "article" && placement == "editorSelectionCompact"][0...3] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "category": category->name,
      "imageUrl": featuredImage.asset->url
    }
  }
`

// Fetch Active Cover Story (The Cover Story dark section)
export const COVER_STORY_QUERY = groq`
  *[_type == "issue" && isCurrentCover == true][0] {
    _id,
    title,
    "slug": slug.current,
    personName,
    tagline,
    designations,
    organization,
    storySlug,
    publishedDate,
    "personPortraitUrl": personPortrait.asset->url,
    "magazineCoverUrl": magazineCover.asset->url
  }
`

// Fetch 8 Industry Categories with counts
export const INDUSTRIES_QUERY = groq`
  *[_type == "category"] | order(number asc)[0...8] {
    _id,
    name,
    "slug": slug.current,
    number,
    iconName,
    "articleCount": count(*[_type == "article" && references(^._id)])
  }
`

// Fetch Editorial Trio: Latest News + Trending This Week + Columnist Voices
export const EDITORIAL_TRIO_QUERY = groq`
  {
    "latestNews": *[_type == "article" && placement == "latestNews"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "category": category->name
    },
    "trending": *[_type == "article" && placement == "trendingWeek"] | order(trendingRank asc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      trendingRank
    },
    "voices": *[_type == "author" && defined(quote)][0...3] {
      _id,
      name,
      "slug": slug.current,
      role,
      quote,
      "avatarUrl": avatar.asset->url
    }
  }
`

// Fetch Insights & Analysis row
export const INSIGHTS_QUERY = groq`
  *[_type == "article" && placement == "insightsAnalysis"][0...5] {
    _id,
    title,
    "slug": slug.current,
    readingTimeMinutes,
    "category": category->name,
    "imageUrl": featuredImage.asset->url
  }
`

// Fetch Multimedia (The Success Talks podcast, Summit Event)
export const MULTIMEDIA_QUERY = groq`
  {
    "podcast": *[_type == "podcast"][0] {
      _id,
      title,
      guestName,
      guestRole,
      duration,
      audioUrl,
      "guestPhotoUrl": guestPhoto.asset->url
    },
    "event": *[_type == "summitEvent"][0] {
      _id,
      title,
      subtitle,
      day,
      month,
      location,
      registrationUrl,
      "bgImageUrl": bgImage.asset->url
    }
  }
`

// Fetch Article by Slug (Detail page)
export const ARTICLE_BY_SLUG_QUERY = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    excerpt,
    publishedAt,
    readingTimeMinutes,
    "category": category->name,
    "categorySlug": category->slug.current,
    "author": author->{
      name,
      role,
      bio,
      "avatarUrl": avatar.asset->url
    },
    "imageUrl": featuredImage.asset->url,
    body
  }
`
