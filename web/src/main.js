// Import main css
import VueAnimXyz from '@animxyz/vue'
import 'normalize.css'
import '~/assets/style/index.scss'
import 'swiper/swiper-bundle.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Scroll reveal
import VueObserveVisibility from 'vue-observe-visibility'

// registry directive
// Import image url builder
import urlForImage from './utils/urlForImage'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueAnimXyz)
  Vue.use(VueObserveVisibility)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  head.link.push({
    rel: 'preload',
    as: 'font',
    crossorigin: true,
    href: require('~/assets/fonts/Tungsten-SemiBold.woff')
  })

  head.link.push({
    rel: 'stylesheet',
    type: 'text/css',
    crossorigin: true,
    href: 'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap'
  })
}
