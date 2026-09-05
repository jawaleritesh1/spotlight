import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category / Industry',
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
      name: 'number',
      title: 'Category Number (e.g. 01, 02)',
      type: 'string',
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Identifier (e.g., Cpu, DollarSign, HeartPulse, Building2, Car, Sparkles, GraduationCap, Briefcase)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
