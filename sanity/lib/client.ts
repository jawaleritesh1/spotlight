import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})

export async function sanityFetch<T = any>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}): Promise<T | null> {
  // If projectId is default demo or not configured, return null to gracefully trigger fallback mock data
  if (!projectId || projectId === 'demo-project-id' || projectId === 'your-project-id') {
    return null
  }

  try {
    return await client.fetch(query, params, {
      next: {
        revalidate: tags.length ? false : revalidate,
        tags,
      },
    })
  } catch (error) {
    console.warn('Sanity fetch fallback:', error)
    return null
  }
}
