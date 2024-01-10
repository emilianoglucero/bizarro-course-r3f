import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'

import { createClient } from '~/prismicio'
import { components } from '~/slices'

import s from './page.module.scss'

export default async function Page() {
  const client = createClient()
  const home = await client.getSingle('home')
  // console.log('home', home)

  return (
    <div className={s.home}>
      <div className="home__wrapper">
        <SliceZone slices={home.data.slices} components={components} />
      </div>
      <a className="home__link" href={'/collections'}>
        {home.data.button}
      </a>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('home')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  }
}
