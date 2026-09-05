import { defineField, defineType } from 'sanity'

export const issue = defineType({
  name: 'issue',
  title: 'Magazine Issue / Cover Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Issue Title (e.g. September 2026 Issue)',
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
      name: 'isCurrentCover',
      title: 'Is Active Cover Story on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'personName',
      title: 'Featured Person Name (e.g. Christina Rahm, PhD)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Editorial Tagline (e.g. Building the Future of Human Wellness)',
      type: 'string',
    }),
    defineField({
      name: 'designations',
      title: 'Designations / Badges (e.g. FOUNDER, ENTREPRENEUR, INNOVATOR)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'organization',
      title: 'Company / Firm (e.g. FOUNDER, CYNERTIKA)',
      type: 'string',
    }),
    defineField({
      name: 'personPortrait',
      title: 'Featured Person Portrait Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'magazineCover',
      title: '3D Magazine Cover Issue Mockup Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'storySlug',
      title: 'Linked Feature Story Slug',
      type: 'string',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    }),
  ],
})
