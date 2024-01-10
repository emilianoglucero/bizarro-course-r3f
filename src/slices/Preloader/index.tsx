import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

import { georgeX } from '~/css/fonts'

import style from './preloader.module.scss'

/**
 * Props for `Preloader`.
 */
export type PreloaderProps = SliceComponentProps<Content.PreloaderSlice>

/**
 * Component for "Preloader" Slices.
 */
const Preloader: React.FC<PreloaderProps> = ({ slice }) => {
  // const preloaderText = slice.primary.title.replace(/\n/g, '<br>')
  //replace the preloader text with a regex to add break lines
  // console.log('slice', slice)
  // console.log('slice title', slice.primary.preloader_text)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${style.preloader} ${georgeX.variable}`}
    >
      <p className={style.preloader__text}>
        <PrismicRichText field={slice.primary.preloader_text} />
      </p>
      <p className={style.preloader__number}>0%</p>
    </section>
  )
}

export default Preloader
