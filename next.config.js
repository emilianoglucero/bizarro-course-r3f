const withBundleAnalyzer = require('@next/bundle-analyzer')
const withTM = require('next-transpile-modules')
const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {},
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = (_phase, { defaultConfig: _ }) => {
  const plugins = [
    withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
    withTM([]) // add modules you want to transpile here
  ]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...config })
}
