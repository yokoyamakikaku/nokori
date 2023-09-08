/* eslint-env node */
const webpack = require('webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack        : (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /aws-crt/,
      })
    )
    return config
  },
}

module.exports = nextConfig
