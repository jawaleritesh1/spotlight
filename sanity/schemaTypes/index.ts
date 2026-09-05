import { type SchemaTypeDefinition } from 'sanity'
import { blockContent } from './blockContent'
import { category } from './category'
import { author } from './author'
import { article } from './article'
import { issue } from './issue'
import { podcast, summitEvent } from './podcast'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, author, article, issue, podcast, summitEvent],
}
