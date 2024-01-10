import '~/css/global.scss'

import type { Metadata } from 'next'

import { createClient } from '~/prismicio'

import Navigation from '../components/navigation'
import { georgeX, suisseBP } from '../css/fonts'
// import { siteURL } from '~/lib/constants'
import { AppHooks } from './app-hooks'
import { Providers } from './providers'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()

  const metadata = await client.getSingle('metadata')
  return {
    title: metadata.data.title || 'floema',
    description:
      metadata.data.description ||
      'A recreation of the Luis Bizarro Awwwards course made with Next.js and TypeScript.',
    openGraph: {
      images: [metadata.data.image.url || '']
    }
  }
}

// export const metadata: Metadata = {
//   title: {
//     default: 'next-typescript | basement.studio',
//     template: '%s | basement.studio'
//   },
//   metadataBase: siteURL,
//   description: `A minimalist's boilerplate — Next.js with TypeScript.`,
//   icons: [
//     {
//       rel: 'apple-touch-icon',
//       url: '/apple-touch-icon.png'
//     }
//   ],
//   manifest: '/manifest.webmanifest',
//   twitter: {
//     card: 'summary_large_image',
//     title: 'next-typescript | basement.studio',
//     creator: '@basementstudio',
//     siteId: '@basementstudio'
//   }
// }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        style={{ opacity: 0 }}
        className={`${georgeX.className} ${suisseBP.className}`}
      >
        <Providers>
          {/* <Header /> */}
          <Navigation />
          {children}
          <AppHooks />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
