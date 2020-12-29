<template>
  <Layout :show-logo="false">
    <hero />
    <list-block />
    <testimonial :data="$page.testimonials" />
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
import AuthorCard from '~/components/AuthorCard'
import PostCard from '~/components/PostCard'
import Testimonial from '~/sections/Testimonial'
import Hero from '~/components/Hero'
import ListBlock from '../sections/ListBlock'

export default {
  watch: {},
  components: {
    Hero,
    Testimonial: () => import('~/sections/Testimonial'),
    ListBlock: () => import('../sections/ListBlock'),
  },
  metaInfo: {
    title: 'Hello, world!',
  },
}
</script>

<style lang="scss">
</style>