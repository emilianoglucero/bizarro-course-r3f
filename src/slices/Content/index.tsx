import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

import style from './content.module.scss'
/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>

/**
 * Component for "Content" Slices.
 */
const Content = ({ slice }: ContentProps): JSX.Element => {
  return (
    <section className={style.content}>
      <div
        className={`${style.content__wrapper} ${
          slice.primary.type === 'Right' ? style.content__right : ''
        } `}
      >
        <div className={style.content__box}>
          <p className={style.label}>{slice.primary.label}</p>
          <div className={style.description}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className={style.media}>
          {/* <div className="media"> */}
          {/* <div className={`${style.media} ${style.about}`}> */}
          <PrismicNextImage
            className={style.media__image}
            field={slice.primary.image}
          />
        </div>
      </div>
    </section>
  )
}

export default Content
