import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article / Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Deck',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'Category / Industry',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    defineField({
      name: 'readingTimeMinutes',
      title: 'Reading Time (Minutes)',
      type: 'number',
      initialValue: 6,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'placement',
      title: 'Editorial Placement',
      type: 'string',
      options: {
        list: [
          { title: 'Hero Feature Story', value: 'heroFeature' },
          { title: 'Hero Quick Rail', value: 'heroRail' },
          { title: 'Editor Selection (Primary)', value: 'editorSelectionPrimary' },
          { title: 'Editor Selection (Compact)', value: 'editorSelectionCompact' },
          { title: 'Latest News Feed', value: 'latestNews' },
          { title: 'Trending This Week', value: 'trendingWeek' },
          { title: 'Insights & Analysis', value: 'insightsAnalysis' },
          { title: 'Standard Archive', value: 'standard' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'trendingRank',
      title: 'Trending Rank (01-05, if applicable)',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'blockContent',
    }),
  ],
})
