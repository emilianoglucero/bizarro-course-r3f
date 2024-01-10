import localFont from 'next/font/local'

export const georgeX = localFont({
  src: [
    {
      path: '../app/fonts/GeorgeX-Regular.woff2',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: '../app/fonts/GeorgeX-regular.woff',
      weight: 'normal',
      style: 'normal'
    }
  ],
  variable: '--font-george-x'
})

export const suisseBP = localFont({
  src: [
    {
      path: '../app/fonts/SuisseBPIntl-Regular.woff2',
      weight: 'normal'
    },
    {
      path: '../app/fonts/SuisseBPIntl-Regular.woff',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: '../app/fonts/SuisseBPIntl-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../app/fonts/SuisseBPIntl-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../app/fonts/SuisseBPIntl-UltraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../app/fonts/SuisseBPIntl-UltraLight.woff',
      weight: '200',
      style: 'normal'
    }
  ],
  variable: '--font-suisse-bp'
})
