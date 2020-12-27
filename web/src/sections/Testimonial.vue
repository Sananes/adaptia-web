<template>
  <div class="testimonial">
    <div class="container--narrow">
      <carousel
        v-if="testimonials.length > 0"
        :per-page="1"
        :mouse-drag="true"
        @touchstart.native="onTouchStart"
        @touchend.native="onTouchEnd"
      >
        <slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial__rating">
            <icon name="star" />
            <icon name="star" />
            <icon name="star" />
            <icon name="star" />
            <icon name="star" />
          </div>
          <blockquote class="testimonial__quote">{{ testimonial.text}}</blockquote>
          <aside class="testimonial__author" v-if="testimonial.name">
            <strong class="testimonial__name">{{ testimonial.name }}</strong
            ><span class="testimonial__role" v-html="testimonial.role" />
          </aside></slide
        ></slide
        >
      </carousel>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  watch: {},
  data() {
    return {
      testimonials: [
        {
          text: `"Adaptia turned around our entire SEO strategy. We went from tens of thousands of
            negative backlinks and terrible Google stats to massive growth in our search rankings in
            only 3 months. Hiring Adaptia was one of the best marketing decisions we ever made."`,
          name: 'Spring Barnickle',
          role: 'CEO, JJ Virgin &amp; Associates',
        },
        {
          text: `"Adaptia turned around our entire SEO strategy. We went from tens of thousands of
            negative backlinks and terrible Google stats to massive growth in our search rankings in
            only 3 months. Hiring Adaptia was one of the best marketing decisions we ever made."`,
          name: 'Spring Barnickle',
          role: 'CEO, JJ Virgin & Associates',
        },
      ],
    }
  },
  methods: {
    onTouchStart(event) {
      document.querySelector('body').style.overflow = 'hidden'
    },
    onTouchEnd() {
      document.querySelector('body').style.overflow = 'auto'
    },
  },
  components: { Icon, Slide, Carousel },
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
  @include body-xl;
  color: inherit;
  padding-left: 0;
  margin-bottom: rfs(2rem);
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
</style>