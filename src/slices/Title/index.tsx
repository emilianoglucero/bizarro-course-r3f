import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

import style from './title.module.scss'
/**
 * Props for `Title`.
 */
export type TitleProps = SliceComponentProps<Content.TitleSlice>

/**
 * Component for "Title" Slices.
 */
const Title = ({ slice }: TitleProps): JSX.Element => {
  return (
    <div className={style.title}>
      <PrismicRichText field={slice.primary.title} />
    </div>
  )
}

export default Title
