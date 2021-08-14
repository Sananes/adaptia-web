<template>
  <section-block class="list-block" variant="white" size="large">
    <div class="container">
      <div class="list-block__heading">
        <XyzTransition appear-visible appear xyz="fade up">
          <h2 class="list-block__title" v-html="heading.title"></h2>
        </XyzTransition>
      </div>

      <XyzTransitionGroup
        group
        tag="ul"
        appear-visible
        v-if="list && list.length > 0"
        class="list-block__list"
        xyz="fade up ease-out-back stagger-1"
        duration="auto"
      >
        <li class="list-block__item" v-for="node in list" :key="node.id">
          <h3 class="list-block__item-title">{{ node.title }}</h3>
          <p class="list-block__item-body">{{ node.body }}</p>
        </li>
      </XyzTransitionGroup>
    </div>
  </section-block>
</template>

<script>
import SectionBlock from '../SectionBlock'
export default {
  name: 'HomeListBlock',
  data() {
    return {
      heading: {
        title: '<span>What</span> we do',
      },
      isVisible: false,
      columns: 3,
      list: [
        {
          id: 1,
          title: 'Search Engine Optimization',
          body: 'Our proven formula to quickly increase your organic traffic and revenue comes from over a decade of analyzing search engine trends and strategies.',
        },
        {
          id: 2,
          title: 'Ecommerce Development ',
          body: 'Improve your current store or build your ecommerce presence from the ground up to create a seamless customer journey with optimal conversions.',
        },
        {
          id: 3,
          title: 'Branding & Design',
          body: 'We help you bring your ideas to life. Our creative team turns your inspiration and vision into compelling content and designs that match your brand.',
        },
        {
          id: 4,
          title: 'Social Platform Strategy',
          body: 'Put your social media to work with our influencer activation campaign, designed to dial in your social strategy to support your SEO and ecommerce.',
        },
        {
          id: 5,
          title: 'Website Detox',
          body: 'Let us remove unhealthy backlinks and eliminate common website speed and search engine functionality issues to make the most of your website.',
        },
        {
          id: 6,
          title: 'Influencer Marketing',
          body: 'Create a custom influencer launch across social media platforms, industry websites, and ecommerce',
        },
      ],
    }
  },
  computed: {
    gridColumnClasses() {
      return {
        three: this.columns === 3,
        two: this.columns === 2,
      }
    },
  },
  components: {
    SectionBlock,
  },
}
</script>

<style lang="scss" scoped>
.list-block__heading {
  display: block;
  margin-bottom: rfs(8rem);

  @include media('>tablet') {
    width: 50%;
  }
}
.list-block__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: rfs(2rem);
  list-style: none;
  grid-row-gap: rfs(1rem);
  margin: 0;
  padding: 0;

  @include media('>tablet') {
    grid-row-gap: rfs(6rem);
  }
}

.list-block__item-title {
  @include body-m;
  font-weight: var(--font-weight-semibold);
  margin-bottom: rfs(1rem);

  @include media('>tablet') {
    @include body-l;
    font-weight: var(--font-weight-semibold);
  }
}

.list-block__item-body {
  color: var(--color-text);
}
</style>