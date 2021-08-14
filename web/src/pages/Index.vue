<template>
  <Layout :show-logo="false">
    <LazyHydrate when-idle><HomeHero /></LazyHydrate>
    <LazyHydrate when-visible><HomeListBlock /></LazyHydrate>
    <LazyHydrate when-visible><Testimonials :data="$page.testimonials" /></LazyHydrate>
    <LazyHydrate when-visible><HomeServices /></LazyHydrate>
    <LazyHydrate when-visible><HomeProcess /></LazyHydrate>
    <LazyHydrate when-visible><HomeCustomers /></LazyHydrate>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  testimonials: allSanityTestimonial(sortBy: "publishedAt", limit: 3) {
    edges {
      node {
        id
        _rawBody
        clientName
        clientRole
      }
    }
  }
}

</page-query>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import HomeHero from '@/components/home/HomeHero'
import Testimonials from '@/components/Testimonials'
import HomeServices from '@/components/home/HomeServices'
import HomeProcess from '@/components/home/HomeProcess'
import HomeCustomers from '@/components/home/HomeCustomers'
import HomeListBlock from '@/components/home/HomeListBlock'
export default {
  data() {
    return {}
  },
  components: {
    LazyHydrate,
    HomeHero,
    Testimonials,
    HomeServices,
    HomeProcess,
    HomeListBlock,
    HomeCustomers,
  },
  metaInfo: {
    title: 'Marketing & Design Agency in San Diego, California',
    link: [
      {
        rel: 'preload',
        type: 'video',
        crossorigin: true,
        href: require('~/assets/videos/hero.mp4'),
      },
    ],
  },
}
</script>