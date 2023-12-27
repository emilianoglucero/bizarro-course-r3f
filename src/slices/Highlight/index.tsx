import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>

/**
 * Component for "Highlight" Slices.
 */
const Highlight = ({ slice }: HighlightProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <p>{slice.primary.label}</p>
      <h3>{slice.primary.title}</h3>
      {slice.items.map((item, index) => (
        <div key={index}>
          <PrismicNextImage field={item.media} />
        </div>
      ))}
    </section>
  )
}

export default Highlight
