import { defineField, defineType } from 'sanity'

export const podcast = defineType({
  name: 'podcast',
  title: 'The Spotlight Talks (Podcast)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Episode Title (e.g. The Future of Work & Leadership)',
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
    }),
    defineField({
      name: 'guestName',
      title: 'Guest Name (e.g. Anjali Mehta)',
      type: 'string',
    }),
    defineField({
      name: 'guestRole',
      title: 'Guest Role / Company (e.g. CHRO, InnovateX)',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g. 35:20 MIN)',
      type: 'string',
    }),
    defineField({
      name: 'guestPhoto',
      title: 'Guest Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'audioUrl',
      title: 'Audio Stream URL (or MP3 file URL)',
      type: 'url',
    }),
  ],
})

export const summitEvent = defineType({
  name: 'summitEvent',
  title: 'Upcoming Business Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title (e.g. GLOBAL BUSINESS LEADERS SUMMIT 2026)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle (e.g. The Future of Business, Leadership and Innovation)',
      type: 'string',
    }),
    defineField({
      name: 'day',
      title: 'Day Badge (e.g. 15)',
      type: 'string',
    }),
    defineField({
      name: 'month',
      title: 'Month Badge (e.g. OCT)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location (e.g. Dubai, UAE)',
      type: 'string',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image (e.g. City Skyline)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration / RSVP URL',
      type: 'url',
    }),
  ],
})
