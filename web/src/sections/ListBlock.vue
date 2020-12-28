<template>
  <section-block variant="muted" size="large">
    <div class="container">
      <div class="list-block__heading">
        <h2 class="list-block__title">
          {{ heading.title }}
        </h2>
      </div>

      <ul class="list-block__list" :class="gridColumnClasses" v-if="list && list.length > 0">
        <li class="list-block__item" v-for="node in list" :key="node.id">
          <h3 class="list-block__item-title">{{ node.title }}</h3>
          <p class="list-block__item-body">{{ node.body }}</p>
        </li>
      </ul>
    </div>
  </section-block>
</template>

<script>
import SectionBlock from '~/components/SectionBlock.vue'
export default {
  name: 'ListBlock',
  data() {
    return {
      heading: {
        title: 'What we do',
      },
      columns: 3,
      list: [
        {
          id: 1,
          title: 'Search Engine Optimization',
          body:
            'Our proven formula to quickly increase your organic traffic and revenue comes from over a decade of analyzing search engine trends and strategies.',
        },
        {
          id: 2,
          title: 'Ecommerce Development ',
          body:
            'Improve your current store or build your ecommerce presence from the ground up to create a seamless customer journey with optimal conversions.',
        },
        {
          id: 3,
          title: 'Paid Media Management',
          body:
            'Interested in establishing a new revenue stream? We will set up and optimize your paid traffic with ad campaigns that drive immediate visibility and profit.',
        },
        {
          id: 4,
          title: 'Social Platform Strategy',
          body:
            'Put your social media to work with our influencer activation campaign, designed to dial in your social strategy to support your SEO and ecommerce.',
        },
        {
          id: 5,
          title: 'Website Detox',
          body:
            'Let us remove unhealthy backlinks and eliminate common website speed and search engine functionality issues to make the most of your website.',
        },
        {
          id: 6,
          title: 'Influencer Marketing',
          body:
            'Create a custom influencer launch across social media platforms, industry websites, and ecommerce',
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

.list-block__title {
  color: inherit;
}

.list-block__list {
  display: grid;
  grid-gap: rfs(2rem);
  list-style: none;
  grid-row-gap: rfs(1rem);
  margin: 0;
  padding: 0;

  @include media('>tablet') {
    grid-row-gap: rfs(6rem);

    grid-template-columns: repeat(2, 1fr);
  }

  @include media('>desktop') {
    grid-template-columns: inherit;
  }
}

.three {
  @include media('>tablet') {
    grid-auto-flow: columns;
    grid-template-columns: repeat(2, 1fr);
  }

  @include media('>desktop') {
    grid-template-columns: repeat(3, 1fr);
  }
}

.two {
  @include media('>tablet') {
    grid-auto-flow: columns;
    grid-template-columns: repeat(2, 1fr);
  }
}

.list-block__item-title {
  @include body-m;
  color: inherit;
  font-weight: var(--font-weight-semibold);
  margin-bottom: rfs(1rem);

  @include media('>tablet') {
    @include body-l;
    font-weight: var(--font-weight-semibold);
  }
}

.list-block__item-body {
  color: var(--color-text-subdued);
  color: inherit;
}
</style>