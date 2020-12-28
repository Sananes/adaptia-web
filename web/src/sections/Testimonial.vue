<template>
  <div class="testimonial" v-if="data.edges">
    <div class="container--narrow">
      <ClientOnly
        ><div v-swiper:mySwiper="swiperOption" v-if="data.edges.length > 0" class="hp-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="edge in data.edges" :key="edge.node.id">
              <div class="testimonial__rating">
                <icon name="star" />
                <icon name="star" />
                <icon name="star" />
                <icon name="star" />
                <icon name="star" />
              </div>
              <blockquote class="testimonial__quote">
                <block-content :blocks="edge.node._rawBody" />
              </blockquote>
              <aside class="testimonial__author" v-if="edge.node.clientName">
                <strong class="testimonial__name">{{ edge.node.clientName }}</strong
                ><span class="testimonial__role" v-html="edge.node.clientRole" />
              </aside>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon.vue'
import BlockContent from '~/components/BlockContent'
export default {
  directives: !process.browser
    ? {}
    : {
        swiper: require('vue-awesome-swiper').directive,
      },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  components: {
    Icon,
    BlockContent,
  },
  name: 'Testimonial',
}
</script>

<style lang="scss" scoped>
.testimonial {
  @include inverse-white;
  @include padding(6rem 1rem);
  padding-left: var(--gutter-h);
  padding-right: var(--gutter-h);
  text-align: center;

  @include media('>desktop') {
    @include padding(8rem 1rem);
  }
}

.testimonial__rating {
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  margin-bottom: var(--gutter-h);
}

.testimonial__quote {
  font-size: var(--font-size-body);
  color: inherit;
  padding-left: 0;
  margin-bottom: rfs(2rem);

  @include media('>desktop') {
    font-size: var(--font-size-body-xl);
  }
}

.testimonial__author {
  display: block;
}

.testimonial__name {
  @include heading-5;
  display: block;
  margin-bottom: 0.5rem;
}

.testimonial__role {
  @include body-xxs;
  display: block;
  opacity: 0.5;
}

.swiper-container {
  overflow: hidden;
}

.swiper-pagination {
  --swiper-pagination-color: var(--color-black);
  margin-top: rfs(-1rem);
  padding-top: rfs(2rem);
  position: relative;
  display: block;
  bottom: 0;

  @include theme('dark') {
    --swiper-pagination-color: var(--color-white);
  }
}
</style>