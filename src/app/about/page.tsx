import { PrismicNextImage } from '@prismicio/next'

import { createClient } from '~/prismicio'
import Content from '~/slices/Content'
import Gallery from '~/slices/Gallery'
import Highlight from '~/slices/Highlight'

export default async function Page() {
  const client = createClient()
  const about = await client.getSingle('about')
  return (
    <div className="about">
      <div className="about__wrapper">
        <section className="about__gallery">
          <div className="about__gallery-wrapper">
            {about.data.gallery.map((item, index) => (
              <div key={index} className="about__gallery-item">
                <PrismicNextImage field={item.image} />
              </div>
            ))}
            <div className="about__gallery-item"></div>
          </div>
        </section>
        <section className="about__title">
          <h2 className="title">{about.data.title}</h2>
        </section>
        <section className="about__content">
          {about.data.slices.map(
            (slice, index) =>
              slice.slice_type === 'content' && (
                <Content
                  key={index}
                  slice={slice}
                  index={0}
                  slices={[]}
                  context={undefined}
                />
              )
          )}
        </section>
        <section className="about__highlight">
          {about.data.slices.map(
            (slice, index) =>
              slice.slice_type === 'highlight' && (
                <Highlight
                  key={index}
                  slice={slice}
                  index={0}
                  slices={[]}
                  context={undefined}
                />
              )
          )}
        </section>
        <section className="about__gallery">
          <div className="about__gallery-wrapper">
            {about.data.slices.map(
              (slice, index) =>
                slice.slice_type === 'gallery' && (
                  <Gallery
                    key={index}
                    slice={slice}
                    index={0}
                    slices={[]}
                    context={undefined}
                  />
                )
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
