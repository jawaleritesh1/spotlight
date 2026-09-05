'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'The Spotlight Leaders Editorial Studio',
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('The Spotlight Leaders Content')
          .items([
            S.listItem()
              .title('Featured & Cover Issues')
              .child(S.documentTypeList('issue').title('Magazine Issues & Covers')),
            S.listItem()
              .title('Articles & Stories')
              .child(S.documentTypeList('article').title('All Articles')),
            S.listItem()
              .title('Voices & Columnists')
              .child(S.documentTypeList('author').title('Columnists / Authors')),
            S.listItem()
              .title('Industries & Categories')
              .child(S.documentTypeList('category').title('Industries')),
            S.divider(),
            S.listItem()
              .title('The Spotlight Talks (Podcasts)')
              .child(S.documentTypeList('podcast').title('Podcast Episodes')),
            S.listItem()
              .title('Upcoming Summits & Events')
              .child(S.documentTypeList('summitEvent').title('Events')),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
