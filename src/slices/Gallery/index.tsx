import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

import style from './gallery.module.scss'

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <div className={style.gallery}>
      <div className={style.gallery__wrapper}>
        {slice.items.map((item, index) => (
          <div className={style.gallery__media} key={index}>
            <PrismicNextImage
              field={item.image}
              className={style.gallery__media__image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
