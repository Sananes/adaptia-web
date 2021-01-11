<template>
  <section-block size="large" class="testimonial" v-if="data.edges">
    <div class="container container--narrow">
      <div style="width: 100%; height: 100%">
        <ClientOnly>
          <slider ref="slider" v-if="data.edges.length > 0" :options="options">
            <slideritem v-for="edge in data.edges" :key="edge.node.id">
              <AnimTransitionGroup class="swiper-slide" xyz="fade up stagger-2">
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
                  <strong class="testimonial__name">{{ edge.node.clientName }}</strong>
                  <p class="testimonial__role" v-html="edge.node.clientRole" />
                </aside>
              </AnimTransitionGroup>
            </slideritem>
            <!-- Set loading -->
            <div slot="loading">loading...</div>
          </slider>
        </ClientOnly>
      </div>
    </div>
  </section-block>
</template>

<script>
import Icon from '../components/Icon.vue'
import BlockContent from '~/components/BlockContent'
import SectionBlock from '../components/SectionBlock.vue'
import AnimTransition from '~/components/AnimTransition'
import AnimTransitionGroup from '~/components/AnimTransitionGroup'
export default {
  name: 'Testimonial',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      options: {
        pagination: true,
        thresholdDistance: 100, // Sliding distance threshold
        thresholdTime: 300, // Sliding time threshold decision
        grabCursor: true, // Scratch style
        speed: 300, // Sliding speed,
        preventDocumentMove: true,
      },
    }
  },
  components: {
    Icon,
    SectionBlock,
    BlockContent,
    AnimTransition,
    AnimTransitionGroup,
    Slider: () =>
      import('vue-concise-slider')
        .then((m) => m.slider)
        .catch(),
    Slideritem: () =>
      import('vue-concise-slider')
        .then((m) => m.slideritem && m.slideritem)
        .catch(),
  },
  mounted() {},
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
  white-space: pre-wrap;
  flex-direction: column;
}

// .swiper-container {
//   overflow: hidden;
// }

// .swiper-wrapper {
//   display: flex;
//   align-items: center;
// }

// .swiper-pagination {
//   --swiper-pagination-color: var(--color-black);
//   margin-top: rfs(-1rem);
//   padding-top: rfs(2rem);
//   position: relative;
//   display: block;
//   bottom: 0;

//   @include theme('dark') {
//     --swiper-pagination-color: var(--color-white);
//   }
// }
</style>