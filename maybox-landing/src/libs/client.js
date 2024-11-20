
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const today = new Date().toISOString().split('T')[0]

export const client = createClient({
  projectId: 'z11h4mvg', 
  dataset: 'production',
  apiVersion: today,
  useCdn: true,
  withCredentials: true, 
})

// Image helper
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)