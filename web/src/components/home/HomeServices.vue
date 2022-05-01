<template>
  <section-block variant="muted" size="large" class="multilist">
    <div class="container">
      <div class="multilist__heading">
        <h3 class="miltilist__title">Our Services</h3>
      </div>

      <div class="multilist__grid">
        <XyzTransitionGroup
          class="multilist__list"
          tag="ul"
          xyz="fade up ease-out-back stagger-1"
          appear-visible
        >
          <li class="multilist__item" v-for="(item, index) in services" :key="index">
            <h5 class="multilist__item-title">{{ item.title }}</h5>
            <XyzTransitionGroup
              class="multilist__item-list"
              tag="ul"
              xyz="fade up ease-out-back stagger-1"
              appear-visible
            >
              <li
                class="multilist__item-list-item"
                v-for="(service, index) in item.body"
                :key="index"
                appear-visible
              >
                {{ service }}
              </li>
            </XyzTransitionGroup>
          </li></XyzTransitionGroup
        >
      </div>
    </div>
  </section-block>
</template>

<script>
import SectionBlock from '../SectionBlock'
export default {
  components: { SectionBlock },
  name: 'HomeServices',
  data() {
    return {
      services: [
        {
          title: 'Marketing',
          body: [
            'Search Engine Optimization',
            'Paid Media Management',
            'Research & Data',
            'Business Consulting',
            'Go To Market Strategy',
            'Innovation'
          ]
        },
        {
          title: 'NFT',
          body: [
            ' NFT Market Strategy',
            'NFT Digital Marketing',
            'Crypto Endemic Publishers',
            'Generative Art',
            'Smart Contract Development',
            'Web3 Development'
          ]
        },
        {
          title: 'Strategy',
          body: [
            'User Research',
            'Market Research',
            'Positioning',
            'Archetype Build',
            'Customer Personas',
            'Naming',
            'Brand Voice Development',
            'Art Direction'
          ]
        },
        {
          title: 'Web Experience',
          body: [
            'Responsive Web Design',
            'Web Development',
            'App Design',
            'Shopify/Woo E-Commerce',
            'CMS Integration',
            'Social Media Design'
          ]
        },
        {
          title: 'Branding',
          body: [
            'Brand Identity',
            'Logo',
            'Packaging',
            'Illustration',
            'Iconography',
            'Copywriting',
            'Animation',
            'Photography'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.multilist__list {
  list-style: none;
  margin: rfs(6rem) 0 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
}

.multilist__item-list {
  list-style: none;
  padding: 0;
  margin-left: 0;
}

.multilist__item-title {
  @include body-l;
  font-weight: var(--font-weight-semibold);
  @include margin-bottom(1.5rem);
}
</style>
