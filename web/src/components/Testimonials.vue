<template>
  <section-block size="large" class="testimonial" v-if="data.edges">
    <div class="container container--narrow">
      <div style="width: 100%; height: 100%; position: relative">
        <ClientOnly>
          <VueSlickCarousel class="slider-container" v-bind="settings" v-if="data.edges.length > 0">
            <div class="slider-item" v-for="edge in data.edges" :key="edge.node.id">
              <div key="0" class="testimonial__rating">
                <icon name="star" />
                <icon name="star" />
                <icon name="star" />
                <icon name="star" />
                <icon name="star" />
              </div>
              <blockquote key="1" class="testimonial__quote">
                <block-content :blocks="edge.node._rawBody" />
              </blockquote>
              <aside key="2" class="testimonial__author" v-if="edge.node.clientName">
                <strong class="testimonial__name">{{ edge.node.clientName }}</strong
                ><span class="testimonial__role" v-html="edge.node.clientRole" />
              </aside>
            </div>
            <div slot="loading">loading...</div>
          </VueSlickCarousel>
        </ClientOnly>
      </div>
    </div>
  </section-block>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Icon from './Icon.vue'
import BlockContent from './BlockContent'
import SectionBlock from './SectionBlock.vue'

export default {
  name: 'Testimonials',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots slider-dots',
        edgeFriction: 0.35,
        infinite: true,
        adaptiveHeight: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      // options: {
      //   currentPage: 0,
      //   slidesToScroll: 1,
      //   itemAnimation: true,
      // },
    }
  },
  components: {
    VueSlickCarousel,
    Icon,
    SectionBlock,
    BlockContent,
    //   Slider: () =>
    //     import('vue-concise-slider')
    //       .then((m) => m.slider)
    //       .catch((err) => console.log(err)),
    //   SliderItem: () =>
    //     import('vue-concise-slider')
    //       .then((m) => m.slideritem && m.slideritem)
    //       .catch((err) => console.log(err)),
  },
}
</script>

<style lang="scss" scoped>
.testimonial {
  @include padding(6rem 1rem);
  background: var(--color-black);
  color: var(--color-white);
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
  @include heading-2;
  color: inherit;
  padding-left: 0;
  white-space: pre-wrap;
  margin-bottom: rfs(2rem);

  p {
    line-height: 1;
  }

  ::v-deep strong {
    color: inherit;
    @include outline-styles('dark');
  }
}

.testimonial__author {
  display: block;
}

.testimonial__name {
  @include body-m;
  font-weight: var(--font-weight-semibold);
  display: block;
  margin-bottom: 0.5rem;
}

.testimonial__role {
  @include body;
  display: block;
  opacity: 0.5;
}

.slider-item {
  transition: height 0.2s ease-in-out;
}

::v-deep .slick-dots {
  bottom: -48px;

  @include media('<=tablet') {
    bottom: -24px;
  }
}

::v-deep .slick-dots li {
  width: 32px;
  height: 32px;
  margin: 0;
}

::v-deep .slick-dots li button {
  width: 32px;
  height: 32px;
  padding: 2px;
}

::v-deep .slick-dots li.slick-active button:before {
  color: white;
}

::v-deep .slick-dots li button:before {
  font-size: 8px;
  width: 28px;
  height: 28px;
  color: rgba(255, 255, 255, 0.5);
}

::v-deep .slick-track {
  display: inline-flex;
  align-items: center;
}

.slider-container {
  position: unset;
}

.slider-item {
  flex-direction: column;
  white-space: pre-wrap;
}

// ::v-deep .swiper-container-horizontal > .slider-pagination-bullets {
//   bottom: -30px;
// }

// ::v-deep .swiper-container-horizontal > * > .slider-pagination-bullet {
//   background-color: var(--color-white);
// }

// .swiper-container {
//   overflow: hidden;
// }

.swiper-wrapper {
  display: flex;
  align-items: center;
}

// ::v-deep .slider-pagination {
//   position: relative;
//   padding-top: rfs(1rem);
// }
</style>