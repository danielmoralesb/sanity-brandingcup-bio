import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'xtz5i8mk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
