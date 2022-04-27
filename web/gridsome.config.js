// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const path = require('path')

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/style/helpers/index.scss')]
    })
}

module.exports = {
  siteName: 'Adaptia Design',
  siteDescription: 'A marketing and branding agency',
  templates: {
    SanityPost: '/:slug__current'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('rfs'), require('autoprefixer')]
      }
    }
  },
  // Scss loader
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    const svgRule = config.module.rule('svg')

    config.resolve.alias.set('@images', '@/assets/images')

    // svg rules
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },

  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Adaptia Design',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Adaptia Design',
        themeColor: '#131313',
        backgroundColor: '#ffffff',
        icon: 'src/favicon.png', // must be provided like 'src/favicon.png'
        msTileImage: '',
        msTileColor: '#131313'
      }
    }
  ]
}
