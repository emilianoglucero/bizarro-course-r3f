import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'

import { createClient } from '~/prismicio'
import { components } from '~/slices'

import style from './about.module.scss'

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('about')

  return (
    <div className={style.about}>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('about')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  }
}
