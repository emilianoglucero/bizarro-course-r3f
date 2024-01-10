import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

import style from './highlight.module.scss'
/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>

/**
 * Component for "Highlight" Slices.
 */
const Highlight = ({ slice }: HighlightProps): JSX.Element => {
  return (
    <div className={style.highlight}>
      <div className={style.wrapper}>
        <p className={style.label}>{slice.primary.label}</p>
        <h3 className={style.title}>{slice.primary.title}</h3>
        <div className={style.medias}>
          {slice.items.map((item, index) => (
            <div className={style.media} key={index}>
              <PrismicNextImage
                className={style.media__image}
                field={item.media}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Highlight
