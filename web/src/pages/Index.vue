<template>
  <Layout :show-logo="false">
    <hero />
    <list-block />
    <testimonial :data="$page.testimonials" />
    <multi-list-block />
    <process />
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
import Hero from '~/components/Hero'
export default {
  watch: {},
  components: {
    Hero,
    Testimonial: () => import('~/sections/Testimonial'),
    MultiListBlock: () => import('~/sections/MultiListBlock'),
    Process: () => import('~/sections/Process'),
    ListBlock: () => import('~/sections/ListBlock'),
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

<style lang="scss">
</style>