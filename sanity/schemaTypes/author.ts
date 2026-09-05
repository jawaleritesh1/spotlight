import { defineField, defineType } from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author / Voice',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Designation (e.g. Founder, CEO, Innovator)',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Company / Organization',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Editorial Quote (for Voices section)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar / Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
    }),
  ],
})
