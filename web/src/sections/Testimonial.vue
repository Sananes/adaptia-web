<template>
  <div class="testimonial">
    <div class="container--narrow">
      <blockquote class="testimonial__quote">
        “Adaptia turned around our entire SEO strategy. We went from tens of thousands of negative
        backlinks and terrible Google stats to massive growth in our search rankings in only 3
        months. Hiring Adaptia was one of the best marketing decisions we ever made.”
      </blockquote>
      <aside class="testimonial__author">
        <strong class="testimonial__name">Spring Barnickle</strong
        ><span class="testimonial__role">CEO, JJ Virgin &amp; Associates</span>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
}
</script>

<style lang="scss" scoped>
.testimonial {
  @include inverse-white;
  @include padding(4rem 1rem);
  padding-left: var(--gutter-h);
  padding-right: var(--gutter-h);
  text-align: center;

  @include media('>desktop') {
    @include padding(8rem 1rem);
  }
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