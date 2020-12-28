<template>
  <div class="testimonial">
    <div class="container--narrow">
      <ClientOnly
        ><swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial__rating">
              <icon name="star" />
              <icon name="star" />
              <icon name="star" />
              <icon name="star" />
              <icon name="star" />
            </div>
            <blockquote class="testimonial__quote">{{ testimonial.text }}</blockquote>
            <aside class="testimonial__author" v-if="testimonial.name">
              <strong class="testimonial__name">{{ testimonial.name }}</strong
              ><span class="testimonial__role" v-html="testimonial.role" /></aside
          ></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon.vue'
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
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
  components: {
    Icon,
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