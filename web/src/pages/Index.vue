<template>
  <Layout :show-logo="false">
    <hero />
    <list-block />
    <testimonial :data="$page.testimonials" />
    <multi-list-block />
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
    MultiListBlock: () => import('~/sections/MultiListBlock.vue'),
    ListBlock: () => import('../sections/ListBlock'),
  },
  metaInfo: {
    title: 'Marketing & Design Agency in San Diego, California',
  },
}
</script>

<style lang="scss">
</style>