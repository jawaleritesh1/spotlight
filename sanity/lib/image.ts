import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'demo-project-id',
  dataset: dataset || 'production',
})

export const urlForImage = (source: Image | string | undefined) => {
  if (!source) return ''
  if (typeof source === 'string') return source
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
