<template>
  <section-block variant="muted" size="large" class="multilist">
    <div class="container">
      <div class="multilist__heading">
        <h3 class="miltilist__title">Our Services</h3>
      </div>

      <div class="multilist__grid">
        <AnimTransitionGroup class="multilist__list" tag="ul" xyz="fade up ease-out-back stagger-1">
          <li class="multilist__item" v-for="(item, index) in services" :key="index">
            <h5 class="multilist__item-title">{{ item.title }}</h5>
            <AnimTransitionGroup
              class="multilist__item-list"
              tag="ul"
              xyz="fade up ease-out-back stagger-1"
            >
              <li
                class="multilist__item-list-item"
                v-for="(service, index) in item.body"
                :key="index"
              >
                {{ service }}
              </li>
            </AnimTransitionGroup>
          </li></AnimTransitionGroup
        >
      </div>
    </div>
  </section-block>
</template>

<script>
import AnimTransitionGroup from '../components/AnimTransitionGroup'
import SectionBlock from '../components/SectionBlock'
export default {
  components: { SectionBlock, AnimTransitionGroup },
  name: 'MultiListBlock',
  data() {
    return {
      services: [
        {
          title: 'Strategy',
          body: [
            'Research & Data',
            'Branding & Positioning',
            'Business Consulting',
            'Go To Market',
            'Innovation',
            'SEO / SEM',
          ],
        },
        {
          title: 'Strategy',
          body: [
            'Research & Data',
            'Branding & Positioning',
            'Business Consulting',
            'Go To Market',
            'Innovation',
            'SEO / SEM',
          ],
        },
        {
          title: 'Strategy',
          body: [
            'Research & Data',
            'Branding & Positioning',
            'Business Consulting',
            'Go To Market',
            'Innovation',
            'SEO / SEM',
          ],
        },
        {
          title: 'Strategy',
          body: [
            'Research & Data',
            'Branding & Positioning',
            'Business Consulting',
            'Go To Market',
            'Innovation',
            'SEO / SEM',
          ],
        },
        {
          title: 'Strategy',
          body: [
            'Research & Data',
            'Branding & Positioning',
            'Business Consulting',
            'Go To Market',
            'Innovation',
            'SEO / SEM',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.multilist__list {
  list-style: none;
  margin: rfs(6rem) 0 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.multilist__item-title {
  @include margin-bottom(1.5rem);
}
</style>