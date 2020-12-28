<template>
  <Layout :show-logo="false">
    <hero />
    <Testimonial :data="$page.testimonials" />
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

export default {
  components: {
    Hero: () => import('~/components/Hero'),
    Testimonial,
  },
  metaInfo: {
    title: 'Hello, world!',
  },
}
</script>

<style lang="scss">
</style>