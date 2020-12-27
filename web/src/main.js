// Import main css
import '~/assets/style/index.scss'
import Vue from 'vue'
import '@animxyz/core'
import VueAnimXYZ from '@animxyz/vue'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueAnimXYZ)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  head.link.push({
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap'
  })
}
