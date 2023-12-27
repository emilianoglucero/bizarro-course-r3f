import { PrismicNextImage } from '@prismicio/next'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { createClient } from '~/prismicio'

type Params = { uid: string }

export default async function Page({ params }: { params: Params }) {
  const client = createClient()
  const page = await client
    .getByUID('detail', params.uid, {
      fetchLinks: [
        'collection.title',
        'collection.uid',
        'collection.description',
        'collection.products'
      ]
    })
    .catch(() => notFound())

  // return <SliceZone slices={page.data.slices} components={components} />
  console.log(page.data)
  return (
    <div className="detail">
      <div className="detail__wrapper">
        <figure className="detail__media">
          <PrismicNextImage field={page.data.product_image_01} />
        </figure>
        <figure className="detail__media">
          <PrismicNextImage field={page.data.product_image_02} />
        </figure>
        <div className="detail__information">
          <p className="detail__information__collection">
            {page.data.collection.data.title}
          </p>
          <h1 className="detail__information__title">{page.data.title}</h1>
          <div className="detail__information__content">
            <div className="detail__information__highlights">
              {page.data.highlight.map((item, index) => (
                <p key={index} className="detail__information__highlight">
                  <svg
                    className="detail__information__highlight__icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d={item.icon}
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="detail__information__highlight__text">
                    {item.text}
                  </span>
                </p>
              ))}
            </div>

            <div className="detail__information__list">
              {page.data.information.map((item, index) => (
                <p key={index} className="detail__information__item">
                  <strong className="detail__information__item__title">
                    {item.label}
                  </strong>
                  <span className="detail__information__item__description">
                    {item.description}
                  </span>
                </p>
              ))}
            </div>
            <a
              href={page.data.link_url ?? ''}
              className="detail__information__link"
              target="_blank"
              rel="noopener"
            >
              {page.data.link_text}
            </a>
            {/* <Link href={page.data.link_url}>{page.data.link_text}</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export async function generateMetadata({
  params
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client
    .getByUID('detail', params.uid)
    .catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('detail')

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
